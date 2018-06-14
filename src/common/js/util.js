export function to (scrollTop) {
  document.body.scrollTop = document.documentElement.scrollTop = scrollTop
}

export function getScrollTop () {
  return document.body.scrollTop || document.documentElement.scrollTop
}
