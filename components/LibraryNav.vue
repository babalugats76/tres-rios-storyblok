<script setup>
  defineProps({
    navigationTree: {
      type: Array,
      default: () => [],
    },
  });
</script>

<template>
  <ul class="navigation">
    <li
      v-for="(item, index) in navigationTree"
      :key="index"
    >
      <NuxtLink :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <LibraryNav
        v-if="item.children"
        :navigation-tree="item.children"
        class="sub-navigation"
      />
    </li>
  </ul>
</template>

<style scoped>
  .navigation li {
    list-style-type: '_ ';
  }

  .navigation ul {
    margin-left: 0.8rem;
  }
</style>
