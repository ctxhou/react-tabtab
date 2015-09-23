var React = require('react');

var Tabs = React.createClass({
  propTypes: {
  },

  getDefaultProps: function() {
    return {
      defaultActiveKey: 1
    }
  },

  getInitialState: function() {
    return {
      activeKey: this.props.activeKey || this.props.defaultActiveKey
    }
  },

  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }

})

module.exports = Tabs;