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
      liquidatorAddressError: false,
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
      var error = false; // Address Validity Check

      Object.keys(_this.state).map(function (key) {
        if (key.endsWith('Address') || key == 'addressToLiquidate') {
          var validAddress = !_src_web3_js__WEBPACK_IMPORTED_MODULE_11___default.a.web3.utils.checkAddressChecksum(_this.state[key]);

          _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, key + 'Error', validAddress));

          if (validAddress) {
            error = true;
          }
        }
      });

      if (!_this.state.wss.startsWith('wss://')) {
        _this.setState({
          wssError: true
        });

        error = true;
      }

      if (!_this.state.http.startsWith('https://')) {
        _this.setState({
          httpError: true
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
          lineNumber: 194,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 9
        }
      }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        error: this.state.formError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Liquidator Address",
        error: this.state.liquidatorAddressError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        placeholder: "0xFFFF...FFFF",
        value: this.state.liquidatorAddress,
        onChange: function onChange(event) {
          _this2.setState({
            liquidatorAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
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
          lineNumber: 217,
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
          lineNumber: 225,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Collateral Address",
        error: this.state.collateralAddressError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
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
          lineNumber: 245,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Repay Token Address",
        error: this.state.repayTokenAddressError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
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
          lineNumber: 263,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolAddressProvider Address",
        error: this.state.lpAddressProviderAddressError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
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
          lineNumber: 282,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPool Address",
        error: this.state.lpAddressError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
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
          lineNumber: 302,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolCore Address",
        error: this.state.latestLpCoreAddressError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
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
          lineNumber: 321,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura WSS Address",
        error: this.state.wssError ? {
          content: 'Must start with <wss://>'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
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
          lineNumber: 339,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura HTTP Address",
        error: this.state.httpError ? {
          content: 'Must start with <https://>'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
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
          lineNumber: 356,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Wallet Mneumonic / Seed Phrase",
        error: this.state.mnemonicError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
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
          lineNumber: 374,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Liquidation Amount",
        error: this.state.liquidationAmountError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
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
          lineNumber: 393,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Limit",
        error: this.state.gasLimitError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
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
          lineNumber: 410,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "ETH GAS STATION API KEY",
        error: this.state.ethGasStationAPIKeyError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
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
          lineNumber: 429,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Price",
        error: this.state.gasPriceError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
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
          lineNumber: 447,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Use Dynamic Gas Price",
        error: this.state.dynamicGasPriceError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
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
          lineNumber: 466,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Receive Collateral as aTokens",
        error: this.state.receiveAtokensError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
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
          lineNumber: 485,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
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
          lineNumber: 497,
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
          lineNumber: 499,
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
          lineNumber: 506,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRvckFkZHJlc3NFcnJvciIsImFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yIiwiY29sbGF0ZXJhbEFkZHJlc3NFcnJvciIsInJlcGF5VG9rZW5BZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvciIsImxwQWRkcmVzc0Vycm9yIiwibGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yIiwid3NzRXJyb3IiLCJodHRwRXJyb3IiLCJtbmVtb25pY0Vycm9yIiwiZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yIiwiZHluYW1pY0dhc1ByaWNlRXJyb3IiLCJsaXF1aWRhdGlvbkFtb3VudEVycm9yIiwiZ2FzUHJpY2VFcnJvciIsImdhc0xpbWl0RXJyb3IiLCJyZWNlaXZlQXRva2Vuc0Vycm9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuZHNXaXRoIiwidmFsaWRBZGRyZXNzIiwid2ViMyIsInV0aWxzIiwiY2hlY2tBZGRyZXNzQ2hlY2tzdW0iLCJzZXRTdGF0ZSIsInN0YXJ0c1dpdGgiLCJjb25maWdGaWxlIiwiYmxvYiIsIkJsb2IiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsIkZpbGVTYXZlciIsInNhdmVBcyIsInVwZGF0ZVNlc3Npb25TdG9yYWdlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoaWRkZW5GaWxlSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJmaWxlVXBsb2FkZWQiLCJ0YXJnZXQiLCJmaWxlcyIsImZyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJyZXN1bHQiLCJwYXJzZSIsImZvcm1hdHRlZCIsInJlYWRBc1RleHQiLCJkYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yIiwib25TdWJtaXQiLCJjb250ZW50IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJ1cGxvYWRTZXR0aW5ncyIsInJlYWRTZXR0aW5ncyIsImRpc3BsYXkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBOztJQUVNQSxROzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLHVCQUFpQixFQUFFLEVBRGI7QUFFTkMsd0JBQWtCLEVBQUUsRUFGZDtBQUdOQyx1QkFBaUIsRUFBRSxFQUhiO0FBSU5DLHVCQUFpQixFQUFFLEVBSmI7QUFLTkMsOEJBQXdCLEVBQUUsRUFMcEI7QUFNTkMsZUFBUyxFQUFFLEVBTkw7QUFPTkMseUJBQW1CLEVBQUUsRUFQZjtBQVFOQyxTQUFHLEVBQUUsRUFSQztBQVNOQyxVQUFJLEVBQUUsRUFUQTtBQVVOQyxjQUFRLEVBQUUsRUFWSjtBQVdOQyx5QkFBbUIsRUFBRSxFQVhmO0FBWU5DLHFCQUFlLEVBQUUsS0FaWDtBQWFOQyx1QkFBaUIsRUFBRSxFQWJiO0FBY05DLGNBQVEsRUFBRSxFQWRKO0FBZU5DLGNBQVEsRUFBRSxFQWZKO0FBZ0JOQyxvQkFBYyxFQUFFLEtBaEJWO0FBaUJOQyxlQUFTLEVBQUUsS0FqQkw7QUFrQk5DLDRC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RSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLHFCQUFhLEVBQUMsTUFBOUI7QUFBcUMsWUFBSSxFQUFDLFVBQTFDO0FBQXFELGVBQU8sRUFBQyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBN1NGLEVBK1NFLE1BQUMsd0RBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGVBQU8sRUFBQyxpQkFGVjtBQUdFLHFCQUFhLEVBQUMsTUFIaEI7QUFJRSxZQUFJLEVBQUMsTUFKUDtBQUtFLGVBQU8sRUFBRSxLQUFLQyxjQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBL1NGLEVBc1RFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFHLEVBQUUsS0FBS3ZCLGVBRlo7QUFHRSxnQkFBUSxFQUFFLEtBQUt3QixZQUhqQjtBQUlFLGFBQUssRUFBRTtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBdFRGLENBRkYsQ0FERjtBQWtVRDs7OztFQXJmb0JDLCtDOztBQXdmUnhGLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLmI1MDJlZWY4NDZhNWRiZmY1ZGRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgTWVzc2FnZSxcclxuICBDaGVja2JveCxcclxuICBMYWJlbCxcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJ1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9zcmMvd2ViMy5qcydcclxuXHJcbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGxpcXVpZGF0b3JBZGRyZXNzOiAnJyxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogJycsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzczogJycsXHJcbiAgICByZXBheVRva2VuQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6ICcnLFxyXG4gICAgbHBBZGRyZXNzOiAnJyxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6ICcnLFxyXG4gICAgd3NzOiAnJyxcclxuICAgIGh0dHA6ICcnLFxyXG4gICAgbW5lbW9uaWM6ICcnLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleTogJycsXHJcbiAgICBkeW5hbWljR2FzUHJpY2U6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnQ6ICcnLFxyXG4gICAgZ2FzUHJpY2U6ICcnLFxyXG4gICAgZ2FzTGltaXQ6ICcnLFxyXG4gICAgcmVjZWl2ZUFUb2tlbnM6IGZhbHNlLFxyXG4gICAgZm9ybUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0b3JBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3I6IGZhbHNlLFxyXG4gICAgY29sbGF0ZXJhbEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICByZXBheVRva2VuQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICB3c3NFcnJvcjogZmFsc2UsXHJcbiAgICBodHRwRXJyb3I6IGZhbHNlLFxyXG4gICAgbW5lbW9uaWNFcnJvcjogZmFsc2UsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5RXJyb3I6IGZhbHNlLFxyXG4gICAgZHluYW1pY0dhc1ByaWNlRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnRFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGdhc0xpbWl0RXJyb3I6IGZhbHNlLFxyXG4gICAgcmVjZWl2ZUF0b2tlbnNFcnJvcjogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuXHJcbiAgICBsZXQgZXJyb3IgPSBmYWxzZVxyXG5cclxuICAgIC8vIEFkZHJlc3MgVmFsaWRpdHkgQ2hlY2tcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChrZXkuZW5kc1dpdGgoJ0FkZHJlc3MnKSB8fCBrZXkgPT0gJ2FkZHJlc3NUb0xpcXVpZGF0ZScpIHtcclxuICAgICAgICB2YXIgdmFsaWRBZGRyZXNzID0gIXdlYjMud2ViMy51dGlscy5jaGVja0FkZHJlc3NDaGVja3N1bShcclxuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2tleSArICdFcnJvciddOiB2YWxpZEFkZHJlc3MgfSlcclxuICAgICAgICBpZiAodmFsaWRBZGRyZXNzKSB7XHJcbiAgICAgICAgICBlcnJvciA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLndzcy5zdGFydHNXaXRoKCd3c3M6Ly8nKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgd3NzRXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmh0dHAuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaHR0cEVycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybUVycm9yOiB0cnVlIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb25maWdGaWxlID0ge1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogdGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzcyxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiB0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHRoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3MsXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiB0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHRoaXMuc3RhdGUubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICBscEFkZHJlc3M6IHRoaXMuc3RhdGUubHBBZGRyZXNzLFxyXG4gICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiB0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3MsXHJcbiAgICAgIHdzczogdGhpcy5zdGF0ZS53c3MsXHJcbiAgICAgIGh0dHA6IHRoaXMuc3RhdGUuaHR0cCxcclxuICAgICAgbW5lbW9uaWM6IHRoaXMuc3RhdGUubW5lbW9uaWMsXHJcbiAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHRoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgZHluYW1pY0dhc1ByaWNlOiB0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHRoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnQsXHJcbiAgICAgIGdhc1ByaWNlOiB0aGlzLnN0YXRlLmdhc1ByaWNlLFxyXG4gICAgICBnYXNMaW1pdDogdGhpcy5zdGF0ZS5nYXNMaW1pdCxcclxuICAgICAgcmVjZWl2ZUFUb2tlbnM6IHRoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnMsXHJcbiAgICB9XHJcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShjb25maWdGaWxlKV0sIHtcclxuICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSlcclxuICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgJ3NldHRpbmdzLmpzb24nKVxyXG4gICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZSh0aGlzLnN0YXRlKVxyXG4gIH1cclxuXHJcbiAgaGlkZGVuRmlsZUlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICB1cGxvYWRTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKVxyXG4gIH1cclxuICByZWFkU2V0dGluZ3MgPSAoZXZlbnQpID0+IHtcclxuICAgIHZhciBmaWxlVXBsb2FkZWQgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKClcclxuICAgIGZyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdClcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiByZXN1bHQubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiByZXN1bHQuYWRkcmVzc1RvTGlxdWlkYXRlLFxyXG4gICAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiByZXN1bHQuY29sbGF0ZXJhbEFkZHJlc3MsXHJcbiAgICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHJlc3VsdC5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHJlc3VsdC5scEFkZHJlc3NQcm92aWRlckFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzLFxyXG4gICAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHJlc3VsdC5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICAgIHdzczogcmVzdWx0LndzcyxcclxuICAgICAgICBodHRwOiByZXN1bHQuaHR0cCxcclxuICAgICAgICBtbmVtb25pYzogcmVzdWx0Lm1uZW1vbmljLFxyXG4gICAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHJlc3VsdC5ldGhHYXNTdGF0aW9uQVBJS2V5LFxyXG4gICAgICAgIGR5bmFtaWNHYXNQcmljZTogcmVzdWx0LmR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgICBsaXF1aWRhdGlvbkFtb3VudDogcmVzdWx0LmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICAgIGdhc1ByaWNlOiByZXN1bHQuZ2FzUHJpY2UsXHJcbiAgICAgICAgZ2FzTGltaXQ6IHJlc3VsdC5nYXNMaW1pdCxcclxuICAgICAgICByZWNlaXZlQVRva2VuczogcmVzdWx0LnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnVwZGF0ZVNlc3Npb25TdG9yYWdlKHJlc3VsdClcclxuICAgICAgdmFyIGZvcm1hdHRlZCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMilcclxuICAgICAgY29uc29sZS5sb2coZm9ybWF0dGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGZyLnJlYWRBc1RleHQoZmlsZVVwbG9hZGVkKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2Vzc2lvblN0b3JhZ2UgPSAoZGF0YSkgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnLCBkYXRhLmxpcXVpZGF0b3JBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWRkcmVzc1RvTGlxdWlkYXRlJywgZGF0YS5hZGRyZXNzVG9MaXF1aWRhdGUpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjb2xsYXRlcmFsQWRkcmVzcycsIGRhdGEuY29sbGF0ZXJhbEFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycsIGRhdGEucmVwYXlUb2tlbkFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJyxcclxuICAgICAgZGF0YS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3NcclxuICAgIClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xwQWRkcmVzcycsIGRhdGEubHBBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycsIGRhdGEubGF0ZXN0THBDb3JlQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dzcycsIGRhdGEud3NzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaHR0cCcsIGRhdGEuaHR0cClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ21uZW1vbmljJywgZGF0YS5tbmVtb25pYylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknLCBkYXRhLmV0aEdhc1N0YXRpb25BUElLZXkpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnLCBkYXRhLmR5bmFtaWNHYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0aW9uQW1vdW50JywgZGF0YS5saXF1aWRhdGlvbkFtb3VudClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc1ByaWNlJywgZGF0YS5nYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc0xpbWl0JywgZGF0YS5nYXNMaW1pdClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlY2VpdmVBVG9rZW5zJywgZGF0YS5yZWNlaXZlQVRva2VucylcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdG9yQWRkcmVzcycpLFxyXG4gICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScpLFxyXG4gICAgICBjb2xsYXRlcmFsQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnKSxcclxuICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlcGF5VG9rZW5BZGRyZXNzJyksXHJcbiAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJ1xyXG4gICAgICApLFxyXG4gICAgICBscEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xwQWRkcmVzcycpLFxyXG4gICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYXRlc3RMcENvcmVBZGRyZXNzJyksXHJcbiAgICAgIHdzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd3NzJyksXHJcbiAgICAgIGh0dHA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2h0dHAnKSxcclxuICAgICAgbW5lbW9uaWM6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21uZW1vbmljJyksXHJcbiAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknKSxcclxuICAgICAgZHluYW1pY0dhc1ByaWNlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnKSA9PSAndHJ1ZScsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcpLFxyXG4gICAgICBnYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FzUHJpY2UnKSxcclxuICAgICAgZ2FzTGltaXQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc0xpbWl0JyksXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWNlaXZlQVRva2VucycpID09ICd0cnVlJyxcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vYWRkIHdyaXRlIHRvIHNlc3Npb24gc3RvcmFnZSBvbmNoYW5nZSBvbiB0aGUgdW5wdXRzXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFkZHJlc3NFcnJvciwgJ1JFTkRFUicpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5MaXF1aWRhdGlvbiBTZXR0aW5nczwvaDE+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXt0aGlzLnN0YXRlLmZvcm1FcnJvcn0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGlxdWlkYXRvciBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjB4RkZGRi4uLkZGRkZcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdG9yQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzIFRvIExpcXVpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGVFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzVG9MaXF1aWRhdGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29sbGF0ZXJhbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXRlcmFsQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIlJlcGF5IFRva2VuIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGF5VG9rZW5BZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2xBZGRyZXNzUHJvdmlkZXIgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMZW5kaW5nUG9vbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxwQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubHBBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxwQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxlbmRpbmdQb29sQ29yZSBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGF0ZXN0THBDb3JlQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkluZnVyYSBXU1MgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53c3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ011c3Qgc3RhcnQgd2l0aCA8d3NzOi8vPicgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud3NzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJbmZ1cmEgSFRUUCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmh0dHBFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ011c3Qgc3RhcnQgd2l0aCA8aHR0cHM6Ly8+JyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5odHRwfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGh0dHA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJXYWxsZXQgTW5ldW1vbmljIC8gU2VlZCBQaHJhc2VcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW5lbW9uaWNFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1uZW1vbmljfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1uZW1vbmljOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGlxdWlkYXRpb24gQW1vdW50XCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50RXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdGlvbkFtb3VudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiR2FzIExpbWl0XCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdhc0xpbWl0RXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNMaW1pdH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNMaW1pdDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkVUSCBHQVMgU1RBVElPTiBBUEkgS0VZXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXlFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXRoR2FzU3RhdGlvbkFQSUtleTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkdhcyBQcmljZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5nYXNQcmljZUVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIldFSVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FzUHJpY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2FzUHJpY2U6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlIER5bmFtaWMgR2FzIFByaWNlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZUVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgZHluYW1pY0dhc1ByaWNlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY0dhc1ByaWNlOiAhZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUmVjZWl2ZSBDb2xsYXRlcmFsIGFzIGFUb2tlbnNcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVjZWl2ZUF0b2tlbnNFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgcmVjZWl2ZUFUb2tlbnMgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQVRva2VuczogIXJlY2VpdmVBVG9rZW5zLFxyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxhYmVsUG9zaXRpb249XCJsZWZ0XCIgaWNvbj1cImRvd25sb2FkXCIgY29udGVudD1cIlNhdmVcIiAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJVcGxvYWQgU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIGljb249XCJmaWxlXCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGxvYWRTZXR0aW5nc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICByZWY9e3RoaXMuaGlkZGVuRmlsZUlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZWFkU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==