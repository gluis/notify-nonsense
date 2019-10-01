/*! NotifyNonsense v .1 .0 ISC License Copyright Nataloo */
webpackHotUpdate("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (window) {\n  'use strict';\n\n  function notifyNonsense() {\n    var mobileFunctions = __webpack_require__(/*! ./mobile-functions.js */ \"./src/js/mobile-functions.js\");\n\n    var NN = {};\n    var alertWindow, nnContainer, nnType;\n\n    var setUpDefaults = function setUpDefaults() {\n      NN.nnOk = document.createElement('span');\n      NN.nnCancel = document.createElement('span');\n      NN.nnOk.innerHTML = 'Ok!';\n      NN.nnCancel.innerHTML = 'Cancel';\n      NN.nnOk.setAttribute('class', 'action-button ok');\n      NN.nnOk.setAttribute('data-response', 'ok');\n      NN.nnCancel.setAttribute('class', 'action-button cancel');\n      NN.nnCancel.setAttribute('data-response', 'cancel');\n      NN.response = false;\n    };\n\n    var getAlertButtons = function getAlertButtons() {\n      var alertButtons = document.querySelectorAll('.notify-alert');\n      var alertButtonCount = alertButtons.length;\n\n      if (alertButtonCount > 0) {\n        alertButtons.forEach(function (b) {\n          b.addEventListener('click', showAlertWindow);\n        });\n      }\n    };\n\n    var getConfirmButtons = function getConfirmButtons() {\n      var confirmButtons = document.querySelectorAll('.notify-confirm');\n      var confirmButtonCount = confirmButtons.length;\n\n      if (confirmButtonCount > 0) {\n        confirmButtons.forEach(function (b) {\n          b.addEventListener('click', showAlertWindow);\n        });\n      }\n    };\n\n    var showAlertWindow = function showAlertWindow(e) {\n      e.preventDefault();\n      nnType = e.target.getAttribute('class');\n      var text = e.target.getAttribute('data-notify-text');\n      typeof alertWindow === 'undefined' ? makeWindow(text) : updateWindow(text);\n      toggleType();\n    };\n\n    var treatAlert = function treatAlert(e) {\n      e.preventDefault();\n      var response = e.target.getAttribute('data-response');\n      NN.response = response === 'ok' ? true : false;\n      closeWindow();\n    };\n\n    var addButtonListeners = function addButtonListeners() {\n      var buttons = document.querySelectorAll(\".action-button\");\n      buttons.forEach(function (b) {\n        b.addEventListener('click', treatAlert);\n      });\n    };\n\n    var toggleType = function toggleType() {\n      if (typeof nnType !== 'undefined') {\n        if (nnType === 'notify-alert') {\n          document.querySelector('.cancel').classList.add('hide');\n          document.querySelector('.buttons').classList.add('single');\n        } else {\n          document.querySelector('.cancel').classList.remove('hide');\n          document.querySelector('.buttons').classList.remove('single');\n        }\n      }\n    };\n\n    var closeWindow = function closeWindow() {\n      alertWindow.setAttribute('class', 'hide');\n    };\n\n    var updateWindow = function updateWindow(text) {\n      alertWindow.setAttribute('class', 'show');\n      var textContent = document.querySelector('#alert-text');\n      textContent.innerHTML = '<p>' + text + '</p>';\n    };\n\n    var makeWindow = function makeWindow(text) {\n      alertWindow = document.createElement('div');\n      alertWindow.setAttribute('id', 'nn-alert');\n      var textContent = document.createElement('div');\n      textContent.setAttribute('id', 'alert-text');\n      var buttonDiv = document.createElement('div');\n      textContent.innerHTML = '<p>' + text + '</p>';\n      buttonDiv.setAttribute('class', 'buttons');\n      buttonDiv.appendChild(NN.nnCancel);\n      buttonDiv.appendChild(NN.nnOk);\n      alertWindow.appendChild(textContent);\n      alertWindow.appendChild(buttonDiv);\n      nnContainer = document.getElementById('container');\n      document.body.insertBefore(alertWindow, nnContainer);\n      addButtonListeners();\n    };\n\n    NN.init = function () {\n      getAlertButtons();\n      getConfirmButtons();\n    };\n\n    NN.getResponse = function () {\n      return NN.response;\n    };\n\n    return NN;\n  } // notifyNonsense\n\n\n  if (typeof window.notifyNonsense === 'undefined') {\n    window.notifyNonsense = notifyNonsense();\n  }\n})(window);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

})