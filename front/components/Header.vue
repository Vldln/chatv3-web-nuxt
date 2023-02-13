
<template>
  <header class="container mx-auto">
    <div class="flex items-center justify-between px-3 py-8">
      <a href="/">
        <img class="w-[126px] sm:w-[160px]" src="/logo.svg" :alt="$t('title')"
      /></a>
      <nav class="flex items-center">
        <ul class="hidden sm:flex justify-end items-center mr-6 mb-0">
          <li>
            <NuxtLink
              class="text-gray-700 uppercase mr-8"
              :to="localePath('about')"
              >{{ $t("pages.about.menu") }}</NuxtLink
            >
          </li>
          <!-- <li>
            <NuxtLink
              class="text-gray-700 uppercase"
              :to="localePath('deploy')"
              >{{ $t("pages.deploy.menu") }}</NuxtLink
            >
          </li> -->
        </ul>
        <LangSwitcher />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
