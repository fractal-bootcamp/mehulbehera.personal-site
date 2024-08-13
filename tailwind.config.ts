import type { Config } from "tailwindcss";
import animations from "./node_modules/@midudev/tailwind-animations";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
        fadeinbouncedown: "fade-in-bouncedown 1s ease-in-out 0.25s 1",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
        "fade-in-bouncedown": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0%, -100%, 0)",
          },
          "33%": {
            opacity: "0.5",
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: "0.7",
            transform: "translate3d(0%, -20%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [require("daisyui"), require("tailwindcss-animate"), animations],
} satisfies Config;
