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
      },
      height: {
        '1/8' : '12.5%',
        '2/8' : '25%',
        '3/8' : '37.5%',
        '4/8' : '50%',
        '5/8' : '62.5%',
        '6/8' : '75%',
        '7/8' : '87.5%',
        '8/8' : '100%',
      }
    },
  },
  plugins: [],
}

