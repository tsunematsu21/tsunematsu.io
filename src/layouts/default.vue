<template>
  <div id="app">
    <app-header />
    <main>
      <transition name="fade">
        <nuxt />
      </transition>
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default Vue.extend({
  components: {
    AppHeader,
    AppFooter
  }
})
</script>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  main {
    flex: 1;
  }
}

.justify-content-center {
  justify-content: center;
}
</style>
