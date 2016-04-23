# react-tabtab

react-tabtab is an api based react tab.

[Demo](http://ctxhou.github.io/react-tabtab/)

## Features

![img](http://i.imgur.com/r5ssaiM.png)

* Add tab
* Delete tab
* Drag and Drop tab

## Usage

Now only available the commonjs module.

Install it with npm.

```js
npm install react-tabtab --save
```

Simple example:

```js
var Tabs = require('react-tabtab').Tabs;
var Panel = require('react-tabtab').Panel;

var App = React.createClass({
  render: function() {
    return (
      <Tabs>
        <Panel title="hi">
          Hi!
        </Panel>
        <Panel title="yo" lazy={true}>
          yo yo
        </Panel>
      </Tabs>
    )
  }
})

React.render(<App/>, document.getElementById('container'));
```

## Advanced Usage

### Add tab

![img](http://i.imgur.com/55GxKoR.png)

Trigger event on the add tab. Check the [example code](https://github.com//ctxhou/react-tabtab/blob/master/example/addTab.jsx).

#### props

* addBackTab (boolean)
  - true : show add tab
  - false: hide add tab
* handleAddBackClick (function): trigger the event when user click the tab.

### Delete tab

![img](http://i.imgur.com/znf3CJA.png)

Trigger event on the delete button. Check the [example code](https://github.com/ctxhou/react-tabtab/blob/master/example/deleteTab.jsx).

#### props

* tabDeleteButton (boolean)
    - true : show delete button
    - false: hide delete button
* handleTabDeleteButton (function): trigger the event when user click delete button.

### Drag and Drop:

![img](http://i.imgur.com/crMwvdr.gif)

The drag and drop feature is based on [react-dnd](https://github.com/gaearon/react-dnd). You can drag the tab to change the sequence.

Because react-dnd can't have two HTML5 backends at the same time ([this issue](https://github.com/gaearon/react-dnd/issues/186)), react-tabtab doesn't wrap the HTML5 in the library.

React-tabtab only wrap the `DragSource` and `DropTarget` on the tab, so if you want to use drag and drop, you need to wrap the `DragDropContext` on your top compoennt. (in case in your project you already have another html5 backend)

In this way, the drag and drop feature in react-tabtab can fit with other dnd library.

Check out the [example code](https://github.com//ctxhou/react-tabtab/blob/master/example/dragAndDrop.js) and the [top component](https://github.com//ctxhou/react-tabtab/blob/master/test/test.js).

#### props
* draggable (boolean)
  - true : tab can drag
  - false: tab can't drag
* beginDrag (function): do something when start to drag
* setMoveData (function)
  - return value {dragIndex, hoverIndex}
      - dragIndex: current drag tab index
      - hoverIndex: current hove tab index


### Advanced example

Check the [advanced.jsx](https://github.com//ctxhou/react-tabtab/blob/master/example/advanced.jsx). 

This example show how to add tab, delete tab, and drag and drop.

## All API

| property              | type     | default           | required | description                                            |
|-----------------------|----------|-------------------|----------|--------------------------------------------------------|
| activeKey             | int      | 0                 | no       | set the active key of the tab                          |
| addBackTab            | boolean  | false             | no       | whether show a add tab at the end                      |
| handleAddBackClick    | function | n/a               | no       | callback function when user click the add tab          |
| deleteButton          | boolean  | false             | no       | whether show a delete button at each panel             |
| handleDeleteButton    | function | false             | no       | callback function when user click the delete button    |
| handleTabClick        | function | n/a               | no       | return the key which user clicks                       |
| tabDeleteButton       | boolean  | false             | no       | whether each tab show delete button                    |
| handleTabDeleteButton | function | n/a               | no       | callback function when click tabDeleteButton           |
| style                 | string   | tabtab__default__ | no       | the class prefix                                       |
| deleteAllClassname    | string   | n/a               | no       |                                                        |
| draggable             | boolean  | false             | no       | whether tab can drag and drop                          |
| beginDrag             | function | n/a               | no       | callback function when start drag                      |
| setMoveData           | function | n/a               | no       | callback function to get current index and hover index |

## Style

now only use css as style.

if you want to use the same style as teh [demo](http://ctxhou.github.io/react-tabtab/), just clone the `dist/tab.css` and inlcude in you project.

## License

MIT [@ctxhou](github.com/ctxhou)
