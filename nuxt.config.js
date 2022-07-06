import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  plugins: ["~/plugins/index.js"],
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["~/assets/main.scss"],
  },
});
