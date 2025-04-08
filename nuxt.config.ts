import vueDevTools from "vite-plugin-vue-devtools";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxtjs/supabase",
  ],
  compatibilityDate: "2025-03-16",
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [vueDevTools()],
  },
  future: {
    compatibilityVersion: 4,
  },
});