/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transBrown: 'rgba(242, 180, 80, 0.9)',
        brightYellow: '#e3b505',
        darkBrown: '#bb9457',
        yellow: 'rgb(242, 180, 80)',
        brown: '#382923',
        black: '#191919',
        grey: '#a9b2ac',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
