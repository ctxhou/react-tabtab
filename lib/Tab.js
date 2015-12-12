'use strict';

var React = require('react');
var classNames = require('classnames');
var Tappable = require('react-tappable');

var Tab = React.createClass({
  displayName: 'Tab',

  handleTabDeleteButton: function handleTabDeleteButton(e) {
    e.stopPropagation(); //prevent trigger clickTab function
    this.props.handleTabDeleteButton(this.props.tabKey);
  },

  clickTab: function clickTab() {
    this.props.handleTabClick(this.props.tabKey);
  },

  render: function render() {
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

    return React.createElement(
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
    );
  }
});

module.exports = Tab;