<template>
  <a class="vue-skip-to" :href="to" :tabindex="tabindex" v-text="text"></a>
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
    },
    tabindex: {
      type: [Number, null],
      default: null
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      window.addEventListener('hashchange', () => {
        this.focusElement(location.hash.substring(1))
      }, false)

      if (location.hash && location.hash.substring(1)) {
        console.log(location.hash.substring(1))
        this.focusElement(location.hash.substring(1))
      }
    },

    focusElement (id) {
      if (!id) return
      let element = window.document.getElementById(id)
      if (element) {
        if (!/^(a|select|input|button|textarea)/i.test(element.tagName.toLowerCase())) {
          console.log('entrou')
          element.setAttribute('tabindex', -1)
        }
        element.focus()
      }
    }
  }
}
</script>

<style>
.vue-skip-to {
  position: absolute;
  left: 0;
  top: -100%;
  z-index: 1000;
  width: max-content;
  padding: 8px 10px;
  color: #fff
}

.vue-skip-to:focus {
  background-color: #800000;
  top: 0;
  left: 0;
}
</style>
