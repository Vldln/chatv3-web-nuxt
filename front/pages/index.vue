<template>
  <div>
    <Header :data="menu" />
    <main class="container px-3 sm:px-0">
      <Meta></Meta>
      <Hero
        :title="page.title"
        :heroTitle="page.heroTitle"
        :heroText="page.heroText"
      />
      <div v-if="page.sectionItems">
        <div v-for="item in page.sectionItems" :key="item._key">
          <SectionTitle>
            <template v-slot:icon>
              <SanityImage
                :asset-id="item.icon.asset._ref"
                auto="format"
                w="40"
                h="40"
              >
                <template #default="{ src }">
                  <img :src="src" width="40" />
                </template>
              </SanityImage>
            </template>
            <template>
              {{ item.sectionName }}
            </template>
          </SectionTitle>
          <div v-for="service in item.sectionItem" :key="service._key">
            <AppItem :data="service" />
          </div>
        </div>
      </div>
      <ReplicateSection />
    </main>
    <Footer />
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
// Import the component if not already added globally

// Import any components to be used as serializers
export default {
  layout: "default",
  name: "IndexPage",
  async asyncData({ params, $sanity }) {
    const query_page = groq`*[_type == "page" && slug.current == "main"][0]{...,  sectionItems[]->}`;
    const query_menu = groq`*[_type == "menu"][0]{...}`;

    const page = await $sanity.fetch(query_page);
    const menu = await $sanity.fetch(query_menu);

    return { page, menu };
  },
};
</script>
