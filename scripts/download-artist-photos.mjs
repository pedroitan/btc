// scripts/download-artist-photos.mjs
// Baixa fotos de perfil do Instagram via unavatar.io
// Ignora o smile padrão · Salva em /public/artistas/{slug}-perfil.jpg
// Atualiza data/artistas.ts com fotoPerfil para as que funcionaram

import { createHash } from 'node:crypto'
import { writeFileSync, existsSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT      = join(__dirname, '..')
const PUBLIC    = join(ROOT, 'public', 'artistas')
const DATA_FILE = join(ROOT, 'data', 'artistas.ts')

const md5 = (buf) => createHash('md5').update(buf).digest('hex')

async function fetchBuf(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; btc-script/1.0)' },
    })
    if (!res.ok) return null
    return Buffer.from(await res.arrayBuffer())
  } catch {
    return null
  }
}

// ── 1. Pega hash do smile padrão ─────────────────────────────────────────────
console.log('🔍 Detectando hash do smile padrão...')
const smileBuf = await fetchBuf('https://unavatar.io/instagram/btc2026_handle_nonexistent_xyzw99')
if (!smileBuf) { console.error('❌ Sem conexão com unavatar.io'); process.exit(1) }
const SMILE_HASH = md5(smileBuf)
console.log(`   hash smile: ${SMILE_HASH}\n`)

// ── 2. Extrai artistas com instagram do .ts ──────────────────────────────────
const src = await readFile(DATA_FILE, 'utf-8')

const artistRegex = /slug:\s*'([^']+)'[\s\S]*?instagram:\s*'@?([^']+)'/g
const artists = []
for (const m of src.matchAll(artistRegex)) {
  artists.push({ slug: m[1], handle: m[2] })
}
console.log(`📋 ${artists.length} artistas com Instagram encontrados\n`)

// ── 3. Download e validação ───────────────────────────────────────────────────
const saved = []

for (const { slug, handle } of artists) {
  const outPath = join(PUBLIC, `${slug}-perfil.jpg`)

  if (existsSync(outPath)) {
    console.log(`⏭  ${slug}: arquivo já existe — mantendo`)
    saved.push(slug)
    continue
  }

  process.stdout.write(`⬇️  ${slug} (@${handle})... `)
  const buf = await fetchBuf(`https://unavatar.io/instagram/${handle}`)

  if (!buf)              { console.log('erro ao baixar');   continue }
  if (md5(buf) === SMILE_HASH) { console.log('smile → ignorado'); continue }

  writeFileSync(outPath, buf)
  saved.push(slug)
  console.log(`✅ salvo (${(buf.length / 1024).toFixed(0)} KB)`)
}

// ── 4. Atualiza artistas.ts com fotoPerfil ────────────────────────────────────
let out = src
let updated = 0

for (const slug of saved) {
  // Pula se já tem fotoPerfil dentro do bloco deste slug
  const blockRe = new RegExp(`slug:\\s*'${slug}'([\\s\\S]*?)(?=\\n\\s*\\{\\s*\\n\\s*slug:|\\n\\]\\s*$)`)
  const block = src.match(blockRe)?.[1] ?? ''
  if (block.includes('fotoPerfil')) continue

  // Insere fotoPerfil antes de instagram
  const insertRe = new RegExp(`(slug:\\s*'${slug}'[\\s\\S]*?)(\\n\\s*instagram:)`)
  const newOut = out.replace(
    insertRe,
    `$1\n    fotoPerfil: '/artistas/${slug}-perfil.jpg',$2`,
  )
  if (newOut !== out) { out = newOut; updated++ }
}

if (updated > 0) {
  await writeFile(DATA_FILE, out)
  console.log(`\n✍️  artistas.ts: ${updated} fotoPerfil inseridos`)
} else {
  console.log('\nℹ️  artistas.ts: nenhuma alteração necessária')
}

console.log(`\n🎉 Concluído: ${saved.length}/${artists.length} fotos válidas`)
