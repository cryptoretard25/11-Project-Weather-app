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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsTUFBTSxZQUFZLFdBQVcsS0FBSyxZQUFZLGNBQWMsV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFlBQVksWUFBWSxLQUFLLFlBQVksV0FBVyxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8s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QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQVc7QUFDdEI7QUFDQTtBQUNBLFdBQVcsaURBQVc7QUFDdEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsaURBQVc7QUFDdEI7QUFDQTtBQUNBLFdBQVcsaURBQVc7QUFDdEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNFQUFnQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQVc7QUFDeEI7QUFDQTtBQUNBLGFBQWEsaURBQVc7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBbUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vMTEtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2xvd2VyZG9tLmpzIiwid2VicGFjazovLzExLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy91cHBlcmRvbS5qcyIsIndlYnBhY2s6Ly8xMS1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUHJvc3RvT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9TRi1VSS1EaXNwbGF5LVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JhY2tncm91bmQvYmFja2dyb3VuZDMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUHJvc3RvIG9uZSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2V7XFxuICBmb250LWZhbWlseTogJ1NhbiBGcmFuY2lzY28nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpICBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcblxcbjpyb290e1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4qe1xcbiAgLWJvcmRlcjogMXB4IGRhc2hlZCB3aGl0ZTtcXG5cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXFxuICAtZm9udC1mYW1pbHk6ICdQcm9zdG8gb25lJztcXG4gIGZvbnQtZmFtaWx5OiAnU2FuIEZyYW5jaXNjbyc7XFxufVxcblxcbmJvZHl7XFxuIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbiBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gY29sb3I6IHdoaXRlO1xcbiBcXG4gZGlzcGxheTogZmxleDtcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuZGl2Lm1haW4tY29udGFpbmVye1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcblxcbiAgcGFkZGluZzogODBweCAwO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLypVUFBFUiBCT1gqL1xcbi51cHBlci1ib3h7XFxuICAtYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA0MHB4O1xcblxcbiAgZmxleDogMTtcXG4gIHdpZHRoOiA4NSU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKlJJR0hUKi9cXG4ucmlnaHQudXBwZXItYmFye1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuI3ByZWNpcGl0YXRpb24sIC5kZXRhaWxzX2luZm8+aDF7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuI3RlbXBlcmF0dXJle1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4jY29udmVydC10ZW1we1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcblxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIFxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3dlYXRoZXItaWNvbntcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5pbnB1dFt0eXBlPXRleHRde1xcbmZvbnQtc2l6ZTogMXJlbTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjM1LCAyMTUsIDApO1xcbmJvcmRlcjogbm9uZTtcXG5jb2xvcjogd2hpdGU7XFxucGFkZGluZzogMCA1cHg7XFxud2lkdGg6IDE1MHB4O1xcbn1cXG5pbnB1dFt0eXBlPXRleHRdOmZvY3Vze1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI3NlYXJjaC1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jc2VhcmNoLWJ0bj5pbWd7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLypDRU5URVIqL1xcbi5jZW50ZXIudXBwZXItYmFye1xcbiAgZmxleDogMztcXG59XFxuLypMRUZUKi9cXG4ubGVmdC51cHBlci1iYXJ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogMTVweDtcXG5cXG59XFxuLndlYXRoZXItZGV0YWlsc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5kZXRhaWxzX2ljb257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGV0YWlsc19pY29uPmltZ3tcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG4uZGV0YWlsc19pbmZve1xcbiAgZmxleDoxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG5cXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qTE9XRVIgQk9YKi9cXG4ubG93ZXItYm94e1xcbiAgLWJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZzogMjBweCA0MHB4IDQwcHggNDBweDtcXG5cXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHhcXG59XFxuLmludGVyZmFjZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI1cHg7XFxufVxcbi5pbnRlcmZhY2UtYnRue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNlbGVjdGVke1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbi5jaGFuZ2VfbGVmdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jaGFuZ2VfbGVmdD5pbWcsIC5jaGFuZ2VfcmlnaHQ+aW1ne1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZG90e1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvdC1zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uY2hhbmdlLWhvdXJze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnNob3d7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaGlkZXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mb3JlY2FzdHMtYmxvY2t7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZGFpbHktZm9yZWNhc3QsIC5ob3VybHktZm9yZWNhc3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmRhaWx5X2ljb257XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLmRhaWx5X2ljb24+aW1ne1xcbiAgd2lkdGg6IDUwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlcntcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhvdXJseV90aW1le1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5ob3VybHlfdGVtcHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG4uaG91cmx5X2ljb24+aW1ne1xcbiAgd2lkdGg6IDUwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZ0VBQTZEO0VBQzdELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0VBQWlFO0FBQ25FOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5Qjs7RUFFekIsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtDQUNDLHlEQUEwRDtDQUMxRCxzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLDRCQUE0Qjs7Q0FFNUIsd0JBQXdCOztDQUV4QixpQkFBaUI7Q0FDakIsWUFBWTs7Q0FFWixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOzs7QUFHQTtFQUNFLE9BQU87O0VBRVAsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7O0VBRVQsZUFBZTtBQUNqQjtBQUNBLDBGQUEwRjtBQUMxRixZQUFZO0FBQ1o7RUFDRSx3QkFBd0I7RUFDeEIsNEJBQTRCOztFQUU1QixPQUFPO0VBQ1AsVUFBVTs7RUFFVixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBQ0EsMEZBQTBGO0FBQzFGLFFBQVE7QUFDUjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjs7RUFFakIsbUJBQW1CO0VBQ25CLDhCQUE4Qjs7RUFFOUIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtBQUNBLGVBQWU7QUFDZix3Q0FBd0M7QUFDeEMsWUFBWTtBQUNaLFlBQVk7QUFDWixjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBLFNBQVM7QUFDVDtFQUNFLE9BQU87QUFDVDtBQUNBLE9BQU87QUFDUDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixTQUFTOztBQUVYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxNQUFNOztFQUVOLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTs7QUFFVjtBQUNBLDBGQUEwRjtBQUMxRixZQUFZO0FBQ1o7RUFDRSx3QkFBd0I7RUFDeEIsNEJBQTRCOztFQUU1QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEI7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUHJvc3RvIG9uZSc7XFxuICBzcmM6IHVybCgnLi9mb250cy9Qcm9zdG9PbmUtUmVndWxhci50dGYnKSAgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZXtcXG4gIGZvbnQtZmFtaWx5OiAnU2FuIEZyYW5jaXNjbyc7XFxuICBzcmM6IHVybCgnLi9mb250cy9TRi1VSS1EaXNwbGF5LVJlZ3VsYXIub3RmJykgIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuXFxuOnJvb3R7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbip7XFxuICAtYm9yZGVyOiAxcHggZGFzaGVkIHdoaXRlO1xcblxcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcXG4gIC1mb250LWZhbWlseTogJ1Byb3N0byBvbmUnO1xcbiAgZm9udC1mYW1pbHk6ICdTYW4gRnJhbmNpc2NvJztcXG59XFxuXFxuYm9keXtcXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZ3MvYmFja2dyb3VuZC9iYWNrZ3JvdW5kMy5qcGdcXFwiKTtcXG4gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAtYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiBjb2xvcjogd2hpdGU7XFxuIFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG5kaXYubWFpbi1jb250YWluZXJ7XFxuICBmbGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuXFxuICBwYWRkaW5nOiA4MHB4IDA7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKlVQUEVSIEJPWCovXFxuLnVwcGVyLWJveHtcXG4gIC1ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDQwcHg7XFxuXFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDg1JTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qUklHSFQqL1xcbi5yaWdodC51cHBlci1iYXJ7XFxuICB3aWR0aDogMzUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4jcHJlY2lwaXRhdGlvbiwgLmRldGFpbHNfaW5mbz5oMXtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG4jdGVtcGVyYXR1cmV7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcbiNjb252ZXJ0LXRlbXB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jd2VhdGhlci1pY29ue1xcbiAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcbmlucHV0W3R5cGU9dGV4dF17XFxuZm9udC1zaXplOiAxcmVtO1xcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMzUsIDIxNSwgMCk7XFxuYm9yZGVyOiBub25lO1xcbmNvbG9yOiB3aGl0ZTtcXG5wYWRkaW5nOiAwIDVweDtcXG53aWR0aDogMTUwcHg7XFxufVxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXN7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jc2VhcmNoLWJ0bntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNzZWFyY2gtYnRuPmltZ3tcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4vKkNFTlRFUiovXFxuLmNlbnRlci51cHBlci1iYXJ7XFxuICBmbGV4OiAzO1xcbn1cXG4vKkxFRlQqL1xcbi5sZWZ0LnVwcGVyLWJhcntcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxNXB4O1xcblxcbn1cXG4ud2VhdGhlci1kZXRhaWxze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmRldGFpbHNfaWNvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kZXRhaWxzX2ljb24+aW1ne1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcbi5kZXRhaWxzX2luZm97XFxuICBmbGV4OjE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcblxcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLypMT1dFUiBCT1gqL1xcbi5sb3dlci1ib3h7XFxuICAtYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHggNDBweCA0MHB4O1xcblxcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweFxcbn1cXG4uaW50ZXJmYWNle1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjVweDtcXG59XFxuLmludGVyZmFjZS1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VsZWN0ZWR7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmNoYW5nZV9sZWZ0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNoYW5nZV9sZWZ0PmltZywgLmNoYW5nZV9yaWdodD5pbWd7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kb3R7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0xcHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZG90LXNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5jaGFuZ2UtaG91cnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uc2hvd3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oaWRle1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmZvcmVjYXN0cy1ibG9ja3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kYWlseS1mb3JlY2FzdCwgLmhvdXJseS1mb3JlY2FzdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZGFpbHlfaWNvbntcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4uZGFpbHlfaWNvbj5pbWd7XFxuICB3aWR0aDogNTBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVye1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaG91cmx5X3RpbWV7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmhvdXJseV90ZW1we1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbi5ob3VybHlfaWNvbj5pbWd7XFxuICB3aWR0aDogNTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZXF1ZXN0V2VhdGhlciwgcmVxdWVzdEZvcmVjYXN0LCByZXF1ZXN0Q3VycmVudExvY2F0aW9uLCB9IGZyb20gXCIuL21vZHVsZXMvYXBpXCI7XG5pbXBvcnQgeyBXZWF0aGVyRGF0YSwgRm9yZWNhc3QsIHN0YXRlIH0gZnJvbSBcIi4vbW9kdWxlcy9jbGFzc2VzXCI7XG5pbXBvcnQgeyBsb2FkRE9NLCBzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uLCBjb252ZXJ0QnV0dG9uLCBjb252ZXJ0VW5pdHMsIH0gZnJvbSBcIi4vbW9kdWxlcy91cHBlcmRvbVwiO1xuaW1wb3J0IHsgZGFpbHlCdXR0b24sIGhhbmRsZSwgaGFuZGxlRG90cywgaG91cmx5QnV0dG9uLCBhZGREYWlseURPTSwgYWRkSG91cmx5RE9NLCBkb3RzLCBsZWZ0QXJyb3csIHJpZ2h0QXJyb3csIH0gZnJvbSBcIi4vbW9kdWxlcy9sb3dlcmRvbVwiO1xuXG5jb25zdCB7IGxvZyB9ID0gY29uc29sZTtcbmxvZyhcIkNyZWF0aW5nIG5ldyBwcm9qZWN0XCIpO1xuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gIHN0YXRlLmlucHV0ID0gZS50YXJnZXQudmFsdWU7XG59KTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gIHN0YXRlLndlYXRoZXIgPSBuZXcgV2VhdGhlckRhdGEoXG4gICAgYXdhaXQgcmVxdWVzdFdlYXRoZXIoc3RhdGUuaW5wdXQsIHN0YXRlLnVuaXRzKVxuICApO1xuICBzdGF0ZS5mb3JlY2FzdCA9IG5ldyBGb3JlY2FzdChcbiAgICBhd2FpdCByZXF1ZXN0Rm9yZWNhc3Qoc3RhdGUuaW5wdXQsIHN0YXRlLnVuaXRzKVxuICApO1xuICBzdGF0ZS5mb3JlY2FzdC5zZXREYWlseSgpO1xuICBzdGF0ZS5mb3JlY2FzdC5zZXRIb3VybHkoKTtcblxuICBsb2FkRE9NKHN0YXRlLmZvcmVjYXN0LCBzdGF0ZS53ZWF0aGVyKTtcbiAgaWYgKGRhaWx5QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgYWRkRGFpbHlET00oc3RhdGUpO1xuICB9IGVsc2Uge1xuICAgIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xuICB9XG4gIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG59KTtcblxuY29udmVydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGF0ZS5mb3JlY2FzdC5zZXRDb252ZXJ0ZWREYWlseSgpO1xuICBzdGF0ZS5mb3JlY2FzdC5zZXRDb252ZXJ0ZWRIb3VybHkoKTtcbiAgY29udmVydFVuaXRzKHN0YXRlKTtcbiAgaWYgKGRhaWx5QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgYWRkRGFpbHlET00oc3RhdGUpO1xuICB9IGVsc2Uge1xuICAgIGFkZEhvdXJseURPTShzdGF0ZSwgc3RhdGUuaW5kZXgpO1xuICB9XG59KTtcblxuZGFpbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICBoYW5kbGUodGFyZ2V0KTtcbn0pO1xuXG5ob3VybHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICBoYW5kbGUodGFyZ2V0KTtcbiAgYWRkSG91cmx5RE9NKHN0YXRlLCBzdGF0ZS5pbmRleCk7XG59KTtcblxuZG90cy5mb3JFYWNoKChkb3QpID0+IHtcbiAgZG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5kb3Q7XG4gICAgc3RhdGUuaW5kZXggPSBpbmRleDtcbiAgICBoYW5kbGVEb3RzKHN0YXRlLmluZGV4KTtcbiAgICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbiAgfSk7XG59KTtcblxucmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoc3RhdGUuaW5kZXggPCAyKSB7XG4gICAgc3RhdGUuaW5kZXgrKztcbiAgICBoYW5kbGVEb3RzKHN0YXRlLmluZGV4KTtcbiAgICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbiAgfSBlbHNlIHJldHVybjtcbn0pO1xuXG5sZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHN0YXRlLmluZGV4ID4gMCkge1xuICAgIHN0YXRlLmluZGV4LS07XG4gICAgaGFuZGxlRG90cyhzdGF0ZS5pbmRleCk7XG4gICAgYWRkSG91cmx5RE9NKHN0YXRlLCBzdGF0ZS5pbmRleCk7XG4gIH0gZWxzZSByZXR1cm47XG59KTtcblxuLy8gT25sb2FkIHdpdGggY3VycmVudCB1c2VyIGxvY2F0aW9uXG5zdGF0ZS5pbnB1dCA9IGF3YWl0IHJlcXVlc3RDdXJyZW50TG9jYXRpb24oKTtcblxuKGFzeW5jICgpID0+IHtcbiAgc3RhdGUud2VhdGhlciA9IG5ldyBXZWF0aGVyRGF0YShcbiAgICBhd2FpdCByZXF1ZXN0V2VhdGhlcihzdGF0ZS5pbnB1dCwgc3RhdGUudW5pdHMpXG4gICk7XG4gIHN0YXRlLmZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KFxuICAgIGF3YWl0IHJlcXVlc3RGb3JlY2FzdChzdGF0ZS5pbnB1dCwgc3RhdGUudW5pdHMpXG4gICk7XG4gIHN0YXRlLmZvcmVjYXN0LnNldERhaWx5KCk7XG4gIHN0YXRlLmZvcmVjYXN0LnNldEhvdXJseSgpO1xuXG4gIGxvYWRET00oc3RhdGUuZm9yZWNhc3QsIHN0YXRlLndlYXRoZXIpO1xuICBhZGREYWlseURPTShzdGF0ZSk7XG59KSgpO1xuIiwiXG4vL2NvbnN0IGFwaUtleSA9IFwiMjBmNzYzMmZmYzJjMDIyNjU0ZTQwOTNjNjk0N2I0ZjRcIjtcbmNvbnN0IGFwaUtleSA9ICczMDY5YWUyNzE4ZTQwZjhkYzE5OThiNzI1MGUxNmYxMCdcblxuLy9SZXF1ZXN0aW5nIGN1cnJlbnQgbG9jYXRpb24gaWYgZmV0Y2ggZmFpbHMgdXNlIGRlZmF1bHQgdmFsdWVcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RDdXJyZW50TG9jYXRpb24oKXtcbiAgdHJ5e1xuICBjb25zdCByZXNvbHZlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vaXBhcGkuY28vanNvbi8nKTtcbiAgaWYoIXJlc29sdmUub2spe1xuICAgIHJldHVybiAnZHVzaGFuYmUnXG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZS5qc29uKCk7XG4gIHJldHVybiByZXN1bHQuY2l0eVxuICB9Y2F0Y2goZXJyKXtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgcmV0dXJuICdkdXNoYW5iZSc7XG4gICAgXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdlYXRoZXIoY2l0eSwgdW5pdHMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz0ke3VuaXRzfSZBUFBJRD0ke2FwaUtleX1gXG4gICAgKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbi8vIGNvb3JkcyBjYW1lIGZyb20gcmVxdWVzdFdlYXRoZXJOb3dcbi8vIHVuaXRzICdpbXBlcmlhbCcgb3IgJ21ldHJpYydcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RGb3JlY2FzdChpbnB1dCwgdW5pdHMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRDb29yZHMoaW5wdXQpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmRzLmxhdH0mbG9uPSR7Y29vcmRzLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9YFxuICAgICk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzKGNpdHkpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdFdlYXRoZXIoY2l0eSk7XG4gIHJldHVybiByZXN1bHQuY29vcmQ7XG59XG5cbmV4cG9ydCB7cmVxdWVzdFdlYXRoZXIsIHJlcXVlc3RGb3JlY2FzdCwgcmVxdWVzdEN1cnJlbnRMb2NhdGlvbiwgZ2V0Q29vcmRzIH07XG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgd2VhdGhlcjoge30sXG4gIGZvcmVjYXN0OiB7fSxcbiAgdW5pdHM6ICdtZXRyaWMnLCAvL2ltcGVyaWFsXG4gIGlucHV0OiAnSXZhbm92bycsXG5cbiAgZGFpbHk6IFtdLFxuICBob3VybHk6IFtdLFxuICBpbmRleDogMCxcbn1cblxuY2xhc3MgV2VhdGhlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih3ZWF0aGVyKSB7XG4gICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlcjtcbiAgfVxuICBnZXRUb3duKCkge1xuICAgIHJldHVybiB0aGlzLndlYXRoZXIubmFtZTtcbiAgfVxufVxuXG5jbGFzcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKGZvcmVjYXN0KSB7XG4gICAgdGhpcy5mb3JlY2FzdCA9IGZvcmVjYXN0O1xuICB9XG4gIC8vQ3VycmVudCBkYXlcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgZ2V0Q3VycmVudERlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZm9yZWNhc3QuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHJldHVybiB1dGlscy5jYXBpdGFsaXplKHN0cmluZyk7XG4gIH1cblxuICBnZXRDdXJyZW50RGF0ZSgpIHtcbiAgICByZXR1cm4gdXRpbHMudG9EYXRlVGltZSh0aGlzLmZvcmVjYXN0LmN1cnJlbnQuZHQsIHRoaXMuZm9yZWNhc3QudGltZXpvbmUpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFRlbXAoKSB7XG4gICAgcmV0dXJuIHV0aWxzLnRvUmVhZGFibGVUZW1wKHRoaXMuZm9yZWNhc3QuY3VycmVudC50ZW1wKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRJY29uKCkge1xuICAgIHJldHVybiB1dGlscy5nZXRJY29uKHRoaXMuZm9yZWNhc3QuY3VycmVudC53ZWF0aGVyWzBdLmljb24pO1xuICB9XG5cbiAgZ2V0Q3VycmVudEZlZWxzTGlrZSgpIHtcbiAgICByZXR1cm4gdXRpbHMudG9SZWFkYWJsZVRlbXAodGhpcy5mb3JlY2FzdC5jdXJyZW50LmZlZWxzX2xpa2UpO1xuICB9XG5cbiAgZ2V0Q3VycmVudEh1bWlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHk7XG4gIH1cblxuICBnZXRDdXJyZW50Q2hhbmNlT2ZSYWluKCkge1xuICAgIHJldHVybiB0aGlzLmZvcmVjYXN0LmRhaWx5WzBdLnBvcCAqIDEwMDtcbiAgfVxuXG4gIGdldEN1cnJlbnRXaW5kU3BlZWQoKSB7XG4gICAgcmV0dXJuIHV0aWxzLnJvdW5kVG9PbmUodGhpcy5mb3JlY2FzdC5jdXJyZW50LndpbmRfc3BlZWQpO1xuICB9XG4gIC8vQ3VycmVudCBkYXkgc2V0dGVyc1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBzZXRDdXJyZW50VGVtcCh2YWwpe1xuICAgIHRoaXMuZm9yZWNhc3QuY3VycmVudC50ZW1wID0gdmFsO1xuICB9XG5cbiAgc2V0Q3VycmVudFdpbmRTcGVlZCh2YWwpe1xuICAgIHRoaXMuZm9yZWNhc3QuY3VycmVudC53aW5kX3NwZWVkID0gdmFsXG4gIH1cblxuICBzZXRDdXJyZW50RmVlbHNMaWtlKHZhbCl7XG4gICAgdGhpcy5mb3JlY2FzdC5jdXJyZW50LmZlZWxzX2xpa2UgPSB2YWxcbiAgfVxuICAvL0RBSUxZXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gIHNldERhaWx5KCl7XG4gICAgdGhpcy5mb3JlY2FzdC5kYWlseUZpbHRlcmVkID0gdXRpbHMuZmlsbERhaWx5KHRoaXMuZm9yZWNhc3QuZGFpbHkpO1xuICB9XG5cbiAgc2V0Q29udmVydGVkRGFpbHkoKXtcbiAgICB0aGlzLmZvcmVjYXN0LmRhaWx5RmlsdGVyZWQgPSB1dGlscy5jb252ZXJ0RGFpbHkodGhpcy5mb3JlY2FzdC5kYWlseUZpbHRlcmVkKVxuICB9XG5cbiAgLy9IT1VSTFlcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgc2V0SG91cmx5KCl7XG4gICAgdGhpcy5mb3JlY2FzdC5ob3VybHlGaWx0ZXJlZCA9IHV0aWxzLmZpbGxIb3VybHkodGhpcy5mb3JlY2FzdC5ob3VybHkpXG4gIH1cblxuICBzZXRDb252ZXJ0ZWRIb3VybHkoKXtcbiAgICB0aGlzLmZvcmVjYXN0LmhvdXJseUZpbHRlcmVkID0gdXRpbHMuY29udmVydEhvdXJseSh0aGlzLmZvcmVjYXN0LmhvdXJseUZpbHRlcmVkKVxuICB9XG59XG5cbmV4cG9ydCB7c3RhdGUsIFdlYXRoZXJEYXRhLCBGb3JlY2FzdH0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5cbmNvbnN0IGludGVyZmFjZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50ZXJmYWNlXCIpO1xuY29uc3QgZm9yZWNhc3RCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0cy1ibG9ja1wiKTtcbmNvbnN0IGNoYW5nZUhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNoYW5nZS1ob3Vyc1wiKTtcbmNvbnN0IGZpZWxkcyA9IGludGVyZmFjZUJveC5jaGlsZHJlbjtcblxuY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2VfbGVmdFwiKTtcbmNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZV9yaWdodFwiKTtcbmNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvdFwiKTtcblxuY29uc3QgZGFpbHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuY29uc3QgaG91cmx5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHlcIik7XG5cbmNvbnN0IGRheSA9IChkYXksIGRhdGUsIHRlbXBoaWdoLCB0ZW1wbG93LCBpY29uKSA9PiB7XG4gIHJldHVybiBgIFxuICA8ZGl2IGNsYXNzPVwiZGFpbHktZm9yZWNhc3RcIiBpZD1cImN1cnJlbnQtZGF5XCI+XG4gIDxkaXYgY2xhc3M9XCJkYWlseV9kYXlcIj4ke2RheX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhaWx5X2RhdGVcIj4ke2RhdGV9PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkYWlseV9kYXRlXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkYWlseV90ZW1wXCI+XG4gICAgPGgxIGNsYXNzPVwiZGFpbHlfdGVtcC1oaWdoXCI+JHt1dGlscy50b1JlYWRhYmxlVGVtcChcbiAgICAgIHRlbXBoaWdoXG4gICAgKX0gJHt1dGlscy5zZXRUZW1wVW5pdHMoc3RhdGUpfTwvaDE+XG4gICAgPHAgY2xhc3M9XCJkYWlseV90ZW1wLWxvd1wiPiR7dXRpbHMudG9SZWFkYWJsZVRlbXAoXG4gICAgICB0ZW1wbG93XG4gICAgKX0gJHt1dGlscy5zZXRUZW1wVW5pdHMoc3RhdGUpfTwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkYWlseV9pY29uXCI+XG4gICAgPGltZyBzcmM9JyR7dXRpbHMuZ2V0SWNvbihpY29uKS5zcmN9Jz5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgYDtcbn07XG5cbmNvbnN0IGhvdXIgPSAodGltZSwgdGVtcCwgaWNvbikgPT4ge1xuICByZXR1cm4gYFxuICA8ZGl2IGNsYXNzPVwiaG91cmx5LWZvcmVjYXN0XCIgaWQ9XCJjdXJyZW50LWhvdXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaG91cmx5X3RpbWVcIj4ke3RpbWUudG9Mb3dlckNhc2UoKX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaG91cmx5X3RlbXBcIj4ke3V0aWxzLnRvUmVhZGFibGVUZW1wKHRlbXApfSAke3V0aWxzLnNldFRlbXBVbml0cyhcbiAgICBzdGF0ZVxuICApfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJob3VybHlfaWNvblwiPlxuICAgICAgPGltZyBzcmM9JyR7dXRpbHMuZ2V0SWNvbihpY29uKS5zcmN9Jz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+ICBcbiAgYDtcbn07XG5cbmNvbnN0IGhhbmRsZSA9ICh0YXJnZXQpID0+IHtcbiAgZm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICB9XG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFpbHlcIikpIHtcbiAgICBmaWVsZHNbMF0uY2xhc3NOYW1lID0gXCJkYWlseSBpbnRlcmZhY2UtYnRuIHNlbGVjdGVkXCI7XG4gICAgZmllbGRzWzJdLmNsYXNzTmFtZSA9IFwiY2hhbmdlLWhvdXJzIGhpZGVcIjtcbiAgICBhZGREYWlseURPTShzdGF0ZSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhvdXJseVwiKSkge1xuICAgIGZpZWxkc1sxXS5jbGFzc05hbWUgPSBcImhvdXJseSBpbnRlcmZhY2UtYnRuIHNlbGVjdGVkXCI7XG4gICAgZmllbGRzWzJdLmNsYXNzTmFtZSA9IFwiY2hhbmdlLWhvdXJzIHNob3dcIjtcbiAgICBhZGRIb3VybHlET00oc3RhdGUsIHN0YXRlLmluZGV4KTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlRG90cyA9IChpbmRleCkgPT4ge1xuICBkb3RzLmZvckVhY2goKGRvdCkgPT4gZG90LmNsYXNzTGlzdC5yZW1vdmUoXCJkb3Qtc2VsZWN0ZWRcIikpO1xuICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiZG90LXNlbGVjdGVkXCIpO1xufTtcblxuY29uc3QgYWRkRGFpbHlET00gPSAoc3RhdGUpID0+IHtcbiAgZm9yZWNhc3RCb3guaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgZGFpbHkgPSBzdGF0ZS5mb3JlY2FzdC5mb3JlY2FzdC5kYWlseUZpbHRlcmVkO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGRhaWx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yZWNhc3RCb3guaW5uZXJIVE1MICs9IGRheShcbiAgICAgIGRhaWx5W2ldLmdldERheSgpLFxuICAgICAgZGFpbHlbaV0uZ2V0RGF0ZSgpLFxuICAgICAgZGFpbHlbaV0ubWF4VGVtcCxcbiAgICAgIGRhaWx5W2ldLm1pblRlbXAsXG4gICAgICBkYWlseVtpXS5pY29uXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgYWRkSG91cmx5RE9NID0gKHN0YXRlLCBpbmRleCkgPT4ge1xuICBmb3JlY2FzdEJveC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBob3VybHkgPSBzdGF0ZS5mb3JlY2FzdC5mb3JlY2FzdC5ob3VybHlGaWx0ZXJlZFtpbmRleF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cmx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yZWNhc3RCb3guaW5uZXJIVE1MICs9IGhvdXIoXG4gICAgICBob3VybHlbaV0uZ2V0SG91cigpLFxuICAgICAgaG91cmx5W2ldLnRlbXAsXG4gICAgICBob3VybHlbaV0uaWNvblxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGRhaWx5QnV0dG9uLFxuICBob3VybHlCdXR0b24sXG4gIGRvdHMsXG4gIGxlZnRBcnJvdyxcbiAgcmlnaHRBcnJvdyxcbiAgaGFuZGxlLFxuICBoYW5kbGVEb3RzLFxuICBhZGREYWlseURPTSxcbiAgYWRkSG91cmx5RE9NLFxufTtcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL2NsYXNzZXMnO1xuLy8gcmlnaHQgYmFyXG5jb25zdCBwcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWNpcGl0YXRpb24nKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpXG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKVxuY29uc3QgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJylcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJylcbmNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItaWNvbicpXG5cbmNvbnN0IGNvbnZlcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVydC10ZW1wJylcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWxvY2F0aW9uJylcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnRuJylcbi8vIGxlZnQgYmFyXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNfbGlrZScpXG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpXG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbl9jaGFuY2UnKVxuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRfc3BlZWQnKVxuXG5cbmZ1bmN0aW9uIGxvYWRET00oZm9yZWNhc3QsIHdlYXRoZXIpe1xuICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID0gZm9yZWNhc3QuZ2V0Q3VycmVudERlc2NyaXB0aW9uKClcbiAgY2l0eS50ZXh0Q29udGVudCA9IHdlYXRoZXIuZ2V0VG93bigpXG4gIGRhdGUudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5nZXRDdXJyZW50RGF0ZSgpLmRhdGVcbiAgdGltZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmdldEN1cnJlbnREYXRlKCkudGltZVxuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9ICBgJHtmb3JlY2FzdC5nZXRDdXJyZW50VGVtcCgpfSAke3V0aWxzLnNldFRlbXBVbml0cyhzdGF0ZSl9YFxuICB3ZWF0aGVySWNvbi5pbm5lckhUTUwgPSAnJ1xuICB3ZWF0aGVySWNvbi5hcHBlbmRDaGlsZChmb3JlY2FzdC5nZXRDdXJyZW50SWNvbigpKVxuXG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmdldEN1cnJlbnRGZWVsc0xpa2UoKX0gJHt1dGlscy5zZXRUZW1wVW5pdHMoc3RhdGUpfWBcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5nZXRDdXJyZW50SHVtaWRpdHkoKX0gJWBcbiAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuZ2V0Q3VycmVudENoYW5jZU9mUmFpbigpfSAlYFxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5nZXRDdXJyZW50V2luZFNwZWVkKCl9ICR7dXRpbHMuc2V0U3BlZWRVbml0cyhzdGF0ZSl9YFxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5pdHMoc3RhdGUpe1xuICBjb25zdCBmb3JlY2FzdCA9IHN0YXRlLmZvcmVjYXN0O1xuICBjb25zdCB3ZWF0aGVyID0gc3RhdGUud2VhdGhlclxuICBpZihzdGF0ZS51bml0cyA9PT0gJ21ldHJpYycpe1xuICAgIGZvcmVjYXN0LnNldEN1cnJlbnRUZW1wKHV0aWxzLmNvbnZlcnRUb0YoZm9yZWNhc3QuZ2V0Q3VycmVudFRlbXAoKSkpXG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudEZlZWxzTGlrZSh1dGlscy5jb252ZXJ0VG9GKGZvcmVjYXN0LmdldEN1cnJlbnRGZWVsc0xpa2UoKSkpXG4gICAgZm9yZWNhc3Quc2V0Q3VycmVudFdpbmRTcGVlZCh1dGlscy5jb252ZXJ0VG9NcGgoZm9yZWNhc3QuZ2V0Q3VycmVudFdpbmRTcGVlZCgpKSlcbiAgICBzdGF0ZS51bml0cyA9ICdpbXBlcmlhbCdcbiAgICBjb252ZXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ0Rpc3BsYXkgwrBDJ1xuICB9ZWxzZXtcbiAgICBmb3JlY2FzdC5zZXRDdXJyZW50VGVtcCh1dGlscy5jb252ZXJ0VG9DKGZvcmVjYXN0LmdldEN1cnJlbnRUZW1wKCkpKVxuICAgIGZvcmVjYXN0LnNldEN1cnJlbnRGZWVsc0xpa2UodXRpbHMuY29udmVydFRvQyhmb3JlY2FzdC5nZXRDdXJyZW50RmVlbHNMaWtlKCkpKVxuICAgIGZvcmVjYXN0LnNldEN1cnJlbnRXaW5kU3BlZWQodXRpbHMuY29udmVydFRvS21waChmb3JlY2FzdC5nZXRDdXJyZW50V2luZFNwZWVkKCkpKVxuICAgIHN0YXRlLnVuaXRzID0gJ21ldHJpYydcbiAgICBjb252ZXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ0Rpc3BsYXkgwrBGJ1xuICB9XG4gIGxvYWRET00oZm9yZWNhc3QsIHdlYXRoZXIpXG59XG5cbmV4cG9ydCB7bG9hZERPTSwgc2VhcmNoSW5wdXQsIHNlYXJjaEJ1dHRvbiwgY29udmVydEJ1dHRvbiwgY29udmVydFVuaXRzfSIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuXG5mdW5jdGlvbiBnZXRJY29uKGNvZGUpIHtcbiAgY29uc3QgY29kZXMgPSB7XG4gICAgXCIwMWRcIjogXCIuL2ltZ3Mvc3VuLnN2Z1wiLFxuICAgIFwiMDFuXCI6IFwiLi9pbWdzL21vb24uc3ZnXCIsXG4gICAgXCIwMmRcIjogXCIuL2ltZ3MvY2xvdWR5LWRheS5zdmdcIixcbiAgICBcIjAyblwiOiBcIi4vaW1ncy9jbG91ZHktbmlnaHQuc3ZnXCIsXG4gICAgXCIwM2RcIjogXCIuL2ltZ3MvY2xvdWQuc3ZnXCIsXG4gICAgXCIwM25cIjogXCIuL2ltZ3MvY2xvdWQuc3ZnXCIsXG4gICAgXCIwNGRcIjogXCIuL2ltZ3MvY2xvdWR5LnN2Z1wiLFxuICAgIFwiMDRuXCI6IFwiLi9pbWdzL2Nsb3VkeS5zdmdcIixcbiAgICBcIjA5ZFwiOiBcIi4vaW1ncy9yYWlueS5zdmdcIixcbiAgICBcIjA5blwiOiBcIi4vaW1ncy9yYWlueS5zdmdcIixcbiAgICBcIjEwZFwiOiBcIi4vaW1ncy9yYWlueS5zdmdcIixcbiAgICBcIjEwblwiOiBcIi4vaW1ncy9yYWlueS5zdmdcIixcbiAgICBcIjExZFwiOiBcIi4vaW1ncy9saWdodG5pbmcuc3ZnXCIsXG4gICAgXCIxMW5cIjogXCIuL2ltZ3MvbGlnaHRuaW5nLnN2Z1wiLFxuICAgIFwiMTNkXCI6IFwiLi9pbWdzL3Nub3cuc3ZnXCIsXG4gICAgXCIxM25cIjogXCIuL2ltZ3Mvc25vdy5zdmdcIixcbiAgICBcIjUwZFwiOiBcIi4vaW1ncy9taXN0LnN2Z1wiLFxuICAgIFwiNTBuXCI6IFwiLi9pbWdzL21pc3Quc3ZnXCIsXG4gIH07XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKDEwMCk7XG4gIGltYWdlLnNyYyA9IGNvZGVzW2NvZGVdO1xuICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICAuc3BsaXQoXCIgXCIpXG4gICAgLm1hcCgod29yZCkgPT4ge1xuICAgICAgcmV0dXJuIHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpO1xuICAgIH0pXG4gICAgLmpvaW4oXCIgXCIpO1xufVxuXG5mdW5jdGlvbiB0b0RhdGVUaW1lKHNlY29uZHMsIHRpbWV6b25lKSB7XG4gIGNvbnN0IHQgPSBuZXcgRGF0ZSgxOTcwLCAwLCAxKTtcbiAgdC5zZXRTZWNvbmRzKHNlY29uZHMpO1xuICByZXR1cm4ge1xuICAgIGRhdGU6IHQudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgICAgd2Vla2RheTogXCJzaG9ydFwiLFxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH0pLFxuICAgIHRpbWU6IGBUaW1lOiAke3QudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICB9KX1gLFxuICB9O1xufVxuXG5mdW5jdGlvbiB0b1JlYWRhYmxlVGltZSh0aW1lKSB7XG4gIHRpbWUuc3BsaXQoXCIgXCIpO1xufVxuXG5mdW5jdGlvbiB0b1JlYWRhYmxlVGVtcCh0ZW1wKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHRlbXApO1xufVxuXG5mdW5jdGlvbiByb3VuZFRvT25lKHZhbCkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiAxMCkgLyAxMDtcbn1cblxuZnVuY3Rpb24gc2V0VGVtcFVuaXRzKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS51bml0cyA9PT0gXCJtZXRyaWNcIiA/IFwiwrBDXCIgOiBcIsKwRlwiO1xufVxuZnVuY3Rpb24gc2V0U3BlZWRVbml0cyhzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUudW5pdHMgPT09IFwibWV0cmljXCIgPyBcImttL2hcIiA6IFwibXBoXCI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0YodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICogMS44ICsgMzI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0ModmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIDMyKSAvIDEuODtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvTXBoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAvIDEuNjA5MzQ0O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9LbXBoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAqIDEuNjA5MzQ0O1xufVxuXG5mdW5jdGlvbiBmaWxsRGFpbHkoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkdDogaXRlbS5kdCxcbiAgICAgIG1heFRlbXA6IGl0ZW0udGVtcC5tYXgsXG4gICAgICBtaW5UZW1wOiBpdGVtLnRlbXAubWluLFxuICAgICAgaWNvbjogaXRlbS53ZWF0aGVyWzBdLmljb24sXG4gICAgICBnZXREYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDE5NzAsIDAsIDEpO1xuICAgICAgICBkYXRlLnNldFNlY29uZHModGhpcy5kdCk7XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnZXREYXRlOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMTk3MCwgMCwgMSk7XG4gICAgICAgIGRhdGUuc2V0U2Vjb25kcyh0aGlzLmR0KVxuICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJyx7XG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydERhaWx5KGFycmF5KXtcbiAgcmV0dXJuIGFycmF5Lm1hcCgoaXRlbSk9PntcbiAgICByZXR1cm4ge1xuICAgICAgZHQ6IGl0ZW0uZHQsXG4gICAgICBtYXhUZW1wOiAoKCk9PntcbiAgICAgICAgaWYoc3RhdGUudW5pdHMgPT09ICdtZXRyaWMnKXtcbiAgICAgICAgICByZXR1cm4gY29udmVydFRvRihpdGVtLm1heFRlbXApXG4gICAgICAgIH1cbiAgICAgICAgaWYoc3RhdGUudW5pdHMgPT09ICdpbXBlcmlhbCcpe1xuICAgICAgICAgIHJldHVybiBjb252ZXJ0VG9DKGl0ZW0ubWF4VGVtcClcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICAgIG1pblRlbXA6ICgoKT0+e1xuICAgICAgICBpZihzdGF0ZS51bml0cyA9PT0gJ21ldHJpYycpe1xuICAgICAgICAgIHJldHVybiBjb252ZXJ0VG9GKGl0ZW0ubWluVGVtcClcbiAgICAgICAgfVxuICAgICAgICBpZihzdGF0ZS51bml0cyA9PT0gJ2ltcGVyaWFsJyl7XG4gICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0MoaXRlbS5taW5UZW1wKVxuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgZ2V0RGF5OiBpdGVtLmdldERheSxcbiAgICAgIGdldERhdGU6IGl0ZW0uZ2V0RGF0ZSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZpbGxIb3VybHkoYXJyYXkpe1xuICBjb25zdCBhcnIgPSBhcnJheS5zcGxpY2UoMCwgMjQpXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCB0ZW1wID0gYXJyLm1hcChpdGVtPT57XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWV6b25lOiBzdGF0ZS5mb3JlY2FzdC5mb3JlY2FzdC50aW1lem9uZSxcbiAgICAgIGR0OiBpdGVtLmR0LFxuICAgICAgdGVtcDogaXRlbS50ZW1wLFxuICAgICAgaWNvbjogaXRlbS53ZWF0aGVyWzBdLmljb24sXG4gICAgICBnZXRIb3VyOiBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMTk3MCwgMCwgMSlcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKHRoaXMuZHQpO1xuICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLHtcbiAgICAgICAgICB0aW1lWm9uZTogdGhpcy50aW1lem9uZSxcbiAgICAgICAgICBob3VyMTI6IHRydWUsXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9KVxuICB3aGlsZSh0ZW1wLmxlbmd0aCl7XG4gICAgcmVzdWx0LnB1c2godGVtcC5zcGxpY2UoMCw4KSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRIb3VybHkoYXJyYXkpe1xuICBjb25zdCB0ZW1wID0gW107XG4gIGZvcihsZXQgYXJyIG9mIGFycmF5KXtcbiAgICB0ZW1wLnB1c2goYXJyLm1hcCgoaXRlbSk9PntcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpbWV6b25lOiBpdGVtLnRpbWV6b25lLFxuICAgICAgICBkdDogaXRlbS5kdCxcbiAgICAgICAgdGVtcDogKCgpPT57XG4gICAgICAgICAgaWYoc3RhdGUudW5pdHMgPT09ICdtZXRyaWMnKXtcbiAgICAgICAgICAgIHJldHVybiBjb252ZXJ0VG9GKGl0ZW0udGVtcClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoc3RhdGUudW5pdHMgPT09ICdpbXBlcmlhbCcpe1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRUb0MoaXRlbS50ZW1wKVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKSxcbiAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICBnZXRIb3VyOiBpdGVtLmdldEhvdXIsXG4gICAgICB9XG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIHRlbXA7XG4gXG59XG5cbmV4cG9ydCB7XG4gIGdldEljb24sXG4gIGNhcGl0YWxpemUsXG4gIHRvRGF0ZVRpbWUsXG4gIHRvUmVhZGFibGVUZW1wLFxuICB0b1JlYWRhYmxlVGltZSxcbiAgcm91bmRUb09uZSxcbiAgc2V0VGVtcFVuaXRzLFxuICBzZXRTcGVlZFVuaXRzLFxuICBjb252ZXJ0VG9GLFxuICBjb252ZXJ0VG9DLFxuICBjb252ZXJ0VG9NcGgsXG4gIGNvbnZlcnRUb0ttcGgsXG4gIGZpbGxEYWlseSxcbiAgY29udmVydERhaWx5LFxuICBmaWxsSG91cmx5LFxuICBjb252ZXJ0SG91cmx5XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9