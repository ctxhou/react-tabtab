import React from 'react';
import ReactDOM from 'react-dom';
import Simple from './simple';
import ControllTab from './controllTab';
import Drag from './drag';
import Mix from './mix';
import CloseTab from './closable';
import AddButton from './addButton';
import CustomTheme from './customTheme';
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
        <h2>Controll active tab:</h2>
        <ControllTab/>
        <h2>Drag:</h2>
        <Drag/>
        <h2>Mix drag and normal tab:</h2>
        <Mix/>
        <h2>closable:</h2>
        <CloseTab/>
        <h2>add button:</h2>
        <AddButton/>
        <h2>custom theme:</h2>
        <CustomTheme/>
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
