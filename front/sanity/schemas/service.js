import {
  defineType,
  defineField,
  defineArrayMember
} from 'sanity'


export default defineType({
  name: 'service',
  title: 'Сервис для обхода блокировки',
  type: 'object',
  fields: [{
      name: 'logo',
      title: 'Логотип сервиса',
      type: 'image'
    },
    {
      name: 'name',
      title: 'Название',
      type: 'string'
    },
    {
      name: 'badge',
      title: 'Назначение',
      type: 'string'
    },
    {
      name: 'summary',
      title: 'Краткое описание',
      type: 'text'
    },
    {
      name: 'desktopInfoItems',
      title: 'Элементы секции инфо для десктопа',
      type: 'array',
      of: [{
        type: 'linkBlock'
      }]
    },
    {
      name: 'mobileInfoItems',
      title: 'Элементы секции инфо для мобильных устройств',
      type: 'array',
      of: [{
        type: 'linkBlock'
      }]
    },
  ]
})
