export default {
  // Target: https://go.nuxtjs.dev/config-target

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: null,
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk
        ? `${titleChunk} - Nuxt BootStrap Template`
        : 'Nuxt BootStrap Template'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/db.client.js', '@/plugins/init.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  eslint: {
    cache: false
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.nuxtjs.dev'
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
    // https://go.nuxtjs.dev/content
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  bootstrapVue: {
    icons: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    icon: {
      source: './static/app-icon.png'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: 'route-controller'
  },

  loadingIndicator: {
    name: 'circle',
    color: '#007bff'
  }
}
