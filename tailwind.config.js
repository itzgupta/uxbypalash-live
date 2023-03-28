/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   colchange: {
      //     '0%': {color: '#000000'},
      //     '20%': {color: '#6E44FF'},
      //     '40%': {color: '#57CC99'},
      //     '60%': {color: '#F7A828'},
      //     '80%': {color: '#FF0A54'},
      //   },
      // },

      animation: {
        'colorchange': 'colchange 4s infinite' ,
      }
    },
  },
  plugins: [],
}
