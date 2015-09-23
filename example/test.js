var React = require('react');
var Tabs = require('../src/Tabs');
var Panel = require('../src/Panel');
var App = React.createClass({
  render: function() {
    return (
      <Tabs>
        <Panel>
          123121233132
        </Panel>
        <Panel>
          ypmn
        </Panel>
        <Panel>
          sdfsdf
        </Panel>
      </Tabs>
    )
  }
})

module.exports = App;