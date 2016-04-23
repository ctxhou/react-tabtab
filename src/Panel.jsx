var React = require('react');

var Panel = React.createClass({

  shouldComponentUpdate: function(nextProps) {
    // not render if the status didnt change or the children is the same
<<<<<<< HEAD
    if (nextProps.update) {
      return true;
    } else if (nextProps.status === this.props.status) {
      return false;
    } else {
      return true;
    }
=======
    // if (nextProps.update) {
    //   return true;
    // } else if (nextProps.status === this.props.status) {
    //   return false;
    // } else {
    //   return true;
    // }
    return true;
>>>>>>> master
  },

  render: function() {
    var tmpl;
    return(
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Panel;