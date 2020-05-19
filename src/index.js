import VueSkipTo from './VueSkipTo.vue'

export default function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueSkipTo', VueSkipTo)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
