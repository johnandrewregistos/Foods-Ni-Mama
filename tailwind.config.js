/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    colors: {
      mainColor: '#f8b21a',
      white: '#fefefe',
      black: '#000',
      red: '#fd0202',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        main: "url('https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=600')",
      },
    },
  },
  plugins: [],
}