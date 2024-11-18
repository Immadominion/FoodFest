/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'food-primary': '#FF6F61',
        'food-secondary': '#FFA07A'
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        ptSansNarrow: ['"PT Sans Narrow"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}