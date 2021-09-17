import { isFunction } from "$utils/is";

const DOCUMENT_NODE_TYPE = 9;

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
