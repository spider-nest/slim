export default function clickOutside(node, handler = () => {}) {
  const onClick = (event) => {
    if (node && !event.defaultPrevented && !node.contains(event.target)) {
      handler();
    }
  };

  document.addEventListener("click", onClick, true);

  return {
    destroy() {
      document.removeEventListener("click", onClick, true);
    },
  };
}
