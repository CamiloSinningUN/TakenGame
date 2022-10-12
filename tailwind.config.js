/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/scripts/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Fredoka: ["Fredoka", "sans-serif"],
        Fredoka_One: ["Fredoka One", "sans-serif"],
      },
    },
    plugins: [],
  }
}
