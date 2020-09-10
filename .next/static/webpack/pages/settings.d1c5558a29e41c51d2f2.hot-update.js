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
      var error = false;
      Object.keys(_this.state).map(function (key) {
        if (key.endsWith('Address')) {
          var validAddress = _src_web3_js__WEBPACK_IMPORTED_MODULE_11___default.a.web3.utils.checkAddressChecksum(_this.state[key]);
          var errorKey = key + 'Error';
          _this.state[errorKey] = validAddress;
          error = true;
        }
      });

      if (error) {
        console.log('NOPE');

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
        error: this.state.addressToLiquidateError ? {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRpb25BZGRyZXNzRXJyb3IiLCJhZGRyZXNzVG9MaXF1aWRhdGVFcnJvciIsImNvbGxhdGVyYWxBZGRyZXNzRXJyb3IiLCJyZXBheVRva2VuQWRkcmVzc0Vycm9yIiwibHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NFcnJvciIsImxhdGVzdExwQ29yZUFkZHJlc3NFcnJvciIsIndzc0Vycm9yIiwiaHR0cEVycm9yIiwibW5lbW9uaWNFcnJvciIsImV0aEdhc1N0YXRpb25BUElLZXlFcnJvciIsImR5bmFtaWNHYXNQcmljZUVycm9yIiwibGlxdWlkYXRpb25BbW91bnRFcnJvciIsImdhc1ByaWNlRXJyb3IiLCJnYXNMaW1pdEVycm9yIiwicmVjZWl2ZUF0b2tlbnNFcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJlcnJvciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmRzV2l0aCIsInZhbGlkQWRkcmVzcyIsIndlYjMiLCJ1dGlscyIsImNoZWNrQWRkcmVzc0NoZWNrc3VtIiwiZXJyb3JLZXkiLCJzZXRTdGF0ZSIsImNvbmZpZ0ZpbGUiLCJibG9iIiwiQmxvYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiRmlsZVNhdmVyIiwic2F2ZUFzIiwidXBkYXRlU2Vzc2lvblN0b3JhZ2UiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImhpZGRlbkZpbGVJbnB1dCIsImN1cnJlbnQiLCJjbGljayIsImZpbGVVcGxvYWRlZCIsInRhcmdldCIsImZpbGVzIiwiZnIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInJlc3VsdCIsInBhcnNlIiwiZm9ybWF0dGVkIiwicmVhZEFzVGV4dCIsImRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwib25TdWJtaXQiLCJjb250ZW50IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJ1cGxvYWRTZXR0aW5ncyIsInJlYWRTZXR0aW5ncyIsImRpc3BsYXkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBOztJQUVNQSxROzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLHVCQUFpQixFQUFFLEVBRGI7QUFFTkMsd0JBQWtCLEVBQUUsRUFGZDtBQUdOQyx1QkFBaUIsRUFBRSxFQUhiO0FBSU5DLHVCQUFpQixFQUFFLEVBSmI7QUFLTkMsOEJBQXdCLEVBQUUsRUFMcEI7QUFNTkMsZUFBUyxFQUFFLEVBTkw7QUFPTkMseUJBQW1CLEVBQUUsRUFQZjtBQVFOQyxTQUFHLEVBQUUsRUFSQztBQVNOQyxVQUFJLEVBQUUsRUFUQTtBQVVOQyxjQUFRLEVBQUUsRUFWSjtBQVdOQyx5QkFBbUIsRUFBRSxFQVhmO0FBWU5DLHFCQUFlLEVBQUUsS0FaWDtBQWFOQyx1QkFBaUIsRUFBRSxFQWJiO0FBY05DLGNBQVEsRUFBRSxFQWRKO0FBZU5DLGNBQVEsRUFBRSxFQWZKO0FBZ0JOQyxvQkFBYyxFQUFFLEtBaEJWO0FBaUJOQyxlQUFTLEVBQUUsS0FqQkw7QUFrQk5DLDZCQUF1QixFQUFFLEtBbEJuQjtBQW1CTkMsNkJB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QUFDa0MsUUFBTCxDQUFjO0FBQUEsZ0JBQUdsQyxjQUFILFNBQUdBLGNBQUg7QUFBQSxtQkFBeUI7QUFDckNBLDRCQUFjLEVBQUUsQ0FBQ0E7QUFEb0IsYUFBekI7QUFBQSxXQUFkLENBRFE7QUFBQSxTQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQWJGLENBaExGLEVBeU1FLE1BQUMseURBQUQ7QUFBUyxhQUFLLE1BQWQ7QUFBZSxjQUFNLEVBQUMsT0FBdEI7QUFBOEIsZUFBTyxFQUFFLEtBQUtzQixLQUFMLENBQVc2QyxZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBek1GLEVBME1FLE1BQUMsd0RBQUQ7QUFBUSxlQUFPLE1BQWY7QUFBZ0IscUJBQWEsRUFBQyxNQUE5QjtBQUFxQyxZQUFJLEVBQUMsVUFBMUM7QUFBcUQsZUFBTyxFQUFDLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUExTUYsRUE0TUUsTUFBQyx3REFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsZUFBTyxFQUFDLGlCQUZWO0FBR0UscUJBQWEsRUFBQyxNQUhoQjtBQUlFLFlBQUksRUFBQyxNQUpQO0FBS0UsZUFBTyxFQUFFLEtBQUtDLGNBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE1TUYsRUFtTkU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUcsRUFBRSxLQUFLdEIsZUFGWjtBQUdFLGdCQUFRLEVBQUUsS0FBS3VCLFlBSGpCO0FBSUUsYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFuTkYsQ0FGRixDQURGO0FBK05EOzs7O0VBcllvQkMsK0M7O0FBd1lSdkYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2V0dGluZ3MuZDFjNTU1OGEyOWU0MWM1MWQyZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIEJ1dHRvbixcclxuICBJbnB1dCxcclxuICBNZXNzYWdlLFxyXG4gIENoZWNrYm94LFxyXG4gIExhYmVsLFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL3NyYy93ZWIzLmpzJ1xyXG5cclxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbGlxdWlkYXRvckFkZHJlc3M6ICcnLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlOiAnJyxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzOiAnJyxcclxuICAgIHJlcGF5VG9rZW5BZGRyZXNzOiAnJyxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3M6ICcnLFxyXG4gICAgbGF0ZXN0THBDb3JlQWRkcmVzczogJycsXHJcbiAgICB3c3M6ICcnLFxyXG4gICAgaHR0cDogJycsXHJcbiAgICBtbmVtb25pYzogJycsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiAnJyxcclxuICAgIGR5bmFtaWNHYXNQcmljZTogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFtb3VudDogJycsXHJcbiAgICBnYXNQcmljZTogJycsXHJcbiAgICBnYXNMaW1pdDogJycsXHJcbiAgICByZWNlaXZlQVRva2VuczogZmFsc2UsXHJcbiAgICBmb3JtRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3I6IGZhbHNlLFxyXG4gICAgY29sbGF0ZXJhbEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICByZXBheVRva2VuQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICB3c3NFcnJvcjogZmFsc2UsXHJcbiAgICBodHRwRXJyb3I6IGZhbHNlLFxyXG4gICAgbW5lbW9uaWNFcnJvcjogZmFsc2UsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5RXJyb3I6IGZhbHNlLFxyXG4gICAgZHluYW1pY0dhc1ByaWNlRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnRFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGdhc0xpbWl0RXJyb3I6IGZhbHNlLFxyXG4gICAgcmVjZWl2ZUF0b2tlbnNFcnJvcjogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuXHJcbiAgICBsZXQgZXJyb3IgPSBmYWxzZVxyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChrZXkuZW5kc1dpdGgoJ0FkZHJlc3MnKSkge1xyXG4gICAgICAgIHZhciB2YWxpZEFkZHJlc3MgPSB3ZWIzLndlYjMudXRpbHMuY2hlY2tBZGRyZXNzQ2hlY2tzdW0odGhpcy5zdGF0ZVtrZXldKVxyXG4gICAgICAgIHZhciBlcnJvcktleSA9IGtleSArICdFcnJvcidcclxuICAgICAgICB0aGlzLnN0YXRlW2Vycm9yS2V5XSA9IHZhbGlkQWRkcmVzc1xyXG4gICAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnTk9QRScpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtRXJyb3I6IHRydWUgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbmZpZ0ZpbGUgPSB7XHJcbiAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiB0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHRoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlLFxyXG4gICAgICBjb2xsYXRlcmFsQWRkcmVzczogdGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzcyxcclxuICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHRoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogdGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3MsXHJcbiAgICAgIGxwQWRkcmVzczogdGhpcy5zdGF0ZS5scEFkZHJlc3MsXHJcbiAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHRoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgd3NzOiB0aGlzLnN0YXRlLndzcyxcclxuICAgICAgaHR0cDogdGhpcy5zdGF0ZS5odHRwLFxyXG4gICAgICBtbmVtb25pYzogdGhpcy5zdGF0ZS5tbmVtb25pYyxcclxuICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogdGhpcy5zdGF0ZS5ldGhHYXNTdGF0aW9uQVBJS2V5LFxyXG4gICAgICBkeW5hbWljR2FzUHJpY2U6IHRoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogdGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgZ2FzUHJpY2U6IHRoaXMuc3RhdGUuZ2FzUHJpY2UsXHJcbiAgICAgIGdhc0xpbWl0OiB0aGlzLnN0YXRlLmdhc0xpbWl0LFxyXG4gICAgICByZWNlaXZlQVRva2VuczogdGhpcy5zdGF0ZS5yZWNlaXZlQVRva2VucyxcclxuICAgIH1cclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGNvbmZpZ0ZpbGUpXSwge1xyXG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KVxyXG4gICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCAnc2V0dGluZ3MuanNvbicpXHJcbiAgICB0aGlzLnVwZGF0ZVNlc3Npb25TdG9yYWdlKHRoaXMuc3RhdGUpXHJcbiAgfVxyXG5cclxuICBoaWRkZW5GaWxlSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gIHVwbG9hZFNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuY3VycmVudC5jbGljaygpXHJcbiAgfVxyXG4gIHJlYWRTZXR0aW5ncyA9IChldmVudCkgPT4ge1xyXG4gICAgdmFyIGZpbGVVcGxvYWRlZCA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxyXG4gICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKVxyXG4gICAgZnIub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHJlc3VsdC5saXF1aWRhdG9yQWRkcmVzcyxcclxuICAgICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHJlc3VsdC5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHJlc3VsdC5jb2xsYXRlcmFsQWRkcmVzcyxcclxuICAgICAgICByZXBheVRva2VuQWRkcmVzczogcmVzdWx0LnJlcGF5VG9rZW5BZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgICBscEFkZHJlc3M6IHJlc3VsdC5scEFkZHJlc3MsXHJcbiAgICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogcmVzdWx0LmxhdGVzdExwQ29yZUFkZHJlc3MsXHJcbiAgICAgICAgd3NzOiByZXN1bHQud3NzLFxyXG4gICAgICAgIGh0dHA6IHJlc3VsdC5odHRwLFxyXG4gICAgICAgIG1uZW1vbmljOiByZXN1bHQubW5lbW9uaWMsXHJcbiAgICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogcmVzdWx0LmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgICAgZHluYW1pY0dhc1ByaWNlOiByZXN1bHQuZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiByZXN1bHQubGlxdWlkYXRpb25BbW91bnQsXHJcbiAgICAgICAgZ2FzUHJpY2U6IHJlc3VsdC5nYXNQcmljZSxcclxuICAgICAgICBnYXNMaW1pdDogcmVzdWx0Lmdhc0xpbWl0LFxyXG4gICAgICAgIHJlY2VpdmVBVG9rZW5zOiByZXN1bHQucmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UocmVzdWx0KVxyXG4gICAgICB2YXIgZm9ybWF0dGVkID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKVxyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgZnIucmVhZEFzVGV4dChmaWxlVXBsb2FkZWQpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZXNzaW9uU3RvcmFnZSA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXF1aWRhdG9yQWRkcmVzcycsIGRhdGEubGlxdWlkYXRvckFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhZGRyZXNzVG9MaXF1aWRhdGUnLCBkYXRhLmFkZHJlc3NUb0xpcXVpZGF0ZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NvbGxhdGVyYWxBZGRyZXNzJywgZGF0YS5jb2xsYXRlcmFsQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlcGF5VG9rZW5BZGRyZXNzJywgZGF0YS5yZXBheVRva2VuQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICdscEFkZHJlc3NQcm92aWRlckFkZHJlc3MnLFxyXG4gICAgICBkYXRhLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc1xyXG4gICAgKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbHBBZGRyZXNzJywgZGF0YS5scEFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsYXRlc3RMcENvcmVBZGRyZXNzJywgZGF0YS5sYXRlc3RMcENvcmVBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd3NzJywgZGF0YS53c3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdodHRwJywgZGF0YS5odHRwKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbW5lbW9uaWMnLCBkYXRhLm1uZW1vbmljKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZXRoR2FzU3RhdGlvbkFQSUtleScsIGRhdGEuZXRoR2FzU3RhdGlvbkFQSUtleSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2R5bmFtaWNHYXNQcmljZScsIGRhdGEuZHluYW1pY0dhc1ByaWNlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGlxdWlkYXRpb25BbW91bnQnLCBkYXRhLmxpcXVpZGF0aW9uQW1vdW50KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2FzUHJpY2UnLCBkYXRhLmdhc1ByaWNlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2FzTGltaXQnLCBkYXRhLmdhc0xpbWl0KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVjZWl2ZUFUb2tlbnMnLCBkYXRhLnJlY2VpdmVBVG9rZW5zKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xpcXVpZGF0b3JBZGRyZXNzJyksXHJcbiAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWRkcmVzc1RvTGlxdWlkYXRlJyksXHJcbiAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb2xsYXRlcmFsQWRkcmVzcycpLFxyXG4gICAgICByZXBheVRva2VuQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVwYXlUb2tlbkFkZHJlc3MnKSxcclxuICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgICdscEFkZHJlc3NQcm92aWRlckFkZHJlc3MnXHJcbiAgICAgICksXHJcbiAgICAgIGxwQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbHBBZGRyZXNzJyksXHJcbiAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhdGVzdExwQ29yZUFkZHJlc3MnKSxcclxuICAgICAgd3NzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3c3MnKSxcclxuICAgICAgaHR0cDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaHR0cCcpLFxyXG4gICAgICBtbmVtb25pYzogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbW5lbW9uaWMnKSxcclxuICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZXRoR2FzU3RhdGlvbkFQSUtleScpLFxyXG4gICAgICBkeW5hbWljR2FzUHJpY2U6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2R5bmFtaWNHYXNQcmljZScpID09ICd0cnVlJyxcclxuICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xpcXVpZGF0aW9uQW1vdW50JyksXHJcbiAgICAgIGdhc1ByaWNlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXNQcmljZScpLFxyXG4gICAgICBnYXNMaW1pdDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FzTGltaXQnKSxcclxuICAgICAgcmVjZWl2ZUFUb2tlbnM6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlY2VpdmVBVG9rZW5zJykgPT0gJ3RydWUnLFxyXG4gICAgfSlcclxuICB9XHJcbiAgLy9hZGQgd3JpdGUgdG8gc2Vzc2lvbiBzdG9yYWdlIG9uY2hhbmdlIG9uIHRoZSB1bnB1dHNcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yLCAnUkVOREVSJylcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPkxpcXVpZGF0aW9uIFNldHRpbmdzPC9oMT5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9e3RoaXMuc3RhdGUuZm9ybUVycm9yfT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaXF1aWRhdG9yIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlxdWlkYXRpb25BZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0b3JBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgVG8gTGlxdWlkYXRlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NUb0xpcXVpZGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiQ29sbGF0ZXJhbCBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGF0ZXJhbEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiUmVwYXkgVG9rZW4gQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGF5VG9rZW5BZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxlbmRpbmdQb29sQWRkcmVzc1Byb3ZpZGVyIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxlbmRpbmdQb29sIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbHBBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxlbmRpbmdQb29sQ29yZSBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXRlc3RMcENvcmVBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkluZnVyYSBXU1MgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB3c3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkluZnVyYSBIVFRQIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5odHRwfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGh0dHA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiV2FsbGV0IE1uZXVtb25pYyAvIFNlZWQgUGhyYXNlXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW5lbW9uaWN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW5lbW9uaWM6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiTGlxdWlkYXRpb24gQW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRpb25BbW91bnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJHYXMgTGltaXRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNMaW1pdH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNMaW1pdDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJFVEggR0FTIFNUQVRJT04gQVBJIEtFWVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXRoR2FzU3RhdGlvbkFQSUtleTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJHYXMgUHJpY2VcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNQcmljZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiVXNlIER5bmFtaWMgR2FzIFByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgZHluYW1pY0dhc1ByaWNlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY0dhc1ByaWNlOiAhZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlJlY2VpdmUgQ29sbGF0ZXJhbCBhcyBhVG9rZW5zXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyByZWNlaXZlQVRva2VucyB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBVG9rZW5zOiAhcmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbGFiZWxQb3NpdGlvbj1cImxlZnRcIiBpY29uPVwiZG93bmxvYWRcIiBjb250ZW50PVwiU2F2ZVwiIC8+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlVwbG9hZCBTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgaWNvbj1cImZpbGVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwbG9hZFNldHRpbmdzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5oaWRkZW5GaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJlYWRTZXR0aW5nc31cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9