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
