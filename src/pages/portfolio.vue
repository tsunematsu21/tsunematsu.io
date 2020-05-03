<template>
  <div>
    <app-section>
      <h1 class="title"><i class="fas fa-book-open" /> Portfolio</h1>
      <p>
        Showcase my works.
      </p>
    </app-section>
    <app-section>
      <div class="columns">
        <div class="column is-one-third-desktop">
          <RepositoryCard
            repo="tsunematsu21.github.io"
            img="https://repository-images.githubusercontent.com/223420994/8d74bb00-0de9-11ea-8b8d-68378c9ce6f6"
          />
        </div>
        <div class="column is-one-third-desktop">
          <RepositoryCard
            repo="actions-publish-gh-pages"
            img="https://repository-images.githubusercontent.com/223547340/357ba880-0efe-11ea-91a8-4d5cfb245a67"
          />
        </div>
      </div>
    </app-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppSection from '~/components/AppSection.vue'
import RepositoryCard from '~/components/RepositoryCard.vue'

export default Vue.extend({
  components: {
    AppSection,
    RepositoryCard
  }
})
</script>

<style lang="scss" scoped>
#avater {
  position: relative;
  z-index: 2;
  width: 192px;
  height: 192px;
  background-image: url(https://s.gravatar.com/avatar/c639be9f77f708421f2eeddf3d2b8b11?s=192);
  background-size: cover;
  margin: 0px auto -96px;
  border-width: 8px;
  border-style: solid;
  border-color: white;
  border-image: initial;
  border-radius: 100%;
}
</style>
