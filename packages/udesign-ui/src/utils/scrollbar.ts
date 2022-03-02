export function getScrollbarWidth() {
  if (globalThis && Object.prototype.toString.call(globalThis) === '[object Window]') {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  return 0;
}
