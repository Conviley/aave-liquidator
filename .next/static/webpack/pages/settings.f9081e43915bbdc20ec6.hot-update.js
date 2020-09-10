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
          lineNumber: 179,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 9
        }
      }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        error: this.state.formError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
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
          lineNumber: 183,
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
          lineNumber: 191,
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
          lineNumber: 201,
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
          lineNumber: 209,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Collateral Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
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
          lineNumber: 222,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Repay Token Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
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
          lineNumber: 233,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolAddressProvider Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
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
          lineNumber: 245,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPool Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
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
          lineNumber: 258,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolCore Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
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
          lineNumber: 270,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura WSS Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
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
          lineNumber: 281,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura HTTP Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
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
          lineNumber: 291,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Wallet Mneumonic / Seed Phrase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
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
        label: "Liquidation Amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
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
          lineNumber: 314,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Limit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
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
          lineNumber: 324,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "ETH GAS STATION API KEY",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
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
          lineNumber: 336,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
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
          lineNumber: 347,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Use Dynamic Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
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
          lineNumber: 359,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Receive Collateral as aTokens",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
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
          lineNumber: 371,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
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
          lineNumber: 383,
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
          lineNumber: 385,
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
          lineNumber: 392,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRpb25BZGRyZXNzRXJyb3IiLCJhZGRyZXNzVG9MaXF1aWRhdGVFcnJvciIsImNvbGxhdGVyYWxBZGRyZXNzRXJyb3IiLCJyZXBheVRva2VuQWRkcmVzc0Vycm9yIiwibHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NFcnJvciIsImxhdGVzdExwQ29yZUFkZHJlc3NFcnJvciIsIndzc0Vycm9yIiwiaHR0cEVycm9yIiwibW5lbW9uaWNFcnJvciIsImV0aEdhc1N0YXRpb25BUElLZXlFcnJvciIsImR5bmFtaWNHYXNQcmljZUVycm9yIiwibGlxdWlkYXRpb25BbW91bnRFcnJvciIsImdhc1ByaWNlRXJyb3IiLCJnYXNMaW1pdEVycm9yIiwicmVjZWl2ZUF0b2tlbnNFcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJlcnJvciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmRzV2l0aCIsInZhbGlkQWRkcmVzcyIsIndlYjMiLCJ1dGlscyIsImNoZWNrQWRkcmVzc0NoZWNrc3VtIiwic2V0U3RhdGUiLCJjb25maWdGaWxlIiwiYmxvYiIsIkJsb2IiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsIkZpbGVTYXZlciIsInNhdmVBcyIsInVwZGF0ZVNlc3Npb25TdG9yYWdlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoaWRkZW5GaWxlSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJmaWxlVXBsb2FkZWQiLCJ0YXJnZXQiLCJmaWxlcyIsImZyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJyZXN1bHQiLCJwYXJzZSIsImZvcm1hdHRlZCIsInJlYWRBc1RleHQiLCJkYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsIm9uU3VibWl0IiwiY29udGVudCIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwidXBsb2FkU2V0dGluZ3MiLCJyZWFkU2V0dGluZ3MiLCJkaXNwbGF5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyx1QkFBaUIsRUFBRSxFQURiO0FBRU5DLHdCQUFrQixFQUFFLEVBRmQ7QUFHTkMsdUJBQWlCLEVBQUUsRUFIYjtBQUlOQyx1QkFBaUIsRUFBRSxFQUpiO0FBS05DLDhCQUF3QixFQUFFLEVBTHBCO0FBTU5DLGVBQVMsRUFBRSxFQU5MO0FBT05DLHlCQUFtQixFQUFFLEVBUGY7QUFRTkMsU0FBRyxFQUFFLEVBUkM7QUFTTkMsVUFBSSxFQUFFLEVBVEE7QUFVTkMsY0FBUSxFQUFFLEVBVko7QUFXTkMseUJBQW1CLEVBQUUsRUFYZjtBQVlOQyxxQkFBZSxFQUFFLEtBWlg7QUFhTkMsdUJBQWlCLEVBQUUsRUFiYjtBQWNOQyxjQUFRLEVBQUUsRUFkSjtBQWVOQyxjQUFRLEVBQUUsRUFmSjtBQWdCTkMsb0JBQWMsRUFBRSxLQWhCVjtBQWlCTkMsZUFBUyxFQUFFLEtBakJMO0FBa0JOQyw2QkFBdUIsRUFBRSxLQWxCbkI7QUFtQk5DLDZCQUF1QixFQUFFLEtB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YUFBekI7QUFBQSxXQUFkLENBRFE7QUFBQSxTQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQWJGLENBaExGLEVBeU1FLE1BQUMseURBQUQ7QUFBUyxhQUFLLE1BQWQ7QUFBZSxjQUFNLEVBQUMsT0FBdEI7QUFBOEIsZUFBTyxFQUFFLEtBQUtzQixLQUFMLENBQVc0QyxZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBek1GLEVBME1FLE1BQUMsd0RBQUQ7QUFBUSxlQUFPLE1BQWY7QUFBZ0IscUJBQWEsRUFBQyxNQUE5QjtBQUFxQyxZQUFJLEVBQUMsVUFBMUM7QUFBcUQsZUFBTyxFQUFDLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUExTUYsRUE0TUUsTUFBQyx3REFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsZUFBTyxFQUFDLGlCQUZWO0FBR0UscUJBQWEsRUFBQyxNQUhoQjtBQUlFLFlBQUksRUFBQyxNQUpQO0FBS0UsZUFBTyxFQUFFLEtBQUtDLGNBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE1TUYsRUFtTkU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUcsRUFBRSxLQUFLdEIsZUFGWjtBQUdFLGdCQUFRLEVBQUUsS0FBS3VCLFlBSGpCO0FBSUUsYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFuTkYsQ0FGRixDQURGO0FBK05EOzs7O0VBbllvQkMsK0M7O0FBc1lSdEYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2V0dGluZ3MuZjkwODFlNDM5MTViYmRjMjBlYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIEJ1dHRvbixcclxuICBJbnB1dCxcclxuICBNZXNzYWdlLFxyXG4gIENoZWNrYm94LFxyXG4gIExhYmVsLFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL3NyYy93ZWIzLmpzJ1xyXG5cclxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbGlxdWlkYXRvckFkZHJlc3M6ICcnLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlOiAnJyxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzOiAnJyxcclxuICAgIHJlcGF5VG9rZW5BZGRyZXNzOiAnJyxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3M6ICcnLFxyXG4gICAgbGF0ZXN0THBDb3JlQWRkcmVzczogJycsXHJcbiAgICB3c3M6ICcnLFxyXG4gICAgaHR0cDogJycsXHJcbiAgICBtbmVtb25pYzogJycsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiAnJyxcclxuICAgIGR5bmFtaWNHYXNQcmljZTogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFtb3VudDogJycsXHJcbiAgICBnYXNQcmljZTogJycsXHJcbiAgICBnYXNMaW1pdDogJycsXHJcbiAgICByZWNlaXZlQVRva2VuczogZmFsc2UsXHJcbiAgICBmb3JtRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3I6IGZhbHNlLFxyXG4gICAgY29sbGF0ZXJhbEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICByZXBheVRva2VuQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICB3c3NFcnJvcjogZmFsc2UsXHJcbiAgICBodHRwRXJyb3I6IGZhbHNlLFxyXG4gICAgbW5lbW9uaWNFcnJvcjogZmFsc2UsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5RXJyb3I6IGZhbHNlLFxyXG4gICAgZHluYW1pY0dhc1ByaWNlRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnRFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGdhc0xpbWl0RXJyb3I6IGZhbHNlLFxyXG4gICAgcmVjZWl2ZUF0b2tlbnNFcnJvcjogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuXHJcbiAgICBsZXQgZXJyb3IgPSBmYWxzZVxyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChrZXkuZW5kc1dpdGgoJ0FkZHJlc3MnKSkge1xyXG4gICAgICAgIHZhciB2YWxpZEFkZHJlc3MgPSB3ZWIzLndlYjMudXRpbHMuY2hlY2tBZGRyZXNzQ2hlY2tzdW0odGhpcy5zdGF0ZVtrZXldKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBrZXk6IHRydWUgfSlcclxuICAgICAgICBlcnJvciA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1FcnJvcjogdHJ1ZSB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29uZmlnRmlsZSA9IHtcclxuICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHRoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogdGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICByZXBheVRva2VuQWRkcmVzczogdGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzcyxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogdGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICB3c3M6IHRoaXMuc3RhdGUud3NzLFxyXG4gICAgICBodHRwOiB0aGlzLnN0YXRlLmh0dHAsXHJcbiAgICAgIG1uZW1vbmljOiB0aGlzLnN0YXRlLm1uZW1vbmljLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiB0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogdGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiB0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICBnYXNQcmljZTogdGhpcy5zdGF0ZS5nYXNQcmljZSxcclxuICAgICAgZ2FzTGltaXQ6IHRoaXMuc3RhdGUuZ2FzTGltaXQsXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiB0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgfVxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoY29uZmlnRmlsZSldLCB7XHJcbiAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsICdzZXR0aW5ncy5qc29uJylcclxuICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UodGhpcy5zdGF0ZSlcclxuICB9XHJcblxyXG4gIGhpZGRlbkZpbGVJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgdXBsb2FkU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICB9XHJcbiAgcmVhZFNldHRpbmdzID0gKGV2ZW50KSA9PiB7XHJcbiAgICB2YXIgZmlsZVVwbG9hZGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICBmci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsaXF1aWRhdG9yQWRkcmVzczogcmVzdWx0LmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogcmVzdWx0LmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgICBjb2xsYXRlcmFsQWRkcmVzczogcmVzdWx0LmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiByZXN1bHQucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzcyxcclxuICAgICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiByZXN1bHQubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgICB3c3M6IHJlc3VsdC53c3MsXHJcbiAgICAgICAgaHR0cDogcmVzdWx0Lmh0dHAsXHJcbiAgICAgICAgbW5lbW9uaWM6IHJlc3VsdC5tbmVtb25pYyxcclxuICAgICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiByZXN1bHQuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgICBkeW5hbWljR2FzUHJpY2U6IHJlc3VsdC5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHJlc3VsdC5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgICBnYXNQcmljZTogcmVzdWx0Lmdhc1ByaWNlLFxyXG4gICAgICAgIGdhc0xpbWl0OiByZXN1bHQuZ2FzTGltaXQsXHJcbiAgICAgICAgcmVjZWl2ZUFUb2tlbnM6IHJlc3VsdC5yZWNlaXZlQVRva2VucyxcclxuICAgICAgfSlcclxuICAgICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZShyZXN1bHQpXHJcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZClcclxuICAgIH1cclxuXHJcbiAgICBmci5yZWFkQXNUZXh0KGZpbGVVcGxvYWRlZClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlc3Npb25TdG9yYWdlID0gKGRhdGEpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0b3JBZGRyZXNzJywgZGF0YS5saXF1aWRhdG9yQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScsIGRhdGEuYWRkcmVzc1RvTGlxdWlkYXRlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnLCBkYXRhLmNvbGxhdGVyYWxBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVwYXlUb2tlbkFkZHJlc3MnLCBkYXRhLnJlcGF5VG9rZW5BZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcycsXHJcbiAgICAgIGRhdGEubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzXHJcbiAgICApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdscEFkZHJlc3MnLCBkYXRhLmxwQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhdGVzdExwQ29yZUFkZHJlc3MnLCBkYXRhLmxhdGVzdExwQ29yZUFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3c3MnLCBkYXRhLndzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2h0dHAnLCBkYXRhLmh0dHApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtbmVtb25pYycsIGRhdGEubW5lbW9uaWMpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JywgZGF0YS5ldGhHYXNTdGF0aW9uQVBJS2V5KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJywgZGF0YS5keW5hbWljR2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcsIGRhdGEubGlxdWlkYXRpb25BbW91bnQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNQcmljZScsIGRhdGEuZ2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNMaW1pdCcsIGRhdGEuZ2FzTGltaXQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWNlaXZlQVRva2VucycsIGRhdGEucmVjZWl2ZUFUb2tlbnMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnKSxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhZGRyZXNzVG9MaXF1aWRhdGUnKSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NvbGxhdGVyYWxBZGRyZXNzJyksXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycpLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcydcclxuICAgICAgKSxcclxuICAgICAgbHBBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdscEFkZHJlc3MnKSxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycpLFxyXG4gICAgICB3c3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dzcycpLFxyXG4gICAgICBodHRwOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdodHRwJyksXHJcbiAgICAgIG1uZW1vbmljOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtbmVtb25pYycpLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JyksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJykgPT0gJ3RydWUnLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRpb25BbW91bnQnKSxcclxuICAgICAgZ2FzUHJpY2U6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc1ByaWNlJyksXHJcbiAgICAgIGdhc0xpbWl0OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXNMaW1pdCcpLFxyXG4gICAgICByZWNlaXZlQVRva2Vuczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVjZWl2ZUFUb2tlbnMnKSA9PSAndHJ1ZScsXHJcbiAgICB9KVxyXG4gIH1cclxuICAvL2FkZCB3cml0ZSB0byBzZXNzaW9uIHN0b3JhZ2Ugb25jaGFuZ2Ugb24gdGhlIHVucHV0c1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlxdWlkYXRpb25BZGRyZXNzRXJyb3IsICdSRU5ERVInKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+TGlxdWlkYXRpb24gU2V0dGluZ3M8L2gxPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17dGhpcy5zdGF0ZS5mb3JtRXJyb3J9PlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxpcXVpZGF0b3IgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRvckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyBUbyBMaXF1aWRhdGVcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc1RvTGlxdWlkYXRlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJDb2xsYXRlcmFsIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXRlcmFsQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJSZXBheSBUb2tlbiBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwYXlUb2tlbkFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiTGVuZGluZ1Bvb2xBZGRyZXNzUHJvdmlkZXIgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiTGVuZGluZ1Bvb2wgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxwQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBscEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiTGVuZGluZ1Bvb2xDb3JlIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhdGVzdExwQ29yZUFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiSW5mdXJhIFdTUyBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud3NzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiSW5mdXJhIEhUVFAgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmh0dHB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaHR0cDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJXYWxsZXQgTW5ldW1vbmljIC8gU2VlZCBQaHJhc2VcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tbmVtb25pY31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtbmVtb25pYzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJMaXF1aWRhdGlvbiBBbW91bnRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdGlvbkFtb3VudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkdhcyBMaW1pdFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc0xpbWl0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc0xpbWl0OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkVUSCBHQVMgU1RBVElPTiBBUEkgS0VZXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBldGhHYXNTdGF0aW9uQVBJS2V5OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkdhcyBQcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc1ByaWNlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJVc2UgRHluYW1pYyBHYXMgUHJpY2VcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBkeW5hbWljR2FzUHJpY2UgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljR2FzUHJpY2U6ICFkeW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiUmVjZWl2ZSBDb2xsYXRlcmFsIGFzIGFUb2tlbnNcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWNlaXZlQVRva2Vuc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCh7IHJlY2VpdmVBVG9rZW5zIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFUb2tlbnM6ICFyZWNlaXZlQVRva2VucyxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsYWJlbFBvc2l0aW9uPVwibGVmdFwiIGljb249XCJkb3dubG9hZFwiIGNvbnRlbnQ9XCJTYXZlXCIgLz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiVXBsb2FkIFNldHRpbmdzXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBpY29uPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBsb2FkU2V0dGluZ3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgcmVmPXt0aGlzLmhpZGRlbkZpbGVJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucmVhZFNldHRpbmdzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=