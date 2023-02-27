import {
  defineType,
  defineField,
  defineArrayMember
} from 'sanity'


export default defineType({
  name: 'menu',
  title: 'Меню сайта',
  type: 'document',
  fields: [{
    name: 'menuTitle',
    title: 'Заголовок блока меню',
    type: 'string'
  }, {
    name: 'menuItems',
    title: 'Элементы меню',
    type: 'array',
    of: [{
      type: 'linkInfo'
    }]
  }, ]
})
