import { defineConfig } from 'vitepress'
import typedocSidebar from '../api/typedoc-sidebar.json'
import typedocZhSidebar from '../zh/api/typedoc-sidebar.json'

const base = '/conversion-library/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "conversion-library",
  description: "conversion-library",
  base,
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  sitemap: {
    hostname: 'https://fxss5201.github.io',
    transformItems: (items) => {
      return items.map(item => {
        return {
          ...item,
          url: base + item.url
        }
      })
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh_CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          { text: 'API', link: '/zh/api/globals' }
        ],

        sidebar: [
          {
            text: 'API',
            items: typedocZhSidebar,
          },
        ],
        returnToTopLabel: '返回顶部',

        socialLinks: [
          { icon: 'github', link: 'https://github.com/fxss5201/conversion-library' },
        ],
    
        editLink: {
          pattern: 'https://github.com/fxss5201/conversion-library/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },

        lastUpdated: {
          text: '最后更新于',
        },
    
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
    
        footer: {
          message: 'Released under the <a href="https://github.com/fxss5201/conversion-library/blob/main/LICENSE">MIT License</a>.',
          copyright: 'Copyright © 2024-present <a href="https://github.com/fxss5201">fxss5201</a>',
        },

        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                }
              }
            }
          },
        },
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'guide', link: '/guide/' },
      { text: 'API', link: '/api/globals' }
    ],

    sidebar: [
      {
        text: 'API',
        items: typedocSidebar,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fxss5201/conversion-library' },
    ],

    editLink: {
      pattern: 'https://github.com/fxss5201/conversion-library/edit/main/docs/:path',
    },
    
    footer: {
      message: 'Released under the <a href="https://github.com/fxss5201/conversion-library/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/fxss5201">fxss5201</a>',
    },

    search: {
      provider: 'local',
    }
  }
})
