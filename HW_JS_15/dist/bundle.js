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

/***/ "../HWJS5/main.js":
/*!************************!*\
  !*** ../HWJS5/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"replaceBadWords\": () => (/* binding */ replaceBadWords)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n// Funtion #1 ------------------------------------------------------------\nfunction getRandomArray(length, min, max) {\n  var randomNumbers = [];\n  for (var i = 0; i < length; i++) {\n    var randomNumb = Math.floor(Math.random() * max) + min;\n    randomNumbers.push(randomNumb);\n  }\n  return randomNumbers;\n}\nconsole.log(\"Функція 1:\", getRandomArray(10, 1, 100));\n\n// Funtion #3 ------------------------------------------------------------\nfunction getAverage() {\n  var sum = 0;\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n  var length = numbers.length;\n  for (var _i = 0, _numbers = numbers; _i < _numbers.length; _i++) {\n    var num = _numbers[_i];\n    if (Number.isInteger(num)) {\n      //якщо число ціле , тоді ми його пушимо \n      sum += num;\n    } else {\n      // якщо ні , тоді довжину масиву зменшуємо на один \n      length -= 1;\n    }\n  }\n  return sum / length;\n}\nconsole.log(\"Функція 3:\", getAverage(6, 2, 55, 11, 78, 2, 55, 2.3, 77, 57, 87, 23, 2, 56, 3, 2, 10.5));\n\n// !! Funtion #4 ------------------------------------------------------------\nvar getMedian = function getMedian() {\n  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    numbers[_key2] = arguments[_key2];\n  }\n  integerNumbers = numbers.filter(function (number) {\n    return Number.isInteger(number); // ! Number.isInteger(number) повертаються лише цілі числа , нецілі пропускаються \n  });\n\n  if (integerNumbers.length % 2 == 1) {\n    //якщо довжина непарна\n    return integerNumbers[Math.floor(integerNumbers.length / 2)]; // дістаємо одне середнє число (через ділення довжини масиву на 2 )\n  } else {\n    return (integerNumbers[integerNumbers.length / 2 - 1] + integerNumbers[integerNumbers.length / 2]) / 2; // дістаємо два середніх числа , додаємо їх та ділимо на 2 \n  }\n};\n\nconsole.log(\"Функція 4:\", getMedian(1, 2, 3, 4));\n\n// Funtion #5 ------------------------------------------------------------\nvar filterEvenNumbers = function filterEvenNumbers() {\n  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    numbers[_key3] = arguments[_key3];\n  }\n  var evenNumbers = numbers.filter(function (number) {\n    return number % 2 == 1;\n  });\n  return evenNumbers;\n\n  //! метод через цикл\n  // let evenNumbers = [];\n  // for (let digit of numbers){\n  //     if (digit % 2 == 1 ){\n  //         evenNumbers.push(digit)\n  //     }\n  // }\n  // return evenNumbers;\n};\n\nconsole.log('Функція 5: ', filterEvenNumbers(1, 2, 3, 4, 5, 6));\n\n// Funtion #6 ------------------------------------------------------------\nvar countPositiveNumbers = function countPositiveNumbers() {\n  var counter = 0;\n  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n    numbers[_key4] = arguments[_key4];\n  }\n  numbers.filter(function (number) {\n    if (number > 0) {\n      counter += 1;\n    }\n  });\n  return counter;\n\n  //! метод через цикл\n  // let counter = 0 ; \n\n  // for (let digit of numbers){\n  //     if(digit > 0){\n  //         counter += 1 ; \n  //     }\n  // }\n  // return counter ; \n};\n\nconsole.log(\"Функція 6:\", countPositiveNumbers(1, -2, 3, -4, -5, 6));\n// Funtion #7 ------------------------------------------------------------\nvar getDividedByFive = function getDividedByFive() {\n  for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n    numbers[_key5] = arguments[_key5];\n  }\n  var dividedFiveNumbers = numbers.filter(function (number) {\n    return number % 5 == 0;\n  });\n  return dividedFiveNumbers;\n\n  //! метод через цикл\n  // for (let digit of numbers){\n  //     if(digit % 5 == 0){\n  //         number.push(digit)\n  //     }\n  // }\n  // return number ;\n};\n\nconsole.log(\"Функція 7:\", getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));\n\n// Funtion #8 ------------------------------------------------------------\nfunction replaceBadWords(string) {\n  var words = string.split(\" \"); // розбиває стрінгу на масив по розділювачу \n  var badWords = [\"fuck\", \"shit\", \"dickhead\"];\n  var goodWords = [];\n  var _iterator = _createForOfIteratorHelper(words),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var word = _step.value;\n      //спочатку проходимося по масиві який перетворений зі string\n      var _iterator2 = _createForOfIteratorHelper(badWords),\n        _step2;\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var badWord = _step2.value;\n          //проходимось по масиві badWords\n\n          //replace не змінє оригінальне слово , воно повертає нове змінене (з вказаними змінами)\n          word = word.replaceAll(badWord, \"****\");\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n      goodWords.push(word);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return goodWords.join(\" \");\n}\n// console.log(\"Функція 8:\" ,replaceBadWords(\"Are you fucking kidding dickhead\"));\n\n// Funtion #9 ------------------------------------------------------------\nfunction divideByThree(words) {\n  words = words.toLowerCase().split(\" \"); // розбиває стрінгу на масив \n  result = [];\n  var _iterator3 = _createForOfIteratorHelper(words),\n    _step3;\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var word = _step3.value;\n      if (word.length <= 3) {\n        result.push(word);\n      } else {\n        for (var i = 0; i < word.length; i += 3) {\n          //кожну ітерацію перестурибуємо на 3 \n\n          result.push(word.slice(i, i + 3)); // вирізаємо слово по складах по 3 , скільки символів ми вирізоаємо \n        }\n      }\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n  return result;\n}\nconsole.log(\"Функція 9:\", divideByThree(\"ababalagan\"));\n\n//# sourceURL=webpack://test/../HWJS5/main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _HWJS5_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HWJS5/main */ \"../HWJS5/main.js\");\n\n\n(0,_HWJS5_main__WEBPACK_IMPORTED_MODULE_1__.replaceBadWords)(\"Are you fucking kidding dickhead\");\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test/./src/styles/main.css?");

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
/******/ 	window.test = __webpack_exports__["default"];
/******/ 	
/******/ })()
;