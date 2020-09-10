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

          _this.setState({
            key: true
          });

          error = true;
        }
      });

      if (!_src_web3_js__WEBPACK_IMPORTED_MODULE_11___default.a.web3.utils.checkAddressChecksum(_this.state.liquidatorAddress)) {
        _this.setState({
          liquidationAddressError: true
        });

        error = true;
      }

      if (!_src_web3_js__WEBPACK_IMPORTED_MODULE_11___default.a.web3.utils.checkAddressChecksum(_this.state.addressToLiquidate)) {
        _this.setState({
          addressToLiquidateError: true
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
          lineNumber: 189,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 9
        }
      }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        error: this.state.formError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
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
          lineNumber: 193,
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
          lineNumber: 201,
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
          lineNumber: 211,
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
          lineNumber: 219,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Collateral Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
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
          lineNumber: 232,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Repay Token Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
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
          lineNumber: 243,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolAddressProvider Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
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
          lineNumber: 255,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPool Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
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
          lineNumber: 268,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolCore Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
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
          lineNumber: 280,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura WSS Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
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
          lineNumber: 291,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura HTTP Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
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
          lineNumber: 301,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Wallet Mneumonic / Seed Phrase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
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
          lineNumber: 312,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Liquidation Amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
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
          lineNumber: 324,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Limit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
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
          lineNumber: 334,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "ETH GAS STATION API KEY",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
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
          lineNumber: 346,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
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
          lineNumber: 357,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Use Dynamic Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
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
          lineNumber: 369,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Receive Collateral as aTokens",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
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
          lineNumber: 381,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
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
          lineNumber: 393,
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
          lineNumber: 395,
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
          lineNumber: 402,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRpb25BZGRyZXNzRXJyb3IiLCJhZGRyZXNzVG9MaXF1aWRhdGVFcnJvciIsImNvbGxhdGVyYWxBZGRyZXNzRXJyb3IiLCJyZXBheVRva2VuQWRkcmVzc0Vycm9yIiwibHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NFcnJvciIsImxhdGVzdExwQ29yZUFkZHJlc3NFcnJvciIsIndzc0Vycm9yIiwiaHR0cEVycm9yIiwibW5lbW9uaWNFcnJvciIsImV0aEdhc1N0YXRpb25BUElLZXlFcnJvciIsImR5bmFtaWNHYXNQcmljZUVycm9yIiwibGlxdWlkYXRpb25BbW91bnRFcnJvciIsImdhc1ByaWNlRXJyb3IiLCJnYXNMaW1pdEVycm9yIiwicmVjZWl2ZUF0b2tlbnNFcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJlcnJvciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmRzV2l0aCIsInZhbGlkQWRkcmVzcyIsIndlYjMiLCJ1dGlscyIsImNoZWNrQWRkcmVzc0NoZWNrc3VtIiwic2V0U3RhdGUiLCJjb25maWdGaWxlIiwiYmxvYiIsIkJsb2IiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsIkZpbGVTYXZlciIsInNhdmVBcyIsInVwZGF0ZVNlc3Npb25TdG9yYWdlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoaWRkZW5GaWxlSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJmaWxlVXBsb2FkZWQiLCJ0YXJnZXQiLCJmaWxlcyIsImZyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJyZXN1bHQiLCJwYXJzZSIsImZvcm1hdHRlZCIsInJlYWRBc1RleHQiLCJkYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsIm9uU3VibWl0IiwiY29udGVudCIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwidXBsb2FkU2V0dGluZ3MiLCJyZWFkU2V0dGluZ3MiLCJkaXNwbGF5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyx1QkFBaUIsRUFBRSxFQURiO0FBRU5DLHdCQUFrQixFQUFFLEVBRmQ7QUFHTkMsdUJBQWlCLEVBQUUsRUFIYjtBQUlOQyx1QkFBaUIsRUFBRSxFQUpiO0FBS05DLDhCQUF3QixFQUFFLEVBTHBCO0FBTU5DLGVBQVMsRUFBRSxFQU5MO0FBT05DLHlCQUFtQixFQUFFLEVBUGY7QUFRTkMsU0FBRyxFQUFFLEVBUkM7QUFTTkMsVUFBSSxFQUFFLEVBVEE7QUFVTkMsY0FBUSxFQUFFLEVBVko7QUFXTkMseUJBQW1CLEVBQUUsRUFYZjtBQVlOQyxxQkFBZSxFQUFFLEtBWlg7QUFhTkMsdUJBQWlCLEVBQUUsRUFiYjtBQWNOQyxjQUFRLEVBQUUsRUFkSjtBQWVOQyxjQUFRLEVBQUUsRUFmSjtBQWdCTkMsb0JBQWMsRUFBRSxLQWhCVjtBQWlCTkMsZUFBUyxFQUFFLEtBakJMO0FBa0JOQyw2QkFBdUIsRUFBRSxLQWxCbkI7QUFtQk5DLDZCQUF1QixFQUFFLEtB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WUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFHLEVBQUUsS0FBS3RCLGVBRlo7QUFHRSxnQkFBUSxFQUFFLEtBQUt1QixZQUhqQjtBQUlFLGFBQUssRUFBRTtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbk5GLENBRkYsQ0FERjtBQStORDs7OztFQTdZb0JDLCtDOztBQWdaUnRGLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLjlmZDk5NjVjYWQ5YTZjYWY1MWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgTWVzc2FnZSxcclxuICBDaGVja2JveCxcclxuICBMYWJlbCxcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJ1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9zcmMvd2ViMy5qcydcclxuXHJcbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGxpcXVpZGF0b3JBZGRyZXNzOiAnJyxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogJycsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzczogJycsXHJcbiAgICByZXBheVRva2VuQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6ICcnLFxyXG4gICAgbHBBZGRyZXNzOiAnJyxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6ICcnLFxyXG4gICAgd3NzOiAnJyxcclxuICAgIGh0dHA6ICcnLFxyXG4gICAgbW5lbW9uaWM6ICcnLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleTogJycsXHJcbiAgICBkeW5hbWljR2FzUHJpY2U6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnQ6ICcnLFxyXG4gICAgZ2FzUHJpY2U6ICcnLFxyXG4gICAgZ2FzTGltaXQ6ICcnLFxyXG4gICAgcmVjZWl2ZUFUb2tlbnM6IGZhbHNlLFxyXG4gICAgZm9ybUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yOiBmYWxzZSxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgcmVwYXlUb2tlbkFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBsYXRlc3RMcENvcmVBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgd3NzRXJyb3I6IGZhbHNlLFxyXG4gICAgaHR0cEVycm9yOiBmYWxzZSxcclxuICAgIG1uZW1vbmljRXJyb3I6IGZhbHNlLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yOiBmYWxzZSxcclxuICAgIGR5bmFtaWNHYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQW1vdW50RXJyb3I6IGZhbHNlLFxyXG4gICAgZ2FzUHJpY2VFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNMaW1pdEVycm9yOiBmYWxzZSxcclxuICAgIHJlY2VpdmVBdG9rZW5zRXJyb3I6IGZhbHNlLFxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgbGV0IGVycm9yID0gZmFsc2VcclxuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBpZiAoa2V5LmVuZHNXaXRoKCdBZGRyZXNzJykpIHtcclxuICAgICAgICB2YXIgdmFsaWRBZGRyZXNzID0gd2ViMy53ZWIzLnV0aWxzLmNoZWNrQWRkcmVzc0NoZWNrc3VtKHRoaXMuc3RhdGVba2V5XSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsga2V5OiB0cnVlIH0pXHJcbiAgICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCF3ZWIzLndlYjMudXRpbHMuY2hlY2tBZGRyZXNzQ2hlY2tzdW0odGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzcykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghd2ViMy53ZWIzLnV0aWxzLmNoZWNrQWRkcmVzc0NoZWNrc3VtKHRoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtRXJyb3I6IHRydWUgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbmZpZ0ZpbGUgPSB7XHJcbiAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiB0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHRoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlLFxyXG4gICAgICBjb2xsYXRlcmFsQWRkcmVzczogdGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzcyxcclxuICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHRoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogdGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3MsXHJcbiAgICAgIGxwQWRkcmVzczogdGhpcy5zdGF0ZS5scEFkZHJlc3MsXHJcbiAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHRoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgd3NzOiB0aGlzLnN0YXRlLndzcyxcclxuICAgICAgaHR0cDogdGhpcy5zdGF0ZS5odHRwLFxyXG4gICAgICBtbmVtb25pYzogdGhpcy5zdGF0ZS5tbmVtb25pYyxcclxuICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogdGhpcy5zdGF0ZS5ldGhHYXNTdGF0aW9uQVBJS2V5LFxyXG4gICAgICBkeW5hbWljR2FzUHJpY2U6IHRoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogdGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgZ2FzUHJpY2U6IHRoaXMuc3RhdGUuZ2FzUHJpY2UsXHJcbiAgICAgIGdhc0xpbWl0OiB0aGlzLnN0YXRlLmdhc0xpbWl0LFxyXG4gICAgICByZWNlaXZlQVRva2VuczogdGhpcy5zdGF0ZS5yZWNlaXZlQVRva2VucyxcclxuICAgIH1cclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGNvbmZpZ0ZpbGUpXSwge1xyXG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KVxyXG4gICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCAnc2V0dGluZ3MuanNvbicpXHJcbiAgICB0aGlzLnVwZGF0ZVNlc3Npb25TdG9yYWdlKHRoaXMuc3RhdGUpXHJcbiAgfVxyXG5cclxuICBoaWRkZW5GaWxlSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gIHVwbG9hZFNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuY3VycmVudC5jbGljaygpXHJcbiAgfVxyXG4gIHJlYWRTZXR0aW5ncyA9IChldmVudCkgPT4ge1xyXG4gICAgdmFyIGZpbGVVcGxvYWRlZCA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxyXG4gICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKVxyXG4gICAgZnIub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHJlc3VsdC5saXF1aWRhdG9yQWRkcmVzcyxcclxuICAgICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHJlc3VsdC5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHJlc3VsdC5jb2xsYXRlcmFsQWRkcmVzcyxcclxuICAgICAgICByZXBheVRva2VuQWRkcmVzczogcmVzdWx0LnJlcGF5VG9rZW5BZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgICBscEFkZHJlc3M6IHJlc3VsdC5scEFkZHJlc3MsXHJcbiAgICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogcmVzdWx0LmxhdGVzdExwQ29yZUFkZHJlc3MsXHJcbiAgICAgICAgd3NzOiByZXN1bHQud3NzLFxyXG4gICAgICAgIGh0dHA6IHJlc3VsdC5odHRwLFxyXG4gICAgICAgIG1uZW1vbmljOiByZXN1bHQubW5lbW9uaWMsXHJcbiAgICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogcmVzdWx0LmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgICAgZHluYW1pY0dhc1ByaWNlOiByZXN1bHQuZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiByZXN1bHQubGlxdWlkYXRpb25BbW91bnQsXHJcbiAgICAgICAgZ2FzUHJpY2U6IHJlc3VsdC5nYXNQcmljZSxcclxuICAgICAgICBnYXNMaW1pdDogcmVzdWx0Lmdhc0xpbWl0LFxyXG4gICAgICAgIHJlY2VpdmVBVG9rZW5zOiByZXN1bHQucmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UocmVzdWx0KVxyXG4gICAgICB2YXIgZm9ybWF0dGVkID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKVxyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgZnIucmVhZEFzVGV4dChmaWxlVXBsb2FkZWQpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZXNzaW9uU3RvcmFnZSA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXF1aWRhdG9yQWRkcmVzcycsIGRhdGEubGlxdWlkYXRvckFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhZGRyZXNzVG9MaXF1aWRhdGUnLCBkYXRhLmFkZHJlc3NUb0xpcXVpZGF0ZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NvbGxhdGVyYWxBZGRyZXNzJywgZGF0YS5jb2xsYXRlcmFsQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlcGF5VG9rZW5BZGRyZXNzJywgZGF0YS5yZXBheVRva2VuQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICdscEFkZHJlc3NQcm92aWRlckFkZHJlc3MnLFxyXG4gICAgICBkYXRhLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc1xyXG4gICAgKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbHBBZGRyZXNzJywgZGF0YS5scEFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsYXRlc3RMcENvcmVBZGRyZXNzJywgZGF0YS5sYXRlc3RMcENvcmVBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd3NzJywgZGF0YS53c3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdodHRwJywgZGF0YS5odHRwKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbW5lbW9uaWMnLCBkYXRhLm1uZW1vbmljKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZXRoR2FzU3RhdGlvbkFQSUtleScsIGRhdGEuZXRoR2FzU3RhdGlvbkFQSUtleSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2R5bmFtaWNHYXNQcmljZScsIGRhdGEuZHluYW1pY0dhc1ByaWNlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGlxdWlkYXRpb25BbW91bnQnLCBkYXRhLmxpcXVpZGF0aW9uQW1vdW50KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2FzUHJpY2UnLCBkYXRhLmdhc1ByaWNlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2FzTGltaXQnLCBkYXRhLmdhc0xpbWl0KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVjZWl2ZUFUb2tlbnMnLCBkYXRhLnJlY2VpdmVBVG9rZW5zKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xpcXVpZGF0b3JBZGRyZXNzJyksXHJcbiAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWRkcmVzc1RvTGlxdWlkYXRlJyksXHJcbiAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjb2xsYXRlcmFsQWRkcmVzcycpLFxyXG4gICAgICByZXBheVRva2VuQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVwYXlUb2tlbkFkZHJlc3MnKSxcclxuICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICAgICdscEFkZHJlc3NQcm92aWRlckFkZHJlc3MnXHJcbiAgICAgICksXHJcbiAgICAgIGxwQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbHBBZGRyZXNzJyksXHJcbiAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhdGVzdExwQ29yZUFkZHJlc3MnKSxcclxuICAgICAgd3NzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3c3MnKSxcclxuICAgICAgaHR0cDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaHR0cCcpLFxyXG4gICAgICBtbmVtb25pYzogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbW5lbW9uaWMnKSxcclxuICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZXRoR2FzU3RhdGlvbkFQSUtleScpLFxyXG4gICAgICBkeW5hbWljR2FzUHJpY2U6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2R5bmFtaWNHYXNQcmljZScpID09ICd0cnVlJyxcclxuICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xpcXVpZGF0aW9uQW1vdW50JyksXHJcbiAgICAgIGdhc1ByaWNlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXNQcmljZScpLFxyXG4gICAgICBnYXNMaW1pdDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FzTGltaXQnKSxcclxuICAgICAgcmVjZWl2ZUFUb2tlbnM6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlY2VpdmVBVG9rZW5zJykgPT0gJ3RydWUnLFxyXG4gICAgfSlcclxuICB9XHJcbiAgLy9hZGQgd3JpdGUgdG8gc2Vzc2lvbiBzdG9yYWdlIG9uY2hhbmdlIG9uIHRoZSB1bnB1dHNcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yLCAnUkVOREVSJylcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPkxpcXVpZGF0aW9uIFNldHRpbmdzPC9oMT5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9e3RoaXMuc3RhdGUuZm9ybUVycm9yfT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaXF1aWRhdG9yIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlxdWlkYXRpb25BZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0b3JBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgVG8gTGlxdWlkYXRlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NUb0xpcXVpZGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiQ29sbGF0ZXJhbCBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGF0ZXJhbEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiUmVwYXkgVG9rZW4gQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGF5VG9rZW5BZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxlbmRpbmdQb29sQWRkcmVzc1Byb3ZpZGVyIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxlbmRpbmdQb29sIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbHBBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxlbmRpbmdQb29sQ29yZSBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXRlc3RMcENvcmVBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkluZnVyYSBXU1MgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB3c3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkluZnVyYSBIVFRQIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5odHRwfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGh0dHA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiV2FsbGV0IE1uZXVtb25pYyAvIFNlZWQgUGhyYXNlXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW5lbW9uaWN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW5lbW9uaWM6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiTGlxdWlkYXRpb24gQW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRpb25BbW91bnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJHYXMgTGltaXRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNMaW1pdH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNMaW1pdDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJFVEggR0FTIFNUQVRJT04gQVBJIEtFWVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXRoR2FzU3RhdGlvbkFQSUtleTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJHYXMgUHJpY2VcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNQcmljZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiVXNlIER5bmFtaWMgR2FzIFByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgZHluYW1pY0dhc1ByaWNlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY0dhc1ByaWNlOiAhZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlJlY2VpdmUgQ29sbGF0ZXJhbCBhcyBhVG9rZW5zXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyByZWNlaXZlQVRva2VucyB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBVG9rZW5zOiAhcmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbGFiZWxQb3NpdGlvbj1cImxlZnRcIiBpY29uPVwiZG93bmxvYWRcIiBjb250ZW50PVwiU2F2ZVwiIC8+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlVwbG9hZCBTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgaWNvbj1cImZpbGVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwbG9hZFNldHRpbmdzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5oaWRkZW5GaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJlYWRTZXR0aW5nc31cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9