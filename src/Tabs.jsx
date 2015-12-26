var React = require('react');
var Tab = require('./Tab');
var classNames = require('classnames');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var Tabs = React.createClass({

  getDefaultProps: function() {
    return {
      defaultActiveKey: 0,
      defaultStyle: "tabtab__default__"
    }
  },

  getInitialState: function() {
    return {
      activeKey: this.props.activeKey || this.props.defaultActiveKey,
      style: this.props.style || this.props.defaultStyle,
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
      activeKey: activeKey,
      panelUpdateKey: -1
    })
  },

  handleAddFrontClick: function() {
    this.props.handleAddFrontTab();
    this.setState({
      panelUpdateKey: 0
    })
  },

  handleAddBackClick: function() {
    this.props.handleAddBackTab();
  },

  handleTabDeleteButton: function(key) {
    this.props.handleTabDeleteButton();
    this.setState({
      panelUpdateKey: key
    })
  },

  moveTab: function(dragIndex, hoverIndex) {
    console.log(this.props.children)
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

      tab.push(<Tab key={'tab'+index}
                    tabKey={index}
                    title={children.props.title}
                    status={status}
                    style={that.state.style}
                    handleTabClick={that.handleTabClick}
                    tabDeleteButton={that.props.tabDeleteButton}
                    handleTabDeleteButton={that.handleTabDeleteButton}
                    moveTab={that.moveTab}/>);
      if (!children.props.lazy || (children.props.lazy && index === that.state.activeKey)) {
        var props = {className: classNames(that.state.style + 'panel', status), status: status, key: index};
        if (that.state.panelUpdateKey === index) {
          props.update = true;
        }
        panel.push(React.cloneElement(children, props));
      }
    })
    if(this.props.addFrontTab && tab.length > 0) { //if the tab more than one, show add button
      tab.unshift(<Tab key="ADDFront"
                      tabKey="ADD"
                      title="＋"
                      style={that.state.style}
                      handleTabClick={that.handleAddFrontClick}/>);
    }
    if(this.props.addBackTab && tab.length > 0) { //if the tab more than one, show add button
      tab.push(<Tab key="ADDBack"
                    tabKey="ADD"
                    title="＋"
                    style={that.state.style}
                    handleTabClick={that.handleAddBackClick}/>);
    }


    return {tab: tab, panel: panel};
  },

  render: function() {
    var deleteButtonTmpl;
    var opt = this._getPanel();
    var wrapper = this.state.style + "wrapper";
    var tabWrapper = this.state.style + "tab__wrapper";
    var panelWrapper = this.state.style + "panel__wrapper";
    var noneName = this.props.deleteAllButtonName;
    if (this.props.deleteAllButton && opt.tab.length > 0) {
      var className = this.state.style + "delete button btn-primary bg-red";
      deleteButtonTmpl = <button className={className} onClick={this.props.handleDeleteAllButton}>
                          {noneName ? noneName : 'None'}
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

module.exports = DragDropContext(HTML5Backend)(Tabs);