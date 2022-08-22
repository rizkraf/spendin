const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PlusJakartaSans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          500: "#7C5CFC",
        },
        secondary: {
          200: "#C3D4E9",
          300: "#90A3BF",
          400: "#596780",
          500: "#1A202C",
          700: "#0D121F",
        },
      },
    },
  },
  plugins: [],
};
