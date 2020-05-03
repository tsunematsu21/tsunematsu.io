<template>
  <footer class="footer has-background-dark has-text-light">
    <div class="container has-text-centered">
      <social-buttons
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
          <b>tsunematsu21</b></a
        >.<br />
        Made with
        <a href="https://nuxtjs.org" target="_blank" class="has-text-light">
          <b>Nuxt.js</b>
        </a>
        &
        <a href="https://bulma.io" target="_blank" class="has-text-light">
          <b>Bulma</b></a
        >.<br />
        Hosted on
        <a
          href="https://pages.github.com"
          target="_blank"
          class="has-text-light"
        >
          <b>GitHub Pages</b></a
        >.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialButtons from '~/components/SocialButtons.vue'

export default Vue.extend({
  components: {
    SocialButtons
  }
})
</script>
