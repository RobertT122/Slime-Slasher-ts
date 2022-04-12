/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/helpers */ \"./src/scripts/helpers.ts\");\n\nvar css = \"\\n@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');\\n\\n@media (min-aspect-ratio: 5/8) and (max-height: 1080px){\\n  #canvas {\\n    width:100%;\\n    max-width: 600px;\\n  }\\n}\\n\\n@media (min-aspect-ratio: 5/8) and (min-height: 1080px){\\n  #canvas {\\n    width: 100%;\\n    max-width: 800px;\\n  }\\n}\\n\\n@media (max-aspect-ratio: 5/8){\\n  #canvas {\\n    width: 100%;\\n    height: 100%\\n  }\\n}\\n\\n#game-box{\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.grey-background{\\n  background-color: lightgrey;\\n}\\n\";\nfunction buildHTML() {\n    var style = document.createElement('style');\n    style.innerHTML = css;\n    document.head.appendChild(style);\n    var container = document.createElement('div');\n    container.id = \"game-box\";\n    document.body.appendChild(container);\n    var canvas = document.createElement('canvas');\n    canvas.id = \"canvas\";\n    canvas.width = 800;\n    canvas.height = 1420;\n    container.appendChild(canvas);\n    return { ctx: canvas.getContext(\"2d\"), canvas: canvas, container: container };\n}\nfunction createComponent() {\n    var _a = buildHTML(), ctx = _a.ctx, canvas = _a.canvas, container = _a.container;\n    var image = new Image();\n    // this does not seem like the proper way to import this image url...\n    image.src = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_0__.spritePath)('RedSlime-Sheet');\n    image.onload = function () { return ctx.drawImage(image, 0, 0); };\n    // step two: \n    // Redraw the frame of the slime at an interval\n    // Once Canvas is working properly add its context to an instance of a game object that will do the same thing;\n}\nwindow.addEventListener(\"DOMContentLoaded\", createComponent);\n\n\n//# sourceURL=webpack://slime-slasher-ts/./src/index.ts?");

/***/ }),

/***/ "./src/scripts/helpers.ts":
/*!********************************!*\
  !*** ./src/scripts/helpers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"spritePath\": () => (/* binding */ spritePath)\n/* harmony export */ });\nvar spritePath = function (fileName) { return \"/src/assets/sprites/\".concat(fileName, \".png\"); };\n\n\n//# sourceURL=webpack://slime-slasher-ts/./src/scripts/helpers.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;