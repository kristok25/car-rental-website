/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        luxury: {
          gold: '#C9A962',
          charcoal: '#1a1a1a',
          cream: '#F5F0E6',
          dark: '#0d0d0d',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
