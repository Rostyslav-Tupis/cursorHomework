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

/***/ "./src/hw_functios/hw1.js":
/*!********************************!*\
  !*** ./src/hw_functios/hw1.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxNumber\": () => (/* binding */ maxNumber)\n/* harmony export */ });\nfunction maxNumber(bread, apples, rice) {\n  return Math.max(bread, apples, rice);\n}\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw1.js?");

/***/ }),

/***/ "./src/hw_functios/hw2.js":
/*!********************************!*\
  !*** ./src/hw_functios/hw2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSum\": () => (/* binding */ getSum)\n/* harmony export */ });\nfunction getSum(conf, f1, f2) {\n  var result = 0;\n  for (var i = f1; i <= f2; i++) {\n    if (conf) {\n      result += i % 2 === 0 ? 0 : i;\n    } else {\n      result += i;\n    }\n  }\n  return result;\n}\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw2.js?");

/***/ }),

/***/ "./src/hw_functios/hw3.js":
/*!********************************!*\
  !*** ./src/hw_functios/hw3.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber)\n/* harmony export */ });\nfunction getRandomNumber(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw3.js?");

/***/ }),

/***/ "./src/hw_functios/hw4.js":
/*!********************************!*\
  !*** ./src/hw_functios/hw4.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPairs\": () => (/* binding */ getPairs)\n/* harmony export */ });\nfunction getPairs(students) {\n  var pairsOfStudents = [];\n  for (var i = 0; i < students.length; i++) {\n    if (students[i][students[i].length - 1] !== \"а\") {\n      pairsOfStudents.push([students[i]]);\n    }\n  }\n  var indexOfPairsStudents = 0;\n  for (var _i = 0; _i < students.length; _i++) {\n    if (students[_i][students[_i].length - 1] == \"а\") {\n      pairsOfStudents[indexOfPairsStudents].push(students[_i]);\n      indexOfPairsStudents += 1;\n    }\n  }\n  return pairsOfStudents;\n}\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw4.js?");

/***/ }),

/***/ "./src/hw_functios/hw5.js":
/*!********************************!*\
  !*** ./src/hw_functios/hw5.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterEvenNumbers\": () => (/* binding */ filterEvenNumbers)\n/* harmony export */ });\nfunction filterEvenNumbers() {\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n  var evenNumbers = numbers.filter(function (number) {\n    return number % 2 == 1;\n  });\n  return evenNumbers;\n}\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw5.js?");

/***/ }),

/***/ "./src/hw_functios/hw6.js":
/*!********************************!*\
  !*** ./src/hw_functios/hw6.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSubject\": () => (/* binding */ getSubject)\n/* harmony export */ });\nfunction getSubject(student) {\n  var subjesctsUpperCase = [];\n  for (var _i = 0, _Object$keys = Object.keys(student.subjects); _i < _Object$keys.length; _i++) {\n    var subj = _Object$keys[_i];\n    // Object.keys дістаємо назву ключа \n\n    subj = subj.charAt(0).toUpperCase() + subj.slice(1);\n    subj = subj.replace(\"_\", \" \");\n    subjesctsUpperCase.push(subj);\n  }\n  return subjesctsUpperCase;\n}\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw6.js?");

/***/ }),

/***/ "./src/hw_functios/hw7.js":
/*!********************************!*\
  !*** ./src/hw_functios/hw7.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMySalary\": () => (/* binding */ getMySalary)\n/* harmony export */ });\nfunction getMyTaxes(salary) {\n  return (this.tax * salary).toFixed();\n}\n;\nfunction getMySalary(country) {\n  var myRandomSalary = Math.floor(Math.random() * (1500 - 2000) + 2000);\n  var profit = 0;\n  profit = myRandomSalary - getMyTaxes.call(country, myRandomSalary);\n  var info = {};\n  info[\"salary\"] = myRandomSalary;\n  info[\"taxes\"] = getMyTaxes.call(country, myRandomSalary);\n  info[\"profit\"] = profit;\n  console.log('Function from hw7:', info);\n  return info;\n}\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw7.js?");

/***/ }),

/***/ "./src/hw_functios/hw8.js":
/*!********************************!*\
  !*** ./src/hw_functios/hw8.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Student\": () => (/* binding */ Student)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Student = /*#__PURE__*/function () {\n  function Student(university, course, fullName, marks) {\n    _classCallCheck(this, Student);\n    this.university = university;\n    this.course = course;\n    this.fullName = fullName;\n    this.marks = marks;\n    this.dismissed = false;\n  }\n  _createClass(Student, [{\n    key: \"getInfo\",\n    value: function getInfo() {\n      return \"\\u0421\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442 \".concat(this.course, \"\\u0433\\u043E \\u043A\\u0443\\u0440\\u0441\\u0443, \").concat(this.university, \", \").concat(this.fullName);\n    }\n  }, {\n    key: \"currentMarks\",\n    get: function get() {\n      if (this.dismissed) {\n        return null;\n      }\n      return this.marks;\n    }\n  }, {\n    key: \"addMark\",\n    set: function set(mark) {\n      if (this.dismissed) {\n        return null;\n      }\n      this.marks.push(mark);\n      return this.marks;\n    }\n  }, {\n    key: \"getAverageMark\",\n    value: function getAverageMark() {\n      return this.marks.reduce(function (sum, val) {\n        return sum + val;\n      }) / this.marks.length;\n    }\n  }, {\n    key: \"dismiss\",\n    value: function dismiss() {\n      this.dismissed = true;\n    }\n  }, {\n    key: \"recover\",\n    value: function recover() {\n      this.dismissed = false;\n    }\n  }]);\n  return Student;\n}();\n\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw8.js?");

/***/ }),

/***/ "./src/hw_functios/hw9.js":
/*!********************************!*\
  !*** ./src/hw_functios/hw9.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateBlocks\": () => (/* binding */ generateBlocks)\n/* harmony export */ });\nfunction getRandomColor() {\n  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);\n  return randomColor;\n}\nfunction generateBlocks() {\n  var div;\n  for (var i = 0; i < 25; i++) {\n    div = document.createElement('div');\n    div.classList.add('block');\n    document.getElementById(\"wrap\").append(div);\n    Object.assign(div.style, {\n      width: \"50px\",\n      height: \"50px\",\n      display: \"inline-block\",\n      backgroundColor: getRandomColor()\n    });\n  }\n}\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw9.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _hw_functios_hw1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hw_functios/hw1 */ \"./src/hw_functios/hw1.js\");\n/* harmony import */ var _hw_functios_hw2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hw_functios/hw2 */ \"./src/hw_functios/hw2.js\");\n/* harmony import */ var _hw_functios_hw3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hw_functios/hw3 */ \"./src/hw_functios/hw3.js\");\n/* harmony import */ var _hw_functios_hw4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hw_functios/hw4 */ \"./src/hw_functios/hw4.js\");\n/* harmony import */ var _hw_functios_hw5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hw_functios/hw5 */ \"./src/hw_functios/hw5.js\");\n/* harmony import */ var _hw_functios_hw6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hw_functios/hw6 */ \"./src/hw_functios/hw6.js\");\n/* harmony import */ var _hw_functios_hw7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hw_functios/hw7 */ \"./src/hw_functios/hw7.js\");\n/* harmony import */ var _hw_functios_hw8__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hw_functios/hw8 */ \"./src/hw_functios/hw8.js\");\n/* harmony import */ var _hw_functios_hw9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hw_functios/hw9 */ \"./src/hw_functios/hw9.js\");\n\n\n\n\n\n\n\n\n\n\nvar maxDigit = (0,_hw_functios_hw1__WEBPACK_IMPORTED_MODULE_1__.maxNumber)(15, 123, 90);\ndocument.querySelector('#hw1').textContent = \"Homerwork 1; Max number : \".concat(maxDigit);\n// -----------------------------------------------------------------------------\n\nvar sum = (0,_hw_functios_hw2__WEBPACK_IMPORTED_MODULE_2__.getSum)(false, 10, 12);\ndocument.querySelector('#hw1').textContent = \"Homerwork 2; Sum : \".concat(sum, \" \");\n// -----------------------------------------------------------------------------\n\nvar randomNumber = (0,_hw_functios_hw3__WEBPACK_IMPORTED_MODULE_3__.getRandomNumber)(1, 10);\ndocument.querySelector('#hw1').textContent = \"Homerwork 3; Random number : \".concat(randomNumber, \" \");\n// -----------------------------------------------------------------------------\n\nvar studentsPais = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nvar pairs = (0,_hw_functios_hw4__WEBPACK_IMPORTED_MODULE_4__.getPairs)(studentsPais);\ndocument.querySelector('#hw1').textContent = \"Homerwork 4 : \".concat(pairs);\n// -----------------------------------------------------------------------------\n\nvar evenNumbers = (0,_hw_functios_hw5__WEBPACK_IMPORTED_MODULE_5__.filterEvenNumbers)(1, 2, 3, 4, 5, 6);\ndocument.querySelector('#hw1').textContent = \"Homerwork 5; Even numbers  : \".concat(evenNumbers);\nvar students = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}];\nvar subj = (0,_hw_functios_hw6__WEBPACK_IMPORTED_MODULE_6__.getSubject)(students[0]);\ndocument.querySelector('#hw1').textContent = \"Homerwork 6; Uppercase subject  : \".concat(subj);\n// -----------------------------------------------------------------------------\n\nvar ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\n(0,_hw_functios_hw7__WEBPACK_IMPORTED_MODULE_7__.getMySalary)(ukraine);\ndocument.querySelector('#hw1').textContent = \"<>Homerwork 7; My salary  :output in console\";\n// -----------------------------------------------------------------------------\n\nvar student1 = new _hw_functios_hw8__WEBPACK_IMPORTED_MODULE_8__.Student('Cursor', '3', 'Tupis Rostyslav Romanovich');\nvar studentInfo = student1.getInfo();\ndocument.querySelector('#hw1').textContent = \"Homerwork 8; Student  : \".concat(studentInfo);\n// -----------------------------------------------------------------------------\nvar block = (0,_hw_functios_hw9__WEBPACK_IMPORTED_MODULE_9__.generateBlocks)();\ndocument.querySelector('#hw1').textContent = \"Homerwork 8; Student  : \".concat(block);\n\n//# sourceURL=webpack://hw_js_15/./src/index.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hw_js_15/./src/styles/main.css?");

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