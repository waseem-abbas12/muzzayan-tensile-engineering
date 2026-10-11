/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050A18',
          900: '#081026',
          850: '#0C1736',
          800: '#111F48',
          700: '#192C66',
          600: '#233C85',
        },
        obsidian: {
          950: '#03060E',
          900: '#070C1B',
          850: '#0B1226',
          800: '#101934',
        },
        gold: {
          300: '#FDE68A',
          400: '#FCD34D',
          500: '#D4AF37',
          600: '#C5A059',
          700: '#B8860B',
          800: '#926C15',
          900: '#684E0F',
        },
        steel: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Syne', 'Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        mono: ['Space Grotesk', 'Courier New', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-fast': 'marquee 22s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
