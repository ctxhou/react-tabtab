'use strict';

var _reactTransformHmr2 = require('react-transform-hmr');

var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);

var _react = require('react');

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _redboxReact = require('redbox-react');

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _components = {
  _$Tab: {
    displayName: 'Tab'
  }
};

var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
  filename: 'src/Tab.jsx',
  components: _components,
  locals: [module],
  imports: [_react]
});

var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
  filename: 'src/Tab.jsx',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
  };
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Tab = (function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab(props) {
    _classCallCheck(this, _Tab);

    _get(Object.getPrototypeOf(_Tab.prototype), 'constructor', this).call(this, props);
    this.handleTabDeleteButton = this.handleTabDeleteButton.bind(this);
    this.clickTab = this.clickTab.bind(this);
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
      var tabClass = undefined,
          closeButtonStyle = undefined;
      var _props = this.props;
      var connectDragSource = _props.connectDragSource;
      var connectDropTarget = _props.connectDropTarget;

      if (this.props.status === 'active') {
        tabClass = (0, _classnames2['default'])(this.props.style + 'tab', 'active');
      } else {
        tabClass = (0, _classnames2['default'])(this.props.style + 'tab');
      }

      // only show the delete button when it's active
      if (this.props.tabDeleteButton && this.props.status === "active") {
        closeButtonStyle = { display: 'inline-block' };
      } else {
        closeButtonStyle = { display: 'none' };
      }

      return _react2['default'].createElement(
        'div',
        { className: tabClass, onClick: this.clickTab },
        this.props.title,
        _react2['default'].createElement(
          'div',
          { className: 'tabtab__folder__circCont', style: closeButtonStyle },
          _react2['default'].createElement('div', { className: 'tabtab__folder__circle', onClick: this.handleTabDeleteButton })
        )
      );
    }
  }]);

  var _Tab = Tab;
  Tab = _wrapComponent('_$Tab')(Tab) || Tab;
  return Tab;
})(_react2['default'].Component);

exports['default'] = Tab;
module.exports = exports['default'];