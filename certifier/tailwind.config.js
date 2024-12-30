/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "blue":"#2f3589",
        "yellow":"#fffc01",
        "middle":"#eaf1ff"
      },
      animation: {
        "bounce-slow": "bounce 5s infinite",
      }
    },
  },
  plugins: [],
}

