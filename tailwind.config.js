import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, whimsical color palette
        primary: {
          50: '#fdf8f3',
          100: '#f7e6d3',
          200: '#f0cca7',
          300: '#e8b07b',
          400: '#e09555',
          500: '#d67b2f',
          600: '#c06629',
          700: '#9d5322',
          800: '#7a401c',
          900: '#4d2911',
        },
        secondary: {
          50: '#f7f5f1',
          100: '#eae5da',
          200: '#ddd5c3',
          300: '#cfc3a8',
          400: '#c0b38c',
          500: '#aea170',
          600: '#9c8f5e',
          700: '#817650',
          800: '#665e42',
          900: '#4a4531',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        warm: {
          50: '#fefcf7',
          100: '#fdf4e8',
          200: '#fae8d0',
          300: '#f6d9b3',
          400: '#f1c794',
          500: '#ecb375',
          600: '#e09c56',
          700: '#c8834a',
          800: '#a06b3c',
          900: '#7d532e',
        }
      },
      fontFamily: {
        'handwriting': ['Dancing Script', 'cursive'],
        'whimsy': ['Comfortaa', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #fdf4e8 0%, #f6d9b3 100%)',
        'gradient-whimsy': 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #fdf4e8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'dotted-pattern': 'radial-gradient(circle, #e8b07b 1px, transparent 1px)',
        'star-pattern': 'radial-gradient(circle, #c4b5fd 2px, transparent 2px)',
      },
      backgroundSize: {
        'dotted': '20px 20px',
        'star': '30px 30px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config