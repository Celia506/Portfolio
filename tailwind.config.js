/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        zero:'#FDF5ED',
        primary: '#F5E0C6',        
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