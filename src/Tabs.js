var React = require('react');
var Tab = require('./Tab');

var Tabs = React.createClass({
  propTypes: {
  },

  getDefaultProps: function() {
    return {
      defaultActiveKey: 0
    }
  },

  getInitialState: function() {
    return {
      activeKey: this.props.activeKey || this.props.defaultActiveKey
    }
  },

  handleTabClick: function(activeKey) {
    this.setState({
      activeKey: activeKey
    })
  },

  _getPanel: function() {
    var that = this;
    var tab = [];
    var panel = [];
    React.Children.forEach(this.props.children, function(children, index) {
      // add tabs
      if (index === that.state.activeKey) {
        tab.push(<Tab key={index}
                      tabKey={index}
                      title={children.props.title}
                      status='active'
                      handleTabClick={that.handleTabClick}/>);
        panel.push(React.cloneElement(children, {className: 'panel-active'}));
      } else {
        tab.push(<Tab key={index}
                      tabKey={index}
                      title={children.props.title}
                      status='inactive'
                      handleTabClick={that.handleTabClick}/>);
        panel.push(React.cloneElement(children, {className: 'panel-inactive'}));
      }
    })


    return {tab: tab, panel: panel};
  },

  render: function() {
    var opt = this._getPanel();
    return(
      <div>
        {opt.tab}
        {opt.panel}
      </div>
    )
  }

})

module.exports = Tabs;