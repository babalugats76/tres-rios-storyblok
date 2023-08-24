<script setup lang="js">
const props = defineProps({ blok: Object });
const { url } = props?.blok || {};

onMounted(() => {
  const recaptchaScript = document.createElement("script");
  recaptchaScript.setAttribute(
    "src",
    "https://assets.calendly.com/assets/external/widget.js",
  );
  document.head.appendChild(recaptchaScript);
});
</script>

<template>
  <!-- Calendly inline widget begin -->
  <div
    class="calendly-inline-widget"
    :data-url="url"
    style="min-width: 320px; height: 2000px; overflow: hidden; margin-top: 0px"
  />
  <!-- Calendly inline widget end -->
</template>

<style scoped>
@media (min-width: 768px) {
  .calendly-inline-widget {
    width: 80% !important;
    max-width: 800px;
    margin: 20px auto 0px !important;
  }

  div[data-container="booking-container"] {
    max-width: 100% !important;
  }
}
</style>