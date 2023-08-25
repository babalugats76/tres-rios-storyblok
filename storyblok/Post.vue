<script setup lang="js">
  const props = defineProps({
    blok: Object,
    author: Object,
    categories: Array,
  });
  const richText = computed(() => renderRichText(props.blok.text));
  const richHeadline = computed(() => renderRichText(props.blok.headline));

  const pageClasses = reactive({
    container: true,
    'overflow-hidden': true,
    'mx-auto': true,
    'px-4': true,
    'py-20': true,
  });

  const blogDate = computed(() =>
    new Date(props?.blok?.date || Date()).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  );
</script>

<template>
  <div
    v-editable="blok"
    :class="pageClasses"
  >
    <div class="md:max-w-2xl mx-auto">
      <template
        v-for="c in categories"
        :key="c.id"
      >
        <span
          :style="{
            backgroundColor: c?.content?.background?.color,
            color: c?.content?.foreground?.color,
          }"
          class="inline-block py-1 px-3 mb-4 mr-2 font-semibold rounded-full"
        >
          #{{ c.name.toLowerCase() }}
        </span>
      </template>
      <div
        class="blog__headline mb-10"
        v-html="richHeadline"
      ></div>
      <div v-if="author">
        <p
          class="text-md font-sans font-normal tracking-tight text-gray-500 mb-8"
        >
          {{ author.display_name }}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{{
            blogDate
          }}
        </p>
      </div>
      <div
        v-if="blok?.image"
        class="h-64 mb-10"
      >
        <img
          :src="blok.image.filename"
          :title="blok.image.title"
          class="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div
        v-if="blok.teaser"
        class="mb-10"
      >
        <blockquote
          class="font-serif italic text-xl leading-snug text-gray-600 md:px-12 py-2"
        >
          {{ blok.teaser }}
        </blockquote>
      </div>
      <div
        class="blog__text"
        v-html="richText"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
  .blog__text {
    p {
      @apply md:text-lg;
      @apply mb-4;
      @apply md:mb-8;
    }
  }

  .blog__headline {
    * {
      > i {
        @apply font-serif;
      }
    }

    h1,
    h2 {
      @apply font-heading;
      @apply font-bold;
      @apply text-gray-900;
    }

    h1 {
      @apply md:text-7xl;
      @apply text-5xl;
      @apply leading-tight;
    }

    h2 {
      @apply md:text-6xl;
      @apply text-4xl;
      @apply leading-tight;
    }
  }
</style>
