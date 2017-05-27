'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\spenc\\gitrepos\\spences10.github.io.react\\components\\Header.js';


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/portfolio', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Portfolio')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Contact')));
};

exports.default = Header;