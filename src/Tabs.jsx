var React = require('react');
var Tab = require('./Tab.jsx');
var classNames = require('classnames');

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

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.activeKey !== this.state.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey
      })
    }
  },

  handleTabClick: function(activeKey) {
    this.props.handleTabClick(activeKey);
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
        panel.push(React.cloneElement(children, {className: classNames('tabtab__panel', 'active')}));
      } else {
        tab.push(<Tab key={index}
                      tabKey={index}
                      title={children.props.title}
                      status='inactive'
                      handleTabClick={that.handleTabClick}/>);
        panel.push(React.cloneElement(children, {className: classNames('tabtab__panel', 'inactive')}));
      }
    })


    return {tab: tab, panel: panel};
  },

  render: function() {
    var opt = this._getPanel();
    return(
      <div>
        <div className="tabtab__tab__wrapper">
          {opt.tab}
        </div>
        <div className="tabtab__panel__wrapper">
          {opt.panel}
        </div>
      </div>
    )
  }

})

module.exports = Tabs;