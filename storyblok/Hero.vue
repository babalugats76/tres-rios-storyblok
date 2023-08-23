<script setup lang="ts">
defineProps({
  blok: Object,
});
</script>
<template>
  <div v-editable="blok" class="hero relative z-20 overflow-hidden pt-12 pb-28">
    <div class="flex flex-wrap xl:items-center -m-8">
      <div class="w-full md:w-1/2 xl:w-auto p-8 xl:p-12 relative">
        <img
          class="w-full md:w-auto transform hover:scale-105 transition ease-in-out duration-1000 rounded-lg"
          :src="blok?.image?.filename"
          :alt="blok?.image?.alt"
        />
        <div class="p-8 absolute bottom-0 left-0 w-full">
          <div
            class="invisible lg:visible p-11 m-8 bg-black bg-opacity-50 backdrop-blur-xl rounded-lg"
          >
            <p
              class="mb-6 text-lg text-center text-white text-opacity-50 font-semibold uppercase tracking-px"
            >
              {{ blok?.caption }}
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 xl:flex-1 p-8 xl:p-12">
        <h1
          class="mb-7 text-6xl md:text-5xl xl:text-10xl font-bold font-heading tracking-px-n leading-none md:max-w-md"
        >
          {{ blok?.heading }}
        </h1>
        <p class="mb-9 text-lg text-gray-900 font-medium md:max-w-md">
          {{ blok?.subheading }}
        </p>
      </div>
    </div>
  </div>
</template>