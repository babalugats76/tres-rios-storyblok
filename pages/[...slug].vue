<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story?.value?.content" />
    <div v-if="preview" class="container mx-auto p-4 text-xs bg-blue-50 border-solid font-mono">
      <ul>
        <li>Title: {{ title }}</li>
        <li>Description: {{ description }}</li>
        <li>Version: {{ version }}</li>
        <li>Slug: {{ slug }}</li>
        <li>Params: {{ route?.params }}</li>
        <li>Query: {{ route?.query }}</li>
      </ul>
      <pre>{{ story }}</pre>
    </div>
  </div>
</template>

<script setup lang="js">
  const toPascalCase = (str) =>
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
      .join('');

  definePageMeta({
    key: (route) => String(route?.query._storyblok || route.fullPath),
    layout: 'default',
    validate: (route) =>
      !!route?.query._storyblok ||
      /^(\/|home|services|about|consult|pods|tutoring|workshops|courses|travel|parents|k12|homeschool|test)+$/.test(
        route.fullPath
      ),
  });

  const story = ref();
  const route = useRoute();
  const version = computed(() => (route?.query?._storyblok ? 'draft' : 'published'));
  const slug = computed(() =>
    route?.query?._storyblok
      ? route?.query?._storyblok
      : route?.params?.slug && route?.params?.slug.length > 0
      ? route?.params?.slug + '/'
      : 'home'
  );

  const preview = computed(() => !!route?.query._storyblok);

  const title = computed(() =>
    slug.value ? 'Tres Ríos - ' + toPascalCase(slug.value) : 'Tres Ríos'
  );

  const description = computed(
    () => unref(story.value)?.content?.body?.filter((c) => c.component === 'meta')[0]?.description
  );

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  });

  story.value = await useAsyncStoryblok(slug.value, {
    version: version.value,
    resolve_links: 'url',
    resolve_relations: ['featured-posts.posts'],
  });
</script>

<style scoped></style>
