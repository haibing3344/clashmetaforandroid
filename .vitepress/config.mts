import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Clash Meta For Android官网",
  description: "Clash Meta For Android是一款功能强大的Android平台上的代理工具，提供多种代理协议支持、自定义规则、智能路由等功能",
  lang: 'zh-CN',
  cleanUrls: false, // 禁用干净URL，保留.html后缀
  sitemap: {
    hostname: 'https://clashmeta.bid'
  },
  head: [
    ['meta', { name: 'keywords', content: 'Clash Meta For Android, Clash Meta For Android官网, Clash Meta For Android下载地址, 安卓代理工具, 网络代理' }],
    ['meta', { property: 'og:title', content: 'Clash Meta For Android官网' }],
    ['meta', { property: 'og:description', content: 'Clash Meta For Android是一款功能强大的Android平台上的代理工具，提供多种代理协议支持、自定义规则、智能路由等功能' }],
    ['meta', { property: 'og:url', content: 'https://clashmeta.bid' }],
    ['meta', { property: 'og:image', content: 'https://clashmeta.bid/assets/logo.webp' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Clash Meta For Android官网' }],
    ['meta', { name: 'twitter:description', content: 'Clash Meta For Android是一款功能强大的Android平台上的代理工具，提供多种代理协议支持、自定义规则、智能路由等功能' }],
    ['meta', { name: 'twitter:image', content: 'https://clashmeta.bid/assets/logo.webp' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Clash Meta For Android',
      'operatingSystem': 'Android',
      'applicationCategory': 'UtilitiesApplication',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      },
      'description': 'Clash Meta For Android是一款功能强大的Android平台上的代理工具，提供多种代理协议支持、自定义规则、智能路由等功能'
    })]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/assets/logo.webp', alt: 'Clash Meta For Android Logo' },
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduction.md' },
      { text: '下载', link: '/download.md' },
      { text: '教程', link: '/tutorial.md' },
      { text: '🎉机场推荐', link: 'https://jichang360.com' },
      { text: '常见问题', link: '/faq.md' }
    ],

    sidebar: [
      {
        text: 'Clash Meta For Android',
        items: [
          { text: '介绍', link: '/introduction.md' },
          { text: '下载', link: '/download.md' },
          { text: '使用教程', link: '/tutorial.md' },
          { text: '🎉机场推荐', link: '/feed.md' },
          { text: '常见问题', link: '/faq.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MetaCubeX/ClashMetaForAndroid' }
    ],

    footer: {
      message: '本站内容仅供学习交流使用，不代表任何组织或个人立场',
      copyright: 'Copyright © 2025-present <a href="/">Clash Meta For Android</a>'
    }
  }
})
