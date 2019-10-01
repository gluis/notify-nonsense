/*! NotifyNonsense v .1 .0 ISC License Copyright Nataloo */
webpackHotUpdate("main",{

/***/ "./src/js/animations.js":
/*!******************************!*\
  !*** ./src/js/animations.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var animations = {\n  fadeIn: function fadeIn(element, rate) {\n    element.style.opacity = 0;\n    var start = Date.now();\n    var fadeUp = setInterval(function () {\n      var milliseconds = Date.now() - start;\n\n      if (milliseconds >= rate || element.style.opacity > 1) {\n        clearInterval(fadeUp);\n        return;\n      }\n\n      element.style.opacity = parseFloat(element.style.opacity) + 0.01;\n    });\n  },\n  fadeOut: function fadeOut(element, rate) {\n    element.style.opacity = 1;\n    var start = Date.now();\n    var fadeDown = setInterval(function () {\n      var milliseconds = Date.now() - start;\n\n      if (milliseconds >= rate || element.style.opacity < 0) {\n        clearInterval(fadeDown);\n        return;\n      }\n\n      element.style.opacity = parseFloat(element.style.opacity) - 0.01;\n    });\n  }\n};\nmodule.exports = animations;\n\n//# sourceURL=webpack:///./src/js/animations.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (window) {\n  'use strict';\n\n  function notifyNonsense() {\n    var mobileFunctions = __webpack_require__(/*! ./mobile-functions.js */ \"./src/js/mobile-functions.js\");\n\n    var animations = __webpack_require__(/*! ./animations.js */ \"./src/js/animations.js\");\n\n    var NN = {};\n    var alertWindow, nnContainer, nnType, nnGlobalText;\n    var isGlobal = false;\n\n    var setUpDefaults = function setUpDefaults() {\n      NN.nnOk = document.createElement('span');\n      NN.nnCancel = document.createElement('span');\n      NN.nnOk.innerHTML = 'Ok!';\n      NN.nnCancel.innerHTML = 'Cancel';\n      NN.nnOk.setAttribute('class', 'nn-action-button ok');\n      NN.nnOk.setAttribute('data-response', 'ok');\n      NN.nnCancel.setAttribute('class', 'nn-action-button cancel');\n      NN.nnCancel.setAttribute('data-response', 'cancel');\n      NN.response = false;\n    };\n\n    var getAlertButtons = function getAlertButtons() {\n      var alertButtons = document.querySelectorAll('.nn-alert');\n      var alertButtonCount = alertButtons.length;\n\n      if (alertButtonCount > 0) {\n        alertButtons.forEach(function (b) {\n          b.addEventListener('click', showAlertWindow);\n        });\n      }\n    };\n\n    var getConfirmButtons = function getConfirmButtons() {\n      var confirmButtons = document.querySelectorAll('.nn-confirm');\n      var confirmButtonCount = confirmButtons.length;\n\n      if (confirmButtonCount > 0) {\n        confirmButtons.forEach(function (b) {\n          b.addEventListener('click', showAlertWindow);\n        });\n      }\n    };\n\n    var showAlertWindow = function showAlertWindow(e) {\n      e.preventDefault();\n\n      if (isGlobal) {} else {\n        nnType = e.target.getAttribute('class');\n      }\n\n      var text = e.target.getAttribute('data-notify-text');\n      typeof alertWindow === 'undefined' ? makeWindow(text) : updateWindow(text);\n      toggleType();\n    };\n\n    var treatAlert = function treatAlert(e) {\n      e.preventDefault();\n      var response = e.target.getAttribute('data-response');\n      NN.response = response === 'ok' ? true : false;\n      closeWindow();\n    };\n\n    var addButtonListeners = function addButtonListeners() {\n      var buttons = document.querySelectorAll(\".nn-action-button\");\n      buttons.forEach(function (b) {\n        b.addEventListener('click', treatAlert);\n      });\n    };\n\n    var toggleType = function toggleType() {\n      if (typeof nnType !== 'undefined') {\n        if (nnType === 'nn-alert') {\n          document.querySelector('.cancel').classList.add('nn-hide');\n          document.querySelector('.nn-buttons').classList.add('nn-single');\n        } else {\n          document.querySelector('.cancel').classList.remove('nn-hide');\n          document.querySelector('.nn-buttons').classList.remove('nn-single');\n        }\n      }\n    };\n\n    var closeWindow = function closeWindow() {\n      alertWindow.setAttribute('class', 'nn-hide');\n    };\n\n    var updateWindow = function updateWindow(text) {\n      var textContent = document.querySelector('#nn-alert-text');\n      textContent.innerHTML = '<p>' + text + '</p>';\n      alertWindow.classList.remove('nn-hide');\n      animations.fadeIn(alertWindow, 1000);\n    };\n\n    var makeWindow = function makeWindow(text) {\n      alertWindow = document.createElement('div');\n      alertWindow.setAttribute('id', 'nn-alert');\n      var textContent = document.createElement('div');\n      textContent.setAttribute('id', 'nn-alert-text');\n      var buttonDiv = document.createElement('div');\n      textContent.innerHTML = '<p>' + text + '</p>';\n      buttonDiv.setAttribute('class', 'nn-buttons');\n      buttonDiv.appendChild(NN.nnCancel);\n      buttonDiv.appendChild(NN.nnOk);\n      alertWindow.appendChild(textContent);\n      alertWindow.appendChild(buttonDiv);\n      nnContainer = document.getElementById('nn-container');\n      animations.fadeIn(document.body.insertBefore(alertWindow, nnContainer), 1000);\n      addButtonListeners();\n    };\n\n    NN.init = function () {\n      var global = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      setUpDefaults();\n\n      if (global) {\n        isGlobal = true;\n\n        if (options.type === 'alert') {\n          getAlertButtons();\n        } else {\n          getConfirmButtons();\n        }\n      } else {\n        getAlertButtons();\n        getConfirmButtons();\n      }\n    };\n\n    NN.getResponse = function () {\n      return NN.response;\n    };\n\n    return NN;\n  } // notifyNonsense\n\n\n  if (typeof window.notifyNonsense === 'undefined') {\n    window.notifyNonsense = notifyNonsense();\n  }\n})(window);\n\n//# sourceURL=webpack:///./src/js/index.js?");

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