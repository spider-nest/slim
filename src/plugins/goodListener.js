import delegate from "$plugins/delegate";

import { isFunction, isNode, isNodeList, isString } from "$utils/is";

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 * @see https://github.com/zenorocha/good-listener
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
export default function goodListen(target, type, callback) {
  if (!target && !type && !callback) {
    throw new Error("Missing required arguments");
  }

  if (!isString(type)) {
    throw new TypeError("Second argument must be a String");
  }

  if (!isFunction(callback)) {
    throw new TypeError("Third argument must be a Function");
  }

  if (isNode(target)) {
    return listenNode(target, type, callback);
  } else if (isNodeList(target)) {
    return listenNodeList(target, type, callback);
  } else if (isString(target)) {
    return listenSelector(target, type, callback);
  } else {
    throw new TypeError(
      "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
    );
  }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
  node.addEventListener(type, callback);

  return {
    destroy: function () {
      node.removeEventListener(type, callback);
    },
  };
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
  Array.prototype.forEach.call(nodeList, function (node) {
    node.addEventListener(type, callback);
  });

  return {
    destroy: function () {
      Array.prototype.forEach.call(nodeList, function (node) {
        node.removeEventListener(type, callback);
      });
    },
  };
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 * @param selector
 * @param type
 * @param callback
 * @returns {*}
 */
function listenSelector(selector, type, callback) {
  return delegate(document.body, selector, type, callback);
}
