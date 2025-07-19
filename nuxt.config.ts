export default defineNuxtConfig( {
  compatibilityDate: '2024-04-03',

  devtools: {
    enabled: false
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  css: [
    '@/assets/css/main.css'
  ]
} )