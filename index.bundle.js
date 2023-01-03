"use strict";
(self["webpackChunk_11_project_weather_app"] = self["webpackChunk_11_project_weather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/ProstoOne-Regular.ttf */ "./src/fonts/ProstoOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/background/background3.jpg */ "./src/imgs/background/background3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Prosto one';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")  format('truetype');\n  font-weight: 200;\n  font-style: normal;\n}\n\n:root{\n  font-size: 14px;\n}\n\n*{\n  -border: 1px dashed white;\n\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;  \n  font-family: 'Prosto one';\n}\n\nbody{\n background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n background-size: cover;\n background-position: center;\n background-repeat: no-repeat;\n\n -background-color: black;\n\n min-height: 100vh;\n color: white;\n \n display: flex;\n flex-direction: column;\n}\n\n\ndiv.main-container{\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n\n  padding: 80px 0;\n}\n/*****************************************************************************************/\n/*UPPER BOX*/\n.upper-box{\n  border: 1px solid white;\n  padding: 20px 20px 20px 40px;\n\n  flex: 1;\n  width: 85%;\n\n  display: flex;\n  justify-content: space-around;\n}\n/*****************************************************************************************/\n/*RIGHT*/\n.right.upper-bar{\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#precipitation, .details_info>h1{\n  font-weight: lighter;\n}\n#temperature{\n  padding: 15px 0;\n  font-size: 4rem;\n}\n#convert-temp{\n  border: none;\n  background-color: none;\n  font-size: 1rem;\n  text-align: start;\n\n  padding-bottom: 2px;\n  border-bottom: 2px solid white;\n  \n  align-self: flex-start;\n  cursor: pointer;\n}\n#weather-icon{\n  padding: 15px 0;\n}\n.search-container{\n  display: flex;\n  align-items: center;\n  align-self: flex-start;\n  padding-bottom: 2px;\n  border-bottom: 2px solid white;\n}\ninput[type=text]{\nfont-size: 1rem;\nbackground-color: rgba(250, 235, 215, 0);\nborder: none;\ncolor: white;\npadding: 0 5px;\nwidth: 150px;\n}\ninput[type=text]:focus{\n  color: white;\n  border: none;\n  outline: none;\n}\n#search-btn{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n#search-btn>img{\n  width: 25px;\n}\n\n/*CENTER*/\n.center.upper-bar{\n  flex: 3;\n}\n/*LEFT*/\n.left.upper-bar{\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 15px;\n\n}\n.weather-details{\n  display: flex;\n  gap: 10px;\n}\n.details_icon{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.details_icon>img{\n  width: 40px;\n}\n.details_info{\n  flex:1;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n}\n/*****************************************************************************************/\n/*LOWER BOX*/\n.lower-box{\n  border: 1px solid white;\n  padding: 20px 40px 40px 40px;\n\n  width: 85%;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px\n}\n.interface{\n  display: flex;\n  gap: 25px;\n}\n.interface-btn{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.selected{\n  border: 2px solid white;\n}\n.change_left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.change_left>img, .change_right>img{\n  height: 25px;\n  cursor: pointer;\n}\n.dot{\n  position: relative;\n  top: -1px;\n  height: 15px;\n  width: 15px;\n  border: 2px solid white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.dot-selected{\n  background-color: white;\n}\n.change-hours{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.show{\n  display: flex;\n}\n.hide{\n  display: none;\n}\n.forecasts-block{\n  display: flex;\n  justify-content: space-between;\n}\n.daily-forecast, .hourly-forecast{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.daily_icon{\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n}\n.daily_icon>img{\n  width: 50px;\n  align-self: flex-end;\n}\n\n::placeholder{\n  color: white;\n}\n.hourly_time{\n  font-size: 1.5rem;\n}\n.hourly_temp{\n  font-size: 1.7rem;\n}\n.hourly_icon>img{\n  width: 50px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,gEAA6D;EAC7D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;;EAEzB,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;CACC,yDAA0D;CAC1D,sBAAsB;CACtB,2BAA2B;CAC3B,4BAA4B;;CAE5B,wBAAwB;;CAExB,iBAAiB;CACjB,YAAY;;CAEZ,aAAa;CACb,sBAAsB;AACvB;;;AAGA;EACE,OAAO;;EAEP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;;EAET,eAAe;AACjB;AACA,0FAA0F;AAC1F,YAAY;AACZ;EACE,uBAAuB;EACvB,4BAA4B;;EAE5B,OAAO;EACP,UAAU;;EAEV,aAAa;EACb,6BAA6B;AAC/B;AACA,0FAA0F;AAC1F,QAAQ;AACR;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,eAAe;AACjB;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,iBAAiB;;EAEjB,mBAAmB;EACnB,8BAA8B;;EAE9B,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;AACA,eAAe;AACf,wCAAwC;AACxC,YAAY;AACZ,YAAY;AACZ,cAAc;AACd,YAAY;AACZ;AACA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,WAAW;AACb;;AAEA,SAAS;AACT;EACE,OAAO;AACT;AACA,OAAO;AACP;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,SAAS;;AAEX;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,WAAW;AACb;AACA;EACE,MAAM;;EAEN,aAAa;EACb,sBAAsB;EACtB,QAAQ;;AAEV;AACA,0FAA0F;AAC1F,YAAY;AACZ;EACE,uBAAuB;EACvB,4BAA4B;;EAE5B,UAAU;EACV,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB;AACF;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,OAAO;EACP,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;AACb","sourcesContent":["@font-face {\n  font-family: 'Prosto one';\n  src: url('./fonts/ProstoOne-Regular.ttf')  format('truetype');\n  font-weight: 200;\n  font-style: normal;\n}\n\n:root{\n  font-size: 14px;\n}\n\n*{\n  -border: 1px dashed white;\n\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;  \n  font-family: 'Prosto one';\n}\n\nbody{\n background-image: url(\"./imgs/background/background3.jpg\");\n background-size: cover;\n background-position: center;\n background-repeat: no-repeat;\n\n -background-color: black;\n\n min-height: 100vh;\n color: white;\n \n display: flex;\n flex-direction: column;\n}\n\n\ndiv.main-container{\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n\n  padding: 80px 0;\n}\n/*****************************************************************************************/\n/*UPPER BOX*/\n.upper-box{\n  border: 1px solid white;\n  padding: 20px 20px 20px 40px;\n\n  flex: 1;\n  width: 85%;\n\n  display: flex;\n  justify-content: space-around;\n}\n/*****************************************************************************************/\n/*RIGHT*/\n.right.upper-bar{\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#precipitation, .details_info>h1{\n  font-weight: lighter;\n}\n#temperature{\n  padding: 15px 0;\n  font-size: 4rem;\n}\n#convert-temp{\n  border: none;\n  background-color: none;\n  font-size: 1rem;\n  text-align: start;\n\n  padding-bottom: 2px;\n  border-bottom: 2px solid white;\n  \n  align-self: flex-start;\n  cursor: pointer;\n}\n#weather-icon{\n  padding: 15px 0;\n}\n.search-container{\n  display: flex;\n  align-items: center;\n  align-self: flex-start;\n  padding-bottom: 2px;\n  border-bottom: 2px solid white;\n}\ninput[type=text]{\nfont-size: 1rem;\nbackground-color: rgba(250, 235, 215, 0);\nborder: none;\ncolor: white;\npadding: 0 5px;\nwidth: 150px;\n}\ninput[type=text]:focus{\n  color: white;\n  border: none;\n  outline: none;\n}\n#search-btn{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n#search-btn>img{\n  width: 25px;\n}\n\n/*CENTER*/\n.center.upper-bar{\n  flex: 3;\n}\n/*LEFT*/\n.left.upper-bar{\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 15px;\n\n}\n.weather-details{\n  display: flex;\n  gap: 10px;\n}\n.details_icon{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.details_icon>img{\n  width: 40px;\n}\n.details_info{\n  flex:1;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n}\n/*****************************************************************************************/\n/*LOWER BOX*/\n.lower-box{\n  border: 1px solid white;\n  padding: 20px 40px 40px 40px;\n\n  width: 85%;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px\n}\n.interface{\n  display: flex;\n  gap: 25px;\n}\n.interface-btn{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.selected{\n  border: 2px solid white;\n}\n.change_left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.change_left>img, .change_right>img{\n  height: 25px;\n  cursor: pointer;\n}\n.dot{\n  position: relative;\n  top: -1px;\n  height: 15px;\n  width: 15px;\n  border: 2px solid white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.dot-selected{\n  background-color: white;\n}\n.change-hours{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.show{\n  display: flex;\n}\n.hide{\n  display: none;\n}\n.forecasts-block{\n  display: flex;\n  justify-content: space-between;\n}\n.daily-forecast, .hourly-forecast{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.daily_icon{\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n}\n.daily_icon>img{\n  width: 50px;\n  align-self: flex-end;\n}\n\n::placeholder{\n  color: white;\n}\n.hourly_time{\n  font-size: 1.5rem;\n}\n.hourly_temp{\n  font-size: 1.7rem;\n}\n.hourly_icon>img{\n  width: 50px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api */ "./src/modules/api.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/modules/classes.js");
/* harmony import */ var _modules_upperdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/upperdom */ "./src/modules/upperdom.js");
/* harmony import */ var _modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/lowerdom */ "./src/modules/lowerdom.js");






const { log } = console;
log("Creating new project");

_modules_upperdom__WEBPACK_IMPORTED_MODULE_3__.searchInput.addEventListener("change", (e) => {
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.input = e.target.value;
});

_modules_upperdom__WEBPACK_IMPORTED_MODULE_3__.searchButton.addEventListener("click", async () => {
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.weather = new _modules_classes__WEBPACK_IMPORTED_MODULE_2__.WeatherData(
    await (0,_modules_api__WEBPACK_IMPORTED_MODULE_1__.requestWeather)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.input, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.units)
  );
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast = new _modules_classes__WEBPACK_IMPORTED_MODULE_2__.Forecast(
    await (0,_modules_api__WEBPACK_IMPORTED_MODULE_1__.requestForecast)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.input, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.units)
  );
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast.setDaily();
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast.setHourly();

  (0,_modules_upperdom__WEBPACK_IMPORTED_MODULE_3__.loadDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.weather);
  if (_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.dailyButton.classList.contains("selected")) {
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.addDailyDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state);
  } else {
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.addHourlyDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index);
  }
});

_modules_upperdom__WEBPACK_IMPORTED_MODULE_3__.convertButton.addEventListener("click", () => {
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast.setConvertedDaily();
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast.setConvertedHourly();
  (0,_modules_upperdom__WEBPACK_IMPORTED_MODULE_3__.convertUnits)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state);
  if (_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.dailyButton.classList.contains("selected")) {
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.addDailyDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state);
  } else {
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.addHourlyDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index);
  }
});

_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.dailyButton.addEventListener("click", (e) => {
  const target = e.target;
  (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.handle)(target);
});

_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.hourlyButton.addEventListener("click", (e) => {
  const target = e.target;
  (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.handle)(target);
  (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.addHourlyDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index);
});

_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = e.target.dataset.dot;
    _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index = index;
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.handleDots)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index);
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.addHourlyDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index);
  });
});

_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.rightArrow.addEventListener("click", () => {
  if (_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index < 2) {
    _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index++;
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.handleDots)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index);
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.addHourlyDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index);
  } else return;
});

_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.leftArrow.addEventListener("click", () => {
  if (_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index > 0) {
    _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index--;
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.handleDots)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index);
    (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.addHourlyDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.index);
  } else return;
});

// Onload with current user location
_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.input = await (0,_modules_api__WEBPACK_IMPORTED_MODULE_1__.requestCurrentLocation)();

(async () => {
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.weather = new _modules_classes__WEBPACK_IMPORTED_MODULE_2__.WeatherData(
    await (0,_modules_api__WEBPACK_IMPORTED_MODULE_1__.requestWeather)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.input, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.units)
  );
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast = new _modules_classes__WEBPACK_IMPORTED_MODULE_2__.Forecast(
    await (0,_modules_api__WEBPACK_IMPORTED_MODULE_1__.requestForecast)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.input, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.units)
  );
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast.setDaily();
  _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast.setHourly();

  (0,_modules_upperdom__WEBPACK_IMPORTED_MODULE_3__.loadDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.forecast, _modules_classes__WEBPACK_IMPORTED_MODULE_2__.state.weather);
  (0,_modules_lowerdom__WEBPACK_IMPORTED_MODULE_4__.addDailyDOM)(_modules_classes__WEBPACK_IMPORTED_MODULE_2__.state);
})();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCoords": () => (/* binding */ getCoords),
/* harmony export */   "requestCurrentLocation": () => (/* binding */ requestCurrentLocation),
/* harmony export */   "requestForecast": () => (/* binding */ requestForecast),
/* harmony export */   "requestWeather": () => (/* binding */ requestWeather)
/* harmony export */ });

//const apiKey = "20f7632ffc2c022654e4093c6947b4f4";
const apiKey = '3069ae2718e40f8dc1998b7250e16f10'

//Requesting current location if fetch fails use default value
async function requestCurrentLocation(){
  try{
  const resolve = await fetch('https://ipapi.co/json/');
  if(!resolve.ok){
    return 'dushanbe'
  }
  const result = await resolve.json();
  return result.city
  }catch(err){
    console.error(err)
    return 'dushanbe'
  }
}

async function requestWeather(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

// coords came from requestWeatherNow
// units 'imperial' or 'metric'
async function requestForecast(input, units) {
  try {
    const coords = await getCoords(input);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts&units=${units}&appid=${apiKey}`
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

async function getCoords(city) {
  const result = await requestWeather(city);
  return result.coord;
}




/***/ }),

/***/ "./src/modules/classes.js":
/*!********************************!*\
  !*** ./src/modules/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forecast": () => (/* binding */ Forecast),
/* harmony export */   "WeatherData": () => (/* binding */ WeatherData),
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");


const state = {
  weather: {},
  forecast: {},
  units: 'metric', //imperial
  input: 'Ivanovo',

  daily: [],
  hourly: [],
  index: 0,
}

class WeatherData {
  constructor(weather) {
    this.weather = weather;
  }
  getTown() {
    return this.weather.name;
  }
}

class Forecast {
  constructor(forecast) {
    this.forecast = forecast;
  }
  //Current day
  /********************************************************************************** */
  getCurrentDescription() {
    const string = this.forecast.current.weather[0].description;
    return _utils__WEBPACK_IMPORTED_MODULE_0__.capitalize(string);
  }

  getCurrentDate() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.toDateTime(this.forecast.current.dt, this.forecast.timezone);
  }

  getCurrentTemp() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.toReadableTemp(this.forecast.current.temp);
  }

  getCurrentIcon() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.getIcon(this.forecast.current.weather[0].icon);
  }

  getCurrentFeelsLike() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.toReadableTemp(this.forecast.current.feels_like);
  }

  getCurrentHumidity() {
    return this.forecast.current.humidity;
  }

  getCurrentChanceOfRain() {
    return this.forecast.daily[0].pop * 100;
  }

  getCurrentWindSpeed() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__.roundToOne(this.forecast.current.wind_speed);
  }
  //Current day setters
  /********************************************************************************** */
  setCurrentTemp(val){
    this.forecast.current.temp = val;
  }

  setCurrentWindSpeed(val){
    this.forecast.current.wind_speed = val
  }

  setCurrentFeelsLike(val){
    this.forecast.current.feels_like = val
  }
  //DAILY
  /********************************************************************************** */
  setDaily(){
    this.forecast.dailyFiltered = _utils__WEBPACK_IMPORTED_MODULE_0__.fillDaily(this.forecast.daily);
  }

  setConvertedDaily(){
    this.forecast.dailyFiltered = _utils__WEBPACK_IMPORTED_MODULE_0__.convertDaily(this.forecast.dailyFiltered)
  }

  //HOURLY
  /********************************************************************************** */
  setHourly(){
    this.forecast.hourlyFiltered = _utils__WEBPACK_IMPORTED_MODULE_0__.fillHourly(this.forecast.hourly)
  }

  setConvertedHourly(){
    this.forecast.hourlyFiltered = _utils__WEBPACK_IMPORTED_MODULE_0__.convertHourly(this.forecast.hourlyFiltered)
  }
}



/***/ }),

/***/ "./src/modules/lowerdom.js":
/*!*********************************!*\
  !*** ./src/modules/lowerdom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDailyDOM": () => (/* binding */ addDailyDOM),
/* harmony export */   "addHourlyDOM": () => (/* binding */ addHourlyDOM),
/* harmony export */   "dailyButton": () => (/* binding */ dailyButton),
/* harmony export */   "dots": () => (/* binding */ dots),
/* harmony export */   "handle": () => (/* binding */ handle),
/* harmony export */   "handleDots": () => (/* binding */ handleDots),
/* harmony export */   "hourlyButton": () => (/* binding */ hourlyButton),
/* harmony export */   "leftArrow": () => (/* binding */ leftArrow),
/* harmony export */   "rightArrow": () => (/* binding */ rightArrow)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/modules/classes.js");



const interfaceBox = document.querySelector(".interface");
const forecastBox = document.querySelector(".forecasts-block");
const changeHours = document.querySelector("change-hours");
const fields = interfaceBox.children;

const leftArrow = document.querySelector(".change_left");
const rightArrow = document.querySelector(".change_right");
const dots = document.querySelectorAll(".dot");

const dailyButton = document.querySelector(".daily");
const hourlyButton = document.querySelector(".hourly");

const day = (day, date, temphigh, templow, icon) => {
  return ` 
  <div class="daily-forecast" id="current-day">
  <div class="daily_day">${day}</div>
  <div class="daily_date">${date}</div>
  <div class="daily_date"></div>
  <div class="daily_temp">
    <h1 class="daily_temp-high">${_utils__WEBPACK_IMPORTED_MODULE_0__.toReadableTemp(
      temphigh
    )} ${_utils__WEBPACK_IMPORTED_MODULE_0__.setTempUnits(_classes__WEBPACK_IMPORTED_MODULE_1__.state)}</h1>
    <p class="daily_temp-low">${_utils__WEBPACK_IMPORTED_MODULE_0__.toReadableTemp(
      templow
    )} ${_utils__WEBPACK_IMPORTED_MODULE_0__.setTempUnits(_classes__WEBPACK_IMPORTED_MODULE_1__.state)}</p>
  </div>
  <div class="daily_icon">
    <img src='${_utils__WEBPACK_IMPORTED_MODULE_0__.getIcon(icon).src}'>
  </div>
</div>
  `;
};

const hour = (time, temp, icon) => {
  return `
  <div class="hourly-forecast" id="current-hour">
    <div class="hourly_time">${time.toLowerCase()}</div>
    <div class="hourly_temp">${_utils__WEBPACK_IMPORTED_MODULE_0__.toReadableTemp(temp)} ${_utils__WEBPACK_IMPORTED_MODULE_0__.setTempUnits(
    _classes__WEBPACK_IMPORTED_MODULE_1__.state
  )}</div>
    <div class="hourly_icon">
      <img src='${_utils__WEBPACK_IMPORTED_MODULE_0__.getIcon(icon).src}'>
    </div>
  </div>  
  `;
};

const handle = (target) => {
  for (let field of fields) {
    field.classList.remove("selected");
  }
  if (target.classList.contains("daily")) {
    fields[0].className = "daily interface-btn selected";
    fields[2].className = "change-hours hide";
    addDailyDOM(_classes__WEBPACK_IMPORTED_MODULE_1__.state);
  } else if (target.classList.contains("hourly")) {
    fields[1].className = "hourly interface-btn selected";
    fields[2].className = "change-hours show";
    addHourlyDOM(_classes__WEBPACK_IMPORTED_MODULE_1__.state, _classes__WEBPACK_IMPORTED_MODULE_1__.state.index);
  }
};

const handleDots = (index) => {
  dots.forEach((dot) => dot.classList.remove("dot-selected"));
  dots[index].classList.add("dot-selected");
};

const addDailyDOM = (state) => {
  forecastBox.innerHTML = "";
  const daily = state.forecast.forecast.dailyFiltered;
  for (let i = 1; i < daily.length; i++) {
    forecastBox.innerHTML += day(
      daily[i].getDay(),
      daily[i].getDate(),
      daily[i].maxTemp,
      daily[i].minTemp,
      daily[i].icon
    );
  }
};

const addHourlyDOM = (state, index) => {
  forecastBox.innerHTML = "";
  const hourly = state.forecast.forecast.hourlyFiltered[index];
  for (let i = 0; i < hourly.length; i++) {
    forecastBox.innerHTML += hour(
      hourly[i].getHour(),
      hourly[i].temp,
      hourly[i].icon
    );
  }
};




/***/ }),

/***/ "./src/modules/upperdom.js":
/*!*********************************!*\
  !*** ./src/modules/upperdom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertButton": () => (/* binding */ convertButton),
/* harmony export */   "convertUnits": () => (/* binding */ convertUnits),
/* harmony export */   "loadDOM": () => (/* binding */ loadDOM),
/* harmony export */   "searchButton": () => (/* binding */ searchButton),
/* harmony export */   "searchInput": () => (/* binding */ searchInput)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/modules/utils.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/modules/classes.js");


// right bar
const precipitation = document.querySelector('#precipitation');
const city = document.querySelector('#city')
const date = document.getElementById('date')
const time = document.getElementById('time')
const temperature = document.getElementById('temperature')
const weatherIcon = document.getElementById('weather-icon')

const convertButton = document.getElementById('convert-temp')

const searchInput = document.querySelector('#search-location')
const searchButton = document.querySelector('#search-btn')
// left bar
const feelsLike = document.getElementById('feels_like')
const humidity = document.getElementById('humidity')
const chanceOfRain = document.getElementById('rain_chance')
const windSpeed = document.getElementById('wind_speed')


function loadDOM(forecast, weather){
  precipitation.textContent = forecast.getCurrentDescription()
  city.textContent = weather.getTown()
  date.textContent = forecast.getCurrentDate().date
  time.textContent = forecast.getCurrentDate().time
  temperature.textContent =  `${forecast.getCurrentTemp()} ${_utils__WEBPACK_IMPORTED_MODULE_0__.setTempUnits(_classes__WEBPACK_IMPORTED_MODULE_1__.state)}`
  weatherIcon.innerHTML = ''
  weatherIcon.appendChild(forecast.getCurrentIcon())

  feelsLike.textContent = `${forecast.getCurrentFeelsLike()} ${_utils__WEBPACK_IMPORTED_MODULE_0__.setTempUnits(_classes__WEBPACK_IMPORTED_MODULE_1__.state)}`
  humidity.textContent = `${forecast.getCurrentHumidity()} %`
  chanceOfRain.textContent = `${forecast.getCurrentChanceOfRain()} %`
  windSpeed.textContent = `${forecast.getCurrentWindSpeed()} ${_utils__WEBPACK_IMPORTED_MODULE_0__.setSpeedUnits(_classes__WEBPACK_IMPORTED_MODULE_1__.state)}`
}

function convertUnits(state){
  const forecast = state.forecast;
  const weather = state.weather
  if(state.units === 'metric'){
    forecast.setCurrentTemp(_utils__WEBPACK_IMPORTED_MODULE_0__.convertToF(forecast.getCurrentTemp()))
    forecast.setCurrentFeelsLike(_utils__WEBPACK_IMPORTED_MODULE_0__.convertToF(forecast.getCurrentFeelsLike()))
    forecast.setCurrentWindSpeed(_utils__WEBPACK_IMPORTED_MODULE_0__.convertToMph(forecast.getCurrentWindSpeed()))
    state.units = 'imperial'
    convertButton.textContent = 'Display °C'
  }else{
    forecast.setCurrentTemp(_utils__WEBPACK_IMPORTED_MODULE_0__.convertToC(forecast.getCurrentTemp()))
    forecast.setCurrentFeelsLike(_utils__WEBPACK_IMPORTED_MODULE_0__.convertToC(forecast.getCurrentFeelsLike()))
    forecast.setCurrentWindSpeed(_utils__WEBPACK_IMPORTED_MODULE_0__.convertToKmph(forecast.getCurrentWindSpeed()))
    state.units = 'metric'
    convertButton.textContent = 'Display °F'
  }
  loadDOM(forecast, weather)
}



/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "convertDaily": () => (/* binding */ convertDaily),
/* harmony export */   "convertHourly": () => (/* binding */ convertHourly),
/* harmony export */   "convertToC": () => (/* binding */ convertToC),
/* harmony export */   "convertToF": () => (/* binding */ convertToF),
/* harmony export */   "convertToKmph": () => (/* binding */ convertToKmph),
/* harmony export */   "convertToMph": () => (/* binding */ convertToMph),
/* harmony export */   "fillDaily": () => (/* binding */ fillDaily),
/* harmony export */   "fillHourly": () => (/* binding */ fillHourly),
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "roundToOne": () => (/* binding */ roundToOne),
/* harmony export */   "setSpeedUnits": () => (/* binding */ setSpeedUnits),
/* harmony export */   "setTempUnits": () => (/* binding */ setTempUnits),
/* harmony export */   "toDateTime": () => (/* binding */ toDateTime),
/* harmony export */   "toReadableTemp": () => (/* binding */ toReadableTemp),
/* harmony export */   "toReadableTime": () => (/* binding */ toReadableTime)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/modules/classes.js");


function getIcon(code) {
  const codes = {
    "01d": "./imgs/sun.svg",
    "01n": "./imgs/moon.svg",
    "02d": "./imgs/cloudy-day.svg",
    "02n": "./imgs/cloudy-night.svg",
    "03d": "./imgs/cloud.svg",
    "03n": "./imgs/cloud.svg",
    "04d": "./imgs/cloudy.svg",
    "04n": "./imgs/cloudy.svg",
    "09d": "./imgs/rainy.svg",
    "09n": "./imgs/rainy.svg",
    "10d": "./imgs/rainy.svg",
    "10n": "./imgs/rainy.svg",
    "11d": "./imgs/lightning.svg",
    "11n": "./imgs/lightning.svg",
    "13d": "./imgs/snow.svg",
    "13n": "./imgs/snow.svg",
    "50d": "./imgs/mist.svg",
    "50n": "./imgs/mist.svg",
  };
  const image = new Image(100);
  image.src = codes[code];
  return image;
}

function capitalize(string) {
  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

function toDateTime(seconds, timezone) {
  const t = new Date(1970, 0, 1);
  t.setSeconds(seconds);
  return {
    date: t.toLocaleDateString("en-US", {
      timeZone: timezone,
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: `Time: ${t.toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour12: false,
    })}`,
  };
}

function toReadableTime(time) {
  time.split(" ");
}

function toReadableTemp(temp) {
  return Math.round(temp);
}

function roundToOne(val) {
  return Math.round(val * 10) / 10;
}

function setTempUnits(state) {
  return state.units === "metric" ? "°C" : "°F";
}
function setSpeedUnits(state) {
  return state.units === "metric" ? "km/h" : "mph";
}

function convertToF(value) {
  return value * 1.8 + 32;
}

function convertToC(value) {
  return (value - 32) / 1.8;
}

function convertToMph(value) {
  return value / 1.609344;
}

function convertToKmph(value) {
  return value * 1.609344;
}

function fillDaily(array) {
  return array.map((item) => {
    return {
      dt: item.dt,
      maxTemp: item.temp.max,
      minTemp: item.temp.min,
      icon: item.weather[0].icon,
      getDay: function () {
        const date = new Date(1970, 0, 1);
        date.setSeconds(this.dt);
        return date.toLocaleDateString("en-US", {
          weekday: "long",
        })
      },
      getDate: function(){
        const date = new Date(1970, 0, 1);
        date.setSeconds(this.dt)
        return date.toLocaleDateString('en-US',{
          day: 'numeric',
          month: "short",
        })
      }
    };
  });
}

function convertDaily(array){
  return array.map((item)=>{
    return {
      dt: item.dt,
      maxTemp: (()=>{
        if(_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === 'metric'){
          return convertToF(item.maxTemp)
        }
        if(_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === 'imperial'){
          return convertToC(item.maxTemp)
        }
      })(),
      minTemp: (()=>{
        if(_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === 'metric'){
          return convertToF(item.minTemp)
        }
        if(_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === 'imperial'){
          return convertToC(item.minTemp)
        }
      })(),
      icon: item.icon,
      getDay: item.getDay,
      getDate: item.getDate,
    }
  })
}

function fillHourly(array){
  const arr = array.splice(0, 24)
  const result = [];
  const temp = arr.map(item=>{
    return {
      timezone: _classes__WEBPACK_IMPORTED_MODULE_0__.state.forecast.forecast.timezone,
      dt: item.dt,
      temp: item.temp,
      icon: item.weather[0].icon,
      getHour: function(){
        const date = new Date(1970, 0, 1)
        date.setSeconds(this.dt);
        return date.toLocaleTimeString("en-US",{
          timeZone: this.timezone,
          hour12: true,
          hour: 'numeric'
        })
      }
    }
  })
  while(temp.length){
    result.push(temp.splice(0,8))
  }
  return result
}

function convertHourly(array){
  const temp = [];
  for(let arr of array){
    temp.push(arr.map((item)=>{
      return {
        timezone: item.timezone,
        dt: item.dt,
        temp: (()=>{
          if(_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === 'metric'){
            return convertToF(item.temp)
          }
          if(_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === 'imperial'){
            return convertToC(item.temp)
          }
        })(),
        icon: item.icon,
        getHour: item.getHour,
      }
    }))
  }
  return temp;
 
}




/***/ }),

/***/ "./src/fonts/ProstoOne-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/ProstoOne-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "677db36ec3f39ac20a40.ttf";

/***/ }),

/***/ "./src/imgs/background/background3.jpg":
/*!*********************************************!*\
  !*** ./src/imgs/background/background3.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "658e22959c348483e476.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFlBQVksWUFBWSxLQUFLLFlBQVksV0FBVyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLHFDQUFxQyw4QkFBOEIsa0VBQWtFLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLG9CQUFvQixHQUFHLE1BQU0sOEJBQThCLGdCQUFnQixlQUFlLDZCQUE2Qiw4QkFBOEIsR0FBRyxTQUFTLGdFQUFnRSwwQkFBMEIsK0JBQStCLGdDQUFnQyw4QkFBOEIsdUJBQXVCLGdCQUFnQixvQkFBb0IsMEJBQTBCLEdBQUcseUJBQXlCLFlBQVksb0JBQW9CLDJCQUEyQix3QkFBd0IsNEJBQTRCLGNBQWMsc0JBQXNCLEdBQUcseUhBQXlILDRCQUE0QixpQ0FBaUMsY0FBYyxlQUFlLG9CQUFvQixrQ0FBa0MsR0FBRywySEFBMkgsaUJBQWlCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLHFDQUFxQyx5QkFBeUIsR0FBRyxlQUFlLG9CQUFvQixvQkFBb0IsR0FBRyxnQkFBZ0IsaUJBQWlCLDJCQUEyQixvQkFBb0Isc0JBQXNCLDBCQUEwQixtQ0FBbUMsK0JBQStCLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxvQkFBb0Isa0JBQWtCLHdCQUF3QiwyQkFBMkIsd0JBQXdCLG1DQUFtQyxHQUFHLG1CQUFtQixrQkFBa0IsMkNBQTJDLGVBQWUsZUFBZSxpQkFBaUIsZUFBZSxHQUFHLHlCQUF5QixpQkFBaUIsaUJBQWlCLGtCQUFrQixHQUFHLGNBQWMsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLEdBQUcsa0JBQWtCLGdCQUFnQixHQUFHLGtDQUFrQyxZQUFZLEdBQUcsNEJBQTRCLGlCQUFpQixrQkFBa0IsMkJBQTJCLGdDQUFnQyxjQUFjLEtBQUssbUJBQW1CLGtCQUFrQixjQUFjLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsb0JBQW9CLGdCQUFnQixHQUFHLGdCQUFnQixXQUFXLG9CQUFvQiwyQkFBMkIsYUFBYSxLQUFLLHlIQUF5SCw0QkFBNEIsaUNBQWlDLGlCQUFpQixrQkFBa0Isa0JBQWtCLDJCQUEyQixnQkFBZ0IsYUFBYSxrQkFBa0IsY0FBYyxHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLEdBQUcsWUFBWSw0QkFBNEIsR0FBRyxlQUFlLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsc0NBQXNDLGlCQUFpQixvQkFBb0IsR0FBRyxPQUFPLHVCQUF1QixjQUFjLGlCQUFpQixnQkFBZ0IsNEJBQTRCLHVCQUF1QixvQkFBb0IsR0FBRyxnQkFBZ0IsNEJBQTRCLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGNBQWMsR0FBRyxRQUFRLGtCQUFrQixHQUFHLFFBQVEsa0JBQWtCLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsR0FBRyxvQ0FBb0Msa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsY0FBYyxZQUFZLGtCQUFrQiwwQkFBMEIsR0FBRyxrQkFBa0IsZ0JBQWdCLHlCQUF5QixHQUFHLGtCQUFrQixpQkFBaUIsR0FBRyxlQUFlLHNCQUFzQixHQUFHLGVBQWUsc0JBQXNCLEdBQUcsbUJBQW1CLGdCQUFnQixHQUFHLG1CQUFtQjtBQUNocFU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNaMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ29FO0FBQ3hCO0FBQ3FDO0FBQ3NDOztBQUU1SSxRQUFRLE1BQU07QUFDZDs7QUFFQSwyRUFBNEI7QUFDNUIsRUFBRSx5REFBVztBQUNiLENBQUM7O0FBRUQsNEVBQTZCO0FBQzdCLEVBQUUsMkRBQWEsT0FBTyx5REFBVztBQUNqQyxVQUFVLDREQUFjLENBQUMseURBQVcsRUFBRSx5REFBVztBQUNqRDtBQUNBLEVBQUUsNERBQWMsT0FBTyxzREFBUTtBQUMvQixVQUFVLDZEQUFlLENBQUMseURBQVcsRUFBRSx5REFBVztBQUNsRDtBQUNBLEVBQUUscUVBQXVCO0FBQ3pCLEVBQUUsc0VBQXdCOztBQUUxQixFQUFFLDBEQUFPLENBQUMsNERBQWMsRUFBRSwyREFBYTtBQUN2QyxNQUFNLDZFQUE4QjtBQUNwQyxJQUFJLDhEQUFXLENBQUMsbURBQUs7QUFDckIsSUFBSTtBQUNKLElBQUksK0RBQVksQ0FBQyxtREFBSyxFQUFFLHlEQUFXO0FBQ25DO0FBQ0EsQ0FBQzs7QUFFRCw2RUFBOEI7QUFDOUIsRUFBRSw4RUFBZ0M7QUFDbEMsRUFBRSwrRUFBaUM7QUFDbkMsRUFBRSwrREFBWSxDQUFDLG1EQUFLO0FBQ3BCLE1BQU0sNkVBQThCO0FBQ3BDLElBQUksOERBQVcsQ0FBQyxtREFBSztBQUNyQixJQUFJO0FBQ0osSUFBSSwrREFBWSxDQUFDLG1EQUFLLEVBQUUseURBQVc7QUFDbkM7QUFDQSxDQUFDOztBQUVELDJFQUE0QjtBQUM1QjtBQUNBLEVBQUUseURBQU07QUFDUixDQUFDOztBQUVELDRFQUE2QjtBQUM3QjtBQUNBLEVBQUUseURBQU07QUFDUixFQUFFLCtEQUFZLENBQUMsbURBQUssRUFBRSx5REFBVztBQUNqQyxDQUFDOztBQUVELDJEQUFZO0FBQ1o7QUFDQTtBQUNBLElBQUkseURBQVc7QUFDZixJQUFJLDZEQUFVLENBQUMseURBQVc7QUFDMUIsSUFBSSwrREFBWSxDQUFDLG1EQUFLLEVBQUUseURBQVc7QUFDbkMsR0FBRztBQUNILENBQUM7O0FBRUQsMEVBQTJCO0FBQzNCLE1BQU0seURBQVc7QUFDakIsSUFBSSx5REFBVztBQUNmLElBQUksNkRBQVUsQ0FBQyx5REFBVztBQUMxQixJQUFJLCtEQUFZLENBQUMsbURBQUssRUFBRSx5REFBVztBQUNuQyxJQUFJO0FBQ0osQ0FBQzs7QUFFRCx5RUFBMEI7QUFDMUIsTUFBTSx5REFBVztBQUNqQixJQUFJLHlEQUFXO0FBQ2YsSUFBSSw2REFBVSxDQUFDLHlEQUFXO0FBQzFCLElBQUksK0RBQVksQ0FBQyxtREFBSyxFQUFFLHlEQUFXO0FBQ25DLElBQUk7QUFDSixDQUFDOztBQUVEO0FBQ0EseURBQVcsU0FBUyxvRUFBc0I7O0FBRTFDO0FBQ0EsRUFBRSwyREFBYSxPQUFPLHlEQUFXO0FBQ2pDLFVBQVUsNERBQWMsQ0FBQyx5REFBVyxFQUFFLHlEQUFXO0FBQ2pEO0FBQ0EsRUFBRSw0REFBYyxPQUFPLHNEQUFRO0FBQy9CLFVBQVUsNkRBQWUsQ0FBQyx5REFBVyxFQUFFLHlEQUFXO0FBQ2xEO0FBQ0EsRUFBRSxxRUFBdUI7QUFDekIsRUFBRSxzRUFBd0I7O0FBRTFCLEVBQUUsMERBQU8sQ0FBQyw0REFBYyxFQUFFLDJEQUFhO0FBQ3ZDLEVBQUUsOERBQVcsQ0FBQyxtREFBSztBQUNuQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEtBQUssU0FBUyxNQUFNLFNBQVMsT0FBTztBQUMvRjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsV0FBVyxPQUFPLFdBQVcsaUNBQWlDLE1BQU0sU0FBUyxPQUFPO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRTZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRDVDOztBQUVqQztBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFnQjtBQUMzQjs7QUFFQTtBQUNBLFdBQVcsOENBQWdCO0FBQzNCOztBQUVBO0FBQ0EsV0FBVyxrREFBb0I7QUFDL0I7O0FBRUE7QUFDQSxXQUFXLDJDQUFhO0FBQ3hCOztBQUVBO0FBQ0EsV0FBVyxrREFBb0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsOENBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZDQUFlO0FBQ2pEOztBQUVBO0FBQ0Esa0NBQWtDLGdEQUFrQjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsOENBQWdCO0FBQ25EOztBQUVBO0FBQ0EsbUNBQW1DLGlEQUFtQjtBQUN0RDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGaUM7QUFDQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUk7QUFDL0IsNEJBQTRCLEtBQUs7QUFDakM7QUFDQTtBQUNBLGtDQUFrQyxrREFBb0I7QUFDdEQ7QUFDQSxPQUFPLEVBQUUsZ0RBQWtCLENBQUMsMkNBQUssRUFBRTtBQUNuQyxnQ0FBZ0Msa0RBQW9CO0FBQ3BEO0FBQ0EsT0FBTyxFQUFFLGdEQUFrQixDQUFDLDJDQUFLLEVBQUU7QUFDbkM7QUFDQTtBQUNBLGdCQUFnQiwyQ0FBYSxXQUFXO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQsK0JBQStCLGtEQUFvQixRQUFRLEVBQUUsZ0RBQWtCO0FBQy9FLElBQUksMkNBQUs7QUFDVCxJQUFJO0FBQ0o7QUFDQSxrQkFBa0IsMkNBQWEsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQ0FBSztBQUNyQixJQUFJO0FBQ0o7QUFDQTtBQUNBLGlCQUFpQiwyQ0FBSyxFQUFFLGlEQUFXO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUc4QjtBQUNBO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJCQUEyQixFQUFFLGdEQUFrQixDQUFDLDJDQUFLLEVBQUU7QUFDdkY7QUFDQTs7QUFFQSw2QkFBNkIsZ0NBQWdDLEVBQUUsZ0RBQWtCLENBQUMsMkNBQUssRUFBRTtBQUN6Riw0QkFBNEIsK0JBQStCO0FBQzNELGdDQUFnQyxtQ0FBbUM7QUFDbkUsNkJBQTZCLGdDQUFnQyxFQUFFLGlEQUFtQixDQUFDLDJDQUFLLEVBQUU7QUFDMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOENBQWdCO0FBQzVDLGlDQUFpQyw4Q0FBZ0I7QUFDakQsaUNBQWlDLGdEQUFrQjtBQUNuRDtBQUNBO0FBQ0EsR0FBRztBQUNILDRCQUE0Qiw4Q0FBZ0I7QUFDNUMsaUNBQWlDLDhDQUFnQjtBQUNqRCxpQ0FBaUMsaURBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQVc7QUFDdEI7QUFDQTtBQUNBLFdBQVcsaURBQVc7QUFDdEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsaURBQVc7QUFDdEI7QUFDQTtBQUNBLFdBQVcsaURBQVc7QUFDdEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNFQUFnQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQVc7QUFDeEI7QUFDQTtBQUNBLGFBQWEsaURBQVc7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBbUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2xvd2VyZG9tLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91cHBlcmRvbS5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUHJvc3RvT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JhY2tncm91bmQvYmFja2dyb3VuZDMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQcm9zdG8gb25lJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSAgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3R7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbip7XFxuICAtYm9yZGVyOiAxcHggZGFzaGVkIHdoaXRlO1xcblxcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcXG4gIGZvbnQtZmFtaWx5OiAnUHJvc3RvIG9uZSc7XFxufVxcblxcbmJvZHl7XFxuIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbiBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gY29sb3I6IHdoaXRlO1xcbiBcXG4gZGlzcGxheTogZmxleDtcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuZGl2Lm1haW4tY29udGFpbmVye1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcblxcbiAgcGFkZGluZzogODBweCAwO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLypVUFBFUiBCT1gqL1xcbi51cHBlci1ib3h7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XFxuXFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDg1JTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qUklHSFQqL1xcbi5yaWdodC51cHBlci1iYXJ7XFxuICB3aWR0aDogMzUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4jcHJlY2lwaXRhdGlvbiwgLmRldGFpbHNfaW5mbz5oMXtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG4jdGVtcGVyYXR1cmV7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcbiNjb252ZXJ0LXRlbXB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jd2VhdGhlci1pY29ue1xcbiAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcbmlucHV0W3R5cGU9dGV4dF17XFxuZm9udC1zaXplOiAxcmVtO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMzUsIDIxNSwgMCk7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOiB3aGl0ZTtcXG5wYWRkaW5nOiAwIDVweDtcXG53aWR0aDogMTUwcHg7XFxufVxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXN7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jc2VhcmNoLWJ0bntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNzZWFyY2gtYnRuPmltZ3tcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4vKkNFTlRFUiovXFxuLmNlbnRlci51cHBlci1iYXJ7XFxuICBmbGV4OiAzO1xcbn1cXG4vKkxFRlQqL1xcbi5sZWZ0LnVwcGVyLWJhcntcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxNXB4O1xcblxcbn1cXG4ud2VhdGhlci1kZXRhaWxze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmRldGFpbHNfaWNvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kZXRhaWxzX2ljb24+aW1ne1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcbi5kZXRhaWxzX2luZm97XFxuICBmbGV4OjE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcblxcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLypMT1dFUiBCT1gqL1xcbi5sb3dlci1ib3h7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggNDBweCA0MHB4IDQwcHg7XFxuXFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4XFxufVxcbi5pbnRlcmZhY2V7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG4uaW50ZXJmYWNlLWJ0bntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWxlY3RlZHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uY2hhbmdlX2xlZnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2hhbmdlX2xlZnQ+aW1nLCAuY2hhbmdlX3JpZ2h0PmltZ3tcXG4gIGhlaWdodDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvdHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTFweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kb3Qtc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmNoYW5nZS1ob3Vyc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5zaG93e1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmhpZGV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZm9yZWNhc3RzLWJsb2Nre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmRhaWx5LWZvcmVjYXN0LCAuaG91cmx5LWZvcmVjYXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5kYWlseV9pY29ue1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5kYWlseV9pY29uPmltZ3tcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbjo6cGxhY2Vob2xkZXJ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5ob3VybHlfdGltZXtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uaG91cmx5X3RlbXB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuLmhvdXJseV9pY29uPmltZ3tcXG4gIHdpZHRoOiA1MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGdFQUE2RDtFQUM3RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5Qjs7RUFFekIsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7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Q0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQcm9zdG8gb25lJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1Byb3N0b09uZS1SZWd1bGFyLnR0ZicpICBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuKntcXG4gIC1ib3JkZXI6IDFweCBkYXNoZWQgd2hpdGU7XFxuXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgIFxcbiAgZm9udC1mYW1pbHk6ICdQcm9zdG8gb25lJztcXG59XFxuXFxuYm9keXtcXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZ3MvYmFja2dyb3VuZC9iYWNrZ3JvdW5kMy5qcGdcXFwiKTtcXG4gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAtYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiBjb2xvcjogd2hpdGU7XFxuIFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG5kaXYubWFpbi1jb250YWluZXJ7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuXFxuICBwYWRkaW5nOiA4MHB4IDA7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKlVQUEVSIEJPWCovXFxuLnVwcGVyLWJveHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcXG5cXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogODUlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLypSSUdIVCovXFxuLnJpZ2h0LnVwcGVyLWJhcntcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNwcmVjaXBpdGF0aW9uLCAuZGV0YWlsc19pbmZvPmgxe1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcbiN0ZW1wZXJhdHVyZXtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuI2NvbnZlcnQtdGVtcHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG5cXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiN3ZWF0aGVyLWljb257XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XXtcXG5mb250LXNpemU6IDFyZW07XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIzNSwgMjE1LCAwKTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IHdoaXRlO1xcbnBhZGRpbmc6IDAgNXB4O1xcbndpZHRoOiAxNTBweDtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNzZWFyY2gtYnRue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3NlYXJjaC1idG4+aW1ne1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi8qQ0VOVEVSKi9cXG4uY2VudGVyLnVwcGVyLWJhcntcXG4gIGZsZXg6IDM7XFxufVxcbi8qTEVGVCovXFxuLmxlZnQudXBwZXItYmFye1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDE1cHg7XFxuXFxufVxcbi53ZWF0aGVyLWRldGFpbHN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZGV0YWlsc19pY29ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmRldGFpbHNfaWNvbj5pbWd7XFxuICB3aWR0aDogNDBweDtcXG59XFxuLmRldGFpbHNfaW5mb3tcXG4gIGZsZXg6MTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuXFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKkxPV0VSIEJPWCovXFxuLmxvd2VyLWJveHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogMjBweCA0MHB4IDQwcHggNDBweDtcXG5cXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHhcXG59XFxuLmludGVyZmFjZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI1cHg7XFxufVxcbi5pbnRlcmZhY2UtYnRue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNlbGVjdGVke1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbi5jaGFuZ2VfbGVmdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jaGFuZ2VfbGVmdD5pbWcsIC5jaGFuZ2VfcmlnaHQ+aW1ne1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZG90e1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvdC1zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uY2hhbmdlLWhvdXJze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnNob3d7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaGlkZXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mb3JlY2FzdHMtYmxvY2t7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZGFpbHktZm9yZWNhc3QsIC5ob3VybHktZm9yZWNhc3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmRhaWx5X2ljb257XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLmRhaWx5X2ljb24+aW1ne1xcbiAgd2lkdGg6IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlcntcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhvdXJseV90aW1le1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5ob3VybHlfdGVtcHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG4uaG91cmx5X2ljb24+aW1ne1xcbiAgd2lkdGg6IDUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVxdWVzdFdlYXRoZXIsIHJlcXVlc3RGb3JlY2FzdCwgcmVxdWVzdEN1cnJlbnRMb2NhdGlvbiwgfSBmcm9tIFwiLi9tb2R1bGVzL2FwaVwiO1xuaW1wb3J0IHsgV2VhdGhlckRhdGEsIEZvcmVjYXN0LCBzdGF0ZSB9IGZyb20gXCIuL21vZHVsZXMvY2xhc3Nlc1wiO1xuaW1wb3J0IHsgbG9hZERPTSwgc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbiwgY29udmVydEJ1dHRvbiwgY29udmVydFVuaXRzLCB9IGZyb20gXCIuL21vZHVsZXMvdXBwZXJkb21cIjtcbmltcG9ydCB7IGRhaWx5QnV0dG9uLCBoYW5kbGUsIGhhbmRsZURvdHMsIGhvdXJseUJ1dHRvbiwgYWRkRGFpbHlET00sIGFkZEhvdXJseURPTSwgZG90cywgbGVmdEFycm93LCByaWdodEFycm93LCB9IGZyb20gXCIuL21vZHVsZXMvbG93ZXJkb21cIjtcblxuY29uc3QgeyBsb2cgfSA9IGNvbnNvbGU7XG5sb2coXCJDcmVhdGluZyBuZXcgcHJvamVjdFwiKTtcblxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICBzdGF0ZS5pbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xufSk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBzdGF0ZS53ZWF0aGVyID0gbmV3IFdlYXRoZXJEYXRhKFxuICAgIGF3YWl0IHJlcXVlc3RXZWF0aGVyKHN0YXRlLmlucHV0LCBzdGF0ZS51bml0cylcbiAgKTtcbiAgc3RhdGUuZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3QoXG4gICAgYXdhaXQgcmVxdWVzdEZvcmVjYXN0KHN0YXRlLmlucHV0LCBzdGF0ZS51bml0cylcbiAgKTtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0RGFpbHkoKTtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0SG91cmx5KCk7XG5cbiAgbG9hZERPTShzdGF0ZS5mb3JlY2FzdCwgc3RhdGUud2VhdGhlcik7XG4gIGlmIChkYWlseUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgIGFkZERhaWx5RE9NKHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbiAgfVxufSk7XG5cbmNvbnZlcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0Q29udmVydGVkRGFpbHkoKTtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0Q29udmVydGVkSG91cmx5KCk7XG4gIGNvbnZlcnRVbml0cyhzdGF0ZSk7XG4gIGlmIChkYWlseUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgIGFkZERhaWx5RE9NKHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbiAgfVxufSk7XG5cbmRhaWx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgaGFuZGxlKHRhcmdldCk7XG59KTtcblxuaG91cmx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgaGFuZGxlKHRhcmdldCk7XG4gIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xufSk7XG5cbmRvdHMuZm9yRWFjaCgoZG90KSA9PiB7XG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuZG90O1xuICAgIHN0YXRlLmluZGV4ID0gaW5kZXg7XG4gICAgaGFuZGxlRG90cyhzdGF0ZS5pbmRleCk7XG4gICAgYWRkSG91cmx5RE9NKHN0YXRlLCBzdGF0ZS5pbmRleCk7XG4gIH0pO1xufSk7XG5cbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHN0YXRlLmluZGV4IDwgMikge1xuICAgIHN0YXRlLmluZGV4Kys7XG4gICAgaGFuZGxlRG90cyhzdGF0ZS5pbmRleCk7XG4gICAgYWRkSG91cmx5RE9NKHN0YXRlLCBzdGF0ZS5pbmRleCk7XG4gIH0gZWxzZSByZXR1cm47XG59KTtcblxubGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChzdGF0ZS5pbmRleCA+IDApIHtcbiAgICBzdGF0ZS5pbmRleC0tO1xuICAgIGhhbmRsZURvdHMoc3RhdGUuaW5kZXgpO1xuICAgIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xuICB9IGVsc2UgcmV0dXJuO1xufSk7XG5cbi8vIE9ubG9hZCB3aXRoIGN1cnJlbnQgdXNlciBsb2NhdGlvblxuc3RhdGUuaW5wdXQgPSBhd2FpdCByZXF1ZXN0Q3VycmVudExvY2F0aW9uKCk7XG5cbihhc3luYyAoKSA9PiB7XG4gIHN0YXRlLndlYXRoZXIgPSBuZXcgV2VhdGhlckRhdGEoXG4gICAgYXdhaXQgcmVxdWVzdFdlYXRoZXIoc3RhdGUuaW5wdXQsIHN0YXRlLnVuaXRzKVxuICApO1xuICBzdGF0ZS5mb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChcbiAgICBhd2FpdCByZXF1ZXN0Rm9yZWNhc3Qoc3RhdGUuaW5wdXQsIHN0YXRlLnVuaXRzKVxuICApO1xuICBzdGF0ZS5mb3JlY2FzdC5zZXREYWlseSgpO1xuICBzdGF0ZS5mb3JlY2FzdC5zZXRIb3VybHkoKTtcblxuICBsb2FkRE9NKHN0YXRlLmZvcmVjYXN0LCBzdGF0ZS53ZWF0aGVyKTtcbiAgYWRkRGFpbHlET00oc3RhdGUpO1xufSkoKTtcbiIsIlxuLy9jb25zdCBhcGlLZXkgPSBcIjIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0XCI7XG5jb25zdCBhcGlLZXkgPSAnMzA2OWFlMjcxOGU0MGY4ZGMxOTk4YjcyNTBlMTZmMTAnXG5cbi8vUmVxdWVzdGluZyBjdXJyZW50IGxvY2F0aW9uIGlmIGZldGNoIGZhaWxzIHVzZSBkZWZhdWx0IHZhbHVlXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Q3VycmVudExvY2F0aW9uKCl7XG4gIHRyeXtcbiAgY29uc3QgcmVzb2x2ZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2lwYXBpLmNvL2pzb24vJyk7XG4gIGlmKCFyZXNvbHZlLm9rKXtcbiAgICByZXR1cm4gJ2R1c2hhbmJlJ1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc29sdmUuanNvbigpO1xuICByZXR1cm4gcmVzdWx0LmNpdHlcbiAgfWNhdGNoKGVycil7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgcmV0dXJuICdkdXNoYW5iZSdcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0V2VhdGhlcihjaXR5LCB1bml0cykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPSR7dW5pdHN9JkFQUElEPSR7YXBpS2V5fWBcbiAgICApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG4vLyBjb29yZHMgY2FtZSBmcm9tIHJlcXVlc3RXZWF0aGVyTm93XG4vLyB1bml0cyAnaW1wZXJpYWwnIG9yICdtZXRyaWMnXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Rm9yZWNhc3QoaW5wdXQsIHVuaXRzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29vcmRzID0gYXdhaXQgZ2V0Q29vcmRzKGlucHV0KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3Jkcy5sYXR9Jmxvbj0ke2Nvb3Jkcy5sb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7YXBpS2V5fWBcbiAgICApO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzKGNpdHkpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdFdlYXRoZXIoY2l0eSk7XG4gIHJldHVybiByZXN1bHQuY29vcmQ7XG59XG5cbmV4cG9ydCB7cmVxdWVzdFdlYXRoZXIsIHJlcXVlc3RGb3JlY2FzdCwgcmVxdWVzdEN1cnJlbnRMb2NhdGlvbiwgZ2V0Q29vcmRzIH07XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgd2VhdGhlcjoge30sXG4gIGZvcmVjYXN0OiB7fSxcbiAgdW5pdHM6ICdtZXRyaWMnLCAvL2ltcGVyaWFsXG4gIGlucHV0OiAnSXZhbm92bycsXG5cbiAgZGFpbHk6IFtdLFxuICBob3VybHk6IFtdLFxuICBpbmRleDogMCxcbn1cblxuY2xhc3MgV2VhdGhlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih3ZWF0aGVyKSB7XG4gICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlcjtcbiAgfVxuICBnZXRUb3duKCkge1xuICAgIHJldHVybiB0aGlzLndlYXRoZXIubmFtZTtcbiAgfVxufVxuXG5jbGFzcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKGZvcmVjYXN0KSB7XG4gICAgdGhpcy5mb3JlY2FzdCA9IGZvcmVjYXN0O1xuICB9XG4gIC8vQ3VycmVudCBkYXlcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgZ2V0Q3VycmVudERlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZm9yZWNhc3QuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHJldHVybiB1dGlscy5jYXBpdGFsaXplKHN0cmluZyk7XG4gIH1cblxuICBnZXRDdXJyZW50RGF0ZSgpIHtcbiAgICByZXR1cm4gdXRpbHMudG9EYXRlVGltZSh0aGlzLmZvcmVjYXN0LmN1cnJlbnQuZHQsIHRoaXMuZm9yZWNhc3QudGltZXpvbmUpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFRlbXAoKSB7XG4gICAgcmV0dXJuIHV0aWxzLnRvUmVhZGFibGVUZW1wKHRoaXMuZm9yZWNhc3QuY3VycmVudC50ZW1wKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRJY29uKCkge1xuICAgIHJldHVybiB1dGlscy5nZXRJY29uKHRoaXMuZm9yZWNhc3QuY3VycmVudC53ZWF0aGVyWzBdLmljb24pO1xuICB9XG5cbiAgZ2V0Q3VycmVudEZlZWxzTGlrZSgpIHtcbiAgICByZXR1cm4gdXRpbHMudG9SZWFkYWJsZVRlbXAodGhpcy5mb3JlY2FzdC5jdXJyZW50LmZlZWxzX2xpa2UpO1xuICB9XG5cbiAgZ2V0Q3VycmVudEh1bWlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHk7XG4gIH1cblxuICBnZXRDdXJyZW50Q2hhbmNlT2ZSYWluKCkge1xuICAgIHJldHVybiB0aGlzLmZvcmVjYXN0LmRhaWx5WzBdLnBvcCAqIDEwMDtcbiAgfVxuXG4gIGdldEN1cnJlbnRXaW5kU3BlZWQoKSB7XG4gICAgcmV0dXJuIHV0aWxzLnJvdW5kVG9PbmUodGhpcy5mb3JlY2FzdC5jdXJyZW50LndpbmRfc3BlZWQpO1xuICB9XG4gIC8vQ3VycmVudCBkYXkgc2V0dGVyc1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBzZXRDdXJyZW50VGVtcCh2YWwpe1xuICAgIHRoaXMuZm9yZWNhc3QuY3VycmVudC50ZW1wID0gdmFsO1xuICB9XG5cbiAgc2V0Q3VycmVudFdpbmRTcGVlZCh2YWwpe1xuICAgIHRoaXMuZm9yZWNhc3QuY3VycmVudC53aW5kX3NwZWVkID0gdmFsXG4gIH1cblxuICBzZXRDdXJyZW50RmVlbHNMaWtlKHZhbCl7XG4gICAgdGhpcy5mb3JlY2FzdC5jdXJyZW50LmZlZWxzX2xpa2UgPSB2YWxcbiAgfVxuICAvL0RBSUxZXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIHNldERhaWx5KCl7XG4gICAgdGhpcy5mb3JlY2FzdC5kYWlseUZpbHRlcmVkID0gdXRpbHMuZmlsbERhaWx5KHRoaXMuZm9yZWNhc3QuZGFpbHkpO1xuICB9XG5cbiAgc2V0Q29udmVydGVkRGFpbHkoKXtcbiAgICB0aGlzLmZvcmVjYXN0LmRhaWx5RmlsdGVyZWQgPSB1dGlscy5jb252ZXJ0RGFpbHkodGhpcy5mb3JlY2FzdC5kYWlseUZpbHRlcmVkKVxuICB9XG5cbiAgLy9IT1VSTFlcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgc2V0SG91cmx5KCl7XG4gICAgdGhpcy5mb3JlY2FzdC5ob3VybHlGaWx0ZXJlZCA9IHV0aWxzLmZpbGxIb3VybHkodGhpcy5mb3JlY2FzdC5ob3VybHkpXG4gIH1cblxuICBzZXRDb252ZXJ0ZWRIb3VybHkoKXtcbiAgICB0aGlzLmZvcmVjYXN0LmhvdXJseUZpbHRlcmVkID0gdXRpbHMuY29udmVydEhvdXJseSh0aGlzLmZvcmVjYXN0LmhvdXJseUZpbHRlcmVkKVxuICB9XG59XG5cbmV4cG9ydCB7c3RhdGUsIFdlYXRoZXJEYXRhLCBGb3JlY2FzdH0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmNvbnN0IGludGVyZmFjZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50ZXJmYWNlXCIpO1xuY29uc3QgZm9yZWNhc3RCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0cy1ibG9ja1wiKTtcbmNvbnN0IGNoYW5nZUhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNoYW5nZS1ob3Vyc1wiKTtcbmNvbnN0IGZpZWxkcyA9IGludGVyZmFjZUJveC5jaGlsZHJlbjtcblxuY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2VfbGVmdFwiKTtcbmNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZV9yaWdodFwiKTtcbmNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvdFwiKTtcblxuY29uc3QgZGFpbHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuY29uc3QgaG91cmx5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHlcIik7XG5cbmNvbnN0IGRheSA9IChkYXksIGRhdGUsIHRlbXBoaWdoLCB0ZW1wbG93LCBpY29uKSA9PiB7XG4gIHJldHVybiBgIFxuICA8ZGl2IGNsYXNzPVwiZGFpbHktZm9yZWNhc3RcIiBpZD1cImN1cnJlbnQtZGF5XCI+XG4gIDxkaXYgY2xhc3M9XCJkYWlseV9kYXlcIj4ke2RheX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X2RhdGVcIj4ke2RhdGV9PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkYWlseV9kYXRlXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkYWlseV90ZW1wXCI+XG4gICAgPGgxIGNsYXNzPVwiZGFpbHlfdGVtcC1oaWdoXCI+JHt1dGlscy50b1JlYWRhYmxlVGVtcChcbiAgICAgIHRlbXBoaWdoXG4gICAgKX0gJHt1dGlscy5zZXRUZW1wVW5pdHMoc3RhdGUpfTwvaDE+XG4gICAgPHAgY2xhc3M9XCJkYWlseV90ZW1wLWxvd1wiPiR7dXRpbHMudG9SZWFkYWJsZVRlbXAoXG4gICAgICB0ZW1wbG93XG4gICAgKX0gJHt1dGlscy5zZXRUZW1wVW5pdHMoc3RhdGUpfTwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkYWlseV9pY29uXCI+XG4gICAgPGltZyBzcmM9JyR7dXRpbHMuZ2V0SWNvbihpY29uKS5zcmN9Jz5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgYDtcbn07XG5cbmNvbnN0IGhvdXIgPSAodGltZSwgdGVtcCwgaWNvbikgPT4ge1xuICByZXR1cm4gYFxuICA8ZGl2IGNsYXNzPVwiaG91cmx5LWZvcmVjYXN0XCIgaWQ9XCJjdXJyZW50LWhvdXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaG91cmx5X3RpbWVcIj4ke3RpbWUudG9Mb3dlckNhc2UoKX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaG91cmx5X3RlbXBcIj4ke3V0aWxzLnRvUmVhZGFibGVUZW1wKHRlbXApfSAke3V0aWxzLnNldFRlbXBVbml0cyhcbiAgICBzdGF0ZVxuICApfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJob3VybHlfaWNvblwiPlxuICAgICAgPGltZyBzcmM9JyR7dXRpbHMuZ2V0SWNvbihpY29uKS5zcmN9Jz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+ICBcbiAgYDtcbn07XG5cbmNvbnN0IGhhbmRsZSA9ICh0YXJnZXQpID0+IHtcbiAgZm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICB9XG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFpbHlcIikpIHtcbiAgICBmaWVsZHNbMF0uY2xhc3NOYW1lID0gXCJkYWlseSBpbnRlcmZhY2UtYnRuIHNlbGVjdGVkXCI7XG4gICAgZmllbGRzWzJdLmNsYXNzTmFtZSA9IFwiY2hhbmdlLWhvdXJzIGhpZGVcIjtcbiAgICBhZGREYWlseURPTShzdGF0ZSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhvdXJseVwiKSkge1xuICAgIGZpZWxkc1sxXS5jbGFzc05hbWUgPSBcImhvdXJseSBpbnRlcmZhY2UtYnRuIHNlbGVjdGVkXCI7XG4gICAgZmllbGRzWzJdLmNsYXNzTmFtZSA9IFwiY2hhbmdlLWhvdXJzIHNob3dcIjtcbiAgICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlRG90cyA9IChpbmRleCkgPT4ge1xuICBkb3RzLmZvckVhY2goKGRvdCkgPT4gZG90LmNsYXNzTGlzdC5yZW1vdmUoXCJkb3Qtc2VsZWN0ZWRcIikpO1xuICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiZG90LXNlbGVjdGVkXCIpO1xufTtcblxuY29uc3QgYWRkRGFpbHlET00gPSAoc3RhdGUpID0+IHtcbiAgZm9yZWNhc3RCb3guaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgZGFpbHkgPSBzdGF0ZS5mb3JlY2FzdC5mb3JlY2FzdC5kYWlseUZpbHRlcmVkO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGRhaWx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yZWNhc3RCb3guaW5uZXJIVE1MICs9IGRheShcbiAgICAgIGRhaWx5W2ldLmdldERheSgpLFxuICAgICAgZGFpbHlbaV0uZ2V0RGF0ZSgpLFxuICAgICAgZGFpbHlbaV0ubWF4VGVtcCxcbiAgICAgIGRhaWx5W2ldLm1pblRlbXAsXG4gICAgICBkYWlseVtpXS5pY29uXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgYWRkSG91cmx5RE9NID0gKHN0YXRlLCBpbmRleCkgPT4ge1xuICBmb3JlY2FzdEJveC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBob3VybHkgPSBzdGF0ZS5mb3JlY2FzdC5mb3JlY2FzdC5ob3VybHlGaWx0ZXJlZFtpbmRleF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cmx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yZWNhc3RCb3guaW5uZXJIVE1MICs9IGhvdXIoXG4gICAgICBob3VybHlbaV0uZ2V0SG91cigpLFxuICAgICAgaG91cmx5W2ldLnRlbXAsXG4gICAgICBob3VybHlbaV0uaWNvblxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGRhaWx5QnV0dG9uLFxuICBob3VybHlCdXR0b24sXG4gIGRvdHMsXG4gIGxlZnRBcnJvdyxcbiAgcmlnaHRBcnJvdyxcbiAgaGFuZGxlLFxuICBoYW5kbGVEb3RzLFxuICBhZGREYWlseURPTSxcbiAgYWRkSG91cmx5RE9NLFxufTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL2NsYXNzZXMnO1xuLy8gcmlnaHQgYmFyXG5jb25zdCBwcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWNpcGl0YXRpb24nKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpXG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKVxuY29uc3QgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJylcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJylcbmNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItaWNvbicpXG5cbmNvbnN0IGNvbnZlcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVydC10ZW1wJylcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWxvY2F0aW9uJylcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnRuJylcbi8vIGxlZnQgYmFyXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNfbGlrZScpXG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpXG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbl9jaGFuY2UnKVxuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRfc3BlZWQnKVxuXG5cbmZ1bmN0aW9uIGxvYWRET00oZm9yZWNhc3QsIHdlYXRoZXIpe1xuICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID0gZm9yZWNhc3QuZ2V0Q3VycmVudERlc2NyaXB0aW9uKClcbiAgY2l0eS50ZXh0Q29udGVudCA9IHdlYXRoZXIuZ2V0VG93bigpXG4gIGRhdGUudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5nZXRDdXJyZW50RGF0ZSgpLmRhdGVcbiAgdGltZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmdldEN1cnJlbnREYXRlKCkudGltZVxuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9ICBgJHtmb3JlY2FzdC5nZXRDdXJyZW50VGVtcCgpfSAke3V0aWxzLnNldFRlbXBVbml0cyhzdGF0ZSl9YFxuICB3ZWF0aGVySWNvbi5pbm5lckhUTUwgPSAnJ1xuICB3ZWF0aGVySWNvbi5hcHBlbmRDaGlsZChmb3JlY2FzdC5nZXRDdXJyZW50SWNvbigpKVxuXG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmdldEN1cnJlbnRGZWVsc0xpa2UoKX0gJHt1dGlscy5zZXRUZW1wVW5pdHMoc3RhdGUpfWBcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5nZXRDdXJyZW50SHVtaWRpdHkoKX0gJWBcbiAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuZ2V0Q3VycmVudENoYW5jZU9mUmFpbigpfSAlYFxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5nZXRDdXJyZW50V2luZFNwZWVkKCl9ICR7dXRpbHMuc2V0U3BlZWRVbml0cyhzdGF0ZSl9YFxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5pdHMoc3RhdGUpe1xuICBjb25zdCBmb3JlY2FzdCA9IHN0YXRlLmZvcmVjYXN0O1xuICBjb25zdCB3ZWF0aGVyID0gc3RhdGUud2VhdGhlclxuICBpZihzdGF0ZS51bml0cyA9PT0gJ21ldHJpYycpe1xuICAgIGZvcmVjYXN0LnNldEN1cnJlbnRUZW1wKHV0aWxzLmNvbnZlcnRUb0YoZm9yZWNhc3QuZ2V0Q3VycmVudFRlbXAoKSkpXG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudEZlZWxzTGlrZSh1dGlscy5jb252ZXJ0VG9GKGZvcmVjYXN0LmdldEN1cnJlbnRGZWVsc0xpa2UoKSkpXG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudFdpbmRTcGVlZCh1dGlscy5jb252ZXJ0VG9NcGgoZm9yZWNhc3QuZ2V0Q3VycmVudFdpbmRTcGVlZCgpKSlcbiAgICBzdGF0ZS51bml0cyA9ICdpbXBlcmlhbCdcbiAgICBjb252ZXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ0Rpc3BsYXkgwrBDJ1xuICB9ZWxzZXtcbiAgICBmb3JlY2FzdC5zZXRDdXJyZW50VGVtcCh1dGlscy5jb252ZXJ0VG9DKGZvcmVjYXN0LmdldEN1cnJlbnRUZW1wKCkpKVxuICAgIGZvcmVjYXN0LnNldEN1cnJlbnRGZWVsc0xpa2UodXRpbHMuY29udmVydFRvQyhmb3JlY2FzdC5nZXRDdXJyZW50RmVlbHNMaWtlKCkpKVxuICAgIGZvcmVjYXN0LnNldEN1cnJlbnRXaW5kU3BlZWQodXRpbHMuY29udmVydFRvS21waChmb3JlY2FzdC5nZXRDdXJyZW50V2luZFNwZWVkKCkpKVxuICAgIHN0YXRlLnVuaXRzID0gJ21ldHJpYydcbiAgICBjb252ZXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ0Rpc3BsYXkgwrBGJ1xuICB9XG4gIGxvYWRET00oZm9yZWNhc3QsIHdlYXRoZXIpXG59XG5cbmV4cG9ydCB7bG9hZERPTSwgc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbiwgY29udmVydEJ1dHRvbiwgY29udmVydFVuaXRzfSIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5mdW5jdGlvbiBnZXRJY29uKGNvZGUpIHtcbiAgY29uc3QgY29kZXMgPSB7XG4gICAgXCIwMWRcIjogXCIuL2ltZ3Mvc3VuLnN2Z1wiLFxuICAgIFwiMDFuXCI6IFwiLi9pbWdzL21vb24uc3ZnXCIsXG4gICAgXCIwMmRcIjogXCIuL2ltZ3MvY2xvdWR5LWRheS5zdmdcIixcbiAgICBcIjAyblwiOiBcIi4vaW1ncy9jbG91ZHktbmlnaHQuc3ZnXCIsXG4gICAgXCIwM2RcIjogXCIuL2ltZ3MvY2xvdWQuc3ZnXCIsXG4gICAgXCIwM25cIjogXCIuL2ltZ3MvY2xvdWQuc3ZnXCIsXG4gICAgXCIwNGRcIjogXCIuL2ltZ3MvY2xvdWR5LnN2Z1wiLFxuICAgIFwiMDRuXCI6IFwiLi9pbWdzL2Nsb3VkeS5zdmdcIixcbiAgICBcIjA5ZFwiOiBcIi4vaW1ncy9yYWlueS5zdmdcIixcbiAgICBcIjA5blwiOiBcIi4vaW1ncy9yYWlueS5zdmdcIixcbiAgICBcIjEwZFwiOiBcIi4vaW1ncy9yYWlueS5zdmdcIixcbiAgICBcIjEwblwiOiBcIi4vaW1ncy9yYWlueS5zdmdcIixcbiAgICBcIjExZFwiOiBcIi4vaW1ncy9saWdodG5pbmcuc3ZnXCIsXG4gICAgXCIxMW5cIjogXCIuL2ltZ3MvbGlnaHRuaW5nLnN2Z1wiLFxuICAgIFwiMTNkXCI6IFwiLi9pbWdzL3Nub3cuc3ZnXCIsXG4gICAgXCIxM25cIjogXCIuL2ltZ3Mvc25vdy5zdmdcIixcbiAgICBcIjUwZFwiOiBcIi4vaW1ncy9taXN0LnN2Z1wiLFxuICAgIFwiNTBuXCI6IFwiLi9pbWdzL21pc3Quc3ZnXCIsXG4gIH07XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKDEwMCk7XG4gIGltYWdlLnNyYyA9IGNvZGVzW2NvZGVdO1xuICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICAuc3BsaXQoXCIgXCIpXG4gICAgLm1hcCgod29yZCkgPT4ge1xuICAgICAgcmV0dXJuIHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpO1xuICAgIH0pXG4gICAgLmpvaW4oXCIgXCIpO1xufVxuXG5mdW5jdGlvbiB0b0RhdGVUaW1lKHNlY29uZHMsIHRpbWV6b25lKSB7XG4gIGNvbnN0IHQgPSBuZXcgRGF0ZSgxOTcwLCAwLCAxKTtcbiAgdC5zZXRTZWNvbmRzKHNlY29uZHMpO1xuICByZXR1cm4ge1xuICAgIGRhdGU6IHQudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgICAgd2Vla2RheTogXCJzaG9ydFwiLFxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH0pLFxuICAgIHRpbWU6IGBUaW1lOiAke3QudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICB9KX1gLFxuICB9O1xufVxuXG5mdW5jdGlvbiB0b1JlYWRhYmxlVGltZSh0aW1lKSB7XG4gIHRpbWUuc3BsaXQoXCIgXCIpO1xufVxuXG5mdW5jdGlvbiB0b1JlYWRhYmxlVGVtcCh0ZW1wKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHRlbXApO1xufVxuXG5mdW5jdGlvbiByb3VuZFRvT25lKHZhbCkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiAxMCkgLyAxMDtcbn1cblxuZnVuY3Rpb24gc2V0VGVtcFVuaXRzKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS51bml0cyA9PT0gXCJtZXRyaWNcIiA/IFwiwrBDXCIgOiBcIsKwRlwiO1xufVxuZnVuY3Rpb24gc2V0U3BlZWRVbml0cyhzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUudW5pdHMgPT09IFwibWV0cmljXCIgPyBcImttL2hcIiA6IFwibXBoXCI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0YodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICogMS44ICsgMzI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0ModmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIDMyKSAvIDEuODtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvTXBoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAvIDEuNjA5MzQ0O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9LbXBoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAqIDEuNjA5MzQ0O1xufVxuXG5mdW5jdGlvbiBmaWxsRGFpbHkoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkdDogaXRlbS5kdCxcbiAgICAgIG1heFRlbXA6IGl0ZW0udGVtcC5tYXgsXG4gICAgICBtaW5UZW1wOiBpdGVtLnRlbXAubWluLFxuICAgICAgaWNvbjogaXRlbS53ZWF0aGVyWzBdLmljb24sXG4gICAgICBnZXREYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDE5NzAsIDAsIDEpO1xuICAgICAgICBkYXRlLnNldFNlY29uZHModGhpcy5kdCk7XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnZXREYXRlOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMTk3MCwgMCwgMSk7XG4gICAgICAgIGRhdGUuc2V0U2Vjb25kcyh0aGlzLmR0KVxuICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJyx7XG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydERhaWx5KGFycmF5KXtcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSk9PntcbiAgICByZXR1cm4ge1xuICAgICAgZHQ6IGl0ZW0uZHQsXG4gICAgICBtYXhUZW1wOiAoKCk9PntcbiAgICAgICAgaWYoc3RhdGUudW5pdHMgPT09ICdtZXRyaWMnKXtcbiAgICAgICAgICByZXR1cm4gY29udmVydFRvRihpdGVtLm1heFRlbXApXG4gICAgICAgIH1cbiAgICAgICAgaWYoc3RhdGUudW5pdHMgPT09ICdpbXBlcmlhbCcpe1xuICAgICAgICAgIHJldHVybiBjb252ZXJ0VG9DKGl0ZW0ubWF4VGVtcClcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICAgIG1pblRlbXA6ICgoKT0+e1xuICAgICAgICBpZihzdGF0ZS51bml0cyA9PT0gJ21ldHJpYycpe1xuICAgICAgICAgIHJldHVybiBjb252ZXJ0VG9GKGl0ZW0ubWluVGVtcClcbiAgICAgICAgfVxuICAgICAgICBpZihzdGF0ZS51bml0cyA9PT0gJ2ltcGVyaWFsJyl7XG4gICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0MoaXRlbS5taW5UZW1wKVxuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgZ2V0RGF5OiBpdGVtLmdldERheSxcbiAgICAgIGdldERhdGU6IGl0ZW0uZ2V0RGF0ZSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZpbGxIb3VybHkoYXJyYXkpe1xuICBjb25zdCBhcnIgPSBhcnJheS5zcGxpY2UoMCwgMjQpXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCB0ZW1wID0gYXJyLm1hcChpdGVtPT57XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWV6b25lOiBzdGF0ZS5mb3JlY2FzdC5mb3JlY2FzdC50aW1lem9uZSxcbiAgICAgIGR0OiBpdGVtLmR0LFxuICAgICAgdGVtcDogaXRlbS50ZW1wLFxuICAgICAgaWNvbjogaXRlbS53ZWF0aGVyWzBdLmljb24sXG4gICAgICBnZXRIb3VyOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMTk3MCwgMCwgMSlcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKHRoaXMuZHQpO1xuICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLHtcbiAgICAgICAgICB0aW1lWm9uZTogdGhpcy50aW1lem9uZSxcbiAgICAgICAgICBob3VyMTI6IHRydWUsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9KVxuICB3aGlsZSh0ZW1wLmxlbmd0aCl7XG4gICAgcmVzdWx0LnB1c2godGVtcC5zcGxpY2UoMCw4KSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRIb3VybHkoYXJyYXkpe1xuICBjb25zdCB0ZW1wID0gW107XG4gIGZvcihsZXQgYXJyIG9mIGFycmF5KXtcbiAgICB0ZW1wLnB1c2goYXJyLm1hcCgoaXRlbSk9PntcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpbWV6b25lOiBpdGVtLnRpbWV6b25lLFxuICAgICAgICBkdDogaXRlbS5kdCxcbiAgICAgICAgdGVtcDogKCgpPT57XG4gICAgICAgICAgaWYoc3RhdGUudW5pdHMgPT09ICdtZXRyaWMnKXtcbiAgICAgICAgICAgIHJldHVybiBjb252ZXJ0VG9GKGl0ZW0udGVtcClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoc3RhdGUudW5pdHMgPT09ICdpbXBlcmlhbCcpe1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0MoaXRlbS50ZW1wKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKSxcbiAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICBnZXRIb3VyOiBpdGVtLmdldEhvdXIsXG4gICAgICB9XG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIHRlbXA7XG4gXG59XG5cbmV4cG9ydCB7XG4gIGdldEljb24sXG4gIGNhcGl0YWxpemUsXG4gIHRvRGF0ZVRpbWUsXG4gIHRvUmVhZGFibGVUZW1wLFxuICB0b1JlYWRhYmxlVGltZSxcbiAgcm91bmRUb09uZSxcbiAgc2V0VGVtcFVuaXRzLFxuICBzZXRTcGVlZFVuaXRzLFxuICBjb252ZXJ0VG9GLFxuICBjb252ZXJ0VG9DLFxuICBjb252ZXJ0VG9NcGgsXG4gIGNvbnZlcnRUb0ttcGgsXG4gIGZpbGxEYWlseSxcbiAgY29udmVydERhaWx5LFxuICBmaWxsSG91cmx5LFxuICBjb252ZXJ0SG91cmx5XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9