<template>
  <a class="vue-skip-to" :href="to">
    <slot>{{ text }}</slot>
  </a>
</template>

<script>
export default {
  name: 'VueSkipTo',

  props: {
    text: {
      type: String,
      default: 'Skip to main content'
    },
    to: {
      type: String,
      default: '#main'
    }
  },

  mounted () {
    this.init()
  },

  beforeDestroy () {
    window.removeEventListener('hashchange', this.handleFocusElement, false)
  },

  methods: {
    init () {
      window.addEventListener('hashchange', this.handleFocusElement, false)
      if (location.hash && location.hash.substring(1)) this.handleFocusElement()
    },

    handleFocusElement () {
      this.focusElement(location.hash.substring(1))
    },

    focusElement (id) {
      if (!id) return
      const element = window.document.getElementById(id)
      if (!element) return
      if (!/^(a|select|input|button|textarea)/i.test(element.tagName.toLowerCase())) {
        element.setAttribute('tabindex', -1)
      }
      element.focus()
    }
  }
}
</script>

<style>
.vue-skip-to {
  position: fixed;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.vue-skip-to:focus {
  left: 0;
  top: 0;
  clip: auto;
  height: auto;
  width: auto;
  padding: 8px 10px;
}
</style>
