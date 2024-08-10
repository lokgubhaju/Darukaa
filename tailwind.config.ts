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
        20: '20px'
      }
    },
  },
  plugins: [],
};
export default config;
