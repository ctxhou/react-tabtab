'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibUpdate = require('react/lib/update');

var _reactLibUpdate2 = _interopRequireDefault(_reactLibUpdate);

var _DragTab = require('./DragTab');

var _DragTab2 = _interopRequireDefault(_DragTab);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _FunctionTab = require('./FunctionTab');

var _FunctionTab2 = _interopRequireDefault(_FunctionTab);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Tabs = (function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).call(this, props);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleAddFrontClick = this.handleAddFrontClick.bind(this);
    this.handleAddBackClick = this.handleAddBackClick.bind(this);
    this.handleTabDeleteButton = this.handleTabDeleteButton.bind(this);
    this.moveTab = this.moveTab.bind(this);
    this._getPanel = this._getPanel.bind(this);

    this.state = {
      activeKey: props.activeKey || props.defaultActiveKey,
      style: props.style || props.defaultStyle,
      children: props.children,
      status: 'static' // || 'dragging'
    };
  }

  _createClass(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeKey !== this.state.activeKey) {
        this.setState({
          activeKey: nextProps.activeKey
        });
      }
      if (nextProps.children !== this.state.children) {
        this.setState({
          children: nextProps.children
        });
      }
    }
  }, {
    key: 'handleTabClick',
    value: function handleTabClick(activeKey) {
      if (this.props.handleTabClick) {
        this.props.handleTabClick(activeKey);
      }

      this.setState({
        activeKey: activeKey,
        panelUpdateKey: -1
      });
    }
  }, {
    key: 'handleAddFrontClick',
    value: function handleAddFrontClick() {
      this.props.handleAddFrontClick();
      this.setState({
        panelUpdateKey: 0
      });
    }
  }, {
    key: 'handleAddBackClick',
    value: function handleAddBackClick() {
      this.props.handleAddBackClick();
    }
  }, {
    key: 'handleTabDeleteButton',
    value: function handleTabDeleteButton(key) {
      this.props.handleTabDeleteButton();
      this.setState({
        panelUpdateKey: key
      });
    }
  }, {
    key: 'moveTab',
    value: function moveTab(dragIndex, hoverIndex) {
      var dragTab = this.state.children[dragIndex];
      this.props.setMoveData(dragIndex, hoverIndex);
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var that = this;
      var tab = [];
      var panel = [];
      _react2['default'].Children.forEach(this.state.children, function (children, index) {
        // add tabs
        var status, className;
        if (index === that.state.activeKey) {
          status = 'active';
        } else {
          status = 'inactive';
        }
        var props = {
          key: 'tab' + index,
          tabKey: index,
          title: children.props.title,
          status: status,
          style: that.state.style,
          handleTabClick: that.handleTabClick,
          tabDeleteButton: that.props.tabDeleteButton,
          handleTabDeleteButton: that.handleTabDeleteButton,
          beginDrag: that.props.beginDrag,
          moveTab: that.moveTab
        };
        if (that.props.draggable) {
          tab.push(_react2['default'].createElement(_DragTab2['default'], props));
        } else {
          tab.push(_react2['default'].createElement(_Tab2['default'], props));
        }
        if (!children.props.lazy || children.props.lazy && index === that.state.activeKey) {
          var props = { className: (0, _classnames2['default'])(that.state.style + 'panel', status), status: status, key: index };
          if (that.state.panelUpdateKey === index) {
            props.update = true;
          }
          panel.push(_react2['default'].cloneElement(children, props));
        }
      });
      if (this.props.addFrontTab && tab.length > 0) {
        //if the tab more than one, show add button
        tab.unshift(_react2['default'].createElement(_FunctionTab2['default'], { key: 'ADDFront',
          tabKey: 'ADD',
          title: '＋',
          style: that.state.style,
          handleTabClick: that.handleAddFrontClick }));
      }
      if (this.props.addBackTab && tab.length > 0) {
        //if the tab more than one, show add button
        tab.push(_react2['default'].createElement(_FunctionTab2['default'], { key: 'ADDBack',
          tabKey: 'ADD',
          title: '＋',
          style: that.state.style,
          handleTabClick: that.handleAddBackClick }));
      }

      return { tab: tab, panel: panel };
    }
  }, {
    key: 'render',
    value: function render() {
      var deleteButtonTmpl;
      var opt = this._getPanel();
      var wrapper = this.state.style + "wrapper";
      var tabWrapper = this.state.style + "tab__wrapper";
      var panelWrapper = this.state.style + "panel__wrapper";
      var noneName = this.props.deleteAllButtonName;
      if (this.props.deleteAllButton && opt.tab.length > 0) {
        var className = this.state.style + "delete " + this.props.deleteAllClassname;
        deleteButtonTmpl = _react2['default'].createElement(
          'button',
          { className: className, onClick: this.props.handleDeleteAllButton },
          noneName ? noneName : 'None'
        );
      }

      return _react2['default'].createElement(
        'div',
        { className: wrapper },
        deleteButtonTmpl,
        _react2['default'].createElement(
          'div',
          { className: tabWrapper },
          opt.tab
        ),
        _react2['default'].createElement(
          'div',
          { className: panelWrapper },
          opt.panel
        )
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      defaultActiveKey: 0,
      defaultStyle: "tabtab__default__"
    },
    enumerable: true
  }]);

  return Tabs;
})(_react2['default'].Component);

exports['default'] = Tabs;
module.exports = exports['default'];