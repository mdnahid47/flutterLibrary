/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      colors:{
        primaryColor: "#111111",
        bgColor: "#FFFFFF",
        textSecondary:"#989898",
        secondary:"#F0F0F0",
      },
      fontFamily:{
        Poppins:["Poppins"," sans-serif"],
        Roboto :["Roboto"," sans-serif"],
      }
    },
  },
  plugins: [],
}
