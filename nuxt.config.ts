// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  /* Модули */
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-anime',
    '@pinia/nuxt'
  ],


  content: {
    // Здесь можно добавить дополнительные настройки модуля, например:
    // highlight: {
    //   theme: 'github-dark'
    // }
  },

  /* Tailwind config module */
  tailwindcss: {
    
  },

  /* Anime.js config module */
  anime: {
    provide: true,
    composables: true
  }
})