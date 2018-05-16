import VueSkipTo from './skip-to.vue'

export default function install (Vue) {
  Vue.component('VueSkipTo', VueSkipTo)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
