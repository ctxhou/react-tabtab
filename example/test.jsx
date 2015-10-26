var Tab = require('../index');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var App = React.createClass({
  render: function() {
    return (
      <Tabs activeKey={2} 
            style="tabtab__folder__" 
            addFrontTab={true}
            addBackTab={true}
            handleAddFrontTab={handleAddFrontTab}
            handleAddBackTab={handleAddBackTab}
            tabDeleteButton={true}
            handleTabDeleteButton={handleTabDeleteButton}
            deleteAllButton={true}
            handleDeleteAllButton={handleDeleteButton}>
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