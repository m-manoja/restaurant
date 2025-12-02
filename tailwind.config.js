/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants.ts",
    "./types.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1a1a1a',
          gold: '#c59d5f',
          cream: '#f8f5f2',
          gray: '#5a5a5a',
        },
      },
    },
  },
  plugins: [],
}
