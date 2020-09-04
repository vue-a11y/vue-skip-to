<template>
  <div
    class="vue-skip-to"
    ref="skipTo"
    :class="{ 'focused': focused }"
  >
    <component
      @focused="focusWithin"
      @focus-within="focusWithin"
      :is="comp"
      v-bind="props"
    />
  </div>
</template>

<script>
import VueSkipToSingle from './VueSkipToSingle.vue'
import VueSkipToList from './VueSkipToList.vue'
import { programmaticFocus } from './util'

export default {
  name: 'VueSkipTo',

  props: {
    listLabel: {
      type: String,
      default: 'Skip to'
    },
    label: {
      type: String,
      default: 'Skip to main content'
    },
    to: {
      type: [String, Array],
      default: '#main'
    }
  },

  data () {
    return {
      focused: false
    }
  },

  mounted () {
    if (this.$route) {
      this.$watch('$route.path', () => {
        this.$nextTick(() => programmaticFocus(this.$refs.skipTo))
      })
    }
  },

  computed: {
    isList () {
      return Array.isArray(this.to)
    },

    comp () {
      return this.isList ? VueSkipToList : VueSkipToSingle
    },

    props () {
      if (this.isList) return { listLabel: this.listLabel, to: this.to }
      return { label: this.label, to: this.to }
    }
  },

  methods: {
    focusWithin (val) {
      this.focused = val
    }
  }
}
</script>

<style>
.vue-skip-to * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

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

.vue-skip-to.focused, .vue-skip-to:hover {
  left: 0;
  top: 0;
  clip: auto;
  height: auto;
  width: auto;
  background-color: white;
  border: 2px solid #333;
}

.vue-skip-to__nav-list {
  list-style-type: none;
}

.vue-skip-to__nav > span, .vue-skip-to__link {
  display: block;
  padding: 8px 16px;
  color: #333;
  font-size: 18px;
}

.vue-skip-to__nav > span {
  border-bottom: 2px solid #333;
  font-weight: bold;
}

.vue-skip-to__link {
  text-decoration: none;
}

.vue-skip-to__link:focus {
  outline: none;
  background-color: #333;
  color: #f2f2f2;
}

</style>
