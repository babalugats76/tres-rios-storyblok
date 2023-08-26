<script setup lang="js">
  import { RichTextSchema } from '@storyblok/js';
  import cloneDeep from 'clone-deep';
  const mySchema = cloneDeep(RichTextSchema);

  const props = defineProps({
    blok: Object,
    author: Object,
    categories: Array,
  });

  const richHeadline = computed(() => renderRichText(props.blok.headline));

  const richText = computed(() =>
    renderRichText(props.blok.text, {
      schema: mySchema,
      resolver: (component, blok) => {
        switch (component) {
          case 'you-tube':
            return `<div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden mb-8 md:mb-10" style="padding-top: 56.25%">
                      <iframe class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full" src="https://www.youtube.com/embed/${blok.id}"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen="">
                      </iframe>
                    </div>`;
          default:
            return `Component ${component} not found`;
        }
      },
    })
  );

  const isBlog = computed(() => props?.blok?.type === 'blog');

  const isArticle = computed(() => props?.blok?.type === 'article');

  const postClasses = reactive({
    'md:max-w-2xl': isBlog,
    'md:max-w-6xl': isArticle,
  });

  const richClasses = reactive({
    'md:columns-2': isArticle,
    'gap-x-20': isArticle,
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
    class="page page__post container overflow-hidden mx-auto px-4 py-20"
  >
    <section
      class="post mx-auto"
      :class="postClasses"
    >
      <div class="post__categories">
        <span
          v-for="c in categories"
          :key="c.id"
          :style="{
            backgroundColor: c?.content?.background?.color,
            color: c?.content?.foreground?.color,
          }"
          class="post__category inline-block text-xs md:text-xs py-1 px-3 mb-4 mr-2 font-heading font-base rounded-full"
        >
          #{{ c.name.toLowerCase() }}
        </span>
      </div>
      <div
        class="post__headline"
        v-html="richHeadline"
      ></div>
      <div
        v-if="author"
        class="post__author mb-12"
      >
        <p
          class="text-sm md:text-base font-sans font-normal tracking-tight text-gray-500"
        >
          <span class="mr-2">{{ author.display_name }}</span>
          <span class="mr-2">&middot;</span>
          <span>{{ blogDate }}</span>
        </p>
      </div>
      <div
        v-if="blok?.image && isBlog"
        class="post__cover h-64 mt-4 mb-8"
      >
        <img
          :src="blok.image?.filename"
          :title="blok.image?.title"
          class="w-full h-full object-cover rounded-lg"
          :alt="blok.image?.alt"
        />
      </div>
      <div class="post__teaser">
        <blockquote v-if="blok?.teaser && isBlog">
          {{ blok.teaser }}
        </blockquote>
      </div>
      <div
        class="post__rich"
        :class="richClasses"
        v-html="richText"
      ></div>
    </section>
  </div>
</template>

<style lang="scss">
  .post {
    * {
      @apply select-none;
    }

    blockquote {
      @apply block;
      @apply font-serif;
      @apply not-italic;
      @apply text-lg;
      @apply md:text-xl;
      @apply leading-tight;
      @apply text-gray-500;
      @apply md:px-12;
      @apply my-8;
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
        @apply font-extrabold;
        @apply text-gray-900;
        @apply mb-4;
        @apply leading-snug;
        @apply tracking-tighter;
      }

      h1 {
        @apply text-5xl;
        @apply md:text-6xl;
      }

      h2 {
        @apply text-3xl;
        @apply md:text-4xl;
      }
    }

    .post__rich {
      @apply text-base;

      > p {
        @apply mb-4;
        @apply md:mb-8;
        @apply text-base;
        @apply md:text-lg;
        @apply max-w-prose;
        @apply text-body;
        @apply leading-normal;
      }

      > hr {
        @apply my-8;
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

      img {
        @apply md:transform;
        @apply md:hover:scale-103;
        @apply md:transition;
        @apply md:ease-in-out;
        @apply md:duration-500;
        @apply mb-8;
        @apply rounded-lg;
      }
    }
  }
</style>
