/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('../public/Rectangle 2.png')"
      }
    },


    container: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [],
}