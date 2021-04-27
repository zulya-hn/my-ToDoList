export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ekf-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~assets/scss/app.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg-sprite',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_mixins.scss',
      'bootstrap/scss/_variables.scss'
    ]
  },

  bootstrapVue: {
    bootstrapVueCSS: false,
    bootstrapCSS: false,
    components: ['BContainer', 'BRow', 'BCol', 'BButton', 'BLink']
  },

  svgSprite: {
    input: '~/assets/images/icons'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
