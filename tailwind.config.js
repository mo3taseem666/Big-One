/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}