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
