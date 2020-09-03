<template>
  <a
    :href="to"
    @click.prevent="handleFocusElement"
    class="vue-skip-to__link"
  >
    <slot>{{ label }}</slot>
  </a>
</template>

<script>
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

  methods: {
    handleFocusElement ({ target }) {
      this.focusElement(target.getAttribute('href').substring(1))
    },

    focusElement (id) {
      if (!id) return
      const element = window.document.getElementById(id)
      if (!element) return
      const isFocused = focusedTags.test(element.tagName.toLowerCase())
      !isFocused && element.setAttribute('tabindex', -1)
      element.focus()
      !isFocused && element.removeAttribute('tabindex')
    }
  }
}
</script>
