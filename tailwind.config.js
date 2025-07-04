/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFDD0',
        'gold': '#FFD700',
        'copper': '#B87333',
        'burnt-orange': '#CD7F32',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      backgroundImage: {
        'mystical-gradient': 'linear-gradient(135deg, #CD7F32, #FFD700, #B87333)',
      },
      boxShadow: {
        'mystical': '0 0 20px rgba(255, 215, 0, 0.3)',
        'copper-glow': '0 0 20px rgba(184, 115, 51, 0.3)',
      }
    },
  },
  plugins: [],
};