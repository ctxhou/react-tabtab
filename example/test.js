var React = require('react');
var Tabs = require('../src/Tabs');
var Panel = require('../src/Panel');
var App = React.createClass({
  render: function() {
    return (
      <Tabs>
        <Panel title="hi">
          123121233132
        </Panel>
        <Panel title="yo">
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