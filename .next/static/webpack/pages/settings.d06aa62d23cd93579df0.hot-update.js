webpackHotUpdate_N_E("pages/settings",{

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_web3_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/web3.js */ "./src/web3.js");
/* harmony import */ var _src_web3_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_web3_js__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\Users\\Diddi\\Documents\\crypto\\aave-liquidation\\pages\\settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Settings = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Settings, _Component);

  var _super = _createSuper(Settings);

  function Settings() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Settings);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      liquidatorAddress: '',
      addressToLiquidate: '',
      collateralAddress: '',
      repayTokenAddress: '',
      lpAddressProviderAddress: '',
      lpAddress: '',
      latestLpCoreAddress: '',
      wss: '',
      http: '',
      mnemonic: '',
      ethGasStationAPIKey: '',
      dynamicGasPrice: false,
      liquidationAmount: '',
      gasPrice: '',
      gasLimit: '',
      receiveATokens: false,
      formError: false,
      liquidationAddressError: false,
      addressToLiquidateError: false,
      collateralAddressError: false,
      repayTokenAddressError: false,
      lpAddressProviderAddressError: false,
      lpAddressError: false,
      latestLpCoreAddressError: false,
      wssError: false,
      httpError: false,
      mnemonicError: false,
      ethGasStationAPIKeyError: false,
      dynamicGasPriceError: false,
      liquidationAmountError: false,
      gasPriceError: false,
      gasLimitError: false,
      receiveAtokensError: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onSubmit", function (event) {
      event.preventDefault();
      console.log(_this.state);
      var error;

      if (!_src_web3_js__WEBPACK_IMPORTED_MODULE_11___default.a.web3.utils.checkAddressChecksum(_this.state.liquidatorAddress)) {
        _this.setState({
          liquidationAddressError: true
        });

        error = true;
      }

      if (!_src_web3_js__WEBPACK_IMPORTED_MODULE_11___default.a.web3.utils.checkAddressChecksum(_this.state.liquidatorAddress)) {
        _this.setState({
          liquidationAddressError: true
        });

        error = true;
      }

      if (error) {
        _this.setState({
          formError: true
        });

        return;
      }

      var configFile = {
        liquidatorAddress: _this.state.liquidatorAddress,
        addressToLiquidate: _this.state.addressToLiquidate,
        collateralAddress: _this.state.collateralAddress,
        repayTokenAddress: _this.state.repayTokenAddress,
        lpAddressProviderAddress: _this.state.lpAddressProviderAddress,
        lpAddress: _this.state.lpAddress,
        latestLpCoreAddress: _this.state.latestLpCoreAddress,
        wss: _this.state.wss,
        http: _this.state.http,
        mnemonic: _this.state.mnemonic,
        ethGasStationAPIKey: _this.state.ethGasStationAPIKey,
        dynamicGasPrice: _this.state.dynamicGasPrice,
        liquidationAmount: _this.state.liquidationAmount,
        gasPrice: _this.state.gasPrice,
        gasLimit: _this.state.gasLimit,
        receiveATokens: _this.state.receiveATokens
      };
      var blob = new Blob([JSON.stringify(configFile)], {
        type: 'application/json'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_10___default.a.saveAs(blob, 'settings.json');

      _this.updateSessionStorage(_this.state);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "hiddenFileInput", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "uploadSettings", function () {
      _this.hiddenFileInput.current.click();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "readSettings", function (event) {
      var fileUploaded = event.target.files[0];
      var fr = new FileReader();

      fr.onload = function (e) {
        var result = JSON.parse(e.target.result);

        _this.setState({
          liquidatorAddress: result.liquidatorAddress,
          addressToLiquidate: result.addressToLiquidate,
          collateralAddress: result.collateralAddress,
          repayTokenAddress: result.repayTokenAddress,
          lpAddressProviderAddress: result.lpAddressProviderAddress,
          lpAddress: result.lpAddress,
          latestLpCoreAddress: result.latestLpCoreAddress,
          wss: result.wss,
          http: result.http,
          mnemonic: result.mnemonic,
          ethGasStationAPIKey: result.ethGasStationAPIKey,
          dynamicGasPrice: result.dynamicGasPrice,
          liquidationAmount: result.liquidationAmount,
          gasPrice: result.gasPrice,
          gasLimit: result.gasLimit,
          receiveATokens: result.receiveATokens
        });

        _this.updateSessionStorage(result);

        var formatted = JSON.stringify(result, null, 2);
        console.log(formatted);
      };

      fr.readAsText(fileUploaded);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "updateSessionStorage", function (data) {
      sessionStorage.setItem('liquidatorAddress', data.liquidatorAddress);
      sessionStorage.setItem('addressToLiquidate', data.addressToLiquidate);
      sessionStorage.setItem('collateralAddress', data.collateralAddress);
      sessionStorage.setItem('repayTokenAddress', data.repayTokenAddress);
      sessionStorage.setItem('lpAddressProviderAddress', data.lpAddressProviderAddress);
      sessionStorage.setItem('lpAddress', data.lpAddress);
      sessionStorage.setItem('latestLpCoreAddress', data.latestLpCoreAddress);
      sessionStorage.setItem('wss', data.wss);
      sessionStorage.setItem('http', data.http);
      sessionStorage.setItem('mnemonic', data.mnemonic);
      sessionStorage.setItem('ethGasStationAPIKey', data.ethGasStationAPIKey);
      sessionStorage.setItem('dynamicGasPrice', data.dynamicGasPrice);
      sessionStorage.setItem('liquidationAmount', data.liquidationAmount);
      sessionStorage.setItem('gasPrice', data.gasPrice);
      sessionStorage.setItem('gasLimit', data.gasLimit);
      sessionStorage.setItem('receiveATokens', data.receiveATokens);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Settings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        liquidatorAddress: sessionStorage.getItem('liquidatorAddress'),
        addressToLiquidate: sessionStorage.getItem('addressToLiquidate'),
        collateralAddress: sessionStorage.getItem('collateralAddress'),
        repayTokenAddress: sessionStorage.getItem('repayTokenAddress'),
        lpAddressProviderAddress: sessionStorage.getItem('lpAddressProviderAddress'),
        lpAddress: sessionStorage.getItem('lpAddress'),
        latestLpCoreAddress: sessionStorage.getItem('latestLpCoreAddress'),
        wss: sessionStorage.getItem('wss'),
        http: sessionStorage.getItem('http'),
        mnemonic: sessionStorage.getItem('mnemonic'),
        ethGasStationAPIKey: sessionStorage.getItem('ethGasStationAPIKey'),
        dynamicGasPrice: sessionStorage.getItem('dynamicGasPrice') == 'true',
        liquidationAmount: sessionStorage.getItem('liquidationAmount'),
        gasPrice: sessionStorage.getItem('gasPrice'),
        gasLimit: sessionStorage.getItem('gasLimit'),
        receiveATokens: sessionStorage.getItem('receiveATokens') == 'true'
      });
    } //add write to session storage onchange on the unputs

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state.liquidationAddressError, 'RENDER');
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }
      }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        error: this.state.formError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Liquidator Address",
        error: this.state.liquidationAddressError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        value: this.state.liquidatorAddress,
        onChange: function onChange(event) {
          _this2.setState({
            liquidatorAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Address To Liquidate",
        error: this.state.liquidationAddressError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        value: this.state.addressToLiquidate,
        onChange: function onChange(event) {
          return _this2.setState({
            addressToLiquidate: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Collateral Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        value: this.state.collateralAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            collateralAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Repay Token Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        value: this.state.repayTokenAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            repayTokenAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolAddressProvider Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        value: this.state.lpAddressProviderAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            lpAddressProviderAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPool Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        value: this.state.lpAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            lpAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolCore Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        value: this.state.latestLpCoreAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            latestLpCoreAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura WSS Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "URL",
        labelPosition: "right",
        value: this.state.wss,
        onChange: function onChange(event) {
          return _this2.setState({
            wss: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura HTTP Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "URL",
        labelPosition: "right",
        value: this.state.http,
        onChange: function onChange(event) {
          return _this2.setState({
            http: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Wallet Mneumonic / Seed Phrase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "String",
        labelPosition: "right",
        value: this.state.mnemonic,
        onChange: function onChange(event) {
          return _this2.setState({
            mnemonic: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Liquidation Amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "URL",
        labelPosition: "right",
        value: this.state.liquidationAmount,
        onChange: function onChange(event) {
          return _this2.setState({
            liquidationAmount: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Limit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "WEI",
        labelPosition: "right",
        value: this.state.gasLimit,
        onChange: function onChange(event) {
          return _this2.setState({
            gasLimit: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "ETH GAS STATION API KEY",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "String",
        labelPosition: "right",
        value: this.state.ethGasStationAPIKey,
        onChange: function onChange(event) {
          return _this2.setState({
            ethGasStationAPIKey: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "WEI",
        labelPosition: "right",
        value: this.state.gasPrice,
        onChange: function onChange(event) {
          return _this2.setState({
            gasPrice: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Use Dynamic Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
        toggle: true,
        checked: this.state.dynamicGasPrice,
        onChange: function onChange() {
          return _this2.setState(function (_ref) {
            var dynamicGasPrice = _ref.dynamicGasPrice;
            return {
              dynamicGasPrice: !dynamicGasPrice
            };
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Receive Collateral as aTokens",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
        toggle: true,
        checked: this.state.receiveATokens,
        onChange: function onChange() {
          return _this2.setState(function (_ref2) {
            var receiveATokens = _ref2.receiveATokens;
            return {
              receiveATokens: !receiveATokens
            };
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 11
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true,
        labelPosition: "left",
        icon: "download",
        content: "Save",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 11
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "button",
        content: "Upload Settings",
        labelPosition: "left",
        icon: "file",
        onClick: this.uploadSettings,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 11
        }
      }), __jsx("input", {
        type: "file",
        ref: this.hiddenFileInput,
        onChange: this.readSettings,
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Settings);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRpb25BZGRyZXNzRXJyb3IiLCJhZGRyZXNzVG9MaXF1aWRhdGVFcnJvciIsImNvbGxhdGVyYWxBZGRyZXNzRXJyb3IiLCJyZXBheVRva2VuQWRkcmVzc0Vycm9yIiwibHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NFcnJvciIsImxhdGVzdExwQ29yZUFkZHJlc3NFcnJvciIsIndzc0Vycm9yIiwiaHR0cEVycm9yIiwibW5lbW9uaWNFcnJvciIsImV0aEdhc1N0YXRpb25BUElLZXlFcnJvciIsImR5bmFtaWNHYXNQcmljZUVycm9yIiwibGlxdWlkYXRpb25BbW91bnRFcnJvciIsImdhc1ByaWNlRXJyb3IiLCJnYXNMaW1pdEVycm9yIiwicmVjZWl2ZUF0b2tlbnNFcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJlcnJvciIsIndlYjMiLCJ1dGlscyIsImNoZWNrQWRkcmVzc0NoZWNrc3VtIiwic2V0U3RhdGUiLCJjb25maWdGaWxlIiwiYmxvYiIsIkJsb2IiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsIkZpbGVTYXZlciIsInNhdmVBcyIsInVwZGF0ZVNlc3Npb25TdG9yYWdlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoaWRkZW5GaWxlSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJmaWxlVXBsb2FkZWQiLCJ0YXJnZXQiLCJmaWxlcyIsImZyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJyZXN1bHQiLCJwYXJzZSIsImZvcm1hdHRlZCIsInJlYWRBc1RleHQiLCJkYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsIm9uU3VibWl0IiwiY29udGVudCIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwidXBsb2FkU2V0dGluZ3MiLCJyZWFkU2V0dGluZ3MiLCJkaXNwbGF5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyx1QkFBaUIsRUFBRSxFQURiO0FBRU5DLHdCQUFrQixFQUFFLEVBRmQ7QUFHTkMsdUJBQWlCLEVBQUUsRUFIYjtBQUlOQyx1QkFBaUIsRUFBRSxFQUpiO0FBS05DLDhCQUF3QixFQUFFLEVBTHBCO0FBTU5DLGVBQVMsRUFBRSxFQU5MO0FBT05DLHlCQUFtQixFQUFFLEVBUGY7QUFRTkMsU0FBRyxFQUFFLEVBUkM7QUFTTkMsVUFBSSxFQUFFLEVBVEE7QUFVTkMsY0FBUSxFQUFFLEVBVko7QUFXTkMseUJBQW1CLEVBQUUsRUFYZjtBQVlOQyxxQkFBZSxFQUFFLEtBWlg7QUFhTkMsdUJBQWlCLEVBQUUsRUFiYjtBQWNOQyxjQUFRLEVBQUUsRUFkSjtBQWVOQyxjQUFRLEVBQUUsRUFmSjtBQWdCTkMsb0JBQWMsRUFBRSxLQWhCVjtBQWlCTkMsZUFBUyxFQUFFLEtBakJMO0FBa0JOQyw2QkFBdUIsRUFBRSxLQWxCbkI7QUFtQk5DLDZCQUF1QixFQUFFLEtBbkJuQjtBQW9CTkMsNEJBQXNCLEVBQUUsS0FwQmxCO0FBcUJOQyw0QkFBc0IsRUFBRSxLQXJC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Q0FEUTtBQUFBLFNBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBYkYsQ0FoTEYsRUF5TUUsTUFBQyx5REFBRDtBQUFTLGFBQUssTUFBZDtBQUFlLGNBQU0sRUFBQyxPQUF0QjtBQUE4QixlQUFPLEVBQUUsS0FBS3NCLEtBQUwsQ0FBV3NDLFlBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF6TUYsRUEwTUUsTUFBQyx3REFBRDtBQUFRLGVBQU8sTUFBZjtBQUFnQixxQkFBYSxFQUFDLE1BQTlCO0FBQXFDLFlBQUksRUFBQyxVQUExQztBQUFxRCxlQUFPLEVBQUMsTUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTFNRixFQTRNRSxNQUFDLHdEQUFEO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFPLEVBQUMsaUJBRlY7QUFHRSxxQkFBYSxFQUFDLE1BSGhCO0FBSUUsWUFBSSxFQUFDLE1BSlA7QUFLRSxlQUFPLEVBQUUsS0FBS0MsY0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTVNRixFQW1ORTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsV0FBRyxFQUFFLEtBQUt0QixlQUZaO0FBR0UsZ0JBQVEsRUFBRSxLQUFLdUIsWUFIakI7QUFJRSxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQW5ORixDQUZGLENBREY7QUErTkQ7Ozs7RUFyWW9CQywrQzs7QUF3WVJoRix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy5kMDZhYTYyZDIzY2Q5MzU3OWRmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIElucHV0LFxyXG4gIE1lc3NhZ2UsXHJcbiAgQ2hlY2tib3gsXHJcbiAgTGFiZWwsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcidcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vc3JjL3dlYjMuanMnXHJcblxyXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBsaXF1aWRhdG9yQWRkcmVzczogJycsXHJcbiAgICBhZGRyZXNzVG9MaXF1aWRhdGU6ICcnLFxyXG4gICAgY29sbGF0ZXJhbEFkZHJlc3M6ICcnLFxyXG4gICAgcmVwYXlUb2tlbkFkZHJlc3M6ICcnLFxyXG4gICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiAnJyxcclxuICAgIGxwQWRkcmVzczogJycsXHJcbiAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiAnJyxcclxuICAgIHdzczogJycsXHJcbiAgICBodHRwOiAnJyxcclxuICAgIG1uZW1vbmljOiAnJyxcclxuICAgIGV0aEdhc1N0YXRpb25BUElLZXk6ICcnLFxyXG4gICAgZHluYW1pY0dhc1ByaWNlOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQW1vdW50OiAnJyxcclxuICAgIGdhc1ByaWNlOiAnJyxcclxuICAgIGdhc0xpbWl0OiAnJyxcclxuICAgIHJlY2VpdmVBVG9rZW5zOiBmYWxzZSxcclxuICAgIGZvcm1FcnJvcjogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBhZGRyZXNzVG9MaXF1aWRhdGVFcnJvcjogZmFsc2UsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIHJlcGF5VG9rZW5BZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbHBBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIHdzc0Vycm9yOiBmYWxzZSxcclxuICAgIGh0dHBFcnJvcjogZmFsc2UsXHJcbiAgICBtbmVtb25pY0Vycm9yOiBmYWxzZSxcclxuICAgIGV0aEdhc1N0YXRpb25BUElLZXlFcnJvcjogZmFsc2UsXHJcbiAgICBkeW5hbWljR2FzUHJpY2VFcnJvcjogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFtb3VudEVycm9yOiBmYWxzZSxcclxuICAgIGdhc1ByaWNlRXJyb3I6IGZhbHNlLFxyXG4gICAgZ2FzTGltaXRFcnJvcjogZmFsc2UsXHJcbiAgICByZWNlaXZlQXRva2Vuc0Vycm9yOiBmYWxzZSxcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG5cclxuICAgIGxldCBlcnJvclxyXG5cclxuICAgIGlmICghd2ViMy53ZWIzLnV0aWxzLmNoZWNrQWRkcmVzc0NoZWNrc3VtKHRoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3MpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdGlvbkFkZHJlc3NFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBlcnJvciA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdlYjMud2ViMy51dGlscy5jaGVja0FkZHJlc3NDaGVja3N1bSh0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRpb25BZGRyZXNzRXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtRXJyb3I6IHRydWUgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbmZpZ0ZpbGUgPSB7XHJcbiAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiB0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHRoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlLFxyXG4gICAgICBjb2xsYXRlcmFsQWRkcmVzczogdGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzcyxcclxuICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHRoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogdGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3MsXHJcbiAgICAgIGxwQWRkcmVzczogdGhpcy5zdGF0ZS5scEFkZHJlc3MsXHJcbiAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHRoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgd3NzOiB0aGlzLnN0YXRlLndzcyxcclxuICAgICAgaHR0cDogdGhpcy5zdGF0ZS5odHRwLFxyXG4gICAgICBtbmVtb25pYzogdGhpcy5zdGF0ZS5tbmVtb25pYyxcclxuICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogdGhpcy5zdGF0ZS5ldGhHYXNTdGF0aW9uQVBJS2V5LFxyXG4gICAgICBkeW5hbWljR2FzUHJpY2U6IHRoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogdGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgZ2FzUHJpY2U6IHRoaXMuc3RhdGUuZ2FzUHJpY2UsXHJcbiAgICAgIGdhc0xpbWl0OiB0aGlzLnN0YXRlLmdhc0xpbWl0LFxyXG4gICAgICByZWNlaXZlQVRva2VuczogdGhpcy5zdGF0ZS5yZWNlaXZlQVRva2VucyxcclxuICAgIH1cclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGNvbmZpZ0ZpbGUpXSwge1xyXG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KVxyXG4gICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCAnc2V0dGluZ3MuanNvbicpXHJcbiAgICB0aGlzLnVwZGF0ZVNlc3Npb25TdG9yYWdlKHRoaXMuc3RhdGUpXHJcbiAgfVxyXG5cclxuICBoaWRkZW5GaWxlSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gIHVwbG9hZFNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuY3VycmVudC5jbGljaygpXHJcbiAgfVxyXG4gIHJlYWRTZXR0aW5ncyA9IChldmVudCkgPT4ge1xyXG4gICAgdmFyIGZpbGVVcGxvYWRlZCA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxyXG4gICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKVxyXG4gICAgZnIub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHJlc3VsdC5saXF1aWRhdG9yQWRkcmVzcyxcclxuICAgICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHJlc3VsdC5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHJlc3VsdC5jb2xsYXRlcmFsQWRkcmVzcyxcclxuICAgICAgICByZXBheVRva2VuQWRkcmVzczogcmVzdWx0LnJlcGF5VG9rZW5BZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgICBscEFkZHJlc3M6IHJlc3VsdC5scEFkZHJlc3MsXHJcbiAgICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogcmVzdWx0LmxhdGVzdExwQ29yZUFkZHJlc3MsXHJcbiAgICAgICAgd3NzOiByZXN1bHQud3NzLFxyXG4gICAgICAgIGh0dHA6IHJlc3VsdC5odHRwLFxyXG4gICAgICAgIG1uZW1vbmljOiByZXN1bHQubW5lbW9uaWMsXHJcbiAgICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogcmVzdWx0LmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgICAgZHluYW1pY0dhc1ByaWNlOiByZXN1bHQuZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiByZXN1bHQubGlxdWlkYXRpb25BbW91bnQsXHJcbiAgICAgICAgZ2FzUHJpY2U6IHJlc3VsdC5nYXNQcmljZSxcclxuICAgICAgICBnYXNMaW1pdDogcmVzdWx0Lmdhc0xpbWl0LFxyXG4gICAgICAgIHJlY2VpdmVBVG9rZW5zOiByZXN1bHQucmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UocmVzdWx0KVxyXG4gICAgICB2YXIgZm9ybWF0dGVkID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKVxyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgZnIucmVhZEFzVGV4dChmaWxlVXBsb2FkZWQpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZXNzaW9uU3RvcmFnZSA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXF1aWRhdG9yQWRkcmVzcycsIGRhdGEubGlxdWlkYXRvckFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhZGRyZXNzVG9MaXF1aWRhdGUnLCBkYXRhLmFkZHJlc3NUb0xpcXVpZGF0ZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NvbGxhdGVyYWxBZGRyZXNzJywgZGF0YS5jb2xsYXRlcmFsQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlcGF5VG9rZW5BZGRyZXNzJywgZGF0YS5yZXBheVRva2VuQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICdscEFkZHJlc3NQcm92aWRlckFkZHJlc3MnLFxyXG4gICAgICBkYXRhLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc1xyXG4gICAgKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbHBBZGRyZXNzJywgZGF0YS5scEFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsYXRlc3RMcENvcmVBZGRyZXNzJywgZGF0YS5sYXRlc3RMcENvcmVBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd3NzJywgZGF0YS53c3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdodHRwJywgZGF0YS5odHRwKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbW5lbW9uaWMnLCBkYXRhLm1uZW1vbmljKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZXRoR2FzU3RhdGlvbkFQSUtleScsIGRhdGEuZXRoR2FzU3RhdGlvbkFQSUtleSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2R5bmFtaWNHYXNQcmljZScsIGRhdGEuZHluYW1pY0dhc1ByaWNlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGlxdWlkYXRpb25BbW91bnQnLCBkYXRhLmxpcXVpZGF0aW9uQW1vdW50KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2FzUHJpY2UnLCBkYXRhLmdhc1ByaWNlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2FzTGltaXQnLCBkYXRhLmdhc0xpbWl0KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVjZWl2ZUFUb2tlbnMnLCBkYXRhLnJlY2VpdmVBVG9rZW5zKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xpcXVpZGF0b3JBZGRyZXNzJyksXHJcbiAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWRkcmVzc1RvTGlxdWlkYXRlJyksXHJcbiAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb2xsYXRlcmFsQWRkcmVzcycpLFxyXG4gICAgICByZXBheVRva2VuQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVwYXlUb2tlbkFkZHJlc3MnKSxcclxuICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgICdscEFkZHJlc3NQcm92aWRlckFkZHJlc3MnXHJcbiAgICAgICksXHJcbiAgICAgIGxwQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbHBBZGRyZXNzJyksXHJcbiAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhdGVzdExwQ29yZUFkZHJlc3MnKSxcclxuICAgICAgd3NzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3c3MnKSxcclxuICAgICAgaHR0cDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaHR0cCcpLFxyXG4gICAgICBtbmVtb25pYzogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbW5lbW9uaWMnKSxcclxuICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZXRoR2FzU3RhdGlvbkFQSUtleScpLFxyXG4gICAgICBkeW5hbWljR2FzUHJpY2U6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2R5bmFtaWNHYXNQcmljZScpID09ICd0cnVlJyxcclxuICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xpcXVpZGF0aW9uQW1vdW50JyksXHJcbiAgICAgIGdhc1ByaWNlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXNQcmljZScpLFxyXG4gICAgICBnYXNMaW1pdDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FzTGltaXQnKSxcclxuICAgICAgcmVjZWl2ZUFUb2tlbnM6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlY2VpdmVBVG9rZW5zJykgPT0gJ3RydWUnLFxyXG4gICAgfSlcclxuICB9XHJcbiAgLy9hZGQgd3JpdGUgdG8gc2Vzc2lvbiBzdG9yYWdlIG9uY2hhbmdlIG9uIHRoZSB1bnB1dHNcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yLCAnUkVOREVSJylcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPkxpcXVpZGF0aW9uIFNldHRpbmdzPC9oMT5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9e3RoaXMuc3RhdGUuZm9ybUVycm9yfT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaXF1aWRhdG9yIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlxdWlkYXRpb25BZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0b3JBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgVG8gTGlxdWlkYXRlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NUb0xpcXVpZGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiQ29sbGF0ZXJhbCBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGF0ZXJhbEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiUmVwYXkgVG9rZW4gQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGF5VG9rZW5BZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxlbmRpbmdQb29sQWRkcmVzc1Byb3ZpZGVyIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxlbmRpbmdQb29sIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbHBBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxlbmRpbmdQb29sQ29yZSBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXRlc3RMcENvcmVBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkluZnVyYSBXU1MgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB3c3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkluZnVyYSBIVFRQIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5odHRwfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGh0dHA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiV2FsbGV0IE1uZXVtb25pYyAvIFNlZWQgUGhyYXNlXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW5lbW9uaWN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW5lbW9uaWM6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiTGlxdWlkYXRpb24gQW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRpb25BbW91bnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJHYXMgTGltaXRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNMaW1pdH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNMaW1pdDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJFVEggR0FTIFNUQVRJT04gQVBJIEtFWVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXRoR2FzU3RhdGlvbkFQSUtleTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJHYXMgUHJpY2VcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNQcmljZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiVXNlIER5bmFtaWMgR2FzIFByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgZHluYW1pY0dhc1ByaWNlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY0dhc1ByaWNlOiAhZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlJlY2VpdmUgQ29sbGF0ZXJhbCBhcyBhVG9rZW5zXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyByZWNlaXZlQVRva2VucyB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBVG9rZW5zOiAhcmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbGFiZWxQb3NpdGlvbj1cImxlZnRcIiBpY29uPVwiZG93bmxvYWRcIiBjb250ZW50PVwiU2F2ZVwiIC8+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlVwbG9hZCBTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgaWNvbj1cImZpbGVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwbG9hZFNldHRpbmdzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5oaWRkZW5GaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJlYWRTZXR0aW5nc31cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9