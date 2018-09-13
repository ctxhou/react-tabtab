import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Select from 'react-select';
import Basic from './components/Basic';
import IconTab from './components/IconTab';
import Draggable from './components/Draggable';
import AddAndClose from './components/AddAndClose';
import Modal from './components/Modal';
import Complicated from './components/Complicated';
import Async from './components/Async';
import themes from './themes';

const themeOptions = Object.keys(themes).map(theme => {
  return {value: theme, label: themes[theme].name};
});

const Header = styled.div`
  text-align: center;
`;

const SelectWrapper = styled.div`
  display: inline-block;
  width: 300px;
`;

const Logo = styled.img`
  margin-top: 40px;
  max-height: 100px;
`;

const examples = [
  {
    title: 'Basic Tabs',
    anchor: 'basic',
    description: null,
    Component: Basic,
    source: 'https://github.com/ctxhou/react-tabtab/blob/master/docs/components/Basic.js'
  },
  {
    title: 'Icon Tabs',
    anchor: 'icon',
    description: 'Tab content is customizable. Icons, images, any content is available.',
    Component: IconTab,
    source: 'https://github.com/ctxhou/react-tabtab/blob/master/docs/components/IconTab.js'
  },
  {
    title: 'Draggable Tabs',
    anchor: 'draggable',
    description: 'Try to drag and drop the tab.',
    Component: Draggable,
    source: 'https://github.com/ctxhou/react-tabtab/blob/master/docs/components/Draggable.js'
  },
  {
    title: 'Add and Close Tabs',
    anchor: 'add-close',
    description: null,
    Component: AddAndClose,
    source: 'https://github.com/ctxhou/react-tabtab/blob/master/docs/components/AddAndClose.js'
  },
  {
    title: 'Async tab',
    anchor: 'async',
    description: 'Lazy load the tab content',
    Component: Async,
    source: 'https://github.com/ctxhou/react-tabtab/blob/master/docs/components/Async.js'
  },
  {
    title: 'Modal View',
    anchor: 'modal',
    description: 'With modal view, it\'s easier to select tab when there are lots of tabs and on mobile device',
    Component: Modal,
    source: 'https://github.com/ctxhou/react-tabtab/blob/master/docs/components/Modal.js'
  }
]

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.state = {
      currentTheme: 'bootstrap'
    }
  }

  handleThemeChange(opt) {
    this.setState({currentTheme: opt.value});
  }

  render() {
    const {currentTheme} = this.state;

    return (
      <div className="avenir">
        <Header className="mw8 center mb4">
          <Logo src="https://i.imgur.com/6o66rig.png" alt=""/>
          <p className="f3">
            A mobile support, draggable, editable and api based Tab for ReactJS.
          </p>
          <a className="github-button" href="https://github.com/ctxhou/react-tabtab" data-size="large" data-show-count="true" aria-label="Star ctxhou/react-tabtab on GitHub">Star</a>
          <div>
            <a className="f6 link dim br-pill ba bw1 ph3 pv2 mt3 mb1 dib green"
               href="https://github.com/ctxhou/react-tabtab"
               target="_blank"
               rel="noopener noreferrer"
            >
              Document
            </a>            
          </div>
        </Header>
        <div className="bg-light-gray">
          <div className="center pa1" style={{textAlign: 'center'}}>
            <div className="black-90 pa2">Select a theme</div>
            <SelectWrapper>
              <Select
                name="form-field-name"
                value={currentTheme}
                options={themeOptions}
                clearable={false}
                autoBlur={true}
                onChange={this.handleThemeChange}
              />
            </SelectWrapper>
          </div>
          {examples.map(item => (
            <div className="mw6 center pa3" key={item.title}>
              <h3 className="f3 fw2 black-90 mv3" id={item.anchor}>
                {item.title}
              </h3>
              {item.description ?
                <p>{item.description}</p>
              : null}
              <item.Component customStyle={themes[currentTheme].style}/>
              <a className="green mt2 db tr" href={item.source} target="_blank">View Source</a>
            </div>
          ))}

          <div className="mw6 center pl3 pt3" id="complicated">
            <h2>Now, let's mix all feature together. <br/>Demo a complicated example!</h2>
            <p>Try to</p>
            <ul>
              <li>Drag and drop the tab</li>
              <li>Add new tab</li>
              <li>Close tab</li>
              <li><b>And last, do above actions on MODAL view!</b></li>
            </ul>
          </div>
          <div className="mw7 center pb4">
            <Complicated customStyle={themes[currentTheme].style}/>
            <a className="green mt2 db tr" href="https://github.com/ctxhou/react-tabtab/blob/master/docs/components/Complicated.js" target="_blank">View Source</a>
          </div>
          <div className="mw6 center pt3 pb4" style={{textAlign: 'center'}}>
            <h1>Try it!</h1>
            <p>
              Reference the document to use it.
            </p>
            <div>
              <a className="f6 link dim br-pill ba bw1 ph3 pv2 mt1 mb1 dib green"
                 href="https://github.com/ctxhou/react-tabtab"
                 target="_blank">
                Document
              </a>
            </div>
          </div>
        </div>
        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
          <small className="f6 db tc">Maintained by <a href="https://github.com/ctxhou">@ctxhou</a></small>
          <div className="tc mt3">
            <a className="link dim gray dib br-100 h2 w2 mr3 " href="https://github.com/ctxhou/react-tabtab" title="">
              <svg data-icon="github" viewBox="0 0 32 32" style={{fill: 'currentcolor'}}>
                <title>github icon</title>
                <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
              </svg>
            </a>
          </div>
        </footer>
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
