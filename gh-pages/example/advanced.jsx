var Tab = require('../../index');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var App = React.createClass({
  render: function() {
    return (
      <Tabs activeKey={2} 
            style="tabtab__folder__" 
            addTab={true}
            handleAddTab={handleAddTab}
            tabDeleteButton={true}
            handleTabDeleteButton={handleTabDeleteButton}
            deleteAllButton={true}
            handleDeleteAllButton={handleDeleteButton}
            handleTabClick={handleTabClick}>
        <Panel title="Tab1">
          Content1
        </Panel>
        <Panel title="Tab2">
          Content2
        </Panel>
        <Panel title="Tab3">
          Content3
        </Panel>
      </Tabs>
    )
  }
})

function handleAddTab() {
  console.log('add')
}

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