<script setup lang="js">
  const story = await useAsyncStoryblok('site-config', {
    version: 'published',
    resolve_links: 'url',
  });
</script>

<template>
  <div class="default-layout">
    <Header :site-config="story?.content" />
    <main class="w-full">
      <slot />
    </main>
    <Footer :site-config="story?.content" />
  </div>
</template>

<style>
  body {
    @apply antialiased bg-gray-50 text-body font-body;
  }

  a {
    @apply select-none;
  }

  .router-link-active {
    @apply font-bold;
  }

  .router-link-exact-active {
    @apply text-eggplant-500;
  }
</style>
