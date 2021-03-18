webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Practicando_REACT_Clase_REACTJS_5_bitcoinapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Practicando_REACT_Clase_REACTJS_5_bitcoinapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Practicando_REACT_Clase_REACTJS_5_bitcoinapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Practicando_REACT_Clase_REACTJS_5_bitcoinapp_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var D_Practicando_REACT_Clase_REACTJS_5_bitcoinapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Master */ "./components/Master.js");
/* harmony import */ var _components_Precio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Precio */ "./components/Precio.js");
/* harmony import */ var _components_Noticias__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Noticias */ "./components/Noticias.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Eventos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Eventos */ "./components/Eventos.js");





var _jsxFileName = "D:\\Practicando\\REACT\\Clase_REACTJS_5\\bitcoinapp\\pages\\index.js",
    _this = undefined;







var Index = function Index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Master__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "col-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
          children: "Precio del bitcoin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Precio__WEBPACK_IMPORTED_MODULE_5__["default"], {
          precio: props.precioBitcoin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "col-md-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
          children: "Noticias sobre bitcoin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Noticias__WEBPACK_IMPORTED_MODULE_6__["default"], {
          noticias: props.noticias
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
          children: "Proximos Eventos bitcoin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Eventos__WEBPACK_IMPORTED_MODULE_8__["default"], {
          eventos: props.eventos
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(D_Practicando_REACT_Clase_REACTJS_5_bitcoinapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Practicando_REACT_Clase_REACTJS_5_bitcoinapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var precio, noticias, eventos, resPrecio, resNoticias, resEventos;
  return D_Practicando_REACT_Clase_REACTJS_5_bitcoinapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('https://blockchain.info/ticker');

        case 2:
          precio = _context.sent;
          _context.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=54f6bf7ecf0443518b4f200a0f7dd015&language=es');

        case 5:
          noticias = _context.sent;
          _context.next = 8;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('https://www.eventbriteapi.com/v3/series/15241955098/?tracking_code=5YVCT65EX3I22YHEHF73&token=5YVCT65EX3I22YHEHF73');

        case 8:
          eventos = _context.sent;
          _context.next = 11;
          return precio.json();

        case 11:
          resPrecio = _context.sent;
          _context.next = 14;
          return noticias.json();

        case 14:
          resNoticias = _context.sent;
          _context.next = 17;
          return eventos.json();

        case 17:
          resEventos = _context.sent;
          resEventos = (Object(D_Practicando_REACT_Clase_REACTJS_5_bitcoinapp_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("resEventos"), []);
          return _context.abrupt("return", {
            precioBitcoin: resPrecio.USD,
            noticias: resNoticias.articles,
            eventos: resEventos
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJwcmVjaW9CaXRjb2luIiwibm90aWNpYXMiLCJldmVudG9zIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJwcmVjaW8iLCJqc29uIiwicmVzUHJlY2lvIiwicmVzTm90aWNpYXMiLCJyZXNFdmVudG9zIiwiVVNEIiwiYXJ0aWNsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLHNCQUNWLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQywwREFBRDtBQUNJLGdCQUFNLEVBQUVBLEtBQUssQ0FBQ0M7QUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyw0REFBRDtBQUNJLGtCQUFRLEVBQUlELEtBQUssQ0FBQ0U7QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixlQWFJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQywyREFBRDtBQUNJLGlCQUFPLEVBQUVGLEtBQUssQ0FBQ0c7QUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFU7QUFBQSxDQUFkOztLQUFNSixLO0FBeUJOQSxLQUFLLENBQUNLLGVBQU4sdVRBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0NDLHlEQUFLLENBQUMsZ0NBQUQsQ0FETjs7QUFBQTtBQUNkQyxnQkFEYztBQUFBO0FBQUEsaUJBRUdELHlEQUFLLENBQUMsbUhBQUQsQ0FGUjs7QUFBQTtBQUVkSCxrQkFGYztBQUFBO0FBQUEsaUJBR0VHLHlEQUFLLENBQUMsb0hBQUQsQ0FIUDs7QUFBQTtBQUdkRixpQkFIYztBQUFBO0FBQUEsaUJBS0lHLE1BQU0sQ0FBQ0MsSUFBUCxFQUxKOztBQUFBO0FBS2RDLG1CQUxjO0FBQUE7QUFBQSxpQkFNTU4sUUFBUSxDQUFDSyxJQUFULEVBTk47O0FBQUE7QUFNZEUscUJBTmM7QUFBQTtBQUFBLGlCQU9LTixPQUFPLENBQUNJLElBQVIsRUFQTDs7QUFBQTtBQU9kRyxvQkFQYztBQVFwQkEsb0JBQVUsdUtBQUcsRUFBSCxDQUFWO0FBUm9CLDJDQVViO0FBQ0hULHlCQUFhLEVBQUVPLFNBQVMsQ0FBQ0csR0FEdEI7QUFFSFQsb0JBQVEsRUFBRU8sV0FBVyxDQUFDRyxRQUZuQjtBQUdIVCxtQkFBTyxFQUFFTztBQUhOLFdBVmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFpQmVYLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjMTMyZWRmMGJkMGYyNGJkYWI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgTWFzdGVyUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL01hc3Rlcic7XHJcbmltcG9ydCBQcmVjaW8gZnJvbSAnLi4vY29tcG9uZW50cy9QcmVjaW8nO1xyXG5pbXBvcnQgTm90aWNpYXMgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2lhcyc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgRXZlbnRvcyBmcm9tICcuLi9jb21wb25lbnRzL0V2ZW50b3MnO1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcclxuICAgIDxNYXN0ZXJQYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+UHJlY2lvIGRlbCBiaXRjb2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxQcmVjaW8gXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lvPXtwcm9wcy5wcmVjaW9CaXRjb2lufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Ob3RpY2lhcyBzb2JyZSBiaXRjb2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxOb3RpY2lhcyBcclxuICAgICAgICAgICAgICAgICAgICBub3RpY2lhcyA9IHtwcm9wcy5ub3RpY2lhc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+UHJveGltb3MgRXZlbnRvcyBiaXRjb2luPC9oMj5cclxuICAgICAgICAgICAgICAgIDxFdmVudG9zIFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50b3M9e3Byb3BzLmV2ZW50b3N9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTWFzdGVyUGFnZT5cclxuKTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHByZWNpbyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Jsb2NrY2hhaW4uaW5mby90aWNrZXInKTtcclxuICAgIGNvbnN0IG5vdGljaWFzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9Yml0Y29pbiZzb3J0Qnk9cHVibGlzaGVkQXQmYXBpS2V5PTU0ZjZiZjdlY2YwNDQzNTE4YjRmMjAwYTBmN2RkMDE1Jmxhbmd1YWdlPWVzJyk7XHJcbiAgICBjb25zdCBldmVudG9zID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3LmV2ZW50YnJpdGVhcGkuY29tL3YzL3Nlcmllcy8xNTI0MTk1NTA5OC8/dHJhY2tpbmdfY29kZT01WVZDVDY1RVgzSTIyWUhFSEY3MyZ0b2tlbj01WVZDVDY1RVgzSTIyWUhFSEY3MycpO1xyXG5cclxuICAgIGNvbnN0IHJlc1ByZWNpbyA9IGF3YWl0IHByZWNpby5qc29uKCk7XHJcbiAgICBjb25zdCByZXNOb3RpY2lhcyA9IGF3YWl0IG5vdGljaWFzLmpzb24oKTtcclxuICAgIGNvbnN0IHJlc0V2ZW50b3MgPSBhd2FpdCBldmVudG9zLmpzb24oKTtcclxuICAgIHJlc0V2ZW50b3MgPSBbXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJlY2lvQml0Y29pbjogcmVzUHJlY2lvLlVTRCxcclxuICAgICAgICBub3RpY2lhczogcmVzTm90aWNpYXMuYXJ0aWNsZXMsXHJcbiAgICAgICAgZXZlbnRvczogcmVzRXZlbnRvc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9