const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ["Comfortaa", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: {
        light: "#00C0B6",
        dark: "#015050",
      },
      gray: {
        darkest: "#000000",
        dark: "#2c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
    extend: {
      spacing: {
        buttonwidth: "190px",
        buttonheight: "50px",
      },
    },
  },
};
