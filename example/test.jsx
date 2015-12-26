var React = require('react');
var Tab = require('../index');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var App = React.createClass({
  render: function() {
    return (
      <Tabs activeKey={2} 
            style="tabtab__folder__" 
            addBackTab={true}
            handleAddBackTab={handleAddBackTab}
            tabDeleteButton={true}
            handleTabDeleteButton={handleTabDeleteButton}
            deleteAllButton={true}
            deleteAllButtonName="NONO"
            handleDeleteAllButton={handleDeleteButton}>
        <Panel title="t1">
          123121233132
        </Panel>
        <Panel title="t2" lazy={true}>
          ypmn
        </Panel>
        <Panel title="t3">
          sdfsdf
        </Panel>
        <Panel title="t4">
          sdfsdf
        </Panel>
      </Tabs>
    )
  }
})

function handleAddFrontTab() {
  console.log('add front')
}

function handleAddBackTab() {
  console.log('add back')
}


function handleDeleteButton() {
  console.log('delete')
}

function handleTabDeleteButton() {
  console.log('tab delete dfkgdfkg ')
}

module.exports = App;