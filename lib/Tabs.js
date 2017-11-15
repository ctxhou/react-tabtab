'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _ExtraButton = require('./ExtraButton');

var _ExtraButton2 = _interopRequireDefault(_ExtraButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = (_temp = _class = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleTabChange = _this.handleTabChange.bind(_this);
    _this.handleTabSequence = _this.handleTabSequence.bind(_this);
    _this.handleEdit = _this.handleEdit.bind(_this);
    _this.state = {
      activeIndex: _this.getActiveIndex(props)
    };
    return _this;
  }

  Tabs.prototype.getActiveIndex = function getActiveIndex(props) {
    var defaultIndex = props.defaultIndex,
        activeIndex = props.activeIndex;

    if (activeIndex) return activeIndex;
    if (defaultIndex) return defaultIndex;
    return 0;
  };

  Tabs.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      this.setState({ activeIndex: nextProps.activeIndex });
    }
  };

  Tabs.prototype.handleTabChange = function handleTabChange(index) {
    var _props = this.props,
        activeIndex = _props.activeIndex,
        onTabChange = _props.onTabChange;

    if (activeIndex !== 0 && !activeIndex) {
      this.setState({ activeIndex: index });
    }
    if (onTabChange) {
      onTabChange(index);
    }
  };

  Tabs.prototype.handleTabSequence = function handleTabSequence(_ref) {
    var oldIndex = _ref.oldIndex,
        newIndex = _ref.newIndex;
    var onTabSequenceChange = this.props.onTabSequenceChange;

    if (onTabSequenceChange) {
      onTabSequenceChange({ oldIndex: oldIndex, newIndex: newIndex });
    }
  };

  Tabs.prototype.handleEdit = function handleEdit(_ref2) {
    var type = _ref2.type,
        index = _ref2.index;
    var onTabEdit = this.props.onTabEdit;

    if (onTabEdit) {
      onTabEdit({ type: type, index: index });
    }
  };

  Tabs.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        extraProps = _objectWithoutProperties(_props2, ['children']);

    var activeIndex = this.state.activeIndex;

    var props = _extends({
      handleTabChange: this.handleTabChange,
      handleTabSequence: this.handleTabSequence,
      handleEdit: this.handleEdit,
      activeIndex: activeIndex
    }, extraProps);
    return React.createElement(
      'div',
      null,
      React.Children.map(children, function (child) {
        return React.cloneElement(child, props);
      })
    );
  };

  return Tabs;
}(React.Component), _class.defaultProps = {
  showModalButton: true,
  showArrowButton: 'auto',
  onTabChange: function onTabChange() {},
  onSequenceChange: function onSequenceChange() {}
}, _temp);
Tabs.propTypes = {
  children: require('prop-types').node.isRequired,
  showModalButton: require('prop-types').oneOfType([require('prop-types').number, require('prop-types').bool]),
  showArrowButton: require('prop-types').oneOfType([require('prop-types').oneOf(['auto']), require('prop-types').bool]),
  activeIndex: require('prop-types').number,
  ExtraButton: typeof _ExtraButton2.default === 'function' ? require('prop-types').instanceOf(_ExtraButton2.default) : require('prop-types').any,
  defaultIndex: require('prop-types').number,
  onTabChange: require('prop-types').func,
  onSequenceChange: require('prop-types').func,
  onTabSequenceChange: require('prop-types').func,
  onTabEdit: require('prop-types').func
};
exports.default = Tabs;
module.exports = exports['default'];