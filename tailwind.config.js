/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2563EB',
          600: '#1D4ED8',
          DEFAULT: '#2563EB',
        },

        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          300: '#CBD5E1',
          500: '#64748B',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },

        borderColor: '#E2E8F0',
        bgColor: '#F5F7FB',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },

      borderRadius: {
        'figma-sm': '4px',
        'figma-md': '8px',
        'figma-lg': '16px',
      },
    },
  },

  plugins: [],
}