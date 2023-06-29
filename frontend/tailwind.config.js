/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      dark_blue: "#002743",
      light_blue: "#00ACB0",
      gray: "#EBEBEB",
      yellow: "#F8C20D",
      rose: "#E62460",
      text_color: "#002743",
      cyan: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
    },
    fontFamily: {
      sans: ["Barlow"],
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
  darkMode: "class",
};
