<script setup lang="js">
  const props = defineProps({ blok: Object });

  const padding = computed(() => !!props?.blok?.page_padding);

  const pageClasses = reactive({
    container: true,
    'overflow-hidden': true,
    'mx-auto': true,
    'px-4': padding,
  });
</script>

<template>
  <div
    v-editable="blok"
    :class="pageClasses"
  >
    <div />
    <StoryblokComponent
      v-for="b in blok?.body"
      :key="b._uid"
      :blok="b"
    />
  </div>
</template>
