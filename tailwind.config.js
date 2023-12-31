/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'beige': '#D4CBC4',
      'dustypink': '#DCC6C6',
      'maroon': '#75484B',
      'offblack':'#3A353A',
      'white': '#ffffff',
      'grey': '#808080',
    },
    extend: {
      fontFamily: {
        'main': ['Shadows Into Light Two', 'cursive'],
        'body': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

