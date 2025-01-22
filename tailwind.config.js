/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "typewriter": "typewriter 2s steps(11) forwards",
        "caret": 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        "drop-in": 'dropIn .4s ease-in-out forwards var(--delay, 0)',
        "fly-in-down": 'flyInDown .4s ease-in-out forwards var(--delay, 0)',
        "fade-out-down": 'fadeOutDown .4s ease-in-out forwards var(--delay, 0)',
        "fade-in": 'fadeIn .4s ease-in-out forwards var(--delay, 0)',
        "fade-in-down": 'fadeInDown .8s ease-in-out forwards var(--delay, 0)',
        "fade-in-down2": 'fadeInDown .4s ease-in-out forwards var(--delay, 0)',
        "slide-in": "slideIn .4s ease-in-out forwards var(--delay, 0)",
        "slide-in2": "slideIn .3s ease-in-out forwards var(--delay, 0)",
        "slide-in-left": "slideInLeft .4s ease-in-out forwards var(--delay, 0)",
        "slide-out": 'slideOut .3s ease-in-out forwards var(--delay, 0)',
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
        fadeOutDown: {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translate3d(0, 100%, 0)",
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
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)"
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)"
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
        slideOut: {
            "0%": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                opacity: 0,
                transform: "translate3d(100%, 0, 0)",
            },
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
        typewriter: {
          to: {
            left: "100%" }
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
}