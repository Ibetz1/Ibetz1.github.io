/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "#ede9fe"
          }  
        }
      },
      animation: {
        typing: "typing 2.5s steps(15) alternate, blink 1s infinite"
      }
    },
  },
  plugins: [],
}

