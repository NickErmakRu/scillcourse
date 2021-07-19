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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nexports.indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html>\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar Header_1 = __webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.jsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get(\"/\", function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(Header_1.Header())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"Server started on Port 3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Header.jsx":
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/header.css\"));\r\nvar StarWarsNameClass_1 = __webpack_require__(/*! ./StateExamples/StarWarsNameClass/StarWarsNameClass */ \"./src/shared/StateExamples/StarWarsNameClass/StarWarsNameClass.tsx\");\r\nfunction HeaderComponent() {\r\n    return (React.createElement(\"header\", null,\r\n        React.createElement(\"h1\", { className: header_css_1.default.example }, \"Reddit for our own\"),\r\n        React.createElement(\"p\", null, \"Hello there\"),\r\n        React.createElement(StarWarsNameClass_1.StarWarsNameClass, null)));\r\n}\r\nexports.Header = root_1.hot(HeaderComponent);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header.jsx?");

/***/ }),

/***/ "./src/shared/StateExamples/StarWarsNameClass/StarWarsNameClass.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/StateExamples/StarWarsNameClass/StarWarsNameClass.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.StarWarsNameClass = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar unique_names_generator_1 = __webpack_require__(/*! unique-names-generator */ \"unique-names-generator\");\r\nvar styles = __webpack_require__(/*! ./starWarsNameClass.css */ \"./src/shared/StateExamples/StarWarsNameClass/starWarsNameClass.css\");\r\nvar StarWarsNameClass = /** @class */ (function (_super) {\r\n    __extends(StarWarsNameClass, _super);\r\n    function StarWarsNameClass() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.state = {\r\n            name: _this.randomName(),\r\n            count: 0\r\n        };\r\n        _this.handleClick = function () {\r\n            _this.setState({ name: _this.randomName() });\r\n            _this.setState(function (state, props) { return ({ count: state.count + 1 }); });\r\n        };\r\n        return _this;\r\n    }\r\n    StarWarsNameClass.prototype.render = function () {\r\n        console.log('>>', this.state.count);\r\n        return (react_1.default.createElement(\"section\", { className: styles.container },\r\n            react_1.default.createElement(\"span\", { className: styles.name }, this.state.name),\r\n            react_1.default.createElement(\"div\", { className: styles.gap }),\r\n            react_1.default.createElement(\"button\", { className: styles.button, onClick: this.handleClick }, \"\\u041C\\u043D\\u0435 \\u043D\\u0443\\u0436\\u043D\\u043E \\u0438\\u043C\\u044F!\")));\r\n    };\r\n    StarWarsNameClass.prototype.randomName = function () {\r\n        return unique_names_generator_1.uniqueNamesGenerator({ dictionaries: [unique_names_generator_1.starWars], length: 1 });\r\n    };\r\n    return StarWarsNameClass;\r\n}(react_1.default.PureComponent));\r\nexports.StarWarsNameClass = StarWarsNameClass;\r\n\n\n//# sourceURL=webpack:///./src/shared/StateExamples/StarWarsNameClass/StarWarsNameClass.tsx?");

/***/ }),

/***/ "./src/shared/StateExamples/StarWarsNameClass/starWarsNameClass.css":
/*!**************************************************************************!*\
  !*** ./src/shared/StateExamples/StarWarsNameClass/starWarsNameClass.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"starWarsNameClass__container--GcX_p\",\n\t\"gap\": \"starWarsNameClass__gap--_Y12n\",\n\t\"button\": \"starWarsNameClass__button--XN247\",\n\t\"name\": \"starWarsNameClass__name--1xRPs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/StateExamples/StarWarsNameClass/starWarsNameClass.css?");

/***/ }),

/***/ "./src/shared/header.css":
/*!*******************************!*\
  !*** ./src/shared/header.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"example\": \"header__example--QgiVa\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/header.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "unique-names-generator":
/*!*****************************************!*\
  !*** external "unique-names-generator" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"unique-names-generator\");\n\n//# sourceURL=webpack:///external_%22unique-names-generator%22?");

/***/ })

/******/ });