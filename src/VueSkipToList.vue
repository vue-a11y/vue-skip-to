<template>
  <nav class="vue-skip-to__nav">
    <span id="list-title">{{ titleList }}</span>
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
          :aria-label="el.ariaLabel || `${titleList} ${el.label}`"
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

  props: {
    titleList: {
      type: String,
      default: 'Skip to'
    },
    to: {
      validator: function (val) {
        return Array.isArray(val) &&
          val.every(({ anchor, label }) => (
            typeof anchor === 'string' &&
              anchor.startsWith('#') &&
              typeof String(label) === 'string'
          ))
      }
    }
  },

  components: {
    VueSkipToSingle
  },

  methods: {
    handleKeydown ({ key, target }) {
      const parent = target.parentElement
      const itemList = key === 'ArrowUp' ? parent.previousElementSibling : parent.nextElementSibling

      if (!itemList) return

      const link = itemList.getElementsByTagName('a')
      if (link.length) link[0].focus()
    }
  }
}
</script>
