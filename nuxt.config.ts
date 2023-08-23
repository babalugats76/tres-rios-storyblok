// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: "tres-rios",
    rootTag: "body",
    head: {
      title: "Tres Ríos",
      meta: [
        {
          name: "description",
          content: "Concierge Learning is Here",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_SECRET,
        apiOptions: {
          region: "us",
        },
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
  // pageTransition: { name: "page", mode: "out-in" },
  typescript: {
    typeCheck: false,
  },
  debug: true,
});
