import { defineConfig } from 'vitepress'
import typedocSidebar from '../api/typedoc-sidebar.json'
import typedocZhSidebar from '../zh/api/typedoc-sidebar.json'

const base = '/conversion-library/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "conversion-library",
  description: "conversion-library",
  base,
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
