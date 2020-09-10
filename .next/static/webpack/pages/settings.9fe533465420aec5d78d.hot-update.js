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
        placeholder: "Address which makes the liquidation call",
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
        placeholder: "Address to be liquidated",
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
          lineNumber: 237,
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
          lineNumber: 238,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        placeholder: "Address of the collateral to receive",
        value: this.state.collateralAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            collateralAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
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
          lineNumber: 257,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        placeholder: "Address of the token that is repaid",
        value: this.state.repayTokenAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            repayTokenAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
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
          lineNumber: 277,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        placeholder: "LendingPoolAddressProvider contract address",
        value: this.state.lpAddressProviderAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            lpAddressProviderAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
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
          lineNumber: 298,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        placeholder: "LendingPool contract address",
        value: this.state.lpAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            lpAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
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
          lineNumber: 318,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "HEX",
        labelPosition: "right",
        placeholder: "LendingPoolCore contract address",
        value: this.state.latestLpCoreAddress,
        onChange: function onChange(event) {
          return _this2.setState({
            latestLpCoreAddress: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
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
          lineNumber: 337,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "URL",
        labelPosition: "right",
        placeholder: "Infura WSS project endpoint",
        value: this.state.wss,
        onChange: function onChange(event) {
          return _this2.setState({
            wss: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
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
          lineNumber: 355,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        label: "URL",
        labelPosition: "right",
        placeholder: "Infura http project endpoint",
        value: this.state.http,
        onChange: function onChange(event) {
          return _this2.setState({
            http: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
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
          lineNumber: 374,
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
          lineNumber: 382,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
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
          lineNumber: 393,
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
          lineNumber: 401,
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
          lineNumber: 410,
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
          lineNumber: 418,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
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
          lineNumber: 429,
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
          lineNumber: 437,
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
          lineNumber: 447,
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
          lineNumber: 455,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
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
          lineNumber: 466,
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
          lineNumber: 474,
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
          lineNumber: 485,
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
          lineNumber: 493,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504,
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
          lineNumber: 505,
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
          lineNumber: 507,
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
          lineNumber: 514,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRvckFkZHJlc3NFcnJvciIsImFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yIiwiY29sbGF0ZXJhbEFkZHJlc3NFcnJvciIsInJlcGF5VG9rZW5BZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvciIsImxwQWRkcmVzc0Vycm9yIiwibGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yIiwid3NzRXJyb3IiLCJodHRwRXJyb3IiLCJtbmVtb25pY0Vycm9yIiwiZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yIiwiZHluYW1pY0dhc1ByaWNlRXJyb3IiLCJsaXF1aWRhdGlvbkFtb3VudEVycm9yIiwiZ2FzUHJpY2VFcnJvciIsImdhc0xpbWl0RXJyb3IiLCJyZWNlaXZlQXRva2Vuc0Vycm9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuZHNXaXRoIiwidmFsaWRBZGRyZXNzIiwid2ViMyIsInV0aWxzIiwiY2hlY2tBZGRyZXNzQ2hlY2tzdW0iLCJzZXRTdGF0ZSIsInN0YXJ0c1dpdGgiLCJjb25maWdGaWxlIiwiYmxvYiIsIkJsb2IiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsIkZpbGVTYXZlciIsInNhdmVBcyIsInVwZGF0ZVNlc3Npb25TdG9yYWdlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoaWRkZW5GaWxlSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJmaWxlVXBsb2FkZWQiLCJ0YXJnZXQiLCJmaWxlcyIsImZyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJyZXN1bHQiLCJwYXJzZSIsImZvcm1hdHRlZCIsInJlYWRBc1RleHQiLCJkYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yIiwib25TdWJtaXQiLCJjb250ZW50IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJ1cGxvYWRTZXR0aW5ncyIsInJlYWRTZXR0aW5ncyIsImRpc3BsYXkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBOztJQUVNQSxROzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLHVCQUFpQixFQUFFLEVBRGI7QUFFTkMsd0JBQWtCLEVBQUUsRUFGZDtBQUdOQyx1QkFBaUIsRUFBRSxFQUhiO0FBSU5DLHVCQUFpQixFQUFFLEVBSmI7QUFLTkMsOEJBQXdCLEVBQUUsRUFMcEI7QUFNTkMsZUFBUyxFQUFFLEVBTkw7QUFPTkMseUJBQW1CLEVBQUUsRUFQZjtBQVFOQyxTQUFHLEVBQUUsRUFSQztBQVNOQyxVQUFJLEVBQUUsRUFUQTtBQVVOQyxjQUFRLEVBQUUsRUFWSjtBQVdOQyx5QkFBbUIsRUFBRSxFQVhmO0FBWU5DLHFCQUFlLEVBQUUsS0FaWDtBQWFOQyx1QkFBaUIsRUFBRSxFQWJiO0FBY05DLGNBQVEsRUFBRSxFQWRKO0FBZU5DLGNBQVEsRUFBRSxFQWZKO0FBZ0JOQyxvQkFBYyxFQUFFLEtBaEJWO0FBaUJOQyxlQUFTLEVBQUUsS0FqQkw7QUFrQk5DLDRC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O0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSRixDQXBCRixDQTdRRixFQW9URSxNQUFDLHlEQUFEO0FBQVMsYUFBSyxNQUFkO0FBQWUsY0FBTSxFQUFDLE9BQXRCO0FBQThCLGVBQU8sRUFBRSxLQUFLc0IsS0FBTCxDQUFXOEMsWUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXBURixFQXFURSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLHFCQUFhLEVBQUMsTUFBOUI7QUFBcUMsWUFBSSxFQUFDLFVBQTFDO0FBQXFELGVBQU8sRUFBQyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBclRGLEVBdVRFLE1BQUMsd0RBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGVBQU8sRUFBQyxpQkFGVjtBQUdFLHFCQUFhLEVBQUMsTUFIaEI7QUFJRSxZQUFJLEVBQUMsTUFKUDtBQUtFLGVBQU8sRUFBRSxLQUFLQyxjQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBdlRGLEVBOFRFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFHLEVBQUUsS0FBS3ZCLGVBRlo7QUFHRSxnQkFBUSxFQUFFLEtBQUt3QixZQUhqQjtBQUlFLGFBQUssRUFBRTtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBOVRGLENBRkYsQ0FERjtBQTBVRDs7OztFQTdmb0JDLCtDOztBQWdnQlJ4Rix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy45ZmU1MzM0NjU0MjBhZWM1ZDc4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIElucHV0LFxyXG4gIE1lc3NhZ2UsXHJcbiAgQ2hlY2tib3gsXHJcbiAgTGFiZWwsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcidcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vc3JjL3dlYjMuanMnXHJcblxyXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBsaXF1aWRhdG9yQWRkcmVzczogJycsXHJcbiAgICBhZGRyZXNzVG9MaXF1aWRhdGU6ICcnLFxyXG4gICAgY29sbGF0ZXJhbEFkZHJlc3M6ICcnLFxyXG4gICAgcmVwYXlUb2tlbkFkZHJlc3M6ICcnLFxyXG4gICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiAnJyxcclxuICAgIGxwQWRkcmVzczogJycsXHJcbiAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiAnJyxcclxuICAgIHdzczogJycsXHJcbiAgICBodHRwOiAnJyxcclxuICAgIG1uZW1vbmljOiAnJyxcclxuICAgIGV0aEdhc1N0YXRpb25BUElLZXk6ICcnLFxyXG4gICAgZHluYW1pY0dhc1ByaWNlOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQW1vdW50OiAnJyxcclxuICAgIGdhc1ByaWNlOiAnJyxcclxuICAgIGdhc0xpbWl0OiAnJyxcclxuICAgIHJlY2VpdmVBVG9rZW5zOiBmYWxzZSxcclxuICAgIGZvcm1FcnJvcjogZmFsc2UsXHJcbiAgICBsaXF1aWRhdG9yQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yOiBmYWxzZSxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgcmVwYXlUb2tlbkFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBsYXRlc3RMcENvcmVBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgd3NzRXJyb3I6IGZhbHNlLFxyXG4gICAgaHR0cEVycm9yOiBmYWxzZSxcclxuICAgIG1uZW1vbmljRXJyb3I6IGZhbHNlLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yOiBmYWxzZSxcclxuICAgIGR5bmFtaWNHYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQW1vdW50RXJyb3I6IGZhbHNlLFxyXG4gICAgZ2FzUHJpY2VFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNMaW1pdEVycm9yOiBmYWxzZSxcclxuICAgIHJlY2VpdmVBdG9rZW5zRXJyb3I6IGZhbHNlLFxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgbGV0IGVycm9yID0gZmFsc2VcclxuXHJcbiAgICAvLyBBZGRyZXNzIFZhbGlkaXR5IENoZWNrXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBpZiAoa2V5LmVuZHNXaXRoKCdBZGRyZXNzJykgfHwga2V5ID09ICdhZGRyZXNzVG9MaXF1aWRhdGUnKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkQWRkcmVzcyA9ICF3ZWIzLndlYjMudXRpbHMuY2hlY2tBZGRyZXNzQ2hlY2tzdW0oXHJcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXkgKyAnRXJyb3InXTogdmFsaWRBZGRyZXNzIH0pXHJcbiAgICAgICAgaWYgKHZhbGlkQWRkcmVzcykge1xyXG4gICAgICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS53c3Muc3RhcnRzV2l0aCgnd3NzOi8vJykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdzc0Vycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5odHRwLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGh0dHBFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBlcnJvciA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1FcnJvcjogdHJ1ZSB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29uZmlnRmlsZSA9IHtcclxuICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHRoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogdGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICByZXBheVRva2VuQWRkcmVzczogdGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzcyxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogdGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICB3c3M6IHRoaXMuc3RhdGUud3NzLFxyXG4gICAgICBodHRwOiB0aGlzLnN0YXRlLmh0dHAsXHJcbiAgICAgIG1uZW1vbmljOiB0aGlzLnN0YXRlLm1uZW1vbmljLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiB0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogdGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiB0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICBnYXNQcmljZTogdGhpcy5zdGF0ZS5nYXNQcmljZSxcclxuICAgICAgZ2FzTGltaXQ6IHRoaXMuc3RhdGUuZ2FzTGltaXQsXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiB0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgfVxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoY29uZmlnRmlsZSldLCB7XHJcbiAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsICdzZXR0aW5ncy5qc29uJylcclxuICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UodGhpcy5zdGF0ZSlcclxuICB9XHJcblxyXG4gIGhpZGRlbkZpbGVJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgdXBsb2FkU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICB9XHJcbiAgcmVhZFNldHRpbmdzID0gKGV2ZW50KSA9PiB7XHJcbiAgICB2YXIgZmlsZVVwbG9hZGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICBmci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsaXF1aWRhdG9yQWRkcmVzczogcmVzdWx0LmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogcmVzdWx0LmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgICBjb2xsYXRlcmFsQWRkcmVzczogcmVzdWx0LmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiByZXN1bHQucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzcyxcclxuICAgICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiByZXN1bHQubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgICB3c3M6IHJlc3VsdC53c3MsXHJcbiAgICAgICAgaHR0cDogcmVzdWx0Lmh0dHAsXHJcbiAgICAgICAgbW5lbW9uaWM6IHJlc3VsdC5tbmVtb25pYyxcclxuICAgICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiByZXN1bHQuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgICBkeW5hbWljR2FzUHJpY2U6IHJlc3VsdC5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHJlc3VsdC5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgICBnYXNQcmljZTogcmVzdWx0Lmdhc1ByaWNlLFxyXG4gICAgICAgIGdhc0xpbWl0OiByZXN1bHQuZ2FzTGltaXQsXHJcbiAgICAgICAgcmVjZWl2ZUFUb2tlbnM6IHJlc3VsdC5yZWNlaXZlQVRva2VucyxcclxuICAgICAgfSlcclxuICAgICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZShyZXN1bHQpXHJcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZClcclxuICAgIH1cclxuXHJcbiAgICBmci5yZWFkQXNUZXh0KGZpbGVVcGxvYWRlZClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlc3Npb25TdG9yYWdlID0gKGRhdGEpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0b3JBZGRyZXNzJywgZGF0YS5saXF1aWRhdG9yQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScsIGRhdGEuYWRkcmVzc1RvTGlxdWlkYXRlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnLCBkYXRhLmNvbGxhdGVyYWxBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVwYXlUb2tlbkFkZHJlc3MnLCBkYXRhLnJlcGF5VG9rZW5BZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcycsXHJcbiAgICAgIGRhdGEubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzXHJcbiAgICApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdscEFkZHJlc3MnLCBkYXRhLmxwQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhdGVzdExwQ29yZUFkZHJlc3MnLCBkYXRhLmxhdGVzdExwQ29yZUFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3c3MnLCBkYXRhLndzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2h0dHAnLCBkYXRhLmh0dHApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtbmVtb25pYycsIGRhdGEubW5lbW9uaWMpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JywgZGF0YS5ldGhHYXNTdGF0aW9uQVBJS2V5KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJywgZGF0YS5keW5hbWljR2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcsIGRhdGEubGlxdWlkYXRpb25BbW91bnQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNQcmljZScsIGRhdGEuZ2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNMaW1pdCcsIGRhdGEuZ2FzTGltaXQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWNlaXZlQVRva2VucycsIGRhdGEucmVjZWl2ZUFUb2tlbnMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnKSxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhZGRyZXNzVG9MaXF1aWRhdGUnKSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NvbGxhdGVyYWxBZGRyZXNzJyksXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycpLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcydcclxuICAgICAgKSxcclxuICAgICAgbHBBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdscEFkZHJlc3MnKSxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycpLFxyXG4gICAgICB3c3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dzcycpLFxyXG4gICAgICBodHRwOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdodHRwJyksXHJcbiAgICAgIG1uZW1vbmljOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtbmVtb25pYycpLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JyksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJykgPT0gJ3RydWUnLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRpb25BbW91bnQnKSxcclxuICAgICAgZ2FzUHJpY2U6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc1ByaWNlJyksXHJcbiAgICAgIGdhc0xpbWl0OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXNMaW1pdCcpLFxyXG4gICAgICByZWNlaXZlQVRva2Vuczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVjZWl2ZUFUb2tlbnMnKSA9PSAndHJ1ZScsXHJcbiAgICB9KVxyXG4gIH1cclxuICAvL2FkZCB3cml0ZSB0byBzZXNzaW9uIHN0b3JhZ2Ugb25jaGFuZ2Ugb24gdGhlIHVucHV0c1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlxdWlkYXRpb25BZGRyZXNzRXJyb3IsICdSRU5ERVInKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+TGlxdWlkYXRpb24gU2V0dGluZ3M8L2gxPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17dGhpcy5zdGF0ZS5mb3JtRXJyb3J9PlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxpcXVpZGF0b3IgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIHdoaWNoIG1ha2VzIHRoZSBsaXF1aWRhdGlvbiBjYWxsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRvckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyBUbyBMaXF1aWRhdGVcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgdG8gYmUgbGlxdWlkYXRlZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc1RvTGlxdWlkYXRlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNvbGxhdGVyYWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIG9mIHRoZSBjb2xsYXRlcmFsIHRvIHJlY2VpdmVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGF0ZXJhbEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZXBheSBUb2tlbiBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3Mgb2YgdGhlIHRva2VuIHRoYXQgaXMgcmVwYWlkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGF5VG9rZW5BZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2xBZGRyZXNzUHJvdmlkZXIgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVuZGluZ1Bvb2xBZGRyZXNzUHJvdmlkZXIgY29udHJhY3QgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2wgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5scEFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVuZGluZ1Bvb2wgY29udHJhY3QgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbHBBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2xDb3JlIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZW5kaW5nUG9vbENvcmUgY29udHJhY3QgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhdGVzdExwQ29yZUFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJbmZ1cmEgV1NTIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud3NzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdNdXN0IHN0YXJ0IHdpdGggPHdzczovLz4nIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5mdXJhIFdTUyBwcm9qZWN0IGVuZHBvaW50XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB3c3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiSW5mdXJhIEhUVFAgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5odHRwRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdNdXN0IHN0YXJ0IHdpdGggPGh0dHBzOi8vPicgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmZ1cmEgaHR0cCBwcm9qZWN0IGVuZHBvaW50XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmh0dHB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaHR0cDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIldhbGxldCBNbmV1bW9uaWMgLyBTZWVkIFBocmFzZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tbmVtb25pY0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW5lbW9uaWN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW5lbW9uaWM6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaXF1aWRhdGlvbiBBbW91bnRcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnRFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0aW9uQW1vdW50OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJHYXMgTGltaXRcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZ2FzTGltaXRFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc0xpbWl0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc0xpbWl0OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRVRIIEdBUyBTVEFUSU9OIEFQSSBLRVlcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBldGhHYXNTdGF0aW9uQVBJS2V5OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiR2FzIFByaWNlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdhc1ByaWNlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNQcmljZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgRHluYW1pYyBHYXMgUHJpY2VcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBkeW5hbWljR2FzUHJpY2UgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljR2FzUHJpY2U6ICFkeW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZWNlaXZlIENvbGxhdGVyYWwgYXMgYVRva2Vuc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWNlaXZlQXRva2Vuc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyByZWNlaXZlQVRva2VucyB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBVG9rZW5zOiAhcmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbGFiZWxQb3NpdGlvbj1cImxlZnRcIiBpY29uPVwiZG93bmxvYWRcIiBjb250ZW50PVwiU2F2ZVwiIC8+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlVwbG9hZCBTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgaWNvbj1cImZpbGVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwbG9hZFNldHRpbmdzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5oaWRkZW5GaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJlYWRTZXR0aW5nc31cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9