var React = require('react');
var ReactDOM = require('react-dom');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');

var Simple = require('../example/simple');
var Advanced = require('../example/advanced');
var AddTab = require('../example/addTab');
var DeleteTab = require('../example/deleteTab');
var DragAndDrop = require('../example/dragAndDrop');

var Example = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Simple:</h2>
        <Simple style='folder'/>
        <h2>Add Tab</h2>
        <AddTab/>
        <h2>Delete Tab</h2>
        <DeleteTab/>
        <h2>Drag and Drop</h2>
        <DragAndDrop/>
        <h2>Advanced: </h2>
        <Advanced style='folder'/>
        <h2>Advanced side tab: </h2>
        <Advanced style='side'/>
      </div>
    )
  }
})

var Ex = DragDropContext(HTML5Backend)(Example);

ReactDOM.render(
  <Ex/>,
  document.getElementById('root')
);