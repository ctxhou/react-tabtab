var Tab = require('../../index');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;
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
var App = React.createClass({

  getInitialState: function() {
    var panel = [];
    data.forEach(function(k) {
      panel.push(<Panel title={k.title} key={k.title}>
                  {k.content}
                </Panel>)
    })

    return {panel: panel, activeKey: 2};
  },

  handleAddBackTab: function() {
    var panel = this.state.panel;
    var length = panel.length + 1;
    var title = "Tab" + length;
    var content = "content" + length;
    panel.push(<Panel title={title} key={title}>
                  {content}
                </Panel>);
    this.setState({panel: panel, activeKey: panel.length-1});
  },

  handleDeleteButton: function() {

  },

  handleTabClick: function(e) {
    console.log('tab click key' + e);
  },

  render: function() {
    return (
      <Tabs activeKey={this.state.activeKey} 
            style="tabtab__folder__" 
            addBackTab={true}
            handleAddBackTab={this.handleAddBackTab}
            tabDeleteButton={true}
            handleTabDeleteButton={this.handleTabDeleteButton}
            deleteAllButton={true}
            handleDeleteAllButton={this.handleDeleteAllButton}
            handleTabClick={handleTabClick}>
        {this.state.panel}
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

function handleTabClick(e) {
  console.log('click key ' + e);
}

module.exports = App;