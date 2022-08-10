/**
 * stop propagation
 *
 * @param {React.MouseEvent<HTMLElement>} e React mouse event object
 * @param {boolean} noImmediate Skip stopping immediate propagation
 */
export function stopPropagation(e: React.MouseEvent, noImmediate?: boolean) {
  if (e && typeof e.stopPropagation === 'function') {
    e.stopPropagation();
  }

  if (!noImmediate && e.nativeEvent && typeof e.nativeEvent.stopImmediatePropagation === 'function') {
    e.nativeEvent.stopImmediatePropagation();
  }
}
