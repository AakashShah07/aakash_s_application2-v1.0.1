module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: { 50: "#f7f9fc", 900: "#0c111c" },
        indigo: { 50: "#e8eaf2" },
        colors: "#e8eaf2ff",
        blue: { A700: "#195be5" },
        blue_gray: { 600: "#4f6696" },
      },
      fontFamily: { lexend: "Lexend" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
