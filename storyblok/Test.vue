<script setup lang="js">
  const props = defineProps({ blok: Object });
  const rich = computed(() => renderRichText(props?.blok?.richtext));
</script>

<template>
  <div v-editable="blok" class="md:columns-2 w-full p-12 bg-[#f7f6fd] rounded-[5px]">
    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ blok?.name }}
    </h3>
    <div class="rich" v-html="rich" />
  </div>
</template>

<style lang="css">
  .rich > p,
  h1,
  h2,
  img,
  blockquote {
    padding: 1rem 0.25rem;
  }

  .rich > h1 {
    font-size: 2rem;
    font-weight: bold;
    @apply font-heading;
  }

  .rich > blockquote {
    font-size: 2rem;
    font-weight: bold;
    line-height: 0.9;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    @apply text-red-600;
    @apply font-serif;
  }
</style>
