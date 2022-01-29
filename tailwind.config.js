const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "primary-900": "#012a4a",
      "primary-800": "#013a63",
      "primary-700": "#01497c",
      "primary-600": "#014f86",
      "primary-500": "#2a6f97",
      "primary-400": "#2c7da0",
      "primary-300": "#468faf",
      "primary-200": "#61a5c2",
      "primary-100": "#89c2d9",
      "primary-000": "#a9d6e5",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
