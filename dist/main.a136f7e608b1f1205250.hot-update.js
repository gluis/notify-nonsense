/*! NotifyNonsense v .1 .0 ISC License Copyright Nataloo */
webpackHotUpdate("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (window) {\n  'use strict';\n\n  function notifyNonsense() {\n    var mobileFunctions = __webpack_require__(/*! ./mobile-functions.js */ \"./src/js/mobile-functions.js\");\n\n    var NN = {};\n    var alertWindow, nnContainer;\n\n    var getAlertButtons = function getAlertButtons() {\n      var alertButtons = document.querySelectorAll('.notify-alert');\n      var alertButtonCount = alertButtons.length;\n\n      if (alertButtonCount > 0) {\n        alertButtons.forEach(function (b) {\n          b.addEventListener('click', showAlertWindow);\n        });\n      }\n    };\n\n    var showAlertWindow = function showAlertWindow(e) {\n      e.preventDefault();\n      var text = e.target.getAttribute('data-alert-text');\n      makeWindow(text);\n    };\n\n    var makeWindow = function makeWindow(text) {\n      console.log(text);\n      alertWindow = document.createElement('div');\n      var okButton = document.createElement('button');\n      var cancelButton = document.createElement('button');\n      var textContent = document.createTextNode(text);\n      okButton.innerHTML = 'Press me!';\n      cancelButton.innerHTML = 'Cancel';\n      alertWindow.appendChild(textContent);\n      alertWindow.appendChild(cancelButton);\n      alertWindow.appendChild(okButton);\n      nnContainer = document.getElementById('nn-container');\n      document.body.insertBefore(alertWindow, nnContainer);\n    };\n\n    NN.init = function () {\n      getAlertButtons();\n    };\n\n    return NN;\n  } // notifyNonsense\n\n\n  if (typeof window.notifyNonsense === 'undefined') {\n    window.notifyNonsense = notifyNonsense();\n  }\n})(window);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

})