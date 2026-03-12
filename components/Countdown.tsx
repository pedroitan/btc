'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  dias: number
  horas: number
  min: number
  seg: number
  ended: boolean
}

function calcTimeLeft(): TimeLeft {
  const festival = new Date('2026-03-26T18:00:00-03:00').getTime()
  const diff = festival - Date.now()
  if (diff <= 0) return { dias: 0, horas: 0, min: 0, seg: 0, ended: true }
  return {
    dias:  Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    min:   Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seg:   Math.floor((diff % (1000 * 60)) / 1000),
    ended: false,
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(calcTimeLeft())
    const id = setInterval(() => setTime(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  if (time.ended) {
    return (
      <div className="font-mono text-[0.75rem] tracking-[0.18em] uppercase text-btc-lima">
        O festival começou!
      </div>
    )
  }

  const units = [
    { value: time.dias,  label: 'Dias'  },
    { value: time.horas, label: 'Horas' },
    { value: time.min,   label: 'Min'   },
    { value: time.seg,   label: 'Seg'   },
  ]

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-white/35 hidden sm:block">
        Faltam
      </span>
      <div className="flex items-center gap-2">
        {units.map(({ value, label }, i) => (
          <div key={label} className="flex items-center gap-2">
            <div className="text-center">
              <span className="block font-mono text-3xl leading-none text-btc-magenta tabular-nums">
                {pad(value)}
              </span>
              <span className="block font-mono text-[0.6rem] tracking-[0.15em] uppercase text-white/35 mt-0.5">
                {label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="font-mono text-xl text-white/20 mb-3">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
