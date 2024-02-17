import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation : {
        geser : 'geser 800ms ease-in-out ',
        geserbutton : 'geserbutton 800ms ease-in-out',
      },
      keyframes : {
        geser : {
          '0%' : { transform : 'translateY(-15rem)' },
          '100%' : { transform : 'translateY(0)'},
        },
        geserbutton : {
          '0%' : { transform : 'translateY(0)' },
          '100%' : { transform : 'translateY(15)'},
        },
      },
    },
  },
  plugins: [],
};
export default config;
