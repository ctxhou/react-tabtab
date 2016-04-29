var React = require('react');
var Simple = require('../example/simple.jsx');
var Advanced = require('../example/advanced.jsx');
var AddTab = require('../example/addTab.jsx');
var DeleteTab = require('../example/deleteTab.jsx');
var DragAndDrop = require('../example/dragAndDrop.js');
var ReactDOM = require('react-dom');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');


var Example = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Simple:</h2>
        <Simple style='folder'/>
        <h2>Simple side:</h2>
        <Simple style='side'/>
        <h2>Add Tab</h2>
        <AddTab/>
        <h2>Delete Tab</h2>
        <DeleteTab/>
        <h2>Drag and Drop</h2>
        <DragAndDrop/>
        <h2>Advanced: </h2>
        <Advanced/>
      </div>
    )
  }
})

var Ex = DragDropContext(HTML5Backend)(Example);

var rootInstance = ReactDOM.render(
  <Ex/>,
  document.getElementById('root')
);

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance,advanceInstance];
    }
  });
}