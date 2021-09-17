/**
 * Executes a given operation type
 * @param type
 * @returns {boolean}
 */
export default function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
