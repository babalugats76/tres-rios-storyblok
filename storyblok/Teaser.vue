<template>
  <div class="column teaser">
    <div class="py-3 px-6 mb-6 bg-white rounded shadow">
      <img
        class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
        :src="image?.filename"
        :title="image?.title"
        :alt="image?.alt"
      />
      <h1
        class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"
      >
        {{ title }}
      </h1>
      <div class="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
        {{ teaser }}
      </div>
      <div class="mt-4">
        <Nuxt-Link :to="url">
          <a
            class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
            title="read more"
          >
            Read More »
          </a>
        </Nuxt-Link>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
  defineProps({
    image: Object,
    title: String,
    teaser: String,
    url: String,
    component: String,
  });
</script>

<style scoped></style>
