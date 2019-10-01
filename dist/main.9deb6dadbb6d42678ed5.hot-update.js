/*! NotifyNonsense v .1 .0 ISC License Copyright Nataloo */
webpackHotUpdate("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (window) {\n  'use strict';\n\n  function notifyNonsense() {\n    var mobileFunctions = __webpack_require__(/*! ./mobile-functions.js */ \"./src/js/mobile-functions.js\");\n\n    var NN = {};\n    var alertButton = document.querySelectorAll('notify-alert');\n\n    if (alertButton.length > 0) {\n      console.log('buttons found');\n    }\n  } // notifyNonsense\n\n\n  if (typeof window.notifyNonsense === 'undefined') {\n    window.notifyNonsense = notifyNonsense();\n  }\n})(window);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/mobile-functions.js":
/*!************************************!*\
  !*** ./src/js/mobile-functions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var mobileFunctions = {\n  isMobile: function isMobile() {\n    return window.innerWidth < 768;\n  }\n};\nmodule.exports = mobileFunctions;\n\n//# sourceURL=webpack:///./src/js/mobile-functions.js?");

/***/ })

})