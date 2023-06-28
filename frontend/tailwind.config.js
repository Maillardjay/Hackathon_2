/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      dark_blue: "#002743",
      light_blue: "#00ACB0",
      gray: "#EBEBEB",
      yellow: "#F8C20D",
      rose: "#E62460",
      text_color: "#002743",
    },
    fontFamily: {
      sans: ["Barlow"],
    },
    extend: {},
  },
  plugins: [],
};
