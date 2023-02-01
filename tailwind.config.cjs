const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightgrey: "hsl(217, 12%, 63%)",
        mediumgrey: "hsl(216, 12%, 54%)",
        lighterblue: '#22252a',
        darkblue: "hsl(213, 19%, 18%)",
        darkerblue: "#181e27",
        verydarkblue: "hsl(216, 12%, 8%)",
      },
      fontSize: {
        default: "15px",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) =>
      addVariant("checked", '&[data-state="checked"]')
    ),
  ],
};
