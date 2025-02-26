/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import { colors } from './src/data/constants/colors';
const fontSize = require("./src/data/constants/font_size");
import scrollbarHide from 'tailwind-scrollbar-hide';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontSize,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        headerMob: "104px",
        header: "126px",
      },
      screens: {
        desktopSm: { min: "1025px", max: "1220px" },
        laptop: { min: "769px", max: "1024px" },
        tablet: { min: "601px", max: "768px" },
        mobile: { max: "600px" },
        smallMobile: { max: "376px" },
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -30%) scale(0.85)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        tablet: "48px",
        laptop: "48px",
      },
      screens: {
        xl: "1024px",
        tablet: "100%",
        laptop: "100%",
      },
    },
  },
  plugins: [
    scrollbarHide,
    plugin(({ addComponents, theme }) => {
      addComponents({
        "@media (min-width: 601px) and (max-width: 768px)": {
          ".container": {
            paddingLeft: theme("spacing.12"),
            paddingRight: theme("spacing.12"),
          },
        },
        "@media (min-width: 769px) and (max-width: 1024px)": {
          ".container": {
            paddingLeft: theme("spacing.12"),
            paddingRight: theme("spacing.12"),
          },
        },
      });
    }),
  ],
};
export default config;
