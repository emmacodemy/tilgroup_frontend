/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      width: {
        maxcontainer: "130rem",
      },
      colors: {
        tilgray: {
          50: "#232323",
          100: "#A3A3A3",
          200: "#282727",
          300: "#A8A8A8",
          400: "#D9D9D9",
          500: "#161515",
          600: "#D7D7D7",
          border: "#B7B7B7",
          background: "rgba(0, 0, 0, 0.05)",
          lightGray: "rgba(0, 0, 0, 0.15)",
          dark: "#000000",
          darker: "#3b3b3b",
          overlay: "rgba(0, 0, 0, 0.55)",
        },
        tilblue: {
          light: "#00AFEF",
          lighter: "#E2EFF5",
          bg: "#F2FAFE",
        },
      },
      boxShadow: {
        remitise: "0 0 4px 0 rgb(0 0 0 / 12%)",
      },
    },
  },
  plugins: [],
};
