// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  plugins: [
    {
      src: "~/plugins/pocketbase.client",
      mode: "client",
    },
  ],
  devtools: { enabled: true },
});
