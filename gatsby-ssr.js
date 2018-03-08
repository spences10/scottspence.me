'use strict'

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _styledComponents = require('styled-components')

var _server = require('react-dom/server')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.replaceRenderer = function(_ref) {
  var bodyComponent = _ref.bodyComponent,
    replaceBodyHTMLString = _ref.replaceBodyHTMLString,
    setHeadComponents = _ref.setHeadComponents

  var sheet = new _styledComponents.ServerStyleSheet()

  var app = _react2.default.createElement(
    _styledComponents.StyleSheetManager,
    { sheet: sheet.instance },
    bodyComponent
  )

  var body = (0, _server.renderToString)(app)

  replaceBodyHTMLString(body)
  setHeadComponents([sheet.getStyleElement()])

  return
}
