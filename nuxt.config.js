const path = require('path');

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: process.env.VUE_APP_PORT, // default: 3000
    host: "0.0.0.0", // default: localhost,
    timing: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: process.env.VUE_APP_TITLE + " - %s ",
    title: process.env.VUE_APP_TITLE,
    htmlAttrs: {
      lang: "pt-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "Leandro Melo" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/notifications.plugin.js", ssr: false },
    { src: "~/plugins/httpClient.plugin.js" },
    { src: "~/plugins/utils.plugin.js", ssr: false },
    { src: '~/plugins/notifyShortCuts.plugin.js' },
    { src: '~/plugins/objSsr.plugin.js' },
    { src: '~/plugins/format.plugin.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'module-alias'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/sitemap",
    "@nuxtjs/style-resources",
  ],

  sitemap: {
    filter({ routes }) {
      return routes.map((route) => {
        route.url = `${route.url}/`;
        return route;
      });
    },
  },

  axios: {
    credentials: false,
    proxy: true,
  },

  proxy: {
    "/api/": {
      target: process.env.VUE_APP_API_URL,
      changeOrigin: true,
    },
  },

  styleResources: {
    scss: ["~/assets/variables.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.resolve.alias = {
          ...config.resolve.alias,
          ...{
            '@': __dirname,
            '@api': `${__dirname}/api`,
            '@images': `${__dirname}/assets/images`,
            '@atoms': `${__dirname}/components/atoms`,
            '@molecules': `${__dirname}/components/molecules`,
            '@organisms': `${__dirname}/components/organisms`,
            '@pages': `${__dirname}/pages`,
            '@plugins': `${__dirname}/plugins`,
          },
        };
        config.output.globalObject = 'this';
      }
    },
  },

  router: {
    prefetchLinks: false,
    prefetchPayloads: false,
  },

  publicRuntimeConfig: {
    VUE_APP_BASE_HREF: process.env.VUE_APP_BASE_HREF,
    VUE_APP_TITLE: process.env.VUE_APP_TITLE,
    VUE_APP_API_URL: process.env.VUE_APP_API_URL,
  },
};
