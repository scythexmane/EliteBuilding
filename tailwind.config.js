/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Tinos", serif],
      },
      animation: {
        'pulse-slow': 'pulse 6s infinite',
      },
      colors: {
      gold: '#caa65b',
    },
    },
  },
  plugins: [],
}
