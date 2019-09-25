const axios = require('axios')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  head: {
    title: 'Bram Kleiweg',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Graphic Design'
      },
      {
        name: 'og:title',
        content: 'Bram Kleiweg'
      },
      {
        name: 'og:description',
        content: 'Graphic Design'
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:url',
        content: 'https://www.bramkleiweg.com/'
      },
      {
        name: 'og:image',
        content: './assets/images/bram-kleiweg-image.jpg'
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  loading: {
    color: '#000',
    heright: '2px',
    throttle: '200'
  },

  css: [
    '~/assets/styling/reset.css',
    '~/assets/styling/variables.sass',
    '~/assets/styling/typography.sass',
    '~/assets/styling/transitions.sass',
    '~/assets/styling/main.sass'
  ],

  plugins: [],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.NODE_ENV === 'production' // Generate new token
          ?
          'IFkYnGTmkvPNorcAV0vEbwtt' : 'a4koUFuhCdl89KPtRjGfewtt',
        cacheProvider: 'memory'
      }
    ]
  ],

  generate: {
    routes: function () {
      return axios
        .get(
          'https://api.storyblok.com/v1/cdn/stories?version=published&token=LQu2PyUnQQnXdQrLxQ460Att&starts_with=blog&cv=' +
          Math.floor(Date.now() / 1e3)
        )
        .then(res => {
          const blogPosts = res.data.stories.map(bp => bp.full_slug)
          return ['/', '/blog', '/about', ...blogPosts]
        })
    }
  },

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
