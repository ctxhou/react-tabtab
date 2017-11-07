import React from 'react';
import ReactDOM from 'react-dom';
import Simple from './simple';
import Drag from './drag';
// var Advanced = require('./advanced');
// var AddTab = require('./addTab');
// var DeleteTab = require('./deleteTab');
// var DragAndDrop = require('./dragAndDrop');
export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h2>Simple:</h2>
        <Simple/>
        <h2>Drag:</h2>
        <Drag/>
        {/*<h2>Add Tab</h2>
        <AddTab/>
        <h2>Delete Tab</h2>
        <DeleteTab/>
        <h2>Drag and Drop</h2>
        <DragAndDrop/>
        <h2>Advanced: </h2>
        <Advanced style='folder'/>
        <h2>Advanced side tab: </h2>
        <Advanced style='side'/>*/}
      </div>
    )
  }
}

ReactDOM.render(
  <Example/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
