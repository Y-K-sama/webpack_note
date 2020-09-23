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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/page/appendNumber.js":
/*!**********************************!*\
  !*** ./src/page/appendNumber.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _until_getColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../until/getColor */ \"./src/until/getColor.js\");\n\r\n\r\nconst divContainer = document.getElementById('divContainer');\r\nconst divCenter = document.getElementById('divCenter');\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (num, isPrime) {\r\n    const span = document.createElement('span');\r\n    span.innerText = num;\r\n    if (isPrime) {\r\n        const color = Object(_until_getColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        span.style.color = color;\r\n        newDiv(num,color);\r\n    }\r\n    divContainer.appendChild(span);\r\n    divCenter.innerText = num;\r\n});\r\nfunction newDiv(num, color) {\r\n    const div = document.createElement('div');\r\n    div.innerText = num;\r\n    div.style.color = color;\r\n    div.className = 'numberCenter';\r\n    document.body.appendChild(div);\r\n    //强制重新渲染页面，不然下面样式不能算作更改的样式无法实现动画效果\r\n    div.offsetTop;\r\n    div.style.transform = `translate(${Object(_until_getColor__WEBPACK_IMPORTED_MODULE_0__[\"getNumber\"])(-200,200)}px,${Object(_until_getColor__WEBPACK_IMPORTED_MODULE_0__[\"getNumber\"])(-200,200)}px)`;\r\n    div.style.opacity = 0;\r\n    setTimeout(()=>{\r\n        document.body.removeChild(div);\r\n    },1000)\r\n}\n\n//# sourceURL=webpack:///./src/page/appendNumber.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _until_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../until/number */ \"./src/until/number.js\");\n/* harmony import */ var _appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendNumber */ \"./src/page/appendNumber.js\");\n// 绑定事件\r\n\r\n\r\nlet key = false;\r\nconst number = new _until_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"](50);\r\nnumber.numberUse = (num, isPrime) => {\r\n    Object(_appendNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(num, isPrime)\r\n}\r\nwindow.onclick = () => {\r\n    if (key) {\r\n        number.stop();\r\n        key = false;\r\n    } else {\r\n        number.start();\r\n        key = true;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/page/event.js?");

/***/ }),

/***/ "./src/until/getColor.js":
/*!*******************************!*\
  !*** ./src/until/getColor.js ***!
  \*******************************/
/*! exports provided: getNumber, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNumber\", function() { return getNumber; });\nconst colorArr = ['#ff4400', '#0044ff', '#00ff44', '#ff0044', '#44ff00', '#4400ff'];\r\n/**\r\n * 获取最大值和最小值之间的随机整数，不包含最大值\r\n * @param {*} min \r\n * @param {*} max \r\n */\r\nfunction getNumber(min, max) {\r\n    const num = Math.floor(Math.random() * (max - min) + min);\r\n    return num;\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n    const index = getNumber(0, colorArr.length);\r\n    return colorArr[index];\r\n});\n\n//# sourceURL=webpack:///./src/until/getColor.js?");

/***/ }),

/***/ "./src/until/isPrime.js":
/*!******************************!*\
  !*** ./src/until/isPrime.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断传入的数是不是一个素数（只能被1和自身整除的数，1除外）\r\n * @param {*} num \r\n */\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (num) {\r\n    if (num < 2) {\r\n        return false;\r\n    }\r\n    for (let i = 2; i < num; i++) {\r\n        if (num % i === 0) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n});\n\n//# sourceURL=webpack:///./src/until/isPrime.js?");

/***/ }),

/***/ "./src/until/number.js":
/*!*****************************!*\
  !*** ./src/until/number.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Number; });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/until/isPrime.js\");\n\r\n// 生成数字的类，从1开始每次加1\r\nclass Number {\r\n    constructor(interval = 500) {\r\n        // 生成数字间隔时间，默认为500，单位毫秒\r\n        this.interval = interval;\r\n        this.num = 1;\r\n        // 回调函数\r\n        this.numberUse = null;\r\n        this.timer = null;\r\n    }\r\n    start() {\r\n        if (this.timer) {\r\n            return false;\r\n        }\r\n        this.timer = setInterval(() => {\r\n            if (this.numberUse) {\r\n                // 回调函数中传入数字和是否为素数\r\n                this.numberUse(this.num, Object(_isPrime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.num));\r\n            }\r\n            this.num++;\r\n        }, this.interval)\r\n    }\r\n    stop() {\r\n        clearInterval(this.timer);\r\n        this.timer = null;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/until/number.js?");

/***/ })

/******/ });