const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "blue-900": "#012a4a",
      "blue-800": "#013a63",
      "blue-700": "#01497c",
      "blue-600": "#014f86",
      "blue-500": "#2a6f97",
      "blue-400": "#2c7da0",
      "blue-300": "#468faf",
      "blue-200": "#61a5c2",
      "blue-100": "#89c2d9",
      "blue-000": "#a9d6e5",
      "console-green": "#B1FF96",
      "console-yellow": "#FFDA7C",
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      gray: colors.gray,
    },
    fontFamily: {
      head: ["Montserrat", "sans-serif"],
      body: ['"Open Sans"', "sans-serif"],
      console: ['"Source Code Pro"', "monospace"],
    },
    extend: {
      flex: {
        half: "0.5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
