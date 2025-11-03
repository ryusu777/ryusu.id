// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/otf',
          crossorigin: 'anonymous',
          href: '/fonts/SFMono Regular Nerd Font Complete.otf',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/otf',
          crossorigin: 'anonymous',
          href: '/fonts/SFMono Semibold Nerd Font Complete.otf',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/otf',
          crossorigin: 'anonymous',
          href: '/fonts/SFMono Bold Nerd Font Complete.otf',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/svg/logo.svg',
          media: '(prefers-color-scheme: dark)',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/svg/logo-dark.svg',
          media: '(prefers-color-scheme: light)',
        },
      ],
    },
  },
  modules: ['@nuxt/image', '@nuxt/icon'],
});
