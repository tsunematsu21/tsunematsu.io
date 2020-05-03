<template>
  <app-link :to="to" :href="href" class="button">
    <slot />
  </app-link>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLink from '~/components/AppLink.vue'

export default Vue.extend({
  components: {
    AppLink
  },
  props: {
    to: {
      type: String,
      required: false,
      default: ''
    },
    href: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>
