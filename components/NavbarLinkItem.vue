<template>
  <nuxt-link :to="path" class="navbar-item">
    <span class="icon">
      <i :class="classes" />
    </span>
    <span>{{ name }}</span>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    classes: {
      type: [String],
      required: true
    }
  }
})
</script>
