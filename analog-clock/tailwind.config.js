/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
        '120': '120deg',
        '150': '150deg'
      }
    },
  },
  plugins: [],
}

