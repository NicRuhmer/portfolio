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
      ],
      meta: [{ name: "description", content: "Portfolio test" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-icon"],
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
