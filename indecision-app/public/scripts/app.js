"use strict";

var show = false;

var btnToggle = function btnToggle() {
  show = !show;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement("br", null),
    React.createElement(
      "button",
      { onClick: btnToggle },
      show ? 'Hide' : "Show"
    ),
    show && React.createElement(
      "div",
      null,
      React.createElement("hr", null),
      "Here!"
    )
  );
  ReactDOM.render(template, document.getElementById("app"));
};

render();
