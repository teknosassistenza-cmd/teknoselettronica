/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teknos: {
          blue: '#00AEEF',   // Azzurro Teknos (primario)
          deep: '#0B2740',   // Blu scuro circuito (sfondo)
          chip: '#7EE081',   // Verdino chip (accento)
          gray: '#6B7280'
        }
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}