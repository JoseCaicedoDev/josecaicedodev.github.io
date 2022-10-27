/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif;",
      },
      backgroundImage: {
        'fondo-dark': "url('/src/assets/fondoDark.jpg')",
        'fondo-light': "url('/src/assets/hero.jpg')",
        'fondo-line': "url('/src/assets/line.svg')",
      },
    },
  },
  plugins: [],
}
