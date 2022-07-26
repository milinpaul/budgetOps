/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./co/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6d71fa',
          accent: '#53c1fa',
          text: '#262848',
          bg: '#eeeff8'
        }
      }
    },
  },
  plugins: [],
}
