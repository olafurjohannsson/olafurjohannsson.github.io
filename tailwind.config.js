/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      'primary-blue': '#264653',
      'primary-green': '#2a9d8f',
      'primary-yellow': '#e9c46a',
      'primary-orange': '#f4a261',
      'primary-red': '#e76f51',
      'dark': 'rgb(30 29 32)',
      ...colors
    },
    extend: {
      animation: {
       'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}

