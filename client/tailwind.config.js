/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      customYellow: "#ffc017",
    },
    fontFamily: {
      notoSerif: ["Noto Serif", "serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },

  plugins: [],
};
