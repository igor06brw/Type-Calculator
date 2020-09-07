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
    Calculator.prototype.displaySomething = function (nextValue) {
        console.log(nextValue);
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
        this.generateButton('-', 'substraction', 'minus', 'button operator');
        this.generateButton('+', 'addition', 'plus', 'button operator');
        this.generateButton('*', 'multiply', 'multiple', 'button operator');
        this.generateButton('/', 'divide', 'divide', 'button operator');
        this.generateButton('=', 'equal', 'result', 'button action');
        this.generateButton('AC', 'clean', 'reset', 'button action');
        this.generateButton('.', 'decimal', 'decimal', 'button decimal');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9VSUNhbGN1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNxQjs7Ozs7Ozs7Ozs7OztBQ1J0QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN1Qjs7Ozs7Ozs7Ozs7OztBQ25DeEI7QUFBQTtBQUFBO0FBQThDO0FBQ0o7QUFDMUM7QUFDQSxpQkFBaUIsMERBQVk7QUFDN0IscUJBQXFCLHNEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoidGVzdC1mcm9tLXR5cGVzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMvYXBwLnRzXCIpO1xuIiwidmFyIENhbGN1bGF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYWxjdWxhdG9yKCkge1xyXG4gICAgfVxyXG4gICAgQ2FsY3VsYXRvci5wcm90b3R5cGUuZGlzcGxheVNvbWV0aGluZyA9IGZ1bmN0aW9uIChuZXh0VmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0VmFsdWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDYWxjdWxhdG9yO1xyXG59KCkpO1xyXG5leHBvcnQgeyBDYWxjdWxhdG9yIH07XHJcbiIsInZhciBVSUNhbGN1bGF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVSUNhbGN1bGF0b3IoYXBwKSB7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB9XHJcbiAgICBVSUNhbGN1bGF0b3IucHJvdG90eXBlLmdlbmVyYXRlQnV0dG9uID0gZnVuY3Rpb24gKHZhbHVlLCBpZCwgbmFtZSwgSFRNTENsYXNzKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgdGhpcy5idXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTmFtZSA9IEhUTUxDbGFzcztcclxuICAgICAgICB0aGlzLmFwcC5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbik7XHJcbiAgICB9O1xyXG4gICAgVUlDYWxjdWxhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZU91dHB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xyXG4gICAgICAgIHRoaXMub3V0cHV0Lm5hbWUgPSAnRGlzcGxheSBSZXN1bHQnO1xyXG4gICAgICAgIHRoaXMub3V0cHV0LnRleHRDb250ZW50ID0gXCIxMzQyICsgNTk0M1wiO1xyXG4gICAgICAgIHRoaXMub3V0cHV0LmlkID0gJ291dHB1dFJlc3VsdCc7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQuY2xhc3NOYW1lID0gXCJvdXRwdXRcIjtcclxuICAgICAgICB0aGlzLmFwcC5hcHBlbmRDaGlsZCh0aGlzLm91dHB1dCk7XHJcbiAgICB9O1xyXG4gICAgVUlDYWxjdWxhdG9yLnByb3RvdHlwZS5kaXNwbGF5QnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA5OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUJ1dHRvbihTdHJpbmcoaSksICdidXR0b24nICsgaSwgU3RyaW5nKGkpLCAnYnV0dG9uIGRpZ2l0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCdXR0b24oJy0nLCAnc3Vic3RyYWN0aW9uJywgJ21pbnVzJywgJ2J1dHRvbiBvcGVyYXRvcicpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCdXR0b24oJysnLCAnYWRkaXRpb24nLCAncGx1cycsICdidXR0b24gb3BlcmF0b3InKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQnV0dG9uKCcqJywgJ211bHRpcGx5JywgJ211bHRpcGxlJywgJ2J1dHRvbiBvcGVyYXRvcicpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCdXR0b24oJy8nLCAnZGl2aWRlJywgJ2RpdmlkZScsICdidXR0b24gb3BlcmF0b3InKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQnV0dG9uKCc9JywgJ2VxdWFsJywgJ3Jlc3VsdCcsICdidXR0b24gYWN0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJ1dHRvbignQUMnLCAnY2xlYW4nLCAncmVzZXQnLCAnYnV0dG9uIGFjdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCdXR0b24oJy4nLCAnZGVjaW1hbCcsICdkZWNpbWFsJywgJ2J1dHRvbiBkZWNpbWFsJyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFVJQ2FsY3VsYXRvcjtcclxufSgpKTtcclxuZXhwb3J0IHsgVUlDYWxjdWxhdG9yIH07XHJcbiIsImltcG9ydCB7IFVJQ2FsY3VsYXRvciB9IGZyb20gXCIuL1VJQ2FsY3VsYXRvclwiO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yIH0gZnJvbSBcIi4vQ2FsY3VsYXRvclwiO1xyXG52YXIgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG52YXIgVUlDYWxjID0gbmV3IFVJQ2FsY3VsYXRvcihhcHApO1xyXG52YXIgY2FsY3VsYXRvciA9IG5ldyBDYWxjdWxhdG9yKCk7XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBVSUNhbGMuZGlzcGxheUJ1dHRvbnMoKTtcclxuICAgIFVJQ2FsYy5nZW5lcmF0ZU91dHB1dCgpO1xyXG59O1xyXG5hcHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGNhbGN1bGF0b3IuZGlzcGxheVNvbWV0aGluZyhldmVudC50YXJnZXQubmFtZSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9