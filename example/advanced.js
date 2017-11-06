import React, {Component} from 'react';
import {Tabs, Panel} from '../';

export default class Advanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Tab1",
          content: "content 1"
        },
        {
          title: "Tab2",
          content: "content 2"
        },
        {
          title: "Tab3",
          content: "content 3"
        }
      ]
    }
  }

  handleAddBackTab() {
    var data = this.state.data;
    var length = data.length + 1;
    var title = "Tab" + length;
    var content = "content " + length;
    data.push({title: title, content: content});
    this.setState({data: data, activeKey: data.length-1});
  }

  // Because the delete button only show on the active button
  // so when you receive the action, it means delete the active button data.
  handleTabDeleteButton() {
    var data = this.state.data;
    var activeKey = this.state.activeKey;
    data.splice(activeKey, 1); // delete the selected key
    // count the active key
    if (data.length <= activeKey + 1)
      activeKey = data.length - 1;
    this.setState({
      data: data,
      activeKey: activeKey
    })
  }

  handleTabClick(key) {
    this.setState({activeKey: key})
  }

  beginDrag() {

  }

  setMoveData(dragIndex, hoverIndex) {
    var data = this.state.data;
    var dragData = data[dragIndex];
    data.splice(dragIndex, 1);
    data.splice(hoverIndex, 0, dragData);
    this.setState({data: data, activeKey: hoverIndex});
  }

  render() {
    var panel = [];
    var data = this.state.data;
    for (var i in data) {
      var k = data[i];
      panel.push(<Panel title={k.title} key={i}>
                  {k.content}
                </Panel>)
    }
    return (
      <Tabs activeKey={this.state.activeKey} 
            style={"tabtab__"+this.props.style+"__"} 
            addBackTab={true}
            handleAddBackClick={this.handleAddBackTab}
            tabDeleteButton={true}
            handleTabDeleteButton={this.handleTabDeleteButton}
            deleteAllButton={true}
            handleDeleteAllButton={this.handleDeleteAllButton}
            draggable={true}
            beginDrag={this.beginDrag}
            handleTabClick={this.handleTabClick}
            setMoveData={this.setMoveData}
            deleteAllClassname="tabbbbb">
        {panel}
      </Tabs>
    )
  }
}
