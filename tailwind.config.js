/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        a4h: '297mm',
        a4w: '210mm',
      },
    },
  },
  plugins: [require("daisyui")],
}