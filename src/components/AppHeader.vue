<template>
  <header>
    <nav class="navbar is-spaced is-primary" role="navigation">
      <div class="container">
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
            <app-link
              v-for="item in $navigations"
              :key="item.name"
              class="navbar-item"
              :to="item.to"
              :title="item.description"
            >
              <span class="icon">
                <i :class="item.iconClass" />
              </span>
              <span>
                {{ item.name }}
              </span>
            </app-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLink from '~/components/AppLink.vue'

export default Vue.extend({
  components: {
    AppLink
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNavBar() {
      this.isActive = !this.isActive
    }
  }
})
</script>
