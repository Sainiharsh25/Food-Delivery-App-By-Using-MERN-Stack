/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "green" : "#39DB4A",
        "red"  : "#FF6868",
        "secondary" : "#555",
        "primaryBG" : "3FCFCFC"
      }
    },
  },
  plugins: [require('daisyui')],
}

