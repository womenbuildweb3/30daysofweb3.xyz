
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ["Work Sans", ...defaultTheme.fontFamily.sans],
        
      },
      colors: {
       
        primary: {
          DEFAULT: "#ffce4e",
        },
        secondary: {
          DEFAULT: "#3d2942",
        },
        secondaryText: {
          DEFAULT: "#d06763",
        },

      },
    },
  },
  variants: {},
  plugins: [],
};