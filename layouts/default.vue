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
                tsunematsu21
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
                <nuxt-link to="/about" class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-running" />
                  </span>
                  <span>
                    About me
                  </span>
                </nuxt-link>
                <nuxt-link to="/portfolio" class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-book-open" />
                  </span>
                  <span>
                    Portfolio
                  </span>
                </nuxt-link>
                <nuxt-link to="/contact" class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-envelope" />
                  </span>
                  <span>
                    Say hello
                  </span>
                </nuxt-link>
                <nuxt-link to="/nagesen" class="navbar-item">
                  <span class="icon">
                    <i class="fas fa-coins" />
                  </span>
                  <span>
                    Support me
                  </span>
                </nuxt-link>
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
        <div class="buttons justify-content-center">
          <a
            href="https://twitter.com/tsunematsu21"
            target="_blank"
            class="button is-white is-outlined"
          >
            <span class="icon">
              <i class="fab fa-twitter" />
            </span>
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/tsunematsu21"
            target="_blank"
            class="button is-white is-outlined"
          >
            <span class="icon">
              <i class="fab fa-github" />
            </span>
            <span>GitHub</span>
          </a>
        </div>
        <p>
          Handcrafted with <i class="fas fa-heart" /> by
          <a
            href="https://github.com/tsunematsu21"
            target="_blank"
            class="has-text-light"
            ><b>tsunematsu21</b></a
          >.<br />
          Made with
          <a href="https://nuxtjs.org" target="_blank" class="has-text-light"
            ><b>Nuxt.js</b></a
          >
          &
          <a href="https://bulma.io" target="_blank" class="has-text-light"
            ><b>Bulma</b></a
          >.<br />
          Hosted on
          <a
            href="https://pages.github.com"
            target="_blank"
            class="has-text-light"
            ><b>GitHub Pages</b></a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    const isActive: boolean = false
    return {
      isActive
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
