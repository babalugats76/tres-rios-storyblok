<template>
  <section class="page page__course mx-auto px-4 mt-20">
    <!-- <LibraryNav :navigation-tree="navigation" /> -->
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </section>
</template>

<script setup lang="js">
  const route = useRoute();
  // const { path } = route;
  const { course, slug } = route.params;
  const customPath = '/' + course + '/' + (slug ? slug.join('/') : '');
  const { data } = await useAsyncData(`content-${customPath}`, () =>
    queryContent(customPath).findOne()
  );
  if (data.value == null)
    throw createError({ statusCode: 404, message: 'Page not found' });
  console.log(data);
  // const { data: navigation } = await useAsyncData('navigation', () =>
  //   fetchContentNavigation()
  // );
</script>

<style lang="scss">
  .page__course {
    a {
      @apply font-medium;
      @apply text-blue-600;
      @apply dark:text-blue-500;
      @apply hover:underline;
    }

    p {
      @apply mb-8;
      @apply text-base;
      @apply md:text-lg;
      @apply max-w-prose;
      @apply text-body;
      @apply leading-normal;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply mb-4;
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

    h2 {
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
