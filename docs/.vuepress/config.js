module.exports = {
  title: 'Sora',
  description: '好耶',
  head: [
    ['link', { rel: 'icon', href: 'https://i.loli.net/2020/10/14/Q3NPTLuC4no16ye.png' }]
  ],
  themeConfig: {
    logo: 'https://i.loli.net/2020/10/14/Q3NPTLuC4no16ye.png',
    search: true,
    searchMaxSuggestions: 5,
    smoothScroll: true,
    lastUpdated: '上一次编辑',
    repo: 'Yukrai103/Sora',
    repoLabel: 'GitHub',
    docsRepo: 'Yukrai103/sora_docs_dev',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: false,
    editLinkText: '编辑此页',
    nav: [
        { text: '主页', link: '/' },
        { text: '指南', link: '/guide/' },
        { text: 'API', link: '/API/Sora.md' },
        { text: '更新日志', link: '/updatelog/' },
    ],
    displayAllHeaders: true,
    activeHeaderLinks: true,
    sidebar: {
      '/guide/' : [
        {
          title: '使用指南',
          path: '/guide/',
          collapsable: false,
          sidebarDepth: -1,
          children: [
            '/guide/'
          ]
        },
        {
          title: '开始使用',
          path: '/guide/gettingstart/',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/gettingstart/',
            '/guide/gettingstart/changemainfunction',
            '/guide/gettingstart/setupserver',
            '/guide/gettingstart/firstbot'
          ]
        },
        {
          title: '使用指令',
          path: '/guide/command/',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/command/'
          ]
        },
        {
          title: '奇怪的语法糖增加了！',
          path: '/guide/tips/',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/tips/'
          ]
        }
      ],
      '/API/' : [
        {
          title: 'API',
          path: '/API/Sora.md',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/API/Sora.md'
          ]
        }
      ]
    }
  },
  //插件设置
  plugins:[
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment-timezone')
          //时区转换
          return moment(timestamp).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
        }
      }
    ]
  ]
}