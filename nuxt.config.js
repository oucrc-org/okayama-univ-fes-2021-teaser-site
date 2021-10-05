import webpack from 'webpack'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '岡山大学祭2021 | 笑顔満祭岡大祭 〜心機一転しちゃいな祭〜',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: '岡山大学祭2021 | 笑顔満祭岡大祭 〜心機一転しちゃいな祭〜' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://oufes2021.com' },
      { hid: 'og:title', property: 'og:title', content: '岡山大学祭2021' },
      { hid: 'og:description', property: 'og:description', content: '笑顔満祭岡大祭 〜心機一転しちゃいな祭〜' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://raw.githubusercontent.com/smpny7/okayama-univ-fes-2021-countdown/main/ogp.jpg'
      },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://rawgit.com/kimmobrunfeldt/progressbar.js/master/dist/progressbar.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: ['jquery', 'bootstrap', 'jquery-scrollify'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },

  env: {
    OPEN_DATE: process.env.OPEN_DATE
  },

  // Google Font
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900', 'Noto+Sans+JP:100,300,400,500,700,900']
    }
  }
}
