/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        '#8A33FD':'#8A33FD',
        '#807D7E':'#807D7E',
        '#F6F6F6':'#F6F6F6',
        '#2A2F2F':'#2A2F2F',
        '#3C4242':'#3C4242'
      }
    },
  },
  plugins: [],
}

