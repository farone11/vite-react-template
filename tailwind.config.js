/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff', 100: '#e0e8ff', 200: '#c7d2fe', 300: '#a4b8fc',
          400: '#8093f8', 500: '#5a6ff2', 600: '#4650e6', 700: '#3a40cb',
          800: '#1e2a5e', 900: '#0f1629', 950: '#080c18',
        },
        gold: {
          50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
          400: '#fbbf24', 500: '#d4a012', 600: '#b8860b', 700: '#92400e',
          800: '#78350f', 900: '#5c2d0e',
        },
        accent: { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a' },
        success: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d' },
        error: { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337' },
        coffee: { 50: '#faf7f5', 100: '#f5efe9', 200: '#e8ddd0', 300: '#d4c4b0', 400: '#bca486', 500: '#a38566', 600: '#8b6f54', 700: '#6b5442', 800: '#4a3829', 900: '#2d1f15', 950: '#1a120a' },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};