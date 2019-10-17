<template>
  <div :class="containerClassNames">

    <!-- TODO: fix label to handle multiple instances of nav list -->
    <p class="vue-skip-to__label" id="vue-skip-to__label">
      <slot>Skip to</slot>
    </p>

    <nav
      class="vue-skip-to__nav"
      aria-labelledby="vue-skip-to__label"
    >
      <ul class="vue-skip-to__nav-list">
        <li
          v-for="el in to"
          :key="el.anchor"
          class="vue-skip-to__nav-list-item"
        >
          <vue-skip-to
            :to="el.anchor"
            @focus="labelVisible = true"
            @blur="labelVisible = false"
            class="vue-skip-to vue-skip-to--relative"
          >
            {{ el.label }}
          </vue-skip-to>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'VueSkipToList',

  props: {
    to: {
      type: Array
      /* TODO: add validator */
    }
  },

  data () {
    return {
      labelVisible: false
    }
  },

  computed: {
    containerClassNames: function () {
      return {
        'vue-skip-to__list-container': true,
        'vue-skip-to__list-container--focus': this.labelVisible
      }
    }
  }

}
</script>

<style scoped>
.vue-skip-to__list-container {
  position: absolute;
  left: -10000px;
  top: 0;
  border: 1px solid #000;
}

.vue-skip-to__list-container--focus {
  background-color: #fff;
  left: 0;
}

.vue-skip-to__label {
  font-weight: 800;
  margin: 8px 0 0 0;
  padding: 8px 24px 8px 10px;
  border-bottom: 1px solid #000;
}

.vue-skip-to__nav-list {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 0 10px 0;
  list-style-type: none;
}

.vue-skip-to__nav-list-item {
  position: relative;
}

/* override `<vue-skip-to>` styles */
.vue-skip-to.vue-skip-to--relative {
  position: relative;
  left: unset;
  top: unset;
  display: block;
  padding: 8px 24px 8px 10px;
  color: #000;
  text-decoration: none;
}

.vue-skip-to.vue-skip-to--relative:focus {
  color: #fff;
}
</style>
