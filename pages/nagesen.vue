<template>
  <div class="has-text-centered">
    <h1 class="title"><i class="fas fa-coins" /> Support me</h1>
    <p class="subtitle">
      In Japan, sending money and gifts for support on the Internet is known as
      <em>Nagesen</em>.
    </p>
    <div class="columns">
      <div class="column">
        <div class="box">
          <section class="content">
            <h2><i class="fas fa-heart" /> Would you support me?</h2>
            <p>
              Please support me if you like. Gladly accepting support in several
              ways.
            </p>
          </section>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-flex">
        <div class="card">
          <section class="card-content">
            <h3 class="title has-text-primary">
              Kyash
            </h3>
            <div class="columns">
              <div class="column">
                <a href="kyash://qr/u/7919347958298828142">
                  <img src="~/assets/kyash_qrcode.png" />
                </a>
              </div>
              <div class="column">
                <p class="has-text-left">
                  With
                  <a
                    href="https://kyash.co/"
                    target="_blank"
                    class="has-text-primary"
                  >
                    Kyash
                  </a>
                  accounts, you can send real-time money anytime, anywhere with
                  no fees. Your support will help my activity at whatever price.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="column is-flex">
        <div class="card">
          <section class="card-content">
            <h3 class="title has-text-primary">Ko-fi</h3>
            <p class="has-text-left">
              On my Ko-fi page, accepting support by price of a coffee. It is
              friendly and free way for support my work. Please visit my Ko-fi
              page from the button below.<br />
            </p>
          </section>
          <div class="card-footer">
            <a
              href="https://ko-fi.com/tsunematsu21"
              target="_blank"
              class="card-footer-item has-text-ko-fi"
            >
              <span class="icon">
                <i class="fas fa-coffee" />
              </span>
              <span>Support Me on Ko-fi</span>
            </a>
          </div>
        </div>
      </div>

      <div class="column is-flex">
        <div class="card">
          <section class="card-content">
            <h3 class="title has-text-primary">Feedback</h3>
            <p class="has-text-left">
              Please give me feedback on
              <nuxt-link to="/portfolio" class="has-text-primary"
                >my works</nuxt-link
              >. It's encourage me more than you think. Accepting your feedback
              in contact page.
            </p>
          </section>
          <div class="card-footer">
            <router-link
              to="portfolio"
              class="card-footer-item has-text-primary"
            >
              <span class="icon">
                <i class="fas fa-envelope" />
              </span>
              <span>Send Feedback</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <div class="card">
          <section class="card-content">
            <h3 class="title has-text-primary">Other option</h3>
            <p>Getting Ready.</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.card {
  display: flex;
  flex-direction: column;
  > .card-footer {
    margin-top: auto;
  }
}
</style>
