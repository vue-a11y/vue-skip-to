<template>
  <nav class="vue-skip-to__nav" aria-labelledby="list-title">
    <span id="list-title">{{ listLabel }}</span>
    <ul class="vue-skip-to__nav-list">
      <li
        v-for="el in to"
        :key="el.anchor"
        class="vue-skip-to__nav-list-item"
        @keydown.prevent.up="handleKeydown"
        @keydown.prevent.down="handleKeydown"
      >
        <VueSkipToSingle
          :to="el.anchor"
          @focused="$emit('focus-within', $event)"
          :aria-label="el.ariaLabel || el.label"
        >
          {{ el.label }}
        </VueSkipToSingle>
      </li>
    </ul>
  </nav>
</template>

<script>
import VueSkipToSingle from './VueSkipToSingle.vue'

export default {
  name: 'VueSkipToList',

  components: {
    VueSkipToSingle
  },

  props: {
    listLabel: {
      type: String,
      default: 'Skip to'
    },
    to: {
      validator: function (val) {
        return Array.isArray(val) &&
          val.every(({ anchor, label }) => (
            typeof anchor === 'string' &&
              anchor.indexOf('#') === 0 &&
              typeof String(label) === 'string'
          ))
      }
    }
  },

  emits: ['focus-within'],

  methods: {
    handleKeydown ({ key, target }) {
      const parent = target.parentElement
      const itemList = /(ArrowUp|Up)/g.test(key) ? parent.previousElementSibling : parent.nextElementSibling

      if (!itemList) return

      const link = itemList.getElementsByTagName('a')
      if (link.length) link[0].focus()
    }
  }
}
</script>
