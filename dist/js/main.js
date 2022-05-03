/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderWeather */ \"./modules/renderWeather.js\");\n\r\n\r\n(0,_modules_renderWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFvRDtBQUNwRDtBQUNBLGtFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/NDFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVuZGVyV2VhdGhlciBmcm9tICcuL21vZHVsZXMvcmVuZGVyV2VhdGhlcic7XHJcblxyXG5yZW5kZXJXZWF0aGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./modules/renderWeather.js":
/*!**********************************!*\
  !*** ./modules/renderWeather.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderWeather = () => {\r\n\tconst helloText = document.querySelector('.hello');\r\n\t// console.log('~ helloText', helloText);\r\n\r\n\thelloText.innerHTML = 'Привет привет';\r\n\r\n\tconst getData = () => {\r\n\t\treturn fetch('https://api.openweathermap.org/data/2.5/weather?lat=56.143063&lon=40.410934&appid=c45b375749a351ca88f5fac3a99fee72', {\r\n\t\t\tmethod: 'GET',\r\n\t\t\t// headers: {\r\n\t\t\t// \t'Content-Type': 'application/json',\r\n\t\t\t// },\r\n\t\t\t// body: JSON.stringify(body),\r\n\t\t});\r\n\t};\r\n\r\n\tgetData()\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\tconsole.log(data);\r\n\t\t})\r\n\t\t.catch((error) => {\r\n\t\t\tconsole.log(error);\r\n\t\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWeather);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3JlbmRlcldlYXRoZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZXMvcmVuZGVyV2VhdGhlci5qcz85MTFkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlbmRlcldlYXRoZXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgaGVsbG9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbGxvJyk7XHJcblx0Ly8gY29uc29sZS5sb2coJ34gaGVsbG9UZXh0JywgaGVsbG9UZXh0KTtcclxuXHJcblx0aGVsbG9UZXh0LmlubmVySFRNTCA9ICfQn9GA0LjQstC10YIg0L/RgNC40LLQtdGCJztcclxuXHJcblx0Y29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuXHRcdHJldHVybiBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PTU2LjE0MzA2MyZsb249NDAuNDEwOTM0JmFwcGlkPWM0NWIzNzU3NDlhMzUxY2E4OGY1ZmFjM2E5OWZlZTcyJywge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHQvLyBoZWFkZXJzOiB7XHJcblx0XHRcdC8vIFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0Ly8gfSxcclxuXHRcdFx0Ly8gYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRnZXREYXRhKClcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJXZWF0aGVyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/renderWeather.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;