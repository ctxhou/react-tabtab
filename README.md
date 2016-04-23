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


## API
    
| property              | type     | default           | required | description                                         |
|-----------------------|----------|-------------------|----------|-----------------------------------------------------|
| activeKey             | int      | 0                 | no       | set the active key of the tab                       |
| addTab                | boolean  | false             | no       | whether show a add tab at the end                   |
| handleAddTab          | function | n/a               | no       | callback function when user click the add tab       |
| deleteButton          | boolean  | false             | no       | whether show a delete button at each panel          |
| handleDeleteButton    | function | false             | no       | callback function when user click the delete button |
| lazy                  | boolean  | false             | no       | only load the content to DOM when you click the tab |
| handleTabClick        | function | n/a               | no       | return the key which user clicks                    |
| tabDeleteButton       | boolean  | false             | no       | whether each tab show delete button                 |
| handleTabDeleteButton | function | n/a               | no       | callback function when click tabDeleteButton        |
| style                 | string   | tabtab__default__ | no       | the class prefix                                    |
| deleteAllClassname    | string   | n/a               | no       |                                                     |

## Style

now only use css as style.

if you want to use the same style as teh [demo](http://ctxhou.github.io/react-tabtab/), just clone the `dist/tab.css` and inlcude in you project.

    
## Todo

- [ ] add more example

## License

MIT [@ctxhou](github.com/ctxhou)
