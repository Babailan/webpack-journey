const _ = require("lodash");

function component({ f, s }) {
  const element = document.createElement("div");

  element.innerHTML = _.join([f, s], " ");
  return element;
}
// yes
document
  .querySelector("body")
  .appendChild(component({ f: "Hi", s: "My Name is ronnel YES" }));
