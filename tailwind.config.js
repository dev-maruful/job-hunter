/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1001af",

          secondary: "#d15786",

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
