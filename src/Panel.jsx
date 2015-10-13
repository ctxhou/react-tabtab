var React = require('react');

var Panel = React.createClass({

  shouldComponentUpdate: function(nextProps) {
    // not render if the status didnt change
    if (nextProps.status === this.props.status) {
      return false;
    } else {
      return true;
    }
  },

  render: function() {
    return(
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Panel;