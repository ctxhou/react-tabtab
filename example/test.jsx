var Tab = require('../index');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var App = React.createClass({
  render: function() {
    return (
      <Tabs activeKey={2} 
            style="tabtab__folder__" 
            addTab={true}
            handleAddTab={handleAddTab}
            deleteButton={true}
            handleDeleteButton={handleDeleteButton}>
        <Panel title="hi">
          123121233132
        </Panel>
        <Panel title="yo" lazy={true}>
          ypmn
        </Panel>
        <Panel title="ysdfsdo">
          sdfsdf
        </Panel>
        <Panel title="ysdfsdo">
          sdfsdf
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

module.exports = App;