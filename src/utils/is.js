const toString = Object.prototype.toString;

export function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}

export const isUndefined = (val) => {
  return val === void 0;
};

export function isNull(val) {
  return val === null;
}

export const isDef = (val) => {
  return !isUndefined(val) && !isNull(val);
};

export const isUnDef = (val) => {
  return !isDef(val);
};

export const isObject = (val) => {
  return !isNull(val) && is(val, "Object");
};

export function isDate(val) {
  return is(val, "Date");
}

export function isNumber(val) {
  return is(val, "Number");
}

export function isPromise(val) {
  return (
    is(val, "Promise") &&
    isObject(val) &&
    isFunction(val.then) &&
    isFunction(val.catch)
  );
}

export function isString(val) {
  return is(val, "String");
}

export const isFunction = (val) => {
  return is(val, "Function");
};

export function isBoolean(val) {
  return is(val, "Boolean");
}

export function isRegExp(val) {
  return is(val, "RegExp");
}

export function isArray(val) {
  return is(val, "Array");
}

export const isWindow = (val) => {
  return typeof window !== "undefined" && is(val, "Window");
};

export const isElement = (val) => {
  return isObject(val) && !!val.tagName;
};

export const isHtmlElement = (node) => {
  return node && node.nodeType === Node.ELEMENT_NODE;
};

export const isEmpty = (val) => {
  if (!isDef(val)) return true;

  if (typeof val === "boolean") return false;

  if (typeof val === "number") return !val;

  if (val instanceof Error) return val.message === "";

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case "[object String]":
    case "[object Array]":
      return !val.length;

    // Map or Set or File
    case "[object File]":
    case "[object Map]":
    case "[object Set]": {
      return !val.size;
    }
    // Plain Object
    case "[object Object]": {
      return !Object.keys(val).length;
    }
  }

  return false;
};

export const isNode = (val) => {
  return !isUndefined(val) && val instanceof HTMLElement && val.nodeType === 1;
};

export const isNodeList = (val) => {
  return (
    !isUndefined(val) &&
    (is(val, "NodeList") || is(val, "HTMLCollection")) &&
    "length" in val &&
    (val.length === 0 || isNode(val[0]))
  );
};
