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
    post: true,
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
        class="post__headline mb-2"
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
        class="h-64 mb-8"
      >
        <img
          :src="blok.image.filename"
          :title="blok.image.title"
          class="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <blockquote v-if="blok.teaser">
        {{ blok.teaser }}
      </blockquote>
      <div
        class="post__text"
        v-html="richText"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
  .post {
    blockquote {
      @apply block;
      @apply font-serif;
      @apply italic;
      @apply text-xl;
      @apply leading-snug;
      @apply text-gray-600;
      @apply md:px-12;
      @apply mb-8;
    }
    .post__text {
      @apply text-base;
      p {
        @apply md:text-lg;
        @apply mb-4;
        @apply md:mb-8;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        @apply text-gray-900;
      }

      h1 {
        @apply text-5xl;
        @apply leading-loose;
      }
      h2 {
        @apply text-4xl;
        @apply leading-loose;
      }
      h3 {
        @apply text-3xl;
        @apply leading-loose;
      }
      h4 {
        @apply text-2xl;
        @apply leading-loose;
      }
      h5 {
        @apply text-xl;
        @apply leading-loose;
      }
      h6 {
        @apply text-lg;
        @apply leading-loose;
      }
    }

    .post__headline {
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
  }
</style>
