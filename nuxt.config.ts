// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
      ],

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  plugins: [
    '@/plugins/yandex-metrika.js'
  ],

  site: {
    url: 'https://inwy.ru',
  },

  sitemap: {

    sitemaps: {
      pages: {
        sources: [
          '/api/__sitemap__/urls',
        ]
      },
      posts: {
        sources: [
          '/api/__sitemap__/wordpress-posts',
        ]
      },

      postCategories: {
        sources: [
          '/api/__sitemap__/wordpress-posts-categories',
        ]
      },

      products: {
        sources: [
          '/api/__sitemap__/wordpress-works',
        ]
      },


      // static: {
      //   sources: [
      //     'https://psih2131-gifts-of-siberia-34fa.twc1.net',
      //   ]
      // }
    }
  },





  compatibilityDate: '2025-05-15',
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  robots: {
    // blockAiBots: true
    allow: '*'
  },

  modules: [
    '@pinia/nuxt',
    'nuxt-aos',
    'nuxt-swiper',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
})