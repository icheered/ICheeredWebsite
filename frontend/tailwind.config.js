const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [`./app/**/*.{js,ts,hbs}`],
  theme: {
    extend: {
      colors: {
        bgwhite: '#F1F1F1',
      },
      fontFamily: {
        body: ['Manrope'],
      },
      transitionProperty: {
        height: 'height',
      },
      keyframes: {
        slide: {
          from: { top: '-18rem' },
          to: { top: '0rem' },
        },
      },
      animation: {
        slide: 'slide 3s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover', 'opacity'],
    },
  },
  plugins: [],
};
