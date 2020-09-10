webpackHotUpdate_N_E("pages/formTest",{

/***/ "./pages/formTest.js":
/*!***************************!*\
  !*** ./pages/formTest.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Diddi\\Documents\\crypto\\aave-liquidation\\pages\\formTest.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var FormLayoutDemo = function FormLayoutDemo() {
  _s();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('horizontal'),
      formLayout = _useState[0],
      setFormLayout = _useState[1];

  var onFormLayoutChange = function onFormLayoutChange(_ref) {
    var layout = _ref.layout;
    setFormLayout(layout);
  };

  var formItemLayout = formLayout === 'horizontal' ? {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 14
    }
  } : null;
  var buttonItemLayout = formLayout === 'horizontal' ? {
    wrapperCol: {
      span: 14,
      offset: 4
    }
  } : null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formItemLayout, {
    layout: formLayout,
    form: form,
    initialValues: {
      layout: formLayout
    },
    onValuesChange: onFormLayoutChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Form Layout",
    name: "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
    value: formLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
    value: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Horizontal"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
    value: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Vertical"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
    value: "inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Inline"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Field A",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "input placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Field B",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "input placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonItemLayout, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Submit"))));
};

_s(FormLayoutDemo, "BGs+kWF0UCSY97SGyys9lOG5dFU=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm];
});

_c = FormLayoutDemo;
ReactDOM.render(__jsx(FormLayoutDemo, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 17
  }
}), mountNode);

var _c;

$RefreshReg$(_c, "FormLayoutDemo");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybVRlc3QuanMiXSwibmFtZXMiOlsiRm9ybUxheW91dERlbW8iLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJ1c2VTdGF0ZSIsImZvcm1MYXlvdXQiLCJzZXRGb3JtTGF5b3V0Iiwib25Gb3JtTGF5b3V0Q2hhbmdlIiwibGF5b3V0IiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwiYnV0dG9uSXRlbUxheW91dCIsIm9mZnNldCIsIlJlYWN0RE9NIiwicmVuZGVyIiwibW91bnROb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLHNCQUNaQyx5Q0FBSSxDQUFDQyxPQUFMLEVBRFk7QUFBQTtBQUFBLE1BQ3BCQyxJQURvQjs7QUFBQSxrQkFFU0Msc0RBQVEsQ0FBQyxZQUFELENBRmpCO0FBQUEsTUFFcEJDLFVBRm9CO0FBQUEsTUFFUkMsYUFGUTs7QUFJM0IsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUFnQjtBQUFBLFFBQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN6Q0YsaUJBQWEsQ0FBQ0UsTUFBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxjQUFjLEdBQ2xCSixVQUFVLEtBQUssWUFBZixHQUNJO0FBQ0VLLFlBQVEsRUFBRTtBQUNSQyxVQUFJLEVBQUU7QUFERSxLQURaO0FBSUVDLGNBQVUsRUFBRTtBQUNWRCxVQUFJLEVBQUU7QUFESTtBQUpkLEdBREosR0FTSSxJQVZOO0FBV0EsTUFBTUUsZ0JBQWdCLEdBQ3BCUixVQUFVLEtBQUssWUFBZixHQUNJO0FBQ0VPLGNBQVUsRUFBRTtBQUNWRCxVQUFJLEVBQUUsRUFESTtBQUVWRyxZQUFNLEVBQUU7QUFGRTtBQURkLEdBREosR0FPSSxJQVJOO0FBU0EsU0FDRSxtRUFDRSxNQUFDLHlDQUFELHlGQUNNTCxjQUROO0FBRUUsVUFBTSxFQUFFSixVQUZWO0FBR0UsUUFBSSxFQUFFRixJQUhSO0FBSUUsaUJBQWEsRUFBRTtBQUNiSyxZQUFNLEVBQUVIO0FBREssS0FKakI7QUFPRSxrQkFBYyxFQUFFRSxrQkFQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLGFBQWpCO0FBQStCLFFBQUksRUFBQyxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRCxDQUFPLEtBQVA7QUFBYSxTQUFLLEVBQUVGLFVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBDQUFELENBQU8sTUFBUDtBQUFjLFNBQUssRUFBQyxZQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUUsTUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFBYyxTQUFLLEVBQUMsVUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUdFLE1BQUMsMENBQUQsQ0FBTyxNQUFQO0FBQWMsU0FBSyxFQUFDLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixDQURGLENBVEYsRUFnQkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxTQUFLLEVBQUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMsbUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWhCRixFQW1CRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUFPLGVBQVcsRUFBQyxtQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbkJGLEVBc0JFLE1BQUMseUNBQUQsQ0FBTSxJQUFOLHlGQUFlUSxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQXRCRixDQURGLENBREY7QUE4QkQsQ0ExREQ7O0dBQU1iLGM7VUFDV0MseUNBQUksQ0FBQ0MsTzs7O0tBRGhCRixjO0FBNEROZSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBaEIsRUFBb0NDLFNBQXBDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1UZXN0LjBlMGQ2Yjk2ZTEzN2JjZDU0NmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgUmFkaW8gfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgRm9ybUxheW91dERlbW8gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKClcclxuICBjb25zdCBbZm9ybUxheW91dCwgc2V0Rm9ybUxheW91dF0gPSB1c2VTdGF0ZSgnaG9yaXpvbnRhbCcpXHJcblxyXG4gIGNvbnN0IG9uRm9ybUxheW91dENoYW5nZSA9ICh7IGxheW91dCB9KSA9PiB7XHJcbiAgICBzZXRGb3JtTGF5b3V0KGxheW91dClcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1JdGVtTGF5b3V0ID1cclxuICAgIGZvcm1MYXlvdXQgPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICA/IHtcclxuICAgICAgICAgIGxhYmVsQ29sOiB7XHJcbiAgICAgICAgICAgIHNwYW46IDQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgd3JhcHBlckNvbDoge1xyXG4gICAgICAgICAgICBzcGFuOiAxNCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICA6IG51bGxcclxuICBjb25zdCBidXR0b25JdGVtTGF5b3V0ID1cclxuICAgIGZvcm1MYXlvdXQgPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICA/IHtcclxuICAgICAgICAgIHdyYXBwZXJDb2w6IHtcclxuICAgICAgICAgICAgc3BhbjogMTQsXHJcbiAgICAgICAgICAgIG9mZnNldDogNCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICA6IG51bGxcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICB7Li4uZm9ybUl0ZW1MYXlvdXR9XHJcbiAgICAgICAgbGF5b3V0PXtmb3JtTGF5b3V0fVxyXG4gICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgbGF5b3V0OiBmb3JtTGF5b3V0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e29uRm9ybUxheW91dENoYW5nZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGb3JtIExheW91dFwiIG5hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgICAgIDxSYWRpby5Hcm91cCB2YWx1ZT17Zm9ybUxheW91dH0+XHJcbiAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJob3Jpem9udGFsXCI+SG9yaXpvbnRhbDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwidmVydGljYWxcIj5WZXJ0aWNhbDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiaW5saW5lXCI+SW5saW5lPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGaWVsZCBBXCI+XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJpbnB1dCBwbGFjZWhvbGRlclwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZpZWxkIEJcIj5cclxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cImlucHV0IHBsYWNlaG9sZGVyXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIHsuLi5idXR0b25JdGVtTGF5b3V0fT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEZvcm1MYXlvdXREZW1vIC8+LCBtb3VudE5vZGUpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=