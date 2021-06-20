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
    activeHeaderLinks: true,
    sidebarDepth: 2,
    sidebar: {
      '/guide/' : [
        {
          title: '使用指南',
          collapsable: false,
          sidebar: 'auto',
          children: [
            ''
          ]
        },
        {
          title: '开始使用',
          collapsable: false,
          sidebar: 'auto',
          children: [
            'getting_start',
            'change_main_function',
            'setupservice',
            'firstbot'
          ]
        },
        {
          title: '使用指令',
          collapsable: false,
          sidebar: 'auto',
          children: [
            'command'
          ]
        }
      ],
      '/API/' : [
        {
          title: 'API',
          collapsable: false,
          sidebar: 'auto',
          children: [
            'Sora'
          ]
        }
      ],
      '/updatelog/' : [
        {
          title: '更新日志',
          collapsable: false,
          sidebar: 'auto',
          children: [
            ''
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