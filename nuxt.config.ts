/**
 * This file belongs to the Nuxt 3 Nodemailer Example.
 * It is meant to show how to send server-side emails
 * via SMTP using the Nodemailer module and Nuxt 3.
 * Comments allow to follow every step of the development;
 * for a version without comments, check out the "uncommented"
 * branch of the repository listed below.
 *
 * @author     Kolja Nolte <https://www.kolja-nolte.com>
 * @license    MIT
 * @copyright  2025 by Kolja Nolte
 * @see        {@link https://github.com/thaikolja/nuxt-3-nodemailer-example}
 */

/**
 * Defines the Nuxt configuration for your application.
 *
 * `defineNuxtConfig` is a helper function that provides type-safety
 * and auto-completion for your configuration. It doesn't change the
 * behavior of your app but enhances the developer experience.
 *
 * @see {@link https://nuxt.com/docs/api/configuration/nuxt-config}
 */
export default defineNuxtConfig( {
  /*
   * Sets a specific date for Nuxt to ensure compatibility with future versions.
   * This helps prevent breaking changes when Nuxt updates its internal APIs.
   * You can read more about this at https://nuxt.com/docs/api/configuration/nuxt-config#compatibilitydate
   */
  compatibilityDate: '2024-04-03',

  /* Disables the Nuxt DevTools, a browser extension that provides debugging information.
   * For this example, we keep it simple and disable it.
   */
  devtools: {
    enabled: false
  },

  // Our active modules
  modules: [
    '@nuxt/eslint', // Makes sure the formatting adheres to best practices
    '@nuxtjs/tailwindcss', // Tailwind CSS, because we want at least a *little* styling
    '@nuxt/icon' // Icons complete our minimalistic UI
  ],

  // Our active CSS files
  css: [
    '@/assets/css/main.css' // The only CSS file, used for global styling
  ]
} )
