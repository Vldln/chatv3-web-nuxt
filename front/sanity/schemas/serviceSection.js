import {
  defineType,
  defineField,
  defineArrayMember
} from 'sanity'

export default defineType({
  type: 'document',
  name: 'services',
  title: 'Секции средств обхода блокировок',
  description: 'Секция со списком средств обхода блокировок',
  fields: [{
      name: 'sectionName',
      title: 'Имя секции',
      type: 'string',
      description: 'Для отображения в списках элементов'
    },
    {
      name: 'icon',
      title: 'Иконка у заголовка секции',
      type: 'image'
    },
    {
      name: 'sectionItem',
      title: 'Отображаемые элементы',
      type: 'array',
      of: [{
        type: 'service'
      }]
    },

  ]
})
