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

  const pageClasses = reactive({
    container: true,
    'overflow-hidden': true,
    'mx-auto': true,
    'px-4': true,
    'py-20': true,
  });

  const postClasses = reactive({
    post: true,
    'mx-auto': true,
    'md:max-w-2xl': props?.blok?.type === 'blog',
    'md:max-w-5xl': props?.blok?.type === 'article',
  });

  const richClasses = reactive({
    post__rich: true,
    'md:columns-2': props?.blok?.type === 'article',
    'gap-x-20': props?.blok?.type === 'article',
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
    <section :class="postClasses">
      <template
        v-for="c in categories"
        :key="c.id"
      >
        <span
          :style="{
            backgroundColor: c?.content?.background?.color,
            color: c?.content?.foreground?.color,
          }"
          class="inline-block text-xs md:text-sm py-1 px-3 mb-4 mr-2 font-semibold rounded-full"
        >
          #{{ c.name.toLowerCase() }}
        </span>
      </template>
      <div
        class="post__headline"
        v-html="richHeadline"
      ></div>
      <div
        v-if="author"
        class="mb-12"
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
        v-if="blok?.image && blok.type === 'blog'"
        class="h-64 mt-4 mb-8"
      >
        <img
          :src="blok.image.filename"
          :title="blok.image.title"
          class="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <blockquote v-if="blok?.teaser && blok.type === 'blog'">
        {{ blok.teaser }}
      </blockquote>
      <div
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
        @apply font-bold;
        @apply text-gray-900;
        @apply mb-6;
      }

      h1 {
        @apply text-5xl;
        @apply md:text-6xl;
        @apply leading-none;
      }

      h2 {
        @apply text-3xl;
        @apply md:text-4xl;
        @apply leading-none;
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
        @apply tracking-tight;
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
        @apply mb-8;
        @apply rounded-lg;
      }
    }
  }
</style>
