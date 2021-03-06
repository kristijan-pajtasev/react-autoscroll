"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./AutoScroll.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AutoScroll = function AutoScroll(props) {
  var stopAtEnd = props.stopAtEnd,
      onEnd = props.onEnd,
      data = props.data;
  var id = "AutoScroll_".concat(Date.now());
  var timeoutId;

  var scroll = function scroll(element) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var maxTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
    var newTop = top + 4;
    element.style.top = "-".concat(newTop, "px");
    timeoutId = setTimeout(function () {
      if (newTop >= maxTop && onEnd) {
        setTimeout(function () {
          element.style.top = "0px";
          setTimeout(onEnd, 1000);
        }, 1000);
      } else scroll(element, newTop >= maxTop ? 0 : newTop, maxTop);
    }, 200);
  };

  (0, _react.useEffect)(function () {
    var containerHeight = document.querySelector("#".concat(id)).getBoundingClientRect().height;
    var elementHeight = document.querySelector("#".concat(id, ">*")).getBoundingClientRect().height;

    if (elementHeight > containerHeight) {
      scroll(document.querySelector("#".concat(id, ">*")), 0, elementHeight - containerHeight);
    } else if (elementHeight <= containerHeight && onEnd) {
      timeoutId = setTimeout(onEnd, 3000 * Math.random() + 3000);
    }

    return function () {
      clearTimeout(timeoutId);
    };
  }, [data]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "AutoScroll",
    id: id
  }, props.children);
};

var _default = AutoScroll;
exports.default = _default;
