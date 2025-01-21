/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#F2D8B3',
        second:'#D9B788',
        trois:'#FFFEFC',
      }
    },fontFamily: {
      relaway: ['Raleway','serif'],
    },
  },
  plugins: [],
}