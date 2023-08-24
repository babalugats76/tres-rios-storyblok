<template>
  <div>
    <StoryblokComponent
      v-if="blog"
      :blok="blog.value?.content"
      :author="author.value?.content"
      :categories="categories.value"
    />
    <div
      v-if="preview"
      class="container mx-auto p-4 text-xs bg-blue-50 border-solid font-mono"
    >
      <ul>
        <li>Title: {{ title }}</li>
        <li>Description: {{ description }}</li>
        <li>Version: {{ version }}</li>
        <li>Slug: {{ slug }}</li>
        <li>Params: {{ route?.params }}</li>
        <li>Query: {{ route?.query }}</li>
      </ul>
      <pre>{{ blog }}</pre>
    </div>
  </div>
</template>

<script setup lang="js">
const toPascalCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('')

definePageMeta({
  layout: 'default'
})

const route = useRoute()

const slug = computed(() =>
  route?.query?._storyblok ? route?.query?._storyblok : route?.params?.slug && route?.params?.slug.length > 0 ? `blog/${route?.params?.slug}` : undefined
)

const preview = computed(() => !!route?.query._storyblok)

const version = computed(() =>
  route?.query?._storyblok ? 'draft' : 'published'
)

const blog = reactive({})
const author = reactive({})
const categories = reactive({})

const title = computed(() =>
  blog.value?.content?.headline ? 'Tres Ríos - ' + blog.value?.content?.headline : 'Tres Ríos'
)

const description = computed(() => blog.value?.content?.teaser)

useHead({
  title,
  meta: [{ name: 'description', content: description }]
})

blog.value = await useAsyncStoryblok(slug.value, {
  version: version.value,
  resolve_links: 'url'
})

author.value = await useAsyncStoryblok(unref(blog.value)?.content?.author, { version: version.value, find_by: 'uuid' })

const { data } = await useStoryblokApi().get('cdn/stories/', {
  version: version.value,
  by_uuids: unref(blog.value)?.content?.categories.join(',')
})

categories.value = toRef(data.stories)
</script>
