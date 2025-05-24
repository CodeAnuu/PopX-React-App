/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "popx-gradient":
          "linear-gradient(to bottom right, #e0e7ff, #f3e8ff, #fbcfe8)",
        "gradient-purple": "linear-gradient(-45deg, #a855f7, #c084fc, #a855f7)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out both",
        gradient: "gradient 5s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        200: "200% 200%",
      },
    },
  },
  plugins: [],
};
