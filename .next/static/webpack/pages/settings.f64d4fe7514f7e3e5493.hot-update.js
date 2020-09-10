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
          lineNumber: 176,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }
      }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        error: this.state.formError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Liquidator Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
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
          lineNumber: 181,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Address To Liquidate",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
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
          lineNumber: 192,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        content: 'Please enter a valid address',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Collateral Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
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
          lineNumber: 209,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Repay Token Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
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
          lineNumber: 220,
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
        label: "LendingPoolAddressProvider Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
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
          lineNumber: 232,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPool Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
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
          lineNumber: 245,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolCore Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
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
          lineNumber: 257,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura WSS Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
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
          lineNumber: 268,
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
        label: "Infura HTTP Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
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
          lineNumber: 278,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Wallet Mneumonic / Seed Phrase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
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
          lineNumber: 289,
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
        label: "Liquidation Amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
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
          lineNumber: 301,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Limit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
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
          lineNumber: 311,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "ETH GAS STATION API KEY",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
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
          lineNumber: 323,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
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
          lineNumber: 334,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Use Dynamic Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
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
          lineNumber: 346,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Receive Collateral as aTokens",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
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
          lineNumber: 358,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
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
          lineNumber: 370,
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
          lineNumber: 372,
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
          lineNumber: 379,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRpb25BZGRyZXNzRXJyb3IiLCJhZGRyZXNzVG9MaXF1aWRhdGVFcnJvciIsImNvbGxhdGVyYWxBZGRyZXNzRXJyb3IiLCJyZXBheVRva2VuQWRkcmVzc0Vycm9yIiwibHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NFcnJvciIsImxhdGVzdExwQ29yZUFkZHJlc3NFcnJvciIsIndzc0Vycm9yIiwiaHR0cEVycm9yIiwibW5lbW9uaWNFcnJvciIsImV0aEdhc1N0YXRpb25BUElLZXlFcnJvciIsImR5bmFtaWNHYXNQcmljZUVycm9yIiwibGlxdWlkYXRpb25BbW91bnRFcnJvciIsImdhc1ByaWNlRXJyb3IiLCJnYXNMaW1pdEVycm9yIiwicmVjZWl2ZUF0b2tlbnNFcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJlcnJvciIsIndlYjMiLCJ1dGlscyIsImNoZWNrQWRkcmVzc0NoZWNrc3VtIiwic2V0U3RhdGUiLCJjb25maWdGaWxlIiwiYmxvYiIsIkJsb2IiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsIkZpbGVTYXZlciIsInNhdmVBcyIsInVwZGF0ZVNlc3Npb25TdG9yYWdlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoaWRkZW5GaWxlSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJmaWxlVXBsb2FkZWQiLCJ0YXJnZXQiLCJmaWxlcyIsImZyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJyZXN1bHQiLCJwYXJzZSIsImZvcm1hdHRlZCIsInJlYWRBc1RleHQiLCJkYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsIm9uU3VibWl0IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJ1cGxvYWRTZXR0aW5ncyIsInJlYWRTZXR0aW5ncyIsImRpc3BsYXkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBOztJQUVNQSxROzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLHVCQUFpQixFQUFFLEVBRGI7QUFFTkMsd0JBQWtCLEVBQUUsRUFGZDtBQUdOQyx1QkFBaUIsRUFBRSxFQUhiO0FBSU5DLHVCQUFpQixFQUFFLEVBSmI7QUFLTkMsOEJBQXdCLEVBQUUsRUFMcEI7QUFNTkMsZUFBUyxFQUFFLEVBTkw7QUFPTkMseUJBQW1CLEVBQUUsRUFQZjtBQVFOQyxTQUFHLEVBQUUsRUFSQztBQVNOQyxVQUFJLEVBQUUsRUFUQTtBQVVOQyxjQUFRLEVBQUUsRUFWSjtBQVdOQyx5QkFBbUIsRUFBRSxFQVhmO0FBWU5DLHFCQUFlLEVBQUUsS0FaWDtBQWFOQyx1QkFBaUIsRUFBRSxFQWJiO0FBY05DLGNBQVEsRUFBRSxFQWRKO0FBZU5DLGNBQVEsRUFBRSxFQWZKO0FBZ0JOQyxvQkFBYyxFQUFFLEtBaEJWO0FBaUJOQyxlQUFTLEVBQUUsS0FqQkw7QUFrQk5DLDZCQUF1QixFQUFFLEtBbEJuQjtBQW1CTkMsNkJBQXVCLEVBQUUsS0FuQm5CO0FBb0JOQyw0QkFBc0IsRUFBRSxLQXBCbEI7QUFxQk5DLDRCQUFzQixFQUFFLEtBckJsQjtBQXNCTkMs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QUFBQSxRQS9MRixFQWdNRSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLHFCQUFhLEVBQUMsTUFBOUI7QUFBcUMsWUFBSSxFQUFDLFVBQTFDO0FBQXFELGVBQU8sRUFBQyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBaE1GLEVBa01FLE1BQUMsd0RBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGVBQU8sRUFBQyxpQkFGVjtBQUdFLHFCQUFhLEVBQUMsTUFIaEI7QUFJRSxZQUFJLEVBQUMsTUFKUDtBQUtFLGVBQU8sRUFBRSxLQUFLQyxjQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbE1GLEVBeU1FO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFHLEVBQUUsS0FBS3JCLGVBRlo7QUFHRSxnQkFBUSxFQUFFLEtBQUtzQixZQUhqQjtBQUlFLGFBQUssRUFBRTtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBek1GLENBRkYsQ0FERjtBQXFORDs7OztFQXRYb0JDLCtDOztBQXlYUi9FLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLmY2NGQ0ZmU3NTE0ZjdlM2U1NDkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgTWVzc2FnZSxcclxuICBDaGVja2JveCxcclxuICBMYWJlbCxcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJ1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9zcmMvd2ViMy5qcydcclxuXHJcbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGxpcXVpZGF0b3JBZGRyZXNzOiAnJyxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogJycsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzczogJycsXHJcbiAgICByZXBheVRva2VuQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6ICcnLFxyXG4gICAgbHBBZGRyZXNzOiAnJyxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6ICcnLFxyXG4gICAgd3NzOiAnJyxcclxuICAgIGh0dHA6ICcnLFxyXG4gICAgbW5lbW9uaWM6ICcnLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleTogJycsXHJcbiAgICBkeW5hbWljR2FzUHJpY2U6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnQ6ICcnLFxyXG4gICAgZ2FzUHJpY2U6ICcnLFxyXG4gICAgZ2FzTGltaXQ6ICcnLFxyXG4gICAgcmVjZWl2ZUFUb2tlbnM6IGZhbHNlLFxyXG4gICAgZm9ybUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yOiBmYWxzZSxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgcmVwYXlUb2tlbkFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBsYXRlc3RMcENvcmVBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgd3NzRXJyb3I6IGZhbHNlLFxyXG4gICAgaHR0cEVycm9yOiBmYWxzZSxcclxuICAgIG1uZW1vbmljRXJyb3I6IGZhbHNlLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yOiBmYWxzZSxcclxuICAgIGR5bmFtaWNHYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQW1vdW50RXJyb3I6IGZhbHNlLFxyXG4gICAgZ2FzUHJpY2VFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNMaW1pdEVycm9yOiBmYWxzZSxcclxuICAgIHJlY2VpdmVBdG9rZW5zRXJyb3I6IGZhbHNlLFxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgbGV0IGVycm9yXHJcblxyXG4gICAgaWYgKCF3ZWIzLndlYjMudXRpbHMuY2hlY2tBZGRyZXNzQ2hlY2tzdW0odGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzcykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybUVycm9yOiB0cnVlIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb25maWdGaWxlID0ge1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogdGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzcyxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiB0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHRoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3MsXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiB0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHRoaXMuc3RhdGUubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICBscEFkZHJlc3M6IHRoaXMuc3RhdGUubHBBZGRyZXNzLFxyXG4gICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiB0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3MsXHJcbiAgICAgIHdzczogdGhpcy5zdGF0ZS53c3MsXHJcbiAgICAgIGh0dHA6IHRoaXMuc3RhdGUuaHR0cCxcclxuICAgICAgbW5lbW9uaWM6IHRoaXMuc3RhdGUubW5lbW9uaWMsXHJcbiAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHRoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgZHluYW1pY0dhc1ByaWNlOiB0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHRoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnQsXHJcbiAgICAgIGdhc1ByaWNlOiB0aGlzLnN0YXRlLmdhc1ByaWNlLFxyXG4gICAgICBnYXNMaW1pdDogdGhpcy5zdGF0ZS5nYXNMaW1pdCxcclxuICAgICAgcmVjZWl2ZUFUb2tlbnM6IHRoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnMsXHJcbiAgICB9XHJcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShjb25maWdGaWxlKV0sIHtcclxuICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSlcclxuICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgJ3NldHRpbmdzLmpzb24nKVxyXG4gICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZSh0aGlzLnN0YXRlKVxyXG4gIH1cclxuXHJcbiAgaGlkZGVuRmlsZUlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICB1cGxvYWRTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKVxyXG4gIH1cclxuICByZWFkU2V0dGluZ3MgPSAoZXZlbnQpID0+IHtcclxuICAgIHZhciBmaWxlVXBsb2FkZWQgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKClcclxuICAgIGZyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdClcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiByZXN1bHQubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiByZXN1bHQuYWRkcmVzc1RvTGlxdWlkYXRlLFxyXG4gICAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiByZXN1bHQuY29sbGF0ZXJhbEFkZHJlc3MsXHJcbiAgICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHJlc3VsdC5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHJlc3VsdC5scEFkZHJlc3NQcm92aWRlckFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzLFxyXG4gICAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHJlc3VsdC5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICAgIHdzczogcmVzdWx0LndzcyxcclxuICAgICAgICBodHRwOiByZXN1bHQuaHR0cCxcclxuICAgICAgICBtbmVtb25pYzogcmVzdWx0Lm1uZW1vbmljLFxyXG4gICAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHJlc3VsdC5ldGhHYXNTdGF0aW9uQVBJS2V5LFxyXG4gICAgICAgIGR5bmFtaWNHYXNQcmljZTogcmVzdWx0LmR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgICBsaXF1aWRhdGlvbkFtb3VudDogcmVzdWx0LmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICAgIGdhc1ByaWNlOiByZXN1bHQuZ2FzUHJpY2UsXHJcbiAgICAgICAgZ2FzTGltaXQ6IHJlc3VsdC5nYXNMaW1pdCxcclxuICAgICAgICByZWNlaXZlQVRva2VuczogcmVzdWx0LnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnVwZGF0ZVNlc3Npb25TdG9yYWdlKHJlc3VsdClcclxuICAgICAgdmFyIGZvcm1hdHRlZCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMilcclxuICAgICAgY29uc29sZS5sb2coZm9ybWF0dGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGZyLnJlYWRBc1RleHQoZmlsZVVwbG9hZGVkKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2Vzc2lvblN0b3JhZ2UgPSAoZGF0YSkgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnLCBkYXRhLmxpcXVpZGF0b3JBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWRkcmVzc1RvTGlxdWlkYXRlJywgZGF0YS5hZGRyZXNzVG9MaXF1aWRhdGUpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjb2xsYXRlcmFsQWRkcmVzcycsIGRhdGEuY29sbGF0ZXJhbEFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycsIGRhdGEucmVwYXlUb2tlbkFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJyxcclxuICAgICAgZGF0YS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3NcclxuICAgIClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xwQWRkcmVzcycsIGRhdGEubHBBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycsIGRhdGEubGF0ZXN0THBDb3JlQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dzcycsIGRhdGEud3NzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaHR0cCcsIGRhdGEuaHR0cClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ21uZW1vbmljJywgZGF0YS5tbmVtb25pYylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknLCBkYXRhLmV0aEdhc1N0YXRpb25BUElLZXkpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnLCBkYXRhLmR5bmFtaWNHYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0aW9uQW1vdW50JywgZGF0YS5saXF1aWRhdGlvbkFtb3VudClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc1ByaWNlJywgZGF0YS5nYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc0xpbWl0JywgZGF0YS5nYXNMaW1pdClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlY2VpdmVBVG9rZW5zJywgZGF0YS5yZWNlaXZlQVRva2VucylcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdG9yQWRkcmVzcycpLFxyXG4gICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScpLFxyXG4gICAgICBjb2xsYXRlcmFsQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnKSxcclxuICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlcGF5VG9rZW5BZGRyZXNzJyksXHJcbiAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJ1xyXG4gICAgICApLFxyXG4gICAgICBscEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xwQWRkcmVzcycpLFxyXG4gICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYXRlc3RMcENvcmVBZGRyZXNzJyksXHJcbiAgICAgIHdzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd3NzJyksXHJcbiAgICAgIGh0dHA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2h0dHAnKSxcclxuICAgICAgbW5lbW9uaWM6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21uZW1vbmljJyksXHJcbiAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknKSxcclxuICAgICAgZHluYW1pY0dhc1ByaWNlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnKSA9PSAndHJ1ZScsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcpLFxyXG4gICAgICBnYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FzUHJpY2UnKSxcclxuICAgICAgZ2FzTGltaXQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc0xpbWl0JyksXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWNlaXZlQVRva2VucycpID09ICd0cnVlJyxcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vYWRkIHdyaXRlIHRvIHNlc3Npb24gc3RvcmFnZSBvbmNoYW5nZSBvbiB0aGUgdW5wdXRzXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFkZHJlc3NFcnJvciwgJ1JFTkRFUicpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5MaXF1aWRhdGlvbiBTZXR0aW5nczwvaDE+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXt0aGlzLnN0YXRlLmZvcm1FcnJvcn0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxpcXVpZGF0b3IgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRvckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkFkZHJlc3MgVG8gTGlxdWlkYXRlXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NUb0xpcXVpZGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGNvbnRlbnQ9eydQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJ30gLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkNvbGxhdGVyYWwgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhdGVyYWxBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlJlcGF5IFRva2VuIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXBheVRva2VuQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJMZW5kaW5nUG9vbEFkZHJlc3NQcm92aWRlciBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJMZW5kaW5nUG9vbCBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubHBBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxwQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJMZW5kaW5nUG9vbENvcmUgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGF0ZXN0THBDb3JlQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJJbmZ1cmEgV1NTIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS53c3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgd3NzOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJJbmZ1cmEgSFRUUCBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaHR0cH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBodHRwOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIldhbGxldCBNbmV1bW9uaWMgLyBTZWVkIFBocmFzZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1uZW1vbmljfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1uZW1vbmljOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxpcXVpZGF0aW9uIEFtb3VudFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0aW9uQW1vdW50OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiR2FzIExpbWl0XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIldFSVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FzTGltaXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2FzTGltaXQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiRVRIIEdBUyBTVEFUSU9OIEFQSSBLRVlcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ldGhHYXNTdGF0aW9uQVBJS2V5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV0aEdhc1N0YXRpb25BUElLZXk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiR2FzIFByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIldFSVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FzUHJpY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2FzUHJpY2U6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlVzZSBEeW5hbWljIEdhcyBQcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCh7IGR5bmFtaWNHYXNQcmljZSB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNHYXNQcmljZTogIWR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJSZWNlaXZlIENvbGxhdGVyYWwgYXMgYVRva2Vuc1wiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgcmVjZWl2ZUFUb2tlbnMgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQVRva2VuczogIXJlY2VpdmVBVG9rZW5zLFxyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxhYmVsUG9zaXRpb249XCJsZWZ0XCIgaWNvbj1cImRvd25sb2FkXCIgY29udGVudD1cIlNhdmVcIiAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJVcGxvYWQgU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIGljb249XCJmaWxlXCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGxvYWRTZXR0aW5nc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICByZWY9e3RoaXMuaGlkZGVuRmlsZUlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZWFkU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==