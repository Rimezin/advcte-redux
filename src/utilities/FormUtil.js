import $ from "jquery";

// Get form field value with just the element name //
export function getFieldValue(name) {
  if (typeof name === undefined || name === null || name === "") {
    return;
  } else {
    const value = $(`[name="${name}"]`).value();
    return value;
  }
}
