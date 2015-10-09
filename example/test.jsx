var Tab = require('../index');
var Tabs = Tab.Tabs;
var Panel = Tab.Panel;

var App = React.createClass({
  render: function() {
    return (
      <Tabs activeKey={2}>
        <Panel title="hi">
          123121233132
        </Panel>
        <Panel title="yo" lazy={true}>
          ypmn
        </Panel>
        <Panel title="ysdfsdo">
          sdfsdf
        </Panel>
      </Tabs>
    )
  }
})

module.exports = App;