'use strict';

var React = require('react');
var Tab = require('./Tab');
var classNames = require('classnames');

var Tabs = React.createClass({
  displayName: 'Tabs',

  getDefaultProps: function getDefaultProps() {
    return {
      defaultActiveKey: 0,
      defaultStyle: "tabtab__default__"
    };
  },

  getInitialState: function getInitialState() {
    return {
      activeKey: this.props.activeKey || this.props.defaultActiveKey,
      style: this.props.style || this.props.defaultStyle
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

  _getPanel: function _getPanel() {
    var that = this;
    var tab = [];
    var panel = [];

    React.Children.forEach(this.props.children, function (children, index) {
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
        handleTabDeleteButton: that.handleTabDeleteButton }));
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

});

module.exports = Tabs;