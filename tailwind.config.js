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
        general: "#288782",
        hero: "#062828",
        transparentbg: "#a8e0dd",
      },
      gray: {
        headerbg: '#eff4f7',
        darkest: '#000000',
        dark: '#2c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
        graddark: '#001010',
        gradlight: '#878888',
      },
    },
    extend: {
      spacing: {
        buttonwidth: "190px",
        secondarybuttonwidth: "50%",
        heroimgwidth:"512px",
        heroimgheight:"351.672px",
        buttonheight: "50px",
        secondarybuttonheight: "40px",
        navbary: "22px",
        navbarx: "80px",
        headcontentmargin: "40px",
        headcontentleftmargin: "29px",
        iconcontentrightmargin: "25px",
        lasticoncontentrightmargin: "40px",
        iconmarginleft: "120px",
      },
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }
  },
};
