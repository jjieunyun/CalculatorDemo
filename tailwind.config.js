/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };


module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_2000,
      minHeight: px0_2000,
      maxWidth: px0_2000,
      maxHeight: px0_2000,
      spacing: px0_200,
      borderRadius: px0_100,
      width: px0_2000,
      height: px0_2000,
      inset: px0_2000,
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'sendy-blue-strong': '#192fa4',
        'sendyBlue': '#2e58ec',
        'sendy-blue-light': '#e3eeff',
        'sendy-blue-500': '#377cf8',
        'correct': '#1db964',
        'white': '#ffffff',
        'lightGrey': '#dedede',
        'background-gray-light': '#f2f3f6',
        'background-gray-lightest': '#fafbfc',
        'gray-scale-blue-100': '#161820',
        'gray-scale-blue-200': '#485464',
        'gray-scale-blue-300': '#8a929e',
        'gray-scale-blue-400': '#c3c9ce',
        'gray-scale-blue-500': '#e4e8ed',
      },
    },
  },
  plugins: [],
}