import closest from "./closest";

import { isFunction } from "$utils/is";

/**
 * Finds closest match and invokes callback.
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
  return function (e) {
    e.delegateTarget = closest(e.target, selector);

    if (e.delegateTarget) {
      callback.call(element, e);
    }
  };
}

function _delegate(element, selector, type, callback, useCapture) {
  const listenerFn = listener.apply(this, arguments);

  element.addEventListener(type, listenerFn, useCapture);

  return {
    destroy: function () {
      element.removeEventListener(type, listenerFn, useCapture);
    },
  };
}

/**
 * Delegates event to a selector.
 * @see https://github.com/zenorocha/delegate
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
export default function delegate(
  elements,
  selector,
  type,
  callback,
  useCapture
) {
  // Handle the regular Element usage
  if (isFunction(elements.addEventListener)) {
    return _delegate.apply(null, arguments);
  }

  // Handle Element-less usage, it defaults to global delegation
  if (isFunction(type)) {
    // Use `document` as the first parameter, then apply arguments
    // This is a short way to .unshift `arguments` without running into deoptimizations
    return _delegate.bind(null, document).apply(null, arguments);
  }

  // Handle Selector-based usage
  if (typeof elements === "string") {
    elements = document.querySelectorAll(elements);
  }

  // Handle Array-like based usage
  return Array.prototype.map.call(elements, function (element) {
    return _delegate(element, selector, type, callback, useCapture);
  });
}
