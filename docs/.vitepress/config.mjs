import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  // base: '/Static-Markdown-documents/',
  title: "一个网站",
  description: "一个 VitePress 网站",
  //设置网站logo
  head: [['link', { rel: 'icon', href: '/icon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    //设置网站图标
    logo: '/icon.ico',

    //设置网站标题
    siteTitle: "一个小网站",

    // 设置目录的样式
    outlineTitle: "文章目录",
    outline: [2, 6],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    // 导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/documents' },
      { text: 'CM2' , link: '/cm2'},
      {
        text: '链接',
          items: [
            {
              text:"搜索引擎",
              items: [
                { text: "百度" , link: "https://www.baidu.com", target: '_self', rel: 'sponsored'},
                { text: "谷歌" , link: "https://www.google.com", target: '_self', rel: 'sponsored'},
              ]
            }
          ]
      }
    ],

    // 侧边栏渲染
    sidebar:{
      '/documents/':[{
        text: '文档',
        items: [
          {text: "文档的测试文档", link: "/documents/test" },
          {text: "测试文档index", link: "/documents/index"}
        ]
      }],
      '/cm2/':[{
        text: 'CM2',
        items: [
          {text: "cm2测试文档index", link: "/cm2/index" },
        ]
      }]
    },

    //  上一页下一页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    //  编辑链接
    editLink: {
      pattern: "https://github.com/GreatFood404/Static-Markdown-documents/tree/main/docs/:path",
      text:  "在 GitHub 上编辑此页",
    },

    //  社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GreatFood404/Static-Markdown-documents'},
      { icon: "bilibili", link: "https://space.bilibili.com/392396699"}
    ]
  }
})
