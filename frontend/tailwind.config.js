/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32',
          light: '#66BB6A',
          dark: '#1B5E20',
          soft: '#F4FFF4',
        },
        secondary: {
          DEFAULT: '#66BB6A',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(46, 125, 50, 0.1)',
      }
    },
  },
  plugins: [],
}
