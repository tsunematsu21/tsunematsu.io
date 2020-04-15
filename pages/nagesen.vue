<template>
  <div class="has-text-centered">
    <h1 class="title"><i class="fas fa-coins" /> Support me</h1>
    <p class="subtitle">
      In Japan, sending money and gifts for support on the Internet is known as
      <em>Nagesen</em>.
    </p>
    <div class="has-text-left">
      <div class="card has-background-main">
        <div class="card-content">
          <section class="content has-text-centered">
            <h2><i class="fas fa-coins" /> Would you support me?</h2>
            <p>
              Please support me if you like. Gladly accepting support in several
              ways.
            </p>
            <hr />
            <div class="columns is-desktop">
              <div class="column">
                <section class="has-text-centered">
                  <h3 class="has-text-primary">
                    <a
                      href="https://kyash.co/"
                      target="_blank"
                      class="has-text-primary"
                      >Kyash</a
                    >
                  </h3>
                  <div class="columns">
                    <div class="column">
                      <a href="kyash://qr/u/7919347958298828142"
                        ><img src="~/assets/kyash_qrcode.png"
                      /></a>
                    </div>
                    <div class="column">
                      <p class="has-text-left">
                        With Kyash accounts, you can send real-time money
                        anytime, anywhere with no fees.<br />
                        (See
                        <a
                          href="https://kyash.co/"
                          target="_blank"
                          class="has-text-primary"
                          >https://kyash.co/</a
                        >)<br />
                        Your support will help my activity at whatever price.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div class="column">
                <section class="has-text-centered">
                  <h3 class="has-text-primary">
                    Feedback
                  </h3>
                  <p class="has-text-left">
                    Please give me feedback on
                    <nuxt-link to="/portfolio" class="has-text-primary"
                      >my works</nuxt-link
                    >. It's encourage me more than you think. Accepting your
                    feedback in
                    <a
                      href="https://twitter.com/tsunematsu21"
                      target="_blank"
                      class="has-text-primary"
                      >Twitter</a
                    >
                    and Issue (in each GitHub repository).
                  </p>
                </section>
              </div>
              <div class="column is-desktop">
                <section class="has-text-centered">
                  <h3 class="has-text-primary">Other option</h3>
                  <p>Getting Ready.</p>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $axios }) {
    const user = await $axios.$get('https://api.github.com/users/tsunematsu21')
    return {
      avatar_url: user.avatar_url
    }
  }
})
</script>
