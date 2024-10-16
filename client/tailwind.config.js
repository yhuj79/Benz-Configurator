// Tailwind Css 커스텀 설정
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-gray": "#181818",
        "dark-gray": "#2F2F2F",
        "md-gray": "#444444",
        "head-line": "#F8F8F7",
        "desc": "#D9D9D9",
      },
      keyframes: {
        appearZoom: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        appearDown: {
          "0%": { opacity: 0, transform: "translateY(-30%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        appearNormal: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearLeft: {
          "0%": { opacity: 0, transform: "translateX(15%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        appearZoom: "appearZoom 1s ease-in-out",
        appearDown: "appearDown 0.7s ease-in-out forwards",
        appearNormal: "appearNormal 1s ease-in-out forwards",
        appearLeft: "appearLeft 0.3s ease-in-out forwards",
        slideInLeft: "slideInLeft 0.3s ease-out forwards",
        slideRight: "slideRight 0.3s ease-out forwards",
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 3px rgba(0, 0, 0)",
        },
        ".text-shadow-sm": {
          textShadow: "1px 1px 1px rgba(0, 0, 0)",
        },
        ".text-shadow-md": {
          textShadow: "3px 3px 5px rgba(0, 0, 0)",
        },
        ".text-shadow-lg": {
          textShadow: "10px 10px 15px rgba(0, 0, 0)",
        },
        ".text-shadow-xl": {
          textShadow: "20px 20px 25px rgba(0, 0, 0)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
    plugin(function ({ addUtilities }) {
      const delayUtilities = {
        ".delay-0\\.6s": {
          animationDelay: "0.6s",
        },
        ".delay-0\\.9s": {
          animationDelay: "0.9s",
        },
        ".delay-1\\.2s": {
          animationDelay: "1.2s",
        },
        ".delay-1\\.5s": {
          animationDelay: "1.5s",
        },
      };
      addUtilities(delayUtilities, ["responsive", "hover"]);
    }),
  ],
};
