/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './dist/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        'movie-card': '300px',
        'movie-card-opened': '600px'
      },
      height: {
        'movie-card': '450px'
      },
      colors: {
        primary: '#0023ff',
        secondary: '#0080ff'
      }
    }
  },
  plugins: []
};
