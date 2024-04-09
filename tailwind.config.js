/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ligth-blue": "#E8F1F5",
        "grey-blue": "#3F4344",
        "main-blue": "#4A96DC",
        "dark-blue": "#3F4344",
        "middle-blue": "#BBD5ED",
      },
    },
  },
  plugins: [],
};
