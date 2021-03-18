import VueSkipTo from './VueSkipTo.vue'

export default function install (app) {
  if (install.installed) return
  install.installed = true
  app.component('VueSkipTo', VueSkipTo)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
