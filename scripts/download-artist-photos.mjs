// scripts/download-artist-photos.mjs
// Baixa fotos de perfil do Instagram via Apify Instagram Profile Scraper
// Salva em /public/artistas/{slug}-perfil.jpg
// Atualiza data/artistas.ts com fotoPerfil para as que funcionaram
//
// Uso: APIFY_TOKEN=seu_token node scripts/download-artist-photos.mjs

import { writeFileSync, existsSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const PUBLIC = join(ROOT, 'public', 'artistas')
const DATA_FILE = join(ROOT, 'data', 'artistas.ts')

const APIFY_TOKEN = process.env.APIFY_TOKEN
if (!APIFY_TOKEN) {
  console.error('❌ Defina APIFY_TOKEN=seu_token antes de rodar o script')
  process.exit(1)
}

const ACTOR = 'apify~instagram-profile-scraper'
const BASE = 'https://api.apify.com/v2'

// ── 1. Extrai artistas com instagram do .ts ──────────────────────────────────
const src = await readFile(DATA_FILE, 'utf-8')

// Extrai pares slug/handle percorrendo bloco a bloco
const blockRe = /\{\s*\n([\s\S]*?)(?=\n\s*\},\s*\n\s*\{|\n\s*\]\s*$)/g
const artists = []
for (const [, block] of src.matchAll(blockRe)) {
  const slugM = block.match(/slug:\s*'([^']+)'/)
  const igM = block.match(/instagram:\s*'@?([^']+)'/)
  if (slugM && igM) artists.push({ slug: slugM[1], handle: igM[1] })
}

// Filtra os que já têm foto de perfil local
const pending = artists.filter(({ slug }) => !existsSync(join(PUBLIC, `${slug}-perfil.jpg`)))

console.log(`📋 ${artists.length} artistas com Instagram | ${pending.length} sem foto local\n`)
if (pending.length === 0) { console.log('✅ Todos já têm foto de perfil!'); process.exit(0) }

const usernames = pending.map(({ handle }) => handle)

// ── 2. Inicia run no Apify ───────────────────────────────────────────────────
console.log(`� Iniciando Apify run para ${usernames.length} perfis...`)
const runRes = await fetch(`${BASE}/acts/${ACTOR}/runs?token=${APIFY_TOKEN}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ usernames }),
})
if (!runRes.ok) {
  console.error('❌ Erro ao iniciar run:', await runRes.text())
  process.exit(1)
}
const { data: runData } = await runRes.json()
const runId = runData.id
const datasetId = runData.defaultDatasetId
console.log(`   runId: ${runId}\n`)

// ── 3. Aguarda conclusão (polling) ────────────────────────────────────────────
process.stdout.write('⏳ Aguardando conclusão')
let status = 'RUNNING'
while (status === 'RUNNING' || status === 'READY' || status === 'CREATED') {
  await new Promise(r => setTimeout(r, 5000))
  const s = await fetch(`${BASE}/acts/${ACTOR}/runs/${runId}?token=${APIFY_TOKEN}`)
  const { data } = await s.json()
  status = data.status
  process.stdout.write('.')
}
console.log(` ${status}\n`)

if (status !== 'SUCCEEDED') {
  console.error(`❌ Run terminou com status: ${status}`)
  process.exit(1)
}

// ── 4. Busca resultados do dataset ───────────────────────────────────────────
const itemsRes = await fetch(`${BASE}/datasets/${datasetId}/items?token=${APIFY_TOKEN}&clean=true`)
const items = await itemsRes.json()
console.log(`� ${items.length} perfis retornados pelo Apify\n`)

// Mapeia username → profilePicUrl
const picByHandle = {}
for (const item of items) {
  const handle = (item.username ?? '').toLowerCase()
  const url = item.profilePicUrlHD ?? item.profilePicUrl
  if (handle && url) picByHandle[handle] = url
}

// ── 5. Baixa fotos e salva ────────────────────────────────────────────────────
const saved = []

// Primeiro, marca os que já existiam como salvos
for (const { slug } of artists) {
  if (existsSync(join(PUBLIC, `${slug}-perfil.jpg`))) saved.push(slug)
}

for (const { slug, handle } of pending) {
  const url = picByHandle[handle.toLowerCase()]
  if (!url) { console.log(`⚠️  ${slug} (@${handle}): não encontrado no resultado`); continue }

  process.stdout.write(`⬇️  ${slug} (@${handle})... `)
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    writeFileSync(join(PUBLIC, `${slug}-perfil.jpg`), buf)
    saved.push(slug)
    console.log(`✅ (${(buf.length / 1024).toFixed(0)} KB)`)
  } catch (e) {
    console.log(`❌ erro: ${e.message}`)
  }
}

// ── 6. Atualiza artistas.ts com fotoPerfil ────────────────────────────────────
let out = src
let updated = 0

for (const slug of saved) {
  const blockMatch = out.match(new RegExp(`slug:\\s*'${slug}'([\\s\\S]*?)(?=\\n\\s*\\{|\\n\\s*\\])`))
  if (!blockMatch || blockMatch[1].includes('fotoPerfil')) continue

  const insertRe = new RegExp(`(slug:\\s*'${slug}'[\\s\\S]*?)(\\n\\s*instagram:)`)
  const newOut = out.replace(insertRe, `$1\n    fotoPerfil: '/artistas/${slug}-perfil.jpg',$2`)
  if (newOut !== out) { out = newOut; updated++ }
}

if (updated > 0) {
  await writeFile(DATA_FILE, out)
  console.log(`\n✍️  artistas.ts: ${updated} fotoPerfil inseridos`)
} else {
  console.log('\nℹ️  artistas.ts: nenhuma alteração necessária')
}

console.log(`\n🎉 Concluído: ${saved.length}/${artists.length} fotos no total`)
