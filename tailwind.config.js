/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zenkaku: ["Zen Kaku Gothic New"],
      },
      keyframes: {
        flowing: {
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
