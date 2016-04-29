var React = require('react');
var Tab = require('../');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var Simple = React.createClass({
  render: function() {
    return (
      <Tabs activeKey={2} 
            style={"tabtab__"+this.props.style+"__"} 
            addBackTab={true}
            handleAddBackClick={handleAddBackTab}
            tabDeleteButton={true}
            handleTabDeleteButton={handleTabDeleteButton}
            deleteAllButton={true}
            deleteAllButtonName="NONO"
            handleDeleteAllButton={handleDeleteButton}
            deleteAllClassname="tabbbbb">
        <Panel title="tab1">
          123121233132
        </Panel>
        <Panel title="tab2" lazy={true}>
          ypmn
        </Panel>
        <Panel title="tab3">
          sdfsdf
        </Panel>
        <Panel title="tab4">
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

module.exports = Simple;