/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "strong-cyan-300": "#67e1c9",
        "strong-cyan-500": "#22bfa7",
        "strong-cyan-700": "#166f64",
        "light-blue-300": "#9cacff",
        "light-blue-500": "#6161ff",
        "light-blue-700": "#3b2ad8",
        "dark-grayish-blue": "hsl(210, 10%, 33%)",
        "grayish-blue": "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        body: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
