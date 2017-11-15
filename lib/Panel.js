'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(.25);\n    opacity: 0;\n  }\n'], ['\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(.25);\n    opacity: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  padding: 10px 5px;\n  animation: ', ' 0.2s linear;\n  transition: all 1s linear;\n'], ['\n  padding: 10px 5px;\n  animation: ', ' 0.2s linear;\n  transition: all 1s linear;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var fadeOut = (0, _styledComponents.keyframes)(_templateObject);

var PanelStyle = _styledComponents2.default.div(_templateObject2, fadeOut);

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Panel.prototype.render = function render() {
    return React.createElement(
      PanelStyle,
      null,
      this.props.children
    );
  };

  return Panel;
}(React.Component);

Panel.propTypes = {
  children: require('prop-types').node.isRequired
};
exports.default = Panel;
module.exports = exports['default'];