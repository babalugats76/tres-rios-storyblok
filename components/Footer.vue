<script setup lang="ts">
const props = defineProps({ siteConfig: Object });
const about = computed(() => renderRichText(props?.siteConfig?.footer_about));
</script>

<template>
  <footer>
    <section class="relative pt-24 overflow-hidden">
      <div v-if="siteConfig" class="relative z-10 container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 lg:w-5/12 p-6">
            <div class="flex flex-col justify-between h-full">
              <div>
                <img
                  v-if="siteConfig?.footer_logo"
                  class="w-full sm:max-w-xs mx-auto mb-6"
                  :src="siteConfig?.footer_logo?.filename"
                  :alt="siteConfig?.footer_logo?.alt"
                />
              </div>
            </div>
          </div>
          <div
            v-if="siteConfig?.footer_nav_1_headline"
            class="w-full md:w-1/2 lg:w-2/12 p-6"
          >
            <div class="h-full">
              <h3
                class="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px"
              >
                {{ siteConfig?.footer_nav_1_headline }}
              </h3>
              <ul>
                <li
                  v-for="blok in siteConfig?.footer_nav_1"
                  :key="blok._uid"
                  class="mb-4"
                >
                  <NuxtLink
                    :to="
                      blok?.link?.story?.slug === 'home'
                        ? '/'
                        : '/' + blok?.link?.story?.slug
                    "
                    class="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                  >
                    {{ blok?.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="siteConfig?.footer_nav_2_headline"
            class="w-full md:w-1/2 lg:w-2/12 p-6"
          >
            <div class="h-full">
              <h3
                class="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px"
              >
                {{ siteConfig?.footer_nav_2_headline }}
              </h3>
              <ul>
                <li
                  v-for="blok in siteConfig?.footer_nav_2"
                  :key="blok._uid"
                  class="mb-4"
                >
                  <NuxtLink
                    :to="
                      blok?.link?.story?.slug === 'home'
                        ? '/'
                        : '/' + blok?.link?.story?.slug
                    "
                    class="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                  >
                    {{ blok?.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="siteConfig?.footer_nav_3_headline"
            class="w-full md:w-1/2 lg:w-2/12 p-6"
          >
            <div class="h-full">
              <h3
                class="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px"
              >
                {{ siteConfig?.footer_nav_3_headline }}
              </h3>
              <ul>
                <li
                  v-for="blok in siteConfig?.footer_nav_3"
                  :key="blok._uid"
                  class="mb-4"
                >
                  <NuxtLink
                    :to="
                      blok?.link?.story?.slug === 'home'
                        ? '/'
                        : '/' + blok?.link?.story?.slug
                    "
                    class="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                  >
                    {{ blok?.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative pt-24 overflow-hidden">
      <div v-if="siteConfig" class="relative z-10 container mx-auto px-4">
        <div
          v-if="siteConfig?.footer_about"
          class="w-full p-6 font-heading text-4xl md:text-6xl font-bold text-center"
          v-html="about"
        />
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-1/3">
            <div class="p-5 flex flex-col text-center">
              <a
                v-if="siteConfig?.footer_email"
                class="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                :href="'mailto:' + siteConfig?.footer_email?.email"
                :target="siteConfig?.footer_email?.target"
                >{{ siteConfig?.footer_email?.url }}</a
              >
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <div class="p-5 flex flex-col text-center">
              <p
                v-if="siteConfig?.footer_phone"
                class="font-heading font-medium text-lg text-gray-900"
              >
                {{ siteConfig?.footer_phone }}
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <div class="p-5 flex flex-wrap justify-center">
              <!-- facebook -->
              <div
                v-if="siteConfig?.facebook"
                class="w-auto px-1 text-eggplant"
              >
                <a
                  :href="siteConfig?.facebook.url"
                  :target="
                    !!siteConfig?.facebook?.target
                      ? siteConfig?.facebook?.target
                      : null
                  "
                >
                  <svg
                    class="fill-current"
                    width="30"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"
                    />
                  </svg>
                </a>
              </div>
              <!-- instagram -->
              <div
                v-if="siteConfig?.instagram"
                class="w-auto px-1 text-gray-700"
              >
                <a
                  :href="siteConfig?.instagram?.url"
                  :target="
                    !!siteConfig?.instagram?.target
                      ? siteConfig?.instagram?.target
                      : null
                  "
                >
                  <svg
                    class="fill-current"
                    width="30"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"
                    />
                  </svg>
                </a>
              </div>
              <!-- linkedin -->
              <div
                v-if="siteConfig?.linkedin"
                class="w-auto px-1 text-gray-700"
              >
                <a
                  :href="siteConfig?.linkedin?.url"
                  :target="
                    !!siteConfig?.linkedin?.target
                      ? siteConfig?.linkedin?.target
                      : null
                  "
                >
                  <svg
                    class="fill-current"
                    width="30"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"
                    />
                  </svg>
                </a>
              </div>
              <!-- twitter -->
              <div v-if="siteConfig?.twitter" class="w-auto px-1 text-gray-700">
                <a
                  :href="siteConfig?.twitter.url"
                  :target="
                    !!siteConfig?.twitter?.target
                      ? siteConfig?.twitter?.target
                      : null
                  "
                >
                  <svg
                    class="fill-current"
                    width="30"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
                    />
                  </svg>
                </a>
              </div>
              <!-- youtube -->
              <div v-if="siteConfig?.youtube" class="w-auto px-1 text-gray-700">
                <a
                  :href="siteConfig?.youtube?.url"
                  :target="
                    !!siteConfig?.youtube?.target
                      ? siteConfig?.youtube?.target
                      : null
                  "
                >
                  <svg
                    class="fill-current"
                    width="30"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative pt-12 pb-24 overflow-hidden">
      <div v-if="siteConfig" class="relative z-10 container mx-auto px-4">
        <div class="w-full p6 text-center">
          <p v-if="siteConfig?.footer_copyright" class="text-gray-600 text-sm">
            {{ siteConfig?.footer_copyright }}
          </p>
        </div>
      </div>
    </section>
  </footer>
</template>