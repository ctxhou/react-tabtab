import { Children, Component, cloneElement, createElement } from 'react';
import React__default from 'react';
import styled, { keyframes } from 'styled-components';
import invariant from 'invariant';
import propTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};









var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

//      
var Tabs = function (_React$Component) {
  inherits(Tabs, _React$Component);

  function Tabs(props) {
    classCallCheck(this, Tabs);

    var _this = possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.handleTabChange = _this.handleTabChange.bind(_this);
    _this.handleTabSequence = _this.handleTabSequence.bind(_this);
    _this.handleEdit = _this.handleEdit.bind(_this);
    _this.state = {
      activeIndex: _this.getActiveIndex(props)
    };
    return _this;
  }

  // static defaultProps = {
  //   showModalButton: 4,
  //   showArrowButton: 'auto',
  //   onTabChange: () => {},
  //   onTabSequenceChange: () => {},
  //   customStyle: {
  //     TabList: null,
  //     Tab: null,
  //     Panel: null,
  //     ActionButton: null
  //   }
  // }

  createClass(Tabs, [{
    key: 'getActiveIndex',
    value: function getActiveIndex(props) {
      var defaultIndex = props.defaultIndex,
          activeIndex = props.activeIndex;

      if (activeIndex) return activeIndex;
      if (defaultIndex) return defaultIndex;
      return 0;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeIndex !== this.props.activeIndex) {
        this.setState({ activeIndex: nextProps.activeIndex });
      }
    }
  }, {
    key: 'handleTabChange',
    value: function handleTabChange(index) {
      var _props = this.props,
          activeIndex = _props.activeIndex,
          onTabChange = _props.onTabChange;

      if (activeIndex !== 0 && !activeIndex) {
        this.setState({ activeIndex: index });
      }
      if (onTabChange) {
        onTabChange(index);
      }
    }
  }, {
    key: 'handleTabSequence',
    value: function handleTabSequence(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var onTabSequenceChange = this.props.onTabSequenceChange;

      if (onTabSequenceChange) {
        onTabSequenceChange({ oldIndex: oldIndex, newIndex: newIndex });
      }
    }
  }, {
    key: 'handleEdit',
    value: function handleEdit(_ref2) {
      var type = _ref2.type,
          index = _ref2.index;
      var onTabEdit = this.props.onTabEdit;

      if (onTabEdit) {
        onTabEdit({ type: type, index: index });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          extraProps = objectWithoutProperties(_props2, ['children']);
      var activeIndex = this.state.activeIndex;

      var props = _extends({
        handleTabChange: this.handleTabChange,
        handleTabSequence: this.handleTabSequence,
        handleEdit: this.handleEdit,
        activeIndex: activeIndex
      }, extraProps);
      return createElement(
        'div',
        null,
        Children.map(children, function (child) {
          return cloneElement(child, props);
        })
      );
    }
  }]);
  return Tabs;
}(Component);

Tabs.defaultProps = {
  showModalButton: 4,
  showArrowButton: 'auto',
  onTabChange: function onTabChange() {},
  onTabSequenceChange: function onTabSequenceChange() {},
  customStyle: {
    TabList: null,
    Tab: null,
    Panel: null,
    ActionButton: null
  }
};
module.exports = exports['default'];

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lib = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _react2 = _interopRequireDefault(React__default);

  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }

  var IconBase = function IconBase(_ref, _ref2) {
    var children = _ref.children;
    var color = _ref.color;
    var size = _ref.size;
    var style = _ref.style;
    var width = _ref.width;
    var height = _ref.height;

    var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

    var _ref2$reactIconBase = _ref2.reactIconBase;
    var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

    var computedSize = size || reactIconBase.size || '1em';
    return _react2.default.createElement('svg', _extends({
      children: children,
      fill: 'currentColor',
      preserveAspectRatio: 'xMidYMid meet',
      height: height || computedSize,
      width: width || computedSize
    }, reactIconBase, props, {
      style: _extends({
        verticalAlign: 'middle',
        color: color || reactIconBase.color
      }, reactIconBase.style || {}, style)
    }));
  };

  IconBase.propTypes = {
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    style: _propTypes2.default.object
  };

  IconBase.contextTypes = {
    reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
  };

  exports.default = IconBase;
  module.exports = exports['default'];
});

unwrapExports(lib);

var chevronLeft = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }return target;
    };

    var _react2 = _interopRequireDefault(React__default);

    var _reactIconBase2 = _interopRequireDefault(lib);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var MdChevronLeft = function MdChevronLeft(props) {
        return _react2.default.createElement(_reactIconBase2.default, _extends({ viewBox: '0 0 40 40' }, props), _react2.default.createElement('g', null, _react2.default.createElement('path', { d: 'm25.7 12.3l-7.7 7.7 7.7 7.7-2.3 2.3-10-10 10-10z' })));
    };

    exports.default = MdChevronLeft;
    module.exports = exports['default'];
});

var MdChevronLeft = unwrapExports(chevronLeft);

var chevronRight = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }return target;
    };

    var _react2 = _interopRequireDefault(React__default);

    var _reactIconBase2 = _interopRequireDefault(lib);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var MdChevronRight = function MdChevronRight(props) {
        return _react2.default.createElement(_reactIconBase2.default, _extends({ viewBox: '0 0 40 40' }, props), _react2.default.createElement('g', null, _react2.default.createElement('path', { d: 'm16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z' })));
    };

    exports.default = MdChevronRight;
    module.exports = exports['default'];
});

var MdChevronRight = unwrapExports(chevronRight);

var formatListBulleted = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }return target;
    };

    var _react2 = _interopRequireDefault(React__default);

    var _reactIconBase2 = _interopRequireDefault(lib);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var MdFormatListBulleted = function MdFormatListBulleted(props) {
        return _react2.default.createElement(_reactIconBase2.default, _extends({ viewBox: '0 0 40 40' }, props), _react2.default.createElement('g', null, _react2.default.createElement('path', { d: 'm11.6 8.4h23.4v3.2h-23.4v-3.2z m0 13.2v-3.2h23.4v3.2h-23.4z m0 10v-3.2h23.4v3.2h-23.4z m-5-3.8q1 0 1.6 0.6t0.7 1.6-0.7 1.6-1.6 0.6-1.5-0.6-0.6-1.6 0.6-1.6 1.5-0.6z m0-20.3q1.1 0 1.8 0.7t0.7 1.8-0.7 1.8-1.8 0.7-1.7-0.7-0.8-1.8 0.8-1.8 1.7-0.7z m0 10q1.1 0 1.8 0.7t0.7 1.8-0.7 1.8-1.8 0.7-1.7-0.7-0.8-1.8 0.8-1.8 1.7-0.7z' })));
    };

    exports.default = MdFormatListBulleted;
    module.exports = exports['default'];
});

var MdFormatListBulleted = unwrapExports(formatListBulleted);

//      




function isNumber(number) {
  return !isNaN(parseInt(number, 10));
}

//      
var SortMethod = function (_React$Component) {
  inherits(SortMethod, _React$Component);

  function SortMethod(props) {
    classCallCheck(this, SortMethod);

    var _this = possibleConstructorReturn(this, (SortMethod.__proto__ || Object.getPrototypeOf(SortMethod)).call(this, props));

    _this.onSortEnd = _this.onSortEnd.bind(_this);
    return _this;
  }

  createClass(SortMethod, [{
    key: 'onSortEnd',
    value: function onSortEnd(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var _props = this.props,
          activeIndex = _props.activeIndex,
          handleTabChange = _props.handleTabChange,
          handleTabSequence = _props.handleTabSequence;

      if (oldIndex === newIndex) {
        if (activeIndex !== oldIndex) {
          handleTabChange(oldIndex);
        }
      } else {
        handleTabSequence({ oldIndex: oldIndex, newIndex: newIndex });
      }
    }
  }]);
  return SortMethod;
}(Component);

module.exports = exports['default'];

//      
var DragTabContainer = SortableContainer(function (_ref) {
  var children = _ref.children;

  return createElement(
    'div',
    { style: { marginTop: '30px' } },
    children
  );
});

var ModalTabListWrapper = function (_SortMethod) {
  inherits(ModalTabListWrapper, _SortMethod);

  function ModalTabListWrapper() {
    classCallCheck(this, ModalTabListWrapper);
    return possibleConstructorReturn(this, (ModalTabListWrapper.__proto__ || Object.getPrototypeOf(ModalTabListWrapper)).apply(this, arguments));
  }

  createClass(ModalTabListWrapper, [{
    key: 'render',
    value: function render() {
      return createElement(
        DragTabContainer,
        { onSortEnd: this.onSortEnd,
          axis: 'y',
          lockAxis: 'y',
          distance: 2 },
        this.props.children
      );
    }
  }]);
  return ModalTabListWrapper;
}(SortMethod);

var TabModal = function (_React$Component) {
  inherits(TabModal, _React$Component);

  function TabModal() {
    classCallCheck(this, TabModal);
    return possibleConstructorReturn(this, (TabModal.__proto__ || Object.getPrototypeOf(TabModal)).apply(this, arguments));
  }

  createClass(TabModal, [{
    key: 'render',
    value: function render() {
      return createElement(
        Modal,
        { open: true,
          onClose: this.props.closeModal,
          modalStyle: { minWidth: '20%', backgroundColor: 'rgb(249, 249, 249)' } },
        createElement(
          ModalTabListWrapper,
          { handleTabSequence: this.props.handleTabSequence,
            handleTabChange: this.props.handleTabChange,
            activeIndex: this.props.activeIndex },
          this.props.children
        )
      );
    }
  }]);
  return TabModal;
}(Component);

module.exports = exports['default'];

var _templateObject = taggedTemplateLiteral(['\n  background-color: white;\n  text-align: left;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  width: auto;\n  border-bottom: 1px solid #eee;\n  padding: ', ';\n'], ['\n  background-color: white;\n  text-align: left;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  width: auto;\n  border-bottom: 1px solid #eee;\n  padding: ', ';\n']);
var _templateObject2 = taggedTemplateLiteral(['\n  overflow: hidden;\n'], ['\n  overflow: hidden;\n']);
var _templateObject3 = taggedTemplateLiteral(['\n  padding-left: 0;\n  position: relative;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  transition: transform .3s cubic-bezier(.42, 0, .58, 1);\n'], ['\n  padding-left: 0;\n  position: relative;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  transition: transform .3s cubic-bezier(.42, 0, .58, 1);\n']);
var _templateObject4 = taggedTemplateLiteral(['\n  height: 100%;\n  width ', 'px;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  background: #f9f9f9;\n  > svg {\n    padding-top: 11px;\n  }\n'], ['\n  height: 100%;\n  width ', 'px;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  background: #f9f9f9;\n  > svg {\n    padding-top: 11px;\n  }\n']);
var _templateObject5 = taggedTemplateLiteral(['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  ', ';\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  ', ';\n  &:hover {\n    cursor: pointer;\n  }\n']);
var _templateObject6 = taggedTemplateLiteral(['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n']);

//      
var buttonWidth = 35;
var getPadding = function getPadding(_ref) {
  var showModalButton = _ref.showModalButton,
      showArrowButton = _ref.showArrowButton;

  var paddingLeft = 0;
  var paddingRight = 0;
  if (showModalButton) {
    paddingLeft += buttonWidth;
  }
  if (showArrowButton) {
    paddingLeft += buttonWidth;
    paddingRight += buttonWidth;
    if (showModalButton) {
      paddingLeft += 2;
    }
  }
  if (paddingLeft > 0) {
    paddingLeft += 3;
  }
  if (paddingRight > 0) {
    paddingRight += 3;
  }
  return '0 ' + paddingRight + 'px 0 ' + paddingLeft + 'px';
};

var TabListStyle = styled.div(_templateObject, function (props) {
  return getPadding(props);
});

var ListInner = styled.div(_templateObject2);

var ListScroll = styled.div(_templateObject3);

var ActionButtonStyle = styled.div(_templateObject4, buttonWidth);

var makeScrollButton = function makeScrollButton(ActionButton) {
  return ActionButton.extend(_templateObject5, function (props) {
    return props.left ? props.showModalButton ? 'left: ' + (buttonWidth + 2) + 'px' : 'left: 0' : 'right: 0';
  });
};

var makeFoldButton = function makeFoldButton(ActionButton) {
  return ActionButton.extend(_templateObject6);
};

var TabListComponent = function (_React$Component) {
  inherits(TabListComponent, _React$Component);

  function TabListComponent(props) {
    classCallCheck(this, TabListComponent);

    var _this = possibleConstructorReturn(this, (TabListComponent.__proto__ || Object.getPrototypeOf(TabListComponent)).call(this, props));

    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.renderTabs = _this.renderTabs.bind(_this);
    _this.isShowModalButton = _this.isShowModalButton.bind(_this);
    _this.isShowArrowButton = _this.isShowArrowButton.bind(_this);
    _this.scrollPosition = 0;
    _this.tabRefs = [];
    _this.state = {
      modalIsOpen: false,
      showArrowButton: false,
      showModalButton: false
    };
    return _this;
  }

  createClass(TabListComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isShowArrowButton();
      this.isShowModalButton();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.children.length !== this.props.children.length) {
        this.isShowArrowButton();
        this.isShowModalButton();
      }
      // if activeIndex is changed, and children is added
      // means => add new child
      if (prevProps.activeIndex !== this.props.activeIndex && prevProps.children.length < this.props.children.length) {
        this.scrollToIndex(this.props.activeIndex);
      }
      // if prev state show arrow button, and current state doesn't show
      // need to reset the scroll position, or some tabs will be hided by container.
      if (prevState.showArrowButton && !this.state.showArrowButton) {
        this.scrollToZero();
      }
    }
  }, {
    key: 'getTabNode',
    value: function getTabNode(tab) {
      var tabType = tab.constructor.name;
      if (tabType === 'Tab') {
        return tab.__INTERNAL_NODE;
      } else if (tabType === 'DragTab') {
        return tab.__INTERNAL_NODE.node;
      }
    }
  }, {
    key: 'unifyScrollMax',
    value: function unifyScrollMax(width) {
      return parseFloat(width / 3 * 2);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(direction) {
      var leftMove = 0;
      var containerOffset = this.listContainer.getBoundingClientRect();
      var containerWidth = this.listContainer.offsetWidth;
      var tabFirstOffset = this.getTabNode(this.tabRefs[0]).getBoundingClientRect();
      var tabLastOffset = this.getTabNode(this.tabRefs[this.tabRefs.length - 1]).getBoundingClientRect();

      if (direction === 'right') {
        leftMove = tabLastOffset.right - containerOffset.right;
        if (leftMove > containerWidth) {
          leftMove = this.unifyScrollMax(containerWidth);
        }
      } else if (direction === 'left') {
        leftMove = tabFirstOffset.left - containerOffset.left;
        if (-leftMove > containerWidth) {
          leftMove = -this.unifyScrollMax(containerWidth);
        }
      }
      this.scrollPosition += leftMove;
      if (this.scrollPosition < 0) {
        this.scrollPosition = 0;
      }

      this.listScroll.style.transform = 'translate3d(-' + this.scrollPosition + 'px, 0, 0)';
    }
  }, {
    key: 'scrollToIndex',
    value: function scrollToIndex(index) {
      var tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
      var containerOffset = this.listContainer.getBoundingClientRect();
      var leftMove = tabOffset.right - containerOffset.right;
      this.scrollPosition += leftMove;
      if (this.scrollPosition < 0) {
        this.scrollPosition = 0;
      }
      this.listScroll.style.transform = 'translate3d(-' + this.scrollPosition + 'px, 0, 0)';
    }
  }, {
    key: 'scrollToZero',
    value: function scrollToZero() {
      this.listScroll.style.transform = 'translate3d(0, 0, 0)';
    }
  }, {
    key: 'toggleModal',
    value: function toggleModal(open) {
      var _this2 = this;

      this.setState({ modalIsOpen: open }, function () {
        if (!open) {
          _this2.scrollToIndex(_this2.props.activeIndex);
        }
      });
    }
  }, {
    key: 'isShowModalButton',
    value: function isShowModalButton() {
      var showModalButton = this.props.showModalButton;

      if (isNumber(showModalButton)) {
        // $FlowFixMe, weired. currently set showModalButton as number | bool, but don't know why flow only can recognize it as bool
        showModalButton = this.props.children.length >= showModalButton;
      }
      this.setState({ showModalButton: showModalButton });
    }
  }, {
    key: 'isShowArrowButton',
    value: function isShowArrowButton() {
      var showArrowButton = this.props.showArrowButton;

      if (showArrowButton === 'auto') {
        var tabWidth = 0;
        var containerWidth = this.listContainer.offsetWidth;
        showArrowButton = false;
        for (var index = 0; index < this.tabRefs.length; index++) {
          var tab = this.getTabNode(this.tabRefs[index]);
          // $FlowFixMe
          tabWidth += tab.offsetWidth;
          if (tabWidth >= containerWidth) {
            showArrowButton = true;
            break;
          }
        }
      }
      this.setState({ showArrowButton: showArrowButton });
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _this3 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var isModal = arguments[1];
      var _props = this.props,
          children = _props.children,
          activeIndex = _props.activeIndex,
          handleTabChange = _props.handleTabChange,
          handleEdit = _props.handleEdit,
          customStyle = _props.customStyle;

      var props = {
        handleTabChange: handleTabChange,
        handleEdit: handleEdit,
        CustomTabStyle: customStyle.Tab
      };
      if (!isModal) {
        this.tabRefs = [];
      }
      return Children.map(children, function (child, index) {
        return cloneElement(child, _extends({
          key: index,
          active: index === activeIndex,
          index: index,
          tabIndex: index,
          ref: function ref(node) {
            if (!isModal && node) {
              _this3.tabRefs.push(node);
            }
          }
        }, props, options));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          customStyle = _props2.customStyle,
          activeIndex = _props2.activeIndex,
          handleTabChange = _props2.handleTabChange,
          handleTabSequence = _props2.handleTabSequence,
          ExtraButton = _props2.ExtraButton;
      var modalIsOpen = this.state.modalIsOpen;

      var TabList = customStyle.TabList || TabListStyle;
      var ActionButton = customStyle.ActionButton || ActionButtonStyle;
      var FoldButton = makeFoldButton(ActionButton);
      var ScrollButton = makeScrollButton(ActionButton);
      invariant(this.props.children, 'React-tabtab Error: You MUST pass at least one tab');
      return createElement(
        'div',
        null,
        ExtraButton ? ExtraButton : null,
        createElement(
          TabList,
          { hasExtraButton: !!ExtraButton,
            showModalButton: this.state.showModalButton,
            showArrowButton: this.state.showArrowButton },
          this.state.showModalButton ? createElement(
            FoldButton,
            { innerRef: function innerRef(node) {
                return _this4.foldNode = node;
              },
              onClick: this.toggleModal.bind(this, true),
              showArrowButton: this.state.showArrowButton },
            createElement(MdFormatListBulleted, null)
          ) : null,
          this.state.showArrowButton ? createElement(
            'div',
            null,
            createElement(
              ScrollButton,
              { left: true,
                onClick: function onClick() {
                  _this4.handleScroll('left');
                },
                innerRef: function innerRef(node) {
                  return _this4.leftArrowNode = node;
                },
                showModalButton: this.state.showModalButton },
              createElement(MdChevronLeft, null)
            ),
            createElement(
              ScrollButton,
              { onClick: function onClick() {
                  _this4.handleScroll('right');
                },
                innerRef: function innerRef(node) {
                  return _this4.rightArrowNode = node;
                } },
              createElement(MdChevronRight, null)
            )
          ) : null,
          createElement(
            ListInner,
            { innerRef: function innerRef(node) {
                return _this4.listContainer = node;
              } },
            createElement(
              ListScroll,
              { innerRef: function innerRef(node) {
                  return _this4.listScroll = node;
                } },
              this.renderTabs()
            )
          )
        ),
        modalIsOpen ? createElement(
          TabModal,
          { closeModal: this.toggleModal.bind(this, false),
            handleTabSequence: handleTabSequence,
            handleTabChange: handleTabChange,
            activeIndex: activeIndex },
          this.renderTabs({ vertical: true }, true)
        ) : null
      );
    }
  }]);
  return TabListComponent;
}(Component);

TabListComponent.displayName = 'TabList';

var clear = createCommonjsModule(function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }return target;
    };

    var _react2 = _interopRequireDefault(React__default);

    var _reactIconBase2 = _interopRequireDefault(lib);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var MdClear = function MdClear(props) {
        return _react2.default.createElement(_reactIconBase2.default, _extends({ viewBox: '0 0 40 40' }, props), _react2.default.createElement('g', null, _react2.default.createElement('path', { d: 'm31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z' })));
    };

    exports.default = MdClear;
    module.exports = exports['default'];
});

var Close = unwrapExports(clear);

var _templateObject$2 = taggedTemplateLiteral(['\n  display: inline-block;\n  color: #777;\n  margin-left: 3px;\n  padding-bottom: 2px;\n  vertical-align: middle;\n  transition: background-color .2s cubic-bezier(.645, .045, .355, 1);\n  &:hover {\n    color: black;\n    background-color: #eee;\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  color: #777;\n  margin-left: 3px;\n  padding-bottom: 2px;\n  vertical-align: middle;\n  transition: background-color .2s cubic-bezier(.645, .045, .355, 1);\n  &:hover {\n    color: black;\n    background-color: #eee;\n    cursor: pointer;\n  }\n']);

//      
var CloseWrapper = styled.div(_templateObject$2);

var CloseButton = function (_React$Component) {
  inherits(CloseButton, _React$Component);

  function CloseButton() {
    classCallCheck(this, CloseButton);
    return possibleConstructorReturn(this, (CloseButton.__proto__ || Object.getPrototypeOf(CloseButton)).apply(this, arguments));
  }

  createClass(CloseButton, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        CloseWrapper,
        { onClick: this.props.handleDelete },
        React__default.createElement(Close, null)
      );
    }
  }]);
  return CloseButton;
}(React__default.Component);

module.exports = exports['default'];

var _templateObject$1 = taggedTemplateLiteral(['\n  display: ', ';\n  color: ', ';\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  border: 1px solid transparent;\n  ', '\n  ', '\n  ', '\n  transition: color .3s cubic-bezier(.645, .045, .355, 1);\n  transition: background-color .3s cubic-bezier(.645, .045, .355, 1);\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n    border-color: #ddd #ddd #fff;\n  }\n'], ['\n  display: ', ';\n  color: ', ';\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  border: 1px solid transparent;\n  ', '\n  ', '\n  ', '\n  transition: color .3s cubic-bezier(.645, .045, .355, 1);\n  transition: background-color .3s cubic-bezier(.645, .045, .355, 1);\n  user-select: none;\n  &:hover {\n    cursor: pointer;\n    color: black;\n    border-color: #ddd #ddd #fff;\n  }\n']);

//      
var TabStyle = styled.div(_templateObject$1, function (props) {
  return props.vertical ? 'block' : 'inline-block';
}, function (props) {
  return props.active ? 'black' : '#007bff';
}, function (props) {
  return props.vertical ? '\n      border-bottom: 1px solid #efefef;\n      border-left: 1px solid #efefef;\n      border-right: 1px solid #efefef;\n      background-color: white;\n      padding: 10px 10px;\n      &:first-child {\n        border-top: 1px solid #efefef;        \n      }\n    ' : function (props) {
    return props.closable ? 'padding: 10px 10px 10px 15px;' : 'padding: 10px 15px;';
  };
}, function (props) {
  return props.active && props.vertical ? '\n      background-color: #eee;\n    ' : null;
}, function (props) {
  return props.active && !props.vertical ? '\n      border-color: #ddd #ddd #fff;\n    ' : null;
});

var Tab = function (_React$Component) {
  inherits(Tab, _React$Component);

  function Tab(props) {
    classCallCheck(this, Tab);

    var _this = possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

    _this.clickTab = _this.clickTab.bind(_this);
    _this.clickDelete = _this.clickDelete.bind(_this);
    return _this;
  }

  createClass(Tab, [{
    key: 'clickTab',
    value: function clickTab() {
      var _props = this.props,
          handleTabChange = _props.handleTabChange,
          index = _props.index;

      handleTabChange(index);
    }
  }, {
    key: 'clickDelete',
    value: function clickDelete(event) {
      event.stopPropagation(); // prevent trigger clickTab event.
      var _props2 = this.props,
          handleEdit = _props2.handleEdit,
          index = _props2.index;

      handleEdit({ type: 'delete', index: index });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          CustomTabStyle = _props3.CustomTabStyle,
          active = _props3.active,
          closable = _props3.closable,
          vertical = _props3.vertical;

      var TabComponent = CustomTabStyle || TabStyle;
      return (
        // $FlowFixMe
        createElement(
          TabComponent,
          { innerRef: function innerRef(node) {
              return _this2.__INTERNAL_NODE = node;
            },
            onClick: this.clickTab,
            active: active,
            vertical: vertical,
            closable: closable },
          this.props.children,
          closable ? createElement(CloseButton, { handleDelete: this.clickDelete }) : null
        )
      );
    }
  }]);
  return Tab;
}(Component);

Tab.displayName = 'Tab';

//      
var DragTabContainer$1 = SortableContainer(function (_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  return React__default.createElement(
    TabListComponent,
    props,
    children
  );
});

var DragTabList = function (_SortMethod) {
  inherits(DragTabList, _SortMethod);

  function DragTabList() {
    classCallCheck(this, DragTabList);
    return possibleConstructorReturn(this, (DragTabList.__proto__ || Object.getPrototypeOf(DragTabList)).apply(this, arguments));
  }

  createClass(DragTabList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = objectWithoutProperties(_props, ['children']);

      return React__default.createElement(
        DragTabContainer$1,
        _extends({ onSortEnd: this.onSortEnd,
          axis: 'x',
          lockAxis: 'x',
          distance: 2
        }, props),
        children
      );
    }
  }]);
  return DragTabList;
}(SortMethod);

DragTabList.displayName = 'DragTabList';
module.exports = exports['default'];

//      
var DragTabElement = SortableElement(function (_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ['children']);

  return createElement(
    Tab,
    _extends({ index: props.tabIndex }, props),
    children
  );
});

var DragTab = function (_React$Component) {
  inherits(DragTab, _React$Component);

  function DragTab() {
    classCallCheck(this, DragTab);
    return possibleConstructorReturn(this, (DragTab.__proto__ || Object.getPrototypeOf(DragTab)).apply(this, arguments));
  }

  createClass(DragTab, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          props = objectWithoutProperties(_props, ['children']);

      return createElement(
        DragTabElement,
        _extends({ ref: function ref(node) {
            return _this2.__INTERNAL_NODE = node;
          } }, props),
        children
      );
    }
  }]);
  return DragTab;
}(Component);

DragTab.displayName = 'DragTab';

module.exports = exports['default'];

//      
var PanelList = function (_React$Component) {
  inherits(PanelList, _React$Component);

  function PanelList() {
    classCallCheck(this, PanelList);
    return possibleConstructorReturn(this, (PanelList.__proto__ || Object.getPrototypeOf(PanelList)).apply(this, arguments));
  }

  createClass(PanelList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          activeIndex = _props.activeIndex,
          customStyle = _props.customStyle;

      if (!children) {
        return null;
      }

      return createElement(
        'div',
        null,
        cloneElement(children[activeIndex], { activeIndex: activeIndex, CustomPanelStyle: customStyle.Panel })
      );
    }
  }]);
  return PanelList;
}(Component);

module.exports = exports['default'];

var _templateObject$3 = taggedTemplateLiteral(['\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(.25);\n    opacity: 0;\n  }\n'], ['\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(.25);\n    opacity: 0;\n  }\n']);
var _templateObject2$1 = taggedTemplateLiteral(['\n  background-color: white;\n  text-align: left;\n  padding: 20px 15px;\n  animation: ', ' 0.2s linear;\n  transition: all 1s linear;\n'], ['\n  background-color: white;\n  text-align: left;\n  padding: 20px 15px;\n  animation: ', ' 0.2s linear;\n  transition: all 1s linear;\n']);

//      
var fadeOut = keyframes(_templateObject$3);

var PanelStyle = styled.div(_templateObject2$1, fadeOut);

var PanelComponent = function (_React$Component) {
  inherits(PanelComponent, _React$Component);

  function PanelComponent() {
    classCallCheck(this, PanelComponent);
    return possibleConstructorReturn(this, (PanelComponent.__proto__ || Object.getPrototypeOf(PanelComponent)).apply(this, arguments));
  }

  createClass(PanelComponent, [{
    key: 'render',
    value: function render() {
      var Panel = this.props.CustomPanelStyle || PanelStyle;
      return createElement(
        Panel,
        null,
        this.props.children
      );
    }
  }]);
  return PanelComponent;
}(Component);

var _templateObject$4 = taggedTemplateLiteral(['\n  float: right;\n  border: 1px solid #eee;\n  border-radius: 2px;\n  padding: 3px;\n  margin-top: 10px;\n  margin-left: 2px;\n  display: inline-block;\n  color: #777;\n  vertical-align: middle;\n  transition: background-color .2s cubic-bezier(.645, .045, .355, 1);\n  &:hover {\n    color: black;\n    cursor: pointer;\n  }\n'], ['\n  float: right;\n  border: 1px solid #eee;\n  border-radius: 2px;\n  padding: 3px;\n  margin-top: 10px;\n  margin-left: 2px;\n  display: inline-block;\n  color: #777;\n  vertical-align: middle;\n  transition: background-color .2s cubic-bezier(.645, .045, .355, 1);\n  &:hover {\n    color: black;\n    cursor: pointer;\n  }\n']);

//      
var Wrapper = styled.div(_templateObject$4);

var ExtraButton = function (_React$Component) {
  inherits(ExtraButton, _React$Component);

  function ExtraButton() {
    classCallCheck(this, ExtraButton);
    return possibleConstructorReturn(this, (ExtraButton.__proto__ || Object.getPrototypeOf(ExtraButton)).apply(this, arguments));
  }

  createClass(ExtraButton, [{
    key: 'render',
    value: function render() {
      return createElement(
        Wrapper,
        { onClick: this.props.onClick },
        createElement(
          'div',
          null,
          this.props.children
        )
      );
    }
  }]);
  return ExtraButton;
}(Component);

module.exports = exports['default'];

//      
var styled$1 = { TabListStyle: TabListStyle, ActionButtonStyle: ActionButtonStyle, TabStyle: TabStyle, PanelStyle: PanelStyle };
var defaultOutput = {
  Tabs: Tabs,
  TabList: TabListComponent,
  Tab: Tab,
  DragTabList: DragTabList,
  DragTab: DragTab,
  PanelList: PanelList,
  Panel: PanelComponent,
  ExtraButton: ExtraButton,
  styled: styled$1
};

module.exports = exports['default'];

export default defaultOutput;
