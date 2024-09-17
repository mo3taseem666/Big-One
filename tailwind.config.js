/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      'cus': {'min': '10px', 'max': '1187px'},
      'cus2': {'min': '1188px', 'max': '1666px'},
      'cus3': {'min': '1667px', 'max': '5000px'}, 
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        r: '1px 0px 10px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: []
};
