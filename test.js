var App = require('./example/test.jsx');
var Advanced = require('./example/advanced.jsx');
var rootInstance = null;


rootInstance = React.render(
  <App />,
  document.getElementById('root')
);


var advanceInstance = React.render(
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