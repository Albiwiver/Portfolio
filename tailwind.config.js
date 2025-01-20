/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          'primary': '#222831',
          'secondary':'#00ADB5',
          'tertiary': '#EEEEEE',
          'quaternary':'#393E46',
      },
      textColor: {
          'primary': '#222831',
          'secondary': '#00ADB5',
          'tertiary': '#EEEEEE',
          'quaternary':'#393E46',
      },
      fontFamily: {
          sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'doodle-items': "url('/src/assets/img/doodle-items.svg')"
        
      },
      backgroundSize: {
        'size-section-recent-works': '514px',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

    }
  },
  plugins: []   
}

