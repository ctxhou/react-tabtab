var React = require('react');
var Tab = require('../');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var AddTab = React.createClass({
  render: function() {
    return (
      <Tabs activeKey={2} 
            style="tabtab__folder__" 
            addBackTab={true}
            handleAddBackClick={handleAddBackTab}
            tabDeleteButton={false}
            deleteAllButton={false}>
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

function handleAddBackTab() {
  alert('add back')
}

module.exports = AddTab;