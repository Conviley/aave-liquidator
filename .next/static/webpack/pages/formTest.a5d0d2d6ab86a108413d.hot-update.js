webpackHotUpdate_N_E("pages/formTest",{

/***/ "./pages/formTest.js":
/*!***************************!*\
  !*** ./pages/formTest.js ***!
  \***************************/
/*! exports provided: default */
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
/* harmony default export */ __webpack_exports__["default"] = (FormLayoutDemo);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybVRlc3QuanMiXSwibmFtZXMiOlsiRm9ybUxheW91dERlbW8iLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJ1c2VTdGF0ZSIsImZvcm1MYXlvdXQiLCJzZXRGb3JtTGF5b3V0Iiwib25Gb3JtTGF5b3V0Q2hhbmdlIiwibGF5b3V0IiwiZm9ybUl0ZW1MYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwiYnV0dG9uSXRlbUxheW91dCIsIm9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxzQkFDWkMseUNBQUksQ0FBQ0MsT0FBTCxFQURZO0FBQUE7QUFBQSxNQUNwQkMsSUFEb0I7O0FBQUEsa0JBRVNDLHNEQUFRLENBQUMsWUFBRCxDQUZqQjtBQUFBLE1BRXBCQyxVQUZvQjtBQUFBLE1BRVJDLGFBRlE7O0FBSTNCLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBZ0I7QUFBQSxRQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDekNGLGlCQUFhLENBQUNFLE1BQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsY0FBYyxHQUNsQkosVUFBVSxLQUFLLFlBQWYsR0FDSTtBQUNFSyxZQUFRLEVBQUU7QUFDUkMsVUFBSSxFQUFFO0FBREUsS0FEWjtBQUlFQyxjQUFVLEVBQUU7QUFDVkQsVUFBSSxFQUFFO0FBREk7QUFKZCxHQURKLEdBU0ksSUFWTjtBQVdBLE1BQU1FLGdCQUFnQixHQUNwQlIsVUFBVSxLQUFLLFlBQWYsR0FDSTtBQUNFTyxjQUFVLEVBQUU7QUFDVkQsVUFBSSxFQUFFLEVBREk7QUFFVkcsWUFBTSxFQUFFO0FBRkU7QUFEZCxHQURKLEdBT0ksSUFSTjtBQVNBLFNBQ0UsbUVBQ0UsTUFBQyx5Q0FBRCx5RkFDTUwsY0FETjtBQUVFLFVBQU0sRUFBRUosVUFGVjtBQUdFLFFBQUksRUFBRUYsSUFIUjtBQUlFLGlCQUFhLEVBQUU7QUFDYkssWUFBTSxFQUFFSDtBQURLLEtBSmpCO0FBT0Usa0JBQWMsRUFBRUUsa0JBUGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFTRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxhQUFqQjtBQUErQixRQUFJLEVBQUMsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQsQ0FBTyxLQUFQO0FBQWEsU0FBSyxFQUFFRixVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRCxDQUFPLE1BQVA7QUFBYyxTQUFLLEVBQUMsWUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFLE1BQUMsMENBQUQsQ0FBTyxNQUFQO0FBQWMsU0FBSyxFQUFDLFVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHRSxNQUFDLDBDQUFELENBQU8sTUFBUDtBQUFjLFNBQUssRUFBQyxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsQ0FERixDQVRGLEVBZ0JFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBDQUFEO0FBQU8sZUFBVyxFQUFDLG1CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUFtQkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxTQUFLLEVBQUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMsbUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQW5CRixFQXNCRSxNQUFDLHlDQUFELENBQU0sSUFBTix5RkFBZVEsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0F0QkYsQ0FERixDQURGO0FBOEJELENBMUREOztHQUFNYixjO1VBQ1dDLHlDQUFJLENBQUNDLE87OztLQURoQkYsYztBQTREU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybVRlc3QuYTVkMGQyZDZhYjg2YTEwODQxM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBSYWRpbyB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBGb3JtTGF5b3V0RGVtbyA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKVxyXG4gIGNvbnN0IFtmb3JtTGF5b3V0LCBzZXRGb3JtTGF5b3V0XSA9IHVzZVN0YXRlKCdob3Jpem9udGFsJylcclxuXHJcbiAgY29uc3Qgb25Gb3JtTGF5b3V0Q2hhbmdlID0gKHsgbGF5b3V0IH0pID0+IHtcclxuICAgIHNldEZvcm1MYXlvdXQobGF5b3V0KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybUl0ZW1MYXlvdXQgPVxyXG4gICAgZm9ybUxheW91dCA9PT0gJ2hvcml6b250YWwnXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgbGFiZWxDb2w6IHtcclxuICAgICAgICAgICAgc3BhbjogNCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB3cmFwcGVyQ29sOiB7XHJcbiAgICAgICAgICAgIHNwYW46IDE0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIDogbnVsbFxyXG4gIGNvbnN0IGJ1dHRvbkl0ZW1MYXlvdXQgPVxyXG4gICAgZm9ybUxheW91dCA9PT0gJ2hvcml6b250YWwnXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgd3JhcHBlckNvbDoge1xyXG4gICAgICAgICAgICBzcGFuOiAxNCxcclxuICAgICAgICAgICAgb2Zmc2V0OiA0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIDogbnVsbFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIHsuLi5mb3JtSXRlbUxheW91dH1cclxuICAgICAgICBsYXlvdXQ9e2Zvcm1MYXlvdXR9XHJcbiAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBsYXlvdXQ6IGZvcm1MYXlvdXQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvblZhbHVlc0NoYW5nZT17b25Gb3JtTGF5b3V0Q2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZvcm0gTGF5b3V0XCIgbmFtZT1cImxheW91dFwiPlxyXG4gICAgICAgICAgPFJhZGlvLkdyb3VwIHZhbHVlPXtmb3JtTGF5b3V0fT5cclxuICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cImhvcml6b250YWxcIj5Ib3Jpem9udGFsPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJ2ZXJ0aWNhbFwiPlZlcnRpY2FsPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJpbmxpbmVcIj5JbmxpbmU8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZpZWxkIEFcIj5cclxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cImlucHV0IHBsYWNlaG9sZGVyXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiRmllbGQgQlwiPlxyXG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiaW5wdXQgcGxhY2Vob2xkZXJcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gey4uLmJ1dHRvbkl0ZW1MYXlvdXR9PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1MYXlvdXREZW1vXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=