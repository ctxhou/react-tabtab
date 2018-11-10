<h1 align="center">
  <img src="https://i.imgur.com/6o66rig.png" alt="">
  <br/>
  <br/>
</h1>

[![version](https://img.shields.io/npm/v/react-tabtab.svg)](https://www.npmjs.com/package/react-tabtab/)
[![travis](https://travis-ci.org/ctxhou/react-tabtab.svg?branch=master)](https://travis-ci.org/ctxhou/react-tabtab)
[![appveyor](https://ci.appveyor.com/api/projects/status/jn6724u4k4uer53j?svg=true)](https://ci.appveyor.com/project/ctxhou/react-tabtab)
![david](https://david-dm.org/ctxhou/react-tabtab.svg)
[![codecov](https://codecov.io/gh/ctxhou/react-tabtab/branch/master/graph/badge.svg)](https://codecov.io/gh/ctxhou/react-tabtab)
![download](https://img.shields.io/npm/dm/react-tabtab.svg)
![gzip size](http://img.badgesize.io/https://unpkg.com/react-tabtab/dist/react-tabtab.min.js?compression=gzip)

> A mobile support, draggable, editable and api based Tab for ReactJS. <br/>
> *Support react >= `v16.3`*

**Note: Since v2, we don't support v15 and old styled-components version (<4.0.0) [v15 document](https://github.com/ctxhou/react-tabtab/blob/v1.8.4/README.md)**

### [Demo](https://ctxhou.github.io/react-tabtab/)

![demo gif](https://media.giphy.com/media/xUOxeRdRrSvSLiX528/giphy.gif)

## Features

* **Mobile supported** — Touch support. Easy to use on mobile device
* **Draggable tab** — Support drag and drop tab
* **Add & Delete** — Tab can be added and deleted
* **Async content** — Lazy load panel content
* **Customizable style** — Based on `styled-components`, super easy to customize tab style
* **API based** — All actions are controllable
* **ARIA accessible**

## Table of Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  * [Minimal setup](#minimal-setup)
  * [Draggable tab](#draggable-tab)
  * [Async Panel](#async-panel)
  * [Another Example](#another-example)
- [Components / Api](#components--api)
  * [&lt;Tabs /&gt;](#lttabs-gt)
  * [&lt;TabList /&gt;](#lttablist-gt)
  * [&lt;Tab /&gt;](#lttab-gt)
  * [&lt;DragTabList /&gt;](#ltdragtablist-gt)
  * [&lt;DragTab/ &gt;](#ltdragtab-gt)
  * [&lt;PanelList/ &gt;](#ltpanellist-gt)
  * [&lt;Panel /&gt;](#ltpanel-gt)
  * [&lt;AsyncPanel /&gt;](#ltasyncpanel-gt)
- [Customize style](#customize-style)
  * [Use current style](#use-current-style)
  * [Make your own style](#make-your-own-style)
- [Development](#development)
- [License](#license)

<!-- tocstop -->

## Installation

Install it with npm or yarn

Install `styled-components`. Because we put the `styled-components` to the peerDependencies, it suggests by [styled-components official blog](https://www.styled-components.com/docs/faqs#i-am-a-library-author-should-i-bundle-styledcomponents-with-my-library)

```js
$ npm install react-tabtab --save
$ npm install styled-components@^4.0.0 --save
```

Then, import the module by module bundler like `webpack`, `browserify`

```js
// es6
import {Tabs, DragTabList, DragTab, PanelList, Panel, ExtraButton} from 'react-tabtab';

// not using es6
var Tabtab = require('react-tabtab');
var Tabs = Tabtab.Tabs;
var DragTabList = Tabtab.DragTabList;
var DragTab = Tabtab.DragTab;
var PanelList = Tabtab.PanelList;
var Panel = Tabtab.Panel;
var ExtraButton = Tabtab.ExtraButton;
```

UMD build is also available. If you do this, you'll need to include the dependencies:

For example:

```html
<script src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>
<script src="https://unpkg.com/classnames@2.2.5/index.js"></script>
<script src="https://unpkg.com/styled-components/dist/styled-components.min.js" type="text/javascript"></script>
<script src="https://unpkg.com/react-sortable-hoc/dist/umd/react-sortable-hoc.js"></script>
<script src="https://unpkg.com/react-poppop/dist/react-poppop.min.js"></script>
<script src="https://unpkg.com/react-tabtab/dist/react-tabtab.min.js"></script>
```

You can reference [standalone.html](https://github.com/ctxhou/react-tabtab/blob/master/docs/standalone.html) example.


## Usage

React-tabtab is a tab component with highly customization. You can create a tab in simply setting. You also can create a tab system full with `draggable`, `async loading`, `close and create button`.
All the actions are api based. It means there is `no state` in the component. Developers have full control.

### Minimal setup

```js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';

class Basic extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
        </TabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>
    )
  }
}

ReactDOM.render(<Basic/>, document.getElementById('root'));
```

It's simple to use. Zero configuration!

### Draggable tab

```js
import React, {Component} from 'react';
import {Tabs, DragTabList, DragTab, PanelList, Panel} from 'react-tabtab';
import {simpleSwitch} from 'react-tabtab/lib/helpers/move';

export default class Drag extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTabSequenceChange = this.handleTabSequenceChange.bind(this);
    this.state = {
      activeIndex: 0,
    }
  }

  handleTabChange(index) {
    this.setState({activeIndex: index});
  }

  handleTabSequenceChange({oldIndex, newIndex}) {
    const {tabs} = this.state;
    const updateTabs = simpleSwitch(tabs, oldIndex, newIndex);
    this.setState({tabs: updateTabs, activeIndex: newIndex});
  }

  render() {
    const {activeIndex} = this.state;
    return (
      <Tabs activeIndex={activeIndex}
            onTabChange={this.handleTabChange}
            onTabSequenceChange={this.handleTabSequenceChange}>
        <DragTabList>
          <DragTab>DragTab1</DragTab>
          <DragTab>DragTab2</DragTab>
        </DragTabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>
    )
  }
}
ReactDOM.render(<Basic/>, document.getElementById('root'));
```

Based on above example, the different to implement `normal tab` or `drag tab` is using different wrapper and child.

And all the actions are controllable. You can customize your switch action. But if you don't want to write customized switch logic, you can directly use `import {simpleSwitch} from 'react-tabtab/lib/helpers/move'` this built-in function.

**normal tab**

```js
<Tabs>
  <TabList>
    <Tab>Tab1</Tab>
  </TabList>
  <PanelList>
    <Panel>Content1</Panel>
  </PanelList>
</Tabs>
```

**drag tab**

```js
<Tabs>
  <DragTabList>
    <DragTab>DragTab1</DragTab>
  </DragTabList>
  <PanelList>
    <Panel>Content1</Panel>
  </PanelList>
</Tabs>
```

### Async Panel

In some case, if the data is large or we want to save the bandwidth, lazy loading the content is possible solution. You can use `AsyncPanel` to laze load panel content.
Moreover, you can mix lazy load panel with normal panel!

```js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Tabs, TabList, Tab, PanelList, AsyncPanel, Panel} from 'react-tabtab';

function loadContentFunc(callback) {
  setTimeout(() => {
    callback(null, [
      {product: 'json'},
      {product: 'joseph'}
    ]);
  }, 100);
}

// You also can provide promise as return function:
// function loadContentFunc() {
//   return fetch('/products')
//     .then(resp => resp.json())
//     .then(data => data);
// }

class AsyncTab extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
        </TabList>
        <PanelList>
          <Panel>Content1</Panel>
          <AsyncPanel loadContent={loadContentFunc}
                      render={data => (<div>{JSON.stringify(data)}</div>)}
                      renderLoading={() => (<div>Loading...</div>)}
                      cache={true}
          />
        </PanelList>
      </Tabs>
    )
  }
}

ReactDOM.render(<AsyncTab/>, document.getElementById('root'));
```

To implement lazy loading, use `AsyncPanel` to wrap your panel content. Remember to provide `loadContent`, `render`, `renderLoading` these 3 props.

In `loadContent` props, both `callback` and `promise` type are supported.

If you use `callback`, remember to call `callback` when finish async loading.

If you use `promise`, need to return promise action.

When data is loading, the panel content will show `renderLoading` component.

After finishing loading data, the panel content will show `render` component and react-tabtab will pass the `loadContent` result as first parameter. So you can customize the component of panel content.

Live example: [Link](https://ctxhou.github.io/react-tabtab/#async)

### Another Example

Except drag and drop tab, `react-tabtab` also support other usable application, like:

* Add and close button: [Example](https://ctxhou.github.io/react-tabtab/#add-close)
* Modal view at mobile support: [Example](https://ctxhou.github.io/react-tabtab/#modal)
* Auto detect number of tab and make it scrollable
* **All the action is controllable**:[Example](https://ctxhou.github.io/react-tabtab/#complicated)

All of these features are api based, so you can customize each action on demand.

More code examples are avalable [here](https://github.com/ctxhou/react-tabtab/blob/master/docs/components/).

## Components / Api

### &lt;Tabs /&gt;

`<Tabs/>` is the main component of `react-tabtab`. Most of the api is passed from it.

<table>
  <tbody>
    <tr>
      <th>props</th>
      <th>type</th>
      <th>default</th>
      <th></th>
    </tr>
    <tr>
      <td>defaultIndex</td>
      <td><code>int</code></td>
      <td>null</td>
      <td>set the <b>initial</b> active key</td>
    </tr>
    <tr>
      <td>activeIndex</td>
      <td><code>int</code></td>
      <td>null</td>
      <td>control current activeIndex.<br/>You need to pass new activeIndex value if you want to show different tab.</td>
    </tr>
    <tr>
      <td>defaultIndex</td>
      <td><code>int</code></td>
      <td>null</td>
      <td>set the <b>initial</b> active key</td>
    </tr>
    <tr>
      <td>showModalButton</td>
      <td><code>boolean</code><br/><code>number</code></td>
      <td>4</td>
      <td>
        <ul>
          <li><b>true</b>: always show button</li>
          <li><b>false</b>: always hide button</li>
          <li><b>[number]</b>: when <code>number of tab >= [number]</code>, show button</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>showArrowButton</td>
      <td><code>auto</code><br/><code>boolean</code></td>
      <td>auto</td>
      <td>
        <li><b>auto</b>: detect tab width, if they exceed container, show button</li>
        <li><b>true</b>: always show button</li>
        <li><b>false</b>: always hide button</li>
      </td>
    </tr>
    <tr>
      <td>ExtraButton</td>
      <td><code>React Node</code></td>
      <td>null</td>
      <td>
        customize extra button content, example: `+` button
      </td>
    </tr>
    <tr>
      <td>onTabChange</td>
      <td><code>() => tabIndex</code></td>
      <td>null</td>
      <td>
        return tabIndex is clicked<br/>
        You can use this api with <code>activeIndex</code>. When user click tab, update <code>activeIndex</code>.
      </td>
    </tr>
    <tr>
      <td>onTabSequenceChange</td>
      <td><code>() => {oldIndex, newIndex}</code></td>
      <td>null</td>
      <td>
        return changed oldIndex and newIndex value<br/>
        With this api, you can do switch tab very easily.
        <b>Note:<b/>This api is only called by <code>&lt;DragTab/&gt;</code>
      </td>
    </tr>
    <tr>
      <td>onTabEdit</td>
      <td><code>() => {type: [delete], index}</code></td>
      <td>null</td>
      <td>
        When user click <b>close button</b> , this api will return the clicked close button index.
      </td>
    </tr>
    <tr>
      <td>customStyle</td>
      <td>
        <pre>
<code>{
  TabList: React.Element,
  Tab: React.Element,
  Panel: React.Element,
  ActionButton: React.Element
}</code></pre>
      </td>
      <td>Bootstrap theme</td>
      <td>
        customized tab style component
      </td>
    </tr>
  </tbody>
</table>

### &lt;TabList /&gt;

Use to wrap `<Tab/>`.

### &lt;Tab /&gt;

Normal Tab. Show the children component on tab.

<table>
  <tbody>
    <tr>
      <th>props</th>
      <th>type</th>
      <th>default</th>
      <th></th>
    </tr>
    <tr>
      <td>closable</td>
      <td><code>boolean</code></td>
      <td>false</td>
      <td>whether to show close button</td>
    </tr>
  </tbody>
</table>

**Example**

```js
<Tab>
  <i className="fa fa-map-pin"></i>
  map tab
</Tab>
```

### &lt;DragTabList /&gt;

Use to wrap `<DragTab/>`.

### &lt;DragTab/ &gt;

A draggable tab. Api is the same with `<Tab/>`

### &lt;PanelList/ &gt;

Use to wrap `<Panel/>`

### &lt;Panel /&gt;

Tab content.

### &lt;AsyncPanel /&gt;

Lazy loading panel content.

<table>
  <tbody>
    <tr>
      <th>props</th>
      <th>type</th>
      <th>default</th>
      <th></th>
    </tr>
    <tr>
      <td>loadContent <b>*</b></td>
      <td>
        <code>(cb) => cb(error, data)</code> or <br/>
        <code>(cb) => Promise
      </td>
      <td>null</td>
      <td>when loadContent finish, call the callback or you can return promise</td>
    </tr>
    <tr>
      <td>render <b>*</b></td>
      <td>
        <code>(data) => Component</code>
      </td>
      <td>null</td>
      <td>when finish loading data, render this component</td>
    </tr>
    <tr>
      <td>renderLoading <b>*</b></td>
      <td>
        <code>() => Component</code>
      </td>
      <td>null</td>
      <td>when it is loading data, render this component</td>
    </tr>
    <tr>
      <td>cache</td>
      <td>
        <code>boolean</code>
      </td>
      <td>true</td>
      <td>should cache the data</td>
    </tr>
  </tbody>
</table>

## Customize style

`react-tabtab` is based on `styled-components`. Therefore, it's super easy to customize the tab style.

Just extend the default component style and pass it to `customStyle` props.

### Use current style

You can check the current style at `src/themes` folder.

For example, if you want to use `material-design`, import the style and pass to `customStyle` props.

**Example:**

```js
import {Component} from 'react';
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import * as customStyle from 'react-tabtab/lib/themes/material-design';

class Customized extends Component {
  render() {
    return (
      <Tabs customStyle={customStyle}>
        <TabList>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
        </TabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>
    )
  }
}
```

And now your tab is material design style!

### Make your own style

If current theme doesn't meet your demand, follow this three steps and create a new one.

**First step: import current style**

```js
import {styled} from 'react-tabtab';
let {TabListStyle, ActionButtonStyle, TabStyle, PanelStyle} = styled;
```

**Second: extend style and export it**

```js
import {styled} from 'react-tabtab';
let {TabListStyle, ActionButtonStyle, TabStyle, PanelStyle} = styled;

TabListStyle = styled(TabListStyle)`
  // write css
`;

TabStyle = styled(TabStyle)`
  // write css
`;

ActionButtonStyle = styled(ActionButtonStyle)`
  // write css
`;

PanelStyle = styled(PanelStyle)`
  // write css
`;

// need to follow this object naming
module.exports = {
  TabList: TabListStyle,
  ActionButton: ActionButtonStyle,
  Tab: TabStyle,
  Panel: PanelStyle
}
```

**Last: import your style and use it!**

When you finish the new `react-tabtab` style, feel free to add it to `theme/` folder and send PR!

## Development

```bash
$ yarn
$ npm start
```
## License

MIT [@ctxhou](github.com/ctxhou)
