var React = require('react');
var classNames = require('classnames');

var Tab = React.createClass({

  clickTab: function() {
    this.props.handleTabClick(this.props.tabKey);
  },

  render: function() {
    var tabClass;
    if (this.props.status === 'active') {
      tabClass = classNames('tabtab__tab', 'active');
    } else {
      tabClass = classNames('tabtab__tab');
    }
    return(
      <li className={tabClass} onClick={this.clickTab}>
        {this.props.title}
      </li>
    )
  }
})

module.exports = Tab;