<template>
  <div class="buttons" :class="buttonsClasses">
    <a
      v-for="item in linkItems"
      :key="item.name"
      :href="item.href"
      :target="target"
      class="button"
      :class="buttonClasses || item.buttonClasses"
    >
      <span class="icon">
        <i :class="item.iconClasses" />
      </span>
      <span v-if="!isIconOnly">
        {{ item.name }}
      </span>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    buttonsClasses: {
      type: [String],
      required: false,
      default: null
    },
    buttonClasses: {
      type: [String],
      required: false,
      default: null
    },
    target: {
      type: String,
      required: false,
      default: '_blank'
    },
    isIconOnly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      linkItems: [
        {
          name: 'Twitter',
          href: 'https://twitter.com/tsunematsu21',
          iconClasses: 'fab fa-twitter',
          buttonClasses: ['is-twitter']
        },
        {
          name: 'GitHub',
          href: 'https://github.com/tsunematsu21',
          iconClasses: 'fab fa-github',
          buttonClasses: ['is-github']
        },
        {
          name: 'Medium',
          href: 'https://medium.com/@tsunematsu21',
          iconClasses: 'fab fa-medium',
          buttonClasses: ['is-medium-com']
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/tsunematsu21',
          iconClasses: 'fab fa-instagram',
          buttonClasses: ['is-instagram']
        }
      ]
    }
  }
})
</script>
