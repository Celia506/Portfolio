/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#F2D8B3',
        second:'#D9B788',
        trois:'#FFFEFC',
        quatre:'#FF9C1A',
        cinq:'#E80505',      
      }
    },fontFamily: {
      relaway: ['Raleway','serif'],
    },
  },
  plugins: [],
}