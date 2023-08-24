<script setup lang="js">
const props = defineProps({ blok: Object, author: Object, categories: Array });
const resolvedRichText = computed(() => renderRichText(props.blok.text));

const pageClasses = reactive({
  container: true,
  "overflow-hidden": true,
  "mx-auto": true,
  "px-4": true,
});

const blogDate = computed(() =>
  new Date(props?.blok?.date).toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }),
);
</script>

<template>
  <div v-editable="blok" :class="pageClasses">
    <div class="md:max-w-2xl mx-auto mb-12 text-center">
      <div class="flex items-center justify-center">
        <p class="inline-block text-green-500 font-medium">
          {{ author.display_name }}
        </p>
        <span class="mx-1 text-green-500">•</span>
        <p class="inline-block text-green-500 font-medium">{{ blogDate }}</p>
      </div>
      <h2
        class="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter"
      >
        {{ blok.headline }}
      </h2>
      <p class="mb-6 text-lg md:text-xl font-medium text-coolGray-500">
        {{ blok.subheadline }}
      </p>
      <div v-if="categories">
        <template v-for="c in categories" :key="c.id">
          <div
            class="inline-block py-1 px-3 text-xs leading-5 text-green-500 font-medium uppercase bg-green-100 rounded-full shadow-sm"
          >
            {{ c.name }}
          </div>
        </template>
      </div>
    </div>
    <div class="mb-10 mx-auto max-w-max overflow-hidden rounded-lg">
      <img
        :src="blok.image.filename"
        :title="blok.image.title"
        class="w-full h-[360px] lg:h-[450px] object-cover"
        alt=""
      />
    </div>
    <div
      class="blog__text md:max-w-3xl mx-auto"
      v-html="resolvedRichText"
    ></div>
  </div>
</template>

<style lang="css">
.blog__text p {
  @apply mb-4;
}
</style>