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
        // Vibrant pink/magenta color palette inspired by the image
        primary: {
          50: '#fef7ff',
          100: '#fceaff',
          200: '#f8d5fe',
          300: '#f2b4fc',
          400: '#ea84f8',
          500: '#dd54f0',
          600: '#c639d8',
          700: '#a729b8',
          800: '#8a2696',
          900: '#6d1e77',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Vibrant magenta/pink shades
        vibrant: {
          50: '#fef7ff',
          100: '#fceaff',
          200: '#f8d5fe',
          300: '#f2b4fc',
          400: '#ea84f8',
          500: '#dd54f0',
          600: '#c639d8',
          700: '#a729b8',
          800: '#8a2696',
          900: '#6d1e77',
        },
        // Soft complementary colors
        soft: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'gradient-vibrant': 'linear-gradient(135deg, #dd54f0 0%, #c639d8 50%, #a729b8 100%)',
        'gradient-soft': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
        'gradient-pink': 'linear-gradient(135deg, #fceaff 0%, #f8d5fe 50%, #f2b4fc 100%)',
        'gradient-hero': 'linear-gradient(135deg, #fef7ff 0%, #fceaff 25%, #f8d5fe  50%, #f2b4fc 75%, #ea84f8 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'vibrant': '0 20px 40px rgba(221, 84, 240, 0.3)',
        'soft': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(221, 84, 240, 0.4)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config