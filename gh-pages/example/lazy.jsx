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
        <Panel title="Tab2" lazy={true}>
          Content2
        </Panel>
        <Panel title="Tab3">
          Content3
        </Panel>
      </Tabs>
    )
  }
})

module.exports = App;