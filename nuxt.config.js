export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "rentow",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["tachyons/css/tachyons.css", "@/assets/css/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // "~/plugins/vee-validate.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  target: "static",

  ssr: false,

  generate: {
    fallback: true,
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    display: "swap",
    families: {
      "DM+Sans": [400, 500, 700],
      Poppins: [400, 500, 700],
      Montserrat: [400, 500, 700],
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: false,
          // required: true,
          // type: "Bearer",
        },
        user: {
          property: false,
          autoFetch: false,
        },
        endpoints: {
          login: { url: "/login", method: "post", propertyName: "token" },
          logout: false,
          user: false,
          // user: { url: '/api/auth/user', method: 'get' }
        },
      },
    },
  },
  // router: {
  //   middleware: ['auth']
  // },
  axios: {
    baseURL: "https://rentow.herokuapp.com/api",
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // transpile: ["vee-validate/dist/rules"]
  },
};
