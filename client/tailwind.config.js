const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
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
  ],
};
