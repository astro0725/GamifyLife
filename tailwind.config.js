/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/partials/*.handlebars", "./views/*.handlebars"],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"'],
      },
    },
  },
  plugins: [require("daisyui")],
}

