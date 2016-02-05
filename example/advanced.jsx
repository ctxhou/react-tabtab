var React = require('react');
var Tab = require('../');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

module.exports = React.createClass({

  displayName: 'Advanced',

  getInitialState: function() {
    var data = [
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
    return {data: data, activeKey: 2};
  },

  handleAddBackTab: function() {
    var data = this.state.data;
    var length = data.length + 1;
    var title = "Tab" + length;
    var content = "content " + length;
    data.push({title: title, content: content});
    this.setState({data: data, activeKey: data.length-1});
  },
  // Because the delete button only show on the active button
  // so when you receive the action, it means delete the active button data.
  handleTabDeleteButton: function() {
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
  },

  handleTabClick: function(key) {
    this.setState({activeKey: key})
  },

  beginDrag: function() {
    console.log('begin drag')
  },

  setMoveData: function(dragIndex, hoverIndex) {
    var data = this.state.data;
    var dragData = data[dragIndex];
    data.splice(dragIndex, 1);
    data.splice(hoverIndex, 0, dragData);
    this.setState({data: data, activeKey: hoverIndex});
  },

  render: function() {
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
            style="tabtab__modern__" 
            addBackTab={false}
            handleAddBackClick={this.handleAddBackTab}
            tabDeleteButton={false}
            handleTabDeleteButton={this.handleTabDeleteButton}
            deleteAllButton={false}
            handleDeleteAllButton={this.handleDeleteAllButton}
            beginDrag={this.beginDrag}
            handleTabClick={this.handleTabClick}
            setMoveData={this.setMoveData}>
        {panel}
      </Tabs>
    )
  }
})

function handleDeleteButton() {
  console.log('delete')
}

function handleTabDeleteButton() {
  console.log('tab delete dfkgdfkg ')
}
