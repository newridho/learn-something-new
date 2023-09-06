/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        'fadeInDown': {
          '0%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'fadeInLeft': {
          '0%': { opacity: '0', transform: 'translate3d(-100%, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'fadeInRight': {
          '0%': { opacity: '0', transform: 'translate3d(100%, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'fadeInUp': {
          '0%': { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },

      },
      animation: {
        'fadeInDown': 'fadeInDown 3s ease-in both',
        'fadeInUp': 'fadeInUp 3s ease-in both',
        'fadeInLeft': 'fadeInLeft 3s ease-in both',
        'fadeInRight': 'fadeInRight 3s ease-in both',
      },
      transitionDelay: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      }
    },
  },
  darkMode: ['class'],
  plugins: [],
}

