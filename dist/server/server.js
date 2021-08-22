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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Exo+2&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\r\\n  --black: #333333;\\r\\n  --orange: #CC6633;\\r\\n  --green: #A4CC33;\\r\\n  --whiteLightness: 100%;\\r\\n  --white: hsl(0, 0%, var(--whiteLightness));\\r\\n  --grayF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\r\\n  --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\r\\n  --grayC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\r\\n  --grayD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\r\\n  --gray66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\r\\n  --gray99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: var(--grayF4);\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: 'Exo 2', sans-serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: var(--black);\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get(\"/\", function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"Server started on Port 3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nfunction Card() {\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.textContent },\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.metaData },\r\n                react_1.default.createElement(\"div\", { className: card_css_1.default.userLink },\r\n                    react_1.default.createElement(\"img\", { className: card_css_1.default.avatar, src: \"https://uifaces.co/our-content/donated/6f6p85he.jpg\", alt: \"avatar\" }),\r\n                    react_1.default.createElement(\"a\", { href: \"#user-url\", className: card_css_1.default.username }, \"\\u0421\\u0435\\u0440\\u0433\\u0435\\u0439 \\u041D\\u0435\\u043A\\u0440\\u0430\\u0441\\u043E\\u0432\")),\r\n                react_1.default.createElement(\"span\", { className: card_css_1.default.createdAt },\r\n                    react_1.default.createElement(\"span\", { className: card_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n                    \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n            react_1.default.createElement(\"h2\", { className: card_css_1.default.title },\r\n                react_1.default.createElement(\"a\", { href: \"#post-url\", className: card_css_1.default.postLink }, \"\\u041F\\u0435\\u0440\\u0432\\u0430\\u044F \\u0441\\u0442\\u0430\\u0442\\u044C\\u044F \\u0434\\u043B\\u044F \\u0431\\u043B\\u043E\\u0433\\u0430            \\u041F\\u0435\\u0440\\u0432\\u0430\\u044F \\u0441\\u0442\\u0430\\u0442\\u044C\\u044F \\u0434\\u043B\\u044F \\u0431\\u043B\\u043E\\u0433\\u0430 \\u041F\\u0435\\u0440\\u0432\\u0430\\u044F \\u0441\\u0442\\u0430\\u0442\\u044C\\u044F \\u0434\\u043B\\u044F \\u0431\\u043B\\u043E\\u0433\\u0430 \\u041F\\u0435\\u0440\\u0432\\u0430\\u044F \\u0441\\u0442\\u0430\\u0442\\u044C\\u044F \\u0434\\u043B\\u044F \\u0431\\u043B\\u043E\\u0433\\u0430 \\u041F\\u0435\\u0440\\u0432\\u0430\\u044F \\u0441\\u0442\\u0430\\u0442\\u044C\\u044F \\u0434\\u043B\\u044F \\u0431\\u043B\\u043E\\u0433\\u0430\"))),\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.preview },\r\n            react_1.default.createElement(\"img\", { className: card_css_1.default.previewImg, src: \"https://www.sunchemical.com/wp-content/uploads/2019/07/SunWave_banner-1200x400.jpg\" })),\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.menu },\r\n            react_1.default.createElement(\"button\", { className: card_css_1.default.menuButton },\r\n                react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"20pt\", height: \"20pt\", viewBox: \"0 0 20 20\", version: \"1.1\" },\r\n                    react_1.default.createElement(\"g\", { id: \"surface1\" },\r\n                        react_1.default.createElement(\"path\", { d: \"M 10 7.5 C 8.621094 7.5 7.5 8.621094 7.5 10 C 7.5 11.378906 8.621094 12.5 10 12.5 C 11.378906 12.5 12.5 11.378906 12.5 10 C 12.5 8.621094 11.378906 7.5 10 7.5 Z M 10 11.667969 C 9.082031 11.667969 8.332031 10.917969 8.332031 10 C 8.332031 9.082031 9.082031 8.332031 10 8.332031 C 10.917969 8.332031 11.667969 9.082031 11.667969 10 C 11.667969 10.917969 10.917969 11.667969 10 11.667969 Z M 10 11.667969 \" }),\r\n                        react_1.default.createElement(\"path\", { d: \"M 10 15 C 8.621094 15 7.5 16.121094 7.5 17.5 C 7.5 18.878906 8.621094 20 10 20 C 11.378906 20 12.5 18.878906 12.5 17.5 C 12.5 16.121094 11.378906 15 10 15 Z M 10 19.167969 C 9.082031 19.167969 8.332031 18.417969 8.332031 17.5 C 8.332031 16.582031 9.082031 15.832031 10 15.832031 C 10.917969 15.832031 11.667969 16.582031 11.667969 17.5 C 11.667969 18.417969 10.917969 19.167969 10 19.167969 Z M 10 19.167969 \" }),\r\n                        react_1.default.createElement(\"path\", { d: \"M 10 5 C 11.378906 5 12.5 3.878906 12.5 2.5 C 12.5 1.121094 11.378906 0 10 0 C 8.621094 0 7.5 1.121094 7.5 2.5 C 7.5 3.878906 8.621094 5 10 5 Z M 10 0.832031 C 10.917969 0.832031 11.667969 1.582031 11.667969 2.5 C 11.667969 3.417969 10.917969 4.167969 10 4.167969 C 9.082031 4.167969 8.332031 3.417969 8.332031 2.5 C 8.332031 1.582031 9.082031 0.832031 10 0.832031 Z M 10 0.832031 \" }))))),\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.controls },\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.karmaCounter },\r\n                react_1.default.createElement(\"button\", { className: card_css_1.default.up },\r\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"15pt\", height: \"15pt\", viewBox: \"0 0 15 15\", version: \"1.1\" },\r\n                        react_1.default.createElement(\"g\", { id: \"surface1\" },\r\n                            react_1.default.createElement(\"path\", { d: \"M 14.761719 10.015625 L 8.078125 3.332031 C 7.925781 3.179688 7.71875 3.09375 7.496094 3.09375 C 7.273438 3.09375 7.070312 3.179688 6.914062 3.332031 L 0.238281 10.007812 C 0.0859375 10.164062 0 10.367188 0 10.589844 C 0 10.808594 0.0859375 11.015625 0.238281 11.167969 L 0.730469 11.660156 C 0.886719 11.816406 1.089844 11.898438 1.3125 11.898438 C 1.53125 11.898438 1.738281 11.816406 1.890625 11.660156 L 7.496094 6.054688 L 13.109375 11.667969 C 13.261719 11.820312 13.46875 11.90625 13.6875 11.90625 C 13.90625 11.90625 14.113281 11.820312 14.269531 11.667969 L 14.761719 11.175781 C 15.078125 10.855469 15.078125 10.335938 14.761719 10.015625 Z M 14.761719 10.015625 \" })))),\r\n                react_1.default.createElement(\"span\", { className: card_css_1.default.karmaValue }, \"234\"),\r\n                react_1.default.createElement(\"button\", { className: card_css_1.default.down },\r\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"15pt\", height: \"15pt\", viewBox: \"0 0 15 15\", version: \"1.1\" },\r\n                        react_1.default.createElement(\"g\", { id: \"surface1\" },\r\n                            react_1.default.createElement(\"path\", { d: \"M 7.496094 11.769531 C 7.230469 11.769531 6.960938 11.667969 6.753906 11.464844 L 0.308594 5.015625 C -0.101562 4.605469 -0.101562 3.941406 0.308594 3.53125 C 0.71875 3.121094 1.382812 3.121094 1.792969 3.53125 L 7.496094 9.234375 L 13.203125 3.53125 C 13.613281 3.121094 14.277344 3.121094 14.6875 3.53125 C 15.097656 3.941406 15.097656 4.605469 14.6875 5.015625 L 8.238281 11.464844 C 8.035156 11.667969 7.765625 11.769531 7.496094 11.769531 Z M 7.496094 11.769531 \" }))))),\r\n            react_1.default.createElement(\"button\", { className: card_css_1.default.commentsButton },\r\n                react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"15pt\", height: \"15pt\", viewBox: \"0 0 15 15\", version: \"1.1\" },\r\n                    react_1.default.createElement(\"g\", { id: \"surface1\" },\r\n                        react_1.default.createElement(\"path\", { d: \"M 2.183594 14.105469 L 1.121094 14.105469 L 1.871094 13.351562 C 2.277344 12.945312 2.53125 12.417969 2.597656 11.847656 C 1.539062 11.152344 0.769531 10.242188 0.355469 9.195312 C -0.0585938 8.148438 -0.113281 6.996094 0.203125 5.863281 C 0.582031 4.503906 1.46875 3.265625 2.703125 2.375 C 4.042969 1.40625 5.710938 0.894531 7.523438 0.894531 C 9.8125 0.894531 11.738281 1.554688 13.101562 2.796875 C 14.324219 3.917969 15 5.425781 15 7.050781 C 15 7.839844 14.839844 8.605469 14.523438 9.332031 C 14.195312 10.082031 13.714844 10.75 13.097656 11.316406 C 11.734375 12.5625 9.808594 13.222656 7.523438 13.222656 C 6.675781 13.222656 5.792969 13.109375 5.003906 12.902344 C 4.257812 13.667969 3.242188 14.105469 2.183594 14.105469 Z M 7.523438 1.777344 C 3.882812 1.777344 1.652344 3.949219 1.050781 6.097656 C 0.484375 8.132812 1.320312 10.054688 3.285156 11.238281 L 3.503906 11.371094 L 3.496094 11.628906 C 3.484375 12.132812 3.363281 12.625 3.144531 13.066406 C 3.671875 12.886719 4.152344 12.5625 4.523438 12.121094 L 4.710938 11.902344 L 4.988281 11.984375 C 5.761719 12.214844 6.664062 12.34375 7.523438 12.34375 C 12.054688 12.34375 14.121094 9.597656 14.121094 7.050781 C 14.121094 5.675781 13.546875 4.398438 12.507812 3.445312 C 11.3125 2.355469 9.589844 1.777344 7.523438 1.777344 Z M 7.523438 1.777344 \" }))),\r\n                react_1.default.createElement(\"span\", { className: card_css_1.default.commentsNumber }, \"13\")),\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.actions },\r\n                react_1.default.createElement(\"button\", { className: card_css_1.default.shareButton },\r\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"10pt\", height: \"10pt\", viewBox: \"0 0 10 10\", version: \"1.1\" },\r\n                        react_1.default.createElement(\"g\", { id: \"surface1\" },\r\n                            react_1.default.createElement(\"path\", { d: \"M 9.996094 4.996094 L 5.4375 0 L 5.4375 2.992188 L 4.910156 2.992188 C 3.597656 2.992188 2.367188 3.503906 1.4375 4.429688 C 0.511719 5.359375 0 6.59375 0 7.902344 L 0 10 L 0.875 9.042969 C 2.042969 7.761719 3.707031 7.019531 5.4375 7 L 5.4375 9.996094 Z M 0.585938 8.492188 L 0.585938 7.902344 C 0.585938 6.75 1.035156 5.664062 1.851562 4.847656 C 2.667969 4.027344 3.753906 3.578125 4.910156 3.578125 L 6.023438 3.578125 L 6.023438 1.511719 L 9.203125 4.996094 L 6.023438 8.484375 L 6.023438 6.414062 L 5.5 6.414062 C 3.648438 6.414062 1.871094 7.171875 0.585938 8.492188 Z M 0.585938 8.492188 \" })))),\r\n                react_1.default.createElement(\"button\", { className: card_css_1.default.saveButton },\r\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"10pt\", height: \"10pt\", viewBox: \"0 0 10 10\", version: \"1.1\" },\r\n                        react_1.default.createElement(\"g\", { id: \"surface1\" },\r\n                            react_1.default.createElement(\"path\", { d: \"M 8.511719 0 L 1.488281 0 C 1.375 0 1.28125 0.09375 1.28125 0.207031 L 1.28125 9.792969 C 1.28125 9.875 1.332031 9.949219 1.40625 9.984375 C 1.484375 10.015625 1.574219 10 1.632812 9.941406 L 5 6.699219 L 8.367188 9.941406 C 8.40625 9.980469 8.457031 10 8.511719 10 C 8.539062 10 8.566406 9.996094 8.59375 9.984375 C 8.667969 9.949219 8.71875 9.875 8.71875 9.792969 L 8.71875 0.207031 C 8.71875 0.09375 8.625 0 8.511719 0 Z M 8.304688 9.304688 L 5.144531 6.261719 C 5.105469 6.222656 5.050781 6.203125 5 6.203125 C 4.949219 6.203125 4.894531 6.222656 4.855469 6.261719 L 1.699219 9.304688 L 1.699219 0.417969 L 8.304688 0.417969 Z M 8.304688 9.304688 \" }))))))));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"textContent\": \"card__textContent--3Ki_7\",\n\t\"metaData\": \"card__metaData--2-4Ht\",\n\t\"userLink\": \"card__userLink--1NVQG\",\n\t\"avatar\": \"card__avatar--3eg0i\",\n\t\"username\": \"card__username--1I_6u\",\n\t\"createdAt\": \"card__createdAt--1NM_7\",\n\t\"title\": \"card__title--2eC9p\",\n\t\"postLink\": \"card__postLink--1dr-s\",\n\t\"preview\": \"card__preview--M1PGJ\",\n\t\"previewImg\": \"card__previewImg--37Jut\",\n\t\"menu\": \"card__menu--2VNdY\",\n\t\"menuButton\": \"card__menuButton--2icIq\",\n\t\"controls\": \"card__controls--1mm-w\",\n\t\"karmaCounter\": \"card__karmaCounter--2eqMa\",\n\t\"karmaValue\": \"card__karmaValue--1HJaY\",\n\t\"commentsButton\": \"card__commentsButton--1yRBb\",\n\t\"commentsNumber\": \"card__commentsNumber--2xwYQ\",\n\t\"shareButton\": \"card__shareButton--24LVI\",\n\t\"saveButton\": \"card__saveButton--2Cz7O\",\n\t\"publishedLabel\": \"card__publishedLabel--3FDD2\",\n\t\"up\": \"card__up--K0BLJ\",\n\t\"down\": \"card__down--KLMht\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nfunction CardsList() {\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n        react_1.default.createElement(Card_1.Card, null)));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nfunction SearchBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock }, \"search block\"));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

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

/***/ })

/******/ });