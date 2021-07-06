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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather.js */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n\r\n\r\n\r\nconst searchForm = document.getElementById(\"searchForm\");\r\nconst searchInput = document.getElementById(\"searchInput\");\r\nconst searchBtn = document.getElementById(\"searchBtn\");\r\n\r\nsearchForm.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n});\r\n\r\nsearchBtn.addEventListener(\"click\", async () => {\r\n  if (searchInput.value === \"\") return;\r\n  const weatherData = await _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.default.cityWeather(searchInput.value);\r\n  _modules_display_js__WEBPACK_IMPORTED_MODULE_1__.default.setSearchResult(weatherData);\r\n});\r\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst display = (() => {\r\n  const cityName = document.getElementById(\"cityName\");\r\n  const cityTemp = document.getElementById(\"cityTemp\");\r\n  const cityFeelsLike = document.getElementById(\"cityFeelsLike\");\r\n  const cityHumidity = document.getElementById(\"cityHumidity\");\r\n  const cityWind = document.getElementById(\"cityWind\");\r\n  function setSearchResult(weatherData) {\r\n    cityName.textContent = `${weatherData.cityName}`;\r\n    cityTemp.textContent = `${Math.round(weatherData.temperature)}°F`;\r\n    cityFeelsLike.textContent = `Feels like: ${Math.round(\r\n      weatherData.feelsLike\r\n    )}°F`;\r\n    cityHumidity.textContent = `Humidity: ${weatherData.humidity}%`;\r\n    cityWind.textContent = `Wind: ${weatherData.windSpeed} mph`;\r\n  }\r\n  return { setSearchResult };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\r\n\n\n//# sourceURL=webpack://weather_app/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {\r\n  const API_KEY = \"bca923c46f8daa20814a16befa473c41\";\r\n\r\n  function convertData(data) {\r\n    const {\r\n      name: cityName,\r\n      main: { temp: temperature, feels_like: feelsLike, humidity },\r\n      wind: { speed: windSpeed },\r\n    } = data;\r\n    return { cityName, temperature, feelsLike, humidity, windSpeed };\r\n  }\r\n\r\n  async function cityWeather(city) {\r\n    try {\r\n      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;\r\n      const response = await fetch(url, { mode: \"cors\" });\r\n      if (!response.ok) throw new Error(`City ${city} not found`);\r\n      const data = convertData(await response.json());\r\n      return data;\r\n    } catch (error) {\r\n      alert(error);\r\n      return null;\r\n    }\r\n  }\r\n\r\n  return {\r\n    cityWeather,\r\n  };\r\n})());\r\n\n\n//# sourceURL=webpack://weather_app/./src/modules/weather.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;