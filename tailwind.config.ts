import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        "md-max": { max: "767px" },
        md: "768px",
        "lg-max": { max: "1023px" },
        lg: "1024px",
        lg2: "1200px",
        xxl: "1792px",
        "2/5": "40vh"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: "#d8d2c6",
      },
      borderRadius: {
        20: "20px",
      },
      fontSize: {
        pretitle: "20px",
        h1: "40px",
        "h1-md-max": "32px",
        "body-copy": "20px",
        "body-copy-md-max": "16px",
      },
      // keyframes: {
      //   'open-menu': {
      //     '0%': {transform: 'scaleY(0)'},
      //     '80%': {transform: 'scaleY(01.2)'},
      //     '100%': {transform: 'scaleY(1)'},
      //   },
      // },
      // animation: {
      //   'open-menu': 'open.menu 0.5s ease-in-out forwards',
      // }
    },
  },
  plugins: [],
};
export default config;
