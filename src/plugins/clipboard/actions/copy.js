import select from "$plugins/select";

import command from "$utils/command";
import { isString } from "$utils/is";

import createFakeElement from "../createFakeElement";

/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */
const ClipboardActionCopy = (
  target,
  options = { container: document.body }
) => {
  let selectedText = "";
  if (isString(target)) {
    const fakeElement = createFakeElement(target);
    options.container.appendChild(fakeElement);
    selectedText = select(fakeElement);
    command("copy");
    fakeElement.remove();
  } else {
    selectedText = select(target);
    command("copy");
  }
  return selectedText;
};

export default ClipboardActionCopy;
