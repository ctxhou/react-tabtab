var Basic = require('./gh-pages/example/basic.jsx');
var Advanced = require('./gh-pages/example/advanced.jsx');
var Lazy = require('./gh-pages/example/lazy.jsx');


React.render(
  <Basic/>,
  document.getElementById('basic')
);

React.render(
  <Advanced/>,
  document.getElementById('advanced')
);


React.render(
  <Lazy/>,
  document.getElementById('lazy')
);


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