/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "drop-in": 'dropIn 0.5s ease-in-out forwards var(--delay, 0)',
        "fly-in-down": 'flyInDown 0.6s ease-in-out forwards var(--delay, 0)',
        "fade-in": 'fadeIn 1s ease-in-out forwards var(--delay, 0)',
        "slide-in": "slideIn .5s ease-in-out forwards var(--delay, 0)",
        "slide-in-left": "slideInLeft .5s ease-in-out forwards var(--delay, 0)"
      },
      keyframes: {
        dropIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
            animationTimingFunction: "cubic-bezier(0.34, 1.61, 0.7, 1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        flyInDown: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -1500px, 0)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(0, 25px, 0)"
          },
          "75%": {
            transform: "translate3d(0, -10px, 0)"
          },
          "90%": {
            transform: "translate3d(0, 5px, 0)"
          },
          "100%": {
            transform: "none",
            opacity: 1
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1
          },
        },
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)"
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)"
          }
        },
        slideInLeft: {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
}