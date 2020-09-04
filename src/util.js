export function programmaticFocus (el, timeout = 1000) {
  el.setAttribute('tabindex', '-1')
  el.focus()
  setTimeout(() => el.removeAttribute('tabindex'), timeout)
}
