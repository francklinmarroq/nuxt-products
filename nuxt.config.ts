// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head:{
      title: 'Nuxt Products',
      meta: [
        {name: 'description', content: 'An application made with Nuxt 3 that displays a list of products and a description of each of them.'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'}
      ]
    }
  },
  runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY
  }

})
