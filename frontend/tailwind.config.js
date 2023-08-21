/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
  },
  variants : {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
