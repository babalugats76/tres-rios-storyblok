<script setup>
  defineProps({
    navigationTree: {
      type: Array,
      default: () => [],
    },
    parentPath: {
      type: String,
      default: () => '',
    },
  });
</script>

<template>
  <ul class="navigation">
    <template v-for="(item, index) in navigationTree">
      <li
        v-if="parentPath != item._path"
        :key="index"
      >
        <NuxtLink :to="item._path">
          {{ item.title }}
        </NuxtLink>
        <ResourceNav
          v-if="item.children"
          :navigation-tree="item.children"
          :parent-path="item._path"
          class="sub-navigation"
        />
      </li>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
  .navigation {
    li ul {
      @apply mt-2;
      @apply mb-4;
      @apply text-gray-700;
      a {
        @apply font-medium;
        @apply text-sm;
      }
    }
    ul {
      @apply ml-4;
      @apply mb-4;
      @apply text-gray-700;
      list-style-type: none;
      li {
        @apply m-1;
      }
      a {
        @apply p-1;
        @apply font-body;
        @apply hover:text-orange-800;
        &.router-link-active {
          @apply font-bold;
        }
        &.router-link-exact-active {
          @apply text-white;
          @apply bg-orange-800;
        }
      }
    }
  }
</style>
