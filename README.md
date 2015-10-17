# react-tabtab

react-tabtab is another react tab. But why you need another react tab?

Some react tabs provide so powerful function like only render the active tab to the DOM or it seperates the tab and panel.

But in my case, I only need the tab that can hide and show. Besides, all the content in the panel is directly render to DOM. 

Besides, cause my personal project need more function. I find the tab only show content can satisfy my use case.

So react tabtab provide more api for you to interact with tabs.

That's it. That is react-tabtab.

Hope it would fit in your case.

[demo](http://ctxhou.github.io/react-tabtab/)

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


## Style

now only use css as style.

if you want to use the same style as teh [demo](http://ctxhou.github.io/react-tabtab/), just clone the `dist/tab.css` and inlcude in you project.

    
## Todo

- [] add the update partial selection

## License

MIT
