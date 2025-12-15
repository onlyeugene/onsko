// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "v-gsap-nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],
  googleFonts: {
    families: {
      Manrope: [100, 200, 300,400, 500, 600, 700],
      Poppins: [100, 200, 300, 400, 500, 600, 700],
      Merriweather: [100, 200, 300, 400,500, 600, 700],
    },
  },
});