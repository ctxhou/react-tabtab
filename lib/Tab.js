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

var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var Tappable = require('react-tappable');
var ItemTypes = require('./ItemTypes').ItemTypes;
var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;

var tabSource = {
  beginDrag: function beginDrag(props) {
    return {
      tabKey: props.tabKey
    };
  }
};

var tabTarget = {
  hover: function hover(props, monitor, component) {
    var dragIndex = monitor.getItem().tabKey;
    var hoverIndex = props.tabKey;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    var hoverBoundingRect = ReactDOM.findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    var clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    var hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveTab(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

var Tab = (function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab(props) {
    _classCallCheck(this, _Tab);

    _get(Object.getPrototypeOf(_Tab.prototype), 'constructor', this).call(this, props);
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
      var tabClass;

      if (this.props.status === 'active') {
        tabClass = classNames(this.props.style + 'tab', 'active');
      } else {
        tabClass = classNames(this.props.style + 'tab');
      }
      if (this.props.tabKey === 'ADD') {
        tabClass = classNames(this.props.style + 'tab', 'add');
      }

      // only show the delete button when it's active
      var closeButtonStyle;
      if (this.props.tabDeleteButton && this.props.status === "active") {
        closeButtonStyle = { display: 'inline-block' };
      } else {
        closeButtonStyle = { display: 'none' };
      }

      var isDragging = this.props.isDragging;
      var connectDragSource = this.props.connectDragSource;
      var connectDropTarget = this.props.connectDropTarget;

      return connectDragSource(connectDropTarget(React.createElement(
        'span',
        null,
        React.createElement(
          'li',
          { className: tabClass, onClick: this.clickTab },
          this.props.title,
          React.createElement(
            'div',
            { className: 'tabtab__folder__circCont', style: closeButtonStyle },
            React.createElement('div', { className: 'tabtab__folder__circle', onClick: this.handleTabDeleteButton })
          )
        )
      )));
    }
  }]);

  var _Tab = Tab;
  Tab = _wrapComponent('_$Tab')(Tab) || Tab;
  Tab = DragSource(ItemTypes.TAB, tabSource, function (connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    };
  })(Tab) || Tab;
  Tab = DropTarget(ItemTypes.TAB, tabTarget, function (connect) {
    return {
      connectDropTarget: connect.dropTarget()
    };
  })(Tab) || Tab;
  return Tab;
})(React.Component);

exports['default'] = Tab;
module.exports = exports['default'];