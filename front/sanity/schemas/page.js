import {
  defineField,
  defineType,
  defineArrayMember
} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Страница',
  type: 'document',
  fields: [{
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Мета заголовок страницы',
      description: 'Заголовок страницы для SEO'
    },
    {
      name: 'heroTitle',
      title: 'Заголовок страницы',
      description: 'часть выделенная жирным будет выделена на странице оранжевым цветом',
      type: 'heroTitleText'
    },
    {
      name: 'heroText',
      title: 'Разъяснительный текст страницы',
      description: 'Этот текст будет располагаться под основным заголовком страницы',
      type: 'sectionText'
    },
    {
      name: 'sectionItems',
      title: 'Отображаемые элементы',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
            type: 'services'
          },
          {
            type: 'sectionText'
          },
        ]
      }]
    },

  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
