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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/Calculator.ts":
/*!***********************************!*\
  !*** ./src/scripts/Calculator.ts ***!
  \***********************************/
/*! exports provided: Calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculator", function() { return Calculator; });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.savePrevValue = function () {
        this.prevValue = this.nextValue;
    };
    Calculator.prototype.displaySomething = function (value) {
        this.savePrevValue();
        this.nextValue = Number(value);
        console.log(this.nextValue, this.prevValue);
    };
    return Calculator;
}());



/***/ }),

/***/ "./src/scripts/UICalculator.ts":
/*!*************************************!*\
  !*** ./src/scripts/UICalculator.ts ***!
  \*************************************/
/*! exports provided: UICalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UICalculator", function() { return UICalculator; });
var UICalculator = /** @class */ (function () {
    function UICalculator(app) {
        this.app = app;
    }
    UICalculator.prototype.generateButton = function (value, id, name, HTMLClass) {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.textContent = value;
        this.button.id = id;
        this.button.name = name;
        this.button.className = HTMLClass;
        this.app.appendChild(this.button);
    };
    UICalculator.prototype.generateOutput = function () {
        this.output = document.createElement('output');
        this.output.name = 'Display Result';
        this.output.textContent = "1342 + 5943";
        this.output.id = 'outputResult';
        this.output.className = "output";
        this.app.appendChild(this.output);
    };
    UICalculator.prototype.displayButtons = function () {
        for (var i = 0; i <= 9; i++) {
            this.generateButton(String(i), 'button' + i, String(i), 'button digit');
        }
        this.generateButton('-', 'substraction', '-', 'button operator');
        this.generateButton('+', 'addition', '+', 'button operator');
        this.generateButton('*', 'multiply', '*', 'button operator');
        this.generateButton('/', 'divide', '/', 'button operator');
        this.generateButton('=', 'equal', '=', 'button action');
        this.generateButton('AC', 'clean', ' ', 'button action');
        this.generateButton('.', 'decimal', '.', 'button decimal');
    };
    return UICalculator;
}());



/***/ }),

/***/ "./src/scripts/app.ts":
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UICalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UICalculator */ "./src/scripts/UICalculator.ts");
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator */ "./src/scripts/Calculator.ts");


var app = document.getElementById('app');
var UICalc = new _UICalculator__WEBPACK_IMPORTED_MODULE_0__["UICalculator"](app);
var calculator = new _Calculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"]();
window.onload = function () {
    UICalc.displayButtons();
    UICalc.generateOutput();
};
app.addEventListener('click', function (event) {
    calculator.displaySomething(event.target.name);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9VSUNhbGN1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDcUI7Ozs7Ozs7Ozs7Ozs7QUNidEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7Ozs7Ozs7Ozs7Ozs7QUNuQ3hCO0FBQUE7QUFBQTtBQUE4QztBQUNKO0FBQzFDO0FBQ0EsaUJBQWlCLDBEQUFZO0FBQzdCLHFCQUFxQixzREFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InRlc3QtZnJvbS10eXBlc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzL2FwcC50c1wiKTtcbiIsInZhciBDYWxjdWxhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FsY3VsYXRvcigpIHtcclxuICAgIH1cclxuICAgIENhbGN1bGF0b3IucHJvdG90eXBlLnNhdmVQcmV2VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB0aGlzLm5leHRWYWx1ZTtcclxuICAgIH07XHJcbiAgICBDYWxjdWxhdG9yLnByb3RvdHlwZS5kaXNwbGF5U29tZXRoaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlUHJldlZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0VmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV4dFZhbHVlLCB0aGlzLnByZXZWYWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbGN1bGF0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENhbGN1bGF0b3IgfTtcclxuIiwidmFyIFVJQ2FsY3VsYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVJQ2FsY3VsYXRvcihhcHApIHtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIH1cclxuICAgIFVJQ2FsY3VsYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVCdXR0b24gPSBmdW5jdGlvbiAodmFsdWUsIGlkLCBuYW1lLCBIVE1MQ2xhc3MpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgICAgICB0aGlzLmJ1dHRvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5idXR0b24ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5idXR0b24uY2xhc3NOYW1lID0gSFRNTENsYXNzO1xyXG4gICAgICAgIHRoaXMuYXBwLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcclxuICAgIH07XHJcbiAgICBVSUNhbGN1bGF0b3IucHJvdG90eXBlLmdlbmVyYXRlT3V0cHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQubmFtZSA9ICdEaXNwbGF5IFJlc3VsdCc7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQudGV4dENvbnRlbnQgPSBcIjEzNDIgKyA1OTQzXCI7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQuaWQgPSAnb3V0cHV0UmVzdWx0JztcclxuICAgICAgICB0aGlzLm91dHB1dC5jbGFzc05hbWUgPSBcIm91dHB1dFwiO1xyXG4gICAgICAgIHRoaXMuYXBwLmFwcGVuZENoaWxkKHRoaXMub3V0cHV0KTtcclxuICAgIH07XHJcbiAgICBVSUNhbGN1bGF0b3IucHJvdG90eXBlLmRpc3BsYXlCdXR0b25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDk7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQnV0dG9uKFN0cmluZyhpKSwgJ2J1dHRvbicgKyBpLCBTdHJpbmcoaSksICdidXR0b24gZGlnaXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJ1dHRvbignLScsICdzdWJzdHJhY3Rpb24nLCAnLScsICdidXR0b24gb3BlcmF0b3InKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQnV0dG9uKCcrJywgJ2FkZGl0aW9uJywgJysnLCAnYnV0dG9uIG9wZXJhdG9yJyk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJ1dHRvbignKicsICdtdWx0aXBseScsICcqJywgJ2J1dHRvbiBvcGVyYXRvcicpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCdXR0b24oJy8nLCAnZGl2aWRlJywgJy8nLCAnYnV0dG9uIG9wZXJhdG9yJyk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJ1dHRvbignPScsICdlcXVhbCcsICc9JywgJ2J1dHRvbiBhY3Rpb24nKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQnV0dG9uKCdBQycsICdjbGVhbicsICcgJywgJ2J1dHRvbiBhY3Rpb24nKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQnV0dG9uKCcuJywgJ2RlY2ltYWwnLCAnLicsICdidXR0b24gZGVjaW1hbCcpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBVSUNhbGN1bGF0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFVJQ2FsY3VsYXRvciB9O1xyXG4iLCJpbXBvcnQgeyBVSUNhbGN1bGF0b3IgfSBmcm9tIFwiLi9VSUNhbGN1bGF0b3JcIjtcclxuaW1wb3J0IHsgQ2FsY3VsYXRvciB9IGZyb20gXCIuL0NhbGN1bGF0b3JcIjtcclxudmFyIGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxudmFyIFVJQ2FsYyA9IG5ldyBVSUNhbGN1bGF0b3IoYXBwKTtcclxudmFyIGNhbGN1bGF0b3IgPSBuZXcgQ2FsY3VsYXRvcigpO1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgVUlDYWxjLmRpc3BsYXlCdXR0b25zKCk7XHJcbiAgICBVSUNhbGMuZ2VuZXJhdGVPdXRwdXQoKTtcclxufTtcclxuYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBjYWxjdWxhdG9yLmRpc3BsYXlTb21ldGhpbmcoZXZlbnQudGFyZ2V0Lm5hbWUpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==