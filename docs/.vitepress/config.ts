import { defineConfig } from 'vitepress'
import typedocSidebar from '../api/typedoc-sidebar.json'

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
    
    footer: {
      message: 'Released under the <a href="https://github.com/fxss5201/conversion-library/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/fxss5201">fxss5201</a>',
    },

    search: {
      provider: 'local',
    }
  }
})
