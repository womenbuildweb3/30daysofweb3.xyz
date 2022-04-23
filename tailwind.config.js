
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '975px',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      fontSize: {
        'lg': '1.25rem',
        '3xl': '2rem',
        '6xl': '4rem',
      },
      fontFamily: {
        "poppins-bold": ["Poppins Bold", ...defaultTheme.fontFamily.sans],
        "poppins-semi-bold": ["Poppins SemiBold", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};