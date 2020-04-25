<template>
  <div class="card">
    <div v-if="!!img" class="card-image">
      <figure class="image">
        <img :src="img" />
      </figure>
    </div>
    <div class="card-content has-text-left">
      <section class="content">
        <h4>
          <svg
            class="octicon octicon-repo"
            viewBox="0 0 12 16"
            version="1.1"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            />
          </svg>
          {{ name }}
        </h4>
        <p>
          {{ description }}
        </p>
        <p>
          {{ language }}
          &nbsp;
          <span class="has-text-yellow">
            <svg
              class="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>
            {{ stargazers_count.toLocaleString() }} </span
          >&nbsp;
          <span>
            <svg
              class="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>
            {{ forks_count.toLocaleString() }} </span
          >&nbsp;
          <span class="is-pulled-right">
            {{ size.toLocaleString() }}&nbsp;KB
          </span>
        </p>
      </section>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          View on
          <a :href="html_url" target="_blank"
            >GitHub <i class="fab fa-github"
          /></a>
        </span>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    repo: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      name: '',
      description: '',
      html_url: '',
      language: '',
      stargazers_count: 0,
      forks_count: 0,
      size: 0
    }
  },
  async mounted() {
    const repository = await this.$axios.$get(
      `https://api.github.com/repos/tsunematsu21/${this.repo}`
    )
    this.name = repository.name
    this.description = repository.description
    this.html_url = repository.html_url
    this.language = repository.language
    this.stargazers_count = repository.stargazers_count
    this.forks_count = repository.forks_count
    this.size = repository.size
  }
})
</script>

<style lang="scss" scoped>
.octicon {
  display: inline-block;
  fill: currentColor;
  height: 1em;
  margin-right: 0;
  vertical-align: text-bottom;
}
</style>
