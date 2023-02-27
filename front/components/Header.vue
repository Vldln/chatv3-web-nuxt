
<template>
  <header class="container mx-auto">
    <div class="flex items-center justify-between px-3 py-8">
      <NuxtLink to="/">
        <img class="w-[126px] sm:w-[160px]" src="/logo.svg" :alt="$t('title')"
      /></NuxtLink>
      <nav class="flex items-center">
        <ul
          v-if="menu"
          class="hidden sm:flex justify-end items-center mr-6 mb-0"
        >
          <li v-for="item in menu.menuItems" :key="item._key">
            <NuxtLink
              class="text-gray-700 uppercase mr-8"
              :to="localePath(item.linkUrl)"
              >{{ item.linkLabel }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "menu"][0]{...}`;

export default {
  name: "Header",
  created() {
    this.fetchData();
  },
  data() {
    return {
      loading: true,
      menu: {},
    };
  },
  methods: {
    fetchData() {
      this.error = this.menu = null;
      this.$sanity.fetch(query).then(
        (menu) => {
          this.menu = menu;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>
