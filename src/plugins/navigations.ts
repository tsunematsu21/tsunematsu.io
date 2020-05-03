import Vue from 'vue'

interface AppNavigation {
  name: String
  description: String
  to: String
  iconClass: String
}

declare module 'vue/types/vue' {
  interface Vue {
    $navigations: Array<AppNavigation>
    $navigation(to: String): AppNavigation
  }
}

const navigations = [
  {
    name: 'Portfolio',
    description: 'Showcase my works',
    to: '/portfolio',
    iconClass: 'fas fa-book-open'
  },
  {
    name: 'Get in touch',
    description: 'My inbox is always open',
    to: '/contact',
    iconClass: 'fas fa-envelope'
  },
  {
    name: 'Support me',
    description: 'Please support me if you like',
    to: '/nagesen',
    iconClass: 'fas fa-bullhorn'
  }
]

Vue.prototype.$navigations = navigations
Vue.prototype.$navigation = (to: String) => {
  return navigations.find((item) => item.to === to)
}
