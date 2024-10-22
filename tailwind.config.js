// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        buttonGreen: "#0FE14A",
        DarkBlue: "#000A14",
        DarkBlue900: "#011428",
        primaryBlue: "#0364CB",
        blue700: "#0D4989",
        blue800: "#012750",
        blue900: "#0364CB",
        blue950: "#0C345F",
      },
      backgroundImage: {
        productHeroBg: "linear-gradient(90deg, #000A14 24%, #003D7A 82.5%)",
      },
      animation: {
        spislow: "transform 0.3s ease-in-out",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
