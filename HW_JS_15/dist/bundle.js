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

/***/ "./src/hw_functios/hw11.js":
/*!*********************************!*\
  !*** ./src/hw_functios/hw11.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomChinese\": () => (/* binding */ getRandomChinese)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction getRandomChinese(_x) {\n  return _getRandomChinese.apply(this, arguments);\n}\nfunction _getRandomChinese() {\n  _getRandomChinese = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(length) {\n    var sign, i, date, symbol;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          sign = '';\n          i = 0;\n        case 2:\n          if (!(i < length)) {\n            _context.next = 11;\n            break;\n          }\n          date = Date.now().toString().slice(-5);\n          symbol = String.fromCharCode(date);\n          sign += symbol;\n          _context.next = 8;\n          return new Promise(function (res) {\n            setTimeout(function () {\n              res();\n            }, 50);\n          });\n        case 8:\n          i++;\n          _context.next = 2;\n          break;\n        case 11:\n          console.log('Homework 11: ' + sign);\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _getRandomChinese.apply(this, arguments);\n}\n\n//# sourceURL=webpack://hw_js_15/./src/hw_functios/hw11.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _hw_functios_hw1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hw_functios/hw1 */ \"./src/hw_functios/hw1.js\");\n/* harmony import */ var _hw_functios_hw2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hw_functios/hw2 */ \"./src/hw_functios/hw2.js\");\n/* harmony import */ var _hw_functios_hw3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hw_functios/hw3 */ \"./src/hw_functios/hw3.js\");\n/* harmony import */ var _hw_functios_hw4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hw_functios/hw4 */ \"./src/hw_functios/hw4.js\");\n/* harmony import */ var _hw_functios_hw5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hw_functios/hw5 */ \"./src/hw_functios/hw5.js\");\n/* harmony import */ var _hw_functios_hw6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hw_functios/hw6 */ \"./src/hw_functios/hw6.js\");\n/* harmony import */ var _hw_functios_hw7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hw_functios/hw7 */ \"./src/hw_functios/hw7.js\");\n/* harmony import */ var _hw_functios_hw8__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hw_functios/hw8 */ \"./src/hw_functios/hw8.js\");\n/* harmony import */ var _hw_functios_hw9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hw_functios/hw9 */ \"./src/hw_functios/hw9.js\");\n/* harmony import */ var _hw_functios_hw11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hw_functios/hw11 */ \"./src/hw_functios/hw11.js\");\n/* harmony import */ var _imgs_vader_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imgs/vader.png */ \"./src/imgs/vader.png\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar maxDigit = (0,_hw_functios_hw1__WEBPACK_IMPORTED_MODULE_1__.maxNumber)(15, 123, 90);\ndocument.querySelector('#hw1').textContent = \"Homerwork 1; Max number : \".concat(maxDigit);\n// -----------------------------------------------------------------------------\n\nvar sum = (0,_hw_functios_hw2__WEBPACK_IMPORTED_MODULE_2__.getSum)(false, 10, 12);\ndocument.querySelector('#hw2').textContent = \"Homerwork 2; Sum : \".concat(sum, \" \");\n// -----------------------------------------------------------------------------\n\nvar randomNumber = (0,_hw_functios_hw3__WEBPACK_IMPORTED_MODULE_3__.getRandomNumber)(1, 10);\ndocument.querySelector('#hw3').textContent = \"Homerwork 3; Random number : \".concat(randomNumber, \" \");\n// -----------------------------------------------------------------------------\n\nvar studentsPais = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\nvar pairs = (0,_hw_functios_hw4__WEBPACK_IMPORTED_MODULE_4__.getPairs)(studentsPais);\ndocument.querySelector('#hw4').textContent = \"Homerwork 4 :Pairs of student: \".concat(pairs);\n// -----------------------------------------------------------------------------\n\nvar evenNumbers = (0,_hw_functios_hw5__WEBPACK_IMPORTED_MODULE_5__.filterEvenNumbers)(1, 2, 3, 4, 5, 6);\ndocument.querySelector('#hw5').textContent = \"Homerwork 5; Even numbers  : \".concat(evenNumbers);\nvar students = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}];\nvar subj = (0,_hw_functios_hw6__WEBPACK_IMPORTED_MODULE_6__.getSubject)(students[0]);\ndocument.querySelector('#hw6').textContent = \"Homerwork 6; Uppercase subject  : \".concat(subj);\n// -----------------------------------------------------------------------------\n\nvar ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\n(0,_hw_functios_hw7__WEBPACK_IMPORTED_MODULE_7__.getMySalary)(ukraine);\ndocument.querySelector('#hw7').textContent = \"Homerwork 7; My salary  :output in console\";\n// -----------------------------------------------------------------------------\n\nvar student1 = new _hw_functios_hw8__WEBPACK_IMPORTED_MODULE_8__.Student('Cursor', '3', 'Tupis Rostyslav Romanovich');\nvar studentInfo = student1.getInfo();\ndocument.querySelector('#hw8').textContent = \"Homerwork 8; Student  : \".concat(studentInfo);\n// -----------------------------------------------------------------------------\n\nvar block = (0,_hw_functios_hw9__WEBPACK_IMPORTED_MODULE_9__.generateBlocks)();\ndocument.querySelector('#hw9').textContent = \"Homerwork 9:\";\n// -----------------------------------------------------------------------------\n\nvar signs = (0,_hw_functios_hw11__WEBPACK_IMPORTED_MODULE_10__.getRandomChinese)(5);\ndocument.querySelector('#hw11').textContent = \"Homerwork 11;output in console\";\n// -----------------------------------------------------------------------------\n\nvar myIcon = new Image();\nmyIcon.src = _imgs_vader_png__WEBPACK_IMPORTED_MODULE_11__;\ndocument.querySelector('#hw12').textContent = \"Homerwork 12:\";\ndocument.getElementById(\"hwIMG\").appendChild(myIcon);\n\n//# sourceURL=webpack://hw_js_15/./src/index.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hw_js_15/./src/styles/main.css?");

/***/ }),

/***/ "./src/imgs/vader.png":
/*!****************************!*\
  !*** ./src/imgs/vader.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"vader.js\";\n\n//# sourceURL=webpack://hw_js_15/./src/imgs/vader.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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