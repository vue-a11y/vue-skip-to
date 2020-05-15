import VueSkipTo from './VueSkipTo.vue'
import VueSkipToList from './VueSkipToList.vue'

export default function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueSkipTo', VueSkipTo)
  Vue.component('VueSkipToList', VueSkipToList)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
