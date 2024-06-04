export function isElOutOfViewPort(el: HTMLElement | null) {
  if (!el) {
    return true;
  }

  const { bottom, right, left, top } = el.getBoundingClientRect();

  return (
    bottom < 0 ||
    right < 0 ||
    left > window.innerWidth ||
    top > window.innerHeight
  );
}
