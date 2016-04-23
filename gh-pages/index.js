var React = require('react');
var ReactDOM = require('react-dom');
var Basic = require('./example/basic.jsx');
var Advanced = require('./example/advanced.jsx');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
var Ad = DragDropContext(HTML5Backend)(Advanced);


ReactDOM.render(
  <Basic/>,
  document.getElementById('basic')
);

ReactDOM.render(
  <Ad/>,
  document.getElementById('advanced')
);

