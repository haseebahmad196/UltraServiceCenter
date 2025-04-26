/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ultra-yellow': '#FFC107',
        'ultra-black': '#000000',
        'ultra-blue': '#0284C7',
      },
    },
  },
  plugins: [],
};