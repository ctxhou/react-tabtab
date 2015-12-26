'use strict';

var _reactTransformHmr2 = require('react-transform-hmr');

var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);

var _react = require('react');

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _redboxReact = require('redbox-react');

var _components = {
  _$Unknown: {}
};

var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
  filename: 'src/Tabs.jsx',
  components: _components,
  locals: [module],
  imports: [_react]
});

var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
  filename: 'src/Tabs.jsx',
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
var update = require('react/lib/update');
var Tab = require('./Tab');
var classNames = require('classnames');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var Tabs = _wrapComponent('_$Unknown')(React.createClass({

  getDefaultProps: function getDefaultProps() {
    return {
      defaultActiveKey: 0,
      defaultStyle: "tabtab__default__"
    };
  },

  getInitialState: function getInitialState() {
    return {
      activeKey: this.props.activeKey || this.props.defaultActiveKey,
      style: this.props.style || this.props.defaultStyle,
      children: this.props.children
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.state.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey
      });
    }
  },

  handleTabClick: function handleTabClick(activeKey) {
    if (this.props.handleTabClick) {
      this.props.handleTabClick(activeKey);
    }

    this.setState({
      activeKey: activeKey,
      panelUpdateKey: -1
    });
  },

  handleAddFrontClick: function handleAddFrontClick() {
    this.props.handleAddFrontTab();
    this.setState({
      panelUpdateKey: 0
    });
  },

  handleAddBackClick: function handleAddBackClick() {
    this.props.handleAddBackTab();
  },

  handleTabDeleteButton: function handleTabDeleteButton(key) {
    this.props.handleTabDeleteButton();
    this.setState({
      panelUpdateKey: key
    });
  },

  moveTab: function moveTab(dragIndex, hoverIndex) {
    var dragTab = this.state.children[dragIndex];
    this.setState(update(this.state, {
      children: {
        $splice: [[dragIndex, 1], [hoverIndex, 0, dragTab]]
      },
      activeKey: { $apply: function $apply() {
          return hoverIndex;
        } }
    }));
  },

  _getPanel: function _getPanel() {
    var that = this;
    var tab = [];
    var panel = [];

    React.Children.forEach(this.state.children, function (children, index) {
      // add tabs
      var status, className;
      if (index === that.state.activeKey) {
        status = 'active';
      } else {
        status = 'inactive';
      }
      tab.push(React.createElement(Tab, { key: 'tab' + index,
        tabKey: index,
        title: children.props.title,
        status: status,
        style: that.state.style,
        handleTabClick: that.handleTabClick,
        tabDeleteButton: that.props.tabDeleteButton,
        handleTabDeleteButton: that.handleTabDeleteButton,
        moveTab: that.moveTab }));
      if (!children.props.lazy || children.props.lazy && index === that.state.activeKey) {
        var props = { className: classNames(that.state.style + 'panel', status), status: status, key: index };
        if (that.state.panelUpdateKey === index) {
          props.update = true;
        }
        panel.push(React.cloneElement(children, props));
      }
    });
    if (this.props.addFrontTab && tab.length > 0) {
      //if the tab more than one, show add button
      tab.unshift(React.createElement(Tab, { key: 'ADDFront',
        tabKey: 'ADD',
        title: '＋',
        style: that.state.style,
        handleTabClick: that.handleAddFrontClick }));
    }
    if (this.props.addBackTab && tab.length > 0) {
      //if the tab more than one, show add button
      tab.push(React.createElement(Tab, { key: 'ADDBack',
        tabKey: 'ADD',
        title: '＋',
        style: that.state.style,
        handleTabClick: that.handleAddBackClick }));
    }

    return { tab: tab, panel: panel };
  },

  render: function render() {
    var deleteButtonTmpl;
    var opt = this._getPanel();
    var wrapper = this.state.style + "wrapper";
    var tabWrapper = this.state.style + "tab__wrapper";
    var panelWrapper = this.state.style + "panel__wrapper";
    var noneName = this.props.deleteAllButtonName;
    if (this.props.deleteAllButton && opt.tab.length > 0) {
      var className = this.state.style + "delete button btn-primary bg-red";
      deleteButtonTmpl = React.createElement(
        'button',
        { className: className, onClick: this.props.handleDeleteAllButton },
        noneName ? noneName : 'None'
      );
    }

    return React.createElement(
      'div',
      { className: wrapper },
      deleteButtonTmpl,
      React.createElement(
        'div',
        { className: tabWrapper },
        opt.tab
      ),
      React.createElement(
        'div',
        { className: panelWrapper },
        opt.panel
      )
    );
  }

}));

module.exports = DragDropContext(HTML5Backend)(Tabs);