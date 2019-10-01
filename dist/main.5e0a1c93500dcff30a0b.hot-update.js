/*! NotifyNonsense v .1 .0 ISC License Copyright Nataloo */
webpackHotUpdate("main",{

/***/ "./src/js/animations.js":
/*!******************************!*\
  !*** ./src/js/animations.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var animations = {\n  fadeIn: function fadeIn(element, rate) {\n    element.style.opacity = 0;\n    var start = Date.now();\n    var fadeUp = setInterval(function () {\n      var milliseconds = Date.now() - start;\n\n      if (milliseconds >= rate || element.style.opacity > 1) {\n        clearInterval(fadeUp);\n        return;\n      }\n\n      element.style.opacity = parseFloat(element.style.opacity) + 0.01;\n    });\n  },\n  fadeOut: function fadeOut(element, rate) {\n    element.style.opacity = 1;\n    console.log(element);\n    var start = Date.now();\n    var fadeDown = setInterval(function () {\n      var milliseconds = Date.now() - start;\n\n      if (milliseconds >= rate || element.start.opacity < 0) {\n        clearInterval(fadeDown);\n        return;\n      }\n\n      element.style.opacity = parseFloat(element.style.opacity) - 0.01;\n    });\n  }\n};\nmodule.exports = animations;\n\n//# sourceURL=webpack:///./src/js/animations.js?");

/***/ })

})