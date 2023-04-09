/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        blueGradient: "#8e9dfe",
        gray: "#757575",
        darkGray: "#474747",
        mediumDarkGray: "#A3A3A3",
        veryLightGray: "#DCDCDC	",
        lightGray: "#D3D3D3",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1001af",

          accent: "#c6f7a5",

          neutral: "#171A1C",

          "base-100": "#EFECF4",

          info: "#87B7DE",

          success: "#1B7940",

          warning: "#EB961E",

          error: "#F02464",
        },
      },
    ],
  },
};
