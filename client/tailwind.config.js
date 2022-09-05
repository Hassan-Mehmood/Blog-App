/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      customYellow: "#ffc017",
      white: "#fff",
      red: "red",
      light: "rgba(0,0,0,0.1)",
      black: "rgba(0,0,0)",
      black700: "rgba(0,0,0,0.7)",
      blue700: "rgb(29 78 216)",
      blue: "0000FF",
    },
    fontFamily: {
      notoSerif: ["Noto Serif", "serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: "480px",
      md: "700px",
      lg: "1024px",
    },

    extend: {},
  },

  plugins: [],
};
