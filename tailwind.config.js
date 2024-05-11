/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dancing': ['Dancing Script', 'cursive'],
      'space': ['Space Grotesk', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}