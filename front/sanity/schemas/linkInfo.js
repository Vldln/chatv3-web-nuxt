import {
  defineField,
  defineType
} from 'sanity'

export default defineType({
  name: 'linkInfo',
  title: 'Ссылки',
  type: 'object',
  fields: [{
      name: 'linkUrl',
      title: 'Адрес ссылки',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true, // Allow relative links
          relativeOnly: false, // Force only relative links
          scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
        }),
    },
    {
      name: 'internalLink',
      title: 'Внутренняя ссылка',
      type: 'boolean',
      description: 'Ссыла на внутреннюю страницу сайта'
    },
    {
      name: 'linkLabel',
      title: 'Лейбл ссылки',
      type: 'string',
      description: 'Текст для кнопок'
    }
  ],
})
