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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsTUFBTSxZQUFZLFdBQVcsS0FBSyxZQUFZLGNBQWMsV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFlBQVksWUFBWSxLQUFLLFlBQVksV0FBVyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8s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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlEQUFXO0FBQ3RCO0FBQ0E7QUFDQSxXQUFXLGlEQUFXO0FBQ3RCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlEQUFXO0FBQ3RCO0FBQ0E7QUFDQSxXQUFXLGlEQUFXO0FBQ3RCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzRUFBZ0M7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFXO0FBQ3hCO0FBQ0E7QUFDQSxhQUFhLGlEQUFXO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQW1CRSIsInNvdXJjZXMiOlsid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jbGFzc2VzLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9sb3dlcmRvbS5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdXBwZXJkb20uanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1Byb3N0b09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvU0YtVUktRGlzcGxheS1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1ncy9iYWNrZ3JvdW5kL2JhY2tncm91bmQzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1Byb3N0byBvbmUnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpICBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNle1xcbiAgZm9udC1mYW1pbHk6ICdTYW4gRnJhbmNpc2NvJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSAgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG46cm9vdHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuKntcXG4gIC1ib3JkZXI6IDFweCBkYXNoZWQgd2hpdGU7XFxuXFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgIFxcbiAgLWZvbnQtZmFtaWx5OiAnUHJvc3RvIG9uZSc7XFxuICBmb250LWZhbWlseTogJ1NhbiBGcmFuY2lzY28nO1xcbn1cXG5cXG5ib2R5e1xcbiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuIC1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gbWluLWhlaWdodDogMTAwdmg7XFxuIGNvbG9yOiB3aGl0ZTtcXG4gXFxuIGRpc3BsYXk6IGZsZXg7XFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcbmRpdi5tYWluLWNvbnRhaW5lcntcXG4gIGZsZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG5cXG4gIHBhZGRpbmc6IDgwcHggMDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qVVBQRVIgQk9YKi9cXG4udXBwZXItYm94e1xcbiAgLWJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcXG5cXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogODUlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLypSSUdIVCovXFxuLnJpZ2h0LnVwcGVyLWJhcntcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbiNwcmVjaXBpdGF0aW9uLCAuZGV0YWlsc19pbmZvPmgxe1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcbiN0ZW1wZXJhdHVyZXtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuI2NvbnZlcnQtdGVtcHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG5cXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiN3ZWF0aGVyLWljb257XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XXtcXG5mb250LXNpemU6IDFyZW07XFxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIzNSwgMjE1LCAwKTtcXG5ib3JkZXI6IG5vbmU7XFxuY29sb3I6IHdoaXRlO1xcbnBhZGRpbmc6IDAgNXB4O1xcbndpZHRoOiAxNTBweDtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNzZWFyY2gtYnRue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3NlYXJjaC1idG4+aW1ne1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi8qQ0VOVEVSKi9cXG4uY2VudGVyLnVwcGVyLWJhcntcXG4gIGZsZXg6IDM7XFxufVxcbi8qTEVGVCovXFxuLmxlZnQudXBwZXItYmFye1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDE1cHg7XFxuXFxufVxcbi53ZWF0aGVyLWRldGFpbHN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZGV0YWlsc19pY29ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmRldGFpbHNfaWNvbj5pbWd7XFxuICB3aWR0aDogNDBweDtcXG59XFxuLmRldGFpbHNfaW5mb3tcXG4gIGZsZXg6MTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuXFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKkxPV0VSIEJPWCovXFxuLmxvd2VyLWJveHtcXG4gIC1ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggNDBweCA0MHB4IDQwcHg7XFxuXFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4XFxufVxcbi5pbnRlcmZhY2V7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG4uaW50ZXJmYWNlLWJ0bntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWxlY3RlZHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uY2hhbmdlX2xlZnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uY2hhbmdlX2xlZnQ+aW1nLCAuY2hhbmdlX3JpZ2h0PmltZ3tcXG4gIGhlaWdodDogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvdHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTFweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kb3Qtc2VsZWN0ZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmNoYW5nZS1ob3Vyc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5zaG93e1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmhpZGV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZm9yZWNhc3RzLWJsb2Nre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmRhaWx5LWZvcmVjYXN0LCAuaG91cmx5LWZvcmVjYXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5kYWlseV9pY29ue1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5kYWlseV9pY29uPmltZ3tcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbjo6cGxhY2Vob2xkZXJ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5ob3VybHlfdGltZXtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uaG91cmx5X3RlbXB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuLmhvdXJseV9pY29uPmltZ3tcXG4gIHdpZHRoOiA1MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGdFQUE2RDtFQUM3RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7O0VBRXpCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7Q0FDQyx5REFBMEQ7Q0FDMUQsc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQiw0QkFBNEI7O0NBRTVCLHdCQUF3Qjs7Q0FFeEIsaUJBQWlCO0NBQ2pCLFlBQVk7O0NBRVosYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7O0FBR0E7RUFDRSxPQUFPOztFQUVQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTOztFQUVULGVBQWU7QUFDakI7QUFDQSwwRkFBMEY7QUFDMUYsWUFBWTtBQUNaO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0Qjs7RUFFNUIsT0FBTztFQUNQLFVBQVU7O0VBRVYsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBLDBGQUEwRjtBQUMxRixRQUFRO0FBQ1I7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLG1CQUFtQjtFQUNuQiw4QkFBOEI7O0VBRTlCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysd0NBQXdDO0FBQ3hDLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxPQUFPO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsU0FBUzs7QUFFWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsTUFBTTs7RUFFTixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7O0FBRVY7QUFDQSwwRkFBMEY7QUFDMUYsWUFBWTtBQUNaO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0Qjs7RUFFNUIsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1Byb3N0byBvbmUnO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvUHJvc3RvT25lLVJlZ3VsYXIudHRmJykgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2V7XFxuICBmb250LWZhbWlseTogJ1NhbiBGcmFuY2lzY28nO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvU0YtVUktRGlzcGxheS1SZWd1bGFyLm90ZicpICBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcblxcbjpyb290e1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4qe1xcbiAgLWJvcmRlcjogMXB4IGRhc2hlZCB3aGl0ZTtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXFxuICAtZm9udC1mYW1pbHk6ICdQcm9zdG8gb25lJztcXG4gIGZvbnQtZmFtaWx5OiAnU2FuIEZyYW5jaXNjbyc7XFxufVxcblxcbmJvZHl7XFxuIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWdzL2JhY2tncm91bmQvYmFja2dyb3VuZDMuanBnXFxcIik7XFxuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbiBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gY29sb3I6IHdoaXRlO1xcbiBcXG4gZGlzcGxheTogZmxleDtcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuZGl2Lm1haW4tY29udGFpbmVye1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcblxcbiAgcGFkZGluZzogODBweCAwO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLypVUFBFUiBCT1gqL1xcbi51cHBlci1ib3h7XFxuICAtYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA0MHB4O1xcblxcbiAgZmxleDogMTtcXG4gIHdpZHRoOiA4NSU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKlJJR0hUKi9cXG4ucmlnaHQudXBwZXItYmFye1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuI3ByZWNpcGl0YXRpb24sIC5kZXRhaWxzX2luZm8+aDF7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuI3RlbXBlcmF0dXJle1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4jY29udmVydC10ZW1we1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcblxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIFxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3dlYXRoZXItaWNvbntcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5pbnB1dFt0eXBlPXRleHRde1xcbmZvbnQtc2l6ZTogMXJlbTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjM1LCAyMTUsIDApO1xcbmJvcmRlcjogbm9uZTtcXG5jb2xvcjogd2hpdGU7XFxucGFkZGluZzogMCA1cHg7XFxud2lkdGg6IDE1MHB4O1xcbn1cXG5pbnB1dFt0eXBlPXRleHRdOmZvY3Vze1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI3NlYXJjaC1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jc2VhcmNoLWJ0bj5pbWd7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLypDRU5URVIqL1xcbi5jZW50ZXIudXBwZXItYmFye1xcbiAgZmxleDogMztcXG59XFxuLypMRUZUKi9cXG4ubGVmdC51cHBlci1iYXJ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMTVweDtcXG5cXG59XFxuLndlYXRoZXItZGV0YWlsc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5kZXRhaWxzX2ljb257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGV0YWlsc19pY29uPmltZ3tcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG4uZGV0YWlsc19pbmZve1xcbiAgZmxleDoxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG5cXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qTE9XRVIgQk9YKi9cXG4ubG93ZXItYm94e1xcbiAgLWJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogMjBweCA0MHB4IDQwcHggNDBweDtcXG5cXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHhcXG59XFxuLmludGVyZmFjZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI1cHg7XFxufVxcbi5pbnRlcmZhY2UtYnRue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNlbGVjdGVke1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbi5jaGFuZ2VfbGVmdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jaGFuZ2VfbGVmdD5pbWcsIC5jaGFuZ2VfcmlnaHQ+aW1ne1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZG90e1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvdC1zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uY2hhbmdlLWhvdXJze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnNob3d7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaGlkZXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mb3JlY2FzdHMtYmxvY2t7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZGFpbHktZm9yZWNhc3QsIC5ob3VybHktZm9yZWNhc3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmRhaWx5X2ljb257XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLmRhaWx5X2ljb24+aW1ne1xcbiAgd2lkdGg6IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlcntcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhvdXJseV90aW1le1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5ob3VybHlfdGVtcHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG4uaG91cmx5X2ljb24+aW1ne1xcbiAgd2lkdGg6IDUwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVxdWVzdFdlYXRoZXIsIHJlcXVlc3RGb3JlY2FzdCwgcmVxdWVzdEN1cnJlbnRMb2NhdGlvbiwgfSBmcm9tIFwiLi9tb2R1bGVzL2FwaVwiO1xuaW1wb3J0IHsgV2VhdGhlckRhdGEsIEZvcmVjYXN0LCBzdGF0ZSB9IGZyb20gXCIuL21vZHVsZXMvY2xhc3Nlc1wiO1xuaW1wb3J0IHsgbG9hZERPTSwgc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbiwgY29udmVydEJ1dHRvbiwgY29udmVydFVuaXRzLCB9IGZyb20gXCIuL21vZHVsZXMvdXBwZXJkb21cIjtcbmltcG9ydCB7IGRhaWx5QnV0dG9uLCBoYW5kbGUsIGhhbmRsZURvdHMsIGhvdXJseUJ1dHRvbiwgYWRkRGFpbHlET00sIGFkZEhvdXJseURPTSwgZG90cywgbGVmdEFycm93LCByaWdodEFycm93LCB9IGZyb20gXCIuL21vZHVsZXMvbG93ZXJkb21cIjtcblxuY29uc3QgeyBsb2cgfSA9IGNvbnNvbGU7XG5sb2coXCJDcmVhdGluZyBuZXcgcHJvamVjdFwiKTtcblxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICBzdGF0ZS5pbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xufSk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBzdGF0ZS53ZWF0aGVyID0gbmV3IFdlYXRoZXJEYXRhKFxuICAgIGF3YWl0IHJlcXVlc3RXZWF0aGVyKHN0YXRlLmlucHV0LCBzdGF0ZS51bml0cylcbiAgKTtcbiAgc3RhdGUuZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3QoXG4gICAgYXdhaXQgcmVxdWVzdEZvcmVjYXN0KHN0YXRlLmlucHV0LCBzdGF0ZS51bml0cylcbiAgKTtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0RGFpbHkoKTtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0SG91cmx5KCk7XG5cbiAgbG9hZERPTShzdGF0ZS5mb3JlY2FzdCwgc3RhdGUud2VhdGhlcik7XG4gIGlmIChkYWlseUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgIGFkZERhaWx5RE9NKHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbiAgfVxuICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xufSk7XG5cbmNvbnZlcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0Q29udmVydGVkRGFpbHkoKTtcbiAgc3RhdGUuZm9yZWNhc3Quc2V0Q29udmVydGVkSG91cmx5KCk7XG4gIGNvbnZlcnRVbml0cyhzdGF0ZSk7XG4gIGlmIChkYWlseUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgIGFkZERhaWx5RE9NKHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbiAgfVxufSk7XG5cbmRhaWx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgaGFuZGxlKHRhcmdldCk7XG59KTtcblxuaG91cmx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgaGFuZGxlKHRhcmdldCk7XG4gIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xufSk7XG5cbmRvdHMuZm9yRWFjaCgoZG90KSA9PiB7XG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuZG90O1xuICAgIHN0YXRlLmluZGV4ID0gaW5kZXg7XG4gICAgaGFuZGxlRG90cyhzdGF0ZS5pbmRleCk7XG4gICAgYWRkSG91cmx5RE9NKHN0YXRlLCBzdGF0ZS5pbmRleCk7XG4gIH0pO1xufSk7XG5cbnJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHN0YXRlLmluZGV4IDwgMikge1xuICAgIHN0YXRlLmluZGV4Kys7XG4gICAgaGFuZGxlRG90cyhzdGF0ZS5pbmRleCk7XG4gICAgYWRkSG91cmx5RE9NKHN0YXRlLCBzdGF0ZS5pbmRleCk7XG4gIH0gZWxzZSByZXR1cm47XG59KTtcblxubGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChzdGF0ZS5pbmRleCA+IDApIHtcbiAgICBzdGF0ZS5pbmRleC0tO1xuICAgIGhhbmRsZURvdHMoc3RhdGUuaW5kZXgpO1xuICAgIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xuICB9IGVsc2UgcmV0dXJuO1xufSk7XG5cbi8vIE9ubG9hZCB3aXRoIGN1cnJlbnQgdXNlciBsb2NhdGlvblxuc3RhdGUuaW5wdXQgPSBhd2FpdCByZXF1ZXN0Q3VycmVudExvY2F0aW9uKCk7XG5cbihhc3luYyAoKSA9PiB7XG4gIHN0YXRlLndlYXRoZXIgPSBuZXcgV2VhdGhlckRhdGEoXG4gICAgYXdhaXQgcmVxdWVzdFdlYXRoZXIoc3RhdGUuaW5wdXQsIHN0YXRlLnVuaXRzKVxuICApO1xuICBzdGF0ZS5mb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChcbiAgICBhd2FpdCByZXF1ZXN0Rm9yZWNhc3Qoc3RhdGUuaW5wdXQsIHN0YXRlLnVuaXRzKVxuICApO1xuICBzdGF0ZS5mb3JlY2FzdC5zZXREYWlseSgpO1xuICBzdGF0ZS5mb3JlY2FzdC5zZXRIb3VybHkoKTtcblxuICBsb2FkRE9NKHN0YXRlLmZvcmVjYXN0LCBzdGF0ZS53ZWF0aGVyKTtcbiAgYWRkRGFpbHlET00oc3RhdGUpO1xufSkoKTtcbiIsIlxuLy9jb25zdCBhcGlLZXkgPSBcIjIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0XCI7XG5jb25zdCBhcGlLZXkgPSAnMzA2OWFlMjcxOGU0MGY4ZGMxOTk4YjcyNTBlMTZmMTAnXG5cbi8vUmVxdWVzdGluZyBjdXJyZW50IGxvY2F0aW9uIGlmIGZldGNoIGZhaWxzIHVzZSBkZWZhdWx0IHZhbHVlXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Q3VycmVudExvY2F0aW9uKCl7XG4gIHRyeXtcbiAgY29uc3QgcmVzb2x2ZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2lwYXBpLmNvL2pzb24vJyk7XG4gIGlmKCFyZXNvbHZlLm9rKXtcbiAgICByZXR1cm4gJ2R1c2hhbmJlJ1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc29sdmUuanNvbigpO1xuICByZXR1cm4gcmVzdWx0LmNpdHlcbiAgfWNhdGNoKGVycil7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICAgIHJldHVybiAnZHVzaGFuYmUnO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RXZWF0aGVyKGNpdHksIHVuaXRzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9JHt1bml0c30mQVBQSUQ9JHthcGlLZXl9YFxuICAgICk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbi8vIGNvb3JkcyBjYW1lIGZyb20gcmVxdWVzdFdlYXRoZXJOb3dcbi8vIHVuaXRzICdpbXBlcmlhbCcgb3IgJ21ldHJpYydcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RGb3JlY2FzdChpbnB1dCwgdW5pdHMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRDb29yZHMoaW5wdXQpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmRzLmxhdH0mbG9uPSR7Y29vcmRzLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9YFxuICAgICk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZHMoY2l0eSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0V2VhdGhlcihjaXR5KTtcbiAgcmV0dXJuIHJlc3VsdC5jb29yZDtcbn1cblxuZXhwb3J0IHtyZXF1ZXN0V2VhdGhlciwgcmVxdWVzdEZvcmVjYXN0LCByZXF1ZXN0Q3VycmVudExvY2F0aW9uLCBnZXRDb29yZHMgfTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IHN0YXRlID0ge1xuICB3ZWF0aGVyOiB7fSxcbiAgZm9yZWNhc3Q6IHt9LFxuICB1bml0czogJ21ldHJpYycsIC8vaW1wZXJpYWxcbiAgaW5wdXQ6ICdJdmFub3ZvJyxcblxuICBkYWlseTogW10sXG4gIGhvdXJseTogW10sXG4gIGluZGV4OiAwLFxufVxuXG5jbGFzcyBXZWF0aGVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHdlYXRoZXIpIHtcbiAgICB0aGlzLndlYXRoZXIgPSB3ZWF0aGVyO1xuICB9XG4gIGdldFRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMud2VhdGhlci5uYW1lO1xuICB9XG59XG5cbmNsYXNzIEZvcmVjYXN0IHtcbiAgY29uc3RydWN0b3IoZm9yZWNhc3QpIHtcbiAgICB0aGlzLmZvcmVjYXN0ID0gZm9yZWNhc3Q7XG4gIH1cbiAgLy9DdXJyZW50IGRheVxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBnZXRDdXJyZW50RGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5mb3JlY2FzdC5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgcmV0dXJuIHV0aWxzLmNhcGl0YWxpemUoc3RyaW5nKTtcbiAgfVxuXG4gIGdldEN1cnJlbnREYXRlKCkge1xuICAgIHJldHVybiB1dGlscy50b0RhdGVUaW1lKHRoaXMuZm9yZWNhc3QuY3VycmVudC5kdCwgdGhpcy5mb3JlY2FzdC50aW1lem9uZSk7XG4gIH1cblxuICBnZXRDdXJyZW50VGVtcCgpIHtcbiAgICByZXR1cm4gdXRpbHMudG9SZWFkYWJsZVRlbXAodGhpcy5mb3JlY2FzdC5jdXJyZW50LnRlbXApO1xuICB9XG5cbiAgZ2V0Q3VycmVudEljb24oKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldEljb24odGhpcy5mb3JlY2FzdC5jdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG4gIH1cblxuICBnZXRDdXJyZW50RmVlbHNMaWtlKCkge1xuICAgIHJldHVybiB1dGlscy50b1JlYWRhYmxlVGVtcCh0aGlzLmZvcmVjYXN0LmN1cnJlbnQuZmVlbHNfbGlrZSk7XG4gIH1cblxuICBnZXRDdXJyZW50SHVtaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yZWNhc3QuY3VycmVudC5odW1pZGl0eTtcbiAgfVxuXG4gIGdldEN1cnJlbnRDaGFuY2VPZlJhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yZWNhc3QuZGFpbHlbMF0ucG9wICogMTAwO1xuICB9XG5cbiAgZ2V0Q3VycmVudFdpbmRTcGVlZCgpIHtcbiAgICByZXR1cm4gdXRpbHMucm91bmRUb09uZSh0aGlzLmZvcmVjYXN0LmN1cnJlbnQud2luZF9zcGVlZCk7XG4gIH1cbiAgLy9DdXJyZW50IGRheSBzZXR0ZXJzXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIHNldEN1cnJlbnRUZW1wKHZhbCl7XG4gICAgdGhpcy5mb3JlY2FzdC5jdXJyZW50LnRlbXAgPSB2YWw7XG4gIH1cblxuICBzZXRDdXJyZW50V2luZFNwZWVkKHZhbCl7XG4gICAgdGhpcy5mb3JlY2FzdC5jdXJyZW50LndpbmRfc3BlZWQgPSB2YWxcbiAgfVxuXG4gIHNldEN1cnJlbnRGZWVsc0xpa2UodmFsKXtcbiAgICB0aGlzLmZvcmVjYXN0LmN1cnJlbnQuZmVlbHNfbGlrZSA9IHZhbFxuICB9XG4gIC8vREFJTFlcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgc2V0RGFpbHkoKXtcbiAgICB0aGlzLmZvcmVjYXN0LmRhaWx5RmlsdGVyZWQgPSB1dGlscy5maWxsRGFpbHkodGhpcy5mb3JlY2FzdC5kYWlseSk7XG4gIH1cblxuICBzZXRDb252ZXJ0ZWREYWlseSgpe1xuICAgIHRoaXMuZm9yZWNhc3QuZGFpbHlGaWx0ZXJlZCA9IHV0aWxzLmNvbnZlcnREYWlseSh0aGlzLmZvcmVjYXN0LmRhaWx5RmlsdGVyZWQpXG4gIH1cblxuICAvL0hPVVJMWVxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBzZXRIb3VybHkoKXtcbiAgICB0aGlzLmZvcmVjYXN0LmhvdXJseUZpbHRlcmVkID0gdXRpbHMuZmlsbEhvdXJseSh0aGlzLmZvcmVjYXN0LmhvdXJseSlcbiAgfVxuXG4gIHNldENvbnZlcnRlZEhvdXJseSgpe1xuICAgIHRoaXMuZm9yZWNhc3QuaG91cmx5RmlsdGVyZWQgPSB1dGlscy5jb252ZXJ0SG91cmx5KHRoaXMuZm9yZWNhc3QuaG91cmx5RmlsdGVyZWQpXG4gIH1cbn1cblxuZXhwb3J0IHtzdGF0ZSwgV2VhdGhlckRhdGEsIEZvcmVjYXN0fSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuY29uc3QgaW50ZXJmYWNlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRlcmZhY2VcIik7XG5jb25zdCBmb3JlY2FzdEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RzLWJsb2NrXCIpO1xuY29uc3QgY2hhbmdlSG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2hhbmdlLWhvdXJzXCIpO1xuY29uc3QgZmllbGRzID0gaW50ZXJmYWNlQm94LmNoaWxkcmVuO1xuXG5jb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZV9sZWZ0XCIpO1xuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlX3JpZ2h0XCIpO1xuY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG90XCIpO1xuXG5jb25zdCBkYWlseUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHlcIik7XG5jb25zdCBob3VybHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseVwiKTtcblxuY29uc3QgZGF5ID0gKGRheSwgZGF0ZSwgdGVtcGhpZ2gsIHRlbXBsb3csIGljb24pID0+IHtcbiAgcmV0dXJuIGAgXG4gIDxkaXYgY2xhc3M9XCJkYWlseS1mb3JlY2FzdFwiIGlkPVwiY3VycmVudC1kYXlcIj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X2RheVwiPiR7ZGF5fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZGFpbHlfZGF0ZVwiPiR7ZGF0ZX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X2RhdGVcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X3RlbXBcIj5cbiAgICA8aDEgY2xhc3M9XCJkYWlseV90ZW1wLWhpZ2hcIj4ke3V0aWxzLnRvUmVhZGFibGVUZW1wKFxuICAgICAgdGVtcGhpZ2hcbiAgICApfSAke3V0aWxzLnNldFRlbXBVbml0cyhzdGF0ZSl9PC9oMT5cbiAgICA8cCBjbGFzcz1cImRhaWx5X3RlbXAtbG93XCI+JHt1dGlscy50b1JlYWRhYmxlVGVtcChcbiAgICAgIHRlbXBsb3dcbiAgICApfSAke3V0aWxzLnNldFRlbXBVbml0cyhzdGF0ZSl9PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X2ljb25cIj5cbiAgICA8aW1nIHNyYz0nJHt1dGlscy5nZXRJY29uKGljb24pLnNyY30nPlxuICA8L2Rpdj5cbjwvZGl2PlxuICBgO1xufTtcblxuY29uc3QgaG91ciA9ICh0aW1lLCB0ZW1wLCBpY29uKSA9PiB7XG4gIHJldHVybiBgXG4gIDxkaXYgY2xhc3M9XCJob3VybHktZm9yZWNhc3RcIiBpZD1cImN1cnJlbnQtaG91clwiPlxuICAgIDxkaXYgY2xhc3M9XCJob3VybHlfdGltZVwiPiR7dGltZS50b0xvd2VyQ2FzZSgpfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJob3VybHlfdGVtcFwiPiR7dXRpbHMudG9SZWFkYWJsZVRlbXAodGVtcCl9ICR7dXRpbHMuc2V0VGVtcFVuaXRzKFxuICAgIHN0YXRlXG4gICl9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImhvdXJseV9pY29uXCI+XG4gICAgICA8aW1nIHNyYz0nJHt1dGlscy5nZXRJY29uKGljb24pLnNyY30nPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4gIFxuICBgO1xufTtcblxuY29uc3QgaGFuZGxlID0gKHRhcmdldCkgPT4ge1xuICBmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIH1cbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYWlseVwiKSkge1xuICAgIGZpZWxkc1swXS5jbGFzc05hbWUgPSBcImRhaWx5IGludGVyZmFjZS1idG4gc2VsZWN0ZWRcIjtcbiAgICBmaWVsZHNbMl0uY2xhc3NOYW1lID0gXCJjaGFuZ2UtaG91cnMgaGlkZVwiO1xuICAgIGFkZERhaWx5RE9NKHN0YXRlKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaG91cmx5XCIpKSB7XG4gICAgZmllbGRzWzFdLmNsYXNzTmFtZSA9IFwiaG91cmx5IGludGVyZmFjZS1idG4gc2VsZWN0ZWRcIjtcbiAgICBmaWVsZHNbMl0uY2xhc3NOYW1lID0gXCJjaGFuZ2UtaG91cnMgc2hvd1wiO1xuICAgIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVEb3RzID0gKGluZGV4KSA9PiB7XG4gIGRvdHMuZm9yRWFjaCgoZG90KSA9PiBkb3QuY2xhc3NMaXN0LnJlbW92ZShcImRvdC1zZWxlY3RlZFwiKSk7XG4gIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJkb3Qtc2VsZWN0ZWRcIik7XG59O1xuXG5jb25zdCBhZGREYWlseURPTSA9IChzdGF0ZSkgPT4ge1xuICBmb3JlY2FzdEJveC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBkYWlseSA9IHN0YXRlLmZvcmVjYXN0LmZvcmVjYXN0LmRhaWx5RmlsdGVyZWQ7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgZGFpbHkubGVuZ3RoOyBpKyspIHtcbiAgICBmb3JlY2FzdEJveC5pbm5lckhUTUwgKz0gZGF5KFxuICAgICAgZGFpbHlbaV0uZ2V0RGF5KCksXG4gICAgICBkYWlseVtpXS5nZXREYXRlKCksXG4gICAgICBkYWlseVtpXS5tYXhUZW1wLFxuICAgICAgZGFpbHlbaV0ubWluVGVtcCxcbiAgICAgIGRhaWx5W2ldLmljb25cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBhZGRIb3VybHlET00gPSAoc3RhdGUsIGluZGV4KSA9PiB7XG4gIGZvcmVjYXN0Qm94LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGhvdXJseSA9IHN0YXRlLmZvcmVjYXN0LmZvcmVjYXN0LmhvdXJseUZpbHRlcmVkW2luZGV4XTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3VybHkubGVuZ3RoOyBpKyspIHtcbiAgICBmb3JlY2FzdEJveC5pbm5lckhUTUwgKz0gaG91cihcbiAgICAgIGhvdXJseVtpXS5nZXRIb3VyKCksXG4gICAgICBob3VybHlbaV0udGVtcCxcbiAgICAgIGhvdXJseVtpXS5pY29uXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgZGFpbHlCdXR0b24sXG4gIGhvdXJseUJ1dHRvbixcbiAgZG90cyxcbiAgbGVmdEFycm93LFxuICByaWdodEFycm93LFxuICBoYW5kbGUsXG4gIGhhbmRsZURvdHMsXG4gIGFkZERhaWx5RE9NLFxuICBhZGRIb3VybHlET00sXG59O1xuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscydcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vY2xhc3Nlcyc7XG4vLyByaWdodCBiYXJcbmNvbnN0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlY2lwaXRhdGlvbicpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JylcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpXG5jb25zdCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKVxuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKVxuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1pY29uJylcblxuY29uc3QgY29udmVydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0LXRlbXAnKVxuXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtbG9jYXRpb24nKVxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idG4nKVxuLy8gbGVmdCBiYXJcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc19saWtlJylcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5JylcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluX2NoYW5jZScpXG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZF9zcGVlZCcpXG5cblxuZnVuY3Rpb24gbG9hZERPTShmb3JlY2FzdCwgd2VhdGhlcil7XG4gIHByZWNpcGl0YXRpb24udGV4dENvbnRlbnQgPSBmb3JlY2FzdC5nZXRDdXJyZW50RGVzY3JpcHRpb24oKVxuICBjaXR5LnRleHRDb250ZW50ID0gd2VhdGhlci5nZXRUb3duKClcbiAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmdldEN1cnJlbnREYXRlKCkuZGF0ZVxuICB0aW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3QuZ2V0Q3VycmVudERhdGUoKS50aW1lXG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gIGAke2ZvcmVjYXN0LmdldEN1cnJlbnRUZW1wKCl9ICR7dXRpbHMuc2V0VGVtcFVuaXRzKHN0YXRlKX1gXG4gIHdlYXRoZXJJY29uLmlubmVySFRNTCA9ICcnXG4gIHdlYXRoZXJJY29uLmFwcGVuZENoaWxkKGZvcmVjYXN0LmdldEN1cnJlbnRJY29uKCkpXG5cbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuZ2V0Q3VycmVudEZlZWxzTGlrZSgpfSAke3V0aWxzLnNldFRlbXBVbml0cyhzdGF0ZSl9YFxuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmdldEN1cnJlbnRIdW1pZGl0eSgpfSAlYFxuICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5nZXRDdXJyZW50Q2hhbmNlT2ZSYWluKCl9ICVgXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmdldEN1cnJlbnRXaW5kU3BlZWQoKX0gJHt1dGlscy5zZXRTcGVlZFVuaXRzKHN0YXRlKX1gXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml0cyhzdGF0ZSl7XG4gIGNvbnN0IGZvcmVjYXN0ID0gc3RhdGUuZm9yZWNhc3Q7XG4gIGNvbnN0IHdlYXRoZXIgPSBzdGF0ZS53ZWF0aGVyXG4gIGlmKHN0YXRlLnVuaXRzID09PSAnbWV0cmljJyl7XG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudFRlbXAodXRpbHMuY29udmVydFRvRihmb3JlY2FzdC5nZXRDdXJyZW50VGVtcCgpKSlcbiAgICBmb3JlY2FzdC5zZXRDdXJyZW50RmVlbHNMaWtlKHV0aWxzLmNvbnZlcnRUb0YoZm9yZWNhc3QuZ2V0Q3VycmVudEZlZWxzTGlrZSgpKSlcbiAgICBmb3JlY2FzdC5zZXRDdXJyZW50V2luZFNwZWVkKHV0aWxzLmNvbnZlcnRUb01waChmb3JlY2FzdC5nZXRDdXJyZW50V2luZFNwZWVkKCkpKVxuICAgIHN0YXRlLnVuaXRzID0gJ2ltcGVyaWFsJ1xuICAgIGNvbnZlcnRCdXR0b24udGV4dENvbnRlbnQgPSAnRGlzcGxheSDCsEMnXG4gIH1lbHNle1xuICAgIGZvcmVjYXN0LnNldEN1cnJlbnRUZW1wKHV0aWxzLmNvbnZlcnRUb0MoZm9yZWNhc3QuZ2V0Q3VycmVudFRlbXAoKSkpXG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudEZlZWxzTGlrZSh1dGlscy5jb252ZXJ0VG9DKGZvcmVjYXN0LmdldEN1cnJlbnRGZWVsc0xpa2UoKSkpXG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudFdpbmRTcGVlZCh1dGlscy5jb252ZXJ0VG9LbXBoKGZvcmVjYXN0LmdldEN1cnJlbnRXaW5kU3BlZWQoKSkpXG4gICAgc3RhdGUudW5pdHMgPSAnbWV0cmljJ1xuICAgIGNvbnZlcnRCdXR0b24udGV4dENvbnRlbnQgPSAnRGlzcGxheSDCsEYnXG4gIH1cbiAgbG9hZERPTShmb3JlY2FzdCwgd2VhdGhlcilcbn1cblxuZXhwb3J0IHtsb2FkRE9NLCBzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uLCBjb252ZXJ0QnV0dG9uLCBjb252ZXJ0VW5pdHN9IiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmZ1bmN0aW9uIGdldEljb24oY29kZSkge1xuICBjb25zdCBjb2RlcyA9IHtcbiAgICBcIjAxZFwiOiBcIi4vaW1ncy9zdW4uc3ZnXCIsXG4gICAgXCIwMW5cIjogXCIuL2ltZ3MvbW9vbi5zdmdcIixcbiAgICBcIjAyZFwiOiBcIi4vaW1ncy9jbG91ZHktZGF5LnN2Z1wiLFxuICAgIFwiMDJuXCI6IFwiLi9pbWdzL2Nsb3VkeS1uaWdodC5zdmdcIixcbiAgICBcIjAzZFwiOiBcIi4vaW1ncy9jbG91ZC5zdmdcIixcbiAgICBcIjAzblwiOiBcIi4vaW1ncy9jbG91ZC5zdmdcIixcbiAgICBcIjA0ZFwiOiBcIi4vaW1ncy9jbG91ZHkuc3ZnXCIsXG4gICAgXCIwNG5cIjogXCIuL2ltZ3MvY2xvdWR5LnN2Z1wiLFxuICAgIFwiMDlkXCI6IFwiLi9pbWdzL3JhaW55LnN2Z1wiLFxuICAgIFwiMDluXCI6IFwiLi9pbWdzL3JhaW55LnN2Z1wiLFxuICAgIFwiMTBkXCI6IFwiLi9pbWdzL3JhaW55LnN2Z1wiLFxuICAgIFwiMTBuXCI6IFwiLi9pbWdzL3JhaW55LnN2Z1wiLFxuICAgIFwiMTFkXCI6IFwiLi9pbWdzL2xpZ2h0bmluZy5zdmdcIixcbiAgICBcIjExblwiOiBcIi4vaW1ncy9saWdodG5pbmcuc3ZnXCIsXG4gICAgXCIxM2RcIjogXCIuL2ltZ3Mvc25vdy5zdmdcIixcbiAgICBcIjEzblwiOiBcIi4vaW1ncy9zbm93LnN2Z1wiLFxuICAgIFwiNTBkXCI6IFwiLi9pbWdzL21pc3Quc3ZnXCIsXG4gICAgXCI1MG5cIjogXCIuL2ltZ3MvbWlzdC5zdmdcIixcbiAgfTtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoMTAwKTtcbiAgaW1hZ2Uuc3JjID0gY29kZXNbY29kZV07XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgIC5zcGxpdChcIiBcIilcbiAgICAubWFwKCh3b3JkKSA9PiB7XG4gICAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSk7XG4gICAgfSlcbiAgICAuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIHRvRGF0ZVRpbWUoc2Vjb25kcywgdGltZXpvbmUpIHtcbiAgY29uc3QgdCA9IG5ldyBEYXRlKDE5NzAsIDAsIDEpO1xuICB0LnNldFNlY29uZHMoc2Vjb25kcyk7XG4gIHJldHVybiB7XG4gICAgZGF0ZTogdC50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgICB3ZWVrZGF5OiBcInNob3J0XCIsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgfSksXG4gICAgdGltZTogYFRpbWU6ICR7dC50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgICBob3VyMTI6IGZhbHNlLFxuICAgIH0pfWAsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvUmVhZGFibGVUaW1lKHRpbWUpIHtcbiAgdGltZS5zcGxpdChcIiBcIik7XG59XG5cbmZ1bmN0aW9uIHRvUmVhZGFibGVUZW1wKHRlbXApIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodGVtcCk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kVG9PbmUodmFsKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIDEwKSAvIDEwO1xufVxuXG5mdW5jdGlvbiBzZXRUZW1wVW5pdHMoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLnVuaXRzID09PSBcIm1ldHJpY1wiID8gXCLCsENcIiA6IFwiwrBGXCI7XG59XG5mdW5jdGlvbiBzZXRTcGVlZFVuaXRzKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS51bml0cyA9PT0gXCJtZXRyaWNcIiA/IFwia20vaFwiIDogXCJtcGhcIjtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvRih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgKiAxLjggKyAzMjtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvQyh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIC0gMzIpIC8gMS44O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9NcGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIC8gMS42MDkzNDQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0ttcGgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICogMS42MDkzNDQ7XG59XG5cbmZ1bmN0aW9uIGZpbGxEYWlseShhcnJheSkge1xuICByZXR1cm4gYXJyYXkubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR0OiBpdGVtLmR0LFxuICAgICAgbWF4VGVtcDogaXRlbS50ZW1wLm1heCxcbiAgICAgIG1pblRlbXA6IGl0ZW0udGVtcC5taW4sXG4gICAgICBpY29uOiBpdGVtLndlYXRoZXJbMF0uaWNvbixcbiAgICAgIGdldERheTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMTk3MCwgMCwgMSk7XG4gICAgICAgIGRhdGUuc2V0U2Vjb25kcyh0aGlzLmR0KTtcbiAgICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdldERhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgxOTcwLCAwLCAxKTtcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKHRoaXMuZHQpXG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLHtcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGFpbHkoYXJyYXkpe1xuICByZXR1cm4gYXJyYXkubWFwKChpdGVtKT0+e1xuICAgIHJldHVybiB7XG4gICAgICBkdDogaXRlbS5kdCxcbiAgICAgIG1heFRlbXA6ICgoKT0+e1xuICAgICAgICBpZihzdGF0ZS51bml0cyA9PT0gJ21ldHJpYycpe1xuICAgICAgICAgIHJldHVybiBjb252ZXJ0VG9GKGl0ZW0ubWF4VGVtcClcbiAgICAgICAgfVxuICAgICAgICBpZihzdGF0ZS51bml0cyA9PT0gJ2ltcGVyaWFsJyl7XG4gICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0MoaXRlbS5tYXhUZW1wKVxuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgICAgbWluVGVtcDogKCgpPT57XG4gICAgICAgIGlmKHN0YXRlLnVuaXRzID09PSAnbWV0cmljJyl7XG4gICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0YoaXRlbS5taW5UZW1wKVxuICAgICAgICB9XG4gICAgICAgIGlmKHN0YXRlLnVuaXRzID09PSAnaW1wZXJpYWwnKXtcbiAgICAgICAgICByZXR1cm4gY29udmVydFRvQyhpdGVtLm1pblRlbXApXG4gICAgICAgIH1cbiAgICAgIH0pKCksXG4gICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICBnZXREYXk6IGl0ZW0uZ2V0RGF5LFxuICAgICAgZ2V0RGF0ZTogaXRlbS5nZXREYXRlLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZmlsbEhvdXJseShhcnJheSl7XG4gIGNvbnN0IGFyciA9IGFycmF5LnNwbGljZSgwLCAyNClcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IHRlbXAgPSBhcnIubWFwKGl0ZW09PntcbiAgICByZXR1cm4ge1xuICAgICAgdGltZXpvbmU6IHN0YXRlLmZvcmVjYXN0LmZvcmVjYXN0LnRpbWV6b25lLFxuICAgICAgZHQ6IGl0ZW0uZHQsXG4gICAgICB0ZW1wOiBpdGVtLnRlbXAsXG4gICAgICBpY29uOiBpdGVtLndlYXRoZXJbMF0uaWNvbixcbiAgICAgIGdldEhvdXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgxOTcwLCAwLCAxKVxuICAgICAgICBkYXRlLnNldFNlY29uZHModGhpcy5kdCk7XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIse1xuICAgICAgICAgIHRpbWVab25lOiB0aGlzLnRpbWV6b25lLFxuICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHdoaWxlKHRlbXAubGVuZ3RoKXtcbiAgICByZXN1bHQucHVzaCh0ZW1wLnNwbGljZSgwLDgpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gY29udmVydEhvdXJseShhcnJheSl7XG4gIGNvbnN0IHRlbXAgPSBbXTtcbiAgZm9yKGxldCBhcnIgb2YgYXJyYXkpe1xuICAgIHRlbXAucHVzaChhcnIubWFwKChpdGVtKT0+e1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGltZXpvbmU6IGl0ZW0udGltZXpvbmUsXG4gICAgICAgIGR0OiBpdGVtLmR0LFxuICAgICAgICB0ZW1wOiAoKCk9PntcbiAgICAgICAgICBpZihzdGF0ZS51bml0cyA9PT0gJ21ldHJpYycpe1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0YoaXRlbS50ZW1wKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihzdGF0ZS51bml0cyA9PT0gJ2ltcGVyaWFsJyl7XG4gICAgICAgICAgICByZXR1cm4gY29udmVydFRvQyhpdGVtLnRlbXApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpLFxuICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgIGdldEhvdXI6IGl0ZW0uZ2V0SG91cixcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxuICByZXR1cm4gdGVtcDtcbiBcbn1cblxuZXhwb3J0IHtcbiAgZ2V0SWNvbixcbiAgY2FwaXRhbGl6ZSxcbiAgdG9EYXRlVGltZSxcbiAgdG9SZWFkYWJsZVRlbXAsXG4gIHRvUmVhZGFibGVUaW1lLFxuICByb3VuZFRvT25lLFxuICBzZXRUZW1wVW5pdHMsXG4gIHNldFNwZWVkVW5pdHMsXG4gIGNvbnZlcnRUb0YsXG4gIGNvbnZlcnRUb0MsXG4gIGNvbnZlcnRUb01waCxcbiAgY29udmVydFRvS21waCxcbiAgZmlsbERhaWx5LFxuICBjb252ZXJ0RGFpbHksXG4gIGZpbGxIb3VybHksXG4gIGNvbnZlcnRIb3VybHlcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=