/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f2f7ff",
          100: "#e6efff",
          600: "#5b6bff",
          700: "#3c49e5",
          900: "#131736"
        }
      }
    },
  },
  plugins: [],
};
