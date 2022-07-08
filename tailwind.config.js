/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        // sans:["Yekan"],
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class" ,
    }),
  ],
}