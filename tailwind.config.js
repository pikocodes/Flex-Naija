
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: '',
        accentOne: '',
        accentTwo: '',
      },
      fontFamily: {},
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
