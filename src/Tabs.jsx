import React from 'react';
import update from 'react/lib/update';
import Tab from './Tab';
import FunctionTab from './FunctionTab';
import classNames from 'classnames';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


@DragDropContext(HTML5Backend)
export default class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleAddFrontClick = this.handleAddFrontClick.bind(this);
    this.handleAddBackClick = this.handleAddBackClick.bind(this);
    this.handleTabDeleteButton = this.handleTabDeleteButton.bind(this);
    this.moveTab = this.moveTab.bind(this);
    this._getPanel = this._getPanel.bind(this);

    this.state = {
      activeKey: props.activeKey || props.defaultActiveKey,
      style: props.style || props.defaultStyle,
      children: props.children
    }

  }

  static defaultProps = {
      defaultActiveKey: 0,
      defaultStyle: "tabtab__default__"
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.state.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey
      })
    }

    if (nextProps.children !== this.state.children) {
      this.setState({
        children: nextProps.children
      })
    }
  }

  handleTabClick(activeKey) {
    if (this.props.handleTabClick) {
      this.props.handleTabClick(activeKey);
    }

    this.setState({
      activeKey: activeKey,
      panelUpdateKey: -1
    })
  }

  handleAddFrontClick() {
    this.props.handleAddFrontClick();
    this.setState({
      panelUpdateKey: 0
    })
  }

  handleAddBackClick() {
    this.props.handleAddBackClick();
  }

  handleTabDeleteButton(key) {
    this.props.handleTabDeleteButton();
    this.setState({
      panelUpdateKey: key
    })
  }

  moveTab(dragIndex, hoverIndex) {
    var dragTab = this.state.children[dragIndex];
    this.setState(update(this.state, {
      children: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragTab]
        ]
      },
      activeKey: {$apply: function() {
        return hoverIndex;
      }}
    }));
  }

  _getPanel() {
    var that = this;
    var tab = [];
    var panel = [];

    React.Children.forEach(this.state.children, function(children, index) {
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
      tab.unshift(<FunctionTab key="ADDFront"
                                tabKey="ADD"
                                title="＋"
                                style={that.state.style}
                                handleTabClick={that.handleAddFrontClick}/>);
    }
    if(this.props.addBackTab && tab.length > 0) { //if the tab more than one, show add button
      tab.push(<FunctionTab key="ADDBack"
                            tabKey="ADD"
                            title="＋"
                            style={that.state.style}
                            handleTabClick={that.handleAddBackClick}/>);
    }


    return {tab: tab, panel: panel};
  }

  render() {
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

}