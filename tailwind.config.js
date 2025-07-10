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
      fontFamily: {
        // Option 1: Inter (Recommended)
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        
        // Option 2: If you want Poppins instead, replace the line above with:
        // 'sans': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        
        // Option 3: If you want to keep monospace (JetBrains Mono), add:
        // 'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
        
        // You can also create custom font classes:
        // 'display': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // 'body': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
       'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}