/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette istituzionale: blu medico, bianco, verde acqua.
        // DEFAULT/dark/light mantenuti per compatibilità con lo scaffold iniziale.
        'medical-blue': {
          50: '#EEF5FB',
          100: '#D7E8F5',
          200: '#B2D1EA',
          300: '#82B3DB',
          400: '#3D85C6',
          500: '#0B5394',
          600: '#0A4A83',
          700: '#073763',
          800: '#0A2A4A',
          900: '#071D33',
          DEFAULT: '#0B5394',
          dark: '#073763',
          light: '#3D85C6',
        },
        'aqua-accent': {
          50: '#ECFDF9',
          100: '#D1FAF0',
          200: '#7ED9C7',
          300: '#5CCDB8',
          400: '#2FBFA4',
          500: '#22A08A',
          600: '#1B8071',
          DEFAULT: '#2FBFA4',
          light: '#7ED9C7',
        },
        'neutral-bg': '#FFFFFF',
        'neutral-soft': '#F4F8FB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
