/** @type {import('tailwindcss').Config} */
import { primaryColor } from "./src/data";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nova: ["Nova-Slim", "sans-serif"],
        madimi: ["Madimi One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: primaryColor,
      },
    },
  },
  plugins: [],
};
