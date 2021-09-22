export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'rentow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'tachyons/css/tachyons.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  target: 'static',

  ssr: false,

  generate: {
     fallback: true
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-fonts'
   
  ],

  googleFonts: {
    display: 'swap', 
    families: {
        'DM+Sans': [400,500,700]
      } 
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' }
          // user: { url: '/api/auth/user', method: 'get' }
        }
      }
    }
  },
  // router: {
  //   middleware: ['auth']
  // },
  axios: {
    baseURL: "https://rentow.herokuapp.com/api"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
