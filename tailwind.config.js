/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      
      fontFamily: {
        eczar: ['Eczar', 'serif'],
        patrick: ['"Patrick Hand"', 'cursive'],
        worksans: ['"Work Sans"', 'sans-serif'],
      },
      colors: {
      coffee: '#594F43',
    },
    animation: {
        magnify: 'magnify 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}