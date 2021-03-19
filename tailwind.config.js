module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      play: ['Play', 'sans-serif'],
      bebas: ['Bebas Neue', 'cursive'],
    },
    extend: {
      colors: {
        dark: {
          100: '#F5F7FA',
          200: '#3E4C59',
          300: '#1F2933',
          400: '#609E2F',
        },
        light: {
          100: '#B0BEC5',
          200: '#020421',
          300: '#F5F7FA',
          400: '#FF8A00',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
