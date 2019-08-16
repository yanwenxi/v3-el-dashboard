const base = 'View'

export default [
  {
    name: 'study',
    meta: {
      title: '积累',
      icon: 'fa fa-camera-retro'
    },
    sub: [
      {
        name: 'BasicLayout',
        meta: {
          index: `/Home/BasicLayout`,
          title: '基本布局',
          type: 'menu',
          active: false
        }
      },
      {
        name: 'BasicContainer',
        meta: {
          index: `/Home/BasicContainer`,
          title: '基本容器',
          type: 'menu',
          active: false
        }
      }
    ]
  }
]
