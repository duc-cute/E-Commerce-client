/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      width: {
        main: "1220px",
      },
      backgroundColor: {
        main: "#ee3131",
        overlay: "rgba(0,0,0,0.3)",
      },
      colors: {
        main: "#ee3131",
        heading: "#151515",
      },
      textColor: {
        title: "#505050",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
      animation: {
        "slide-top": "slide-top 1s ease",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            "-webkit-transform": "translateY(80px)",
            transform: " translateY(80px) ",
            opacity: "0",
          },
          "100%": {
            " -webkit-transform": "translateY(0)",
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
