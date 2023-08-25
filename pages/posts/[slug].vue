<template>
  <StoryblokComponent
    v-if="post.value?.content"
    :blok="post?.value?.content"
    :author="author.value?.content"
    :categories="categories.value"
  />
  <div
    v-if="preview"
    class="container mx-auto p-4 text-xs bg-blue-50 border-solid font-mono"
  >
    <ul>
      <li>Title: {{ title }}</li>
      <li>Description: {{ description }}</li>
      <li>Version: {{ version }}</li>
      <li>Slug: {{ slug }}</li>
      <li>Params: {{ route?.params }}</li>
      <li>Query: {{ route?.query }}</li>
    </ul>
    <pre>{{ post }}</pre>
  </div>
</template>

<script setup lang="js">
  const route = useRoute();

  const slug = computed(() =>
    route?.query?._storyblok
      ? route?.query?._storyblok
      : route?.params?.slug && route?.params?.slug.length > 0
      ? `posts/${route?.params?.slug}`
      : undefined
  );

  const preview = computed(() => !!route?.query._storyblok);
  const version = computed(() =>
    route?.query?._storyblok ? 'draft' : 'published'
  );
  const post = reactive({});
  const author = reactive({});
  const categories = reactive({});
  const title = computed(() =>
    post.value?.name ? 'Tres Ríos - ' + post.value.name : 'Tres Ríos'
  );
  const description = computed(() => post.value?.content?.teaser);

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  });

  post.value = await useAsyncStoryblok(slug.value, {
    version: version.value,
    resolve_links: 'url',
  });

  author.value = await useAsyncStoryblok(unref(post.value)?.content?.author, {
    version: version.value,
    find_by: 'uuid',
  });

  const { data } = await useStoryblokApi().get('cdn/stories/', {
    version: version.value,
    by_uuids: unref(post.value)?.content?.categories.join(','),
  });

  categories.value = toRef(data.stories);
</script>
