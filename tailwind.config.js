/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [({
    input : {
      maxWidth : '20px',
    },
  })],
}

