/*! NotifyNonsense v .1 .0 ISC License Copyright Nataloo */
webpackHotUpdate("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (window) {\n  'use strict';\n\n  function notifyNonsense() {\n    var mobileFunctions = __webpack_require__(/*! ./mobile-functions.js */ \"./src/js/mobile-functions.js\");\n\n    var NN = {};\n    var alertWindow, nnContainer;\n\n    var getAlertButtons = function getAlertButtons() {\n      var alertButtons = document.querySelectorAll('.notify-alert');\n      var alertButtonCount = alertButtons.length;\n\n      if (alertButtonCount > 0) {\n        alertButtons.forEach(function (b) {\n          b.addEventListener('click', showAlertWindow);\n        });\n      }\n    };\n\n    var showAlertWindow = function showAlertWindow(e) {\n      e.preventDefault();\n      var text = e.target.getAttribute('data-alert-text');\n      makeWindow(text);\n    };\n\n    var makeWindow = function makeWindow(text) {\n      alertWindow = document.createElement('div');\n      alertWindow.setAttribute('class', 'nn-alert');\n      var textContent = '<p>' + text + '</p>';\n      var okButton = document.createElement('span');\n      var cancelButton = document.createElement('span');\n      var textNode = document.createTextNode();\n      okButton.innerHTML = 'Press me!';\n      cancelButton.innerHTML = 'Cancel';\n      okButton.setAttribute('class', 'button ok');\n      cancelButton.setAttribute('class', 'button cancel');\n      alertWindow.appendChild(textNode);\n      alertWindow.appendChild(cancelButton);\n      alertWindow.appendChild(okButton);\n      nnContainer = document.getElementById('container');\n      document.body.insertBefore(alertWindow, nnContainer);\n    };\n\n    NN.init = function () {\n      getAlertButtons();\n    };\n\n    return NN;\n  } // notifyNonsense\n\n\n  if (typeof window.notifyNonsense === 'undefined') {\n    window.notifyNonsense = notifyNonsense();\n  }\n})(window);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

})