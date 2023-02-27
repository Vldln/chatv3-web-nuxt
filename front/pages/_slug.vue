
<template>
  <div>
    <Header :data="menu" />
    <main class="container px-3 sm:px-0">
      <Meta :title="page.metaTitle" :description="page.heroText"></Meta>
      <Hero
        :title="page.title"
        :heroTitle="page.heroTitle"
        :heroText="page.heroText"
      />
      <SanityContent
        :blocks="page.sectionItems[0].items"
        class="md:mx-[120px]"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";

export default {
  async asyncData({ params, $sanity }) {
    const query_page = groq`*[_type == "page" && slug.current == "${params.slug}"][0]{..., sectionItems[]->{...}}`;
    const query_menu = groq`*[_type == "menu"][0]{...}`;

    const page = await $sanity.fetch(query_page);
    const menu = await $sanity.fetch(query_menu);
    return { page, menu };
  },
};
</script>
<style>
p {
  padding-bottom: 15px;
}
h2 {
  color: #374151;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  justify-content: center;
  margin: 30px 0 40px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
}
h3 {
  color: #111827;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}
</style>
