/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _addTwoNumbers = __webpack_require__(/*! ./modules/addTwoNumbers */ \"./src/modules/addTwoNumbers.js\");\n\nvar appl = function appl() {\n  var functions = {};\n\n  // Variables to keep track of\n  var someVariable = 1;\n  var someVariable2 = 4;\n\n  // A way to retrieve them\n  functions.retrieve = {};\n  functions.retrieve.someVariable = function () {\n    return someVariable;\n  };\n  functions.retrieve.someVariable2 = function () {\n    return someVariable2;\n  };\n\n  //A way to update them\n  functions.update = {};\n  functions.update.someVariable = function (update) {\n    someVariable = update;\n  };\n  functions.update.someVariable2 = function (update) {\n    someVariable2 = update;\n  };\n\n  functions.addTheTwoVariables = function () {\n    (0, _addTwoNumbers.addTwoNumbers)(someVariable, someVariable2);\n  };\n\n  return functions;\n};\n\nappl;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzExMTIiXSwibmFtZXMiOlsiYXBwbCIsImZ1bmN0aW9ucyIsInNvbWVWYXJpYWJsZSIsInNvbWVWYXJpYWJsZTIiLCJyZXRyaWV2ZSIsInVwZGF0ZSIsImFkZFRoZVR3b1ZhcmlhYmxlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFJQSxPQUFPLFNBQVBBLElBQU8sR0FBVztBQUNwQixNQUFJQyxZQUFZLEVBQWhCOztBQUVBO0FBQ0EsTUFBSUMsZUFBZSxDQUFuQjtBQUNBLE1BQUlDLGdCQUFnQixDQUFwQjs7QUFFQTtBQUNBRixZQUFVRyxRQUFWLEdBQXFCLEVBQXJCO0FBQ0FILFlBQVVHLFFBQVYsQ0FBbUJGLFlBQW5CLEdBQWtDO0FBQUEsV0FBTUEsWUFBTjtBQUFBLEdBQWxDO0FBQ0FELFlBQVVHLFFBQVYsQ0FBbUJELGFBQW5CLEdBQW1DO0FBQUEsV0FBTUEsYUFBTjtBQUFBLEdBQW5DOztBQUVBO0FBQ0FGLFlBQVVJLE1BQVYsR0FBbUIsRUFBbkI7QUFDQUosWUFBVUksTUFBVixDQUFpQkgsWUFBakIsR0FBZ0Msa0JBQVU7QUFDeENBLG1CQUFlRyxNQUFmO0FBQ0QsR0FGRDtBQUdBSixZQUFVSSxNQUFWLENBQWlCRixhQUFqQixHQUFpQyxrQkFBVTtBQUN6Q0Esb0JBQWdCRSxNQUFoQjtBQUNELEdBRkQ7O0FBSUFKLFlBQVVLLGtCQUFWLEdBQStCLFlBQVc7QUFDeEMsc0NBQWNKLFlBQWQsRUFBNEJDLGFBQTVCO0FBQ0QsR0FGRDs7QUFJQSxTQUFPRixTQUFQO0FBQ0QsQ0ExQkQ7O0FBNEJBRCIsImZpbGUiOiIuL3NyYy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRUd29OdW1iZXJzIH0gZnJvbSBcIi4vbW9kdWxlcy9hZGRUd29OdW1iZXJzXCI7XHJcblxyXG52YXIgYXBwbCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBmdW5jdGlvbnMgPSB7fTtcclxuXHJcbiAgLy8gVmFyaWFibGVzIHRvIGtlZXAgdHJhY2sgb2ZcclxuICB2YXIgc29tZVZhcmlhYmxlID0gMTtcclxuICB2YXIgc29tZVZhcmlhYmxlMiA9IDQ7XHJcblxyXG4gIC8vIEEgd2F5IHRvIHJldHJpZXZlIHRoZW1cclxuICBmdW5jdGlvbnMucmV0cmlldmUgPSB7fTtcclxuICBmdW5jdGlvbnMucmV0cmlldmUuc29tZVZhcmlhYmxlID0gKCkgPT4gc29tZVZhcmlhYmxlO1xyXG4gIGZ1bmN0aW9ucy5yZXRyaWV2ZS5zb21lVmFyaWFibGUyID0gKCkgPT4gc29tZVZhcmlhYmxlMjtcclxuXHJcbiAgLy9BIHdheSB0byB1cGRhdGUgdGhlbVxyXG4gIGZ1bmN0aW9ucy51cGRhdGUgPSB7fTtcclxuICBmdW5jdGlvbnMudXBkYXRlLnNvbWVWYXJpYWJsZSA9IHVwZGF0ZSA9PiB7XHJcbiAgICBzb21lVmFyaWFibGUgPSB1cGRhdGU7XHJcbiAgfTtcclxuICBmdW5jdGlvbnMudXBkYXRlLnNvbWVWYXJpYWJsZTIgPSB1cGRhdGUgPT4ge1xyXG4gICAgc29tZVZhcmlhYmxlMiA9IHVwZGF0ZTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbnMuYWRkVGhlVHdvVmFyaWFibGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBhZGRUd29OdW1iZXJzKHNvbWVWYXJpYWJsZSwgc29tZVZhcmlhYmxlMik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9ucztcclxufTtcclxuXHJcbmFwcGw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/addTwoNumbers.js":
/*!**************************************!*\
  !*** ./src/modules/addTwoNumbers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addTwoNumbers = addTwoNumbers;\nfunction sayHello() {\n  console.log(\"Hello\");\n}\n\nfunction addTwoNumbers(x, y) {\n  sayHello();\n  return x + y;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hZGRUd29OdW1iZXJzLmpzPzIzNjUiXSwibmFtZXMiOlsiYWRkVHdvTnVtYmVycyIsInNheUhlbGxvIiwiY29uc29sZSIsImxvZyIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7OztRQUlnQkEsYSxHQUFBQSxhO0FBSmhCLFNBQVNDLFFBQVQsR0FBb0I7QUFDbEJDLFVBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7O0FBRU0sU0FBU0gsYUFBVCxDQUF1QkksQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCO0FBQ2xDSjtBQUNBLFNBQU9HLElBQUlDLENBQVg7QUFDRCIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL2FkZFR3b051bWJlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzYXlIZWxsbygpIHtcclxuICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVHdvTnVtYmVycyh4LCB5KSB7XHJcbiAgc2F5SGVsbG8oKTtcclxuICByZXR1cm4geCArIHk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/addTwoNumbers.js\n");

/***/ })

/******/ });