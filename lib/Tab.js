'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab(props) {
    _classCallCheck(this, Tab);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, props));

    _this.handleTabDeleteButton = _this.handleTabDeleteButton.bind(_this);
    _this.clickTab = _this.clickTab.bind(_this);
    return _this;
  }

  _createClass(Tab, [{
    key: 'handleTabDeleteButton',
    value: function handleTabDeleteButton(e) {
      e.stopPropagation(); //prevent trigger clickTab function
      this.props.handleTabDeleteButton(this.props.tabKey);
    }
  }, {
    key: 'clickTab',
    value: function clickTab() {
      this.props.handleTabClick(this.props.tabKey);
    }
  }, {
    key: 'render',
    value: function render() {
      var tabClass = void 0,
          closeButtonStyle = void 0;
      var _props = this.props;
      var connectDragSource = _props.connectDragSource;
      var connectDropTarget = _props.connectDropTarget;

      if (this.props.status === 'active') {
        tabClass = (0, _classnames2.default)(this.props.style + 'tab', 'active');
      } else {
        tabClass = (0, _classnames2.default)(this.props.style + 'tab');
      }

      // only show the delete button when it's active
      if (this.props.tabDeleteButton && this.props.status === "active") {
        closeButtonStyle = { display: 'inline-block' };
      } else {
        closeButtonStyle = { display: 'none' };
      }

      return _react2.default.createElement(
        'div',
        { className: tabClass, onClick: this.clickTab },
        this.props.title,
        _react2.default.createElement(
          'div',
          { className: 'tabtab__folder__circCont', style: closeButtonStyle },
          _react2.default.createElement('div', { className: 'tabtab__folder__circle', onClick: this.handleTabDeleteButton })
        )
      );
    }
  }]);

  return Tab;
}(_react2.default.Component);

exports.default = Tab;
module.exports = exports['default'];