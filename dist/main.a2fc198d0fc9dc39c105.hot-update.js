/*! NotifyNonsense v .1 .0 ISC License Copyright Nataloo */
webpackHotUpdate("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (window) {\n  'use strict';\n\n  function notifyNonsense() {\n    var mobileFunctions = __webpack_require__(/*! ./mobile-functions.js */ \"./src/js/mobile-functions.js\");\n\n    var NN = {};\n    var alertButton;\n\n    var getAlertButtons = function getAlertButtons() {\n      alertButton = document.querySelectorAll('.notify-alert');\n      var alertButtonCount = alertButton.length;\n\n      if (alertButtonCount > 0) {\n        alertButton.forEach(function (b, ind) {}); //   switch (alertButtonCount) {\n        //     case 1:\n        //       console.log('one button')\n        //       break;\n        //     case 2:\n        //       console.log('two buttons')\n        //       break;\n        //     default:\n        //       console.log('three or more')\n        //       break;\n        //   }\n      }\n    };\n\n    NN.init = function () {\n      getAlertButtons();\n    };\n\n    return NN;\n  } // notifyNonsense\n\n\n  if (typeof window.notifyNonsense === 'undefined') {\n    window.notifyNonsense = notifyNonsense();\n  }\n})(window);\n\n//# sourceURL=webpack:///./src/js/index.js?");

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