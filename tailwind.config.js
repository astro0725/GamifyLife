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
  daisyui: {
    themes: ["light", "dark", "synthwave"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

