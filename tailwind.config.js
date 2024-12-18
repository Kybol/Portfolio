/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white': '#ffffff',
      'grey':{
        100: '#999999',
        800: '#1C1B1F'
      },
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
}