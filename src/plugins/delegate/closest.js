import { isFunction, isUndefined } from "$utils/is";

const DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (!isUndefined(Element) && !Element.prototype.matches) {
  const proto = Element.prototype;

  proto.matches =
    proto.matchesSelector ||
    proto.mozMatchesSelector ||
    proto.msMatchesSelector ||
    proto.oMatchesSelector ||
    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
export default function closest(element, selector) {
  while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
    if (isFunction(element.matches) && element.matches(selector)) {
      return element;
    }
    element = element.parentNode;
  }
}
