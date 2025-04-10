import vueDevTools from "vite-plugin-vue-devtools";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/supabase",
  ],
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [vueDevTools()],
    define: {
      // fix for near-api-js global error
      global: "globalThis",
    },
    optimizeDeps: {
      include: ["buffer"],
    },
    resolve: {
      alias: {
        buffer: "buffer/",
      },
    },
    build: {
      commonjsOptions: {
        esmExternals: true,
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  // Register the NEAR plugin
  plugins: [{ src: "~/plugins/near.client.js", mode: "client", ssr: false }],

  compatibilityDate: "2025-04-09",
});
