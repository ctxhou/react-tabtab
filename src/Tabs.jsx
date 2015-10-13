var React = require('react');
var Tab = require('./Tab.jsx');
var classNames = require('classnames');

var Tabs = React.createClass({
  propTypes: {
  },

  getDefaultProps: function() {
    return {
      defaultActiveKey: 0,
      defaultStyle: "tabtab__default__"
    }
  },

  getInitialState: function() {
    return {
      activeKey: this.props.activeKey || this.props.defaultActiveKey,
      style: this.props.style || this.props.defaultStyle
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
    if (this.props.handleTabClick) {
      this.props.handleTabClick(activeKey);
    }
    this.setState({
      activeKey: activeKey
    })
  },

  handleAddClick: function() {
    this.props.handleAddTab();
  },

  handleTabDeleteButton: function() {
    this.props.handleTabDeleteButton();
  },

  _getPanel: function() {
    var that = this;
    var tab = [];
    var panel = [];

    React.Children.forEach(this.props.children, function(children, index) {
      // add tabs
      var status, className;
      if (index === that.state.activeKey) {
        status = 'active';
      } else {
        status = 'inactive';
      }

      tab.push(<Tab key={index}
                    tabKey={index}
                    title={children.props.title}
                    status={status}
                    style={that.state.style}
                    handleTabClick={that.handleTabClick}
                    tabDeleteButton={that.props.tabDeleteButton}
                    handleTabDeleteButton={that.props.handleTabDeleteButton}/>);
      if (!children.props.lazy || (children.props.lazy && index === that.state.activeKey)) {
        panel.push(React.cloneElement(children, {className: classNames(that.state.style + 'panel', status)}));
      } 
    })
    if(this.props.addTab && tab.length > 0) { //if the tab more than one, show add button
      tab.push(<Tab key="ADD"
                    tabKey="ADD"
                    title="＋"
                    style={that.state.style}
                    handleTabClick={that.handleAddClick}/>);
    }


    return {tab: tab, panel: panel};
  },

  render: function() {
    var deleteButtonTmpl;
    var opt = this._getPanel();
    var wrapper = this.state.style + "wrapper";
    var tabWrapper = this.state.style + "tab__wrapper";
    var panelWrapper = this.state.style + "panel__wrapper";
    if (this.props.deleteAllButton && opt.tab.length > 0) {
      var className = this.state.style + "delete button btn-primary bg-red";
      deleteButtonTmpl = <button className={className} onClick={this.props.handleDeleteAllButton}>
                          無
                        </button>;
    }
    return(
      <div className={wrapper}>
        {deleteButtonTmpl}
        <div className={tabWrapper}>
          {opt.tab}
        </div>
        <div className={panelWrapper}>
          {opt.panel}
        </div>
      </div>
    )
  }

})

module.exports = Tabs;