/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ligth-blue": "#E8F1F5",
        "grey-blue": "#3F4344",
        "main-blue": "#4A96DC",
        "dark-blue": "#0C344B",
        "middle-blue": "#BBD5ED",
        "bg-blue": "#DDE5E7",
      },
      fontFamily: {
        theBoldFont: ["TheBoldFont", "sans-serif"],
        inspiration: ["Inspiration", "sans-serif"],
      },
    },
  },
  plugins: [],
};
