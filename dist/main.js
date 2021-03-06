/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ \"./toy-react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n // // ------------------------------------------------------\n// // const func = a => '' + a\n// // console.log(func(100))\n// // window.func = func\n// // ------------------------------------------------------\n// class Winter extends Component {\n//   constructor() {\n//     super()\n//     this.state = {\n//       a: 1,\n//       b: 2\n//     }\n//   }\n//   render() {\n//     return (\n//       <div>\n//         {this.childrend}\n//         <br/>\n//         <button onclick={() => {this.setState({a: this.state.a + 1})}}>click</button>\n//         <span>{this.state.a.toString()}</span>\n//       </div>\n//     )\n//   }\n// }\n// window.ele = (\n//   <Winter class=\"box\" id=\"toy\">\n//     <span class=\"redText\">hello</span>\n//     <br/>\n//     <a>Winter</a>\n//   </Winter>\n// )\n// render(ele, document.body)\n\nvar Square = /*#__PURE__*/function (_Component) {\n  _inherits(Square, _Component);\n\n  var _super = _createSuper(Square);\n\n  function Square(props) {\n    var _this;\n\n    _classCallCheck(this, Square);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      value: null\n    };\n    return _this;\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"button\", {\n        className: \"square\",\n        onClick: function onClick() {\n          return _this2.setState({\n            value: 'X'\n          });\n        }\n      }, this.state.value);\n    }\n  }]);\n\n  return Square;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Board = /*#__PURE__*/function (_Component2) {\n  _inherits(Board, _Component2);\n\n  var _super2 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(Square, null);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var status = 'Next player: X';\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"div\", null, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"div\", {\n        className: \"status\"\n      }, status), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Game = /*#__PURE__*/function (_Component3) {\n  _inherits(Game, _Component3);\n\n  var _super3 = _createSuper(Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(Game, [{\n    key: \"render\",\n    value: function render() {\n      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"div\", {\n        className: \"game\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"div\", {\n        className: \"game-board\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(Board, null)), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"div\", {\n        className: \"game-info\"\n      }, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"div\", null), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(\"ol\", null)));\n    }\n  }]);\n\n  return Game;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // ========================================\n\n\nObject(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__[\"Brooks\"])(Game, null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! exports provided: Component, Brooks, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Brooks\", function() { return Brooks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RENDER_TO_DOM = Symbol('RENDER_TO_DOM');\n\nvar EleWrapper = /*#__PURE__*/function () {\n  function EleWrapper(type) {\n    _classCallCheck(this, EleWrapper);\n\n    this.root = document.createElement(type);\n  }\n\n  _createClass(EleWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(key, val) {\n      if (key.match(/^on([\\s\\S]+)$/)) {\n        this.root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, function (s) {\n          return s.toLowerCase();\n        }), val);\n      } else {\n        if (key === 'className') {\n          this.root.setAttribute('class', val);\n        } else {\n          this.root.setAttribute(key, val);\n        }\n      }\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      var range = document.createRange();\n      range.setStart(this.root, this.root.childNodes.length);\n      range.setEnd(this.root, this.root.childNodes.length);\n      range.deleteContents();\n      component[RENDER_TO_DOM](range);\n    }\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return EleWrapper;\n}();\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(text) {\n    _classCallCheck(this, TextWrapper);\n\n    this.root = document.createTextNode(text);\n  }\n\n  _createClass(TextWrapper, [{\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return TextWrapper;\n}();\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.props = Object.create(null);\n    this.childrend = [];\n    this._root = null;\n    this._range = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(key, val) {\n      this.props[key] = val;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      this.childrend.push(component);\n    }\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      this._range = range;\n      this.render()[RENDER_TO_DOM](range);\n    }\n  }, {\n    key: \"rerender\",\n    value: function rerender() {\n      console.log(this._range, 'rerender');\n      var tempRange = document.createRange();\n      var oldRange = this._range;\n      tempRange.setStart(oldRange.startContainer, oldRange.startOffset);\n      tempRange.setEnd(oldRange.startContainer, oldRange.startOffset);\n      this[RENDER_TO_DOM](tempRange);\n      oldRange.setStart(tempRange.endContainer, tempRange.endOffset);\n      oldRange.deleteContents();\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(newState) {\n      console.log('newState', newState);\n\n      if (this.newState === null || _typeof(this.newState) !== 'object') {\n        this.state = newState;\n        this.rerender();\n        return;\n      }\n\n      var merge = function merge(oldState, newState) {\n        for (var key in newState) {\n          if (newState.hasOwnProperty(key)) {\n            var element = newState[key];\n\n            if (element === null || _typeof(element) !== 'object') {\n              oldState[key] = newState[key];\n            } else {\n              merge(oldState[key], newState[key]);\n            }\n          }\n        }\n      };\n\n      merge(this.state, newState);\n      this.rerender();\n    }\n  }]);\n\n  return Component;\n}();\nvar Brooks = function Brooks(tag, attrs) {\n  var ele;\n\n  if (typeof tag === 'string') {\n    ele = new EleWrapper(tag);\n  } else {\n    ele = new tag();\n  }\n\n  for (var key in attrs) {\n    ele.setAttribute(key, attrs[key]);\n  }\n\n  var insertChilds = function insertChilds(children) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        if (typeof child === 'string') {\n          child = new TextWrapper(child);\n        }\n\n        if (child === null) {\n          continue;\n        }\n\n        if (Array.isArray(child)) {\n          insertChilds(child);\n        } else {\n          ele.appendChild(child);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  insertChilds(children);\n  return ele;\n};\nvar render = function render(componet, parentEle) {\n  // parentEle.appendChild(componet.root)\n  var range = document.createRange();\n  range.setStart(parentEle, 0);\n  range.setEnd(parentEle, parentEle.childNodes.length);\n  range.deleteContents();\n  componet[RENDER_TO_DOM](range);\n};\n\n//# sourceURL=webpack:///./toy-react.js?");

/***/ })

/******/ });