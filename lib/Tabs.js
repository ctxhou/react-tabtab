'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _update = require('react/lib/update');

var _update2 = _interopRequireDefault(_update);

var _DragTab = require('./DragTab');

var _DragTab2 = _interopRequireDefault(_DragTab);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _FunctionTab = require('./FunctionTab');

var _FunctionTab2 = _interopRequireDefault(_FunctionTab);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = (_temp = _class = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

    _this.handleTabClick = _this.handleTabClick.bind(_this);
    _this.handleAddFrontClick = _this.handleAddFrontClick.bind(_this);
    _this.handleAddBackClick = _this.handleAddBackClick.bind(_this);
    _this.handleTabDeleteButton = _this.handleTabDeleteButton.bind(_this);
    _this.moveTab = _this.moveTab.bind(_this);
    _this._getPanel = _this._getPanel.bind(_this);

    _this.state = {
      activeKey: props.activeKey || props.defaultActiveKey,
      style: props.style || props.defaultStyle,
      children: props.children,
      status: 'static' // || 'dragging'
    };

    return _this;
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
      _react2.default.Children.forEach(this.state.children, function (children, index) {
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
          tab.push(_react2.default.createElement(_DragTab2.default, props));
        } else {
          tab.push(_react2.default.createElement(_Tab2.default, props));
        }
        if (!children.props.lazy || children.props.lazy && index === that.state.activeKey) {
          var props = { className: (0, _classnames2.default)(that.state.style + 'panel', status), status: status, key: index };
          if (that.state.panelUpdateKey === index) {
            props.update = true;
          }
          panel.push(_react2.default.cloneElement(children, props));
        }
      });
      if (this.props.addFrontTab && tab.length > 0) {
        //if the tab more than one, show add button
        tab.unshift(_react2.default.createElement(_FunctionTab2.default, { key: 'ADDFront',
          tabKey: 'ADD',
          title: '＋',
          style: that.state.style,
          handleTabClick: that.handleAddFrontClick }));
      }
      if (this.props.addBackTab && tab.length > 0) {
        //if the tab more than one, show add button
        tab.push(_react2.default.createElement(_FunctionTab2.default, { key: 'ADDBack',
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
      var wrapper = this.state.style + "wrapper tabtab__clearfix";
      var tabWrapper = this.state.style + "tab__wrapper";
      var panelWrapper = this.state.style + "panel__wrapper";
      var noneName = this.props.deleteAllButtonName;
      if (this.props.deleteAllButton && opt.tab.length > 0) {
        var className = this.state.style + "delete " + this.props.deleteAllClassname;
        deleteButtonTmpl = _react2.default.createElement(
          'button',
          { className: className, onClick: this.props.handleDeleteAllButton },
          noneName ? noneName : 'None'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: wrapper },
        deleteButtonTmpl,
        _react2.default.createElement(
          'div',
          { className: tabWrapper },
          opt.tab
        ),
        _react2.default.createElement(
          'div',
          { className: panelWrapper },
          opt.panel
        )
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component), _class.defaultProps = {
  defaultActiveKey: 0,
  defaultStyle: "tabtab__default__"
}, _temp);
exports.default = Tabs;
module.exports = exports['default'];