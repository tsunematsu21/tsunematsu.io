import { Configuration } from '@nuxt/types'

export default {
  mode: 'spa',
  srcDir: 'src',
  head: {
    title: 'tsunematsu.io | The awesome portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "I'm Japanese coke drinking IT infrastructure engineer based in Tokyo, Japan."
      },
      { name: 'theme-color', content: '#ff6f61' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['~assets/scss/main.scss'],
  router: {
    linkActiveClass: 'is-active'
  },
  pageTransition: {
    name: 'zoom-in',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'fade-right',
    mode: 'out-in'
  },
  modules: ['@nuxtjs/axios'],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: 'UA-153177112-1'
  },
  plugins: ['~/plugins/navigations']
} as Configuration
