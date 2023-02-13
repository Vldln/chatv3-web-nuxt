


<template>
  <main class="container mx-auto sm:px-0">
    <H1 class="text-center mb-10 mt-16"> {{ $t("pages.deploy.title") }}</H1>
    <div
      class="max-w-[700px] mx-auto content px-3"
      v-html="$t('pages.deploy.content')"
    ></div>
    <hr class="mt-16" />
  </main>
</template>

<script>
export default {
  layout: "default",
  name: "deployPage",
};
</script>
<style>
.content h2 {
  text-transform: uppercase;
  font-size: 1.3rem;
  line-height: 1.75rem;
  margin-top: 20px;
  margin-bottom: 10px;
  color: gray;
}
.content p {
  margin-bottom: 15px;
}
.content h3 {
  text-transform: uppercase;
  font-size: 0.9rem;
  line-height: 1.3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}
</style>
