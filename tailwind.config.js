/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        
      },
    },
    screens: {
      'xs': '314px',
      ...defaultTheme.screens
    }
  },
  varients: { margin: ['responsive', 'hover', 'focus'], },
  plugins: [],
}

