'use strict';

var React = require('react');

var Panel = React.createClass({
  displayName: 'Panel',

  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    // not render if the status didnt change or the children is the same
    // if (nextProps.update) {
    //   return true;
    // } else if (nextProps.status === this.props.status) {
    //   return false;
    // } else {
    //   return true;
    // }
    return true;
  },

  render: function render() {
    var tmpl;
    return React.createElement(
      'div',
      { className: this.props.className },
      this.props.children
    );
  }
});

module.exports = Panel;