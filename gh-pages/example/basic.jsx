var Tab = require('../../index');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var App = React.createClass({
  render: function() {
    return (
      <Tabs style="tabtab__folder__">
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
  console.log('click add tab')
}

function handleDeleteButton() {
  console.log('click delete button')
}

function handleTabDeleteButton() {
  console.log('click tab delete')
}

module.exports = App;