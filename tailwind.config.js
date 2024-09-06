// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "buttonGreen": "#0FE14A",
        "DarkBlue": "#000A14",
      },
      backgroundImage: {
        "productHeroBg": "linear-gradient(90deg, #000A14 24%, #003D7A 82.5%)",
      }
    },
  },
  plugins: [flowbite.plugin()],
};
