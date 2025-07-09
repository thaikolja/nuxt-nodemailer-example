<!--
  - This file belongs to the Nuxt 3 Nodemailer Example.
  - It is meant to show how to send server-side emails
  - via SMTP using the Nodemailer module and Nuxt 3.
  - Comments allow to follow every step of the development;
  - for a version without comments, check out the "uncommented"
  - branch of the repository listed below.
  -
  - @author     Kolja Nolte <https://www.kolja-nolte.com>
  - @license    MIT
  - @copyright  2025 by Kolja Nolte
  - @see        {@link https://github.com/thaikolja/nuxt-3-nodemailer-example}
  -->

<script lang="ts" setup>
  /**
   * @file pages/index.vue
   * @description This file represents the main page of the application, accessible at the
   * root URL ('/'). It acts as a structural container, assembling the primary user
   * interface by composing the <AppHeader />, <AppForm />, and <AppFooter /> components.
   *
   * As a purely presentational component, it contains no JavaScript logic.
   */
</script>

<template>
  <!-- The root element for the page, styled to occupy the full viewport height. -->
  <main class="h-screen">
    <!-- A flex container to center the main content card both vertically and horizontally. -->
    <div class="flex items-center justify-center h-full">
      <!-- The main content card, which holds all visible UI elements. -->
      <div class="max-w-2xl w-full bg-neutral-800">
        <!-- Renders the application's header section. -->
        <AppHeader />

        <!-- The main content area of the card, wrapping the form. -->
        <div class="p-6">
          <!-- Renders the primary interactive element: the contact form. -->
          <AppForm />
        </div>

        <!-- Renders the application's footer section. -->
        <AppFooter />
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
  /**
   * No specific styles are needed in this file. All styling is handled by:
   * 1. Global styles in /assets/css/main.css.
   * 2. Tailwind CSS utility classes applied directly in the template.
   * 3. Scoped styles within the child components themselves.
   */
</style>
