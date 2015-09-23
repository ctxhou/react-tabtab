var React = require('react');

var Tab = React.createClass({

  clickTab: function() {
    this.props.handleTabClick(this.props.tabKey);
  },

  render: function() {
    var tabClass;
    if (this.props.status === 'active') {
      tabClass = 'active'
    } else {
      tabClass = 'inactive'
    }
    return(
      <li className={tabClass} onClick={this.clickTab}>
        title: {this.props.title}
      </li>
    )
  }

})

module.exports = Tab;