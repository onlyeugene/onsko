/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#AE3A00",
        secondary: "#E1F861",
        dark: "#2D5142",
        light: "#A0C8ff",
      },
    },
  },
  plugins: [],
};
