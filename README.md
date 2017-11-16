# react-tabtab
![version][version]
![david][david]
![download][download]

react-tabtab is an api based react tab.

[Demo](http://ctxhou.github.io/react-tabtab/)

[david]:       https://david-dm.org/ctxhou/react-tabtab.svg
[version]:     https://img.shields.io/npm/v/react-tabtab.svg?maxAge=2592000
[download]:    https://img.shields.io/npm/dm/react-tabtab.svg?maxAge=2592000
## Features

* **Mobile first** — Touch support. Easy usage at mobile view
* **Draggable tab** — Support drag and drop tab feature
* **Customizable style** — Based on `styled-components`, super easy to customize tab style
* **API based** — All action is controllable

## Installation

Install it with npm.

```js
npm install react-tabtab --save
```

Then, import the module by module bundler like `webpack`, `browserify`

```js
// es6
import {Tabs, DragTabList, DragTab, PanelList, Panel, ExtraButton} from 'react-tabtab';

// not using est
var Tabtab = require('react-tabtab');
var Tabs = Tabtab.Tabs;
var DragTabList = Tabtab.DragTabList;
var DragTab = Tabtab.DragTab;
var PanelList = Tabtab.PanelList;
var Panel = Tabtab.Panel;
var ExtraButton = Tabtab.ExtraButton;
```

## Usage

#### Basic Example:

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

It's simple to use. Zero configuration and it works well !

## Components

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
      <td><code>() => index</code></td>
      <td>null</td>
      <td>
        return current user click index <br/>
        You can use this api with <code>activeIndex</code>. When user click tab, update <code>activeIndex</code>.
      </td>
    </tr>
    <tr>
      <td>onTabSequenceChange</td>
      <td><code>() => {oldIndex, newIndex}</code></td>
      <td>null</td>
      <td>
        return changed oldIndex and newIndex value <br/>
        With this api, you can do switch tab very easily.
        <b>Note:<b/>This api is only called by <code>&lt;DragTab/&gt;</code>
      </td>
    </tr>
    <tr>
      <td>onTabEdit</td>
      <td><code>() => {type: [delete], index}</code></td>
      <td>null</td>
      <td>
        When user click <b>close button</b> , this api will return the button index clicked close.
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

Use to wrap `<Tab/>` or `<DragTab/>`.

### &lt;Tab /&gt;

Normal Tab. Show your children component on tab.

**Example**

```js
<Tab>
  <i className="fa fa-map-pin"></i>
  map tab
</Tab>
```
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
      <td>boolean</td>
      <td>false</td>
      <td>whether to show close button</td>
    </tr>
  </tbody>
</table>

### &lt;DragTab/ &gt;

A draggable tab. Api is the same with `<Tab/>`

### &lt;PanelList/ &gt;

Use to wrap `<Panel/>`

### &lt;Panel /&gt;

Tab content.

## Customize style

`react-tabtab` is based on `styled-components`. Therefore, it's super easy to customize the tab style.

Just extend the default component style and pass it to `customStyle` props.

### Use current style

You can check the current style at `src/themes` folder.

For example, if you want to use `material-design`, import the style and pass to `customStyle` props.

```js
import {Component} from 'react';
import * as customStyle from 'react-tabtab/lib/themes/material-design';
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';

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

If current theme doesn't meet your demand, follow the three steps and make your own one.

**First step: import current style**

```js
import {styled} from 'react-tabtab';
let {TabListStyle, ActionButtonStyle, TabStyle, PanelStyle} = styled;
```

**Second: extend style and export it**

```js
import {styled} from 'react-tabtab';
let {TabListStyle, ActionButtonStyle, TabStyle, PanelStyle} = styled;

TabListStyle = TabListStyle.extend`
  // write css
`;

TabStyle = TabStyle.extend`
  // write css
`;

ActionButtonStyle = ActionButtonStyle.extend`
  // write css
`;

PanelStyle = PanelStyle.extend`
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

  npm run build:watch
  node devServer.js

## License

MIT [@ctxhou](github.com/ctxhou)
