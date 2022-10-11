const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        '500':'500px',
        '450' : '450px',
        '550' : '550px',
        ...defaultTheme.height
      },
      colors:{
        primary: '#EA2B5A',
        secondary :"#f1f7fe",
        ...defaultTheme.colors
      }
    },
    fontSize : {
      'mdLarge' : '16px',
      ...defaultTheme.fontSize
    }
    
  },
  plugins: [],
}