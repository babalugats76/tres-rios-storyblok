<template>
  <StoryblokComponent v-if="story" :blok="story?.content" />
    <p>
    Version {{ version }}<br />
    Slug {{ slug }}<br />
    Params {{ route?.params }}<br />
    Query {{ route?.query }}<br />
  </p>
  <pre>{{ story }}</pre>
</template>

<script setup lang="ts">
   const route = useRoute();
   const version = computed(() =>route?.query?._storyblok ? "draft" : "published");
   const slug = computed(() =>
   route?.params?._storyblok ? route?.params?._storyblok : route?.params?.slug && route?.params?.slug.length > 0 ? route?.params?.slug + "/" : "home");
   const story = await useAsyncStoryblok(slug.value, { version: version.value, resolve_links: "url" });
</script>

<style scoped>

</style>