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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/SF-UI-Display-Regular.otf */ "./src/fonts/SF-UI-Display-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/background/background3.jpg */ "./src/imgs/background/background3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Prosto one';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")  format('truetype');\n  font-weight: 200;\n  font-style: normal;\n}\n\n@font-face{\n  font-family: 'San Francisco';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")  format(\"opentype\");\n}\n\n:root{\n  font-size: 15px;\n}\n\n*{\n  -border: 1px dashed white;\n\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;  \n  -font-family: 'Prosto one';\n  font-family: 'San Francisco';\n}\n\nbody{\n background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n background-size: cover;\n background-position: center;\n background-repeat: no-repeat;\n\n -background-color: black;\n\n min-height: 100vh;\n color: white;\n \n display: flex;\n flex-direction: column;\n}\n\n\ndiv.main-container{\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n\n  padding: 80px 0;\n}\n/*****************************************************************************************/\n/*UPPER BOX*/\n.upper-box{\n  -border: 1px solid white;\n  padding: 20px 20px 20px 40px;\n\n  flex: 1;\n  width: 85%;\n\n  display: flex;\n  justify-content: space-around;\n}\n/*****************************************************************************************/\n/*RIGHT*/\n.right.upper-bar{\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#precipitation, .details_info>h1{\n  font-weight: lighter;\n}\n#temperature{\n  padding: 15px 0;\n  font-size: 4rem;\n}\n#convert-temp{\n  border: none;\n  background-color: none;\n  font-size: 1rem;\n  text-align: start;\n\n  padding-bottom: 2px;\n  border-bottom: 2px solid white;\n  \n  align-self: flex-start;\n  cursor: pointer;\n}\n#weather-icon{\n  padding: 15px 0;\n}\n.search-container{\n  display: flex;\n  align-items: center;\n  align-self: flex-start;\n  padding-bottom: 2px;\n  border-bottom: 2px solid white;\n}\ninput[type=text]{\nfont-size: 1rem;\nbackground-color: rgba(250, 235, 215, 0);\nborder: none;\ncolor: white;\npadding: 0 5px;\nwidth: 150px;\n}\ninput[type=text]:focus{\n  color: white;\n  border: none;\n  outline: none;\n}\n#search-btn{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n#search-btn>img{\n  width: 25px;\n}\n\n/*CENTER*/\n.center.upper-bar{\n  flex: 3;\n}\n/*LEFT*/\n.left.upper-bar{\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 15px;\n\n}\n.weather-details{\n  display: flex;\n  gap: 10px;\n}\n.details_icon{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.details_icon>img{\n  width: 40px;\n}\n.details_info{\n  flex:1;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n}\n/*****************************************************************************************/\n/*LOWER BOX*/\n.lower-box{\n  -border: 1px solid white;\n  padding: 20px 40px 40px 40px;\n\n  width: 85%;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px\n}\n.interface{\n  display: flex;\n  gap: 25px;\n}\n.interface-btn{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.selected{\n  border: 2px solid white;\n}\n.change_left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.change_left>img, .change_right>img{\n  height: 25px;\n  cursor: pointer;\n}\n.dot{\n  position: relative;\n  top: -1px;\n  height: 15px;\n  width: 15px;\n  border: 2px solid white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.dot-selected{\n  background-color: white;\n}\n.change-hours{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.show{\n  display: flex;\n}\n.hide{\n  display: none;\n}\n.forecasts-block{\n  display: flex;\n  justify-content: space-between;\n}\n.daily-forecast, .hourly-forecast{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.daily_icon{\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n}\n.daily_icon>img{\n  width: 50px;\n  align-self: flex-end;\n}\n\n::placeholder{\n  color: white;\n}\n.hourly_time{\n  font-size: 1.5rem;\n}\n.hourly_temp{\n  font-size: 1.7rem;\n}\n.hourly_icon>img{\n  width: 50px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,gEAA6D;EAC7D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,gEAAiE;AACnE;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;;EAEzB,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;CACC,yDAA0D;CAC1D,sBAAsB;CACtB,2BAA2B;CAC3B,4BAA4B;;CAE5B,wBAAwB;;CAExB,iBAAiB;CACjB,YAAY;;CAEZ,aAAa;CACb,sBAAsB;AACvB;;;AAGA;EACE,OAAO;;EAEP,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;;EAET,eAAe;AACjB;AACA,0FAA0F;AAC1F,YAAY;AACZ;EACE,wBAAwB;EACxB,4BAA4B;;EAE5B,OAAO;EACP,UAAU;;EAEV,aAAa;EACb,6BAA6B;AAC/B;AACA,0FAA0F;AAC1F,QAAQ;AACR;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,eAAe;AACjB;AACA;EACE,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,iBAAiB;;EAEjB,mBAAmB;EACnB,8BAA8B;;EAE9B,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;AACA,eAAe;AACf,wCAAwC;AACxC,YAAY;AACZ,YAAY;AACZ,cAAc;AACd,YAAY;AACZ;AACA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,WAAW;AACb;;AAEA,SAAS;AACT;EACE,OAAO;AACT;AACA,OAAO;AACP;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,SAAS;;AAEX;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,WAAW;AACb;AACA;EACE,MAAM;;EAEN,aAAa;EACb,sBAAsB;EACtB,QAAQ;;AAEV;AACA,0FAA0F;AAC1F,YAAY;AACZ;EACE,wBAAwB;EACxB,4BAA4B;;EAE5B,UAAU;EACV,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB;AACF;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,OAAO;EACP,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;AACb","sourcesContent":["@font-face {\n  font-family: 'Prosto one';\n  src: url('./fonts/ProstoOne-Regular.ttf')  format('truetype');\n  font-weight: 200;\n  font-style: normal;\n}\n\n@font-face{\n  font-family: 'San Francisco';\n  src: url('./fonts/SF-UI-Display-Regular.otf')  format(\"opentype\");\n}\n\n:root{\n  font-size: 15px;\n}\n\n*{\n  -border: 1px dashed white;\n\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;  \n  -font-family: 'Prosto one';\n  font-family: 'San Francisco';\n}\n\nbody{\n background-image: url(\"./imgs/background/background3.jpg\");\n background-size: cover;\n background-position: center;\n background-repeat: no-repeat;\n\n -background-color: black;\n\n min-height: 100vh;\n color: white;\n \n display: flex;\n flex-direction: column;\n}\n\n\ndiv.main-container{\n  flex: 1;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n\n  padding: 80px 0;\n}\n/*****************************************************************************************/\n/*UPPER BOX*/\n.upper-box{\n  -border: 1px solid white;\n  padding: 20px 20px 20px 40px;\n\n  flex: 1;\n  width: 85%;\n\n  display: flex;\n  justify-content: space-around;\n}\n/*****************************************************************************************/\n/*RIGHT*/\n.right.upper-bar{\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n#precipitation, .details_info>h1{\n  font-weight: lighter;\n}\n#temperature{\n  padding: 15px 0;\n  font-size: 4rem;\n}\n#convert-temp{\n  border: none;\n  background-color: none;\n  font-size: 1rem;\n  text-align: start;\n\n  padding-bottom: 2px;\n  border-bottom: 2px solid white;\n  \n  align-self: flex-start;\n  cursor: pointer;\n}\n#weather-icon{\n  padding: 15px 0;\n}\n.search-container{\n  display: flex;\n  align-items: center;\n  align-self: flex-start;\n  padding-bottom: 2px;\n  border-bottom: 2px solid white;\n}\ninput[type=text]{\nfont-size: 1rem;\nbackground-color: rgba(250, 235, 215, 0);\nborder: none;\ncolor: white;\npadding: 0 5px;\nwidth: 150px;\n}\ninput[type=text]:focus{\n  color: white;\n  border: none;\n  outline: none;\n}\n#search-btn{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n#search-btn>img{\n  width: 25px;\n}\n\n/*CENTER*/\n.center.upper-bar{\n  flex: 3;\n}\n/*LEFT*/\n.left.upper-bar{\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 15px;\n\n}\n.weather-details{\n  display: flex;\n  gap: 10px;\n}\n.details_icon{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.details_icon>img{\n  width: 40px;\n}\n.details_info{\n  flex:1;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n}\n/*****************************************************************************************/\n/*LOWER BOX*/\n.lower-box{\n  -border: 1px solid white;\n  padding: 20px 40px 40px 40px;\n\n  width: 85%;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px\n}\n.interface{\n  display: flex;\n  gap: 25px;\n}\n.interface-btn{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.selected{\n  border: 2px solid white;\n}\n.change_left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.change_left>img, .change_right>img{\n  height: 25px;\n  cursor: pointer;\n}\n.dot{\n  position: relative;\n  top: -1px;\n  height: 15px;\n  width: 15px;\n  border: 2px solid white;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.dot-selected{\n  background-color: white;\n}\n.change-hours{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.show{\n  display: flex;\n}\n.hide{\n  display: none;\n}\n.forecasts-block{\n  display: flex;\n  justify-content: space-between;\n}\n.daily-forecast, .hourly-forecast{\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.daily_icon{\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n}\n.daily_icon>img{\n  width: 50px;\n  align-self: flex-end;\n}\n\n::placeholder{\n  color: white;\n}\n.hourly_time{\n  font-size: 1.5rem;\n}\n.hourly_temp{\n  font-size: 1.7rem;\n}\n.hourly_icon>img{\n  width: 50px;\n}"],"sourceRoot":""}]);
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
  _modules_upperdom__WEBPACK_IMPORTED_MODULE_3__.searchInput.value = '';
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
    console.log(err)
    return 'dushanbe';
  }
}

async function requestWeather(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`
    );
    return await response.json();
  } catch (err) {
    console.log(err);
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
    console.log(err);
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
  const t = new Date()
  t.setTime(seconds*1000)
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
        const date = new Date();
        date.setTime(this.dt * 1000);
        return date.toLocaleDateString("en-US", {
          weekday: "long",
        });
      },
      getDate: function () {
        const date = new Date();
        date.setTime(this.dt * 1000);
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        });
      },
    };
  });
}

function convertDaily(array) {
  return array.map((item) => {
    return {
      dt: item.dt,
      maxTemp: (() => {
        if (_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === "metric") {
          return convertToF(item.maxTemp);
        }
        if (_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === "imperial") {
          return convertToC(item.maxTemp);
        }
      })(),
      minTemp: (() => {
        if (_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === "metric") {
          return convertToF(item.minTemp);
        }
        if (_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === "imperial") {
          return convertToC(item.minTemp);
        }
      })(),
      icon: item.icon,
      getDay: item.getDay,
      getDate: item.getDate,
    };
  });
}

function fillHourly(array) {
  const arr = array.splice(0, 24);
  const result = [];
  const temp = arr.map((item) => {
    return {
      timezone: _classes__WEBPACK_IMPORTED_MODULE_0__.state.forecast.forecast.timezone,
      dt: item.dt,
      temp: item.temp,
      icon: item.weather[0].icon,
      getHour: function () {
        const date = new Date();
        date.setTime(this.dt * 1000);
        return date.toLocaleTimeString("en-US", {
          timeZone: this.timezone,
          hour12: true,
          hour: "numeric",
        });
      },
    };
  });
  while (temp.length) {
    result.push(temp.splice(0, 8));
  }
  return result;
}

function convertHourly(array) {
  const temp = [];
  for (let arr of array) {
    temp.push(
      arr.map((item) => {
        return {
          timezone: item.timezone,
          dt: item.dt,
          temp: (() => {
            if (_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === "metric") {
              return convertToF(item.temp);
            }
            if (_classes__WEBPACK_IMPORTED_MODULE_0__.state.units === "imperial") {
              return convertToC(item.temp);
            }
          })(),
          icon: item.icon,
          getHour: item.getHour,
        };
      })
    );
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

/***/ "./src/fonts/SF-UI-Display-Regular.otf":
/*!*********************************************!*\
  !*** ./src/fonts/SF-UI-Display-Regular.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "696eab3309b55104976e.otf";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsTUFBTSxZQUFZLFdBQVcsS0FBSyxZQUFZLGNBQWMsV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFlBQVksWUFBWSxLQUFLLFlBQVksV0FBVyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLHFDQUFxQyw4QkFBOEIsa0VBQWtFLHFCQUFxQix1QkFBdUIsR0FBRyxlQUFlLGlDQUFpQyx3RUFBd0UsR0FBRyxVQUFVLG9CQUFvQixHQUFHLE1BQU0sOEJBQThCLGdCQUFnQixlQUFlLDZCQUE2QiwrQkFBK0IsaUNBQWlDLEdBQUcsU0FBUyxnRUFBZ0UsMEJBQTBCLCtCQUErQixnQ0FBZ0MsOEJBQThCLHVCQUF1QixnQkFBZ0Isb0JBQW9CLDBCQUEwQixHQUFHLHlCQUF5QixZQUFZLG9CQUFvQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixjQUFjLHNCQUFzQixHQUFHLHlIQUF5SCw2QkFBNkIsaUNBQWlDLGNBQWMsZUFBZSxvQkFBb0Isa0NBQWtDLEdBQUcsMkhBQTJILGlCQUFpQixrQkFBa0IsMkJBQTJCLGFBQWEsR0FBRyxxQ0FBcUMseUJBQXlCLEdBQUcsZUFBZSxvQkFBb0Isb0JBQW9CLEdBQUcsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsb0JBQW9CLHNCQUFzQiwwQkFBMEIsbUNBQW1DLCtCQUErQixvQkFBb0IsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsb0JBQW9CLGtCQUFrQix3QkFBd0IsMkJBQTJCLHdCQUF3QixtQ0FBbUMsR0FBRyxtQkFBbUIsa0JBQWtCLDJDQUEyQyxlQUFlLGVBQWUsaUJBQWlCLGVBQWUsR0FBRyx5QkFBeUIsaUJBQWlCLGlCQUFpQixrQkFBa0IsR0FBRyxjQUFjLGtCQUFrQix3QkFBd0IsNEJBQTRCLG9CQUFvQixHQUFHLGtCQUFrQixnQkFBZ0IsR0FBRyxrQ0FBa0MsWUFBWSxHQUFHLDRCQUE0QixpQkFBaUIsa0JBQWtCLDJCQUEyQixnQ0FBZ0MsY0FBYyxLQUFLLG1CQUFtQixrQkFBa0IsY0FBYyxHQUFHLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLG9CQUFvQixnQkFBZ0IsR0FBRyxnQkFBZ0IsV0FBVyxvQkFBb0IsMkJBQTJCLGFBQWEsS0FBSyx5SEFBeUgsNkJBQTZCLGlDQUFpQyxpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLGFBQWEsa0JBQWtCLGNBQWMsR0FBRyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLFlBQVksNEJBQTRCLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLHNDQUFzQyxpQkFBaUIsb0JBQW9CLEdBQUcsT0FBTyx1QkFBdUIsY0FBYyxpQkFBaUIsZ0JBQWdCLDRCQUE0Qix1QkFBdUIsb0JBQW9CLEdBQUcsZ0JBQWdCLDRCQUE0QixHQUFHLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLEdBQUcsUUFBUSxrQkFBa0IsR0FBRyxRQUFRLGtCQUFrQixHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLEdBQUcsb0NBQW9DLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLGNBQWMsWUFBWSxrQkFBa0IsMEJBQTBCLEdBQUcsa0JBQWtCLGdCQUFnQix5QkFBeUIsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxlQUFlLHNCQUFzQixHQUFHLG1CQUFtQixnQkFBZ0IsR0FBRyxtQkFBbUI7QUFDdmdWO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNvRTtBQUN4QjtBQUNxQztBQUNzQzs7QUFFNUksUUFBUSxNQUFNO0FBQ2Q7O0FBRUEsMkVBQTRCO0FBQzVCLEVBQUUseURBQVc7QUFDYixDQUFDOztBQUVELDRFQUE2QjtBQUM3QixFQUFFLDJEQUFhLE9BQU8seURBQVc7QUFDakMsVUFBVSw0REFBYyxDQUFDLHlEQUFXLEVBQUUseURBQVc7QUFDakQ7QUFDQSxFQUFFLDREQUFjLE9BQU8sc0RBQVE7QUFDL0IsVUFBVSw2REFBZSxDQUFDLHlEQUFXLEVBQUUseURBQVc7QUFDbEQ7QUFDQSxFQUFFLHFFQUF1QjtBQUN6QixFQUFFLHNFQUF3Qjs7QUFFMUIsRUFBRSwwREFBTyxDQUFDLDREQUFjLEVBQUUsMkRBQWE7QUFDdkMsTUFBTSw2RUFBOEI7QUFDcEMsSUFBSSw4REFBVyxDQUFDLG1EQUFLO0FBQ3JCLElBQUk7QUFDSixJQUFJLCtEQUFZLENBQUMsbURBQUssRUFBRSx5REFBVztBQUNuQztBQUNBLEVBQUUsZ0VBQWlCO0FBQ25CLENBQUM7O0FBRUQsNkVBQThCO0FBQzlCLEVBQUUsOEVBQWdDO0FBQ2xDLEVBQUUsK0VBQWlDO0FBQ25DLEVBQUUsK0RBQVksQ0FBQyxtREFBSztBQUNwQixNQUFNLDZFQUE4QjtBQUNwQyxJQUFJLDhEQUFXLENBQUMsbURBQUs7QUFDckIsSUFBSTtBQUNKLElBQUksK0RBQVksQ0FBQyxtREFBSyxFQUFFLHlEQUFXO0FBQ25DO0FBQ0EsQ0FBQzs7QUFFRCwyRUFBNEI7QUFDNUI7QUFDQSxFQUFFLHlEQUFNO0FBQ1IsQ0FBQzs7QUFFRCw0RUFBNkI7QUFDN0I7QUFDQSxFQUFFLHlEQUFNO0FBQ1IsRUFBRSwrREFBWSxDQUFDLG1EQUFLLEVBQUUseURBQVc7QUFDakMsQ0FBQzs7QUFFRCwyREFBWTtBQUNaO0FBQ0E7QUFDQSxJQUFJLHlEQUFXO0FBQ2YsSUFBSSw2REFBVSxDQUFDLHlEQUFXO0FBQzFCLElBQUksK0RBQVksQ0FBQyxtREFBSyxFQUFFLHlEQUFXO0FBQ25DLEdBQUc7QUFDSCxDQUFDOztBQUVELDBFQUEyQjtBQUMzQixNQUFNLHlEQUFXO0FBQ2pCLElBQUkseURBQVc7QUFDZixJQUFJLDZEQUFVLENBQUMseURBQVc7QUFDMUIsSUFBSSwrREFBWSxDQUFDLG1EQUFLLEVBQUUseURBQVc7QUFDbkMsSUFBSTtBQUNKLENBQUM7O0FBRUQseUVBQTBCO0FBQzFCLE1BQU0seURBQVc7QUFDakIsSUFBSSx5REFBVztBQUNmLElBQUksNkRBQVUsQ0FBQyx5REFBVztBQUMxQixJQUFJLCtEQUFZLENBQUMsbURBQUssRUFBRSx5REFBVztBQUNuQyxJQUFJO0FBQ0osQ0FBQzs7QUFFRDtBQUNBLHlEQUFXLFNBQVMsb0VBQXNCOztBQUUxQztBQUNBLEVBQUUsMkRBQWEsT0FBTyx5REFBVztBQUNqQyxVQUFVLDREQUFjLENBQUMseURBQVcsRUFBRSx5REFBVztBQUNqRDtBQUNBLEVBQUUsNERBQWMsT0FBTyxzREFBUTtBQUMvQixVQUFVLDZEQUFlLENBQUMseURBQVcsRUFBRSx5REFBVztBQUNsRDtBQUNBLEVBQUUscUVBQXVCO0FBQ3pCLEVBQUUsc0VBQXdCOztBQUUxQixFQUFFLDBEQUFPLENBQUMsNERBQWMsRUFBRSwyREFBYTtBQUN2QyxFQUFFLDhEQUFXLENBQUMsbURBQUs7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxLQUFLLFNBQVMsTUFBTSxTQUFTLE9BQU87QUFDL0Y7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFdBQVcsT0FBTyxXQUFXLGlDQUFpQyxNQUFNLFNBQVMsT0FBTztBQUNqSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEQ1Qzs7QUFFakM7QUFDQSxhQUFhO0FBQ2IsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4Q0FBZ0I7QUFDM0I7O0FBRUE7QUFDQSxXQUFXLDhDQUFnQjtBQUMzQjs7QUFFQTtBQUNBLFdBQVcsa0RBQW9CO0FBQy9COztBQUVBO0FBQ0EsV0FBVywyQ0FBYTtBQUN4Qjs7QUFFQTtBQUNBLFdBQVcsa0RBQW9CO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDhDQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw2Q0FBZTtBQUNqRDs7QUFFQTtBQUNBLGtDQUFrQyxnREFBa0I7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhDQUFnQjtBQUNuRDs7QUFFQTtBQUNBLG1DQUFtQyxpREFBbUI7QUFDdEQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RmlDO0FBQ0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CLDRCQUE0QixLQUFLO0FBQ2pDO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQW9CO0FBQ3REO0FBQ0EsT0FBTyxFQUFFLGdEQUFrQixDQUFDLDJDQUFLLEVBQUU7QUFDbkMsZ0NBQWdDLGtEQUFvQjtBQUNwRDtBQUNBLE9BQU8sRUFBRSxnREFBa0IsQ0FBQywyQ0FBSyxFQUFFO0FBQ25DO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQWEsV0FBVztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CO0FBQ2xELCtCQUErQixrREFBb0IsUUFBUSxFQUFFLGdEQUFrQjtBQUMvRSxJQUFJLDJDQUFLO0FBQ1QsSUFBSTtBQUNKO0FBQ0Esa0JBQWtCLDJDQUFhLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQUs7QUFDckIsSUFBSTtBQUNKO0FBQ0E7QUFDQSxpQkFBaUIsMkNBQUssRUFBRSxpREFBVztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHOEI7QUFDQTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyQkFBMkIsRUFBRSxnREFBa0IsQ0FBQywyQ0FBSyxFQUFFO0FBQ3ZGO0FBQ0E7O0FBRUEsNkJBQTZCLGdDQUFnQyxFQUFFLGdEQUFrQixDQUFDLDJDQUFLLEVBQUU7QUFDekYsNEJBQTRCLCtCQUErQjtBQUMzRCxnQ0FBZ0MsbUNBQW1DO0FBQ25FLDZCQUE2QixnQ0FBZ0MsRUFBRSxpREFBbUIsQ0FBQywyQ0FBSyxFQUFFO0FBQzFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFnQjtBQUM1QyxpQ0FBaUMsOENBQWdCO0FBQ2pELGlDQUFpQyxnREFBa0I7QUFDbkQ7QUFDQTtBQUNBLEdBQUc7QUFDSCw0QkFBNEIsOENBQWdCO0FBQzVDLGlDQUFpQyw4Q0FBZ0I7QUFDakQsaUNBQWlDLGlEQUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksaURBQVc7QUFDdkI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFlBQVksaURBQVc7QUFDdkI7QUFDQTtBQUNBLFlBQVksaURBQVc7QUFDdkI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNFQUFnQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVc7QUFDM0I7QUFDQTtBQUNBLGdCQUFnQixpREFBVztBQUMzQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFtQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbG93ZXJkb20uanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3VwcGVyZG9tLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Qcm9zdG9PbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1NGLVVJLURpc3BsYXktUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvYmFja2dyb3VuZC9iYWNrZ3JvdW5kMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQcm9zdG8gb25lJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSAgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZXtcXG4gIGZvbnQtZmFtaWx5OiAnU2FuIEZyYW5jaXNjbyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuXFxuOnJvb3R7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbip7XFxuICAtYm9yZGVyOiAxcHggZGFzaGVkIHdoaXRlO1xcblxcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcXG4gIC1mb250LWZhbWlseTogJ1Byb3N0byBvbmUnO1xcbiAgZm9udC1mYW1pbHk6ICdTYW4gRnJhbmNpc2NvJztcXG59XFxuXFxuYm9keXtcXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAtYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiBjb2xvcjogd2hpdGU7XFxuIFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG5kaXYubWFpbi1jb250YWluZXJ7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuXFxuICBwYWRkaW5nOiA4MHB4IDA7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKlVQUEVSIEJPWCovXFxuLnVwcGVyLWJveHtcXG4gIC1ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XFxuXFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDg1JTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qUklHSFQqL1xcbi5yaWdodC51cHBlci1iYXJ7XFxuICB3aWR0aDogMzUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4jcHJlY2lwaXRhdGlvbiwgLmRldGFpbHNfaW5mbz5oMXtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG4jdGVtcGVyYXR1cmV7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcbiNjb252ZXJ0LXRlbXB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jd2VhdGhlci1pY29ue1xcbiAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcbmlucHV0W3R5cGU9dGV4dF17XFxuZm9udC1zaXplOiAxcmVtO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMzUsIDIxNSwgMCk7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOiB3aGl0ZTtcXG5wYWRkaW5nOiAwIDVweDtcXG53aWR0aDogMTUwcHg7XFxufVxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXN7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jc2VhcmNoLWJ0bntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNzZWFyY2gtYnRuPmltZ3tcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4vKkNFTlRFUiovXFxuLmNlbnRlci51cHBlci1iYXJ7XFxuICBmbGV4OiAzO1xcbn1cXG4vKkxFRlQqL1xcbi5sZWZ0LnVwcGVyLWJhcntcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxNXB4O1xcblxcbn1cXG4ud2VhdGhlci1kZXRhaWxze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmRldGFpbHNfaWNvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kZXRhaWxzX2ljb24+aW1ne1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcbi5kZXRhaWxzX2luZm97XFxuICBmbGV4OjE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcblxcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLypMT1dFUiBCT1gqL1xcbi5sb3dlci1ib3h7XFxuICAtYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHggNDBweCA0MHB4O1xcblxcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweFxcbn1cXG4uaW50ZXJmYWNle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjVweDtcXG59XFxuLmludGVyZmFjZS1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VsZWN0ZWR7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmNoYW5nZV9sZWZ0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNoYW5nZV9sZWZ0PmltZywgLmNoYW5nZV9yaWdodD5pbWd7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kb3R7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0xcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZG90LXNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5jaGFuZ2UtaG91cnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uc2hvd3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oaWRle1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmZvcmVjYXN0cy1ibG9ja3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kYWlseS1mb3JlY2FzdCwgLmhvdXJseS1mb3JlY2FzdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZGFpbHlfaWNvbntcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4uZGFpbHlfaWNvbj5pbWd7XFxuICB3aWR0aDogNTBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVye1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaG91cmx5X3RpbWV7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmhvdXJseV90ZW1we1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbi5ob3VybHlfaWNvbj5pbWd7XFxuICB3aWR0aDogNTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixnRUFBNkQ7RUFDN0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixnRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCOztFQUV6QixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0NBQ0MseURBQTBEO0NBQzFELHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsNEJBQTRCOztDQUU1Qix3QkFBd0I7O0NBRXhCLGlCQUFpQjtDQUNqQixZQUFZOztDQUVaLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7OztBQUdBO0VBQ0UsT0FBTzs7RUFFUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUzs7RUFFVCxlQUFlO0FBQ2pCO0FBQ0EsMEZBQTBGO0FBQzFGLFlBQVk7QUFDWjtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7O0VBRTVCLE9BQU87RUFDUCxVQUFVOztFQUVWLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQSwwRkFBMEY7QUFDMUYsUUFBUTtBQUNSO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixtQkFBbUI7RUFDbkIsOEJBQThCOztFQUU5QixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0FBQ0EsZUFBZTtBQUNmLHdDQUF3QztBQUN4QyxZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCxZQUFZO0FBQ1o7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsU0FBUztBQUNUO0VBQ0UsT0FBTztBQUNUO0FBQ0EsT0FBTztBQUNQO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFNBQVM7O0FBRVg7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLE1BQU07O0VBRU4sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFROztBQUVWO0FBQ0EsMEZBQTBGO0FBQzFGLFlBQVk7QUFDWjtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7O0VBRTVCLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQcm9zdG8gb25lJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1Byb3N0b09uZS1SZWd1bGFyLnR0ZicpICBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNle1xcbiAgZm9udC1mYW1pbHk6ICdTYW4gRnJhbmNpc2NvJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1NGLVVJLURpc3BsYXktUmVndWxhci5vdGYnKSAgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG46cm9vdHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuKntcXG4gIC1ib3JkZXI6IDFweCBkYXNoZWQgd2hpdGU7XFxuXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgIFxcbiAgLWZvbnQtZmFtaWx5OiAnUHJvc3RvIG9uZSc7XFxuICBmb250LWZhbWlseTogJ1NhbiBGcmFuY2lzY28nO1xcbn1cXG5cXG5ib2R5e1xcbiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1ncy9iYWNrZ3JvdW5kL2JhY2tncm91bmQzLmpwZ1xcXCIpO1xcbiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuIC1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gbWluLWhlaWdodDogMTAwdmg7XFxuIGNvbG9yOiB3aGl0ZTtcXG4gXFxuIGRpc3BsYXk6IGZsZXg7XFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcbmRpdi5tYWluLWNvbnRhaW5lcntcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG5cXG4gIHBhZGRpbmc6IDgwcHggMDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qVVBQRVIgQk9YKi9cXG4udXBwZXItYm94e1xcbiAgLWJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcXG5cXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogODUlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLypSSUdIVCovXFxuLnJpZ2h0LnVwcGVyLWJhcntcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNwcmVjaXBpdGF0aW9uLCAuZGV0YWlsc19pbmZvPmgxe1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcbiN0ZW1wZXJhdHVyZXtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuI2NvbnZlcnQtdGVtcHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG5cXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiN3ZWF0aGVyLWljb257XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XXtcXG5mb250LXNpemU6IDFyZW07XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIzNSwgMjE1LCAwKTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IHdoaXRlO1xcbnBhZGRpbmc6IDAgNXB4O1xcbndpZHRoOiAxNTBweDtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNzZWFyY2gtYnRue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3NlYXJjaC1idG4+aW1ne1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi8qQ0VOVEVSKi9cXG4uY2VudGVyLnVwcGVyLWJhcntcXG4gIGZsZXg6IDM7XFxufVxcbi8qTEVGVCovXFxuLmxlZnQudXBwZXItYmFye1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDE1cHg7XFxuXFxufVxcbi53ZWF0aGVyLWRldGFpbHN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZGV0YWlsc19pY29ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmRldGFpbHNfaWNvbj5pbWd7XFxuICB3aWR0aDogNDBweDtcXG59XFxuLmRldGFpbHNfaW5mb3tcXG4gIGZsZXg6MTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuXFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKkxPV0VSIEJPWCovXFxuLmxvd2VyLWJveHtcXG4gIC1ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggNDBweCA0MHB4IDQwcHg7XFxuXFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4XFxufVxcbi5pbnRlcmZhY2V7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG4uaW50ZXJmYWNlLWJ0bntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWxlY3RlZHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uY2hhbmdlX2xlZnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2hhbmdlX2xlZnQ+aW1nLCAuY2hhbmdlX3JpZ2h0PmltZ3tcXG4gIGhlaWdodDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvdHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTFweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kb3Qtc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmNoYW5nZS1ob3Vyc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5zaG93e1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmhpZGV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZm9yZWNhc3RzLWJsb2Nre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmRhaWx5LWZvcmVjYXN0LCAuaG91cmx5LWZvcmVjYXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5kYWlseV9pY29ue1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5kYWlseV9pY29uPmltZ3tcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbjo6cGxhY2Vob2xkZXJ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5ob3VybHlfdGltZXtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uaG91cmx5X3RlbXB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuLmhvdXJseV9pY29uPmltZ3tcXG4gIHdpZHRoOiA1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlcXVlc3RXZWF0aGVyLCByZXF1ZXN0Rm9yZWNhc3QsIHJlcXVlc3RDdXJyZW50TG9jYXRpb24sIH0gZnJvbSBcIi4vbW9kdWxlcy9hcGlcIjtcbmltcG9ydCB7IFdlYXRoZXJEYXRhLCBGb3JlY2FzdCwgc3RhdGUgfSBmcm9tIFwiLi9tb2R1bGVzL2NsYXNzZXNcIjtcbmltcG9ydCB7IGxvYWRET00sIHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24sIGNvbnZlcnRCdXR0b24sIGNvbnZlcnRVbml0cywgfSBmcm9tIFwiLi9tb2R1bGVzL3VwcGVyZG9tXCI7XG5pbXBvcnQgeyBkYWlseUJ1dHRvbiwgaGFuZGxlLCBoYW5kbGVEb3RzLCBob3VybHlCdXR0b24sIGFkZERhaWx5RE9NLCBhZGRIb3VybHlET00sIGRvdHMsIGxlZnRBcnJvdywgcmlnaHRBcnJvdywgfSBmcm9tIFwiLi9tb2R1bGVzL2xvd2VyZG9tXCI7XG5cbmNvbnN0IHsgbG9nIH0gPSBjb25zb2xlO1xubG9nKFwiQ3JlYXRpbmcgbmV3IHByb2plY3RcIik7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgc3RhdGUuaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbn0pO1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgc3RhdGUud2VhdGhlciA9IG5ldyBXZWF0aGVyRGF0YShcbiAgICBhd2FpdCByZXF1ZXN0V2VhdGhlcihzdGF0ZS5pbnB1dCwgc3RhdGUudW5pdHMpXG4gICk7XG4gIHN0YXRlLmZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KFxuICAgIGF3YWl0IHJlcXVlc3RGb3JlY2FzdChzdGF0ZS5pbnB1dCwgc3RhdGUudW5pdHMpXG4gICk7XG4gIHN0YXRlLmZvcmVjYXN0LnNldERhaWx5KCk7XG4gIHN0YXRlLmZvcmVjYXN0LnNldEhvdXJseSgpO1xuXG4gIGxvYWRET00oc3RhdGUuZm9yZWNhc3QsIHN0YXRlLndlYXRoZXIpO1xuICBpZiAoZGFpbHlCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICBhZGREYWlseURPTShzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgYWRkSG91cmx5RE9NKHN0YXRlLCBzdGF0ZS5pbmRleCk7XG4gIH1cbiAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbn0pO1xuXG5jb252ZXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXRlLmZvcmVjYXN0LnNldENvbnZlcnRlZERhaWx5KCk7XG4gIHN0YXRlLmZvcmVjYXN0LnNldENvbnZlcnRlZEhvdXJseSgpO1xuICBjb252ZXJ0VW5pdHMoc3RhdGUpO1xuICBpZiAoZGFpbHlCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICBhZGREYWlseURPTShzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgYWRkSG91cmx5RE9NKHN0YXRlLCBzdGF0ZS5pbmRleCk7XG4gIH1cbn0pO1xuXG5kYWlseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGhhbmRsZSh0YXJnZXQpO1xufSk7XG5cbmhvdXJseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGhhbmRsZSh0YXJnZXQpO1xuICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbn0pO1xuXG5kb3RzLmZvckVhY2goKGRvdCkgPT4ge1xuICBkb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmRvdDtcbiAgICBzdGF0ZS5pbmRleCA9IGluZGV4O1xuICAgIGhhbmRsZURvdHMoc3RhdGUuaW5kZXgpO1xuICAgIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xuICB9KTtcbn0pO1xuXG5yaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChzdGF0ZS5pbmRleCA8IDIpIHtcbiAgICBzdGF0ZS5pbmRleCsrO1xuICAgIGhhbmRsZURvdHMoc3RhdGUuaW5kZXgpO1xuICAgIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xuICB9IGVsc2UgcmV0dXJuO1xufSk7XG5cbmxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoc3RhdGUuaW5kZXggPiAwKSB7XG4gICAgc3RhdGUuaW5kZXgtLTtcbiAgICBoYW5kbGVEb3RzKHN0YXRlLmluZGV4KTtcbiAgICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbiAgfSBlbHNlIHJldHVybjtcbn0pO1xuXG4vLyBPbmxvYWQgd2l0aCBjdXJyZW50IHVzZXIgbG9jYXRpb25cbnN0YXRlLmlucHV0ID0gYXdhaXQgcmVxdWVzdEN1cnJlbnRMb2NhdGlvbigpO1xuXG4oYXN5bmMgKCkgPT4ge1xuICBzdGF0ZS53ZWF0aGVyID0gbmV3IFdlYXRoZXJEYXRhKFxuICAgIGF3YWl0IHJlcXVlc3RXZWF0aGVyKHN0YXRlLmlucHV0LCBzdGF0ZS51bml0cylcbiAgKTtcbiAgc3RhdGUuZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3QoXG4gICAgYXdhaXQgcmVxdWVzdEZvcmVjYXN0KHN0YXRlLmlucHV0LCBzdGF0ZS51bml0cylcbiAgKTtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0RGFpbHkoKTtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0SG91cmx5KCk7XG5cbiAgbG9hZERPTShzdGF0ZS5mb3JlY2FzdCwgc3RhdGUud2VhdGhlcik7XG4gIGFkZERhaWx5RE9NKHN0YXRlKTtcbn0pKCk7XG4iLCJcbi8vY29uc3QgYXBpS2V5ID0gXCIyMGY3NjMyZmZjMmMwMjI2NTRlNDA5M2M2OTQ3YjRmNFwiO1xuY29uc3QgYXBpS2V5ID0gJzMwNjlhZTI3MThlNDBmOGRjMTk5OGI3MjUwZTE2ZjEwJ1xuXG4vL1JlcXVlc3RpbmcgY3VycmVudCBsb2NhdGlvbiBpZiBmZXRjaCBmYWlscyB1c2UgZGVmYXVsdCB2YWx1ZVxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEN1cnJlbnRMb2NhdGlvbigpe1xuICB0cnl7XG4gIGNvbnN0IHJlc29sdmUgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcGFwaS5jby9qc29uLycpO1xuICBpZighcmVzb2x2ZS5vayl7XG4gICAgcmV0dXJuICdkdXNoYW5iZSdcbiAgfVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNvbHZlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdC5jaXR5XG4gIH1jYXRjaChlcnIpe1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgICByZXR1cm4gJ2R1c2hhbmJlJztcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0V2VhdGhlcihjaXR5LCB1bml0cykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPSR7dW5pdHN9JkFQUElEPSR7YXBpS2V5fWBcbiAgICApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn1cblxuLy8gY29vcmRzIGNhbWUgZnJvbSByZXF1ZXN0V2VhdGhlck5vd1xuLy8gdW5pdHMgJ2ltcGVyaWFsJyBvciAnbWV0cmljJ1xuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEZvcmVjYXN0KGlucHV0LCB1bml0cykge1xuICB0cnkge1xuICAgIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGdldENvb3JkcyhpbnB1dCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjb29yZHMubGF0fSZsb249JHtjb29yZHMubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX1gXG4gICAgKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZHMoY2l0eSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0V2VhdGhlcihjaXR5KTtcbiAgcmV0dXJuIHJlc3VsdC5jb29yZDtcbn1cblxuZXhwb3J0IHtyZXF1ZXN0V2VhdGhlciwgcmVxdWVzdEZvcmVjYXN0LCByZXF1ZXN0Q3VycmVudExvY2F0aW9uLCBnZXRDb29yZHMgfTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IHN0YXRlID0ge1xuICB3ZWF0aGVyOiB7fSxcbiAgZm9yZWNhc3Q6IHt9LFxuICB1bml0czogJ21ldHJpYycsIC8vaW1wZXJpYWxcbiAgaW5wdXQ6ICdJdmFub3ZvJyxcblxuICBkYWlseTogW10sXG4gIGhvdXJseTogW10sXG4gIGluZGV4OiAwLFxufVxuXG5jbGFzcyBXZWF0aGVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHdlYXRoZXIpIHtcbiAgICB0aGlzLndlYXRoZXIgPSB3ZWF0aGVyO1xuICB9XG4gIGdldFRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMud2VhdGhlci5uYW1lO1xuICB9XG59XG5cbmNsYXNzIEZvcmVjYXN0IHtcbiAgY29uc3RydWN0b3IoZm9yZWNhc3QpIHtcbiAgICB0aGlzLmZvcmVjYXN0ID0gZm9yZWNhc3Q7XG4gIH1cbiAgLy9DdXJyZW50IGRheVxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBnZXRDdXJyZW50RGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5mb3JlY2FzdC5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgcmV0dXJuIHV0aWxzLmNhcGl0YWxpemUoc3RyaW5nKTtcbiAgfVxuXG4gIGdldEN1cnJlbnREYXRlKCkge1xuICAgIHJldHVybiB1dGlscy50b0RhdGVUaW1lKHRoaXMuZm9yZWNhc3QuY3VycmVudC5kdCwgdGhpcy5mb3JlY2FzdC50aW1lem9uZSk7XG4gIH1cblxuICBnZXRDdXJyZW50VGVtcCgpIHtcbiAgICByZXR1cm4gdXRpbHMudG9SZWFkYWJsZVRlbXAodGhpcy5mb3JlY2FzdC5jdXJyZW50LnRlbXApO1xuICB9XG5cbiAgZ2V0Q3VycmVudEljb24oKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldEljb24odGhpcy5mb3JlY2FzdC5jdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG4gIH1cblxuICBnZXRDdXJyZW50RmVlbHNMaWtlKCkge1xuICAgIHJldHVybiB1dGlscy50b1JlYWRhYmxlVGVtcCh0aGlzLmZvcmVjYXN0LmN1cnJlbnQuZmVlbHNfbGlrZSk7XG4gIH1cblxuICBnZXRDdXJyZW50SHVtaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yZWNhc3QuY3VycmVudC5odW1pZGl0eTtcbiAgfVxuXG4gIGdldEN1cnJlbnRDaGFuY2VPZlJhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yZWNhc3QuZGFpbHlbMF0ucG9wICogMTAwO1xuICB9XG5cbiAgZ2V0Q3VycmVudFdpbmRTcGVlZCgpIHtcbiAgICByZXR1cm4gdXRpbHMucm91bmRUb09uZSh0aGlzLmZvcmVjYXN0LmN1cnJlbnQud2luZF9zcGVlZCk7XG4gIH1cbiAgLy9DdXJyZW50IGRheSBzZXR0ZXJzXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIHNldEN1cnJlbnRUZW1wKHZhbCl7XG4gICAgdGhpcy5mb3JlY2FzdC5jdXJyZW50LnRlbXAgPSB2YWw7XG4gIH1cblxuICBzZXRDdXJyZW50V2luZFNwZWVkKHZhbCl7XG4gICAgdGhpcy5mb3JlY2FzdC5jdXJyZW50LndpbmRfc3BlZWQgPSB2YWxcbiAgfVxuXG4gIHNldEN1cnJlbnRGZWVsc0xpa2UodmFsKXtcbiAgICB0aGlzLmZvcmVjYXN0LmN1cnJlbnQuZmVlbHNfbGlrZSA9IHZhbFxuICB9XG4gIC8vREFJTFlcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgc2V0RGFpbHkoKXtcbiAgICB0aGlzLmZvcmVjYXN0LmRhaWx5RmlsdGVyZWQgPSB1dGlscy5maWxsRGFpbHkodGhpcy5mb3JlY2FzdC5kYWlseSk7XG4gIH1cblxuICBzZXRDb252ZXJ0ZWREYWlseSgpe1xuICAgIHRoaXMuZm9yZWNhc3QuZGFpbHlGaWx0ZXJlZCA9IHV0aWxzLmNvbnZlcnREYWlseSh0aGlzLmZvcmVjYXN0LmRhaWx5RmlsdGVyZWQpXG4gIH1cblxuICAvL0hPVVJMWVxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBzZXRIb3VybHkoKXtcbiAgICB0aGlzLmZvcmVjYXN0LmhvdXJseUZpbHRlcmVkID0gdXRpbHMuZmlsbEhvdXJseSh0aGlzLmZvcmVjYXN0LmhvdXJseSlcbiAgfVxuXG4gIHNldENvbnZlcnRlZEhvdXJseSgpe1xuICAgIHRoaXMuZm9yZWNhc3QuaG91cmx5RmlsdGVyZWQgPSB1dGlscy5jb252ZXJ0SG91cmx5KHRoaXMuZm9yZWNhc3QuaG91cmx5RmlsdGVyZWQpXG4gIH1cbn1cblxuZXhwb3J0IHtzdGF0ZSwgV2VhdGhlckRhdGEsIEZvcmVjYXN0fSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuY29uc3QgaW50ZXJmYWNlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRlcmZhY2VcIik7XG5jb25zdCBmb3JlY2FzdEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RzLWJsb2NrXCIpO1xuY29uc3QgY2hhbmdlSG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2hhbmdlLWhvdXJzXCIpO1xuY29uc3QgZmllbGRzID0gaW50ZXJmYWNlQm94LmNoaWxkcmVuO1xuXG5jb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZV9sZWZ0XCIpO1xuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlX3JpZ2h0XCIpO1xuY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG90XCIpO1xuXG5jb25zdCBkYWlseUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHlcIik7XG5jb25zdCBob3VybHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseVwiKTtcblxuY29uc3QgZGF5ID0gKGRheSwgZGF0ZSwgdGVtcGhpZ2gsIHRlbXBsb3csIGljb24pID0+IHtcbiAgcmV0dXJuIGAgXG4gIDxkaXYgY2xhc3M9XCJkYWlseS1mb3JlY2FzdFwiIGlkPVwiY3VycmVudC1kYXlcIj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X2RheVwiPiR7ZGF5fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZGFpbHlfZGF0ZVwiPiR7ZGF0ZX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X2RhdGVcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X3RlbXBcIj5cbiAgICA8aDEgY2xhc3M9XCJkYWlseV90ZW1wLWhpZ2hcIj4ke3V0aWxzLnRvUmVhZGFibGVUZW1wKFxuICAgICAgdGVtcGhpZ2hcbiAgICApfSAke3V0aWxzLnNldFRlbXBVbml0cyhzdGF0ZSl9PC9oMT5cbiAgICA8cCBjbGFzcz1cImRhaWx5X3RlbXAtbG93XCI+JHt1dGlscy50b1JlYWRhYmxlVGVtcChcbiAgICAgIHRlbXBsb3dcbiAgICApfSAke3V0aWxzLnNldFRlbXBVbml0cyhzdGF0ZSl9PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X2ljb25cIj5cbiAgICA8aW1nIHNyYz0nJHt1dGlscy5nZXRJY29uKGljb24pLnNyY30nPlxuICA8L2Rpdj5cbjwvZGl2PlxuICBgO1xufTtcblxuY29uc3QgaG91ciA9ICh0aW1lLCB0ZW1wLCBpY29uKSA9PiB7XG4gIHJldHVybiBgXG4gIDxkaXYgY2xhc3M9XCJob3VybHktZm9yZWNhc3RcIiBpZD1cImN1cnJlbnQtaG91clwiPlxuICAgIDxkaXYgY2xhc3M9XCJob3VybHlfdGltZVwiPiR7dGltZS50b0xvd2VyQ2FzZSgpfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJob3VybHlfdGVtcFwiPiR7dXRpbHMudG9SZWFkYWJsZVRlbXAodGVtcCl9ICR7dXRpbHMuc2V0VGVtcFVuaXRzKFxuICAgIHN0YXRlXG4gICl9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImhvdXJseV9pY29uXCI+XG4gICAgICA8aW1nIHNyYz0nJHt1dGlscy5nZXRJY29uKGljb24pLnNyY30nPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4gIFxuICBgO1xufTtcblxuY29uc3QgaGFuZGxlID0gKHRhcmdldCkgPT4ge1xuICBmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIH1cbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYWlseVwiKSkge1xuICAgIGZpZWxkc1swXS5jbGFzc05hbWUgPSBcImRhaWx5IGludGVyZmFjZS1idG4gc2VsZWN0ZWRcIjtcbiAgICBmaWVsZHNbMl0uY2xhc3NOYW1lID0gXCJjaGFuZ2UtaG91cnMgaGlkZVwiO1xuICAgIGFkZERhaWx5RE9NKHN0YXRlKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaG91cmx5XCIpKSB7XG4gICAgZmllbGRzWzFdLmNsYXNzTmFtZSA9IFwiaG91cmx5IGludGVyZmFjZS1idG4gc2VsZWN0ZWRcIjtcbiAgICBmaWVsZHNbMl0uY2xhc3NOYW1lID0gXCJjaGFuZ2UtaG91cnMgc2hvd1wiO1xuICAgIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVEb3RzID0gKGluZGV4KSA9PiB7XG4gIGRvdHMuZm9yRWFjaCgoZG90KSA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZShcImRvdC1zZWxlY3RlZFwiKSk7XG4gIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJkb3Qtc2VsZWN0ZWRcIik7XG59O1xuXG5jb25zdCBhZGREYWlseURPTSA9IChzdGF0ZSkgPT4ge1xuICBmb3JlY2FzdEJveC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBkYWlseSA9IHN0YXRlLmZvcmVjYXN0LmZvcmVjYXN0LmRhaWx5RmlsdGVyZWQ7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgZGFpbHkubGVuZ3RoOyBpKyspIHtcbiAgICBmb3JlY2FzdEJveC5pbm5lckhUTUwgKz0gZGF5KFxuICAgICAgZGFpbHlbaV0uZ2V0RGF5KCksXG4gICAgICBkYWlseVtpXS5nZXREYXRlKCksXG4gICAgICBkYWlseVtpXS5tYXhUZW1wLFxuICAgICAgZGFpbHlbaV0ubWluVGVtcCxcbiAgICAgIGRhaWx5W2ldLmljb25cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBhZGRIb3VybHlET00gPSAoc3RhdGUsIGluZGV4KSA9PiB7XG4gIGZvcmVjYXN0Qm94LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGhvdXJseSA9IHN0YXRlLmZvcmVjYXN0LmZvcmVjYXN0LmhvdXJseUZpbHRlcmVkW2luZGV4XTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3VybHkubGVuZ3RoOyBpKyspIHtcbiAgICBmb3JlY2FzdEJveC5pbm5lckhUTUwgKz0gaG91cihcbiAgICAgIGhvdXJseVtpXS5nZXRIb3VyKCksXG4gICAgICBob3VybHlbaV0udGVtcCxcbiAgICAgIGhvdXJseVtpXS5pY29uXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgZGFpbHlCdXR0b24sXG4gIGhvdXJseUJ1dHRvbixcbiAgZG90cyxcbiAgbGVmdEFycm93LFxuICByaWdodEFycm93LFxuICBoYW5kbGUsXG4gIGhhbmRsZURvdHMsXG4gIGFkZERhaWx5RE9NLFxuICBhZGRIb3VybHlET00sXG59O1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscydcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vY2xhc3Nlcyc7XG4vLyByaWdodCBiYXJcbmNvbnN0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlY2lwaXRhdGlvbicpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JylcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpXG5jb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKVxuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKVxuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1pY29uJylcblxuY29uc3QgY29udmVydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0LXRlbXAnKVxuXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtbG9jYXRpb24nKVxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idG4nKVxuLy8gbGVmdCBiYXJcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc19saWtlJylcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5JylcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluX2NoYW5jZScpXG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZF9zcGVlZCcpXG5cblxuZnVuY3Rpb24gbG9hZERPTShmb3JlY2FzdCwgd2VhdGhlcil7XG4gIHByZWNpcGl0YXRpb24udGV4dENvbnRlbnQgPSBmb3JlY2FzdC5nZXRDdXJyZW50RGVzY3JpcHRpb24oKVxuICBjaXR5LnRleHRDb250ZW50ID0gd2VhdGhlci5nZXRUb3duKClcbiAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmdldEN1cnJlbnREYXRlKCkuZGF0ZVxuICB0aW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3QuZ2V0Q3VycmVudERhdGUoKS50aW1lXG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gIGAke2ZvcmVjYXN0LmdldEN1cnJlbnRUZW1wKCl9ICR7dXRpbHMuc2V0VGVtcFVuaXRzKHN0YXRlKX1gXG4gIHdlYXRoZXJJY29uLmlubmVySFRNTCA9ICcnXG4gIHdlYXRoZXJJY29uLmFwcGVuZENoaWxkKGZvcmVjYXN0LmdldEN1cnJlbnRJY29uKCkpXG5cbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuZ2V0Q3VycmVudEZlZWxzTGlrZSgpfSAke3V0aWxzLnNldFRlbXBVbml0cyhzdGF0ZSl9YFxuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmdldEN1cnJlbnRIdW1pZGl0eSgpfSAlYFxuICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5nZXRDdXJyZW50Q2hhbmNlT2ZSYWluKCl9ICVgXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmdldEN1cnJlbnRXaW5kU3BlZWQoKX0gJHt1dGlscy5zZXRTcGVlZFVuaXRzKHN0YXRlKX1gXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml0cyhzdGF0ZSl7XG4gIGNvbnN0IGZvcmVjYXN0ID0gc3RhdGUuZm9yZWNhc3Q7XG4gIGNvbnN0IHdlYXRoZXIgPSBzdGF0ZS53ZWF0aGVyXG4gIGlmKHN0YXRlLnVuaXRzID09PSAnbWV0cmljJyl7XG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudFRlbXAodXRpbHMuY29udmVydFRvRihmb3JlY2FzdC5nZXRDdXJyZW50VGVtcCgpKSlcbiAgICBmb3JlY2FzdC5zZXRDdXJyZW50RmVlbHNMaWtlKHV0aWxzLmNvbnZlcnRUb0YoZm9yZWNhc3QuZ2V0Q3VycmVudEZlZWxzTGlrZSgpKSlcbiAgICBmb3JlY2FzdC5zZXRDdXJyZW50V2luZFNwZWVkKHV0aWxzLmNvbnZlcnRUb01waChmb3JlY2FzdC5nZXRDdXJyZW50V2luZFNwZWVkKCkpKVxuICAgIHN0YXRlLnVuaXRzID0gJ2ltcGVyaWFsJ1xuICAgIGNvbnZlcnRCdXR0b24udGV4dENvbnRlbnQgPSAnRGlzcGxheSDCsEMnXG4gIH1lbHNle1xuICAgIGZvcmVjYXN0LnNldEN1cnJlbnRUZW1wKHV0aWxzLmNvbnZlcnRUb0MoZm9yZWNhc3QuZ2V0Q3VycmVudFRlbXAoKSkpXG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudEZlZWxzTGlrZSh1dGlscy5jb252ZXJ0VG9DKGZvcmVjYXN0LmdldEN1cnJlbnRGZWVsc0xpa2UoKSkpXG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudFdpbmRTcGVlZCh1dGlscy5jb252ZXJ0VG9LbXBoKGZvcmVjYXN0LmdldEN1cnJlbnRXaW5kU3BlZWQoKSkpXG4gICAgc3RhdGUudW5pdHMgPSAnbWV0cmljJ1xuICAgIGNvbnZlcnRCdXR0b24udGV4dENvbnRlbnQgPSAnRGlzcGxheSDCsEYnXG4gIH1cbiAgbG9hZERPTShmb3JlY2FzdCwgd2VhdGhlcilcbn1cblxuZXhwb3J0IHtsb2FkRE9NLCBzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uLCBjb252ZXJ0QnV0dG9uLCBjb252ZXJ0VW5pdHN9IiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmZ1bmN0aW9uIGdldEljb24oY29kZSkge1xuICBjb25zdCBjb2RlcyA9IHtcbiAgICBcIjAxZFwiOiBcIi4vaW1ncy9zdW4uc3ZnXCIsXG4gICAgXCIwMW5cIjogXCIuL2ltZ3MvbW9vbi5zdmdcIixcbiAgICBcIjAyZFwiOiBcIi4vaW1ncy9jbG91ZHktZGF5LnN2Z1wiLFxuICAgIFwiMDJuXCI6IFwiLi9pbWdzL2Nsb3VkeS1uaWdodC5zdmdcIixcbiAgICBcIjAzZFwiOiBcIi4vaW1ncy9jbG91ZC5zdmdcIixcbiAgICBcIjAzblwiOiBcIi4vaW1ncy9jbG91ZC5zdmdcIixcbiAgICBcIjA0ZFwiOiBcIi4vaW1ncy9jbG91ZHkuc3ZnXCIsXG4gICAgXCIwNG5cIjogXCIuL2ltZ3MvY2xvdWR5LnN2Z1wiLFxuICAgIFwiMDlkXCI6IFwiLi9pbWdzL3JhaW55LnN2Z1wiLFxuICAgIFwiMDluXCI6IFwiLi9pbWdzL3JhaW55LnN2Z1wiLFxuICAgIFwiMTBkXCI6IFwiLi9pbWdzL3JhaW55LnN2Z1wiLFxuICAgIFwiMTBuXCI6IFwiLi9pbWdzL3JhaW55LnN2Z1wiLFxuICAgIFwiMTFkXCI6IFwiLi9pbWdzL2xpZ2h0bmluZy5zdmdcIixcbiAgICBcIjExblwiOiBcIi4vaW1ncy9saWdodG5pbmcuc3ZnXCIsXG4gICAgXCIxM2RcIjogXCIuL2ltZ3Mvc25vdy5zdmdcIixcbiAgICBcIjEzblwiOiBcIi4vaW1ncy9zbm93LnN2Z1wiLFxuICAgIFwiNTBkXCI6IFwiLi9pbWdzL21pc3Quc3ZnXCIsXG4gICAgXCI1MG5cIjogXCIuL2ltZ3MvbWlzdC5zdmdcIixcbiAgfTtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoMTAwKTtcbiAgaW1hZ2Uuc3JjID0gY29kZXNbY29kZV07XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgIC5zcGxpdChcIiBcIilcbiAgICAubWFwKCh3b3JkKSA9PiB7XG4gICAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSk7XG4gICAgfSlcbiAgICAuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIHRvRGF0ZVRpbWUoc2Vjb25kcywgdGltZXpvbmUpIHtcbiAgY29uc3QgdCA9IG5ldyBEYXRlKClcbiAgdC5zZXRUaW1lKHNlY29uZHMqMTAwMClcbiAgcmV0dXJuIHtcbiAgICBkYXRlOiB0LnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICAgIHdlZWtkYXk6IFwic2hvcnRcIixcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICB9KSxcbiAgICB0aW1lOiBgVGltZTogJHt0LnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgfSl9YCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9SZWFkYWJsZVRpbWUodGltZSkge1xuICB0aW1lLnNwbGl0KFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gdG9SZWFkYWJsZVRlbXAodGVtcCkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh0ZW1wKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb09uZSh2YWwpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsICogMTApIC8gMTA7XG59XG5cbmZ1bmN0aW9uIHNldFRlbXBVbml0cyhzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUudW5pdHMgPT09IFwibWV0cmljXCIgPyBcIsKwQ1wiIDogXCLCsEZcIjtcbn1cbmZ1bmN0aW9uIHNldFNwZWVkVW5pdHMoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLnVuaXRzID09PSBcIm1ldHJpY1wiID8gXCJrbS9oXCIgOiBcIm1waFwiO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9GKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAqIDEuOCArIDMyO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9DKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSAzMikgLyAxLjg7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb01waCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgLyAxLjYwOTM0NDtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvS21waCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgKiAxLjYwOTM0NDtcbn1cblxuZnVuY3Rpb24gZmlsbERhaWx5KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZHQ6IGl0ZW0uZHQsXG4gICAgICBtYXhUZW1wOiBpdGVtLnRlbXAubWF4LFxuICAgICAgbWluVGVtcDogaXRlbS50ZW1wLm1pbixcbiAgICAgIGljb246IGl0ZW0ud2VhdGhlclswXS5pY29uLFxuICAgICAgZ2V0RGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkYXRlLnNldFRpbWUodGhpcy5kdCAqIDEwMDApO1xuICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldERhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VGltZSh0aGlzLmR0ICogMTAwMCk7XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydERhaWx5KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZHQ6IGl0ZW0uZHQsXG4gICAgICBtYXhUZW1wOiAoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUudW5pdHMgPT09IFwibWV0cmljXCIpIHtcbiAgICAgICAgICByZXR1cm4gY29udmVydFRvRihpdGVtLm1heFRlbXApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS51bml0cyA9PT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0MoaXRlbS5tYXhUZW1wKTtcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICAgIG1pblRlbXA6ICgoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS51bml0cyA9PT0gXCJtZXRyaWNcIikge1xuICAgICAgICAgIHJldHVybiBjb252ZXJ0VG9GKGl0ZW0ubWluVGVtcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnVuaXRzID09PSBcImltcGVyaWFsXCIpIHtcbiAgICAgICAgICByZXR1cm4gY29udmVydFRvQyhpdGVtLm1pblRlbXApO1xuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgZ2V0RGF5OiBpdGVtLmdldERheSxcbiAgICAgIGdldERhdGU6IGl0ZW0uZ2V0RGF0ZSxcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsbEhvdXJseShhcnJheSkge1xuICBjb25zdCBhcnIgPSBhcnJheS5zcGxpY2UoMCwgMjQpO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgdGVtcCA9IGFyci5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZXpvbmU6IHN0YXRlLmZvcmVjYXN0LmZvcmVjYXN0LnRpbWV6b25lLFxuICAgICAgZHQ6IGl0ZW0uZHQsXG4gICAgICB0ZW1wOiBpdGVtLnRlbXAsXG4gICAgICBpY29uOiBpdGVtLndlYXRoZXJbMF0uaWNvbixcbiAgICAgIGdldEhvdXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VGltZSh0aGlzLmR0ICogMTAwMCk7XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICB0aW1lWm9uZTogdGhpcy50aW1lem9uZSxcbiAgICAgICAgICBob3VyMTI6IHRydWUsXG4gICAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgd2hpbGUgKHRlbXAubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnB1c2godGVtcC5zcGxpY2UoMCwgOCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRIb3VybHkoYXJyYXkpIHtcbiAgY29uc3QgdGVtcCA9IFtdO1xuICBmb3IgKGxldCBhcnIgb2YgYXJyYXkpIHtcbiAgICB0ZW1wLnB1c2goXG4gICAgICBhcnIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGltZXpvbmU6IGl0ZW0udGltZXpvbmUsXG4gICAgICAgICAgZHQ6IGl0ZW0uZHQsXG4gICAgICAgICAgdGVtcDogKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS51bml0cyA9PT0gXCJtZXRyaWNcIikge1xuICAgICAgICAgICAgICByZXR1cm4gY29udmVydFRvRihpdGVtLnRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLnVuaXRzID09PSBcImltcGVyaWFsXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0MoaXRlbS50ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpLFxuICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICBnZXRIb3VyOiBpdGVtLmdldEhvdXIsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHRlbXA7XG59XG5cbmV4cG9ydCB7XG4gIGdldEljb24sXG4gIGNhcGl0YWxpemUsXG4gIHRvRGF0ZVRpbWUsXG4gIHRvUmVhZGFibGVUZW1wLFxuICB0b1JlYWRhYmxlVGltZSxcbiAgcm91bmRUb09uZSxcbiAgc2V0VGVtcFVuaXRzLFxuICBzZXRTcGVlZFVuaXRzLFxuICBjb252ZXJ0VG9GLFxuICBjb252ZXJ0VG9DLFxuICBjb252ZXJ0VG9NcGgsXG4gIGNvbnZlcnRUb0ttcGgsXG4gIGZpbGxEYWlseSxcbiAgY29udmVydERhaWx5LFxuICBmaWxsSG91cmx5LFxuICBjb252ZXJ0SG91cmx5LFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==