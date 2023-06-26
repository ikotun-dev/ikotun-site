/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      spacing: {
        '17' : '4.43rem',
        '100' : '56rem'
      },

      fontFamily :{
		'pop' : ['Poppins', 'sans-serif'],
    'philosopher' : ['Philosopher', 'sans-serif']
	},
  fontWeight: {
    bold: '600', // Add the bold variant
  },
  height:{
    '100' : '35rem',
    '11' : '2.75rem',
    '27' : '8rem',
    '120' : '80rem',
    '200' : '180rem'
  },
  width:{
    '100' : '28rem',
    '120' : '75rem',
    '115' : '60rem',
    '86' : '23rem',
    '11' : '2.7rem',
    '70' : '23.5rem',
    '97' : '25.3rem',
    '110' : '73rem'
  }, 
  screens: {
    'sm': '390px',  // Target iPhone 5 screen size and smaller
    'md': '375px',  // Target iPhone 6/7/8 screen size and smaller
    'lg': '768px',  // Target iPhone 6/7/8 Plus screen size and smaller
  },

	},
  },
  plugins: [],
}

