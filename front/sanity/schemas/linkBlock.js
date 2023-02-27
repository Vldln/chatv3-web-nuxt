import {
  defineType,
} from 'sanity'

export default defineType({
  name: 'linkBlock',
  title: 'Блок ссылок',
  type: 'object',
  fields: [{
      name: 'linkBlockTitle',
      title: 'Заголовок блока ссылок',
      type: 'string'
    },
    {
      title: 'Ссылка',
      name: 'linkItems',
      type: 'array',
      of: [{
        type: 'linkInfo'
      }],
    }
  ],
  // preview: {
  //   select: {
  //     linkBlockTitle: 'linkBlock.linkBlockTitle',
  //   },
  //   prepare(data) {
  //     return {
  //       ...data,
  //       title: data.linkBlockTitle
  //     }
  //   }
  // }
})
