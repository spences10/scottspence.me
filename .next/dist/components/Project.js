"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\spenc\\gitrepos\\spences10.github.io.react\\components\\Project.js";

exports.default = function (props) {
  return _react2.default.createElement("div", { className: "project", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, props.name, props.desc, props.github, props.preview, props.image);
};