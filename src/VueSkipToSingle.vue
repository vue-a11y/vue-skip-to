<template>
  <component
    :is="comp"
    v-bind="props"
    @click.prevent="handleFocusElement"
    class="vue-skip-to__link"
  >
    <slot>{{ label }}</slot>
  </component>
</template>

<script>
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
    },
  },

  computed: {
    targetIsId () {
      return this.to.substring(0, 1) === '#'
    },

    comp () {
      if (this.targetIsId) return 'a'
      return 'button'
    },

    props () {
      if (this.targetIsId) {
        return {
          href: this.to,
        }
      }

      return {}
    }
  },

  methods: {
    handleFocusElement () {
      if (this.targetIsId) {
        const id = this.to.substring(1)
        if (!id) return
        const element = window.document.getElementById(id)
        this.focusElement(element)
      } else {
        const element = window.document.querySelector(this.to)
        this.focusElement(element)
      }
    },

    focusElement (element) {
      if (!element) return
      if (
        !/^(a|select|input|button|textarea)/i.test(
          element.tagName.toLowerCase()
        )
      ) {
        element.setAttribute('tabindex', -1)
      }
      element.focus()
    }
  }
}
</script>
