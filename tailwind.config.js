/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    screens: {
      desktop: { max: "1344px" },
      tabletLanscape: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      tablet: { max: "944px" },
      // => @media (max-width: 1023px) { ... }

      tabletSmall: { max: "704px" },
      // => @media (max-width: 767px) { ... }

      mobile: { max: "544px" },
      // => @media (max-width: 639px) { ... }
    },
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
        navoverlay: "rgba(255, 255, 255, 0.97)",
        tilblue: {
          light: "#00AFEF",
          lighter: "#E2EFF5",
          bg: "#F2FAFE",
        },
        tilgreen: {
          50: "#31C35A",
        },
      },
    },
  },
  plugins: [],
};
