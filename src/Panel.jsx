var React = require('react');

var Panel = React.createClass({

  render: function() {
    return(
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Panel;