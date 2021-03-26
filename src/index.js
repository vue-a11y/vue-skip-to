import VueSkipTo from './VueSkipTo.vue'

const install = (app) => {
  if (install.installed) return
  install.installed = true
  app.component('VueSkipTo', VueSkipTo)
}

VueSkipTo.install = install;

export default VueSkipTo;
