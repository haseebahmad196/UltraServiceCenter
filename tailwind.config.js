/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ultra-black': '#000000',
        'ultra-blue': '#003087',
        'ultra-yellow': '#FFC107',
      },
    },
  },
  plugins: [],
}