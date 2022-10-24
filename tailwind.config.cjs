/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ './src/**/*.tsx' ],
    theme: {
      fontSize: {
        'sm' : 12,
        'md' : 14,
        'lg' : 16,
        'xl' : 25.59,
      },
      colors: {
        'purple': '#8284FA',
        'purple-dark': '#5E60CE',
        'blue' : '#4EA8DE',
        'blue-dark' : '#1E6F9F',
        'gray700' : '#0D0D0D',
        'gray600' : '#1A1A1A',
        'gray500' : '#262626',
        'gray400' : '#333333',
        'gray300' : '#808080',
        'gray100' : '#F2F2F2',
        'red-danger' : '#E25858',
        'gray200' : '#D9D9D9'
      },
      extend: {
        fontFamily: {
          sans: 'Roboto, sans-serif'
        },
        backgroundImage: {
          'capa': "url('assets/capa-img.jpg')",
        }
      },
    },
    plugins: [],
  }