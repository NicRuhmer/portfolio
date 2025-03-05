export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport:
        "user-scalable=yes, initial-scale=1.0, maximum-scale=1, width=device-width",
      title: "Heriniaina Rogenico Ruhmer Ralison",
      htmlAttrs: {
        lang: "en",
        "data-theme": "dark",
      },
      link: [
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
      ],
      script: [
        {
          innerHTML: `
          (function() {
            const theme = localStorage.getItem('theme') || 'dark';
            document.documentElement.setAttribute('data-theme', theme);
          })();
        `,
          type: "text/javascript",
        },
        {
          innerHTML: `
            (function() {
              const redirect = sessionStorage.redirect;
              delete sessionStorage.redirect;
              if (redirect && redirect !== location.href) {
                history.replaceState(null, null, redirect);
              }
            })();
          `,
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
      meta: [{ name: "description", content: "Portfolio test" }],
    },
    baseURL: "/portfolio/",
    buildAssetsDir: "/portfolio/_nuxt/",
    ssr: false,
  },
  router: {
    options: {
      strict: false,
    },
  },
  image: {
    dir: "public",
    provider: "ipx",
    presets: {
      default: {
        modifiers: {
          quality: 80,
        },
      },
    },
    domains: ["localhost"],
    alias: {
      portfolio: ".",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/image"],
  plugins: [],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  // add postcss support for tailwindcss
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-09-25",
});
