var App = require('./example/test.jsx');
var rootInstance = null;


rootInstance = React.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}