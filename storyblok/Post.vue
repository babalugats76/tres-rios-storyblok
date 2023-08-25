<script setup lang="js">
const props = defineProps({ blok: Object, author: Object, categories: Array });
const richText = computed(() => renderRichText(props.blok.text));
const richHeadline = computed(() => renderRichText(props.blok.headline));

const pageClasses = reactive({
  container: true,
  "overflow-hidden": true,
  "mx-auto": true,
  "px-4": true,
  "py-20": true,
});

const blogDate = computed(() =>
  new Date(props?.blok?.date || Date()).toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }),
);
</script>

<template>
  <div v-editable="blok" :class="pageClasses">
    <div class="md:max-w-2xl">
      <div class="blog__headline mb-10" v-html="richHeadline"></div>
      <div v-if="author">
        <p class="text-md font-sans font-thin tracking-tight text-gray-500 mb-8">
          {{ author.display_name }}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{{ blogDate }}
        </p>
      </div>
      <div v-if="categories">
        <template v-for="c in categories" :key="c.id">
          <div
            class="inline-block py-1 px-3 text-xs leading-5 text-green-500 font-medium uppercase bg-green-100 rounded-full shadow-sm">
            {{ c.name }}
          </div>
        </template>
      </div>
    </div>
    <div v-if="blok?.image" class="mb-10 mx-auto max-w-max overflow-hidden rounded-lg">
      <img :src="blok.image.filename" :title="blok.image.title" class="w-full h-[360px] lg:h-[450px] object-cover"
        alt="" />
    </div>
    <div class="blog__text md:max-w-3xl mx-auto" v-html="richText"></div>
  </div>
</template>

<style lang="scss">
.blog__text {
  p {
    @apply mb-4;
  }
}

.blog__headline {
  * {
    >i {
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