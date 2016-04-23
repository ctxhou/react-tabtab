var React = require('react');
var Tab = require('../');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var DeleteTab = React.createClass({
  render: function() {
    return (
      <Tabs activeKey={2} 
            style="tabtab__folder__" 
            addBackTab={false}
            tabDeleteButton={true}
            handleTabDeleteButton={handleTabDeleteButton}>
        <Panel title="tab1">
          123121233132
        </Panel>
        <Panel title="tab2">
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

function handleTabDeleteButton() {
  alert('delete tab ');
}

module.exports = DeleteTab;