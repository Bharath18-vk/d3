/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F4F0E8',
          light: '#FAF8F5',
          dark: '#EAE4D8',
        },
        limestone: {
          DEFAULT: '#E5DED2',
          light: '#EDE7DD',
          dark: '#D8CFC1',
        },
        espresso: {
          DEFAULT: '#25221F',
          dark: '#181614',
          light: '#2E2B27',
        },
        charcoal: {
          DEFAULT: '#302F2C',
          light: '#42413D',
          dark: '#242321',
        },
        bronze: {
          DEFAULT: '#9B8060',
          light: '#B69B7B',
          dark: '#7D654A',
          subtle: 'rgba(155, 128, 96, 0.15)',
        },
        warmGray: {
          100: '#EFECE6',
          200: '#E3DFD7',
          400: '#9E9990',
          500: '#7A756D',
          700: '#4D4943',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widestPlus: '0.25em',
        luxury: '0.18em',
      },
      lineHeight: {
        editorial: '1.15',
        relaxedEditorial: '1.25',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
