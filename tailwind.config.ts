import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        btc: {
          azul:            '#0B12CC',
          'azul-deep':     '#07099A',
          magenta:         '#E8197A',
          'magenta-dark':  '#C1135F',
          vermelho:        '#CC1A1A',
          laranja:         '#FF6A00',
          roxo:            '#5B0FAA',
          lima:            '#CCFF00',
          branco:          '#FFFFFF',
          preto:           '#050508',
        },
      },
      fontFamily: {
        neocrash: ['Neocrash', 'Bebas Neue', 'sans-serif'],
        mono:     ['Space Mono', 'Geist Mono', 'monospace'],
        sans:     ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 14vw, 12rem)', { lineHeight: '0.88', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(3rem, 10vw, 8rem)',  { lineHeight: '0.9',  letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 6vw, 5rem)',   { lineHeight: '1',    letterSpacing: '0.02em'  }],
        'display-sm': ['clamp(1.5rem, 4vw, 3rem)', { lineHeight: '1.1',  letterSpacing: '0.02em'  }],
      },
      boxShadow: {
        'glow-magenta': '0 0 30px rgba(232, 25, 122, 0.5), 0 0 60px rgba(232, 25, 122, 0.2)',
        'glow-laranja': '0 0 30px rgba(255, 106, 0, 0.5),  0 0 60px rgba(255, 106, 0, 0.2)',
        'glow-lima':    '0 0 20px rgba(204, 255, 0, 0.4),  0 0 40px rgba(204, 255, 0, 0.15)',
        'glow-azul':    '0 0 40px rgba(11, 18, 204, 0.6)',
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(ellipse 80% 60% at 60% 40%, rgba(91, 15, 170, 0.3) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 20% 80%, rgba(255, 106, 0, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 40% 50% at 90% 20%, rgba(232, 25, 122, 0.12) 0%, transparent 50%)
        `,
        'section-gradient': 'linear-gradient(180deg, #0B12CC 0%, #07099A 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'scan-line':  'scanLine 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        scanLine: {
          from: { transform: 'translateY(-100%)' },
          to:   { transform: 'translateY(100vh)' },
        },
      },
      borderRadius: {
        tag: '2px',
      },
    },
  },
  plugins: [
    // @ts-ignore
    function({ addUtilities }) {
      addUtilities({
        '.text-glow-magenta': {
          textShadow: '0 0 20px rgba(232, 25, 122, 0.8), 0 0 40px rgba(232, 25, 122, 0.4)',
        },
        '.text-glow-laranja': {
          textShadow: '0 0 20px rgba(255, 106, 0, 0.8), 0 0 40px rgba(255, 106, 0, 0.4)',
        },
        '.text-glow-lima': {
          textShadow: '0 0 15px rgba(204, 255, 0, 0.7)',
        },
        '.text-outline': {
          '-webkit-text-stroke': '2px currentColor',
          color: 'transparent',
        },
        '.font-neocrash-upper': {
          fontFamily: 'Neocrash, "Bebas Neue", sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
        },
        '.mix-blend-screen': {
          mixBlendMode: 'screen',
        },
      })
    },
  ],
}

export default config
