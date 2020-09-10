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

          _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, errorKey, !validAddress));

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
          lineNumber: 182,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 9
        }
      }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        error: this.state.formError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
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
          lineNumber: 186,
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
          lineNumber: 194,
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
          lineNumber: 204,
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
          lineNumber: 212,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Collateral Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
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
          lineNumber: 225,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Repay Token Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
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
          lineNumber: 236,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolAddressProvider Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
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
          lineNumber: 248,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPool Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
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
          lineNumber: 261,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolCore Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
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
          lineNumber: 273,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura WSS Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
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
          lineNumber: 284,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura HTTP Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
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
          lineNumber: 294,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Wallet Mneumonic / Seed Phrase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
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
          lineNumber: 305,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Liquidation Amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
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
          lineNumber: 317,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Limit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
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
          lineNumber: 327,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "ETH GAS STATION API KEY",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
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
          lineNumber: 339,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
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
          lineNumber: 350,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Use Dynamic Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
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
          lineNumber: 362,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Receive Collateral as aTokens",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
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
          lineNumber: 374,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
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
          lineNumber: 386,
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
          lineNumber: 388,
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
          lineNumber: 395,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRpb25BZGRyZXNzRXJyb3IiLCJhZGRyZXNzVG9MaXF1aWRhdGVFcnJvciIsImNvbGxhdGVyYWxBZGRyZXNzRXJyb3IiLCJyZXBheVRva2VuQWRkcmVzc0Vycm9yIiwibHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NFcnJvciIsImxhdGVzdExwQ29yZUFkZHJlc3NFcnJvciIsIndzc0Vycm9yIiwiaHR0cEVycm9yIiwibW5lbW9uaWNFcnJvciIsImV0aEdhc1N0YXRpb25BUElLZXlFcnJvciIsImR5bmFtaWNHYXNQcmljZUVycm9yIiwibGlxdWlkYXRpb25BbW91bnRFcnJvciIsImdhc1ByaWNlRXJyb3IiLCJnYXNMaW1pdEVycm9yIiwicmVjZWl2ZUF0b2tlbnNFcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJlcnJvciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmRzV2l0aCIsInZhbGlkQWRkcmVzcyIsIndlYjMiLCJ1dGlscyIsImNoZWNrQWRkcmVzc0NoZWNrc3VtIiwiZXJyb3JLZXkiLCJzZXRTdGF0ZSIsImNvbmZpZ0ZpbGUiLCJibG9iIiwiQmxvYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiRmlsZVNhdmVyIiwic2F2ZUFzIiwidXBkYXRlU2Vzc2lvblN0b3JhZ2UiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImhpZGRlbkZpbGVJbnB1dCIsImN1cnJlbnQiLCJjbGljayIsImZpbGVVcGxvYWRlZCIsInRhcmdldCIsImZpbGVzIiwiZnIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInJlc3VsdCIsInBhcnNlIiwiZm9ybWF0dGVkIiwicmVhZEFzVGV4dCIsImRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwib25TdWJtaXQiLCJjb250ZW50IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJ1cGxvYWRTZXR0aW5ncyIsInJlYWRTZXR0aW5ncyIsImRpc3BsYXkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBOztJQUVNQSxROzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLHVCQUFpQixFQUFFLEVBRGI7QUFFTkMsd0JBQWtCLEVBQUUsRUFGZDtBQUdOQyx1QkFBaUIsRUFBRSxFQUhiO0FBSU5DLHVCQUFpQixFQUFFLEVBSmI7QUFLTkMsOEJBQXdCLEVBQUUsRUFMcEI7QUFNTkMsZUFBUyxFQUFFLEVBTkw7QUFPTkMseUJBQW1CLEVBQUUsRUFQZjtBQVFOQyxTQUFHLEVBQUUsRUFSQztBQVNOQyxVQUFJLEVBQUUsRUFUQTtBQVVOQyxjQUFRLEVBQUUsRUFWSjtBQVdOQyx5QkFBbUIsRUFBRSxFQVhmO0FBWU5DLHFCQUFlLEVBQUUsS0FaWDtBQWFOQyx1QkFBaUIsRUFBRSxFQWJiO0FBY05DLGNBQVEsRUFBRSxFQWRKO0FBZU5DLGNBQVEsRUFBRSxFQWZKO0FBZ0JOQyxvQkFBYyxFQUFFLEtBaEJWO0FBaUJOQyxlQUFTLEVBQUUsS0FqQkw7QUFrQk5DLDZCQUF1QixFQUFFLEtBbEJuQjtBQW1CTkMsNkJB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QUNSLE1BQUksQ0FBQ2tDLFFBQUwsQ0FBYztBQUFBLGdCQUFHbEMsY0FBSCxTQUFHQSxjQUFIO0FBQUEsbUJBQXlCO0FBQ3JDQSw0QkFBYyxFQUFFLENBQUNBO0FBRG9CLGFBQXpCO0FBQUEsV0FBZCxDQURRO0FBQUEsU0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FiRixDQWhMRixFQXlNRSxNQUFDLHlEQUFEO0FBQVMsYUFBSyxNQUFkO0FBQWUsY0FBTSxFQUFDLE9BQXRCO0FBQThCLGVBQU8sRUFBRSxLQUFLc0IsS0FBTCxDQUFXNkMsWUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXpNRixFQTBNRSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLHFCQUFhLEVBQUMsTUFBOUI7QUFBcUMsWUFBSSxFQUFDLFVBQTFDO0FBQXFELGVBQU8sRUFBQyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBMU1GLEVBNE1FLE1BQUMsd0RBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGVBQU8sRUFBQyxpQkFGVjtBQUdFLHFCQUFhLEVBQUMsTUFIaEI7QUFJRSxZQUFJLEVBQUMsTUFKUDtBQUtFLGVBQU8sRUFBRSxLQUFLQyxjQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBNU1GLEVBbU5FO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFHLEVBQUUsS0FBS3RCLGVBRlo7QUFHRSxnQkFBUSxFQUFFLEtBQUt1QixZQUhqQjtBQUlFLGFBQUssRUFBRTtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbk5GLENBRkYsQ0FERjtBQStORDs7OztFQXRZb0JDLCtDOztBQXlZUnZGLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLmRkNzhmNjNjNjAwZjY0YzhlOTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgTWVzc2FnZSxcclxuICBDaGVja2JveCxcclxuICBMYWJlbCxcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJ1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9zcmMvd2ViMy5qcydcclxuXHJcbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGxpcXVpZGF0b3JBZGRyZXNzOiAnJyxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogJycsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzczogJycsXHJcbiAgICByZXBheVRva2VuQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6ICcnLFxyXG4gICAgbHBBZGRyZXNzOiAnJyxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6ICcnLFxyXG4gICAgd3NzOiAnJyxcclxuICAgIGh0dHA6ICcnLFxyXG4gICAgbW5lbW9uaWM6ICcnLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleTogJycsXHJcbiAgICBkeW5hbWljR2FzUHJpY2U6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnQ6ICcnLFxyXG4gICAgZ2FzUHJpY2U6ICcnLFxyXG4gICAgZ2FzTGltaXQ6ICcnLFxyXG4gICAgcmVjZWl2ZUFUb2tlbnM6IGZhbHNlLFxyXG4gICAgZm9ybUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yOiBmYWxzZSxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgcmVwYXlUb2tlbkFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBsYXRlc3RMcENvcmVBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgd3NzRXJyb3I6IGZhbHNlLFxyXG4gICAgaHR0cEVycm9yOiBmYWxzZSxcclxuICAgIG1uZW1vbmljRXJyb3I6IGZhbHNlLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yOiBmYWxzZSxcclxuICAgIGR5bmFtaWNHYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQW1vdW50RXJyb3I6IGZhbHNlLFxyXG4gICAgZ2FzUHJpY2VFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNMaW1pdEVycm9yOiBmYWxzZSxcclxuICAgIHJlY2VpdmVBdG9rZW5zRXJyb3I6IGZhbHNlLFxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgbGV0IGVycm9yID0gZmFsc2VcclxuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBpZiAoa2V5LmVuZHNXaXRoKCdBZGRyZXNzJykpIHtcclxuICAgICAgICB2YXIgdmFsaWRBZGRyZXNzID0gd2ViMy53ZWIzLnV0aWxzLmNoZWNrQWRkcmVzc0NoZWNrc3VtKHRoaXMuc3RhdGVba2V5XSlcclxuICAgICAgICB2YXIgZXJyb3JLZXkgPSBrZXkgKyAnRXJyb3InXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlcnJvcktleV06ICF2YWxpZEFkZHJlc3MgfSlcclxuXHJcbiAgICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOT1BFJylcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1FcnJvcjogdHJ1ZSB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29uZmlnRmlsZSA9IHtcclxuICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHRoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogdGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICByZXBheVRva2VuQWRkcmVzczogdGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzcyxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogdGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICB3c3M6IHRoaXMuc3RhdGUud3NzLFxyXG4gICAgICBodHRwOiB0aGlzLnN0YXRlLmh0dHAsXHJcbiAgICAgIG1uZW1vbmljOiB0aGlzLnN0YXRlLm1uZW1vbmljLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiB0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogdGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiB0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICBnYXNQcmljZTogdGhpcy5zdGF0ZS5nYXNQcmljZSxcclxuICAgICAgZ2FzTGltaXQ6IHRoaXMuc3RhdGUuZ2FzTGltaXQsXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiB0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgfVxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoY29uZmlnRmlsZSldLCB7XHJcbiAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsICdzZXR0aW5ncy5qc29uJylcclxuICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UodGhpcy5zdGF0ZSlcclxuICB9XHJcblxyXG4gIGhpZGRlbkZpbGVJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgdXBsb2FkU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICB9XHJcbiAgcmVhZFNldHRpbmdzID0gKGV2ZW50KSA9PiB7XHJcbiAgICB2YXIgZmlsZVVwbG9hZGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICBmci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsaXF1aWRhdG9yQWRkcmVzczogcmVzdWx0LmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogcmVzdWx0LmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgICBjb2xsYXRlcmFsQWRkcmVzczogcmVzdWx0LmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiByZXN1bHQucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzcyxcclxuICAgICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiByZXN1bHQubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgICB3c3M6IHJlc3VsdC53c3MsXHJcbiAgICAgICAgaHR0cDogcmVzdWx0Lmh0dHAsXHJcbiAgICAgICAgbW5lbW9uaWM6IHJlc3VsdC5tbmVtb25pYyxcclxuICAgICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiByZXN1bHQuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgICBkeW5hbWljR2FzUHJpY2U6IHJlc3VsdC5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHJlc3VsdC5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgICBnYXNQcmljZTogcmVzdWx0Lmdhc1ByaWNlLFxyXG4gICAgICAgIGdhc0xpbWl0OiByZXN1bHQuZ2FzTGltaXQsXHJcbiAgICAgICAgcmVjZWl2ZUFUb2tlbnM6IHJlc3VsdC5yZWNlaXZlQVRva2VucyxcclxuICAgICAgfSlcclxuICAgICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZShyZXN1bHQpXHJcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZClcclxuICAgIH1cclxuXHJcbiAgICBmci5yZWFkQXNUZXh0KGZpbGVVcGxvYWRlZClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlc3Npb25TdG9yYWdlID0gKGRhdGEpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0b3JBZGRyZXNzJywgZGF0YS5saXF1aWRhdG9yQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScsIGRhdGEuYWRkcmVzc1RvTGlxdWlkYXRlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnLCBkYXRhLmNvbGxhdGVyYWxBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVwYXlUb2tlbkFkZHJlc3MnLCBkYXRhLnJlcGF5VG9rZW5BZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcycsXHJcbiAgICAgIGRhdGEubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzXHJcbiAgICApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdscEFkZHJlc3MnLCBkYXRhLmxwQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhdGVzdExwQ29yZUFkZHJlc3MnLCBkYXRhLmxhdGVzdExwQ29yZUFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3c3MnLCBkYXRhLndzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2h0dHAnLCBkYXRhLmh0dHApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtbmVtb25pYycsIGRhdGEubW5lbW9uaWMpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JywgZGF0YS5ldGhHYXNTdGF0aW9uQVBJS2V5KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJywgZGF0YS5keW5hbWljR2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcsIGRhdGEubGlxdWlkYXRpb25BbW91bnQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNQcmljZScsIGRhdGEuZ2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNMaW1pdCcsIGRhdGEuZ2FzTGltaXQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWNlaXZlQVRva2VucycsIGRhdGEucmVjZWl2ZUFUb2tlbnMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnKSxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhZGRyZXNzVG9MaXF1aWRhdGUnKSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NvbGxhdGVyYWxBZGRyZXNzJyksXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycpLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcydcclxuICAgICAgKSxcclxuICAgICAgbHBBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdscEFkZHJlc3MnKSxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycpLFxyXG4gICAgICB3c3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dzcycpLFxyXG4gICAgICBodHRwOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdodHRwJyksXHJcbiAgICAgIG1uZW1vbmljOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtbmVtb25pYycpLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JyksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJykgPT0gJ3RydWUnLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRpb25BbW91bnQnKSxcclxuICAgICAgZ2FzUHJpY2U6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc1ByaWNlJyksXHJcbiAgICAgIGdhc0xpbWl0OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXNMaW1pdCcpLFxyXG4gICAgICByZWNlaXZlQVRva2Vuczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVjZWl2ZUFUb2tlbnMnKSA9PSAndHJ1ZScsXHJcbiAgICB9KVxyXG4gIH1cclxuICAvL2FkZCB3cml0ZSB0byBzZXNzaW9uIHN0b3JhZ2Ugb25jaGFuZ2Ugb24gdGhlIHVucHV0c1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlxdWlkYXRpb25BZGRyZXNzRXJyb3IsICdSRU5ERVInKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+TGlxdWlkYXRpb24gU2V0dGluZ3M8L2gxPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17dGhpcy5zdGF0ZS5mb3JtRXJyb3J9PlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxpcXVpZGF0b3IgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRvckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyBUbyBMaXF1aWRhdGVcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc1RvTGlxdWlkYXRlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJDb2xsYXRlcmFsIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXRlcmFsQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJSZXBheSBUb2tlbiBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwYXlUb2tlbkFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiTGVuZGluZ1Bvb2xBZGRyZXNzUHJvdmlkZXIgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiTGVuZGluZ1Bvb2wgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxwQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBscEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiTGVuZGluZ1Bvb2xDb3JlIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhdGVzdExwQ29yZUFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiSW5mdXJhIFdTUyBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud3NzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiSW5mdXJhIEhUVFAgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmh0dHB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaHR0cDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJXYWxsZXQgTW5ldW1vbmljIC8gU2VlZCBQaHJhc2VcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tbmVtb25pY31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtbmVtb25pYzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJMaXF1aWRhdGlvbiBBbW91bnRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdGlvbkFtb3VudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkdhcyBMaW1pdFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc0xpbWl0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc0xpbWl0OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkVUSCBHQVMgU1RBVElPTiBBUEkgS0VZXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBldGhHYXNTdGF0aW9uQVBJS2V5OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkdhcyBQcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc1ByaWNlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJVc2UgRHluYW1pYyBHYXMgUHJpY2VcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBkeW5hbWljR2FzUHJpY2UgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljR2FzUHJpY2U6ICFkeW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiUmVjZWl2ZSBDb2xsYXRlcmFsIGFzIGFUb2tlbnNcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWNlaXZlQVRva2Vuc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCh7IHJlY2VpdmVBVG9rZW5zIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFUb2tlbnM6ICFyZWNlaXZlQVRva2VucyxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsYWJlbFBvc2l0aW9uPVwibGVmdFwiIGljb249XCJkb3dubG9hZFwiIGNvbnRlbnQ9XCJTYXZlXCIgLz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiVXBsb2FkIFNldHRpbmdzXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBpY29uPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBsb2FkU2V0dGluZ3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgcmVmPXt0aGlzLmhpZGRlbkZpbGVJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucmVhZFNldHRpbmdzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=