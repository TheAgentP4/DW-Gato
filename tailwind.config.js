import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.vue"
  ],  
  theme: {
    colors: {
      'inherit': 'inherit',
      'white': {
        'DEFAULT': '#FFFFFF',
        'blue': '#DBE8ED',
        'ice': '#A8BFC9',
      },
      'black': {
        'DEFAULT': '#000000',
        'blue': '#1A2A33',
        'ice': '#1F3641',
      },
      'blue': {
        'DEFAULT': '#1A2A33',
        'light': '#65E9E4',
        'dark': '#31C3BD',
      },
      'yellow': {
        'DEFAULT': '#FFD700',
        'light': '#FFC860',
        'dark': '#F2B137',
      },      
    },
    extend: {
      fontFamily: {
        custom: ['Outfit', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

