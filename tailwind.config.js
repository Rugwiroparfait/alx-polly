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
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#002c57',
        },
        cyan: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#12aed8',
          600: '#0d8bb0',
          700: '#0f9bc4',
          800: '#0e7490',
          900: '#134e4a',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#04da87',
          600: '#03c575',
          700: '#16a34a',
          800: '#15803d',
          900: '#14532d',
        },
      },
      fontFamily: {
        'heading': ['Poppins', 'Montserrat', 'sans-serif'],
        'body': ['Inter', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'title': '0.04em',
        'body': '0.01em',
      },
      borderRadius: {
        'brand': '12px',
        'brand-lg': '20px',
      },
      boxShadow: {
        'card': '0 6px 20px rgba(0,0,0,0.10)',
      },
      spacing: {
        'unit': '8px',
      },
    },
  },
  plugins: [],
}
