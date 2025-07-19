<script lang="ts" setup>
</script>

<template>
  <footer class="flex justify-between items-center p-6 text-xs text-neutral-500">
    <NuxtLink to="https://gitlab.com/thaikolja/nuxt-nodemailer-example" target="_blank" title="View source code on GitLab" class="has-icon">
      <Icon name="mdi:gitlab" size="20" />
      <span>Code on GitLab</span>
    </NuxtLink>

    <NuxtLink to="https://gitlab.com/thaikolja/nuxt-nodemailer-example/-/blob/main/README.md?ref_type=heads" target="_blank" title="View README.md" class="has-icon">
      <Icon name="mdi:paper-outline" size="20" />
      <span>View <code>README.md</code></span>
    </NuxtLink>

    <NuxtLink to="https://github.com/thaikolja/nuxt-nodemailer-example" target="_blank" title="View source code on GitHub" class="has-icon">
      <Icon name="mdi:github" size="20" />
      <span>Code on GitHub</span>
    </NuxtLink>
  </footer>
</template>

<style lang="postcss" scoped>
  .has-icon {
    @apply flex items-center gap-1 transition-colors hover:text-neutral-300;
  }
</style>