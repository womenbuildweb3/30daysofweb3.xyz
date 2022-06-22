const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Sora', ...defaultTheme.fontFamily.sans],
        'body': ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'royal': {
          50: '#ede7fd',
          100: '#d0c4fa',
          200: '#b09cf8',
          300: '#8d73f7',
          400: '#6e53f5',
          500: '#4733f2',
          600: '#352feb',
          700: '#0627e2',
          800: '#0022dd',
          900: '#0015d6',
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
