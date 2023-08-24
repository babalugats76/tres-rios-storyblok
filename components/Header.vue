<script setup lang="js">
defineProps({
  siteConfig: {
    type: Object,
    required: true
  }
})
const route = useRoute()
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header>
    <!-- <div>{{ siteConfig }}</div> -->
    <section class="overflow-hidden">
      <div
        v-if="siteConfig"
        :class="'flex items-center justify-between px-8 py-5'"
      >
        <!-- logo -->
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-auto mr-14">
              <a href="#">
                <img
                  v-if="siteConfig?.header_logo"
                  style="max-width: 128px"
                  :src="siteConfig?.header_logo?.filename"
                  :alt="siteConfig?.header_logo?.alt"
                >
              </a>
            </div>
          </div>
        </div>
        <!-- nav items -->
        <div class="w-auto hidden lg:block">
          <ul
            v-if="siteConfig?.header_nav"
            class="flex items-center mr-10"
          >
            <li
              v-for="blok in siteConfig.header_nav.filter(
                (x) => x.include_desktop,
              )"
              :key="blok._uid"
              class="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"
            >
              <NuxtLink
                :to="blok?.link?.story?.url"
                class="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
              >
                {{ blok?.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- cta and nav burger icon -->
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <!-- cta -->
            <div
              class="w-auto hidden lg:block"
              :class="{ invisible: route?.params?.slug == 'consult' }"
            >
              <a
                href="/consult"
                class="group relative p-0.5 font-heading block w-full md:w-auto text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10"
              >
                <div
                  class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"
                />
                <div class="py-2 px-5 bg-white rounded-lg">
                  <p class="relative z-10">Schedule Free Consult</p>
                </div>
              </a>
            </div>
          </div>
          <!-- burger -->
          <div class="w-auto lg:hidden">
            <a href="#">
              <svg
                class="navbar-burger text-gray-800"
                width="51"
                height="51"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="toggleMenu"
              >
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  fill="currentColor"
                />
                <path
                  d="M37 32H19M37 24H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          class="navbar-menu transform transition-all ease-in-out delay-150 duration-500 fixed top-0 left-0 bottom-0 w-7/12 sm:max-w-xs z-50"
          :class="isOpen ? '' : 'hide'"
        >
          <nav class="relative z-10 px-9 py-8 bg-white h-full">
            <div class="flex flex-wrap justify-between h-full">
              <div class="w-full">
                <div class="flex items-center justify-between -m-2">
                  <div class="w-auto p-2">
                    <a
                      class="inline-block"
                      href="#"
                    >
                      <img
                        v-if="siteConfig?.header_logo"
                        style="max-width: 128px"
                        :src="siteConfig?.header_logo?.filename"
                        :alt="siteConfig?.header_logo?.alt"
                      >
                    </a>
                  </div>
                  <div class="w-auto p-2">
                    <a
                      class="navbar-burger"
                      href="#"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        @click="toggleMenu"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="flex flex-col items-center text-center justify-center py-8 w-full"
              >
                <ul v-if="siteConfig?.header_nav">
                  <li
                    v-for="blok in siteConfig?.header_nav?.filter(
                      (x) => x.include_mobile,
                    )"
                    :key="blok._uid"
                    class="mb-12"
                  >
                    <NuxtLink
                      :to="blok?.link?.story?.url"
                      class="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      @click="toggleMenu"
                    >
                      {{ blok?.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col justify-end w-full">
                <div class="flex flex-wrap">
                  <div class="w-full">
                    <a
                      href="/consult"
                      :class="{ invisible: route.params.slug == 'consult' }"
                      class="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10"
                    >
                      <div
                        class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"
                      >
                        <div class="py-2 px-5 bg-white rounded-lg">
                          <p class="relative z-10 text-center">
                            Schedule Free Consult
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </header>
</template>

<style scoped>
.navbar-menu {
  --tw-translate-x: 0%;
}

.navbar-menu.hide {
  --tw-translate-x: -100%;
}
</style>
