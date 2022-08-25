import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    title: 'Sora',
    description: '好耶',
    head: [
        ['link', { rel: 'icon', href: 'https://s2.loli.net/2022/08/25/c8ATC3ja6igNrbO.png' }]
    ],
    theme: defaultTheme({
        // 默认主题配置
        colorMode: 'auto',
        logo: 'https://s2.loli.net/2022/08/25/c8ATC3ja6igNrbO.png',
        navbar: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '示例', link: '/example/' },
            { text: 'API', link: '/API/Sora.md' },
            { text: '更新日志', link: '/updatelog/' },
        ],
        repoLabel: 'GitHub',
        repo: 'Yukrai103/Sora',
        docsRepo: 'Yukrai103/sora_docs_dev',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkText:'在Github编辑此页',
        sidebarDepth: 2,
        sidebar: {
            '/guide/': [
                {
                    text: '使用指南',
                    collapsible: false
                },
                {
                    text: '开始使用',
                    collapsible: true,
                    children: [
                        'getting_start',
                        'setupservice',
                        'firstbot'
                      ]
                },
                {
                    text: '消息构建',
                    collapsible: true,
                    children: [
                        'custom_message'
                      ]
                },
                {
                    text: '使用指令',
                    collapsible: true,
                    children: [
                        'command'
                      ]
                }
            ],
            '/API/': [
                {
                    text: '自动生成的API文档-善用Ctrl+F',
                    collapsible: false,
                    children:[
                        'Sora'
                    ]
                }
            ],
            '/example/': [
                {
                    text: '代码示例',
                    collapsible: false,
                    children:[
                        ''
                    ]
                }
            ],
            '/updatelog/':[
                {
                    text: '更新日志',
                    collapsible: false,
                    children:[
                        ''
                    ]
                }
            ]
        }
    }),
})