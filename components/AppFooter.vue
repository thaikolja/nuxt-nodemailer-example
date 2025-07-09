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
   * @file /components/AppFooter.vue
   * @description Renders the application's footer. This component provides external
   * links to the project's source code on GitLab and GitHub, as well as an
   * internal link to view the README file.
   *
   * It leverages the <NuxtLink> component for client-side navigation and the
   * <Icon> component for clear visual cues. No component-specific logic is required.
   */
</script>

<template>
  <!-- The semantic footer element, using Flexbox to distribute links evenly. -->
  <footer class="flex justify-between items-center p-6 text-xs text-neutral-500">
    <!-- Link to the GitLab repository. `target="_blank"` opens it in a new tab. -->
    <NuxtLink to="https://gitlab.com/thaikolja/nuxt-nodemailer" target="_blank" title="View source code on GitLab" class="has-icon">
      <Icon name="mdi:gitlab" size="20" />
      <span>Code on GitLab</span>
    </NuxtLink>

    <!-- Link to the README page. In this app, it links to the root. -->
    <NuxtLink to="/" title="View README.md" class="has-icon">
      <Icon name="mdi:paper-outline" size="20" />
      <!-- The <code> tag provides a monospaced font style for the filename. -->
      <span>View <code>README.md</code></span>
    </NuxtLink>

    <!-- Link to the GitHub repository. `target="_blank"` opens it in a new tab. -->
    <NuxtLink to="https://github.com/thaikolja/nuxt-nodemailer" target="_blank" title="View source code on GitHub" class="has-icon">
      <Icon name="mdi:github" size="20" />
      <span>Code on GitHub</span>
    </NuxtLink>
  </footer>
</template>

<style lang="postcss" scoped>
  /*
   * A utility class to create a consistent layout for links that contain an icon and text.
   * It uses Tailwind's @apply directive to compose utility classes.
   */
  .has-icon {
    @apply flex items-center gap-1 transition-colors hover:text-neutral-300;
  }
</style>
