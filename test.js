var React = require('react');
var App = require('./example/test.jsx');
var Advanced = require('./example/advanced.jsx');
var ReactDOM = require('react-dom');
var rootInstance = null;


// rootInstance = ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


var advanceInstance = ReactDOM.render(
  <Advanced />,
  document.getElementById('advance')
);


if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance,advanceInstance];
    }
  });
}