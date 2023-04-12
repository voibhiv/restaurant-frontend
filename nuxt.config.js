const path = require("path");

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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/notifications.plugin.js", ssr: false },
    { src: "~/plugins/httpClient.plugin.js" },
    { src: "~/plugins/utils.plugin.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

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
    extend(config, ctx) {
      config.resolve.alias["@"] = path.resolve(__dirname, "");
      config.resolve.alias["@api"] = path.resolve(__dirname, "api/");
      config.resolve.alias["@images"] = path.resolve(
        __dirname,
        "assets/images/"
      );
      config.resolve.alias["@atoms"] = path.resolve(
        __dirname,
        "components/atoms/"
      );
      config.resolve.alias["@molecules"] = path.resolve(
        __dirname,
        "components/molecules/"
      );
      config.resolve.alias["@organisms"] = path.resolve(
        __dirname,
        "components/organisms/"
      );
      config.resolve.alias["@pages"] = path.resolve(__dirname, "pages/");
      config.resolve.alias["@plugins"] = path.resolve(__dirname, "plugins/");
      config.output.globalObject = "this";
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
