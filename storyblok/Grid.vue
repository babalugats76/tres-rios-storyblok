<script setup lang="js">
  const props = defineProps({ blok: Object });
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

<template>
  <div
    v-editable="blok"
    class="container mx-auto grid gap-12 my-12 place-items-center"
    :class="classColumns"
  >
    <StoryblokComponent
      v-for="b in blok?.columns"
      :key="b._uid"
      :blok="b"
    />
  </div>
</template>

<style></style>
