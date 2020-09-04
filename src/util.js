export function programmaticFocus (el) {
  el.setAttribute('tabindex', '-1')
  el.focus()
  el.removeAttribute('tabindex')
}
