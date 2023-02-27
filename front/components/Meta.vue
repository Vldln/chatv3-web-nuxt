<template>
  <span v-if="false" />
</template>
<script>
export default {
  props: {
    canonical: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: "700",
    },
    height: {
      type: String,
      default: "600",
    },
    image: {
      type: String,
      default: window.location.origin + "/snippet.png",
    },
    keywords: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      mainDomain: window.location.origin,
      descrD: this.description
        ? this.description
        : "Мы предлагаем вам заранее установить и потестировать сет из приложений, которые могут работать автономно и вне зависимости от интернет-ограничений. Если опасения о грядущем обособлении российской сети от мировой окажутся верными, то эта несложная подготовка гарантирует вам работающие каналы связи под рукой. Мы создали несколько серверов на территории России для того, чтобы наша команда могла обеспечить возможность коммуникации между пользователями по локальной сети, что бы ни случилось. Список будет пополняться)",
      titleD: this.title
        ? this.title
        : "ChatV3 — Альтернативные способы коммуникации на случай изоляции Рунета",
    };
  },
  head() {
    const canonical = `${
      this.mainDomain +
      (this.canonical ? this.canonical : this.$route.fullPath)
        .toLowerCase()
        .replace(/\/$/, "")
    }`;
    return {
      title: this.titleD,
      description: this.descrD,
      link: [{ rel: "canonical", href: canonical }],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.descrD,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.titleD,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.descrD,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "summary_large_image",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image,
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.titleD,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.titleD,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "ChatV3.ru",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.descrD,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image,
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: this.height,
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: this.width,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: window.location.origin + this.$route.path,
        },
        {
          hid: "og:locale",
          property: "og:locale",
          content: "ru_RU",
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.image,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.image,
        },
        {
          hid: "vk:image",
          property: "vk:image",
          content: this.image,
        },
      ],
    };
  },
};
</script>
