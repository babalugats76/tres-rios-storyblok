<template>
  <section class="resource flex-auto w-full h-full flex overflow-hidden">
    <aside
      id="sidebar-left"
      class="flex-none overflow-x-hidden overflow-y-auto bg-surface-50-900-token lg:w-auto"
    >
      <div
        class="grid h-full bg-surface-50-900-token border-r border-surface-500/30 hidden lg:grid w-[300px] overflow-hidden"
      >
        <section class="p-8 pb-20 space-y-4 overflow-y-auto">
          <ResourceNav :navigation-tree="navigation" />
        </section>
      </div>
    </aside>
    <section class="scroll-smooth flex-1 overflow-x-hidden flex flex-col">
      <div class="flex-auto p-4 md:p-8">
        <div class="resource__title">{{ data.title }}</div>
        <div class="flex items-start gap-10 doc-shell relative">
          <ContentRenderer :value="data">
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="js">
  const route = useRoute();
  // const { resource, slug } = route.params;
  // const path = `/resources/${resource}/${slug ? slug.join('/') : ''}`;
  const { path } = route;
  const { data } = await useAsyncData(`content-${path}`, () =>
    queryContent(path).findOne()
  );
  if (data.value == null)
    throw createError({ statusCode: 404, message: 'Page not found' });
  const { data: navigation } = await useAsyncData('navigation', () =>
    fetchContentNavigation()
  );
</script>

<style lang="scss">
  .resource {
    p {
      @apply mb-8;
      @apply text-base;
      @apply max-w-prose;
      @apply text-body;
      @apply leading-normal;
    }

    .resource__title,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply mb-8;
      @apply font-heading;
      @apply font-semibold;
      @apply tracking-tighter;
      @apply leading-snug;
      @apply text-gray-900;
    }

    h1 > i,
    h2 > i,
    h3 > i,
    h4 > i,
    h5 > i,
    h6 > i {
      @apply font-serif;
    }

    h1 {
      @apply text-5xl;
    }

    h2,
    .resource__title {
      @apply text-4xl;
    }

    h3 {
      @apply text-3xl;
    }

    h4 {
      @apply text-2xl;
    }

    h5 {
      @apply text-xl;
    }

    h6 {
      @apply text-lg;
    }
  }
</style>
