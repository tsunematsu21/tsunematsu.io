import { Configuration } from '@nuxt/types'

const nuxtConfig: Configuration = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'theme-color', content: '#ff6f61' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '~assets/main.scss',
    '@fortawesome/fontawesome-free/css/all.css',
    '~assets/transition.scss'
  ],
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
  }
}

module.exports = nuxtConfig
