/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts */ "./src/scripts/index.js");



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot */ "./src/scripts/slot.js");

//import './timer';

/***/ }),

/***/ "./src/scripts/slot.js":
/*!*****************************!*\
  !*** ./src/scripts/slot.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.mjs");
/* harmony import */ var _images_icon_7_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icon-7.png */ "./src/images/icon-7.png");
/* harmony import */ var _images_icon_150_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icon-150.png */ "./src/images/icon-150.png");
/* harmony import */ var _images_icon_bell_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icon-bell.png */ "./src/images/icon-bell.png");
/* harmony import */ var _images_icon_chery_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icon-chery.png */ "./src/images/icon-chery.png");
/* harmony import */ var _images_icon_coin_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icon-coin.png */ "./src/images/icon-coin.png");
/* harmony import */ var _images_icon_grape_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/icon-grape.png */ "./src/images/icon-grape.png");
/* harmony import */ var _images_icon_plum_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/icon-plum.png */ "./src/images/icon-plum.png");
/* harmony import */ var _images_icon_major_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/icon-major.png */ "./src/images/icon-major.png");
/* harmony import */ var _images_icon_mega_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/icon-mega.png */ "./src/images/icon-mega.png");
/* harmony import */ var _images_icon_minor_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/icon-minor.png */ "./src/images/icon-minor.png");
/* harmony import */ var _images_icon_joker_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/icon-joker.png */ "./src/images/icon-joker.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }












_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var app, REEL_WIDTH, SYMBOL_SIZE, slotTextures, reels, reelContainer, i, rc, reel, j, symbol, running, startPlay, reelsComplete, tweening, tweenTo, lerp, backout, elements, addClassWithDelay, showModal, winnerShow;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        backout = function _backout(amount) {
          return function (t) {
            return --t * t * ((amount + 1) * t + amount) + 1;
          };
        };
        lerp = function _lerp(a1, a2, t) {
          return a1 * (1 - t) + a2 * t;
        };
        tweenTo = function _tweenTo(object, property, target, time, easing, onchange, oncomplete) {
          var tween = {
            object: object,
            property: property,
            propertyBeginValue: object[property],
            target: target,
            easing: easing,
            time: time,
            change: onchange,
            complete: oncomplete,
            start: Date.now()
          };
          tweening.push(tween);
          return tween;
        };
        reelsComplete = function _reelsComplete() {
          running = false;
        };
        startPlay = function _startPlay() {
          if (running) return;
          running = true;
          for (var _i = 0; _i < reels.length; _i++) {
            var r = reels[_i];
            var extra = 8;
            var target = r.position + 10 + _i * 15 + extra;
            var time = 2500 + _i * 200 + extra * 200;
            tweenTo(r, 'position', target, time, backout(0.5), null, _i === reels.length - 1 ? reelsComplete : null);
          }
        };
        // Create a new application
        app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Application(); // Initialize the application
        _context.next = 8;
        return app.init({
          backgroundAlpha: 0,
          width: 900,
          height: 600,
          text: 'center'
        });
      case 8:
        // Append the application canvas to the document body
        document.getElementById('app').appendChild(app.canvas);

        // Load the textures
        _context.next = 11;
        return pixi_js__WEBPACK_IMPORTED_MODULE_0__.Assets.load([_images_icon_7_png__WEBPACK_IMPORTED_MODULE_1__, _images_icon_150_png__WEBPACK_IMPORTED_MODULE_2__, _images_icon_bell_png__WEBPACK_IMPORTED_MODULE_3__, _images_icon_chery_png__WEBPACK_IMPORTED_MODULE_4__, _images_icon_coin_png__WEBPACK_IMPORTED_MODULE_5__, _images_icon_grape_png__WEBPACK_IMPORTED_MODULE_6__, _images_icon_plum_png__WEBPACK_IMPORTED_MODULE_7__, _images_icon_major_png__WEBPACK_IMPORTED_MODULE_8__, _images_icon_mega_png__WEBPACK_IMPORTED_MODULE_9__, _images_icon_minor_png__WEBPACK_IMPORTED_MODULE_10__, _images_icon_joker_png__WEBPACK_IMPORTED_MODULE_11__]);
      case 11:
        REEL_WIDTH = 340;
        SYMBOL_SIZE = 200; // Create different slot symbols
        slotTextures = [pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_7_png__WEBPACK_IMPORTED_MODULE_1__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_150_png__WEBPACK_IMPORTED_MODULE_2__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_bell_png__WEBPACK_IMPORTED_MODULE_3__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_chery_png__WEBPACK_IMPORTED_MODULE_4__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_coin_png__WEBPACK_IMPORTED_MODULE_5__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_grape_png__WEBPACK_IMPORTED_MODULE_6__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_plum_png__WEBPACK_IMPORTED_MODULE_7__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_major_png__WEBPACK_IMPORTED_MODULE_8__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_mega_png__WEBPACK_IMPORTED_MODULE_9__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_minor_png__WEBPACK_IMPORTED_MODULE_10__), pixi_js__WEBPACK_IMPORTED_MODULE_0__.Texture.from(_images_icon_joker_png__WEBPACK_IMPORTED_MODULE_11__)]; // Build the reels
        reels = [];
        reelContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();
        for (i = 0; i < 3; i++) {
          rc = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();
          rc.x = i * REEL_WIDTH;
          reelContainer.addChild(rc);
          reel = {
            container: rc,
            symbols: [],
            position: 0,
            previousPosition: 0,
            blur: new pixi_js__WEBPACK_IMPORTED_MODULE_0__.BlurFilter()
          };
          reel.blur.blurX = 0;
          reel.blur.blurY = 0;
          rc.filters = [reel.blur];

          // Build the symbols
          for (j = 0; j < 10; j++) {
            symbol = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]); // Scale the symbol to fit symbol area.
            symbol.y = j * SYMBOL_SIZE;
            symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
            symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
            reel.symbols.push(symbol);
            rc.addChild(symbol);
          }
          reels.push(reel);
        }
        app.stage.addChild(reelContainer);
        running = false; // Function to start playing.
        // Reels done handler.
        // Listen for animate update.
        app.ticker.add(function () {
          // Update the slots.
          for (var _i2 = 0; _i2 < reels.length; _i2++) {
            var r = reels[_i2];
            // Update blur filter y amount based on speed.
            // This would be better if calculated with time in mind also. Now blur depends on frame rate.

            r.blur.blurY = (r.position - r.previousPosition) * 8;
            r.previousPosition = r.position;

            // Update symbol positions on reel.
            for (var _j = 0; _j < r.symbols.length; _j++) {
              var s = r.symbols[_j];
              var prevy = s.y;
              s.y = (r.position + _j) % r.symbols.length * SYMBOL_SIZE - SYMBOL_SIZE;
              if (s.y < 0 && prevy > SYMBOL_SIZE) {
                // Detect going over and swap a texture.
                // This should in proper product be determined from some logical reel.
                s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];
                s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
                s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
              }
              if (_i2 === 0 && _j === 4 || _i2 === 1 && _j === 9 || _i2 === 2 && _j === 4 || _i2 === 3 && _j === 9 || _i2 === 4 && _j === 4) {
                s.texture = slotTextures[Math.floor(7)];
                s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
                s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
              }
            }
          }
        });

        // Very simple tweening utility function. This should be replaced with a proper tweening library in a real product.
        tweening = [];
        // Listen for animate update.
        app.ticker.add(function () {
          var now = Date.now();
          var remove = [];
          for (var _i3 = 0; _i3 < tweening.length; _i3++) {
            var t = tweening[_i3];
            var phase = Math.min(1, (now - t.start) / t.time);
            t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));
            if (t.change) t.change(t);
            if (phase === 1) {
              t.object[t.property] = t.target;
              if (t.complete) t.complete(t);
              remove.push(t);
            }
          }
          for (var _i4 = 0; _i4 < remove.length; _i4++) {
            tweening.splice(tweening.indexOf(remove[_i4]), 1);
          }
        });

        // Basic lerp funtion.

        // Backout function from tweenjs.
        elements = {
          btn: document.querySelector('.btn_spin'),
          winner: document.querySelector('.winner'),
          winElements: document.querySelectorAll('.win'),
          modalOverlay: document.querySelector('.modal_overlay'),
          modalSignup: document.querySelector('.modal_signup'),
          textSpin: document.querySelector('.text-win'),
          arrows: document.querySelector('.arrows-wrap'),
          sounds: {
            win: new Audio('https://n1md7.github.io/slot-game/sound/win.mp3'),
            spin: new Audio('https://n1md7.github.io/slot-game/sound/spin.mp3')
          }
        };
        addClassWithDelay = function addClassWithDelay(elements, className, delay) {
          elements.forEach(function (element, index) {
            setTimeout(function () {
              element.classList.add(className);
            }, index * delay);
          });
        };
        showModal = function showModal(overlay, modal, delay) {
          setTimeout(function () {
            overlay.classList.add('show');
            modal.classList.add('show');
          }, delay);
        };
        winnerShow = function winnerShow() {
          setTimeout(function () {
            elements.sounds.win.play();
            elements.winner.classList.add('active');
            addClassWithDelay(elements.winElements, 'active', 10);
          }, 3800);
          setTimeout(function () {
            elements.arrows.classList.add('active');
          }, 4200);
          setTimeout(function () {
            elements.textSpin.classList.add('active');
          }, 5500);
          showModal(elements.modalOverlay, elements.modalSignup, 9000);
        };
        elements.btn.addEventListener('click', function () {
          //updateTimer();
          elements.sounds.spin.play();
          startPlay();
          winnerShow();
          elements.btn.style.opacity = 0.5;
          elements.btn.style.pointerEvents = 'none';
        });
      case 27:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/bg_global.png */ "./src/images/bg_global.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/slote-ramka.png */ "./src/images/slote-ramka.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/btn_spin.png */ "./src/images/btn_spin.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/icon-win.png */ "./src/images/icon-win.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik-Regular.ttf */ "./src/fonts/Rubik-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik-Bold.ttf */ "./src/fonts/Rubik-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik-SemiBold.ttf */ "./src/fonts/Rubik-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik-Medium.ttf */ "./src/fonts/Rubik-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Rubik-Regular, Arial, Helvetica, sans-serif;
}

html {
  font-family: Rubik-Regular, sans-serif;
}

body {
  width: 100vw;
  height: 100vh;
  color: #262626;
  padding: 10px;
  background-color: #000000;
  font-family: Rubik-Regular, sans-serif;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
}
@media screen and (max-width: 768px) {
  body {
    padding: 0;
  }
}

#app {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  padding-left: 40px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  aspect-ratio: 2.2;
}
@media screen and (max-width: 900px) {
  #app {
    padding: 7% 9.5%;
  }
}

canvas {
  width: 100%;
  position: relative;
}

h2.title {
  margin-top: 20px;
  margin-bottom: 30px;
  color: #ffffff;
  font-size: 42px;
  text-align: center;
  font-family: Rubik-Bold, sans-serif;
  font-weight: 700;
  background: linear-gradient(180deg, #FFF 35.58%, #FFEF49 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-wrapper {
  text-align: center;
}

button.btn_spin {
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.winner {
  position: absolute;
  top: 47%;
  left: -16px;
  transform: translateY(-45%);
  transition: 500ms;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}
.winner .win {
  width: 320px;
  height: 224px;
  animation: animatetopw 0.2s ease;
  display: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.winner .win:not(:first-child) {
  margin-left: 14px;
}
.winner .win.active {
  display: block;
}
@media screen and (max-width: 900px) {
  .winner {
    padding: 0;
    left: -2%;
    width: 86%;
  }
  .winner .win {
    width: 140%;
    height: 80px;
  }
}

.arrows-wrap {
  display: none;
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}
.arrows-wrap .line {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
.arrows-wrap.active {
  display: flex;
}
.arrows-wrap.active .arrow-left {
  animation: animatearrowleft 0.2s ease;
}
.arrows-wrap.active .arrow-right {
  animation: animatearrowright 0.2s ease;
}
@media screen and (max-width: 900px) {
  .arrows-wrap .arrow-left,
  .arrows-wrap .arrow-right {
    width: 120px;
  }
}

.text-win-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);
}

.text-win {
  display: none;
  width: 100%;
  animation: animatetoptwt 0.5s ease;
}
.text-win.active {
  display: block;
}

@keyframes animatetopw {
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes animatetoptwt {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
  75% {
    opacity: 0.75;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes animatearrowleft {
  0% {
    opacity: 0.5;
    transform: translateX(150%);
  }
  50% {
    opacity: 1;
    transform: translateX(75%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes animatearrowright {
  0% {
    opacity: 0.5;
    transform: translateX(-150%);
  }
  50% {
    opacity: 1;
    transform: translateX(-75%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@font-face {
  font-family: Rubik-Regular;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("truetype");
}
@font-face {
  font-family: Rubik-Bold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("truetype");
}
@font-face {
  font-family: Rubik-SemiBold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("truetype");
}
@font-face {
  font-family: Rubik-Medium;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("truetype");
}
.form {
  color: inherit;
}
.form .form-group {
  position: relative;
  margin-top: 16px;
}
.form .form-group input.hidden {
  display: none;
}
.form .form-group .form-control {
  display: block;
  width: 100%;
  position: relative;
  height: 44px;
  line-height: 44px;
  padding: 14px 18px 12px;
  font-size: 14px;
  font-weight: normal;
  color: #262626;
  caret-color: #262626;
  background: transparent;
  transition: 0.2s ease border-color;
  background: linear-gradient(#EFF5FE, #EFF5FE) padding-box, linear-gradient(to right, #1A7BDC, #0A2792) border-box;
  border-radius: 10px;
  border: 2px solid transparent;
  outline: none;
}
.form .form-group .form-control.center {
  text-align: center;
}
.form .form-group .form-control::-moz-placeholder {
  color: #A4B2E3;
}
.form .form-group .form-control::placeholder {
  color: #A4B2E3;
}
.form .form-group .form-control + .control-label,
.form .form-group .selectric-form-control + .control-label,
.form .form-group .control-label-forced {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 14px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transform-origin: 0 0;
  z-index: 0;
  line-height: 17px;
  font-weight: 400;
  transform: translateY(0);
  opacity: 1;
}
.form .form-group .help-block {
  min-height: 16px;
  margin-top: 2px;
  font-size: 12px;
  text-align: left;
}
.form .form-group.checkbox div a {
  color: inherit;
  text-decoration: underline;
}
.form .form-group.checkbox label {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
.form .form-group.checkbox label .checkbox {
  position: relative;
  display: block;
  width: 30px;
  min-width: 30px;
  height: 30px;
  margin-right: 15px;
  border-radius: 15px;
  background: #DAE8FA;
  border: 1px solid #1A7BDC;
}
.form .form-group.checkbox label .checkbox.radio {
  border-radius: 50%;
}
.form .form-group.checkbox label input + .checkbox::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 8px;
  display: block;
  width: 30%;
  height: 50%;
  border-right: 3px solid #000000;
  border-bottom: 3px solid #000000;
  transition: 300ms;
  transform: rotate(45deg);
  opacity: 0;
}
.form .form-group.checkbox label input + .checkbox.radio::before {
  top: 50%;
  left: 50%;
  width: 50%;
  border: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.form .form-group.checkbox label input:checked + .checkbox:before {
  opacity: 1;
}
.form .visible {
  position: absolute;
  top: 45px;
  right: 25px;
  cursor: pointer;
  text-decoration: none;
  color: white;
}
.form .visible .icon {
  font-size: 20px;
}
.form .visible .icon-visibility-off {
  display: block;
}
.form .visible .icon-visibility {
  display: none;
}
.form .visible.active .icon-visibility-off {
  display: none;
}
.form .visible.active .icon-visibility {
  display: block;
}

.modal_overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  background: rgba(37, 37, 37, 0.85);
  z-index: 100;
}
.modal_overlay.show {
  display: block;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
  display: none;
  animation: animatetop 0.5s ease;
}
.modal.show {
  display: flex;
}
.modal .popup {
  position: relative;
  width: 452px;
  max-width: 100%;
  margin: auto;
  animation: appear 0.5s ease;
  border-radius: 20px;
  overflow: hidden;
}
.modal .popup > .header {
  padding: 0 18px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  line-height: 56px;
  color: #ffffff;
  background: linear-gradient(136deg, #B81848 5.11%, #961139 32.41%, #7C0F34 88.62%);
}
.modal .popup > .header .title {
  padding: 0;
  font-size: 20px;
  font-family: Rubik-Bold, sans-serif;
  font-weight: 700;
}
.modal .popup > .header .close {
  cursor: pointer;
  display: flex;
  line-height: 56px;
  transition: 200ms;
}
.modal .popup > .header .close:hover, .modal .popup > .header .close:focus, .modal .popup > .header .close:active {
  opacity: 0.8;
}
.modal .popup > .content {
  min-height: 280px;
  color: #050505;
  background: linear-gradient(110deg, #D3976C 0%, #FFFCB5 100%);
  padding: 20px;
  border-radius: 0 0 20px 20px;
}
.modal .popup > .content img {
  width: 100%;
}
.modal .popup > .content .description {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  font-family: Rubik-Medium, sans-serif;
}
.modal .popup > .content .checkbox-description {
  margin-top: 10px;
  font-size: 12px;
}
.modal .popup > .content .checkbox-description a {
  color: #193AB2;
  text-decoration: underline;
}
.modal .popup > .content button {
  border: none;
  background: none;
  margin: 30px auto 0;
  display: block;
  cursor: pointer;
  transition: 200ms;
}
.modal .popup > .content button:hover {
  filter: brightness(110%);
}

@keyframes animatetop {
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}
.timer-wrap {
  padding-top: 16px;
  padding-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.timer-wrap .timer-title {
  width: -moz-max-content;
  width: max-content;
  font-size: 14px;
  font-weight: 600;
  color: #1E1E1E;
  text-align: right;
  margin-right: 10px;
  text-transform: uppercase;
  font-family: Rubik-SemiBold, sans-serif;
}
.timer-wrap .timer {
  font-size: 28px;
  font-weight: 700;
  padding: 6px 18px;
  border-radius: 15px;
  color: #3D3D3D;
  width: 126px;
  text-align: center;
  font-family: Rubik-Bold, sans-serif;
  background: linear-gradient(90deg, #FFD083 0%, #FFAA7D 100%);
}`, "",{"version":3,"sources":["webpack://./src/styles/_global.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/_forms.scss","webpack://./src/styles/_modal.scss","webpack://./src/styles/_timer.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"src/variabels/colors\";\n\n$shadow: rgb(185, 185, 185);\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Rubik-Regular, Arial, Helvetica, sans-serif;\n}\n\nhtml {\n  font-family: Rubik-Regular, sans-serif;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  color: #262626;\n  padding: 10px;\n  background-color: #000000;\n  font-family: Rubik-Regular, sans-serif;\n  background-image: url(\"/src/images/bg_global.png\");\n  background-position: center;\n\n  @media screen and (max-width: 768px) {\n    padding: 0;\n  }\n}\n\n#app {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 20px;\n  padding-left: 40px;\n  background-image: url(\"/src/images/slote-ramka.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  aspect-ratio: 2.2;\n\n  @media screen and (max-width: 900px) {\n    padding: 7% 9.5%;\n  }\n}\n\ncanvas {\n  width: 100%;\n  position: relative;\n}\n\nh2.title {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  color: #ffffff;\n  font-size: 42px;\n  text-align: center;\n  font-family: Rubik-Bold, sans-serif;\n  font-weight: 700;\n  background: linear-gradient(180deg, #FFF 35.58%, #FFEF49 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.btn-wrapper {\n  text-align: center;\n}\n\nbutton.btn_spin {\n  width: 200px;\n  height: 200px;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(\"/src/images/btn_spin.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.winner {\n  position: absolute;\n  top: 47%;\n  left: -16px;\n  transform: translateY(-45%);\n  transition: 500ms;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  width: 100%;\n\n  .win {\n    width: 320px;\n    height: 224px;\n    animation: animatetopw 0.2s ease;\n    display: none;\n    background-image: url(\"/src/images/icon-win.png\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n\n    &:not(:first-child) {\n      margin-left: 14px;\n    }\n\n    &.active {\n      display: block;\n    }\n  }\n\n  @media screen and (max-width: 900px) {\n    padding: 0;\n    left: -2%;\n    width: 86%;\n\n    .win {\n      width: 140%;\n      height: 80px;\n    }\n  }\n}\n\n.arrows-wrap {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2;\n\n  .line {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 100%;\n  }\n\n  &.active {\n    display: flex;\n\n    .arrow-left {\n      animation: animatearrowleft 0.2s ease;\n    }\n    .arrow-right {\n      animation: animatearrowright 0.2s ease;\n    }\n  }\n\n  @media screen and (max-width: 900px) {\n    .arrow-left,\n    .arrow-right {\n      width: 120px;\n    }\n  }\n}\n\n.text-win-wrap {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 4;\n  transform: translate(-50%, -50%);\n}\n\n.text-win {\n  display: none;\n  width: 100%;\n  animation: animatetoptwt .5s ease;\n\n  &.active {\n    display: block;\n  }\n}\n\n@keyframes animatetopw {\n  0% {\n    opacity: 0;\n    transform: scale(0.2);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.4);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes animatetoptwt {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.2);\n  }\n  75% {\n    opacity: 0.75;\n    transform: scale(0.9);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes animatearrowleft {\n  0% {\n    opacity: 0.5;\n    transform: translateX(150%);\n  }\n  50% {\n    opacity: 1;\n    transform: translateX(75%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes animatearrowright {\n  0% {\n    opacity: 0.5;\n    transform: translateX(-150%);\n  }\n  50% {\n    opacity: 1;\n    transform: translateX(-75%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Rubik-Regular, Arial, Helvetica, sans-serif;\n}\n\nhtml {\n  font-family: Rubik-Regular, sans-serif;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  color: #262626;\n  padding: 10px;\n  background-color: #000000;\n  font-family: Rubik-Regular, sans-serif;\n  background-image: url(\"/src/images/bg_global.png\");\n  background-position: center;\n}\n@media screen and (max-width: 768px) {\n  body {\n    padding: 0;\n  }\n}\n\n#app {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 20px;\n  padding-left: 40px;\n  background-image: url(\"/src/images/slote-ramka.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  aspect-ratio: 2.2;\n}\n@media screen and (max-width: 900px) {\n  #app {\n    padding: 7% 9.5%;\n  }\n}\n\ncanvas {\n  width: 100%;\n  position: relative;\n}\n\nh2.title {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  color: #ffffff;\n  font-size: 42px;\n  text-align: center;\n  font-family: Rubik-Bold, sans-serif;\n  font-weight: 700;\n  background: linear-gradient(180deg, #FFF 35.58%, #FFEF49 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.btn-wrapper {\n  text-align: center;\n}\n\nbutton.btn_spin {\n  width: 200px;\n  height: 200px;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(\"/src/images/btn_spin.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.winner {\n  position: absolute;\n  top: 47%;\n  left: -16px;\n  transform: translateY(-45%);\n  transition: 500ms;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  width: 100%;\n}\n.winner .win {\n  width: 320px;\n  height: 224px;\n  animation: animatetopw 0.2s ease;\n  display: none;\n  background-image: url(\"/src/images/icon-win.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n.winner .win:not(:first-child) {\n  margin-left: 14px;\n}\n.winner .win.active {\n  display: block;\n}\n@media screen and (max-width: 900px) {\n  .winner {\n    padding: 0;\n    left: -2%;\n    width: 86%;\n  }\n  .winner .win {\n    width: 140%;\n    height: 80px;\n  }\n}\n\n.arrows-wrap {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2;\n}\n.arrows-wrap .line {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n}\n.arrows-wrap.active {\n  display: flex;\n}\n.arrows-wrap.active .arrow-left {\n  animation: animatearrowleft 0.2s ease;\n}\n.arrows-wrap.active .arrow-right {\n  animation: animatearrowright 0.2s ease;\n}\n@media screen and (max-width: 900px) {\n  .arrows-wrap .arrow-left,\n  .arrows-wrap .arrow-right {\n    width: 120px;\n  }\n}\n\n.text-win-wrap {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 4;\n  transform: translate(-50%, -50%);\n}\n\n.text-win {\n  display: none;\n  width: 100%;\n  animation: animatetoptwt 0.5s ease;\n}\n.text-win.active {\n  display: block;\n}\n\n@keyframes animatetopw {\n  0% {\n    opacity: 0;\n    transform: scale(0.2);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.4);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes animatetoptwt {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.2);\n  }\n  75% {\n    opacity: 0.75;\n    transform: scale(0.9);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes animatearrowleft {\n  0% {\n    opacity: 0.5;\n    transform: translateX(150%);\n  }\n  50% {\n    opacity: 1;\n    transform: translateX(75%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes animatearrowright {\n  0% {\n    opacity: 0.5;\n    transform: translateX(-150%);\n  }\n  50% {\n    opacity: 1;\n    transform: translateX(-75%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@font-face {\n  font-family: Rubik-Regular;\n  src: url(\"../fonts/Rubik-Regular.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: Rubik-Bold;\n  src: url(\"../fonts/Rubik-Bold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: Rubik-SemiBold;\n  src: url(\"../fonts/Rubik-SemiBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: Rubik-Medium;\n  src: url(\"../fonts/Rubik-Medium.ttf\") format(\"truetype\");\n}\n.form {\n  color: inherit;\n}\n.form .form-group {\n  position: relative;\n  margin-top: 16px;\n}\n.form .form-group input.hidden {\n  display: none;\n}\n.form .form-group .form-control {\n  display: block;\n  width: 100%;\n  position: relative;\n  height: 44px;\n  line-height: 44px;\n  padding: 14px 18px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  color: #262626;\n  caret-color: #262626;\n  background: transparent;\n  transition: 0.2s ease border-color;\n  background: linear-gradient(#EFF5FE, #EFF5FE) padding-box, linear-gradient(to right, #1A7BDC, #0A2792) border-box;\n  border-radius: 10px;\n  border: 2px solid transparent;\n  outline: none;\n}\n.form .form-group .form-control.center {\n  text-align: center;\n}\n.form .form-group .form-control::placeholder {\n  color: #A4B2E3;\n}\n.form .form-group .form-control + .control-label,\n.form .form-group .selectric-form-control + .control-label,\n.form .form-group .control-label-forced {\n  position: absolute;\n  top: -18px;\n  left: 0;\n  font-size: 14px;\n  user-select: none;\n  transform-origin: 0 0;\n  z-index: 0;\n  line-height: 17px;\n  font-weight: 400;\n  transform: translateY(0);\n  opacity: 1;\n}\n.form .form-group .help-block {\n  min-height: 16px;\n  margin-top: 2px;\n  font-size: 12px;\n  text-align: left;\n}\n.form .form-group.checkbox div a {\n  color: inherit;\n  text-decoration: underline;\n}\n.form .form-group.checkbox label {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n}\n.form .form-group.checkbox label .checkbox {\n  position: relative;\n  display: block;\n  width: 30px;\n  min-width: 30px;\n  height: 30px;\n  margin-right: 15px;\n  border-radius: 15px;\n  background: #DAE8FA;\n  border: 1px solid #1A7BDC;\n}\n.form .form-group.checkbox label .checkbox.radio {\n  border-radius: 50%;\n}\n.form .form-group.checkbox label input + .checkbox::before {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  left: 8px;\n  display: block;\n  width: 30%;\n  height: 50%;\n  border-right: 3px solid #000000;\n  border-bottom: 3px solid #000000;\n  transition: 300ms;\n  transform: rotate(45deg);\n  opacity: 0;\n}\n.form .form-group.checkbox label input + .checkbox.radio::before {\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  border: none;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n}\n.form .form-group.checkbox label input:checked + .checkbox:before {\n  opacity: 1;\n}\n.form .visible {\n  position: absolute;\n  top: 45px;\n  right: 25px;\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n}\n.form .visible .icon {\n  font-size: 20px;\n}\n.form .visible .icon-visibility-off {\n  display: block;\n}\n.form .visible .icon-visibility {\n  display: none;\n}\n.form .visible.active .icon-visibility-off {\n  display: none;\n}\n.form .visible.active .icon-visibility {\n  display: block;\n}\n\n.modal_overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: none;\n  background: rgba(37, 37, 37, 0.85);\n  z-index: 100;\n}\n.modal_overlay.show {\n  display: block;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 100;\n  -webkit-overflow-scrolling: touch;\n  display: none;\n  animation: animatetop 0.5s ease;\n}\n.modal.show {\n  display: flex;\n}\n.modal .popup {\n  position: relative;\n  width: 452px;\n  max-width: 100%;\n  margin: auto;\n  animation: appear 0.5s ease;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.modal .popup > .header {\n  padding: 0 18px;\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 56px;\n  line-height: 56px;\n  color: #ffffff;\n  background: linear-gradient(136deg, #B81848 5.11%, #961139 32.41%, #7C0F34 88.62%);\n}\n.modal .popup > .header .title {\n  padding: 0;\n  font-size: 20px;\n  font-family: Rubik-Bold, sans-serif;\n  font-weight: 700;\n}\n.modal .popup > .header .close {\n  cursor: pointer;\n  display: flex;\n  line-height: 56px;\n  transition: 200ms;\n}\n.modal .popup > .header .close:hover, .modal .popup > .header .close:focus, .modal .popup > .header .close:active {\n  opacity: 0.8;\n}\n.modal .popup > .content {\n  min-height: 280px;\n  color: #050505;\n  background: linear-gradient(110deg, #D3976C 0%, #FFFCB5 100%);\n  padding: 20px;\n  border-radius: 0 0 20px 20px;\n}\n.modal .popup > .content img {\n  width: 100%;\n}\n.modal .popup > .content .description {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n  font-family: Rubik-Medium, sans-serif;\n}\n.modal .popup > .content .checkbox-description {\n  margin-top: 10px;\n  font-size: 12px;\n}\n.modal .popup > .content .checkbox-description a {\n  color: #193AB2;\n  text-decoration: underline;\n}\n.modal .popup > .content button {\n  border: none;\n  background: none;\n  margin: 30px auto 0;\n  display: block;\n  cursor: pointer;\n  transition: 200ms;\n}\n.modal .popup > .content button:hover {\n  filter: brightness(110%);\n}\n\n@keyframes animatetop {\n  from {\n    opacity: 0;\n    transform: translateY(-10%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n.timer-wrap {\n  padding-top: 16px;\n  padding-bottom: 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.timer-wrap .timer-title {\n  width: max-content;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1E1E1E;\n  text-align: right;\n  margin-right: 10px;\n  text-transform: uppercase;\n  font-family: Rubik-SemiBold, sans-serif;\n}\n.timer-wrap .timer {\n  font-size: 28px;\n  font-weight: 700;\n  padding: 6px 18px;\n  border-radius: 15px;\n  color: #3D3D3D;\n  width: 126px;\n  text-align: center;\n  font-family: Rubik-Bold, sans-serif;\n  background: linear-gradient(90deg, #FFD083 0%, #FFAA7D 100%);\n}","@font-face {\n  font-family: Rubik-Regular;\n  src: url(\"../fonts/Rubik-Regular.ttf\") format(\"truetype\"),\n}\n\n@font-face {\n  font-family: Rubik-Bold;\n  src: url(\"../fonts/Rubik-Bold.ttf\") format(\"truetype\"),\n}\n\n@font-face {\n  font-family: Rubik-SemiBold;\n  src: url(\"../fonts/Rubik-SemiBold.ttf\") format(\"truetype\"),\n}\n\n@font-face {\n  font-family: Rubik-Medium;\n  src: url(\"../fonts/Rubik-Medium.ttf\") format(\"truetype\"),\n}\n","$inputTopLabelSpace: 16px;\n$inputHeight: 44px;\n\n.form {\n  color: inherit;\n\n  .form-group {\n    position: relative;\n    margin-top: $inputTopLabelSpace;\n\n    input.hidden {\n      display: none;\n    }\n\n    .form-control {\n      display: block;\n      width: 100%;\n      position: relative;\n      height: $inputHeight;\n      line-height: $inputHeight;\n      padding: 14px 18px 12px;\n      font-size: 14px;\n      font-weight: normal;\n      color: #262626;\n      caret-color: #262626;\n      background: transparent;\n      transition: .2s ease border-color;\n      background: linear-gradient(#EFF5FE, #EFF5FE) padding-box, linear-gradient(to right, #1A7BDC, #0A2792) border-box;\n      border-radius: 10px;\n      border: 2px solid transparent;\n      outline: none;\n\n      &.center {\n        text-align: center;\n      }\n\n      &::placeholder {\n        color: #A4B2E3;\n      }\n    }\n\n    .form-control + .control-label,\n    .selectric-form-control + .control-label,\n    .control-label-forced {\n      //@include text_overflow;\n      position: absolute;\n      top: -18px;\n      left: 0;\n      font-size: 14px;\n      user-select: none;\n      //color: $globalStrokeColor;\n      //transition: $transition;\n      transform-origin: 0 0;\n      z-index: 0;\n      line-height: 17px;\n      font-weight: 400;\n      transform: translateY(0);\n      opacity: 1;\n    }\n\n    .help-block {\n      min-height: 16px;\n      margin-top: 2px;\n      font-size: 12px;\n      text-align: left;\n    }\n\n    &.checkbox {\n      div {\n        a {\n          color: inherit;\n          text-decoration: underline;\n        }\n      }\n\n      label {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n        cursor: pointer;\n\n        .checkbox {\n          position: relative;\n          display: block;\n          width: 30px;\n          min-width: 30px;\n          height: 30px;\n          margin-right: 15px;\n          border-radius: 15px;\n          background: #DAE8FA;\n          border: 1px solid #1A7BDC;\n\n          &.radio {\n            border-radius: 50%;\n          }\n        }\n\n        input {\n          + .checkbox {\n            &::before {\n              content: '';\n              position: absolute;\n              top: 3px;\n              left: 8px;\n              display: block;\n              width: 30%;\n              height: 50%;\n              border-right: 3px solid #000000;\n              border-bottom: 3px solid #000000;\n              transition: 300ms;\n              transform: rotate(45deg);\n              opacity: 0;\n            }\n\n            &.radio::before {\n              top: 50%;\n              left: 50%;\n              width: 50%;\n              border: none;\n              border-radius: 50%;\n              transform: translate(-50%, -50%);\n            }\n          }\n\n          &:checked + .checkbox {\n            &:before {\n              opacity: 1;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .visible {\n    position: absolute;\n    top: 45px;\n    right: 25px;\n    cursor: pointer;\n    text-decoration: none;\n    color: white;\n\n    .icon {\n      font-size: 20px;\n    }\n\n    .icon-visibility-off {\n      display: block;\n    }\n\n    .icon-visibility {\n      display: none;\n    }\n\n    &.active {\n      .icon-visibility-off {\n        display: none;\n      }\n\n      .icon-visibility {\n        display: block;\n      }\n    }\n  }\n}\n","$modalZIndex: 100;\n$headerHeight: 56px;\n\n.modal_overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: none;\n  background: rgba(37, 37, 37, 0.85);\n  z-index: $modalZIndex;\n\n  &.show {\n    display: block;\n  }\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: $modalZIndex;\n  -webkit-overflow-scrolling: touch;\n  display: none;\n  animation: animatetop 0.5s ease;\n\n  &.show {\n    display: flex;\n  }\n\n  .popup {\n    position: relative;\n    width: 452px;\n    max-width: 100%;\n    margin: auto;\n    animation: appear 0.5s ease;\n    border-radius: 20px;\n    overflow: hidden;\n\n    > .header {\n      padding: 0 18px;\n      position: relative;\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: $headerHeight;\n      line-height: $headerHeight;\n      color: #ffffff;\n      background: linear-gradient(136deg, #B81848 5.11%, #961139 32.41%, #7C0F34 88.62%);\n\n      .title {\n        padding: 0;\n        font-size: 20px;\n        font-family: Rubik-Bold, sans-serif;\n        font-weight: 700;\n      }\n\n      .close {\n        cursor: pointer;\n        display: flex;\n        line-height: $headerHeight;\n        transition: 200ms;\n\n        &:hover,\n        &:focus,\n        &:active {\n          opacity: 0.8;\n        }\n      }\n    }\n\n    > .content {\n      min-height: 280px;\n      color: #050505;\n      background: linear-gradient(110deg, #D3976C 0%, #FFFCB5 100%);\n      padding: 20px;\n      border-radius: 0 0 20px 20px;\n\n      img {\n        width: 100%;\n      }\n\n      .description {\n        margin-top: 20px;\n        margin-bottom: 10px;\n        font-size: 16px;\n        font-weight: 500;\n        text-align: center;\n        font-family: Rubik-Medium, sans-serif;\n      }\n\n      .checkbox-description {\n        margin-top: 10px;\n        font-size: 12px;\n\n        a {\n          color: #193AB2;\n          text-decoration: underline;\n        }\n      }\n\n      button {\n        border: none;\n        background: none;\n        margin: 30px auto 0;\n        display: block;\n        cursor: pointer;\n        transition: 200ms;\n\n        &:hover {\n          filter: brightness(110%);\n        }\n      }\n    }\n  }\n}\n\n@keyframes animatetop {\n  from {\n    opacity: 0;\n    transform: translateY(-10%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n",".timer-wrap {\n  padding-top: 16px;\n  padding-bottom: 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .timer-title {\n    width: max-content;\n    font-size: 14px;\n    font-weight: 600;\n    color: #1E1E1E;\n    text-align: right;\n    margin-right: 10px;\n    text-transform: uppercase;\n    font-family: Rubik-SemiBold, sans-serif;\n  }\n\n  .timer {\n    font-size: 28px;\n    font-weight: 700;\n    padding: 6px 18px;\n    border-radius: 15px;\n    color: #3D3D3D;\n    width: 126px;\n    text-align: center;\n    font-family: Rubik-Bold, sans-serif;\n    background: linear-gradient(90deg, #FFD083 0%, #FFAA7D 100%);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/fonts/Rubik-Bold.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Rubik-Bold.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Rubik-Bold.ttf";

/***/ }),

/***/ "./src/fonts/Rubik-Medium.ttf":
/*!************************************!*\
  !*** ./src/fonts/Rubik-Medium.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Rubik-Medium.ttf";

/***/ }),

/***/ "./src/fonts/Rubik-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Rubik-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Rubik-Regular.ttf";

/***/ }),

/***/ "./src/fonts/Rubik-SemiBold.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Rubik-SemiBold.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Rubik-SemiBold.ttf";

/***/ }),

/***/ "./src/images/bg_global.png":
/*!**********************************!*\
  !*** ./src/images/bg_global.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bg_global.png";

/***/ }),

/***/ "./src/images/btn_spin.png":
/*!*********************************!*\
  !*** ./src/images/btn_spin.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/btn_spin.png";

/***/ }),

/***/ "./src/images/icon-150.png":
/*!*********************************!*\
  !*** ./src/images/icon-150.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-150.png";

/***/ }),

/***/ "./src/images/icon-7.png":
/*!*******************************!*\
  !*** ./src/images/icon-7.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-7.png";

/***/ }),

/***/ "./src/images/icon-bell.png":
/*!**********************************!*\
  !*** ./src/images/icon-bell.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-bell.png";

/***/ }),

/***/ "./src/images/icon-chery.png":
/*!***********************************!*\
  !*** ./src/images/icon-chery.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-chery.png";

/***/ }),

/***/ "./src/images/icon-coin.png":
/*!**********************************!*\
  !*** ./src/images/icon-coin.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-coin.png";

/***/ }),

/***/ "./src/images/icon-grape.png":
/*!***********************************!*\
  !*** ./src/images/icon-grape.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-grape.png";

/***/ }),

/***/ "./src/images/icon-joker.png":
/*!***********************************!*\
  !*** ./src/images/icon-joker.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-joker.png";

/***/ }),

/***/ "./src/images/icon-major.png":
/*!***********************************!*\
  !*** ./src/images/icon-major.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-major.png";

/***/ }),

/***/ "./src/images/icon-mega.png":
/*!**********************************!*\
  !*** ./src/images/icon-mega.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-mega.png";

/***/ }),

/***/ "./src/images/icon-minor.png":
/*!***********************************!*\
  !*** ./src/images/icon-minor.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-minor.png";

/***/ }),

/***/ "./src/images/icon-plum.png":
/*!**********************************!*\
  !*** ./src/images/icon-plum.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-plum.png";

/***/ }),

/***/ "./src/images/icon-win.png":
/*!*********************************!*\
  !*** ./src/images/icon-win.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icon-win.png";

/***/ }),

/***/ "./src/images/slote-ramka.png":
/*!************************************!*\
  !*** ./src/images/slote-ramka.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/slote-ramka.png";

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"node_modules_pixi_js_lib_environment-browser_browserAll_mjs":"1002e56cbfa601103cf5","node_modules_pixi_js_lib_environment-webworker_webworkerAll_mjs":"a4fe39d7ca803ca0fbc6"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "big-bass-bonanza-slots:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_bass_bonanza_slots"] = self["webpackChunkbig_bass_bonanza_slots"] || [];
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-07faa9"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sa1JBQWtSLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLGFBQWEsWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVywyREFBMkQsZ0NBQWdDLE9BQU8sY0FBYyxlQUFlLDJCQUEyQiw2REFBNkQsR0FBRyxVQUFVLDJDQUEyQyxHQUFHLFVBQVUsaUJBQWlCLGtCQUFrQixtQkFBbUIsa0JBQWtCLDhCQUE4QiwyQ0FBMkMseURBQXlELGdDQUFnQyw0Q0FBNEMsaUJBQWlCLEtBQUssR0FBRyxVQUFVLHVCQUF1QixnQkFBZ0IscUJBQXFCLG1CQUFtQixrQkFBa0IsdUJBQXVCLDJEQUEyRCxpQ0FBaUMsZ0NBQWdDLDJCQUEyQixzQkFBc0IsNENBQTRDLHVCQUF1QixLQUFLLEdBQUcsWUFBWSxnQkFBZ0IsdUJBQXVCLEdBQUcsY0FBYyxxQkFBcUIsd0JBQXdCLG1CQUFtQixvQkFBb0IsdUJBQXVCLHdDQUF3QyxxQkFBcUIsbUVBQW1FLDBCQUEwQixrQ0FBa0MseUNBQXlDLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLHFCQUFxQixpQkFBaUIsa0JBQWtCLHdCQUF3Qiw4QkFBOEIsb0JBQW9CLGlCQUFpQixrQkFBa0Isa0NBQWtDLHdEQUF3RCxpQ0FBaUMsZ0NBQWdDLDJCQUEyQixHQUFHLGFBQWEsdUJBQXVCLGFBQWEsZ0JBQWdCLGdDQUFnQyxzQkFBc0Isa0JBQWtCLDBDQUEwQyxnQkFBZ0IsWUFBWSxtQkFBbUIsb0JBQW9CLHVDQUF1QyxvQkFBb0IsMERBQTBELG1DQUFtQyxrQ0FBa0MsK0JBQStCLDZCQUE2QiwwQkFBMEIsT0FBTyxrQkFBa0IsdUJBQXVCLE9BQU8sS0FBSyw0Q0FBNEMsaUJBQWlCLGdCQUFnQixpQkFBaUIsY0FBYyxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxHQUFHLGtCQUFrQixrQkFBa0IsdUJBQXVCLGFBQWEsY0FBYyxnQ0FBZ0MsZ0JBQWdCLG1DQUFtQyx3QkFBd0IsZUFBZSxhQUFhLHlCQUF5QixlQUFlLGtDQUFrQyxrQkFBa0IsS0FBSyxnQkFBZ0Isb0JBQW9CLHFCQUFxQiw4Q0FBOEMsT0FBTyxvQkFBb0IsK0NBQStDLE9BQU8sS0FBSyw0Q0FBNEMsc0NBQXNDLHFCQUFxQixPQUFPLEtBQUssR0FBRyxvQkFBb0IsdUJBQXVCLGFBQWEsY0FBYyxlQUFlLHFDQUFxQyxHQUFHLGVBQWUsa0JBQWtCLGdCQUFnQixzQ0FBc0MsZ0JBQWdCLHFCQUFxQixLQUFLLEdBQUcsNEJBQTRCLFFBQVEsaUJBQWlCLDRCQUE0QixLQUFLLFNBQVMsbUJBQW1CLDRCQUE0QixLQUFLLFVBQVUsaUJBQWlCLDBCQUEwQixLQUFLLEdBQUcsOEJBQThCLFFBQVEsaUJBQWlCLDBCQUEwQixLQUFLLFNBQVMsbUJBQW1CLDRCQUE0QixLQUFLLFNBQVMsb0JBQW9CLDRCQUE0QixLQUFLLFVBQVUsaUJBQWlCLDBCQUEwQixLQUFLLEdBQUcsaUNBQWlDLFFBQVEsbUJBQW1CLGtDQUFrQyxLQUFLLFNBQVMsaUJBQWlCLGlDQUFpQyxLQUFLLFVBQVUsaUJBQWlCLCtCQUErQixLQUFLLEdBQUcsa0NBQWtDLFFBQVEsbUJBQW1CLG1DQUFtQyxLQUFLLFNBQVMsaUJBQWlCLGtDQUFrQyxLQUFLLFVBQVUsaUJBQWlCLCtCQUErQixLQUFLLEdBQUcsUUFBUSxjQUFjLGVBQWUsMkJBQTJCLDZEQUE2RCxHQUFHLFVBQVUsMkNBQTJDLEdBQUcsVUFBVSxpQkFBaUIsa0JBQWtCLG1CQUFtQixrQkFBa0IsOEJBQThCLDJDQUEyQyx5REFBeUQsZ0NBQWdDLEdBQUcsd0NBQXdDLFVBQVUsaUJBQWlCLEtBQUssR0FBRyxVQUFVLHVCQUF1QixnQkFBZ0IscUJBQXFCLG1CQUFtQixrQkFBa0IsdUJBQXVCLDJEQUEyRCxpQ0FBaUMsZ0NBQWdDLDJCQUEyQixzQkFBc0IsR0FBRyx3Q0FBd0MsVUFBVSx1QkFBdUIsS0FBSyxHQUFHLFlBQVksZ0JBQWdCLHVCQUF1QixHQUFHLGNBQWMscUJBQXFCLHdCQUF3QixtQkFBbUIsb0JBQW9CLHVCQUF1Qix3Q0FBd0MscUJBQXFCLG1FQUFtRSwwQkFBMEIsa0NBQWtDLHlDQUF5QyxHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxxQkFBcUIsaUJBQWlCLGtCQUFrQix3QkFBd0IsOEJBQThCLG9CQUFvQixpQkFBaUIsa0JBQWtCLGtDQUFrQyx3REFBd0QsaUNBQWlDLGdDQUFnQywyQkFBMkIsR0FBRyxhQUFhLHVCQUF1QixhQUFhLGdCQUFnQixnQ0FBZ0Msc0JBQXNCLGtCQUFrQiwwQ0FBMEMsZ0JBQWdCLEdBQUcsZ0JBQWdCLGlCQUFpQixrQkFBa0IscUNBQXFDLGtCQUFrQix3REFBd0QsaUNBQWlDLGdDQUFnQyw2QkFBNkIsR0FBRyxrQ0FBa0Msc0JBQXNCLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLHdDQUF3QyxhQUFhLGlCQUFpQixnQkFBZ0IsaUJBQWlCLEtBQUssa0JBQWtCLGtCQUFrQixtQkFBbUIsS0FBSyxHQUFHLGtCQUFrQixrQkFBa0IsdUJBQXVCLGFBQWEsY0FBYyxnQ0FBZ0MsZ0JBQWdCLG1DQUFtQyx3QkFBd0IsZUFBZSxHQUFHLHNCQUFzQix1QkFBdUIsYUFBYSxnQ0FBZ0MsZ0JBQWdCLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLG1DQUFtQywwQ0FBMEMsR0FBRyxvQ0FBb0MsMkNBQTJDLEdBQUcsd0NBQXdDLDREQUE0RCxtQkFBbUIsS0FBSyxHQUFHLG9CQUFvQix1QkFBdUIsYUFBYSxjQUFjLGVBQWUscUNBQXFDLEdBQUcsZUFBZSxrQkFBa0IsZ0JBQWdCLHVDQUF1QyxHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyw0QkFBNEIsUUFBUSxpQkFBaUIsNEJBQTRCLEtBQUssU0FBUyxtQkFBbUIsNEJBQTRCLEtBQUssVUFBVSxpQkFBaUIsMEJBQTBCLEtBQUssR0FBRyw0QkFBNEIsUUFBUSxpQkFBaUIsMEJBQTBCLEtBQUssU0FBUyxtQkFBbUIsNEJBQTRCLEtBQUssU0FBUyxvQkFBb0IsNEJBQTRCLEtBQUssVUFBVSxpQkFBaUIsMEJBQTBCLEtBQUssR0FBRywrQkFBK0IsUUFBUSxtQkFBbUIsa0NBQWtDLEtBQUssU0FBUyxpQkFBaUIsaUNBQWlDLEtBQUssVUFBVSxpQkFBaUIsK0JBQStCLEtBQUssR0FBRyxnQ0FBZ0MsUUFBUSxtQkFBbUIsbUNBQW1DLEtBQUssU0FBUyxpQkFBaUIsa0NBQWtDLEtBQUssVUFBVSxpQkFBaUIsK0JBQStCLEtBQUssR0FBRyxjQUFjLCtCQUErQixrRUFBa0UsR0FBRyxjQUFjLDRCQUE0QiwrREFBK0QsR0FBRyxjQUFjLGdDQUFnQyxtRUFBbUUsR0FBRyxjQUFjLDhCQUE4QixpRUFBaUUsR0FBRyxTQUFTLG1CQUFtQixHQUFHLHFCQUFxQix1QkFBdUIscUJBQXFCLEdBQUcsa0NBQWtDLGtCQUFrQixHQUFHLG1DQUFtQyxtQkFBbUIsZ0JBQWdCLHVCQUF1QixpQkFBaUIsc0JBQXNCLDRCQUE0QixvQkFBb0Isd0JBQXdCLG1CQUFtQix5QkFBeUIsNEJBQTRCLHVDQUF1QyxzSEFBc0gsd0JBQXdCLGtDQUFrQyxrQkFBa0IsR0FBRywwQ0FBMEMsdUJBQXVCLEdBQUcsZ0RBQWdELG1CQUFtQixHQUFHLDJKQUEySix1QkFBdUIsZUFBZSxZQUFZLG9CQUFvQixzQkFBc0IsMEJBQTBCLGVBQWUsc0JBQXNCLHFCQUFxQiw2QkFBNkIsZUFBZSxHQUFHLGlDQUFpQyxxQkFBcUIsb0JBQW9CLG9CQUFvQixxQkFBcUIsR0FBRyxvQ0FBb0MsbUJBQW1CLCtCQUErQixHQUFHLG9DQUFvQyxrQkFBa0Isd0JBQXdCLGdDQUFnQyx3QkFBd0Isb0JBQW9CLEdBQUcsOENBQThDLHVCQUF1QixtQkFBbUIsZ0JBQWdCLG9CQUFvQixpQkFBaUIsdUJBQXVCLHdCQUF3Qix3QkFBd0IsOEJBQThCLEdBQUcsb0RBQW9ELHVCQUF1QixHQUFHLDhEQUE4RCxrQkFBa0IsdUJBQXVCLGFBQWEsY0FBYyxtQkFBbUIsZUFBZSxnQkFBZ0Isb0NBQW9DLHFDQUFxQyxzQkFBc0IsNkJBQTZCLGVBQWUsR0FBRyxvRUFBb0UsYUFBYSxjQUFjLGVBQWUsaUJBQWlCLHVCQUF1QixxQ0FBcUMsR0FBRyxxRUFBcUUsZUFBZSxHQUFHLGtCQUFrQix1QkFBdUIsY0FBYyxnQkFBZ0Isb0JBQW9CLDBCQUEwQixpQkFBaUIsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsdUNBQXVDLG1CQUFtQixHQUFHLG1DQUFtQyxrQkFBa0IsR0FBRyw4Q0FBOEMsa0JBQWtCLEdBQUcsMENBQTBDLG1CQUFtQixHQUFHLG9CQUFvQixvQkFBb0IsV0FBVyxhQUFhLGNBQWMsWUFBWSxrQkFBa0IsdUNBQXVDLGlCQUFpQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxZQUFZLG9CQUFvQixXQUFXLGFBQWEsY0FBYyxZQUFZLHFCQUFxQixxQkFBcUIsaUJBQWlCLHNDQUFzQyxrQkFBa0Isb0NBQW9DLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyxpQkFBaUIsdUJBQXVCLGlCQUFpQixvQkFBb0IsaUJBQWlCLGdDQUFnQyx3QkFBd0IscUJBQXFCLEdBQUcsMkJBQTJCLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGlCQUFpQixzQkFBc0IsbUJBQW1CLHVGQUF1RixHQUFHLGtDQUFrQyxlQUFlLG9CQUFvQix3Q0FBd0MscUJBQXFCLEdBQUcsa0NBQWtDLG9CQUFvQixrQkFBa0Isc0JBQXNCLHNCQUFzQixHQUFHLHFIQUFxSCxpQkFBaUIsR0FBRyw0QkFBNEIsc0JBQXNCLG1CQUFtQixrRUFBa0Usa0JBQWtCLGlDQUFpQyxHQUFHLGdDQUFnQyxnQkFBZ0IsR0FBRyx5Q0FBeUMscUJBQXFCLHdCQUF3QixvQkFBb0IscUJBQXFCLHVCQUF1QiwwQ0FBMEMsR0FBRyxrREFBa0QscUJBQXFCLG9CQUFvQixHQUFHLG9EQUFvRCxtQkFBbUIsK0JBQStCLEdBQUcsbUNBQW1DLGlCQUFpQixxQkFBcUIsd0JBQXdCLG1CQUFtQixvQkFBb0Isc0JBQXNCLEdBQUcseUNBQXlDLDZCQUE2QixHQUFHLDJCQUEyQixVQUFVLGlCQUFpQixrQ0FBa0MsS0FBSyxRQUFRLGlCQUFpQixnQ0FBZ0MsS0FBSyxHQUFHLGVBQWUsc0JBQXNCLHlCQUF5Qix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLG9CQUFvQixxQkFBcUIsbUJBQW1CLHNCQUFzQix1QkFBdUIsOEJBQThCLDRDQUE0QyxHQUFHLHNCQUFzQixvQkFBb0IscUJBQXFCLHNCQUFzQix3QkFBd0IsbUJBQW1CLGlCQUFpQix1QkFBdUIsd0NBQXdDLGlFQUFpRSxHQUFHLGVBQWUsK0JBQStCLHFFQUFxRSxnQkFBZ0IsNEJBQTRCLGtFQUFrRSxnQkFBZ0IsZ0NBQWdDLHNFQUFzRSxnQkFBZ0IsOEJBQThCLG9FQUFvRSwrQkFBK0IscUJBQXFCLFdBQVcsbUJBQW1CLG1CQUFtQix5QkFBeUIsc0NBQXNDLHNCQUFzQixzQkFBc0IsT0FBTyx1QkFBdUIsdUJBQXVCLG9CQUFvQiwyQkFBMkIsNkJBQTZCLGtDQUFrQyxnQ0FBZ0Msd0JBQXdCLDRCQUE0Qix1QkFBdUIsNkJBQTZCLGdDQUFnQywwQ0FBMEMsMEhBQTBILDRCQUE0QixzQ0FBc0Msc0JBQXNCLG9CQUFvQiw2QkFBNkIsU0FBUywwQkFBMEIseUJBQXlCLFNBQVMsT0FBTyxtSEFBbUgsaUNBQWlDLDJCQUEyQixtQkFBbUIsZ0JBQWdCLHdCQUF3QiwwQkFBMEIsb0NBQW9DLGtDQUFrQyw4QkFBOEIsbUJBQW1CLDBCQUEwQix5QkFBeUIsaUNBQWlDLG1CQUFtQixPQUFPLHFCQUFxQix5QkFBeUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsT0FBTyxvQkFBb0IsYUFBYSxhQUFhLDJCQUEyQix1Q0FBdUMsV0FBVyxTQUFTLGlCQUFpQix3QkFBd0IsOEJBQThCLHNDQUFzQyw4QkFBOEIsMEJBQTBCLHVCQUF1QiwrQkFBK0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIseUJBQXlCLCtCQUErQixnQ0FBZ0MsZ0NBQWdDLHNDQUFzQyx1QkFBdUIsaUNBQWlDLGFBQWEsV0FBVyxtQkFBbUIseUJBQXlCLHlCQUF5Qiw0QkFBNEIsbUNBQW1DLHlCQUF5QiwwQkFBMEIsK0JBQStCLDJCQUEyQiw0QkFBNEIsZ0RBQWdELGlEQUFpRCxrQ0FBa0MseUNBQXlDLDJCQUEyQixlQUFlLGlDQUFpQyx5QkFBeUIsMEJBQTBCLDJCQUEyQiw2QkFBNkIsbUNBQW1DLGlEQUFpRCxlQUFlLGFBQWEscUNBQXFDLHdCQUF3QiwyQkFBMkIsZUFBZSxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUssZ0JBQWdCLHlCQUF5QixnQkFBZ0Isa0JBQWtCLHNCQUFzQiw0QkFBNEIsbUJBQW1CLGVBQWUsd0JBQXdCLE9BQU8sOEJBQThCLHVCQUF1QixPQUFPLDBCQUEwQixzQkFBc0IsT0FBTyxrQkFBa0IsOEJBQThCLHdCQUF3QixTQUFTLDRCQUE0Qix5QkFBeUIsU0FBUyxPQUFPLEtBQUssR0FBRyx1QkFBdUIsc0JBQXNCLG9CQUFvQixvQkFBb0IsV0FBVyxhQUFhLGNBQWMsWUFBWSxrQkFBa0IsdUNBQXVDLDBCQUEwQixjQUFjLHFCQUFxQixLQUFLLEdBQUcsWUFBWSxvQkFBb0IsV0FBVyxhQUFhLGNBQWMsWUFBWSxxQkFBcUIscUJBQXFCLDBCQUEwQixzQ0FBc0Msa0JBQWtCLG9DQUFvQyxjQUFjLG9CQUFvQixLQUFLLGNBQWMseUJBQXlCLG1CQUFtQixzQkFBc0IsbUJBQW1CLGtDQUFrQywwQkFBMEIsdUJBQXVCLG1CQUFtQix3QkFBd0IsMkJBQTJCLG9CQUFvQixzQkFBc0IsNEJBQTRCLGdDQUFnQyw4QkFBOEIsbUNBQW1DLHVCQUF1QiwyRkFBMkYsa0JBQWtCLHFCQUFxQiwwQkFBMEIsOENBQThDLDJCQUEyQixTQUFTLGtCQUFrQiwwQkFBMEIsd0JBQXdCLHFDQUFxQyw0QkFBNEIsMERBQTBELHlCQUF5QixXQUFXLFNBQVMsT0FBTyxvQkFBb0IsMEJBQTBCLHVCQUF1QixzRUFBc0Usc0JBQXNCLHFDQUFxQyxlQUFlLHNCQUFzQixTQUFTLHdCQUF3QiwyQkFBMkIsOEJBQThCLDBCQUEwQiwyQkFBMkIsNkJBQTZCLGdEQUFnRCxTQUFTLGlDQUFpQywyQkFBMkIsMEJBQTBCLGVBQWUsMkJBQTJCLHVDQUF1QyxXQUFXLFNBQVMsa0JBQWtCLHVCQUF1QiwyQkFBMkIsOEJBQThCLHlCQUF5QiwwQkFBMEIsNEJBQTRCLHFCQUFxQixxQ0FBcUMsV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLDJCQUEyQixVQUFVLGlCQUFpQixrQ0FBa0MsS0FBSyxRQUFRLGlCQUFpQixnQ0FBZ0MsS0FBSyxHQUFHLGtCQUFrQixzQkFBc0IseUJBQXlCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IseUJBQXlCLHNCQUFzQix1QkFBdUIscUJBQXFCLHdCQUF3Qix5QkFBeUIsZ0NBQWdDLDhDQUE4QyxLQUFLLGNBQWMsc0JBQXNCLHVCQUF1Qix3QkFBd0IsMEJBQTBCLHFCQUFxQixtQkFBbUIseUJBQXlCLDBDQUEwQyxtRUFBbUUsS0FBSyxHQUFHLHFCQUFxQjtBQUNqMTBCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcGlCdkMsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBNE47QUFDNU47QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0TEFBTzs7OztBQUlzSztBQUM5TCxPQUFPLGlFQUFlLDRMQUFPLElBQUksNExBQU8sVUFBVSw0TEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQjdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsOEtBQThLO1dBQzVNOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx1QkFBdUIsNEJBQTRCO1dBQ25EO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixvQkFBb0I7V0FDckM7V0FDQSxtR0FBbUcsWUFBWTtXQUMvRztXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1FQUFtRSxpQ0FBaUM7V0FDcEc7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekNBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3JGQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kMGE1Iiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHNcIjtcbiIsImltcG9ydCAnLi9zbG90Jztcbi8vaW1wb3J0ICcuL3RpbWVyJztcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBBc3NldHMsIEJsdXJGaWx0ZXIsIENvbnRhaW5lciwgU3ByaXRlLCBUZXh0dXJlLCB9IGZyb20gJ3BpeGkuanMnO1xuXG5pbXBvcnQgaWNvblNldmVuIGZyb20gJy4uL2ltYWdlcy9pY29uLTcucG5nJztcbmltcG9ydCBpY29uT0hGIGZyb20gJy4uL2ltYWdlcy9pY29uLTE1MC5wbmcnO1xuaW1wb3J0IGljb25CZWxsIGZyb20gJy4uL2ltYWdlcy9pY29uLWJlbGwucG5nJztcbmltcG9ydCBpY29uQ2hlcnkgZnJvbSAnLi4vaW1hZ2VzL2ljb24tY2hlcnkucG5nJztcbmltcG9ydCBpY29uQ29pbiBmcm9tICcuLi9pbWFnZXMvaWNvbi1jb2luLnBuZyc7XG5pbXBvcnQgaWNvbkdyYXBlIGZyb20gJy4uL2ltYWdlcy9pY29uLWdyYXBlLnBuZyc7XG5pbXBvcnQgaWNvblBsdW0gZnJvbSAnLi4vaW1hZ2VzL2ljb24tcGx1bS5wbmcnO1xuaW1wb3J0IGljb25NYWpvciBmcm9tICcuLi9pbWFnZXMvaWNvbi1tYWpvci5wbmcnO1xuaW1wb3J0IGljb25NZWdhIGZyb20gJy4uL2ltYWdlcy9pY29uLW1lZ2EucG5nJztcbmltcG9ydCBpY29uTWlub3IgZnJvbSAnLi4vaW1hZ2VzL2ljb24tbWlub3IucG5nJztcbmltcG9ydCBpY29uSm9rZXIgZnJvbSAnLi4vaW1hZ2VzL2ljb24tam9rZXIucG5nJztcblxuKGFzeW5jICgpID0+IHtcblx0Ly8gQ3JlYXRlIGEgbmV3IGFwcGxpY2F0aW9uXG5cdGNvbnN0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbigpO1xuXG5cdC8vIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG5cdGF3YWl0IGFwcC5pbml0KHsgYmFja2dyb3VuZEFscGhhOiAwLCB3aWR0aDogOTAwLCBoZWlnaHQ6IDYwMCwgdGV4dDogJ2NlbnRlcicgfSk7XG5cblx0Ly8gQXBwZW5kIHRoZSBhcHBsaWNhdGlvbiBjYW52YXMgdG8gdGhlIGRvY3VtZW50IGJvZHlcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmFwcGVuZENoaWxkKGFwcC5jYW52YXMpO1xuXG5cdC8vIExvYWQgdGhlIHRleHR1cmVzXG5cdGF3YWl0IEFzc2V0cy5sb2FkKFtcblx0XHRpY29uU2V2ZW4sXG5cdFx0aWNvbk9IRixcblx0XHRpY29uQmVsbCxcblx0XHRpY29uQ2hlcnksXG5cdFx0aWNvbkNvaW4sXG5cdFx0aWNvbkdyYXBlLFxuXHRcdGljb25QbHVtLFxuXHRcdGljb25NYWpvcixcblx0XHRpY29uTWVnYSxcblx0XHRpY29uTWlub3IsXG5cdFx0aWNvbkpva2VyLFxuXHRdKTtcblxuXHRjb25zdCBSRUVMX1dJRFRIID0gMzQwO1xuXHRjb25zdCBTWU1CT0xfU0laRSA9IDIwMDtcblxuXHQvLyBDcmVhdGUgZGlmZmVyZW50IHNsb3Qgc3ltYm9sc1xuXHRjb25zdCBzbG90VGV4dHVyZXMgPSBbXG5cdFx0VGV4dHVyZS5mcm9tKGljb25TZXZlbiksXG5cdFx0VGV4dHVyZS5mcm9tKGljb25PSEYpLFxuXHRcdFRleHR1cmUuZnJvbShpY29uQmVsbCksXG5cdFx0VGV4dHVyZS5mcm9tKGljb25DaGVyeSksXG5cdFx0VGV4dHVyZS5mcm9tKGljb25Db2luKSxcblx0XHRUZXh0dXJlLmZyb20oaWNvbkdyYXBlKSxcblx0XHRUZXh0dXJlLmZyb20oaWNvblBsdW0pLFxuXHRcdFRleHR1cmUuZnJvbShpY29uTWFqb3IpLFxuXHRcdFRleHR1cmUuZnJvbShpY29uTWVnYSksXG5cdFx0VGV4dHVyZS5mcm9tKGljb25NaW5vciksXG5cdFx0VGV4dHVyZS5mcm9tKGljb25Kb2tlciksXG5cdF07XG5cblx0Ly8gQnVpbGQgdGhlIHJlZWxzXG5cdGNvbnN0IHJlZWxzID0gW107XG5cdGNvbnN0IHJlZWxDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRjb25zdCByYyA9IG5ldyBDb250YWluZXIoKTtcblxuXHRcdHJjLnggPSBpICogUkVFTF9XSURUSDtcblx0XHRyZWVsQ29udGFpbmVyLmFkZENoaWxkKHJjKTtcblxuXHRcdGNvbnN0IHJlZWwgPSB7XG5cdFx0XHRjb250YWluZXI6IHJjLFxuXHRcdFx0c3ltYm9sczogW10sXG5cdFx0XHRwb3NpdGlvbjogMCxcblx0XHRcdHByZXZpb3VzUG9zaXRpb246IDAsXG5cdFx0XHRibHVyOiBuZXcgQmx1ckZpbHRlcigpLFxuXHRcdH07XG5cblx0XHRyZWVsLmJsdXIuYmx1clggPSAwO1xuXHRcdHJlZWwuYmx1ci5ibHVyWSA9IDA7XG5cdFx0cmMuZmlsdGVycyA9IFtyZWVsLmJsdXJdO1xuXG5cdFx0Ly8gQnVpbGQgdGhlIHN5bWJvbHNcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcblx0XHRcdGNvbnN0IHN5bWJvbCA9IG5ldyBTcHJpdGUoc2xvdFRleHR1cmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNsb3RUZXh0dXJlcy5sZW5ndGgpXSk7XG5cdFx0XHQvLyBTY2FsZSB0aGUgc3ltYm9sIHRvIGZpdCBzeW1ib2wgYXJlYS5cblxuXHRcdFx0c3ltYm9sLnkgPSBqICogU1lNQk9MX1NJWkU7XG5cdFx0XHRzeW1ib2wuc2NhbGUueCA9IHN5bWJvbC5zY2FsZS55ID0gTWF0aC5taW4oU1lNQk9MX1NJWkUgLyBzeW1ib2wud2lkdGgsIFNZTUJPTF9TSVpFIC8gc3ltYm9sLmhlaWdodCk7XG5cdFx0XHRzeW1ib2wueCA9IE1hdGgucm91bmQoKFNZTUJPTF9TSVpFIC0gc3ltYm9sLndpZHRoKSAvIDIpO1xuXHRcdFx0cmVlbC5zeW1ib2xzLnB1c2goc3ltYm9sKTtcblx0XHRcdHJjLmFkZENoaWxkKHN5bWJvbCk7XG5cdFx0fVxuXHRcdHJlZWxzLnB1c2gocmVlbCk7XG5cdH1cblxuXHRhcHAuc3RhZ2UuYWRkQ2hpbGQocmVlbENvbnRhaW5lcik7XG5cblx0bGV0IHJ1bm5pbmcgPSBmYWxzZTtcblxuXHQvLyBGdW5jdGlvbiB0byBzdGFydCBwbGF5aW5nLlxuXHRmdW5jdGlvbiBzdGFydFBsYXkoKSB7XG5cdFx0aWYgKHJ1bm5pbmcpIHJldHVybjtcblx0XHRydW5uaW5nID0gdHJ1ZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHIgPSByZWVsc1tpXTtcblx0XHRcdGNvbnN0IGV4dHJhID0gODtcblx0XHRcdGNvbnN0IHRhcmdldCA9IHIucG9zaXRpb24gKyAxMCArIGkgKiAxNSArIGV4dHJhO1xuXHRcdFx0Y29uc3QgdGltZSA9IDI1MDAgKyBpICogMjAwICsgZXh0cmEgKiAyMDA7XG5cblx0XHRcdHR3ZWVuVG8ociwgJ3Bvc2l0aW9uJywgdGFyZ2V0LCB0aW1lLCBiYWNrb3V0KDAuNSksIG51bGwsIGkgPT09IHJlZWxzLmxlbmd0aCAtIDEgPyByZWVsc0NvbXBsZXRlIDogbnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmVlbHMgZG9uZSBoYW5kbGVyLlxuXHRmdW5jdGlvbiByZWVsc0NvbXBsZXRlKCkge1xuXHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0fVxuXG5cdC8vIExpc3RlbiBmb3IgYW5pbWF0ZSB1cGRhdGUuXG5cdGFwcC50aWNrZXIuYWRkKCgpID0+IHtcblx0XHQvLyBVcGRhdGUgdGhlIHNsb3RzLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHIgPSByZWVsc1tpXTtcblx0XHRcdC8vIFVwZGF0ZSBibHVyIGZpbHRlciB5IGFtb3VudCBiYXNlZCBvbiBzcGVlZC5cblx0XHRcdC8vIFRoaXMgd291bGQgYmUgYmV0dGVyIGlmIGNhbGN1bGF0ZWQgd2l0aCB0aW1lIGluIG1pbmQgYWxzby4gTm93IGJsdXIgZGVwZW5kcyBvbiBmcmFtZSByYXRlLlxuXG5cdFx0XHRyLmJsdXIuYmx1clkgPSAoci5wb3NpdGlvbiAtIHIucHJldmlvdXNQb3NpdGlvbikgKiA4O1xuXHRcdFx0ci5wcmV2aW91c1Bvc2l0aW9uID0gci5wb3NpdGlvbjtcblxuXHRcdFx0Ly8gVXBkYXRlIHN5bWJvbCBwb3NpdGlvbnMgb24gcmVlbC5cblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgci5zeW1ib2xzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IHMgPSByLnN5bWJvbHNbal07XG5cdFx0XHRcdGNvbnN0IHByZXZ5ID0gcy55O1xuXG5cdFx0XHRcdHMueSA9ICgoci5wb3NpdGlvbiArIGopICUgci5zeW1ib2xzLmxlbmd0aCkgKiBTWU1CT0xfU0laRSAtIFNZTUJPTF9TSVpFO1xuXHRcdFx0XHRpZiAocy55IDwgMCAmJiBwcmV2eSA+IFNZTUJPTF9TSVpFKSB7XG5cdFx0XHRcdFx0Ly8gRGV0ZWN0IGdvaW5nIG92ZXIgYW5kIHN3YXAgYSB0ZXh0dXJlLlxuXHRcdFx0XHRcdC8vIFRoaXMgc2hvdWxkIGluIHByb3BlciBwcm9kdWN0IGJlIGRldGVybWluZWQgZnJvbSBzb21lIGxvZ2ljYWwgcmVlbC5cblx0XHRcdFx0XHRzLnRleHR1cmUgPSBzbG90VGV4dHVyZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2xvdFRleHR1cmVzLmxlbmd0aCldO1xuXHRcdFx0XHRcdHMuc2NhbGUueCA9IHMuc2NhbGUueSA9IE1hdGgubWluKFNZTUJPTF9TSVpFIC8gcy50ZXh0dXJlLndpZHRoLCBTWU1CT0xfU0laRSAvIHMudGV4dHVyZS5oZWlnaHQpO1xuXHRcdFx0XHRcdHMueCA9IE1hdGgucm91bmQoKFNZTUJPTF9TSVpFIC0gcy53aWR0aCkgLyAyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgoaSA9PT0gMCAmJiBqID09PSA0KSB8fCAoaSA9PT0gMSAmJiBqID09PSA5KSB8fCAoaSA9PT0gMiAmJiBqID09PSA0KSB8fCAoaSA9PT0gMyAmJiBqID09PSA5KSB8fCAoaSA9PT0gNCAmJiBqID09PSA0KSkge1xuXHRcdFx0XHRcdHMudGV4dHVyZSA9IHNsb3RUZXh0dXJlc1tNYXRoLmZsb29yKDcpXTtcblx0XHRcdFx0XHRzLnNjYWxlLnggPSBzLnNjYWxlLnkgPSBNYXRoLm1pbihTWU1CT0xfU0laRSAvIHMudGV4dHVyZS53aWR0aCwgU1lNQk9MX1NJWkUgLyBzLnRleHR1cmUuaGVpZ2h0KTtcblx0XHRcdFx0XHRzLnggPSBNYXRoLnJvdW5kKChTWU1CT0xfU0laRSAtIHMud2lkdGgpIC8gMik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIFZlcnkgc2ltcGxlIHR3ZWVuaW5nIHV0aWxpdHkgZnVuY3Rpb24uIFRoaXMgc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggYSBwcm9wZXIgdHdlZW5pbmcgbGlicmFyeSBpbiBhIHJlYWwgcHJvZHVjdC5cblx0Y29uc3QgdHdlZW5pbmcgPSBbXTtcblxuXHRmdW5jdGlvbiB0d2VlblRvKG9iamVjdCwgcHJvcGVydHksIHRhcmdldCwgdGltZSwgZWFzaW5nLCBvbmNoYW5nZSwgb25jb21wbGV0ZSkge1xuXHRcdGNvbnN0IHR3ZWVuID0ge1xuXHRcdFx0b2JqZWN0LFxuXHRcdFx0cHJvcGVydHksXG5cdFx0XHRwcm9wZXJ0eUJlZ2luVmFsdWU6IG9iamVjdFtwcm9wZXJ0eV0sXG5cdFx0XHR0YXJnZXQsXG5cdFx0XHRlYXNpbmcsXG5cdFx0XHR0aW1lLFxuXHRcdFx0Y2hhbmdlOiBvbmNoYW5nZSxcblx0XHRcdGNvbXBsZXRlOiBvbmNvbXBsZXRlLFxuXHRcdFx0c3RhcnQ6IERhdGUubm93KCksXG5cdFx0fTtcblxuXHRcdHR3ZWVuaW5nLnB1c2godHdlZW4pO1xuXG5cdFx0cmV0dXJuIHR3ZWVuO1xuXHR9XG5cblx0Ly8gTGlzdGVuIGZvciBhbmltYXRlIHVwZGF0ZS5cblx0YXBwLnRpY2tlci5hZGQoKCkgPT4ge1xuXHRcdGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cdFx0Y29uc3QgcmVtb3ZlID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHR3ZWVuaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCB0ID0gdHdlZW5pbmdbaV07XG5cdFx0XHRjb25zdCBwaGFzZSA9IE1hdGgubWluKDEsIChub3cgLSB0LnN0YXJ0KSAvIHQudGltZSk7XG5cblx0XHRcdHQub2JqZWN0W3QucHJvcGVydHldID0gbGVycCh0LnByb3BlcnR5QmVnaW5WYWx1ZSwgdC50YXJnZXQsIHQuZWFzaW5nKHBoYXNlKSk7XG5cdFx0XHRpZiAodC5jaGFuZ2UpIHQuY2hhbmdlKHQpO1xuXHRcdFx0aWYgKHBoYXNlID09PSAxKSB7XG5cdFx0XHRcdHQub2JqZWN0W3QucHJvcGVydHldID0gdC50YXJnZXQ7XG5cdFx0XHRcdGlmICh0LmNvbXBsZXRlKSB0LmNvbXBsZXRlKHQpO1xuXHRcdFx0XHRyZW1vdmUucHVzaCh0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHR3ZWVuaW5nLnNwbGljZSh0d2VlbmluZy5pbmRleE9mKHJlbW92ZVtpXSksIDEpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gQmFzaWMgbGVycCBmdW50aW9uLlxuXHRmdW5jdGlvbiBsZXJwKGExLCBhMiwgdCkge1xuXHRcdHJldHVybiBhMSAqICgxIC0gdCkgKyBhMiAqIHQ7XG5cdH1cblxuXHQvLyBCYWNrb3V0IGZ1bmN0aW9uIGZyb20gdHdlZW5qcy5cblx0ZnVuY3Rpb24gYmFja291dChhbW91bnQpIHtcblx0XHRyZXR1cm4gKHQpID0+IC0tdCAqIHQgKiAoKGFtb3VudCArIDEpICogdCArIGFtb3VudCkgKyAxO1xuXHR9XG5cblx0Y29uc3QgZWxlbWVudHMgPSB7XG5cdFx0YnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX3NwaW4nKSxcblx0XHR3aW5uZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKSxcblx0XHR3aW5FbGVtZW50czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndpbicpLFxuXHRcdG1vZGFsT3ZlcmxheTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX292ZXJsYXknKSxcblx0XHRtb2RhbFNpZ251cDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX3NpZ251cCcpLFxuXHRcdHRleHRTcGluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC13aW4nKSxcblx0XHRhcnJvd3M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvd3Mtd3JhcCcpLFxuXHRcdHNvdW5kczoge1xuXHRcdFx0d2luOiBuZXcgQXVkaW8oJ2h0dHBzOi8vbjFtZDcuZ2l0aHViLmlvL3Nsb3QtZ2FtZS9zb3VuZC93aW4ubXAzJyksXG5cdFx0XHRzcGluOiBuZXcgQXVkaW8oJ2h0dHBzOi8vbjFtZDcuZ2l0aHViLmlvL3Nsb3QtZ2FtZS9zb3VuZC9zcGluLm1wMycpLFxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBhZGRDbGFzc1dpdGhEZWxheSA9IChlbGVtZW50cywgY2xhc3NOYW1lLCBkZWxheSkgPT4ge1xuXHRcdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0XHR9LCBpbmRleCAqIGRlbGF5KTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBzaG93TW9kYWwgPSAob3ZlcmxheSwgbW9kYWwsIGRlbGF5KSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0XHR9LCBkZWxheSk7XG5cdH07XG5cblx0Y29uc3Qgd2lubmVyU2hvdyA9ICgpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGVsZW1lbnRzLnNvdW5kcy53aW4ucGxheSgpO1xuXHRcdFx0ZWxlbWVudHMud2lubmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdFx0YWRkQ2xhc3NXaXRoRGVsYXkoZWxlbWVudHMud2luRWxlbWVudHMsICdhY3RpdmUnLCAxMCk7XG5cdFx0fSwgMzgwMCk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRlbGVtZW50cy5hcnJvd3MuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0fSwgNDIwMCk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRlbGVtZW50cy50ZXh0U3Bpbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHR9LCA1NTAwKTtcblx0XHRzaG93TW9kYWwoZWxlbWVudHMubW9kYWxPdmVybGF5LCBlbGVtZW50cy5tb2RhbFNpZ251cCwgOTAwMCk7XG5cdH07XG5cblx0ZWxlbWVudHMuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdC8vdXBkYXRlVGltZXIoKTtcblx0XHRlbGVtZW50cy5zb3VuZHMuc3Bpbi5wbGF5KCk7XG5cdFx0c3RhcnRQbGF5KCk7XG5cdFx0d2lubmVyU2hvdygpO1xuXHRcdGVsZW1lbnRzLmJ0bi5zdHlsZS5vcGFjaXR5ID0gMC41O1xuXHRcdGVsZW1lbnRzLmJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXHR9KTtcbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWFnZXMvYmdfZ2xvYmFsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL3Nsb3RlLXJhbWthLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL2J0bl9zcGluLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvaW1hZ2VzL2ljb24td2luLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1J1YmlrLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUnViaWstQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9SdWJpay1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9SdWJpay1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLVJlZ3VsYXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICBmb250LWZhbWlseTogUnViaWstUmVndWxhciwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBSdWJpay1SZWd1bGFyLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuI2FwcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBhc3BlY3QtcmF0aW86IDIuMjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICNhcHAge1xuICAgIHBhZGRpbmc6IDclIDkuNSU7XG4gIH1cbn1cblxuY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDIudGl0bGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA0MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBSdWJpay1Cb2xkLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkZGIDM1LjU4JSwgI0ZGRUY0OSAxMDAlKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG5fc3BpbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLndpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NyU7XG4gIGxlZnQ6IC0xNnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1JSk7XG4gIHRyYW5zaXRpb246IDUwMG1zO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB3aWR0aDogMTAwJTtcbn1cbi53aW5uZXIgLndpbiB7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAyMjRweDtcbiAgYW5pbWF0aW9uOiBhbmltYXRldG9wdyAwLjJzIGVhc2U7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4ud2lubmVyIC53aW46bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbi53aW5uZXIgLndpbi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC53aW5uZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGVmdDogLTIlO1xuICAgIHdpZHRoOiA4NiU7XG4gIH1cbiAgLndpbm5lciAud2luIHtcbiAgICB3aWR0aDogMTQwJTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbn1cblxuLmFycm93cy13cmFwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDI7XG59XG4uYXJyb3dzLXdyYXAgLmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFycm93cy13cmFwLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYXJyb3dzLXdyYXAuYWN0aXZlIC5hcnJvdy1sZWZ0IHtcbiAgYW5pbWF0aW9uOiBhbmltYXRlYXJyb3dsZWZ0IDAuMnMgZWFzZTtcbn1cbi5hcnJvd3Mtd3JhcC5hY3RpdmUgLmFycm93LXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBhbmltYXRlYXJyb3dyaWdodCAwLjJzIGVhc2U7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuYXJyb3dzLXdyYXAgLmFycm93LWxlZnQsXG4gIC5hcnJvd3Mtd3JhcCAuYXJyb3ctcmlnaHQge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgfVxufVxuXG4udGV4dC13aW4td3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDogNDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi50ZXh0LXdpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IGFuaW1hdGV0b3B0d3QgMC41cyBlYXNlO1xufVxuLnRleHQtd2luLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3B3IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcHR3dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIDc1JSB7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVhcnJvd2xlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDc1JSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZWFycm93cmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzUlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSdWJpay1SZWd1bGFyO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUnViaWstQm9sZDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLVNlbWlCb2xkO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUnViaWstTWVkaXVtO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbi5mb3JtIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uZm9ybSAuZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIGlucHV0LmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZm9ybSAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDRweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDE0cHggMThweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBjYXJldC1jb2xvcjogIzI2MjYyNjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBib3JkZXItY29sb3I7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRUZGNUZFLCAjRUZGNUZFKSBwYWRkaW5nLWJveCwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMUE3QkRDLCAjMEEyNzkyKSBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQTRCMkUzO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0E0QjJFMztcbn1cbi5mb3JtIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wgKyAuY29udHJvbC1sYWJlbCxcbi5mb3JtIC5mb3JtLWdyb3VwIC5zZWxlY3RyaWMtZm9ybS1jb250cm9sICsgLmNvbnRyb2wtbGFiZWwsXG4uZm9ybSAuZm9ybS1ncm91cCAuY29udHJvbC1sYWJlbC1mb3JjZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE4cHg7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB6LWluZGV4OiAwO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAgLmhlbHAtYmxvY2sge1xuICBtaW4taGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLmNoZWNrYm94IGRpdiBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAuY2hlY2tib3ggbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLmNoZWNrYm94IGxhYmVsIC5jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjREFFOEZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMUE3QkRDO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAuY2hlY2tib3ggbGFiZWwgLmNoZWNrYm94LnJhZGlvIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmZvcm0gLmZvcm0tZ3JvdXAuY2hlY2tib3ggbGFiZWwgaW5wdXQgKyAuY2hlY2tib3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNTAlO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDAwMDtcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5mb3JtIC5mb3JtLWdyb3VwLmNoZWNrYm94IGxhYmVsIGlucHV0ICsgLmNoZWNrYm94LnJhZGlvOjpiZWZvcmUge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZm9ybSAuZm9ybS1ncm91cC5jaGVja2JveCBsYWJlbCBpbnB1dDpjaGVja2VkICsgLmNoZWNrYm94OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uZm9ybSAudmlzaWJsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NXB4O1xuICByaWdodDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb3JtIC52aXNpYmxlIC5pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvcm0gLnZpc2libGUgLmljb24tdmlzaWJpbGl0eS1vZmYge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3JtIC52aXNpYmxlIC5pY29uLXZpc2liaWxpdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvcm0gLnZpc2libGUuYWN0aXZlIC5pY29uLXZpc2liaWxpdHktb2ZmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mb3JtIC52aXNpYmxlLmFjdGl2ZSAuaWNvbi12aXNpYmlsaXR5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tb2RhbF9vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDM3LCAzNywgMC44NSk7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5tb2RhbF9vdmVybGF5LnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHotaW5kZXg6IDEwMDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGFuaW1hdGV0b3AgMC41cyBlYXNlO1xufVxuLm1vZGFsLnNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1vZGFsIC5wb3B1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ1MnB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMC41cyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vZGFsIC5wb3B1cCA+IC5oZWFkZXIge1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDU2cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNmRlZywgI0I4MTg0OCA1LjExJSwgIzk2MTEzOSAzMi40MSUsICM3QzBGMzQgODguNjIlKTtcbn1cbi5tb2RhbCAucG9wdXAgPiAuaGVhZGVyIC50aXRsZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLUJvbGQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubW9kYWwgLnBvcHVwID4gLmhlYWRlciAuY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICB0cmFuc2l0aW9uOiAyMDBtcztcbn1cbi5tb2RhbCAucG9wdXAgPiAuaGVhZGVyIC5jbG9zZTpob3ZlciwgLm1vZGFsIC5wb3B1cCA+IC5oZWFkZXIgLmNsb3NlOmZvY3VzLCAubW9kYWwgLnBvcHVwID4gLmhlYWRlciAuY2xvc2U6YWN0aXZlIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLm1vZGFsIC5wb3B1cCA+IC5jb250ZW50IHtcbiAgbWluLWhlaWdodDogMjgwcHg7XG4gIGNvbG9yOiAjMDUwNTA1O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjRDM5NzZDIDAlLCAjRkZGQ0I1IDEwMCUpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xufVxuLm1vZGFsIC5wb3B1cCA+IC5jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1vZGFsIC5wb3B1cCA+IC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogUnViaWstTWVkaXVtLCBzYW5zLXNlcmlmO1xufVxuLm1vZGFsIC5wb3B1cCA+IC5jb250ZW50IC5jaGVja2JveC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tb2RhbCAucG9wdXAgPiAuY29udGVudCAuY2hlY2tib3gtZGVzY3JpcHRpb24gYSB7XG4gIGNvbG9yOiAjMTkzQUIyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5tb2RhbCAucG9wdXAgPiAuY29udGVudCBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDIwMG1zO1xufVxuLm1vZGFsIC5wb3B1cCA+IC5jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuLnRpbWVyLXdyYXAge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGltZXItd3JhcCAudGltZXItdGl0bGUge1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMUUxRTFFO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogUnViaWstU2VtaUJvbGQsIHNhbnMtc2VyaWY7XG59XG4udGltZXItd3JhcCAudGltZXIge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDZweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogIzNEM0QzRDtcbiAgd2lkdGg6IDEyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBSdWJpay1Cb2xkLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkQwODMgMCUsICNGRkFBN0QgMTAwJSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19mb3Jtcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19tb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL190aW1lci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHdEQUFBO0FDSEY7O0FETUE7RUFDRSxzQ0FBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5REFBQTtFQUNBLDJCQUFBO0FDSEY7QURLRTtFQVZGO0lBV0ksVUFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDRkY7QURJRTtFQWJGO0lBY0ksZ0JBQUE7RUNERjtBQUNGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4REFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtBQ0RGO0FER0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FDREo7QURHSTtFQUNFLGlCQUFBO0FDRE47QURJSTtFQUNFLGNBQUE7QUNGTjtBRE1FO0VBN0JGO0lBOEJJLFVBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQ0hGO0VES0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ0hKO0FBQ0Y7O0FET0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDSkY7QURNRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0pKO0FET0U7RUFDRSxhQUFBO0FDTEo7QURPSTtFQUNFLHFDQUFBO0FDTE47QURPSTtFQUNFLHNDQUFBO0FDTE47QURTRTtFQUNFOztJQUVFLFlBQUE7RUNQSjtBQUNGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ1JGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQ1JGO0FEVUU7RUFDRSxjQUFBO0FDUko7O0FEWUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQ1RGO0VEV0E7SUFDRSxZQUFBO0lBQ0EscUJBQUE7RUNURjtFRFdBO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VDVEY7QUFDRjtBRFlBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNWRjtFRFlBO0lBQ0UsWUFBQTtJQUNBLHFCQUFBO0VDVkY7RURZQTtJQUNFLGFBQUE7SUFDQSxxQkFBQTtFQ1ZGO0VEWUE7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNWRjtBQUNGO0FEYUE7RUFDRTtJQUNFLFlBQUE7SUFDQSwyQkFBQTtFQ1hGO0VEYUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUNYRjtFRGFBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VDWEY7QUFDRjtBRGNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsNEJBQUE7RUNaRjtFRGNBO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VDWkY7RURjQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQ1pGO0FBQ0Y7QUN2T0E7RUFDRSwwQkFBQTtFQUNBLCtEQUFBO0FEeU9GO0FDdE9BO0VBQ0UsdUJBQUE7RUFDQSwrREFBQTtBRHdPRjtBQ3JPQTtFQUNFLDJCQUFBO0VBQ0EsK0RBQUE7QUR1T0Y7QUNwT0E7RUFDRSx5QkFBQTtFQUNBLCtEQUFBO0FEc09GO0FFcFBBO0VBQ0UsY0FBQTtBRnNQRjtBRXBQRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBUmlCO0FGOFByQjtBRXBQSTtFQUNFLGFBQUE7QUZzUE47QUVuUEk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFqQlE7RUFrQlIsaUJBbEJRO0VBbUJSLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlIQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUZxUE47QUVuUE07RUFDRSxrQkFBQTtBRnFQUjtBRWxQTTtFQUNFLGNBQUE7QUZvUFI7QUVyUE07RUFDRSxjQUFBO0FGb1BSO0FFaFBJOzs7RUFJRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUdBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUYrT047QUU1T0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUY4T047QUV6T1E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUYyT1Y7QUV2T007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRnlPUjtBRXZPUTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FGeU9WO0FFdk9VO0VBQ0Usa0JBQUE7QUZ5T1o7QUVuT1k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBRnFPZDtBRWxPWTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FGb09kO0FFL05ZO0VBQ0UsVUFBQTtBRmlPZDtBRXpORTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FGMk5KO0FFek5JO0VBQ0UsZUFBQTtBRjJOTjtBRXhOSTtFQUNFLGNBQUE7QUYwTk47QUV2Tkk7RUFDRSxhQUFBO0FGeU5OO0FFck5NO0VBQ0UsYUFBQTtBRnVOUjtBRXBOTTtFQUNFLGNBQUE7QUZzTlI7O0FHcFhBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQVhZO0FIa1lkO0FHclhFO0VBQ0UsY0FBQTtBSHVYSjs7QUduWEE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQTFCWTtFQTJCWixpQ0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBSHNYRjtBR3BYRTtFQUNFLGFBQUE7QUhzWEo7QUduWEU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBSHFYSjtBR25YSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBbERTO0VBbURULGlCQW5EUztFQW9EVCxjQUFBO0VBQ0Esa0ZBQUE7QUhxWE47QUduWE07RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUhxWFI7QUdsWE07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQWpFTztFQWtFUCxpQkFBQTtBSG9YUjtBR2xYUTtFQUdFLFlBQUE7QUhrWFY7QUc3V0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw2REFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBSCtXTjtBRzdXTTtFQUNFLFdBQUE7QUgrV1I7QUc1V007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBSDhXUjtBRzNXTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBSDZXUjtBRzNXUTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBSDZXVjtBR3pXTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBSDJXUjtBR3pXUTtFQUNFLHdCQUFBO0FIMldWOztBR3BXQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VIdVdGO0VHcldBO0lBQ0UsVUFBQTtJQUNBLHlCQUFBO0VIdVdGO0FBQ0Y7QUkxZUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBSjRlRjtBSTFlRTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QUo0ZUo7QUl6ZUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNERBQUE7QUoyZUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwic3JjL3ZhcmlhYmVscy9jb2xvcnNcXFwiO1xcblxcbiRzaGFkb3c6IHJnYigxODUsIDE4NSwgMTg1KTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLVJlZ3VsYXIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLVJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiAjMjYyNjI2O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBmb250LWZhbWlseTogUnViaWstUmVndWxhciwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWFnZXMvYmdfZ2xvYmFsLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXFxuI2FwcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogOTYwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1hZ2VzL3Nsb3RlLXJhbWthLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBhc3BlY3QtcmF0aW86IDIuMjtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgIHBhZGRpbmc6IDclIDkuNSU7XFxuICB9XFxufVxcblxcbmNhbnZhcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDIudGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpay1Cb2xkLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkYgMzUuNTglLCAjRkZFRjQ5IDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5idG4td3JhcHBlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5idG5fc3BpbiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1hZ2VzL2J0bl9zcGluLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi53aW5uZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0NyU7XFxuICBsZWZ0OiAtMTZweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDUlKTtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIC53aW4ge1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogMjI0cHg7XFxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZXRvcHcgMC4ycyBlYXNlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1hZ2VzL2ljb24td2luLnBuZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5cXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XFxuICAgIH1cXG5cXG4gICAgJi5hY3RpdmUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsZWZ0OiAtMiU7XFxuICAgIHdpZHRoOiA4NiU7XFxuXFxuICAgIC53aW4ge1xcbiAgICAgIHdpZHRoOiAxNDAlO1xcbiAgICAgIGhlaWdodDogODBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uYXJyb3dzLXdyYXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogOHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMjtcXG5cXG4gIC5saW5lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICYuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLmFycm93LWxlZnQge1xcbiAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZWFycm93bGVmdCAwLjJzIGVhc2U7XFxuICAgIH1cXG4gICAgLmFycm93LXJpZ2h0IHtcXG4gICAgICBhbmltYXRpb246IGFuaW1hdGVhcnJvd3JpZ2h0IDAuMnMgZWFzZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgLmFycm93LWxlZnQsXFxuICAgIC5hcnJvdy1yaWdodCB7XFxuICAgICAgd2lkdGg6IDEyMHB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbi50ZXh0LXdpbi13cmFwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogNDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4udGV4dC13aW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYW5pbWF0aW9uOiBhbmltYXRldG9wdHd0IC41cyBlYXNlO1xcblxcbiAgJi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wdyB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcHR3dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGVhcnJvd2xlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTAlKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3NSUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlYXJyb3dyaWdodCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzUlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblwiLFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpay1SZWd1bGFyLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpay1SZWd1bGFyLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogIzI2MjYyNjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLVJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1hZ2VzL2JnX2dsb2JhbC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cXG4jYXBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA5NjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWFnZXMvc2xvdGUtcmFta2EucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGFzcGVjdC1yYXRpbzogMi4yO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgI2FwcCB7XFxuICAgIHBhZGRpbmc6IDclIDkuNSU7XFxuICB9XFxufVxcblxcbmNhbnZhcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDIudGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpay1Cb2xkLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkYgMzUuNTglLCAjRkZFRjQ5IDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5idG4td3JhcHBlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5idG5fc3BpbiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1hZ2VzL2J0bl9zcGluLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi53aW5uZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0NyU7XFxuICBsZWZ0OiAtMTZweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDUlKTtcXG4gIHRyYW5zaXRpb246IDUwMG1zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLndpbm5lciAud2luIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogMjI0cHg7XFxuICBhbmltYXRpb246IGFuaW1hdGV0b3B3IDAuMnMgZWFzZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1hZ2VzL2ljb24td2luLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuLndpbm5lciAud2luOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xcbn1cXG4ud2lubmVyIC53aW4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLndpbm5lciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxlZnQ6IC0yJTtcXG4gICAgd2lkdGg6IDg2JTtcXG4gIH1cXG4gIC53aW5uZXIgLndpbiB7XFxuICAgIHdpZHRoOiAxNDAlO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICB9XFxufVxcblxcbi5hcnJvd3Mtd3JhcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA4cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4uYXJyb3dzLXdyYXAgLmxpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFycm93cy13cmFwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYXJyb3dzLXdyYXAuYWN0aXZlIC5hcnJvdy1sZWZ0IHtcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZWFycm93bGVmdCAwLjJzIGVhc2U7XFxufVxcbi5hcnJvd3Mtd3JhcC5hY3RpdmUgLmFycm93LXJpZ2h0IHtcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZWFycm93cmlnaHQgMC4ycyBlYXNlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmFycm93cy13cmFwIC5hcnJvdy1sZWZ0LFxcbiAgLmFycm93cy13cmFwIC5hcnJvdy1yaWdodCB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gIH1cXG59XFxuXFxuLnRleHQtd2luLXdyYXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiA0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi50ZXh0LXdpbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbmltYXRpb246IGFuaW1hdGV0b3B0d3QgMC41cyBlYXNlO1xcbn1cXG4udGV4dC13aW4uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3B3IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbmltYXRldG9wdHd0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogMC43NTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0ZWFycm93bGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MCUpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDc1JSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGVhcnJvd3JpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03NSUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUnViaWstUmVndWxhcjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9SdWJpay1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUnViaWstQm9sZDtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9SdWJpay1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUnViaWstU2VtaUJvbGQ7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvUnViaWstU2VtaUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpay1NZWRpdW07XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvUnViaWstTWVkaXVtLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuLmZvcm0ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5mb3JtIC5mb3JtLWdyb3VwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcbi5mb3JtIC5mb3JtLWdyb3VwIGlucHV0LmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZm9ybSAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBsaW5lLWhlaWdodDogNDRweDtcXG4gIHBhZGRpbmc6IDE0cHggMThweCAxMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMjYyNjI2O1xcbiAgY2FyZXQtY29sb3I6ICMyNjI2MjY7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBib3JkZXItY29sb3I7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0VGRjVGRSwgI0VGRjVGRSkgcGFkZGluZy1ib3gsIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFBN0JEQywgIzBBMjc5MikgYm9yZGVyLWJveDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5mb3JtIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wuY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvcm0gLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNBNEIyRTM7XFxufVxcbi5mb3JtIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wgKyAuY29udHJvbC1sYWJlbCxcXG4uZm9ybSAuZm9ybS1ncm91cCAuc2VsZWN0cmljLWZvcm0tY29udHJvbCArIC5jb250cm9sLWxhYmVsLFxcbi5mb3JtIC5mb3JtLWdyb3VwIC5jb250cm9sLWxhYmVsLWZvcmNlZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xOHB4O1xcbiAgbGVmdDogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgei1pbmRleDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5mb3JtIC5mb3JtLWdyb3VwIC5oZWxwLWJsb2NrIHtcXG4gIG1pbi1oZWlnaHQ6IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uZm9ybSAuZm9ybS1ncm91cC5jaGVja2JveCBkaXYgYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uZm9ybSAuZm9ybS1ncm91cC5jaGVja2JveCBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb3JtIC5mb3JtLWdyb3VwLmNoZWNrYm94IGxhYmVsIC5jaGVja2JveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQ6ICNEQUU4RkE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMUE3QkRDO1xcbn1cXG4uZm9ybSAuZm9ybS1ncm91cC5jaGVja2JveCBsYWJlbCAuY2hlY2tib3gucmFkaW8ge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uZm9ybSAuZm9ybS1ncm91cC5jaGVja2JveCBsYWJlbCBpbnB1dCArIC5jaGVja2JveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzcHg7XFxuICBsZWZ0OiA4cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwMDAwMDA7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDAwMDtcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmZvcm0gLmZvcm0tZ3JvdXAuY2hlY2tib3ggbGFiZWwgaW5wdXQgKyAuY2hlY2tib3gucmFkaW86OmJlZm9yZSB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLmZvcm0gLmZvcm0tZ3JvdXAuY2hlY2tib3ggbGFiZWwgaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmZvcm0gLnZpc2libGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0NXB4O1xcbiAgcmlnaHQ6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5mb3JtIC52aXNpYmxlIC5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmZvcm0gLnZpc2libGUgLmljb24tdmlzaWJpbGl0eS1vZmYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mb3JtIC52aXNpYmxlIC5pY29uLXZpc2liaWxpdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmZvcm0gLnZpc2libGUuYWN0aXZlIC5pY29uLXZpc2liaWxpdHktb2ZmIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mb3JtIC52aXNpYmxlLmFjdGl2ZSAuaWNvbi12aXNpYmlsaXR5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWxfb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgzNywgMzcsIDM3LCAwLjg1KTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLm1vZGFsX292ZXJsYXkuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgei1pbmRleDogMTAwO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZXRvcCAwLjVzIGVhc2U7XFxufVxcbi5tb2RhbC5zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tb2RhbCAucG9wdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQ1MnB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYW5pbWF0aW9uOiBhcHBlYXIgMC41cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tb2RhbCAucG9wdXAgPiAuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAgMThweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNTZweDtcXG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM2ZGVnLCAjQjgxODQ4IDUuMTElLCAjOTYxMTM5IDMyLjQxJSwgIzdDMEYzNCA4OC42MiUpO1xcbn1cXG4ubW9kYWwgLnBvcHVwID4gLmhlYWRlciAudGl0bGUge1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpay1Cb2xkLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLm1vZGFsIC5wb3B1cCA+IC5oZWFkZXIgLmNsb3NlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaW5lLWhlaWdodDogNTZweDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG4ubW9kYWwgLnBvcHVwID4gLmhlYWRlciAuY2xvc2U6aG92ZXIsIC5tb2RhbCAucG9wdXAgPiAuaGVhZGVyIC5jbG9zZTpmb2N1cywgLm1vZGFsIC5wb3B1cCA+IC5oZWFkZXIgLmNsb3NlOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcbi5tb2RhbCAucG9wdXAgPiAuY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAyODBweDtcXG4gIGNvbG9yOiAjMDUwNTA1O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExMGRlZywgI0QzOTc2QyAwJSwgI0ZGRkNCNSAxMDAlKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbn1cXG4ubW9kYWwgLnBvcHVwID4gLmNvbnRlbnQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLnBvcHVwID4gLmNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpay1NZWRpdW0sIHNhbnMtc2VyaWY7XFxufVxcbi5tb2RhbCAucG9wdXAgPiAuY29udGVudCAuY2hlY2tib3gtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLm1vZGFsIC5wb3B1cCA+IC5jb250ZW50IC5jaGVja2JveC1kZXNjcmlwdGlvbiBhIHtcXG4gIGNvbG9yOiAjMTkzQUIyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5tb2RhbCAucG9wdXAgPiAuY29udGVudCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG4ubW9kYWwgLnBvcHVwID4gLmNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICB9XFxufVxcbi50aW1lci13cmFwIHtcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGltZXItd3JhcCAudGltZXItdGl0bGUge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMUUxRTFFO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLVNlbWlCb2xkLCBzYW5zLXNlcmlmO1xcbn1cXG4udGltZXItd3JhcCAudGltZXIge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweCAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGNvbG9yOiAjM0QzRDNEO1xcbiAgd2lkdGg6IDEyNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFJ1YmlrLUJvbGQsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkQwODMgMCUsICNGRkFBN0QgMTAwJSk7XFxufVwiLFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUnViaWstUmVndWxhcjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9SdWJpay1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSxcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUnViaWstQm9sZDtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9SdWJpay1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSxcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUnViaWstU2VtaUJvbGQ7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvUnViaWstU2VtaUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLFxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpay1NZWRpdW07XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvUnViaWstTWVkaXVtLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSxcXG59XFxuXCIsXCIkaW5wdXRUb3BMYWJlbFNwYWNlOiAxNnB4O1xcbiRpbnB1dEhlaWdodDogNDRweDtcXG5cXG4uZm9ybSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG5cXG4gIC5mb3JtLWdyb3VwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAkaW5wdXRUb3BMYWJlbFNwYWNlO1xcblxcbiAgICBpbnB1dC5oaWRkZW4ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmZvcm0tY29udHJvbCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGhlaWdodDogJGlucHV0SGVpZ2h0O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXRIZWlnaHQ7XFxuICAgICAgcGFkZGluZzogMTRweCAxOHB4IDEycHg7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgY29sb3I6ICMyNjI2MjY7XFxuICAgICAgY2FyZXQtY29sb3I6ICMyNjI2MjY7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgdHJhbnNpdGlvbjogLjJzIGVhc2UgYm9yZGVyLWNvbG9yO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjRUZGNUZFLCAjRUZGNUZFKSBwYWRkaW5nLWJveCwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMUE3QkRDLCAjMEEyNzkyKSBib3JkZXItYm94O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG5cXG4gICAgICAmLmNlbnRlciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgIGNvbG9yOiAjQTRCMkUzO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZm9ybS1jb250cm9sICsgLmNvbnRyb2wtbGFiZWwsXFxuICAgIC5zZWxlY3RyaWMtZm9ybS1jb250cm9sICsgLmNvbnRyb2wtbGFiZWwsXFxuICAgIC5jb250cm9sLWxhYmVsLWZvcmNlZCB7XFxuICAgICAgLy9AaW5jbHVkZSB0ZXh0X292ZXJmbG93O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IC0xOHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC8vY29sb3I6ICRnbG9iYWxTdHJva2VDb2xvcjtcXG4gICAgICAvL3RyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICB6LWluZGV4OiAwO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgLmhlbHAtYmxvY2sge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XFxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgICYuY2hlY2tib3gge1xcbiAgICAgIGRpdiB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBsYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAuY2hlY2tib3gge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgYmFja2dyb3VuZDogI0RBRThGQTtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzFBN0JEQztcXG5cXG4gICAgICAgICAgJi5yYWRpbyB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICsgLmNoZWNrYm94IHtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICB0b3A6IDNweDtcXG4gICAgICAgICAgICAgIGxlZnQ6IDhweDtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICAgICAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAwMDAwMDtcXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwMDAwO1xcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLnJhZGlvOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICY6Y2hlY2tlZCArIC5jaGVja2JveCB7XFxuICAgICAgICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC52aXNpYmxlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ1cHg7XFxuICAgIHJpZ2h0OiAyNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAuaWNvbiB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5pY29uLXZpc2liaWxpdHktb2ZmIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAuaWNvbi12aXNpYmlsaXR5IHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICYuYWN0aXZlIHtcXG4gICAgICAuaWNvbi12aXNpYmlsaXR5LW9mZiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAuaWNvbi12aXNpYmlsaXR5IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRtb2RhbFpJbmRleDogMTAwO1xcbiRoZWFkZXJIZWlnaHQ6IDU2cHg7XFxuXFxuLm1vZGFsX292ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDM3LCAzNywgMC44NSk7XFxuICB6LWluZGV4OiAkbW9kYWxaSW5kZXg7XFxuXFxuICAmLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgei1pbmRleDogJG1vZGFsWkluZGV4O1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZXRvcCAwLjVzIGVhc2U7XFxuXFxuICAmLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLnBvcHVwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNDUycHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBhbmltYXRpb246IGFwcGVhciAwLjVzIGVhc2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgID4gLmhlYWRlciB7XFxuICAgICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgaGVpZ2h0OiAkaGVhZGVySGVpZ2h0O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaGVhZGVySGVpZ2h0O1xcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzZkZWcsICNCODE4NDggNS4xMSUsICM5NjExMzkgMzIuNDElLCAjN0MwRjM0IDg4LjYyJSk7XFxuXFxuICAgICAgLnRpdGxlIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LWZhbWlseTogUnViaWstQm9sZCwgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgfVxcblxcbiAgICAgIC5jbG9zZSB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRoZWFkZXJIZWlnaHQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG5cXG4gICAgICAgICY6aG92ZXIsXFxuICAgICAgICAmOmZvY3VzLFxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgID4gLmNvbnRlbnQge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xcbiAgICAgIGNvbG9yOiAjMDUwNTA1O1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNEMzk3NkMgMCUsICNGRkZDQjUgMTAwJSk7XFxuICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcblxcbiAgICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSdWJpay1NZWRpdW0sIHNhbnMtc2VyaWY7XFxuICAgICAgfVxcblxcbiAgICAgIC5jaGVja2JveC1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcblxcbiAgICAgICAgYSB7XFxuICAgICAgICAgIGNvbG9yOiAjMTkzQUIyO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcbn1cXG5cIixcIi50aW1lci13cmFwIHtcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLnRpbWVyLXRpdGxlIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjMUUxRTFFO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LWZhbWlseTogUnViaWstU2VtaUJvbGQsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuICAudGltZXIge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmc6IDZweCAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBjb2xvcjogIzNEM0QzRDtcXG4gICAgd2lkdGg6IDEyNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBSdWJpay1Cb2xkLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkQwODMgMCUsICNGRkFBN0QgMTAwJSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJub2RlX21vZHVsZXNfcGl4aV9qc19saWJfZW52aXJvbm1lbnQtYnJvd3Nlcl9icm93c2VyQWxsX21qc1wiOlwiMTAwMmU1NmNiZmE2MDExMDNjZjVcIixcIm5vZGVfbW9kdWxlc19waXhpX2pzX2xpYl9lbnZpcm9ubWVudC13ZWJ3b3JrZXJfd2Vid29ya2VyQWxsX21qc1wiOlwiYTRmZTM5ZDdjYTgwM2NhMGZiYzZcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiYmlnLWJhc3MtYm9uYW56YS1zbG90czpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYmlnX2Jhc3NfYm9uYW56YV9zbG90c1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiaWdfYmFzc19ib25hbnphX3Nsb3RzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VS0wN2ZhYTlcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiQXBwbGljYXRpb24iLCJBc3NldHMiLCJCbHVyRmlsdGVyIiwiQ29udGFpbmVyIiwiU3ByaXRlIiwiVGV4dHVyZSIsImljb25TZXZlbiIsImljb25PSEYiLCJpY29uQmVsbCIsImljb25DaGVyeSIsImljb25Db2luIiwiaWNvbkdyYXBlIiwiaWNvblBsdW0iLCJpY29uTWFqb3IiLCJpY29uTWVnYSIsImljb25NaW5vciIsImljb25Kb2tlciIsIl9jYWxsZWUiLCJhcHAiLCJSRUVMX1dJRFRIIiwiU1lNQk9MX1NJWkUiLCJzbG90VGV4dHVyZXMiLCJyZWVscyIsInJlZWxDb250YWluZXIiLCJyYyIsInJlZWwiLCJqIiwic3ltYm9sIiwicnVubmluZyIsInN0YXJ0UGxheSIsInJlZWxzQ29tcGxldGUiLCJ0d2VlbmluZyIsInR3ZWVuVG8iLCJsZXJwIiwiYmFja291dCIsImVsZW1lbnRzIiwiYWRkQ2xhc3NXaXRoRGVsYXkiLCJzaG93TW9kYWwiLCJ3aW5uZXJTaG93IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIl9iYWNrb3V0IiwiYW1vdW50IiwiX2xlcnAiLCJhMSIsImEyIiwiX3R3ZWVuVG8iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInRhcmdldCIsInRpbWUiLCJlYXNpbmciLCJvbmNoYW5nZSIsIm9uY29tcGxldGUiLCJ0d2VlbiIsInByb3BlcnR5QmVnaW5WYWx1ZSIsImNoYW5nZSIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsIl9yZWVsc0NvbXBsZXRlIiwiX3N0YXJ0UGxheSIsImV4dHJhIiwicG9zaXRpb24iLCJpbml0IiwiYmFja2dyb3VuZEFscGhhIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwibG9hZCIsImZyb20iLCJ4IiwiYWRkQ2hpbGQiLCJjb250YWluZXIiLCJzeW1ib2xzIiwicHJldmlvdXNQb3NpdGlvbiIsImJsdXIiLCJibHVyWCIsImJsdXJZIiwiZmlsdGVycyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNjYWxlIiwibWluIiwicm91bmQiLCJzdGFnZSIsInRpY2tlciIsImFkZCIsInByZXZ5IiwidGV4dHVyZSIsInJlbW92ZSIsInBoYXNlIiwic3BsaWNlIiwiaW5kZXhPZiIsImJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5uZXIiLCJ3aW5FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2RhbE92ZXJsYXkiLCJtb2RhbFNpZ251cCIsInRleHRTcGluIiwiYXJyb3dzIiwic291bmRzIiwid2luIiwiQXVkaW8iLCJzcGluIiwiY2xhc3NOYW1lIiwiZGVsYXkiLCJlbGVtZW50IiwiaW5kZXgiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0Iiwib3ZlcmxheSIsIm1vZGFsIiwicGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==