'use strict';

var _reactTransformHmr2 = require('react-transform-hmr');

var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);

var _react = require('react');

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _redboxReact = require('redbox-react');

var _components = {
  _$Unknown: {}
};

var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
  filename: 'src/Panel.jsx',
  components: _components,
  locals: [module],
  imports: [_react]
});

var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
  filename: 'src/Panel.jsx',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
  };
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var React = require('react');

var Panel = _wrapComponent('_$Unknown')(React.createClass({

  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    // not render if the status didnt change or the children is the same
    // if (nextProps.update) {
    //   return true;
    // } else if (nextProps.status === this.props.status) {
    //   return false;
    // } else {
    //   return true;
    // }
    return true;
  },

  render: function render() {
    var tmpl;
    return React.createElement(
      'div',
      { className: this.props.className },
      this.props.children
    );
  }
}));

module.exports = Panel;