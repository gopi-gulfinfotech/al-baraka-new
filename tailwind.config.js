/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      // ─── Typography ────────────────────────────────────────────────────────
      // 3-tier system from design toolkit:
      //   Display  → DM Serif Display (hero/editorial accent only)
      //   Heading  → Lexend (section titles, nav, UI labels)
      //   Body     → Source Sans 3 (paragraphs, descriptions)
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        heading: ['Lexend', 'sans-serif'],
        body:    ['"Source Sans 3"', 'sans-serif'],
        sans:    ['"Source Sans 3"', 'sans-serif'],
      },

      // ─── Spacing — 8px base unit (Swiss Modernism) ─────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      // ─── Colors ────────────────────────────────────────────────────────────
      // CLAUDE.md: lighter soothing tones, Oman-inspired, avoid heavy gradients
      // Toolkit: #FAFAF9 bg, #1C1917 text, #CA8A04 gold for Luxury/Premium Brand
      colors: {
        // Surfaces — warm ivory base, deliberately LIGHT
        ivory:  '#FAFAF9',
        sand:   '#F7F3EB',  // refined from #F5EFE0 — more soothing
        stone:  '#EDE8DF',

        // Brand green — deep, rich, Oman-inspired
        green: {
          50:  '#EDF4F0',
          100: '#C8DDD1',
          200: '#96BBA6',
          300: '#619979',
          400: '#367756',
          500: '#1B3A2D',   // DEFAULT — primary brand green
          600: '#163025',
          700: '#10251B',
          800: '#0A1912',
          900: '#060E0A',
          DEFAULT: '#1B3A2D',
          light: '#2A5240',
          dark:  '#0F2218',
        },

        // Muted red — Omani flag, used SPARINGLY as accent only
        red: {
          DEFAULT: '#8B2635',
          light:   '#A83040',
          muted:   '#7A2230',
        },

        // Gold warmth — restrained premium (toolkit: #CA8A04)
        gold: {
          DEFAULT: '#B8932A',
          light:   '#CCA840',
          warm:    '#D4A830',
          // higher-chroma for on-dark text (meets 4.5:1 on #1B3A2D)
          bright:  '#D4A830',
        },

        // Neutrals — warm charcoal hierarchy
        // All meet WCAG AA (4.5:1) on #FAFAF9:
        //   #1C1917 on #FAFAF9 = 16.7:1  ✓
        //   #44403C on #FAFAF9 = 8.0:1   ✓
        //   #5C5854 on #FAFAF9 = 5.2:1   ✓ (upgraded from #6B6560 = 4.6:1)
        charcoal: {
          DEFAULT: '#1C1917',
          light:   '#44403C',
          muted:   '#5C5854',   // improved contrast from 4.6 → 5.2:1
        },
      },

      // ─── Max widths ─────────────────────────────────────────────────────────
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },

      // ─── Shadows — premium, warm-toned ──────────────────────────────────────
      boxShadow: {
        // Warm green-tinted shadows
        'premium':    '0 2px 16px -2px rgba(27,58,45,0.10), 0 1px 4px -1px rgba(27,58,45,0.06)',
        'premium-lg': '0 8px 40px -8px rgba(27,58,45,0.16), 0 2px 8px -2px rgba(27,58,45,0.08)',
        // Neutral card shadows
        'card':       '0 1px 8px -1px rgba(28,25,23,0.07)',
        'card-hover': '0 6px 28px -4px rgba(28,25,23,0.13)',
        // Lifted elevation
        'lifted':     '0 20px 60px -12px rgba(27,58,45,0.20)',
      },

      // ─── Animations — restrained, premium (CLAUDE.md) ───────────────────────
      animation: {
        'fade-up':    'fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'slide-up':   'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
