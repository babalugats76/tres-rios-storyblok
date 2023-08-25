<template>
  <div class="container p-4">
    <span
      class="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm"
      >Blog</span
    >
    <h3
      class="mb-4 text-4xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter"
    >
      All the posts!
    </h3>
    <div class="grid md:grid-cols-3 gap-12 my-12 place-items-center">
      <Teaser
        v-for="p in posts?.value"
        :key="p.id"
        :component="p.component"
        :image="p.content.image"
        :title="
          renderRichText(p.content.headline, {
            schema: {},
          })
        "
        :teaser="p.content.teaser"
        :url="`/${p.full_slug}`"
      />
    </div>
    <div
      v-if="preview"
      class="mx-auto p-4 text-xs bg-blue-50 border-solid font-mono"
    >
      <ul>
        <li>Title: {{ title }}</li>
        <li>Description: {{ description }}</li>
        <li>Version: {{ version }}</li>
        <li>Slug: {{ slug }}</li>
        <li>Params: {{ route?.params }}</li>
        <li>Query: {{ route?.query }}</li>
      </ul>
      <pre>{{ story }}</pre>
      <pre>{{ posts }}</pre>
    </div>
  </div>
</template>

<script setup lang="js">
  const route = useRoute();
  const slug = computed(() =>
    route?.query?._storyblok ? route?.query?._storyblok : 'blog/'
  );

  const preview = computed(() => !!route?.query._storyblok);
  const version = computed(() =>
    route?.query?._storyblok ? 'draft' : 'published'
  );
  const story = reactive({});
  const posts = reactive({});

  const title = computed(() =>
    story.value?.name ? 'Tres Ríos - ' + story.value.name : 'Tres Ríos'
  );

  const description = computed(
    () =>
      unref(story.value)?.content?.body?.filter(
        (c) => c.component === 'meta'
      )[0]?.description
  );

  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  });

  story.value = await useAsyncStoryblok(slug.value, {
    version: version.value,
    resolve_links: 'url',
  });

  const { data } = await useStoryblokApi().get('cdn/stories/', {
    version: version.value,
    starts_with: 'blog',
    sort_by: 'content.date:desc',
    excluding_slugs: 'blog/',
  });

  posts.value = toRef(data.stories);
</script>
