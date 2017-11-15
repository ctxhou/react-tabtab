'use strict';

exports.__esModule = true;
exports.TabStyle = exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: ', ';\n  color: ', ';\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  border: 1px solid transparent;\n  ', '\n  ', '\n  ', '\n  transition: color .3s cubic-bezier(.645, .045, .355, 1);\n  transition: background-color .3s cubic-bezier(.645, .045, .355, 1);\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n    border-color: #ddd #ddd #fff;\n  }\n'], ['\n  display: ', ';\n  color: ', ';\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  border: 1px solid transparent;\n  ', '\n  ', '\n  ', '\n  transition: color .3s cubic-bezier(.645, .045, .355, 1);\n  transition: background-color .3s cubic-bezier(.645, .045, .355, 1);\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n    border-color: #ddd #ddd #fff;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CloseButton = require('./CloseButton');

var _CloseButton2 = _interopRequireDefault(_CloseButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TabStyle = _styledComponents2.default.div(_templateObject, function (props) {
  return props.vertical ? 'block' : 'inline-block';
}, function (props) {
  return props.active ? 'black' : '#007bff';
}, function (props) {
  return props.vertical ? '\n      border-bottom: 1px solid #efefef;\n      border-left: 1px solid #efefef;\n      border-right: 1px solid #efefef;\n      background-color: white;\n      padding: 10px 10px;\n      &:first-child {\n        border-top: 1px solid #efefef;        \n      }\n    ' : function (props) {
    return props.closable ? 'padding: 10px 10px 10px 15px;' : 'padding: 10px 15px;';
  };
}, function (props) {
  return props.active && props.vertical ? '\n      background-color: #eee;\n    ' : null;
}, function (props) {
  return props.active && !props.vertical ? '\n      border-color: #ddd #ddd #fff;\n    ' : null;
});

var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab(props) {
    _classCallCheck(this, Tab);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.clickTab = _this.clickTab.bind(_this);
    _this.clickDelete = _this.clickDelete.bind(_this);
    return _this;
  }

  Tab.prototype.clickTab = function clickTab() {
    var _props = this.props,
        handleTabChange = _props.handleTabChange,
        index = _props.index;

    handleTabChange(index);
  };

  Tab.prototype.clickDelete = function clickDelete(event) {
    event.stopPropagation(); // prevent trigger clickTab event.
    var _props2 = this.props,
        handleEdit = _props2.handleEdit,
        index = _props2.index;

    handleEdit({ type: 'delete', index: index });
  };

  Tab.prototype.render = function render() {
    var _this2 = this;

    var _props3 = this.props,
        customStyle = _props3.customStyle,
        active = _props3.active,
        closable = _props3.closable,
        vertical = _props3.vertical;

    var TabComponent = customStyle || TabStyle;
    return (
      // $FlowFixMe
      React.createElement(
        TabComponent,
        { innerRef: function innerRef(node) {
            return _this2.__INTERNAL_NODE = node;
          },
          onClick: this.clickTab,
          active: active,
          vertical: vertical,
          closable: closable },
        this.props.children,
        closable ? React.createElement(_CloseButton2.default, { handleDelete: this.clickDelete }) : null
      )
    );
  };

  return Tab;
}(React.Component);

Tab.propTypes = {
  customStyle: require('prop-types').node,
  handleTabChange: require('prop-types').func.isRequired,
  handleEdit: require('prop-types').func.isRequired,
  index: require('prop-types').number.isRequired,
  active: require('prop-types').bool.isRequired,
  closable: require('prop-types').bool.isRequired,
  vertical: require('prop-types').bool.isRequired,
  children: require('prop-types').node.isRequired
};
exports.default = Tab;


Tab.displayName = 'Tab';

exports.TabStyle = TabStyle;