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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const API_KEY = \"bca923c46f8daa20814a16befa473c41\";\r\nconst citySearchInput = document.querySelector(\"#city-search\");\r\nconst citySearchButton = document.querySelector(\"#city-search-button\");\r\n\r\nfunction cityWeather(event) {\r\n  event.preventDefault;\r\n  const name = citySearchInput.value;\r\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`;\r\n  citySearchInput.value = null;\r\n  console.log(url);\r\n}\r\n\r\ncitySearchButton.addEventListener(\"submit\", cityWeather);\r\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;