/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(122,124,255,1)',
      }
    },
  },
  plugins: [],
}

