import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Basic from './components/Basic';
import Draggable from './components/Draggable';
import Closable from './components/Closable';
// import ControllTab from './controllTab';
// import Drag from './drag';
// import Mix from './mix';
// import AddButton from './addButton';
// import CustomTheme from './customTheme';
// var Advanced = require('./advanced');
// var AddTab = require('./addTab');
// var DeleteTab = require('./deleteTab');
// var DragAndDrop = require('./dragAndDrop');

const Header = styled.div`
  text-align: center;
`;
const examples = [
  {
    title: 'Basic Tabs',
    description: null,
    Component: Basic
  },
  {
    title: 'Draggable Tabs',
    description: 'Try to drag and drop the tab.',
    Component: Draggable
  },
  {
    title: 'Closable Tabs',
    description: null,
    Component: Closable
  }
]

export default class Root extends React.Component {
  render() {
    return (
      <div className="avenir">
        <Header className="mw8 center mb4">
          <h1 className="f1">React tabtab</h1>
          <p className="f3">Make your react tab dance. 💃</p>
          <a className="github-button" href="https://github.com/ctxhou/react-tabtab" data-size="large" data-show-count="true" aria-label="Star ctxhou/react-tabtab on GitHub">Star</a>
        </Header>
        <div className="bg-light-gray">
          {examples.map(item => (
            <div className="mw6 center pa3" key={item.title}>
              <h3 className="f3 fw2 black-90 mv3">
                {item.title}
              </h3>
              {item.description ?
                <p>{item.description}</p>
              : null}
              <item.Component/>
            </div>
          ))}
        </div>
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
