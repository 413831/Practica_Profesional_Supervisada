(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive5da929d4Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "./node_modules/@ionic/core/dist/esm/index-92848855.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme5641d27fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" translucent mode=\"ios\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title text-capitalize>{{ titulo }}</ion-title>\n  </ion-toolbar>\n</ion-header>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notificacion/notificacion.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notificacion/notificacion.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotificacionNotificacionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  notificacion works!\n</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistroRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-header titulo=\"Registro\"></app-header>\n\n<ion-content>\n\n  <form #formulario=\"ngForm\" (ngSubmit)=\"onSubmitTemplate()\">\n\n    <ion-list>\n\n      <ion-list-header>\n        <ion-label>Registro de nuevo usuario</ion-label>\n        \n      </ion-list-header>\n\n      <ion-item>\n        <ion-label position=\"floating\">Ingrese su email</ion-label>\n        <ion-input type=\"email\" placeholder=\"Ingrese email\" name=\"email\" [(ngModel)]=\"usuario.email\"\n          pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Ingrese su password</ion-label>\n        <ion-input type=\"password\" minlength=\"6\" placeholder=\"Ingrese password\" name=\"password\" [(ngModel)]=\"usuario.pass\"\n          required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Confirme su password</ion-label>\n        <ion-input type=\"password\" min=\"6\" placeholder=\"Confirme password\" name=\"password\" [(ngModel)]=\"confirmacionPass\"\n          required>\n        </ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-button fill=\"solid\" expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\">\n      Alta\n    </ion-button>\n\n  </form>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/components/header/header.component.ts");
      /* harmony import */


      var _notificacion_notificacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./notificacion/notificacion.component */
      "./src/app/components/notificacion/notificacion.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _notificacion_notificacion_component__WEBPACK_IMPORTED_MODULE_4__["NotificacionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _notificacion_notificacion_component__WEBPACK_IMPORTED_MODULE_4__["NotificacionComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/header/header.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/components/header/header.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/header/header.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [];
      };

      HeaderComponent.propDecorators = {
        titulo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./header.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./header.component.scss */
        "./src/app/components/header/header.component.scss"))["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "./src/app/components/notificacion/notificacion.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/notificacion/notificacion.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsNotificacionNotificacionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2FjaW9uL25vdGlmaWNhY2lvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/notificacion/notificacion.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/notificacion/notificacion.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NotificacionComponent */

    /***/
    function srcAppComponentsNotificacionNotificacionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificacionComponent", function () {
        return NotificacionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotificacionComponent = /*#__PURE__*/function () {
        function NotificacionComponent() {
          _classCallCheck(this, NotificacionComponent);
        }

        _createClass(NotificacionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotificacionComponent;
      }();

      NotificacionComponent.ctorParameters = function () {
        return [];
      };

      NotificacionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificacion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notificacion.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notificacion/notificacion.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notificacion.component.scss */
        "./src/app/components/notificacion/notificacion.component.scss"))["default"]]
      })], NotificacionComponent);
      /***/
    },

    /***/
    "./src/app/pages/registro/registro-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/registro/registro-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: RegistroPageRoutingModule */

    /***/
    function srcAppPagesRegistroRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function () {
        return RegistroPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registro.page */
      "./src/app/pages/registro/registro.page.ts");

      var routes = [{
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
      }];

      var RegistroPageRoutingModule = function RegistroPageRoutingModule() {
        _classCallCheck(this, RegistroPageRoutingModule);
      };

      RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistroPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/registro/registro.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/registro/registro.module.ts ***!
      \***************************************************/

    /*! exports provided: RegistroPageModule */

    /***/
    function srcAppPagesRegistroRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function () {
        return RegistroPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registro-routing.module */
      "./src/app/pages/registro/registro-routing.module.ts");
      /* harmony import */


      var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registro.page */
      "./src/app/pages/registro/registro.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var RegistroPageModule = function RegistroPageModule() {
        _classCallCheck(this, RegistroPageModule);
      };

      RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
      })], RegistroPageModule);
      /***/
    },

    /***/
    "./src/app/pages/registro/registro.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/registro/registro.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRegistroRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/registro/registro.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/registro/registro.page.ts ***!
      \*************************************************/

    /*! exports provided: RegistroPage */

    /***/
    function srcAppPagesRegistroRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPage", function () {
        return RegistroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var RegistroPage = /*#__PURE__*/function () {
        function RegistroPage(toastController, dataService, router) {
          _classCallCheck(this, RegistroPage);

          this.toastController = toastController;
          this.dataService = dataService;
          this.router = router;
          this.usuario = {
            id: 0,
            email: '',
            pass: ''
          };
          this.pattern = "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";
        }

        _createClass(RegistroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmitTemplate",
          value: function onSubmitTemplate() {
            var _this = this;

            console.log('Form submit');
            console.log(this.usuario);

            if (this.usuario.pass != this.confirmacionPass) {
              this.mensaje = "Las contraseñas no coinciden";
              this.presentToast();
            } else {
              this.dataService.registrar(this.usuario).then(function (res) {
                console.log("Usuario registrado");
                _this.mensaje = "Se ha registrado exitosamente";

                _this.router.navigate(['/login']);
              }, function (error) {
                console.error(error);
                _this.mensaje = error.message;
              })["finally"](function () {
                return _this.presentToast();
              });
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: this.mensaje,
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return RegistroPage;
      }();

      RegistroPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registro.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registro.page.scss */
        "./src/app/pages/registro/registro.page.scss"))["default"]]
      })], RegistroPage);
      /***/
    },

    /***/
    "./src/app/services/data.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /*! exports provided: DataService */

    /***/
    function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

      var DataService = /*#__PURE__*/function () {
        function DataService(storage, firebaseAuth) {
          _classCallCheck(this, DataService);

          this.storage = storage;
          this.firebaseAuth = firebaseAuth;
          this.usuarioTest = {
            id: 0,
            email: 'pepito@mail.com',
            pass: 'Secreta'
          };
          this.usuarios = [];
          this.cargarUsuarios();
        }

        _createClass(DataService, [{
          key: "login",
          value: function login(usuario) {
            var _this2 = this;

            // return this.test(usuario);
            console.log(usuario);
            return new Promise(function (resolve, reject) {
              _this2.firebaseAuth.signInWithEmailAndPassword(usuario.email, usuario.pass).then(function (response) {
                return resolve(response);
              }, function (error) {
                return reject(error);
              });
            });
          }
        }, {
          key: "registrar",
          value: function registrar(usuario) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.firebaseAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass).then(function (response) {
                return resolve(response);
              }, function (error) {
                return reject(error);
              });
            });
          }
        }, {
          key: "cargarUsuarios",
          value: function cargarUsuarios() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var usuarios;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.storage.get('usuarios');

                    case 2:
                      usuarios = _context4.sent;

                      if (usuarios) {
                        this.usuarios = usuarios;
                        console.log("Se cargan usuarios", this.usuarios);
                      }

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "gerUserDetail",
          value: function gerUserDetail() {
            return this.firebaseAuth.currentUser;
          }
        }, {
          key: "test",
          value: function test(usuario) {
            return usuario.email == this.usuarioTest.email && usuario.pass == this.usuarioTest.pass;
          }
        }]);

        return DataService;
      }();

      DataService.idUsuario = 0;

      DataService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map