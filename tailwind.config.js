/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './App.vue',
    './pages/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
    './pv/**/*.{js,ts}',
    './nuxt.config.{js,ts}', // Include Nuxt config if needed
  ],
  theme: {
    extend: {
      colors: {
        'base-2': 'var(--p-base-2) !important',
        'base-3': 'var(--p-base-3) !important',
        'base-6': 'var(--p-base-6) !important',
        'green-6': 'var(--p-green-6) !important',
        'red-6': 'var(--p-red-6) !important',
      },
    },
  },
  plugins: [],
}
