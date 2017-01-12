/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function () {
  var cssNumbers = {
    columnCount: true,
    fillOpacity: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true,
    zoom: true
  };

  var support = (function () {
    // Taken from https://github.com/jquery/jquery-migrate/blob/master/src/core.js
    function uaMatch(ua) {
      ua = ua.toLowerCase();

      var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    }
    var browserData = uaMatch(navigator.userAgent);

    return {
      isIE: browserData.browser == 'msie' || (browserData.browser == 'mozilla' && parseInt(browserData.version, 10) == 11)
    };
  })();

  function ConsoleMessage() {
    if (!ConsoleMessage.prototype.isPrototypeOf(this)) {
      return new ConsoleMessage();
    }
    this._rootSpan = {
      styles: {},
      children: [],
      parent: null
    };
    this._currentSpan = this._rootSpan;
    this._waiting = 0;
    this._readyCallback = null;
  }

  ConsoleMessage.prototype = {
    /**
     * Begins a group. By default the group is expanded. Provide false if you want the group to be collapsed.
     * @param {boolean} [expanded = true] -
     * @returns {ConsoleMessage} - Returns the message object itself to allow chaining.
     */
    group: function (expanded) {
      this._currentSpan.children.push({
        type: expanded === false ? 'groupCollapsed' : 'group',
        parent: this._currentSpan
      });
      return this;
    },

    /**
     * Ends the group and returns to writing to the parent message.
     * @returns {ConsoleMessage} - Returns the message object itself to allow chaining.
     */
    groupEnd: function () {
      this._currentSpan.children.push({
        type: 'groupEnd',
        parent: this._currentSpan
      });
      return this;
    },

    /**
     * Starts a span with particular style and all appended text after it will use the style.
     * @param {Object} styles - The CSS styles to be applied to all text until endSpan() is called
     * @returns {ConsoleMessage} - Returns the message object itself to allow chaining.
     */
    span: function (styles) {
      var span = {
        type: 'span',
        styles: apply(styles || {}, this._currentSpan.styles),
        children: [],
        parent: this._currentSpan
      };
      this._currentSpan.children.push(span);
      this._currentSpan = span;
      return this;
    },

    /**
     * Ends the current span styles and backs to the previous styles or the root if there are no other parents.
     * @returns {ConsoleMessage} - Returns the message object itself to allow chaining.
     */
    spanEnd: function () {
      this._currentSpan = this._currentSpan.parent || this._currentSpan;
      return this;
    },

    /**
     * Appends a text to the current message. All styles in the current span are applied.
     * @param {string} text - The text to be appended
     * @returns {ConsoleMessage} - Returns the message object itself to allow chaining.
     */
    text: function (text, styles) {
      this.span(styles);
      this._currentSpan.children.push({
        type: 'text',
        message: text,
        parent: this._currentSpan
      });
      return this.spanEnd();
    },

    /**
     * Adds a new line to the output.
     * @returns {ConsoleMessage} - Returns the message object itself to allow chaining.
     */
    line: function (type) {
      this._currentSpan.children.push({
        type: type || 'log',
        parent: this._currentSpan
      });
      return this;
    },

    /**
     * Adds an interactive DOM element to the output.
     * @param {HTMLElement} element - The DOM element to be added.
     * @returns {ConsoleMessage} - Returns the message object itself to allow chaining.
     */
    element: function (element) {
      this._currentSpan.children.push({
        type: 'element',
        element: element,
        parent: this._currentSpan
      });
      return this;
    },

    /**
     * Adds an interactive object tree to the output.
     * @param {*} object - A value to be added to the output.
     * @returns {ConsoleMessage} - Returns the message object itself to allow chaining.
     */
    object: function (object) {
      this._currentSpan.children.push({
        type: 'object',
        object: object,
        parent: this._currentSpan
      });
      return this;
    },

    /**
     * Prints the message to the console.
     * Until print() is called there will be no result to the console.
     */
    print: function () {
      if (typeof console != 'undefined') {
        var messages = [this._newMessage()];
        var message;

        this._printSpan(this._rootSpan, messages);

        for (var i = 0; i < messages.length; i++) {
          message = messages[i];
          if (message.text && message.text != '%c' && console[message.type]) {
            this._printMessage(message);
          }
        }
      }

      return new ConsoleMessage();
    },

    _printMessage: function (message) {
      Function.prototype.apply.call(
        console[message.type],
        console,
        [message.text].concat(message.args)
      );
    },

    _printSpan: function (span, messages) {
      var children = span.children;
      var message = messages[messages.length - 1];

      this._addSpanData(span, message);

      for (var i = 0; i < children.length; i++) {
        this._handleChild(children[i], messages);
      }
    },

    _handleChild: function (child, messages) {
      var message = messages[messages.length - 1];

      switch (child.type) {
        case 'group':
          messages.push(this._newMessage('group'));
          break;
        case 'groupCollapsed':
          messages.push(this._newMessage('groupCollapsed'));
          break;
        case 'groupEnd':
          message = this._newMessage('groupEnd');
          message.text = ' ';
          messages.push(message);
          messages.push(this._newMessage());
          break;
        case 'span':
          this._printSpan(child, messages);
          this._addSpanData(child, message);
          this._addSpanData(child.parent, message);
          break;
        case 'text':
          message.text += child.message;
          break;
        case 'element':
          message.text += '%o';
          message.args.push(child.element);
          break;
        case 'object':
          message.text += '%O';
          message.args.push(child.object);
          break;
        case 'log':
          messages.push(this._newMessage(child.type));
          break;
      }
    },

    _addSpanData: function (span, message) {
      if (!support.isIE) {
        if (message.text.substring(message.text.length - 2) == '%c') {
          message.args[message.args.length - 1] = this._stylesString(span.styles);
        } else {
          message.text += '%c';
          message.args.push(this._stylesString(span.styles));
        }
      }
    },

    _newMessage: function (type) {
      return {
        type: type || 'log',
        text: '',
        args: []
      };
    },

    _stylesString: function (styles) {
      var result = '';
      var value;
      var key;

      for (key in styles) {
        value = styles[key];
        key = this._fixCssStyleKey(key);

        if (typeof value === 'number' && !cssNumbers[key]) {
          value += 'px';
        }
        result += this._toDashKey(key) + ':' + value + ';';
      }

      return result;
    },

    _fixCssStyleKey: function (key) {
      return key.replace(/-\w/g, function (match) {
        return match.charAt(1).toUpperCase();
      });
    },

    _toDashKey: function (key) {
      return key.replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
      });
    }
  };

  function apply(options, object) {
    for (var key in object) {
      if (options[key] === undefined) {
        options[key] = object[key];
      }
    }
    return options;
  }

  if (typeof window != 'undefined') {
    if (!window.console) {
      window.console = {};
    }

    /**
     * Creates a message object.
     * @returns {ConsoleMessage} - The message object
     */
    window.console.message = ConsoleMessage;
  }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var Migrate = function (rules) {

    var logs = {}, current_component, current_selector, color = {
        title: '#ee6666',
        warning: '#ffb24e',
        danger: '#e44e56',
        success: '#3dc372',
        link: '#4091D2',
    };

    function log(message, type) {
        logs[current_component][current_selector].messages.push({message: message, type: type});
    }

    /**
     * placeholder: @docs/componentname/#hash
     * @param placeholder
     */
    function createLink(placeholder) {
        var base = 'http://getuikit.com', parts = placeholder.split('/');
        if (placeholder === '@docs/home') {
            return base;
        }
        if (parts[0] === '@docs') {
            //todo fix links for UIkit3 site
            return (base + "/docs/" + (parts[1]) + ((parts[2] || '')));
        } else {
            //external link
            return placeholder;
        }
    }

    function queryElements(selector) {
        try {
            return document.querySelectorAll(selector);
        } catch (ignore) {
            console.error(("Error in selector " + selector));
            return [];
        }
    }

    function doCheck() {
        var version = document.querySelector('html').dataset.uk_version;
        if (version) {
            console.message()
                .text(("UIkit version " + version + " detected."), {color: color.title, fontSize: 12})
                .line().print();
        }

        console.message()
            .text("Starting migration helper", {color: color.title, fontSize: 12})
            .line().print();

        rules.forEach(function (component) {
            current_component = component.name;
            logs[current_component] = {};

            component.messages.forEach(function (message) {
                var elements = queryElements(message.selector);
                //only add one group of messages per selector
                current_selector = message.selector;
                logs[current_component][current_selector] = {
                    warning: message.warning || '',
                    notice: message.notice || '',
                    messages: []
                };

                if (elements.length) {

                    //log messages
                    for (var index in elements) {
                        var ele = elements.index;
                        log(ele, 'element');
                        //check for additional messages
                        if (typeof message.check === 'function') {
                            var additionalMessage = message.check(ele);
                            if (additionalMessage) {
                                log(additionalMessage);
                            }

                        }
                    }
                    if (message.example) {
                        log(message.example, 'example');
                    }
                    //add link
                    log(message.docs || component.docs || '@docs/home', 'link');
                }
            });
        });
    }

    function doLog() {
        var components = Object.keys(logs), checkPassed = true;
        components.forEach(function (component_name) {
            //always open the component group. Decide to print later.
            var component_logs = logs[component_name], selectors = Object.keys(component_logs),
                hasMessages = false,
                console_message = console.message()
                .group(true)
                .text(("Warnings found in component " + component_name), {color: color.danger, fontSize: 14})
                .line();

            selectors.forEach(function (selector) {
                var selector_log = component_logs[selector];
                if (selector_log.messages.length) {
                    hasMessages = true;
                    checkPassed = false;
                    //open selector group
                    console_message.group(false);
                    //set main notice/warning
                    if (selector_log.notice) {
                        console_message.text("Notice: ", {color: color.warning, fontSize: 13})
                            .text(selector_log.notice, {fontSize: 12});
                    }
                    if (selector_log.warning) {
                        console_message.text("Warning: ", {color: color.danger, fontSize: 13})
                            .text(selector_log.warning, {fontSize: 12});
                    }
                    console_message.line();
                    selector_log.messages.forEach(function (message) {
                        switch (message.type) {
                            case 'element':
                                console_message.element(message.message);
                                break;
                            case 'link':
                                console_message.text(("More info: " + (createLink(message.message))), {color: color.link, fontSize: 12});
                                break;
                            case 'example':
                                console_message.text(message.message, {color: color.warning, fontSize: 12});
                                break;
                            default:
                                console_message.text("Notice: ", {color: color.warning, fontSize: 12})
                                    .text(message.message, {fontSize: 12});
                                break;
                        }
                        console_message.line();
                    });
                    //end selector group
                    console_message.groupEnd();
                }
            });
            //end component group
            console_message.groupEnd();
            //only print component messages when messages are found
            if (hasMessages) {
                console_message.print();
            }
        });
        if (checkPassed) {
            console.message()
                .text('Bazinga! All code on this page is UIkit 3 proof!', {color: color.success, fontSize: 14})
                .print();
        }
    }

    return {
        check: function check() {
            doCheck();
            doLog();
        }
    };

};

/* harmony default export */ exports["a"] = Migrate;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__badge__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__block__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__close__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__column__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__comment__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contrast__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cover__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__description_list__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dotnav__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dropdown__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__flex__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__form__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__form_file__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form_select__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__grid__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__icon__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__list__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modal__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__nav__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__navbar__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__offcanvas__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__overlay__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pagination__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__panel__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__scroll__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__scrollspy__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__search__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__slidenav__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__sticky__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__subnav__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__switcher__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__tab__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__table__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__text__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__toggle__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__utility__ = __webpack_require__(44);












































/* harmony default export */ exports["a"] = [__WEBPACK_IMPORTED_MODULE_0__accordion__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__alert__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__animation__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__article__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__badge__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__base__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__block__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__button__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__close__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__column__["a" /* default */], __WEBPACK_IMPORTED_MODULE_10__comment__["a" /* default */], __WEBPACK_IMPORTED_MODULE_11__contrast__["a" /* default */], __WEBPACK_IMPORTED_MODULE_12__cover__["a" /* default */], __WEBPACK_IMPORTED_MODULE_13__description_list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_14__dotnav__["a" /* default */], __WEBPACK_IMPORTED_MODULE_15__dropdown__["a" /* default */], __WEBPACK_IMPORTED_MODULE_16__flex__["a" /* default */], __WEBPACK_IMPORTED_MODULE_17__form__["a" /* default */], __WEBPACK_IMPORTED_MODULE_18__form_file__["a" /* default */], __WEBPACK_IMPORTED_MODULE_19__form_select__["a" /* default */], __WEBPACK_IMPORTED_MODULE_20__grid__["a" /* default */], __WEBPACK_IMPORTED_MODULE_21__icon__["a" /* default */], __WEBPACK_IMPORTED_MODULE_22__list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_23__modal__["a" /* default */], __WEBPACK_IMPORTED_MODULE_24__nav__["a" /* default */], __WEBPACK_IMPORTED_MODULE_25__navbar__["a" /* default */], __WEBPACK_IMPORTED_MODULE_26__offcanvas__["a" /* default */], __WEBPACK_IMPORTED_MODULE_27__overlay__["a" /* default */], __WEBPACK_IMPORTED_MODULE_28__pagination__["a" /* default */], __WEBPACK_IMPORTED_MODULE_29__panel__["a" /* default */], __WEBPACK_IMPORTED_MODULE_30__scroll__["a" /* default */], __WEBPACK_IMPORTED_MODULE_31__scrollspy__["a" /* default */], __WEBPACK_IMPORTED_MODULE_32__search__["a" /* default */], __WEBPACK_IMPORTED_MODULE_33__slidenav__["a" /* default */], __WEBPACK_IMPORTED_MODULE_34__sticky__["a" /* default */], __WEBPACK_IMPORTED_MODULE_35__subnav__["a" /* default */], __WEBPACK_IMPORTED_MODULE_36__switcher__["a" /* default */], __WEBPACK_IMPORTED_MODULE_37__tab__["a" /* default */], __WEBPACK_IMPORTED_MODULE_38__table__["a" /* default */], __WEBPACK_IMPORTED_MODULE_39__text__["a" /* default */], __WEBPACK_IMPORTED_MODULE_40__toggle__["a" /* default */], __WEBPACK_IMPORTED_MODULE_41__utility__["a" /* default */]];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'accordion',
    docs:'@docs/accordion',
    messages: [
        {
            selector:'[data-uk-accordion]',
            warning:'The attribute data-uk-accordion has been renamed. Use the attribute uk-accordion instead.'
        },
        {
            selector:'.uk-accordion > .uk-accordion-title',
            warning:'The accordion component has been reworked, the accordion items need to be wrapped into one element now (e.g. ul > li structure, surrounding div element)'
        }
    ]
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'alert',
    docs:'@docs/alert',
    messages: [
        {
            selector:'[data-uk-alert]',
            warning:'The attribute data-uk-alert has been removed.'
        },
        {
            selector:'.uk-alert-large',
            warning:'The class uk-alert-large has been removed. Use uk-padding-* classes instead (e.g. uk-padding-large).'
        },
        {
            selector:'.uk-alert:not(.uk-alert-success):not(.uk-alert-warning):not(.uk-alert-danger):not(.uk-alert-primary)',
            notice:'If you want to use the current style of the alert add uk-alert-primary class.'
        }
    ]
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'animation',
    docs:'@docs/animation',
    messages: [
        {
            selector:'.uk-animation-15.uk-animation-scale',
            warning:'If you want to get the kenburns effect use the class uk-animation-kenburns instead.'
        },
        {
            selector:'.uk-animation-scale:not(.uk-animation-15)',
            warning:'The class uk-animation-scale has been renamed. Use the class uk-animation-scale-down instead.'
        },
        {
            selector:'.uk-animation-hover',
            warning:'The class uk-animation-hover has been renamed. Use the class uk-animation-toggle instead.'
        },
        {
            selector:'.uk-animation-top-left',
            warning:'The class uk-animation-top-left has been renamed. Use the class uk-transform-origin-top-left instead.'
        },
        {
            selector:'.uk-animation-top-center',
            warning:'The class uk-animation-top-center has been renamed. Use the class uk-transform-origin-top-center instead.'
        },
        {
            selector:'.uk-animation-top-right',
            warning:'The class uk-animation-top-right has been renamed. Use the class uk-transform-origin-top-right instead.'
        },
        {
            selector:'.uk-animation-middle-left',
            warning:'The class uk-animation-middle-left has been renamed. Use the class uk-transform-origin-middle-left instead.'
        },
        {
            selector:'.uk-animation-middle-center',
            warning:'The class uk-animation-middle-center has been renamed. Use the class uk-transform-origin-middle-center instead.'
        },
        {
            selector:'.uk-animation-middle-right',
            warning:'The class uk-animation-middle-right has been renamed. Use the class uk-transform-origin-middle-right instead.'
        },
        {
            selector:'.uk-animation-bottom-left',
            warning:'The class uk-animation-bottom-left has been renamed. Use the class uk-transform-origin-bottom-left instead.'
        },
        {
            selector:'.uk-animation-bottom-center',
            warning:'The class uk-animation-bottom-center has been renamed. Use the class uk-transform-origin-bottom-center instead.'
        },
        {
            selector:'.uk-animation-bottom-right',
            warning:'The class uk-animation-bottom-right has been renamed. Use the class uk-transform-origin-bottom-right instead.'
        }
    ]
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'article',
    docs:'@docs/article',
    messages: [
        {
            selector:'.uk-article-lead',
            warning:'The class uk-article-lead has been removed. Use the uk-text-lead class instead.'
        },
        {
            selector:'.uk-article-divider',
            warning:'The class uk-article-divider has been removed. Use a hr element or the uk-divider-icon class of the element component instead.'
        }
    ]
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'badge',
    docs:'@docs/badge',
    messages: [
        {
            selector:'.uk-badge:not(.uk-badge-notification)',
            notice:'The class uk-badge without the additional uk-badge-notification class has been renamed into uk-label. If you already have changed the notification into the badge ignore this warning.'
        },
        {
            selector:'.uk-badge-notification',
            warning:'The new badge is the old badge-notification, this class can be removed.'
        },
        {
            selector:'.uk-badge-success:not(.uk-badge-notification)',
            warning:'The class uk-badge-success has been removed. Use uk-label-success instead.'
        },
        {
            selector:'.uk-badge-danger:not(.uk-badge-notification)',
            warning:'The class uk-badge-danger has been removed. Use uk-label-danger instead.'
        },
        {
            selector:'.uk-badge-success.uk-badge-notification',
            warning:'The class uk-badge-success has been removed.'
        },
        {
            selector:'.uk-badge-danger.uk-badge-notification',
            warning:'The class uk-badge-danger has been removed.'
        }
    ]
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'base',
    docs: '@docs/base',
    messages: [
        {
            selector:'.uk-image-preserve',
            warning:'The class uk-image-preserve has been renamed into uk-preserve-width.'
        }
    ]
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'block',
    docs: '@docs/block',
    messages: [
        {
            selector:'.uk-block',
            warning:'The block component has been replaced by the section component use the uk-section and uk-section-* classes instead.'
        },
        {
            selector:'.uk-block-large',
            warning:'The class uk-block-large has been renamed to uk-section-large.'
        },
        {
            selector:'.uk-block-default',
            warning:'The class uk-block-default has been renamed to uk-section-default.'
        },
        {
            selector:'.uk-block-muted',
            warning:'The class uk-block-muted has been renamed to uk-section-muted.'
        },
        {
            selector:'.uk-block-primary',
            warning:'The class uk-block-primary has been renamed to uk-section-primary.'
        },
        {
            selector:'.uk-block-secondary',
            warning:'The class uk-block-secondary has been renamed to uk-section-secondary.'
        }
    ]
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'button',
    docs: '@docs/button',
    messages: [
        {
            selector:'[data-uk-button]',
            warning:'The attribute data-uk-button has been removed.'
        },
        {
            selector:'.uk-button-mini',
            warning:'The class uk-button-mini doesn\'t exist anymore. Use the class uk-button-small instead.'
        },
        {
            selector:'.uk-button:not(.uk-button-link):not(.uk-button-text):not(.uk-button-primary):not(.uk-button-danger):not(.uk-button-secondary):not(.uk-button-default)',
            warning:'The class uk-button needs an additional style class now, if you want the default button use the class uk-button-default.'
        }
    ]
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'close',
    docs:'@docs/close',
    messages: [
        {
            selector:'[data-uk-close]',
            warning:'UIkit3 doesn\'t use the data- prefix any longer. Use the uk-close attribute instead.'
        },
        {
            selector:'.uk-close:not([uk-close])',
            warning:'UIkit3 doesn\'t need the class uk-close anymore, use the attribute uk-close instead. '
        },
        {
            selector:'.uk-close-alt',
            warning:'The class uk-close-alt has been removed.'
        }
    ]
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'column',
    docs:'@docs/column',
    messages: [
        {
            selector:'.uk-column-small-1-2',
            warning:'The class uk-column-small-1-2 has been renamed. Use the class uk-column-1-2@s instead.'
        },
        {
            selector:'.uk-column-small-1-3',
            warning:'The class uk-column-small-1-3 has been renamed. Use the class uk-column-1-3@s instead.'
        },
        {
            selector:'.uk-column-small-1-4',
            warning:'The class uk-column-small-1-4 has been renamed. Use the class uk-column-1-4@s instead.'
        },
        {
            selector:'.uk-column-small-1-5',
            warning:'The class uk-column-small-1-5 has been renamed. Use the class uk-column-1-5@s instead.'
        },
        {
            selector:'.uk-column-small-1-5',
            warning:'The class uk-column-small-1-5 has been renamed. Use the class uk-column-1-5@s instead.'
        },
        {
            selector:'.uk-column-small-1-6',
            warning:'The class uk-column-small-1-6 has been renamed. Use the class uk-column-1-6@s instead.'
        },
        {
            selector:'.uk-column-medium-1-2',
            warning:'The class uk-column-medium-1-2 has been renamed. Use the class uk-column-1-2@m instead.'
        },
        {
            selector:'.uk-column-medium-1-3',
            warning:'The class uk-column-medium-1-3 has been renamed. Use the class uk-column-1-3@m instead.'
        },
        {
            selector:'.uk-column-medium-1-4',
            warning:'The class uk-column-medium-1-4 has been renamed. Use the class uk-column-1-4@m instead.'
        },
        {
            selector:'.uk-column-medium-1-5',
            warning:'The class uk-column-medium-1-5 has been renamed. Use the class uk-column-1-5@m instead.'
        },
        {
            selector:'.uk-column-medium-1-6',
            warning:'The class uk-column-medium-1-6 has been renamed. Use the class uk-column-1-6@m instead.'
        },
        {
            selector:'.uk-column-large-1-2',
            warning:'The class uk-column-large-1-2 has been renamed. Use the class uk-column-1-2@l instead.'
        },
        {
            selector:'.uk-column-large-1-3',
            warning:'The class uk-column-large-1-3 has been renamed. Use the class uk-column-1-3@l instead.'
        },
        {
            selector:'.uk-column-large-1-4',
            warning:'The class uk-column-large-1-4 has been renamed. Use the class uk-column-1-4@l instead.'
        },
        {
            selector:'.uk-column-large-1-5',
            warning:'The class uk-column-large-1-5 has been renamed. Use the class uk-column-1-5@l instead.'
        },
        {
            selector:'.uk-column-large-1-6',
            warning:'The class uk-column-large-1-6 has been renamed. Use the class uk-column-1-6@l instead.'
        },
        {
            selector:'.uk-column-xlarge-1-2',
            warning:'The class uk-column-xlarge-1-2 has been renamed. Use the class uk-column-1-2@xl instead.'
        },
        {
            selector:'.uk-column-xlarge-1-3',
            warning:'The class uk-column-xlarge-1-3 has been renamed. Use the class uk-column-1-3@xl instead.'
        },
        {
            selector:'.uk-column-xlarge-1-4',
            warning:'The class uk-column-xlarge-1-4 has been renamed. Use the class uk-column-1-4@xl instead.'
        },
        {
            selector:'.uk-column-xlarge-1-5',
            warning:'The class uk-column-xlarge-1-5 has been renamed. Use the class uk-column-1-5@xl instead.'
        },
        {
            selector:'.uk-column-xlarge-1-6',
            warning:'The class uk-column-xlarge-1-6 has been renamed. Use the class uk-column-1-6@xl instead.'
        }
    ]
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'comment',
    docs:'@docs/comment',
    messages: [
        {
            selector:'.uk-comment-header:not([uk-grid])',
            notice:'The structure of the comment header has been changed. You need a grid now to set the image and info into on line like in the example below.',
            example:"<header class=\"uk-comment-header uk-grid-medium uk-flex-middle\" uk-grid>\n    <div class=\"uk-width-auto\">\n        <img class=\"uk-comment-avatar\" src=\"http://unsplash.it/50/50/?random\" alt=\"\">\n    </div>\n    <div class=\"uk-width-expand\">\n        <h4 class=\"uk-comment-title uk-margin-remove\">Author</h4>\n        <ul class=\"uk-comment-meta uk-subnav uk-subnav-line uk-margin-remove-top\">\n            <li class=\"uk-disabled\"><a href=\"#\">12 days ago</a></li>\n            <li><a href=\"#\">Profile</a></li>\n            <li><a href=\"#\">#</a></li>\n            <li><a href=\"#\">Reply</a></li>\n        </ul>\n    </div>\n</header>"
        }
    ]
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'contrast',
    docs:'@docs/inverse',
    messages: [
        {
            selector:'.uk-contrast',
            warning:'The class uk-contrast has been removed. Use the class uk-light for light font color or uk-dark for a dark font color instead.'
        }
    ]
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'cover',
    docs:'@docs/cover',
    messages: [
        {
            selector:'[data-uk-cover]',
            warning:'The attribute data-uk-cover has been renamed. Use the attribute uk-cover instead.'
        },
        {
            selector:'.uk-cover-background',
            warning:'The class uk-cover-background has been renamed. Use the class uk-background-cover instead.'
        },
        {
            selector:'div.uk-cover',
            warning:'The class uk-cover has been renamed. Use the class uk-cover-container instead.'
        },
        {
            selector:'.uk-cover-object',
            warning:'The class uk-cover-object has been renamed. Use the class uk-cover instead.'
        }
    ]
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'description-list',
    docs:'@docs/description-list',
    messages: [
        {
            selector:'.uk-description-list-line',
            warning:'Class needs to be replaced by the new class uk-description-list-divider.'
        },
        {
            selector:'.uk-description-list-horizontal',
            warning:'Class doesn\'t exist anymore, needs to be build with the uk-grid classes',
            example:"<dl class=\"uk-description-list uk-child-width-1-2\" uk-grid>\n    <dt class=\"uk-margin-remove\">Description lists</dt>\n    <dd class=\"uk-margin-remove\">A description list defines terms and their corresponding descriptions.</dd>\n    <dt class=\"uk-margin-remove\">Lorem ipsum</dt>\n    <dd class=\"uk-margin-remove\">Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>\n    <dt class=\"uk-margin-remove\">A long term is truncated</dt>\n    <dd class=\"uk-margin-remove\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>\n</dl>"
        }
    ]
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'dotnav',
    docs:'@docs/dotnav',
    messages: [
        {
            selector:'.uk-dotnav-contrast',
            warning:'The class uk-dotnav-contrast has been removed. Use the class uk-light / uk-dark on the the parent container instead.'
        }
    ]
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'dropdown',
    docs:'@docs/dropdown',
    messages: [
        {
            selector:'[data-uk-dropdown] > .uk-dropdown',
            warning:'The attribute data-uk-dropdown has been removed. Remove the attribute from the parent element and add the attribute uk-dropdown here.'
        },
        {
            selector:'[data-uk-dropdown] .uk-dropdown-blank',
            warning:'The attribute data-uk-dropdown has been removed. Remove the attribute from the parent element and add the attribute uk-drop here.'
        },
        {
            selector:'.uk-dropdown-navbar',
            warning:'The class uk-dropdown-navbar has been renamend. Use the class uk-navbar-dropdown instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-grid',
            warning:'The class uk-dropdown-grid has been changed. Use the class uk-navbar-dropdown-grid instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-width-2',
            warning:'The class .uk-dropdown-width-2 has been renamed. Use the class uk-navbar-dropdown-width-2 instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-width-3',
            warning:'The class uk-dropdown-width-3 has been renamed. Use the class uk-navbar-dropdown-width-3 instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-width-4',
            warning:'The class uk-dropdown-width-4 has been renamed. Use the class uk-navbar-dropdown-width-4 instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-width-5',
            warning:'The class uk-dropdown-width-5 has been renamed. Use the class uk-navbar-dropdown-width-5 instead.'
        },
        {
            selector:'.uk-dropdown-small',
            warning:'The class uk-dropdown-small has been removed.'
        }
    ]
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'flex',
    docs:'@docs/flex',
    messages: [
        {
            selector:'.uk-flex-space-between',
            warning:'The class uk-flex-space-between has been renamed. Use the class uk-flex-between instead.'
        },
        {
            selector:'.uk-flex-space-around',
            warning:'The class uk-flex-space-around has been renamed. Use the class uk-flex-around instead.'
        },
        {
            selector:'.uk-flex-wrap-space-between',
            warning:'The class uk-flex-wrap-space-between has been renamed. Use the class uk-flex-wrap-between instead.'
        },
        {
            selector:'.uk-flex-wrap-space-around',
            warning:'The class uk-flex-space-around has been renamed. Use the class uk-flex-around instead.'
        },
        {
            selector:'.uk-flex-order-first',
            warning:'The class uk-flex-order-first has been renamed. Use the class uk-flex-first instead.'
        },
        {
            selector:'.uk-flex-order-last',
            warning:'The class uk-flex-order-last has been renamed. Use the class uk-flex-last instead.'
        },
        {
            selector:'.uk-flex-order-first-small',
            warning:'The class uk-flex-order-first-small has been renamed. Use the class uk-flex-first@s instead.'
        },
        {
            selector:'.uk-flex-order-last-small',
            warning:'The class uk-flex-order-last-small has been renamed. Use the class uk-flex-last@s instead.'
        },
        {
            selector:'.uk-flex-order-first-medium',
            warning:'The class uk-flex-order-first-medium has been renamed. Use the class uk-flex-first@m instead.'
        },
        {
            selector:'.uk-flex-order-last-medium',
            warning:'The class uk-flex-order-last-medium has been renamed. Use the class uk-flex-last@m instead.'
        },
        {
            selector:'.uk-flex-order-first-large',
            warning:'The class uk-flex-order-first-large has been renamed. Use the class uk-flex-first@l instead.'
        },
        {
            selector:'.uk-flex-order-last-large',
            warning:'The class uk-flex-order-last-large has been renamed. Use the class uk-flex-last@l instead.'
        },
        {
            selector:'.uk-flex-order-first-xlarge',
            warning:'The class uk-flex-order-first-xlarge has been renamed. Use the class uk-flex-first@xl instead.'
        },
        {
            selector:'.uk-flex-order-last-xlarge',
            warning:'The class uk-flex-order-last-xlarge has been renamed. Use the class uk-flex-last@xl instead.'
        },
        {
            selector:'.uk-flex-item-none',
            warning:'The class uk-flex-item-none has been renamed. Use the class uk-flex-none instead.'
        },
        {
            selector:'.uk-flex-item-auto',
            warning:'The class uk-flex-item-auto has been renamed. Use the class uk-flex-auto instead.'
        },
        {
            selector:'.uk-flex-item-1',
            warning:'The class uk-flex-item-1 has been renamed. Use the class uk-flex-1 instead.'
        }
    ]
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'form-file',
    docs: '@docs/form',
    messages: [
        {
            selector:'.uk-form-file',
            warning:'The form-file component is now part of the form component. Use the class uk-form-custom instead.'
        }
    ]
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'form-select',
    docs: '@docs/form',
    messages: [
        {
            selector:'.uk-form-select',
            warning:'The form-select component is now part of the form component. Use the class uk-form-custom and the attribute uk-form-custom instead.'
        }
    ]
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'form',
    docs:'@docs/form',
    messages: [
        {
            selector:'.uk-form',
            warning:'Class uk-form doesn\'t exist anymore. Instead you need to define every form item with its new form class ( e.g. .uk-input, .uk-select, ... ).'
        },
        {
            selector:'.uk-form-row',
            warning:'Class uk-form-row doesn\'t exist anymore. Instead you need can use the uk-margin class.'
        },
        {
            selector:'.uk-form-help-inline',
            warning:'Class uk-form-help-inline doesn\'t exist anymore. Instead you need can use the <p class=\'uk-inline\'> element with the text utility classes.'
        },
        {
            selector:'.uk-form-help-block',
            warning:'Class uk-form-help-block doesn\'t exist anymore. Instead you need can use the a <p> element with the text utility classes.'
        },
        {
            selector:'.uk-form-controls-condensed',
            warning:'Class uk-form-controls-condensed doesn\'t exist anymore. Instead use the uk-form-controls with an additional uk-margin-small class.'
        },
        {
            selector:'.uk-form-icon:not(.uk-icon)',
            warning:'Form icon has completely be been rebuild. Use the uk-inline class instead and add the uk-form-icon class directly to the icon.'
        },
        {
            selector:'.uk-form-icon-flip:not(.uk-icon)',
            warning:'Form icon has completely be been rebuild. Add the class uk-form-icon-flip directly to the icon.'
        }
    ]
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'grid',
    docs: '@docs/grid',
    messages: [
        {
            selector:'[data-uk-grid-margin]',
            warning:'The attribute data-uk-grid-margin has been removed, use the uk-grid attribute instead.'
        },
        {
            selector:'[data-uk-grid-match]',
            warning:'The attribute data-uk-grid-match has been removed, use the uk-height-match attribute instead.'
        },
        {
            selector:'*[class*="uk-width-small-"]',
            warning:'The uk-width-small-* classes have been removed use the uk-width-*@s instead (e.g. uk-width-1-2@s).'
        },
        {
            selector:'*[class*="uk-width-medium-"]',
            warning:'The uk-width-medium-* classes have been removed use the uk-width-*@m instead (e.g. uk-width-1-2@m).'
        },
        {
            selector:'*[class*="uk-width-large-"]',
            warning:'The uk-width-large-* classes have been removed use the uk-width-*@l instead (e.g. uk-width-1-2@l).'
        },
        {
            selector:'*[class*="uk-width-xlarge-"]',
            warning:'The uk-width-xlarge-* classes have been removed use the uk-width-*@xl instead (e.g. uk-width-1-2@xl).'
        },
        {
            selector:'*[class*="uk-grid-width-"]',
            warning:'The uk-grid-width-* classes have been removed use the uk-child-width-* instead (e.g. uk-child-width-1-2@s).'
        },
        {
            selector:'*[class*="uk-grid-width-small-"]',
            warning:'The uk-grid-width-small-* classes have been removed use the uk-child-width-*@s instead (e.g. uk-child-width-1-2@s).'
        },
        {
            selector:'*[class*="uk-grid-width-medium-"]',
            warning:'The uk-grid-width-medium-* classes have been removed use the uk-child-width-*@m instead (e.g. uk-child-width-1-2@m).'
        },
        {
            selector:'*[class*="uk-grid-width-large-"]',
            warning:'The uk-grid-width-large-* classes have been removed use the uk-child-width-*@l instead (e.g. uk-child-width-1-2@l).'
        },
        {
            selector:'*[class*="uk-grid-width-xlarge-"]',
            warning:'The uk-grid-width-xlarge-* classes have been removed use the uk-child-width-*@xl instead (e.g. uk-child-width-1-2@xl).'
        },
        {
            selector:'.uk-width-small-1-10',
            warning:'The uk-width-small-1-10 classes have been removed.'
        },
        {
            selector:'.uk-width-medium-1-10',
            warning:'The uk-width-medium-1-10 classes have been removed.'
        },
        {
            selector:'.uk-width-large-1-10',
            warning:'The uk-width-large-1-10 classes have been removed.'
        },
        {
            selector:'.uk-width-xlarge-1-10',
            warning:'The uk-width-xlarge-1-10 classes have been removed.'
        },
        {
            selector:'.uk-grid-width-small-1-10',
            warning:'The uk-grid-width-small-1-10 classes have been removed.'
        },
        {
            selector:'.uk-grid-width-medium-1-10',
            warning:'The uk-grid-width-medium-1-10 classes have been removed.'
        },
        {
            selector:'.uk-grid-width-large-1-10',
            warning:'The uk-grid-width-large-1-10 classes have been removed.'
        },
        {
            selector:'.uk-grid-width-xlarge-1-10',
            warning:'The uk-grid-width-xlarge-1-10 classes have been removed.'
        },
        {
            selector:'.uk-grid-pull',
            warning:'The uk-grid-pull classes have been removed. Use the uk-flex class in combination with uk-flex-first class.'
        },
        {
            selector:'.uk-grid-push',
            warning:'The uk-grid-push classes have been removed. Use the uk-flex class in combination with uk-flex-last class.'
        }
    ]
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'icon',
    docs: '@docs/icon',
    messages: [
        {
            selector:'*[class^="uk-icon-"]:not([uk-icon])',
            warning:'There are no icons via classes any longer ( e.g. uk-icon-file ) use the JavaScript parameter \'icon\' for the uk-icon attribute (e.g. uk-icon="icon:file").'
        },
        {
            selector:'.uk-icon-small',
            warning:'The class uk-icon-small doesn\'t exist anymore. Use the class JavaScript ratio parameter instead (e.g. uk-icon=\'ratio: 1\').'
        },
        {
            selector:'.uk-icon-medium',
            warning:'The class uk-icon-medium doesn\'t exist anymore. Use the class JavaScript ratio parameter instead (e.g. uk-icon=\'ratio: 2\').'
        },
        {
            selector:'.uk-icon-large',
            warning:'The class uk-icon-large doesn\'t exist anymore. Use the class JavaScript ratio parameter instead (e.g. uk-icon=\'ratio: 3\').'
        },
        {
            selector:'.uk-icon-spin',
            warning:'The class uk-icon-spin doesn\'t exist anymore.'
        },
        {
            selector:'.uk-icon-justify',
            warning:'The class uk-icon-justify doesn\'t exist anymore.'
        },
        {
            selector:'.uk-icon-hover',
            warning:'The class uk-icon-hover has been renamed please use uk-icon-link class instead.'
        }
    ]
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'list',
    docs: '@docs/list',
    messages: [
        {
                selector:'.uk-list-line',
                warning:'The class uk-list-line needs to be replaced by the new class uk-list-divider.'
        },
        {
                selector:'.uk-list-space',
                warning:'The class uk-list-space needs to be replaced by the new class uk-list-large.'
        }
    ]
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'modal',
    messages: [
        {
            selector:'[data-uk-modal]',
            warning:'The attribute data-uk-modal is not needed any longer, use the uk-toggle attribute instead.'
        },
        {
            selector:'.uk-modal:not([uk-modal])',
            warning:'The class uk-modal has been changed. Use the attribute uk-modal instead.'
        },
        {
            selector:'.uk-modal-dialog:not(.uk-modal-body):not(.uk-modal-lightbox)',
            notice:'The class uk-modal-dialog has been changed. The content of the modal needs to be wrapped in a uk-modal-body class. If you don\'t have a uk-modal-dialog-title or uk-modal-dialog-footer you can just add the class uk-modal-body to the dialog itself.',
            example:"<div class=\"uk-modal-dialog\">\n    <div class=\"uk-modal-header\">\n        <h2>Headline</h2>\n    </div>\n    <div class=\"uk-modal-body\">\n        <p>Content</p>\n    </div>\n    <div class=\"uk-modal-footer\">\n        <button>Close</button>\n    </div>\n</div>"
        },
        {
            selector:'.uk-modal-close.uk-close-alt',
            warning:'The class uk-close-alt has been removed. Use the classes uk-modal-close-outside with the uk-close attribute instead.'
        },
        {
            selector:'.uk-close.uk-modal-close',
            warning:'The class uk-modal-close has been removed. Use the classes uk-modal-close-default with the uk-close attribute instead.'
        },
        {
            selector:'.uk-modal-dialog-lightbox',
            warning:'The class uk-modal-dialog-lightbox has been removed. Use the classes uk-modal-lightbox instead.'
        },
        {
            selector:'.uk-modal-dialog-blank',
            notice:'The class uk-modal-dialog-blank has been removed. If you want to achieve a fullscreen modal, add the class uk-modal-full to the element holding the uk-modal attribute.',
            example:"<div id=\"modalfullscreen\" class=\"uk-modal-full\" uk-modal>\n    <div class=\"uk-modal-dialog\">\n        <p> Content here </p>\n    </div>\n</div>"
        },
        {
            selector:'.uk-modal-dialog-large',
            warning:'The class uk-modal-dialog-large has been removed. Add the class uk-modal-container to the element holding the attribute uk-modal.'
        },
        {
            selector:'.uk-modal-spinner',
            warning:'The class uk-modal-spinner has been removed. Use the attribute uk-spinner instead.'
        }
    ]
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
        name: 'nav',
        docs: '@docs/nav',
        messages: [
            {
                selector: '[data-uk-nav]',
                warning: 'The attribute data-uk-nav has been renamed. Use the attribute uk-nav instead.'
            },
            {
                selector: '.uk-nav-side',
                warning: 'The class uk-nav-side has been renamed. Use class uk-nav-default instead.'
            },
            {
                selector: '.uk-nav-dropdown',
                warning: 'The class uk-nav-dropdown has been renamed. Use class uk-dropdown-nav instead.'
            },
            {
                selector: '.uk-nav-navbar',
                warning: 'The class uk-nav-navbar has been renamed. Use class uk-navbar-dropdown-nav instead.'
            },
            {
                selector: '.uk-nav-offcanvas',
                warning: 'The class uk-nav-offcanvas has been removed. Use class uk-nav-default instead.'
            }
        ]
    };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'navbar',
    docs:'@docs/navbar',
    messages: [
        {
            selector:'.uk-navbar',
            notice:'The content of the navbar needs to be wraped into a container containing the float ( e.g. uk-navbar-left)',
            example:"<div class=\"uk-navbar\">\n    <div class=\"uk-navbar-left\"></div>\n    <div class=\"uk-navbar-center\"></div>\n    <div class=\"uk-navbar-right\"></div>\n</div>"
        },
        {
            selector:'.uk-navbar-flip',
            warning:'The class uk-navbar-flip has been renamed. Use the class uk-navbar-right instead. Make sure to wrap the navbar content which should be displayed on the left into a containter aswell.'
        },
        {
            selector:'.uk-navbar-content',
            warning:'The class uk-navbar-content has been renamed. Use the class uk-navbar-item instead.'
        },
        {
            selector:'.uk-navbar-brand',
            warning:'The class uk-navbar-brand has been removed. Use the classes uk-navbar-item and uk-logo instead.'
        },
        {
            selector:'.uk-navbar-toggle-alt',
            warning:'The class uk-navbar-toggle-alt has been removed. Remove this class and use the attribute uk-search-icon instead.'
        },
        {
            selector:'.uk-navbar-toggle:not([uk-search-icon]):not([uk-navbar-toggle-icon]):not(.uk-navbar-toggle-alt)',
            notice:'To get the burger menu you need the addition attribute uk-navbar-toggle-icon.'
        },
        {
            selector:'.uk-navbar-attached',
            warning:'The class uk-navbar-attached has been removed.'
        },
        {
            selector:'.uk-navbar-nav-subtitle',
            warning:'The class uk-navbar-nav-subtitle has been removed. You need to wrap the whole element in a div and add the class uk-navbar-subtitle to the div of the subtitle ( see example bellow ).',
            example:"<div>\n    Item\n    <div class=\"uk-navbar-subtitle\">\n        Subtitle\n    </div>\n</div>"
        }
    ]
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'offcanvas',
    docs:'@docs/offcanvas',
    messages: [
        {
            selector:'[data-uk-offcanvas]',
            warning:'The data-uk-offcanvas has been renamed. Use the attribute uk-toggle instead.',
            check: function (element) {
                if (element.getAttribute('data-uk-offcanvas').indexOf('mode') !== -1) {
                    return "The mode is now defined in element containing the uk-offcanvas attribute ( e.g. uk-offcanvas=\"mode:reveal\")."
                }
            }
        },
        {
            selector:'.uk-offcanvas:not([uk-offcanvas])',
            warning:'The class uk-offcanvas has been changed. Remove this class and add the attribute uk-offcanvas instead. If you want to keep the overlay about the website when the offcanvas is open add the parameter overlay:true (e.g. uk-offcanvas=\'overlay:true\').'
        },
        {
            selector:'.uk-offcanvas-bar-flip',
            warning:'The class uk-offcanvas-bar-flip has been removed. Add the parameter flip:true to the uk-offcanvas attribute instead (e.g. uk-offcanvas=\'flip:true\').'
        }
    ]
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'overlay',
    docs:'@docs/overlay',
    messages: [
        {
            selector:'.uk-overlay:not([class*="uk-position-"])',
            warning:'The uk-overlay class has been reworked use uk-inline-clip instead.'
        },
        {
            selector:'.uk-overlay-panel',
            warning:'The class uk-overlay-panel has been removed. Use the class uk-overlay instead.',
            check: function (element) {

                if ( element.className.indexOf('uk-overlay-top') === -1 && element.className.indexOf('uk-overlay-bottom') === -1 && element.className.indexOf('uk-overlay-left') === -1 && element.className.indexOf('uk-overlay-right') === -1 ) {
                    return 'The positioning of the overlay has been changed, instead of using flex classes or overlay position classes us the uk-position classes instead ( e.g. uk-position-cover ).';
                }
            }
        },
        {
            selector:'.uk-overlay-background',
            warning:'The classes uk-overlay-background has been removed. Use the class uk-overlay-default instead.'
        },
        {
            selector:'.uk-overlay-top',
            warning:'The class uk-overlay-top has been removed. Use the class uk-position-top instead.'
        },
        {
            selector:'.uk-overlay-right',
            warning:'The class uk-overlay-right has been removed. Use the class uk-position-right instead.'
        },
        {
            selector:'.uk-overlay-bottom',
            warning:'The class uk-overlay-bottom has been removed. Use the class uk-position-bottom instead.'
        },
        {
            selector:'.uk-overlay-left',
            warning:'The class uk-overlay-left has been removed. Use the class uk-position-left instead.'
        },
        {
            selector:'.uk-overlay-hover',
            warning:'The class uk-overlay-hover has been removed. Use the class uk-transition-toggle instead.'
        },
        {
            selector:'.uk-overlay-slide-top:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-slide-top has been removed. Use the class uk-transition-slide-top instead.'
        },
        {
            selector:'.uk-overlay-slide-bottom:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-slide-bottom has been removed. Use the class uk-transition-slide-bottom instead.'
        },
        {
            selector:'.uk-overlay-slide-left:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-slide-left has been removed. Use the class uk-transition-slide-left instead.'
        },
        {
            selector:'.uk-overlay-slide-right:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-slide-right has been removed. Use the class uk-transition-slide-right instead.'
        },
        {
            selector:'.uk-overlay-fade:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-fade has been removed. Use the class uk-transition-fade instead.'
        },
        {
            selector:'.uk-overlay-scale:not(.uk-overlay-icon)',
            warning:'The class uk-overlay-scale has been removed. Use the class uk-transition-scale-up instead.'
        },
        {
            selector:'.uk-overlay-spin',
            warning:'The class uk-overlay-spin has been removed. Use one of the other uk-transition classes instead (e.g. uk-transition-scale-up).'
        },
        {
            selector:'.uk-overlay-grayscale',
            warning:'The class uk-overlay-grayscale has been removed. Use one of the other uk-transition classes instead (e.g. uk-transition-scale-up).'
        },
        {
            selector:'.uk-overlay-icon:not([uk-overlay-icon])',
            warning:'The class uk-overlay-icon has been changed. Use a div with the uk-position-center class and in here use a span with the attribute uk-overlay-icon instead.',
            example:"<div class=\"uk-position-center\">\n    <span uk-overlay-icon>\n    </span>\n</div>"
        },
        {
            selector:'.uk-overlay-slide-top.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:"<div class=\"uk-position-center\">\n    <div class=\"uk-transition-slide-top\">\n        <span uk-overlay-icon>\n        </span>\n    </div>\n</div>"
        },
        {
            selector:'.uk-overlay-slide-bottom.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:"<div class=\"uk-position-center\">\n    <div class=\"uk-transition-slide-bottom\">\n        <span uk-overlay-icon>\n        </span>\n    </div>\n</div>"
        },
        {
            selector:'.uk-overlay-slide-left.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:"<div class=\"uk-position-center\">\n    <div class=\"uk-transition-slide-left\">\n        <span uk-overlay-icon>\n        </span>\n    </div>\n</div>"
        },
        {
            selector:'.uk-overlay-slide-right.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:"<div class=\"uk-position-center\">\n    <div class=\"uk-transition-slide-right\">\n        <span uk-overlay-icon>\n        </span>\n    </div>\n</div>"
        },
        {
            selector:'.uk-overlay-fade.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:"<div class=\"uk-position-center\">\n    <div class=\"uk-transition-fade\">\n        <span uk-overlay-icon>\n        </span>\n    </div>\n</div>"
        },
        {
            selector:'.uk-overlay-scale.uk-overlay-icon',
            warning:'To achieve an animation for the Icon, use the uk-transition class as described before and also the markup for the new uk-overlay-icon. Additional you will need a wraping div with the animation. See the example for the markup.',
            example:"<div class=\"uk-position-center\">\n    <div class=\"uk-transition-scale\">\n        <span uk-overlay-icon>\n        </span>\n    </div>\n</div>"
        },
        {
            selector:'img.uk-overlay-scale',
            notice:'If you want to achieve a \'soft\' animation where the image is visible by default, use additionaly the class uk-transition-opaque.'
        },
        {
            selector:'.uk-overlay-image',
            warning:'The class uk-overlay-image has been removed. Remove the class uk-overlay / uk-overlay-panel and use the class uk-position-cover instead.'
        },
        {
            selector:'.uk-thumbnail',
            warning:'The class uk-thumbnail has been removed. You can try to rebuild this design with the uk-card classes.',
            docs:'@docs/card'
        }
    ]
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'pagination',
    docs:'@docs/pagination',
    messages: [
        {
            selector:'.uk-pagination:not(.uk-pagination-left):not(.uk-pagination-right):not(.uk-flex-center):not(.uk-flex-right):not(.uk-flex-between):not(.uk-flex-arround)',
            notice:'The class uk-pagination has been changed. To center the pagination add the class uk-flex-center.'
        },
        {
            selector:'.uk-pagination.uk-pagination-left',
            warning:'The class uk-pagination has been changed. The class uk-pagination-left is not needed any longer.'
        },
        {
            selector:'.uk-pagination.uk-pagination-right',
            warning:'The class uk-pagination-right has been removed. Use the class uk-flex-right instead.'
        },
        {
            selector:'.uk-pagination [class*=uk-icon-angle-]',
            warning:'To display angles to the left or right for the pagination use a span element with the attribute uk-pagination-previous / uk-pagination-next instead.'
        },
        {
            selector:'.uk-pagination-next:not([uk-pagination-next])',
            warning:'The class uk-pagination-next has been changed. Use the class uk-flex-between for the ul element instead.',
            example:"<ul class=\"uk-pagination uk-flex-between\">\n    <li class=\"\"><a href=\"#\"><i class=\"\" uk-icon=\"icon:chevron-left\"></i> Previous</a></li>\n    <li class=\"\"><a href=\"#\">Next <i class=\"\" uk-icon=\"icon:chevron-right\"></i></a></li>\n</ul>"
        },
        {
            selector:'.uk-pagination-previous:not([uk-pagination-previous])',
            warning:'The class uk-pagination-previous has been changed. Use the class uk-flex-between for the ul element instead.',
            example:"<ul class=\"uk-pagination uk-flex-between\">\n    <li class=\"\"><a href=\"#\"><i class=\"\" uk-icon=\"icon:chevron-left\"></i> Previous</a></li>\n    <li class=\"\"><a href=\"#\">Next <i class=\"\" uk-icon=\"icon:chevron-right\"></i></a></li>\n</ul>"
        }
    ]
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'panel',
    docs: '@docs/panel',
    messages: [
        {
            selector:'.uk-panel.uk-panel-box:not(.uk-panel-box-primary):not(.uk-panel-box-secondary)',
            warning:'The uk-panel-box has been renamed into uk-card. Remove the class uk-panel and uk-panel-box and add uk-card and uk-card-default class instead.',
            check: function (ele) {
                if (!ele.querySelectorAll('div').length) {
                    return 'To add additional padding use the class uk-card-body';
                }
            }
        },
        {
            selector:'.uk-panel-box.uk-panel-box-primary',
            warning:'The uk-panel-box has been renamed into uk-card. Remove the classes uk-panel, uk-panel-box, uk-panel-box-primary and add uk-card and uk-card-primary classes instead.'
        },
        {
            selector:'.uk-panel-box.uk-panel-box-secondary',
            warning:'The uk-panel-box has been renamed into uk-card. Remove the classes uk-panel, uk-panel-box, uk-panel-box-secondary and add uk-card and uk-card-primary classes instead.'
        },
        {
            selector:'.uk-panel-box-hover',
            warning:'The uk-panel-box-hover has been renamed into uk-card-hover.'
        },
        {
            selector:'.uk-panel-box-primary-hover',
            warning:'There is no difference within the hover classes anymore. Use the uk-card-hover instead.'
        },
        {
            selector:'.uk-panel-box-secondary-hover',
            warning:'There is no difference within the hover classes anymore. Use the uk-card-hover instead.'
        },
        {
            selector:'.uk-panel-box .uk-panel-title',
            warning:'The class uk-panel-title has been removed. Use uk-card-title class instead.'
        },
        {
            selector:'.uk-panel-box .uk-panel-badge',
            warning:'The class uk-panel-badge has been removed. Use uk-card-badge class instead.'
        },
        {
            selector:'.uk-panel-body',
            warning:'The class uk-panel-body has been removed. Use uk-card-body class instead.'
        },
        {
            selector:'.uk-panel-box .uk-panel-teaser',
            warning:'The class uk-panel-teaser has been removed. Use uk-card-media-top class instead and wrap the content of the panel within an div element with the uk-card-body class.'
        },
        {
            selector:'.uk-panel:not(.uk-panel-box).uk-panel-hover',
            warning:'The class uk-panel-hover has been removed from the default uk-panel.'
        },
        {
            selector:'.uk-panel:not(.uk-panel-box) .uk-panel-title',
            warning:'The class uk-panel-title has been removed from the default uk-panel, use the text utility classes instead.'
        },
        {
            selector:'.uk-panel:not(.uk-panel-box) .uk-panel-badge',
            warning:'The class uk-panel-badge has been removed. You can use the position classes (e.g. uk-position-top-right ) instead to position a label or badge in the panel.'
        },
        {
            selector:'.uk-panel-header',
            warning:'The class uk-panel-header has been removed. Use a <hr> element between the title and content instead.'
        },
        {
            selector:'.uk-panel-divider',
            warning:'The class uk-panel-divider has been removed. Use a <hr> element between the panels instead.'
        },
        {
            selector:'.uk-panel-space',
            warning:'The class uk-panel-space has been removed. Use uk-padding-* classes instead (e.g. uk-padding-large).'
        },
        {
            selector:'a.uk-panel',
            warning:'The class uk-panel can\'t be used with the <a> element anylonger instead use a <div> element and add an <a> element with the class uk-position-cover.',
            example: "<div class=\"uk-panel uk-padding-small\">\n    <h3 class=\"uk-text-large\">Title</h3>\n    <p>Text Text Text Text Text Text Text Text</p>\n    <a class=\"uk-position-cover\" href=\"#\"></a>\n</div>"
        },
        {
            selector:'a.uk-card',
            warning:'The class uk-card can\'t be used with the <a> element anylonger instead use a <div> element and add an <a> element with the class uk-position-cover.',
            example: "<div class=\"uk-card uk-card-body\">\n    <h3 class=\"uk-card-title\">Title</h3>\n    <p>Text Text Text Text Text Text Text Text</p>\n    <a class=\"uk-position-cover\" href=\"#\"></a>\n</div>"
        }
    ]
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'scroll',
    docs:'@docs/scroll',
    messages: [
        {
            selector:'[data-uk-smooth-scroll]',
            warning:'The attribute data-uk-smooth-scroll has been renamed use the attribute uk-scroll instead.'
        }
    ]
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'scrollspy',
    docs:'@docs/scrollspy',
    messages: [
        {
            selector:'[data-uk-scrollspy]',
            warning:'The attribute data-uk-scrollspy has been renamed use the attribute uk-scrollspy instead.'
        },
        {
            selector:'[data-uk-scrollspy-nav]',
            warning:'The attribute data-uk-scrollspy-nav has been renamed use the attribute uk-scrollspy-nav instead.'
        },
        {
            selector:'[data-uk-scrollspy-cls]',
            warning:'The attribute data-uk-scrollspy-cls has been renamed use the attribute uk-scrollspy-class instead.'
        }
    ]
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'search',
    docs:'@docs/search',
    messages: [
        {
            selector:'[data-uk-search]',
            warning:'The attribute data-uk-search has been removed.'
        },
        {
            selector:'.uk-search:not(.uk-search-default):not(.uk-search-navbar):not(.uk-search-large)',
            warning:'The class uk-search needs an additional style class ( uk-search-default, uk-search-navbar, uk-search-large ). If you want a search icon be visible use an additional span element with the class and attribute uk-search-icon.'
        },
        {
            selector:'.uk-search-field',
            warning:'The class uk-search-field has been removed. Use uk-search-input instead.'
        }
    ]
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'slidenav',
    docs:'@docs/slidenav',
    messages: [
        {
            selector:'.uk-slidenav:not([uk-slidenav])',
            warning:'The class uk-slidenav has been removed. Use the attribute uk-slidenav instead and add the class uk-inline to the parent element. To make the navigation only visible on hover add the class uk-visible-toggle to the parent element'
        },
        {
            selector:'.uk-slidenav-previous',
            warning:'The class uk-slidenav-previous has been removed. Use the argument previous for the attribute uk-slidenav instead (e.g. uk-slidenav=\'previous\'). For positioning use the uk-position-* classes (e.g. uk-position-center-left & uk-position-small). To hide the navigation when not hovered use the class uk-hidden-hover.'
        },
        {
            selector:'.uk-slidenav-next',
            warning:'The class uk-slidenav-next has been removed. Use the argument next for the attribute uk-slidenav instead (e.g. uk-slidenav=\'next\'). For positioning use the uk-position-* classes (e.g. uk-position-center-left & uk-position-small). To hide the navigation when not hovered use the class uk-hidden-hover.'
        },
        {
            selector:'.uk-slidenav-contrast',
            warning:'The class uk-slidenav-contrast has been removed. Use the class uk-light / uk-dark on the the parent container instead.'
        }
    ]
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'sticky',
    docs:'@docs/sticky',
    messages: [
        {
            selector:'[data-uk-sticky]',
            warning:'The data-uk-sticky has been renamed. Use the attribute uk-sticky instead.'
        }
    ]
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'subnav',
    docs:'@docs/subnav',
    messages: [
        {
            selector:'.uk-subnav-line',
            warning:'The class uk-subnav-line has been renamed. Use class uk-subnav-divider instead.'
        }
    ]
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'switcher',
    docs:'@docs/switcher',
    messages: [
        {
            selector:'[data-uk-switcher]',
            warning:'The attribute data-uk-switcher has been renamed. Use the attribute uk-switcher instead.'
        },
        {
            selector:'[data-uk-switcher-item]',
            warning:'The attribute data-uk-switcher-item has been renamed. Use the attribute uk-switcher-item instead.'
        }
    ]
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'tab',
    docs:'@docs/tab',
    messages: [
        {
            selector:'[data-uk-tab]',
            warning:'The attribute data-uk-tab has been removed. Use the attribute uk-tab instead.'
        },
        {
            selector:'.uk-tab-flip',
            warning:'The class uk-tab-flip has been removed. To align the tabs right use the class uk-flex-right instead.'
        },
        {
            selector:'.uk-tab-center',
            warning:'The class uk-tab-center has been removed. To align the tabs in the center remove the div element with the uk-tab-center class containing the ul and add the uk-flex-center to the ul itself.'
        },
        {
            selector:'.uk-tab-bottom-center',
            warning:'The class uk-tab-bottom-center has been removed.'
        },
        {
            selector:'.uk-tab-grid',
            warning:'The class uk-tab-grid has been removed. Use the uk-child-width-* classes instead (e.g. uk-child-width-1-5).'
        },
        {
            selector:'.uk-tab-responsive',
            warning:'The class uk-tab-responsive has been removed.'
        }
    ]
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'table',
    docs: '@docs/table',
    messages: [
        {
            selector:'.uk-table-condensed',
            warning:'The class uk-table-condensed has been renamed use the class uk-table-small instead.'
        }
    ]
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'text',
    docs:'@docs/text',
    messages: [
        {
            selector:'.uk-text-contrast',
            warning:'The class text-contrast has been removed. Add the class uk-light / uk-dark to the parent container instead.'
        },
        {
            selector:'.uk-text-center-medium',
            warning:'The class uk-text-center-medium has been renamed. Use the class uk-text-center@m instead.'
        },
        {
            selector:'.uk-text-left-medium',
            warning:'The class uk-text-left-medium has been renamed. Use the class uk-text-left@m instead.'
        },
        {
            selector:'.uk-text-center-small',
            warning:'The class uk-text-center-small has been renamed. Use the class uk-text-center@s instead.'
        },
        {
            selector:'.uk-text-left-small',
            warning:'The class uk-text-left-small has been renamed. Use the class uk-text-left@s instead.'
        }
    ]
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name:'toggle',
    docs:'@docs/toggle',
    messages: [
        {
            selector:'[data-uk-toggle]',
            warning:'The attribute data-uk-toggle has been renamed use the attribute uk-toggle instead.'
        },
        {
            selector:'[data-uk-toggle] .uk-hidden',
            warning:'To achieve a toggle which is by default hidden use the attribute hidden="hidden" instead of the class uk-hidden.'
        }
    ]
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    name: 'utility',
    docs: '@docs/utility',
    messages: [
        {
            selector:'[data-uk-margin]',
            warning:'The attribute data-uk-margin has been removed.'
        },
        {
            selector:'.uk-container-center',
            warning:'The class uk-container-center has been removed. The uk-container is centered by default.'
        },
        {
            selector:'.uk-overflow-container',
            warning:'The class uk-overflow-container has been removed. Use the attribute uk-overflow-auto instead.'
        },
        {
            selector:'.uk-align-medium-left',
            warning:'The class uk-align-medium-left has been renamed. Use the class uk-align-left@m instead.'
        },
        {
            selector:'.uk-align-medium-right',
            warning:'The class uk-align-medium-right has been renamed. Use the class uk-align-right@m instead.'
        },
        {
            selector:'.uk-nbfc',
            warning:'The class uk-nbfc has been removed. Use the class uk-overflow-hidden instead.'
        },
        {
            selector:'.uk-nbfc-alt',
            warning:'The class uk-nbfc has been removed. Use the class uk-overflow-hidden instead.'
        },
        {
            selector:'.uk-vertical-align',
            warning:'The class uk-vertical-align has been removed. Use the flex classes instead (e.g. uk-flex-middle).'
        },
        {
            selector:'.uk-margin-top-remove',
            warning:'The class uk-margin-top-remove has been renamed. Use the class uk-margin-remove-top instead.'
        },
        {
            selector:'.uk-margin-bottom-remove',
            warning:'The class uk-margin-bottom-remove has been renamed. Use the class uk-margin-remove-bottom instead.'
        },
        {
            selector:'.uk-padding-top-remove',
            warning:'The class uk-padding-top-remove has been renamed. Use the class uk-padding-remove-top instead.'
        },
        {
            selector:'.uk-padding-bottom-remove',
            warning:'The class uk-padding-bottom-remove has been renamed. Use the class uk-padding-remove-bottom instead.'
        },
        {
            selector:'.uk-padding-vertical-remove',
            warning:'The class uk-padding-vertical-remove has been renamed. Use the class uk-padding-remove-vertical instead.'
        },
        {
            selector:'.uk-heading-large',
            warning:'The class uk-heading-large has been removed. Use the class uk-heading-primary instead.'
        },
        {
            selector:'.uk-scrollable-text',
            warning:'The class uk-scrollable-text has been removed. Use the attribute uk-overflow-auto instead and add a height class from the utility component (e.g. uk-height-medium). To make the element resizable add the class uk-resize.'
        },
        {
            selector:'.uk-scrollable-box',
            warning:'The class uk-scrollable-box has been removed. Use the classes uk-panel and uk-panel-scrollable instead.'
        },
        {
            selector:'.uk-visible-small',
            warning:'The class uk-visible-small has been removed. Use the classes uk-visible@s and uk-hidden@m instead.'
        },
        {
            selector:'.uk-visible-medium',
            warning:'The class uk-visible-medium has been removed. Use the classes uk-visible@m and uk-hidden@l instead.'
        },
        {
            selector:'.uk-visible-large',
            warning:'The class uk-visible-large has been removed. Use the class uk-visible@l if you don\'t want the element to be visible on extra large screens add the class uk-hidden@xl aswell.'
        },
        {
            selector:'.uk-visible-hover',
            warning:'The class uk-visible-hover has been renamed. Use the class uk-visible-toggle instead.'
        },
        {
            selector:'.uk-hidden-small',
            warning:'The class uk-hidden-small has been removed. To get the same result please use a custom class and CSS.'
        },
        {
            selector:'.uk-hidden-medium',
            warning:'The class uk-hidden-medium has been removed. To get the same result please use a custom class and CSS.'
        },
        {
            selector:'.uk-hidden-large',
            warning:'The class uk-hidden-large has been removed. To get the same result please use a custom class and CSS.'
        },
        {
            selector:'.uk-visible-hover',
            warning:'The class uk-visible-hover has been renamed. Use the class uk-visible-toggle instead.'
        },
        {
            selector:'.uk-visible-hover-inline',
            warning:'The class uk-visible-hover-inline has been renamed. Use the class uk-visible-toggle instead.'
        },
        {
            selector:'.uk-visible-hover-inline .uk-hidden',
            warning:'The class uk-hidden has been renamed. Use the class uk-hidden-hover instead.'
        },
        {
            selector:'.uk-visible-hover-inline .uk-invisible',
            warning:'The class uk-invisible has been renamed. Use the class uk-invisible-hover instead.'
        },
        {
            selector:'.uk-touch',
            warning:'The class uk-touch has been removed.'
        },
        {
            selector:'.uk-hidden-touch',
            warning:'The class uk-hidden-touch has been removed.'
        },
        {
            selector:'.uk-notouch',
            warning:'The class uk-notouch has been removed.'
        },
        {
            selector:'.uk-hidden-notouch',
            warning:'The class uk-hidden-notouch has been removed.'
        },
        {
            selector:'.uk-thumbnav',
            warning:'The class uk-thumbnav has been removed. This needs to be rebuild in another way.'
        }
    ]
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_console_message_console_message__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_console_message_console_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_console_message_console_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__migrate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rules_index__ = __webpack_require__(2);





var migrate = new __WEBPACK_IMPORTED_MODULE_1__migrate__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__rules_index__["a" /* default */]);

migrate.check();


/***/ })
/******/ ]);