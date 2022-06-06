const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      screens: {
        md: "975px",
      },
      maxWidth: {
        "2xl": "40rem",
      },
      fontSize: {
        lg: "1.25rem",
        "3xl": "2rem",
        "6xl": "4rem",
      },
      fontFamily: {
        "poppins-bold": ["Poppins Bold", ...defaultTheme.fontFamily.sans],
        "poppins-semi-bold": [
          "Poppins SemiBold",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
