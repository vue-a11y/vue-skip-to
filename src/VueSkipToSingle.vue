<template>
  <a
    :href="to"
    @click.prevent="handleFocusElement"
    @focus="$emit('focused', true)"
    @blur="$emit('focused', false)"
    class="vue-skip-to__link"
  >
    <slot>{{ label }}</slot>
  </a>
</template>

<script>
import { programmaticFocus } from './util'

const focusedTags = new RegExp('^(a|select|input|button|textarea)', 'i')

export default {
  name: 'VueSkipToSingle',

  props: {
    label: {
      type: String,
      default: 'Skip to main content'
    },
    to: {
      type: String,
      default: '#main'
    }
  },

  emits: ['focused'],

  methods: {
    handleFocusElement ({ target }) {
      this.focusElement(target.getAttribute('href').substring(1))
    },

    focusElement (id) {
      if (!id) return
      const element = window.document.getElementById(id)
      if (!element) return
      if (!focusedTags.test(element.tagName.toLowerCase())) return programmaticFocus(element)
      element.focus()
    }
  }
}
</script>
