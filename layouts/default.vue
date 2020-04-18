<template>
  <div>
    <section class="hero is-fullheight is-primary">
      <header class="hero-head">
        <div class="container">
          <nav class="navbar is-spaced is-primary" role="navigation">
            <div class="navbar-brand">
              <nuxt-link
                to="/"
                active-class=""
                class="navbar-item has-text-weight-bold"
              >
                tsunematsu.io
              </nuxt-link>
              <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar-menu"
                @click="toggleNavBar"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>

            <div
              id="navbar-menu"
              :class="{ 'is-active': isActive }"
              class="navbar-menu"
            >
              <div class="navbar-end">
                <NavbarLinkItem
                  v-for="item in navbarLinkItems"
                  :key="item.name"
                  :name="item.name"
                  :path="item.path"
                  :classes="item.classes"
                />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main class="hero-body">
        <transition name="fade">
          <div class="container">
            <nuxt />
          </div>
        </transition>
      </main>
    </section>
    <footer class="footer has-background-dark has-text-light">
      <div class="content has-text-centered">
        <SocialButtons
          buttons-classes="justify-content-center"
          button-classes="is-white is-outlined"
        />
        <p>
          Handcrafted with <i class="fas fa-heart" /> by
          <a
            href="https://github.com/tsunematsu21"
            target="_blank"
            class="has-text-light"
          >
            <b>tsunematsu21</b> </a
          >.<br />
          Made with
          <a href="https://nuxtjs.org" target="_blank" class="has-text-light">
            <b>Nuxt.js</b>
          </a>
          &
          <a href="https://bulma.io" target="_blank" class="has-text-light">
            <b>Bulma</b>
          </a>
          .<br />
          Hosted on
          <a
            href="https://pages.github.com"
            target="_blank"
            class="has-text-light"
          >
            <b>GitHub Pages</b>
          </a>
          .
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavbarLinkItem from '~/components/NavbarLinkItem.vue'
import SocialButtons from '~/components/SocialButtons.vue'

export default Vue.extend({
  components: {
    NavbarLinkItem,
    SocialButtons
  },
  data() {
    return {
      isActive: false,
      navbarLinkItems: [
        {
          name: 'About me',
          path: '/about',
          classes: 'fas fa-running'
        },
        {
          name: 'Portfolio',
          path: '/portfolio',
          classes: 'fas fa-book-open'
        },
        {
          name: 'Say hello',
          path: '/contact',
          classes: 'fas fa-envelope'
        },
        {
          name: 'Support me',
          path: '/nagesen',
          classes: 'fas fa-coins'
        }
      ]
    }
  },
  methods: {
    toggleNavBar() {
      this.isActive = !this.isActive
    }
  }
})
</script>

<style lang="scss">
.justify-content-center {
  justify-content: center;
}
</style>
