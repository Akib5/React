/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002228",
        secondary: "#0FF1F6",
        foreground: "#ffffff",
      },
      fontFamily: { Montserrat    : '"Montserrat", sans-serif;' },
     
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

