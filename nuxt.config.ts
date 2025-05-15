// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    'nuxt-electron',
    [
      'nuxt-lodash',
      {
        prefix: '_',
        prefixSkip: false,
        upperAfterPrefix: false,
      },
    ],
  ],

  imports: {
    dirs: ['pv/**'],
  },
  devtools: { enabled: false },

  css: ['~/assets/scss/app.scss', '~/assets/scss/pv.scss'],

  compatibilityDate: '2024-11-01',

  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
    ],
    disableDefaultOptions: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  primevue: {
    importTheme: { from: '@/pv/theme', as: 'globalTheme' },
    importPT: { from: '@/pv/pt', as: 'globalPT' },
    options: {
      ptOptions: {
        mergeProps: true,
      },
    },
  },
})
