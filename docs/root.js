import React from 'react';
import ReactDOM from 'react-dom';
// import Simple from './simple';
// import ControllTab from './controllTab';
// import Drag from './drag';
// import Mix from './mix';
// import CloseTab from './closable';
// import AddButton from './addButton';
// import CustomTheme from './customTheme';
// var Advanced = require('./advanced');
// var AddTab = require('./addTab');
// var DeleteTab = require('./deleteTab');
// var DragAndDrop = require('./dragAndDrop');
export default class Root extends React.Component {
  render() {
    return (
      <div>
        template
      </div>
    )
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
