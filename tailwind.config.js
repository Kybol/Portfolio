/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      'white': '#ffffff',
      'grey':{
        100: '#D9D9D9',
        300: '#7F7D87',
        800: '#1C1B1F'
      },
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [
  ],
}