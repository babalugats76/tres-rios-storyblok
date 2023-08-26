// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: 'tres-rios',
    rootTag: 'body',
    head: {
      title: 'Tres Ríos',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Sen:wght@400;500;600;700;800&family=Sora:wght@300;400;500;600;700;800&display=swa',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'Concierge Learning is Here',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_SECRET,
        apiOptions: {
          region: 'us',
        },
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  // pageTransition: { name: "page", mode: "out-in" },
  typescript: {
    typeCheck: false,
  },
  debug: true,
});
