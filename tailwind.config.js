/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'script': ['"Dancing Script"', 'cursive'],
      },
      colors: {
        'brand': {
          'copper': '#C17D5B',
          'dark': '#1A1A1A',

        },
        'primary':{
          DEFAULT:'#b45309',


        },
        'secondary': {
          DEFAULT:"#2D1810",
        }
      }
    },
  },
  plugins: [],
}

