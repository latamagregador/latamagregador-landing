/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0b1020",     // fondo
        ink: "#0e1428",       // panels/variaciones
        gold: "#d8b34a",      // acentos
        gold2: "#f0d37a",
        smoke: "#a2a9c3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,.35)"
      }
    },
  },
  plugins: [],
};
