(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Hoot", [], factory);
	else if(typeof exports === 'object')
		exports["Hoot"] = factory();
	else
		root["Hoot"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hoot.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./Core/index.js":
/*!***********************!*\
  !*** ./Core/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const Core = {
    Engine: __webpack_require__(/*! ./modules/Engine.js */ "./Core/modules/Engine.js"),
    Event: __webpack_require__(/*! ./modules/Event */ "./Core/modules/Event.js"),
    Events: __webpack_require__(/*! ./modules/Events */ "./Core/modules/Events.js")
};

module.exports = Core;



/***/ }),

/***/ "./Core/modules/Engine.js":
/*!********************************!*\
  !*** ./Core/modules/Engine.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



class Engine {
    constructor(config) {
        this.config = null;
        if (typeof config === "string") {
            let xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                this.config = this.fixConfig(JSON.parse(xhttp.responseText));
            }.bind(this);
            xhttp.open("GET", config);
            xhttp.send(null);
        }else {
            this.config = this.fixConfig(config);
        }
    }

    fixConfig(config) {
        if (typeof config !== "object") {
            config = {
                title: "",
                author: "",
                version: "1.0.0",
                description: "",
                parent: "",
                scale: {
                    width: 960,
                    height: 720,
                    mode: "DEFAULT"
                },
                renderer: {
                    smoothing: true
                }
            };
        }else {
            // TODO Put all configuration values that will need to be set and FIXED here!
            if (typeof config.title !== "string") {
                config.title = "";
            }
            if (typeof config.author !== "string") {
                config.author = "";
            }
            if (typeof config.version !== "string") {
                config.version = "1.0.0";
            }
            if (typeof config.description !== "string") {
                config.description = "";
            }
            if (typeof config.parent !== "string") {
                config.parent = "";
            }
            if (typeof config.scale !== "object") {
                config.scale = {
                    width: 960,
                    height: 720,
                    mode: "DEFAULT"
                };
            }else {
                if (typeof config.scale.width !== "number") {
                    config.scale.width = 960;
                }
                if (typeof config.scale.height !== "number") {
                    config.scale.height = 720;
                }
                if (typeof config.scale.mode !== "string") {
                    config.scale.mode = "DEFAULT";
                }
            }
            if (typeof config.renderer !== "object") {
                config.renderer = {
                    smoothingEnabled: true
                };
            }else {
                if (typeof config.renderer.smoothingEnabled !== "boolean") {
                    config.renderer.smoothingEnabled = true;
                }
            }
        }
    }
}

module.exports = Engine;

/***/ }),

/***/ "./Core/modules/Event.js":
/*!*******************************!*\
  !*** ./Core/modules/Event.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Event extends CustomEvent {
    constructor(eventName, options) {
        super(eventName, { detail: options });

        this.name = eventName;
        this.options = options;
    }

    dispatch() {
        document.dispatchEvent(this);
    }
}

module.exports = Event;

/***/ }),

/***/ "./Core/modules/Events.js":
/*!********************************!*\
  !*** ./Core/modules/Events.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Events {
    static on(eventName, callback, callbackScope) {
        document.addEventListener(eventName, function(event) {
            callback(event.detail);
        }.bind(callbackScope || null));
    }
}

module.exports = Events;

/***/ }),

/***/ "./DOM/index.js":
/*!**********************!*\
  !*** ./DOM/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const DOM = {
    Display: __webpack_require__(/*! ./modules/Display */ "./DOM/modules/Display.js")
};

module.exports = DOM;

/***/ }),

/***/ "./DOM/modules/Display.js":
/*!********************************!*\
  !*** ./DOM/modules/Display.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



class Display {
    constructor(parent, width, height, options) {
        this.parent = parent;
        this.options = options || {};

        this.size = {
            width: width || 960,
            height: height || 720
        };

        this.scale = {
            x: 1,
            y: 1
        };

        this.canvas = null;
        this.context = null;
        if (document.readyState === "complete") {
            this.init();
        }else {
            window.onload = this.init;
        }

    }

    init() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
        this.context = this.canvas.getContext("2d");
        this.context.translate(0.5, 0.5);
        this.context.scale(this.scale.x, this.scale.y);

        if (typeof this.options.smoothingEnabled === "boolean") {
            this.context.imageSmoothingEnabled = this.options.smoothingEnabled;
        }

        if (typeof this.parent == null) {
            document.body.appendChild(this.canvas);
        }else {
            document.getElementById(this.parent).appendChild(this.canvas);
        }
    }

    getWidth() {
        return this.size.width;
    }

    getHeight() {
        return this.size.height;
    }

    getCanvas() {
        return this.canvas;
    }

    getContext() {
        return this.context;
    }
}

module.exports = Display;


/***/ }),

/***/ "./Loader/index.js":
/*!*************************!*\
  !*** ./Loader/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



const Loader = {
    Image: __webpack_require__(/*! ./modules/Image.js */ "./Loader/modules/Image.js")
};

module.exports = Loader;

/***/ }),

/***/ "./Loader/modules/Image.js":
/*!*********************************!*\
  !*** ./Loader/modules/Image.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Image {

}

module.exports = Image;

/***/ }),

/***/ "./Utils/index.js":
/*!************************!*\
  !*** ./Utils/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {


const Utils = {

};

module.exports = Utils;

/***/ }),

/***/ "./hoot.js":
/*!*****************!*\
  !*** ./hoot.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {

const Hoot = {
    Core: __webpack_require__(/*! ./Core */ "./Core/index.js"),
    DOM: __webpack_require__(/*! ./DOM */ "./DOM/index.js"),
    Loader: __webpack_require__(/*! ./Loader */ "./Loader/index.js"),
    Utils: __webpack_require__(/*! ./Utils */ "./Utils/index.js")
};

module.exports = Hoot;
global.Hoot = Hoot;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
});
//# sourceMappingURL=hoot.js.map