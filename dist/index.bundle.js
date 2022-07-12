/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".frostwalkermenu, .frostwalkermobilemenu {\n  width: max-content;\n  height: max-content;\n  position: relative;\n}\n.frostwalkermenu > .hamburger, .frostwalkermobilemenu > .hamburger {\n  color: black;\n  background-color: white;\n  font-size: calc(20px + 1vw);\n  font-weight: 500;\n  width: max-content;\n  height: max-content;\n  margin: 0;\n  padding: 5px;\n}\n.frostwalkermenu > .itemsDiv, .frostwalkermobilemenu > .itemsDiv {\n  position: absolute;\n  top: 40px;\n  left: 0px;\n  margin: 0;\n  padding: 30px;\n  border: none;\n  border-radius: 10px;\n  color: black;\n  background-color: grey;\n  z-index: 99;\n}\n.frostwalkermenu > .itemsDiv ul, .frostwalkermobilemenu > .itemsDiv ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.frostwalkermenu > .itemsDiv li, .frostwalkermobilemenu > .itemsDiv li {\n  margin: 0;\n  padding: 10px;\n  min-width: max-content;\n  min-height: max-content;\n  cursor: pointer;\n}\n\ndiv.frostwalkermobilemenu > div.hamburger {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  border-radius: 100%;\n}\ndiv.frostwalkermobilemenu > div.itemsDiv {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  margin: 0;\n  padding: 0;\n  border-radius: 100%;\n}\ndiv.frostwalkermobilemenu > div.itemsDiv.none {\n  display: none;\n}\ndiv.frostwalkermobilemenu > div.itemsDiv ul {\n  margin: 0;\n  padding: 30px;\n}\n\n.frostwalkermenu .itemsDiv {\n  transition: transform 1s ease-in-out 0.2s;\n}\n.frostwalkermenu:hover .itemsDiv {\n  transform: scaleY(1);\n}\n.frostwalkermenu .itemsDiv {\n  transform: scaleY(0);\n  transform-origin: top;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_mixins.scss"],"names":[],"mappings":"AAOA;ECFQ,kBDGiB;ECFjB,mBDE8B;ECmDlC,kBDlDyB;AAL7B;AAOI;ECiCA,YDzCS;EC0CT,uBDzCW;ECmCX,2BD1BuB;EC2BvB,gBAFwB;EAjCpB,kBDSmB;ECRnB,mBDQgC;ECHpC,SDI8B;ECH9B,YDGiC;AADrC;AAII;ECyCA,kBDxC2B;EC0CvB,SD1CsC;ECgDtC,SDhDiD;ECRrD,SDU8B;ECT9B,aDSiC;ECRjC,YDQuC;ECPvC,mBDO6C;ECuB7C,YDzCS;EC0CT,sBDxCc;EAmBZ,WAAA;AAEN;ACMI;EArBA,SAsByB;EArBzB,UAqByB;EACrB,qBAAA;ADHR;AALM;ECfF,SDgBgC;ECfhC,aDemC;ECzB/B,sBD0BqB;ECzBrB,uBDyBqB;EACrB,eAAA;AASR;;AADE;ECsBE,kBDrByB;EC3BzB,SD4B4B;EC3B5B,UD2B4B;ECzB5B,mBDyB+C;AAMnD;AAHE;ECiBE,kBDhByB;ECkBrB,QDlBoC;ECwBpC,SDxB8C;EChClD,SDiC4B;EChC5B,UDgC4B;EC9B5B,mBD8B+C;AASnD;AAPI;EACE,aAAA;AASN;AANI;ECvCA,SDwC8B;ECvC9B,aDuCiC;AASrC;;ACXI;EACI,yCAAA;ADcR;ACXI;EACI,oBDGoC;AAU5C;AARE;EACE,oBAAA;EACA,qBAAA;AAUJ","sourcesContent":["@use \"sass:color\";\n@use \"./mixins\";\n\n$theme-main: black;\n$theme-accent: color.invert($theme-main);\n$theme-secondary: grey;\n\n.frostwalkermenu , .frostwalkermobilemenu{\n    @include mixins.size(max-content, max-content, false);\n    @include mixins.position(relative);\n\n    >.hamburger {\n      @include mixins.color($theme-main, $theme-accent);\n      @include mixins.font(calc(20px + 1vw));\n      @include mixins.size(max-content, max-content, false);\n      @include mixins.box-control(0, 5px);\n    }\n\n    >.itemsDiv {\n      @include mixins.position(absolute, \"T\", 40px, \"L\", 0px);\n      @include mixins.list-reset;\n      @include mixins.box-control(0, 30px, none, 10px);\n      @include mixins.color($theme-main, $theme-secondary);\n\n      z-index: 99;\n\n      li {\n        @include mixins.box-control(0, 10px);\n        @include mixins.size(max-content);\n        cursor: pointer;\n      }\n    }\n\n}\n\ndiv.frostwalkermobilemenu {\n\n  >div.hamburger {\n    @include mixins.position(relative);\n    @include mixins.box-control(0, $border-radius: 100%);\n  }\n\n  >div.itemsDiv {\n    @include mixins.position(absolute, \"T\", 0px, \"L\", 0px);\n    @include mixins.box-control(0, $border-radius: 100%);\n\n    &.none {\n      display: none;\n    }\n\n    ul {\n      @include mixins.box-control(0, 30px);\n    }\n  }\n}\n\n.frostwalkermenu {\n  @include mixins.transition(transform, 1s, scaleY(1), ease-in-out, 0.2s, \".itemsDiv\");\n\n  .itemsDiv {\n    transform: scaleY(0);\n    transform-origin: top;\n  }\n}\n\n\n","@mixin size($width, $height: $width, $min: true) {\n    @if($min) {\n        min-width: $width;\n        min-height: $height;\n    } @else {\n        width: $width;\n        height: $height;\n    }\n}\n\n@mixin box-control($margin, $padding: $margin, $border: null, $border-radius: null) {\n    margin: $margin;\n    padding: $padding;\n    border: $border;\n    border-radius: $border-radius;\n}\n\n@mixin flex($direction: row, $align-items: flex-start, $justify-content: flex-start) {\n    display: flex;\n    flex-direction: $direction;\n    align-items: $align-items;\n    justify-content: $justify-content;\n};\n\n@mixin grid($columns, $rows: null, $gap: null) {\n    display: grid;\n    grid-template-columns: $columns;\n    grid-template-rows: $rows;\n    gap: $gap;\n}\n\n@mixin list-reset {\n    ul {\n        @include box-control(0);\n        list-style-type: none;\n    }\n}\n\n@mixin font($size, $weight: 500) {\n    font-size: $size;\n    font-weight: $weight;\n}\n\n@mixin color($color, $bgcolor) {\n    color: $color;\n    background-color: $bgcolor;\n}\n\n@mixin transition($property, $time, $value, $function, $delay, $element) {\n    #{$element} {\n        transition: $property $time $function $delay;\n    }\n    \n    &:hover #{$element} {\n        #{$property}: $value;\n    }\n}\n\n@mixin position($position, $TOrB: null, $value1: null, $LOrR: null, $value2: null) {\n    position: $position;\n    @if ($TOrB == \"T\") {\n        top: $value1;\n    } @else if ($TOrB == \"B\") {\n        bottom: $value1;\n    }\n\n    @if($LOrR == \"L\") {\n        left: $value2\n    } @else if ($LOrR == \"R\") {\n        right: $value2;\n    }\n}\n\n@mixin on-circle($item-count, $circle-size, $item-size) {\n    position: relative;\n    width:  $circle-size;\n    height: $circle-size;\n    padding: 0;\n    border-radius: 50%; \n    list-style: none;       \n    \n    > * {\n      display: block;\n      position: absolute;\n      top:  50%; \n      left: 50%;\n      width:  $item-size;\n      height: $item-size;\n      margin: -($item-size / 2);\n    \n      $angle: (360 / $item-count);\n      $rot: 0;\n  \n      @for $i from 1 through $item-count {\n        &:nth-of-type(#{$i}) {\n          transform: \n            rotate($rot * 1deg) \n            translate($circle-size / 2) \n            rotate($rot * -1deg);\n        }\n  \n        $rot: $rot + $angle;\n      }\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");


var createItemElement = function (item) {
    var li = document.createElement("li");
    li.textContent = item;
    li.id = item;
    return li;
};
var showMenu = function showMenuOnHover(element, mobile) {
    if (mobile === void 0) { mobile = null; }
    var itemsDiv = document.createElement("div");
    itemsDiv.classList.add("itemsDiv");
    var ul = document.createElement("ul");
    itemsDiv.appendChild(ul);
    if (element instanceof HTMLElement) {
        var items = element === null || element === void 0 ? void 0 : element.classList;
        var itemsArr_1 = [];
        items.forEach(function (item) {
            itemsArr_1.push(item);
        });
        var strArr_1 = [];
        itemsArr_1.forEach(function (item) {
            if (item !== "frostwalkermenu" && item !== "frostwalkermobilemenu") {
                var begin = item[0];
                var end = item[item.length - 1];
                if (begin === "'" && end === "'") {
                    var itemDiv = createItemElement(item);
                    ul.appendChild(itemDiv);
                    return;
                }
                if (begin === "'") {
                    strArr_1.push(item.slice(1));
                    return;
                }
                if (end === "'" && strArr_1.length !== 0) {
                    strArr_1.push(item.slice(0, -1));
                    var itemDiv = createItemElement(strArr_1.join(" "));
                    ul.appendChild(itemDiv);
                    strArr_1 = [];
                    return;
                }
                if (strArr_1.length === 0) {
                    var itemDiv = createItemElement(item);
                    ul.appendChild(itemDiv);
                }
                else {
                    strArr_1.push(item);
                }
            }
        });
        if (mobile === "mobile") {
            itemsDiv.classList.add("none");
        }
        element.appendChild(itemsDiv);
    }
};
var animateMenu = function showMenuOnClick(e) {
    var element = e.target;
    if (element instanceof HTMLElement) {
        var itemsDiv = element.nextElementSibling;
        console.log(itemsDiv);
        itemsDiv === null || itemsDiv === void 0 ? void 0 : itemsDiv.classList.remove("none");
    }
};
var load = function onPageLoadShowIcon() {
    var menus = document.querySelectorAll(".frostwalkermenu");
    var mobileMenus = document.querySelectorAll(".frostwalkermobilemenu");
    mobileMenus.forEach(function (menu) {
        var hamburger = document.createElement("div");
        hamburger.classList.add("hamburger");
        var i = document.createElement("i");
        i.classList.add("fas", "fa-bars");
        hamburger.appendChild(i);
        menu === null || menu === void 0 ? void 0 : menu.appendChild(hamburger);
        showMenu(menu, "mobile");
        hamburger.addEventListener("click", animateMenu);
    });
    menus === null || menus === void 0 ? void 0 : menus.forEach(function (menu) {
        var hamburger = document.createElement("div");
        hamburger.classList.add("hamburger");
        var i = document.createElement("i");
        i.classList.add("fas", "fa-bars");
        hamburger.appendChild(i);
        menu === null || menu === void 0 ? void 0 : menu.appendChild(hamburger);
        showMenu(menu);
    });
};
window.addEventListener("load", load);


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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdropdownmenu_frostwalker"] = self["webpackChunkdropdownmenu_frostwalker"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_css-loader_dist_runt-2de1a3"], () => (__webpack_require__("./src/scripts/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcm9wZG93bm1lbnUtZnJvc3R3YWxrZXIvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9kcm9wZG93bm1lbnUtZnJvc3R3YWxrZXIvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL2Ryb3Bkb3dubWVudS1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovL2Ryb3Bkb3dubWVudS1mcm9zdHdhbGtlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kcm9wZG93bm1lbnUtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9kcm9wZG93bm1lbnUtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHJvcGRvd25tZW51LWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kcm9wZG93bm1lbnUtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcm9wZG93bm1lbnUtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kcm9wZG93bm1lbnUtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZHJvcGRvd25tZW51LWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kcm9wZG93bm1lbnUtZnJvc3R3YWxrZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9kcm9wZG93bm1lbnUtZnJvc3R3YWxrZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Ryb3Bkb3dubWVudS1mcm9zdHdhbGtlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZnJvc3R3YWxrZXJtZW51LCAuZnJvc3R3YWxrZXJtb2JpbGVtZW51IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mcm9zdHdhbGtlcm1lbnUgPiAuaGFtYnVyZ2VyLCAuZnJvc3R3YWxrZXJtb2JpbGVtZW51ID4gLmhhbWJ1cmdlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uZnJvc3R3YWxrZXJtZW51ID4gLml0ZW1zRGl2LCAuZnJvc3R3YWxrZXJtb2JpbGVtZW51ID4gLml0ZW1zRGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4uZnJvc3R3YWxrZXJtZW51ID4gLml0ZW1zRGl2IHVsLCAuZnJvc3R3YWxrZXJtb2JpbGVtZW51ID4gLml0ZW1zRGl2IHVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5mcm9zdHdhbGtlcm1lbnUgPiAuaXRlbXNEaXYgbGksIC5mcm9zdHdhbGtlcm1vYmlsZW1lbnUgPiAuaXRlbXNEaXYgbGkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LmZyb3N0d2Fsa2VybW9iaWxlbWVudSA+IGRpdi5oYW1idXJnZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcbmRpdi5mcm9zdHdhbGtlcm1vYmlsZW1lbnUgPiBkaXYuaXRlbXNEaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuZGl2LmZyb3N0d2Fsa2VybW9iaWxlbWVudSA+IGRpdi5pdGVtc0Rpdi5ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmRpdi5mcm9zdHdhbGtlcm1vYmlsZW1lbnUgPiBkaXYuaXRlbXNEaXYgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmZyb3N0d2Fsa2VybWVudSAuaXRlbXNEaXYge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0IDAuMnM7XFxufVxcbi5mcm9zdHdhbGtlcm1lbnU6aG92ZXIgLml0ZW1zRGl2IHtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbn1cXG4uZnJvc3R3YWxrZXJtZW51IC5pdGVtc0RpdiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VDRlEsa0JER2lCO0VDRmpCLG1CREU4QjtFQ21EbEMsa0JEbER5QjtBQUw3QjtBQU9JO0VDaUNBLFlEekNTO0VDMENULHVCRHpDVztFQ21DWCwyQkQxQnVCO0VDMkJ2QixnQkFGd0I7RUFqQ3BCLGtCRFNtQjtFQ1JuQixtQkRRZ0M7RUNIcEMsU0RJOEI7RUNIOUIsWURHaUM7QUFEckM7QUFJSTtFQ3lDQSxrQkR4QzJCO0VDMEN2QixTRDFDc0M7RUNnRHRDLFNEaERpRDtFQ1JyRCxTRFU4QjtFQ1Q5QixhRFNpQztFQ1JqQyxZRFF1QztFQ1B2QyxtQkRPNkM7RUN1QjdDLFlEekNTO0VDMENULHNCRHhDYztFQW1CWixXQUFBO0FBRU47QUNNSTtFQXJCQSxTQXNCeUI7RUFyQnpCLFVBcUJ5QjtFQUNyQixxQkFBQTtBREhSO0FBTE07RUNmRixTRGdCZ0M7RUNmaEMsYURlbUM7RUN6Qi9CLHNCRDBCcUI7RUN6QnJCLHVCRHlCcUI7RUFDckIsZUFBQTtBQVNSOztBQURFO0VDc0JFLGtCRHJCeUI7RUMzQnpCLFNENEI0QjtFQzNCNUIsVUQyQjRCO0VDekI1QixtQkR5QitDO0FBTW5EO0FBSEU7RUNpQkUsa0JEaEJ5QjtFQ2tCckIsUURsQm9DO0VDd0JwQyxTRHhCOEM7RUNoQ2xELFNEaUM0QjtFQ2hDNUIsVURnQzRCO0VDOUI1QixtQkQ4QitDO0FBU25EO0FBUEk7RUFDRSxhQUFBO0FBU047QUFOSTtFQ3ZDQSxTRHdDOEI7RUN2QzlCLGFEdUNpQztBQVNyQzs7QUNYSTtFQUNJLHlDQUFBO0FEY1I7QUNYSTtFQUNJLG9CREdvQztBQVU1QztBQVJFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQVVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6Y29sb3JcXFwiO1xcbkB1c2UgXFxcIi4vbWl4aW5zXFxcIjtcXG5cXG4kdGhlbWUtbWFpbjogYmxhY2s7XFxuJHRoZW1lLWFjY2VudDogY29sb3IuaW52ZXJ0KCR0aGVtZS1tYWluKTtcXG4kdGhlbWUtc2Vjb25kYXJ5OiBncmV5O1xcblxcbi5mcm9zdHdhbGtlcm1lbnUgLCAuZnJvc3R3YWxrZXJtb2JpbGVtZW51e1xcbiAgICBAaW5jbHVkZSBtaXhpbnMuc2l6ZShtYXgtY29udGVudCwgbWF4LWNvbnRlbnQsIGZhbHNlKTtcXG4gICAgQGluY2x1ZGUgbWl4aW5zLnBvc2l0aW9uKHJlbGF0aXZlKTtcXG5cXG4gICAgPi5oYW1idXJnZXIge1xcbiAgICAgIEBpbmNsdWRlIG1peGlucy5jb2xvcigkdGhlbWUtbWFpbiwgJHRoZW1lLWFjY2VudCk7XFxuICAgICAgQGluY2x1ZGUgbWl4aW5zLmZvbnQoY2FsYygyMHB4ICsgMXZ3KSk7XFxuICAgICAgQGluY2x1ZGUgbWl4aW5zLnNpemUobWF4LWNvbnRlbnQsIG1heC1jb250ZW50LCBmYWxzZSk7XFxuICAgICAgQGluY2x1ZGUgbWl4aW5zLmJveC1jb250cm9sKDAsIDVweCk7XFxuICAgIH1cXG5cXG4gICAgPi5pdGVtc0RpdiB7XFxuICAgICAgQGluY2x1ZGUgbWl4aW5zLnBvc2l0aW9uKGFic29sdXRlLCBcXFwiVFxcXCIsIDQwcHgsIFxcXCJMXFxcIiwgMHB4KTtcXG4gICAgICBAaW5jbHVkZSBtaXhpbnMubGlzdC1yZXNldDtcXG4gICAgICBAaW5jbHVkZSBtaXhpbnMuYm94LWNvbnRyb2woMCwgMzBweCwgbm9uZSwgMTBweCk7XFxuICAgICAgQGluY2x1ZGUgbWl4aW5zLmNvbG9yKCR0aGVtZS1tYWluLCAkdGhlbWUtc2Vjb25kYXJ5KTtcXG5cXG4gICAgICB6LWluZGV4OiA5OTtcXG5cXG4gICAgICBsaSB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuYm94LWNvbnRyb2woMCwgMTBweCk7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuc2l6ZShtYXgtY29udGVudCk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuXFxufVxcblxcbmRpdi5mcm9zdHdhbGtlcm1vYmlsZW1lbnUge1xcblxcbiAgPmRpdi5oYW1idXJnZXIge1xcbiAgICBAaW5jbHVkZSBtaXhpbnMucG9zaXRpb24ocmVsYXRpdmUpO1xcbiAgICBAaW5jbHVkZSBtaXhpbnMuYm94LWNvbnRyb2woMCwgJGJvcmRlci1yYWRpdXM6IDEwMCUpO1xcbiAgfVxcblxcbiAgPmRpdi5pdGVtc0RpdiB7XFxuICAgIEBpbmNsdWRlIG1peGlucy5wb3NpdGlvbihhYnNvbHV0ZSwgXFxcIlRcXFwiLCAwcHgsIFxcXCJMXFxcIiwgMHB4KTtcXG4gICAgQGluY2x1ZGUgbWl4aW5zLmJveC1jb250cm9sKDAsICRib3JkZXItcmFkaXVzOiAxMDAlKTtcXG5cXG4gICAgJi5ub25lIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICBAaW5jbHVkZSBtaXhpbnMuYm94LWNvbnRyb2woMCwgMzBweCk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZyb3N0d2Fsa2VybWVudSB7XFxuICBAaW5jbHVkZSBtaXhpbnMudHJhbnNpdGlvbih0cmFuc2Zvcm0sIDFzLCBzY2FsZVkoMSksIGVhc2UtaW4tb3V0LCAwLjJzLCBcXFwiLml0ZW1zRGl2XFxcIik7XFxuXFxuICAuaXRlbXNEaXYge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgfVxcbn1cXG5cXG5cXG5cIixcIkBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodDogJHdpZHRoLCAkbWluOiB0cnVlKSB7XFxuICAgIEBpZigkbWluKSB7XFxuICAgICAgICBtaW4td2lkdGg6ICR3aWR0aDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XFxuICAgIH0gQGVsc2Uge1xcbiAgICAgICAgd2lkdGg6ICR3aWR0aDtcXG4gICAgICAgIGhlaWdodDogJGhlaWdodDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gYm94LWNvbnRyb2woJG1hcmdpbiwgJHBhZGRpbmc6ICRtYXJnaW4sICRib3JkZXI6IG51bGwsICRib3JkZXItcmFkaXVzOiBudWxsKSB7XFxuICAgIG1hcmdpbjogJG1hcmdpbjtcXG4gICAgcGFkZGluZzogJHBhZGRpbmc7XFxuICAgIGJvcmRlcjogJGJvcmRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxufVxcblxcbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LCAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0KSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcbiAgICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XFxufTtcXG5cXG5AbWl4aW4gZ3JpZCgkY29sdW1ucywgJHJvd3M6IG51bGwsICRnYXA6IG51bGwpIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkY29sdW1ucztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAkcm93cztcXG4gICAgZ2FwOiAkZ2FwO1xcbn1cXG5cXG5AbWl4aW4gbGlzdC1yZXNldCB7XFxuICAgIHVsIHtcXG4gICAgICAgIEBpbmNsdWRlIGJveC1jb250cm9sKDApO1xcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBmb250KCRzaXplLCAkd2VpZ2h0OiA1MDApIHtcXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcXG4gICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxufVxcblxcbkBtaXhpbiBjb2xvcigkY29sb3IsICRiZ2NvbG9yKSB7XFxuICAgIGNvbG9yOiAkY29sb3I7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xcbn1cXG5cXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydHksICR0aW1lLCAkdmFsdWUsICRmdW5jdGlvbiwgJGRlbGF5LCAkZWxlbWVudCkge1xcbiAgICAjeyRlbGVtZW50fSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgJGZ1bmN0aW9uICRkZWxheTtcXG4gICAgfVxcbiAgICBcXG4gICAgJjpob3ZlciAjeyRlbGVtZW50fSB7XFxuICAgICAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uLCAkVE9yQjogbnVsbCwgJHZhbHVlMTogbnVsbCwgJExPclI6IG51bGwsICR2YWx1ZTI6IG51bGwpIHtcXG4gICAgcG9zaXRpb246ICRwb3NpdGlvbjtcXG4gICAgQGlmICgkVE9yQiA9PSBcXFwiVFxcXCIpIHtcXG4gICAgICAgIHRvcDogJHZhbHVlMTtcXG4gICAgfSBAZWxzZSBpZiAoJFRPckIgPT0gXFxcIkJcXFwiKSB7XFxuICAgICAgICBib3R0b206ICR2YWx1ZTE7XFxuICAgIH1cXG5cXG4gICAgQGlmKCRMT3JSID09IFxcXCJMXFxcIikge1xcbiAgICAgICAgbGVmdDogJHZhbHVlMlxcbiAgICB9IEBlbHNlIGlmICgkTE9yUiA9PSBcXFwiUlxcXCIpIHtcXG4gICAgICAgIHJpZ2h0OiAkdmFsdWUyO1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBvbi1jaXJjbGUoJGl0ZW0tY291bnQsICRjaXJjbGUtc2l6ZSwgJGl0ZW0tc2l6ZSkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAgJGNpcmNsZS1zaXplO1xcbiAgICBoZWlnaHQ6ICRjaXJjbGUtc2l6ZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgICAgICAgXFxuICAgIFxcbiAgICA+ICoge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6ICA1MCU7IFxcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB3aWR0aDogICRpdGVtLXNpemU7XFxuICAgICAgaGVpZ2h0OiAkaXRlbS1zaXplO1xcbiAgICAgIG1hcmdpbjogLSgkaXRlbS1zaXplIC8gMik7XFxuICAgIFxcbiAgICAgICRhbmdsZTogKDM2MCAvICRpdGVtLWNvdW50KTtcXG4gICAgICAkcm90OiAwO1xcbiAgXFxuICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkaXRlbS1jb3VudCB7XFxuICAgICAgICAmOm50aC1vZi10eXBlKCN7JGl9KSB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogXFxuICAgICAgICAgICAgcm90YXRlKCRyb3QgKiAxZGVnKSBcXG4gICAgICAgICAgICB0cmFuc2xhdGUoJGNpcmNsZS1zaXplIC8gMikgXFxuICAgICAgICAgICAgcm90YXRlKCRyb3QgKiAtMWRlZyk7XFxuICAgICAgICB9XFxuICBcXG4gICAgICAgICRyb3Q6ICRyb3QgKyAkYW5nbGU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5zY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZUl0ZW1FbGVtZW50ID0gKGl0ZW06IHN0cmluZykgPT4ge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkudGV4dENvbnRlbnQgPSBpdGVtO1xuICBsaS5pZCA9IGl0ZW07XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IHNob3dNZW51ID0gZnVuY3Rpb24gc2hvd01lbnVPbkhvdmVyKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBtb2JpbGU6IFwibW9iaWxlXCIgfCBudWxsID0gbnVsbFxuKSB7XG4gIGNvbnN0IGl0ZW1zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbXNEaXYuY2xhc3NMaXN0LmFkZChcIml0ZW1zRGl2XCIpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgaXRlbXNEaXYuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBpdGVtcyA9IGVsZW1lbnQ/LmNsYXNzTGlzdDtcbiAgICBjb25zdCBpdGVtc0Fycjogc3RyaW5nW10gPSBbXTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW1zQXJyLnB1c2goaXRlbSk7XG4gICAgfSk7XG5cbiAgICBsZXQgc3RyQXJyOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaXRlbXNBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0gIT09IFwiZnJvc3R3YWxrZXJtZW51XCIgJiYgaXRlbSAhPT0gXCJmcm9zdHdhbGtlcm1vYmlsZW1lbnVcIikge1xuICAgICAgICBjb25zdCBiZWdpbiA9IGl0ZW1bMF07XG4gICAgICAgIGNvbnN0IGVuZCA9IGl0ZW1baXRlbS5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoYmVnaW4gPT09IFwiJ1wiICYmIGVuZCA9PT0gXCInXCIpIHtcbiAgICAgICAgICBjb25zdCBpdGVtRGl2ID0gY3JlYXRlSXRlbUVsZW1lbnQoaXRlbSk7XG4gICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlZ2luID09PSBcIidcIikge1xuICAgICAgICAgIHN0ckFyci5wdXNoKGl0ZW0uc2xpY2UoMSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPT09IFwiJ1wiICYmIHN0ckFyci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBzdHJBcnIucHVzaChpdGVtLnNsaWNlKDAsIC0xKSk7XG4gICAgICAgICAgY29uc3QgaXRlbURpdiA9IGNyZWF0ZUl0ZW1FbGVtZW50KHN0ckFyci5qb2luKFwiIFwiKSk7XG4gICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgICAgICAgc3RyQXJyID0gW107XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0ckFyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBpdGVtRGl2ID0gY3JlYXRlSXRlbUVsZW1lbnQoaXRlbSk7XG4gICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyQXJyLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtb2JpbGUgPT09IFwibW9iaWxlXCIpIHtcbiAgICAgIGl0ZW1zRGl2LmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xuICAgIH1cblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbXNEaXYpO1xuICB9XG59O1xuXG5jb25zdCBhbmltYXRlTWVudSA9IGZ1bmN0aW9uIHNob3dNZW51T25DbGljayhlOiBFdmVudCkge1xuICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBpdGVtc0RpdiA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnNvbGUubG9nKGl0ZW1zRGl2KTtcbiAgICBpdGVtc0Rpdj8uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gIH1cbn07XG5cbmNvbnN0IGxvYWQgPSBmdW5jdGlvbiBvblBhZ2VMb2FkU2hvd0ljb24oKSB7XG4gIGNvbnN0IG1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mcm9zdHdhbGtlcm1lbnVcIik7XG4gIGNvbnN0IG1vYmlsZU1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mcm9zdHdhbGtlcm1vYmlsZW1lbnVcIik7XG5cbiAgbW9iaWxlTWVudXMuZm9yRWFjaCgobWVudSkgPT4ge1xuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXJcIik7XG4gICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWJhcnNcIik7XG4gICAgaGFtYnVyZ2VyLmFwcGVuZENoaWxkKGkpO1xuICAgIG1lbnU/LmFwcGVuZENoaWxkKGhhbWJ1cmdlcik7XG4gICAgc2hvd01lbnUobWVudSwgXCJtb2JpbGVcIik7XG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbmltYXRlTWVudSk7XG4gIH0pO1xuXG4gIG1lbnVzPy5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlclwiKTtcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYmFyc1wiKTtcbiAgICBoYW1idXJnZXIuYXBwZW5kQ2hpbGQoaSk7XG4gICAgbWVudT8uYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyKTtcbiAgICBzaG93TWVudShtZW51KTtcbiAgfSk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbG9hZCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Ryb3Bkb3dubWVudV9mcm9zdHdhbGtlclwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtkcm9wZG93bm1lbnVfZnJvc3R3YWxrZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZm9ydGF3ZXNvbWVfZm9udGF3ZXNvbWUtZnJlZV9qc19hbGxfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50LTJkZTFhM1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2luZGV4LnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=