<template>
  <nuxt-link v-if="to" :to="to">
    <slot />
  </nuxt-link>
  <a v-else-if="href" :href="href" target="_blank">
    <slot />
  </a>
  <button v-else>
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
