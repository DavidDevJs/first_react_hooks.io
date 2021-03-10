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
        blueDark: '#0D1013',
        blueDarkMedium: '#000B18',
        blueDarkLigth: '#002B56',
        orange: '#FF8A00',
        grayLigth: '#E9EBF3',
        blueOpacity: '#222931',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
