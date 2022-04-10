/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("function buildHTML() {\n    var container = document.createElement('div');\n    container.classList.add(\"game-container\");\n    var canvas = document.createElement('canvas');\n    container.appendChild(canvas);\n    document.body.appendChild(container);\n    return { ctx: canvas.getContext(\"2d\"), canvas: canvas, container: container };\n}\nfunction createComponent() {\n    var _a = buildHTML(), ctx = _a.ctx, canvas = _a.canvas, container = _a.container;\n    // step one:\n    // Draw a single frame of the slime\n    // step two: \n    // Redraw the frame of the slime at an interval\n    // Once Canvas is working properly add its context to an instance of a game object that will do the same thing;\n}\nwindow.addEventListener(\"DOMContentLoaded\", createComponent);\n\n\n//# sourceURL=webpack://slime-slasher-ts/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;