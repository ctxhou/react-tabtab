var React = require('react');
var classNames = require('classnames');
var Tappable = require('react-tappable');

var Tab = React.createClass({

  handleTabDeleteButton: function() {
    this.props.handleTabDeleteButton(this.props.tabKey);
  },

  clickTab: function() {
    this.props.handleTabClick(this.props.tabKey);
  },

  render: function() {
    var tabClass;
    var tabTmpl;

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
      closeButtonStyle = {display: 'inline-block'};
    } else {
      closeButtonStyle = {display: 'none'};
    }

    return (
      <Tappable onTap={this.clickTab}>
        {tabTmpl}
        <li className={tabClass}>
          {this.props.title}
          <div className="tabtab__folder__circCont" style={closeButtonStyle}>
            <div className="tabtab__folder__circle" onClick={this.handleTabDeleteButton}></div>
          </div>
        </li>
      </Tappable>
    );
  }
})

module.exports = Tab;