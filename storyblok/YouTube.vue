<script setup lang="js">
  const props = defineProps({ blok: Object });
  const video = computed(() => props?.blok?.id);
</script>

<template>
  <div
    v-editable="blok"
    class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
    style="padding-top: 56.25%"
  >
    <iframe
      class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
      :src="`https://www.youtube.com/embed/${video}`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen=""
    >
    </iframe>
  </div>
</template>
