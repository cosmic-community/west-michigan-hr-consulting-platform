/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm olive/brown color palette inspired by the screenshot
        'warm-olive': {
          50: '#f8f7f4',
          100: '#ede9db',
          200: '#ddd4bb',
          300: '#c8b892',
          400: '#b8a072',
          500: '#9d8456', // Primary olive tone
          600: '#8a6f47',
          700: '#725a3c',
          800: '#5e4c35',
          900: '#4f3f2e',
        },
        'warm-brown': {
          50: '#faf8f5',
          100: '#f2ebe1',
          200: '#e6d4c1',
          300: '#d4b896',
          400: '#c19969',
          500: '#a67c52', // Complementary brown
          600: '#946640',
          700: '#7a5236',
          800: '#664431',
          900: '#553a2b',
        },
        'cream': {
          50: '#fefdfb',
          100: '#fdf9f1',
          200: '#faf0e1',
          300: '#f5e4c8',
          400: '#eed5a8',
          500: '#e4c285',
          600: '#d4a762',
          700: '#b8884a',
          800: '#956d3e',
          900: '#785936',
        },
        // Keep vibrant colors for accents
        'vibrant': {
          400: '#dd54f0',
          500: '#c639d8',
          600: '#a729b8',
        },
        // Professional grays
        'secondary': {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-sm': ['3.5rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}