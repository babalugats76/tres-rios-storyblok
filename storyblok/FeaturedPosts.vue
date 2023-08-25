<template>
  <section v-editable="blok">
    <div class="w-full md:w-3/4 mb-8 md:mb-0">
      <span
        class="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm"
        >Blog</span
      >
      <h3
        class="mb-4 text-4xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter"
      >
        {{ blok.headline }}
      </h3>
      <p class="text-lg md:text-xl text-coolGray-500 font-medium">
        {{ blok.lead }}
      </p>
    </div>
    <div
      class="container mx-auto grid gap-12 my-12 place-items-center"
      :class="classColumns"
    >
      <Teaser
        v-for="p in blok?.posts"
        :key="p.id"
        :component="p.component"
        :image="p.content.image"
        :title="p.name"
        :teaser="p.content.teaser"
        :url="`/${p.full_slug}`"
      />
    </div>
  </section>
</template>

<script setup lang="js">
  const props = defineProps({
    blok: Object,
  });
  const classColumns = computed(() => ({
    'md:grid-cols-2': props.blok?.tablet_columns === '2',
    'md:grid-cols-3': props.blok?.tablet_columns === '3',
    'md:grid-cols-4': props.blok?.tablet_columns === '4',
    'md:grid-cols-5': props.blok?.tablet_columns === '5',
    'md:grid-cols-6': props.blok?.tablet_columns === '6',
    'lg:grid-cols-2': props.blok?.laptop_columns === '2',
    'lg:grid-cols-3': props.blok?.laptop_columns === '3',
    'lg:grid-cols-4': props.blok?.laptop_columns === '4',
    'lg:grid-cols-5': props.blok?.laptop_columns === '5',
    'lg:grid-cols-6': props.blok?.laptop_columns === '6',
    'xl:grid-cols-2': props.blok?.desktop_columns === '2',
    'xl:grid-cols-3': props.blok?.desktop_columns === '3',
    'xl:grid-cols-4': props.blok?.desktop_columns === '4',
    'xl:grid-cols-5': props.blok?.desktop_columns === '5',
    'xl:grid-cols-6': props.blok?.desktop_columns === '6',
  }));
</script>

<style scoped></style>
