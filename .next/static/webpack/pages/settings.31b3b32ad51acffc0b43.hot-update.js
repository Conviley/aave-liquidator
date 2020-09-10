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
      var error = false;
      Object.keys(_this.state).map(function (key) {
        if (key.endsWith('Address')) {
          var validAddress = !_src_web3_js__WEBPACK_IMPORTED_MODULE_11___default.a.web3.utils.checkAddressChecksum(_this.state[key]);
          console.log(key + 'Error', validAddress);

          _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, key + 'Error', validAddress));

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
          lineNumber: 185,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        error: this.state.formError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
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
          lineNumber: 189,
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
          lineNumber: 197,
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
          lineNumber: 207,
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
          lineNumber: 215,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Collateral Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
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
          lineNumber: 228,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Repay Token Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
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
          lineNumber: 239,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolAddressProvider Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
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
          lineNumber: 251,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPool Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
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
          lineNumber: 264,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "LendingPoolCore Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
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
          lineNumber: 276,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura WSS Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
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
          lineNumber: 287,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Infura HTTP Address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
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
          lineNumber: 297,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Wallet Mneumonic / Seed Phrase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
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
          lineNumber: 308,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Liquidation Amount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
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
          lineNumber: 320,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Limit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
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
          lineNumber: 330,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "ETH GAS STATION API KEY",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
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
          lineNumber: 342,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
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
          lineNumber: 353,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Use Dynamic Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
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
          lineNumber: 365,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Receive Collateral as aTokens",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
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
          lineNumber: 377,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
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
          lineNumber: 389,
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
          lineNumber: 391,
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
          lineNumber: 398,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRvckFkZHJlc3NFcnJvciIsImFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yIiwiY29sbGF0ZXJhbEFkZHJlc3NFcnJvciIsInJlcGF5VG9rZW5BZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvciIsImxwQWRkcmVzc0Vycm9yIiwibGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yIiwid3NzRXJyb3IiLCJodHRwRXJyb3IiLCJtbmVtb25pY0Vycm9yIiwiZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yIiwiZHluYW1pY0dhc1ByaWNlRXJyb3IiLCJsaXF1aWRhdGlvbkFtb3VudEVycm9yIiwiZ2FzUHJpY2VFcnJvciIsImdhc0xpbWl0RXJyb3IiLCJyZWNlaXZlQXRva2Vuc0Vycm9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuZHNXaXRoIiwidmFsaWRBZGRyZXNzIiwid2ViMyIsInV0aWxzIiwiY2hlY2tBZGRyZXNzQ2hlY2tzdW0iLCJzZXRTdGF0ZSIsImNvbmZpZ0ZpbGUiLCJibG9iIiwiQmxvYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiRmlsZVNhdmVyIiwic2F2ZUFzIiwidXBkYXRlU2Vzc2lvblN0b3JhZ2UiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImhpZGRlbkZpbGVJbnB1dCIsImN1cnJlbnQiLCJjbGljayIsImZpbGVVcGxvYWRlZCIsInRhcmdldCIsImZpbGVzIiwiZnIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInJlc3VsdCIsInBhcnNlIiwiZm9ybWF0dGVkIiwicmVhZEFzVGV4dCIsImRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwibGlxdWlkYXRpb25BZGRyZXNzRXJyb3IiLCJvblN1Ym1pdCIsImNvbnRlbnQiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsInVwbG9hZFNldHRpbmdzIiwicmVhZFNldHRpbmdzIiwiZGlzcGxheSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsdUJBQWlCLEVBQUUsRUFEYjtBQUVOQyx3QkFBa0IsRUFBRSxFQUZkO0FBR05DLHVCQUFpQixFQUFFLEVBSGI7QUFJTkMsdUJBQWlCLEVBQUUsRUFKYjtBQUtOQyw4QkFBd0IsRUFBRSxFQUxwQjtBQU1OQyxlQUFTLEVBQUUsRUFOTDtBQU9OQyx5QkFBbUIsRUFBRSxFQVBmO0FBUU5DLFNBQUcsRUFBRSxFQVJDO0FBU05DLFVBQUksRUFBRSxFQVRBO0FBVU5DLGNBQVEsRUFBRSxFQVZKO0FBV05DLHlCQUFtQixFQUFFLEVBWGY7QUFZTkMscUJBQWUsRUFBRSxLQVpYO0FBYU5DLHVCQUFpQixFQUFFLEVBYmI7QUFjTkMsY0FBUSxFQUFFLEVBZEo7QUFlTkMsY0FBUSxFQUFFLEVBZko7QUFnQk5DLG9CQUFjLEVBQUUsS0FoQlY7QUFpQk5DLGVBQVMsRUFBRSxLQWpCTDtBQWtCTkMsNEJBQXNCLEVBQUUsS0Fs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MzFiM2IzMmFkNTFhY2ZmYzBiNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIEJ1dHRvbixcclxuICBJbnB1dCxcclxuICBNZXNzYWdlLFxyXG4gIENoZWNrYm94LFxyXG4gIExhYmVsLFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL3NyYy93ZWIzLmpzJ1xyXG5cclxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbGlxdWlkYXRvckFkZHJlc3M6ICcnLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlOiAnJyxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzOiAnJyxcclxuICAgIHJlcGF5VG9rZW5BZGRyZXNzOiAnJyxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3M6ICcnLFxyXG4gICAgbGF0ZXN0THBDb3JlQWRkcmVzczogJycsXHJcbiAgICB3c3M6ICcnLFxyXG4gICAgaHR0cDogJycsXHJcbiAgICBtbmVtb25pYzogJycsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiAnJyxcclxuICAgIGR5bmFtaWNHYXNQcmljZTogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFtb3VudDogJycsXHJcbiAgICBnYXNQcmljZTogJycsXHJcbiAgICBnYXNMaW1pdDogJycsXHJcbiAgICByZWNlaXZlQVRva2VuczogZmFsc2UsXHJcbiAgICBmb3JtRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRvckFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBhZGRyZXNzVG9MaXF1aWRhdGVFcnJvcjogZmFsc2UsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIHJlcGF5VG9rZW5BZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbHBBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIHdzc0Vycm9yOiBmYWxzZSxcclxuICAgIGh0dHBFcnJvcjogZmFsc2UsXHJcbiAgICBtbmVtb25pY0Vycm9yOiBmYWxzZSxcclxuICAgIGV0aEdhc1N0YXRpb25BUElLZXlFcnJvcjogZmFsc2UsXHJcbiAgICBkeW5hbWljR2FzUHJpY2VFcnJvcjogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFtb3VudEVycm9yOiBmYWxzZSxcclxuICAgIGdhc1ByaWNlRXJyb3I6IGZhbHNlLFxyXG4gICAgZ2FzTGltaXRFcnJvcjogZmFsc2UsXHJcbiAgICByZWNlaXZlQXRva2Vuc0Vycm9yOiBmYWxzZSxcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG5cclxuICAgIGxldCBlcnJvciA9IGZhbHNlXHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZSkubWFwKChrZXkpID0+IHtcclxuICAgICAgaWYgKGtleS5lbmRzV2l0aCgnQWRkcmVzcycpKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkQWRkcmVzcyA9ICF3ZWIzLndlYjMudXRpbHMuY2hlY2tBZGRyZXNzQ2hlY2tzdW0oXHJcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGtleSArICdFcnJvcicsIHZhbGlkQWRkcmVzcylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2tleSArICdFcnJvciddOiB2YWxpZEFkZHJlc3MgfSlcclxuXHJcbiAgICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdOT1BFJylcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1FcnJvcjogdHJ1ZSB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29uZmlnRmlsZSA9IHtcclxuICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHRoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogdGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICByZXBheVRva2VuQWRkcmVzczogdGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzcyxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogdGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICB3c3M6IHRoaXMuc3RhdGUud3NzLFxyXG4gICAgICBodHRwOiB0aGlzLnN0YXRlLmh0dHAsXHJcbiAgICAgIG1uZW1vbmljOiB0aGlzLnN0YXRlLm1uZW1vbmljLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiB0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogdGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiB0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICBnYXNQcmljZTogdGhpcy5zdGF0ZS5nYXNQcmljZSxcclxuICAgICAgZ2FzTGltaXQ6IHRoaXMuc3RhdGUuZ2FzTGltaXQsXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiB0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgfVxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoY29uZmlnRmlsZSldLCB7XHJcbiAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsICdzZXR0aW5ncy5qc29uJylcclxuICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UodGhpcy5zdGF0ZSlcclxuICB9XHJcblxyXG4gIGhpZGRlbkZpbGVJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgdXBsb2FkU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICB9XHJcbiAgcmVhZFNldHRpbmdzID0gKGV2ZW50KSA9PiB7XHJcbiAgICB2YXIgZmlsZVVwbG9hZGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICBmci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsaXF1aWRhdG9yQWRkcmVzczogcmVzdWx0LmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogcmVzdWx0LmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgICBjb2xsYXRlcmFsQWRkcmVzczogcmVzdWx0LmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiByZXN1bHQucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzcyxcclxuICAgICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiByZXN1bHQubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgICB3c3M6IHJlc3VsdC53c3MsXHJcbiAgICAgICAgaHR0cDogcmVzdWx0Lmh0dHAsXHJcbiAgICAgICAgbW5lbW9uaWM6IHJlc3VsdC5tbmVtb25pYyxcclxuICAgICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiByZXN1bHQuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgICBkeW5hbWljR2FzUHJpY2U6IHJlc3VsdC5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHJlc3VsdC5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgICBnYXNQcmljZTogcmVzdWx0Lmdhc1ByaWNlLFxyXG4gICAgICAgIGdhc0xpbWl0OiByZXN1bHQuZ2FzTGltaXQsXHJcbiAgICAgICAgcmVjZWl2ZUFUb2tlbnM6IHJlc3VsdC5yZWNlaXZlQVRva2VucyxcclxuICAgICAgfSlcclxuICAgICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZShyZXN1bHQpXHJcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZClcclxuICAgIH1cclxuXHJcbiAgICBmci5yZWFkQXNUZXh0KGZpbGVVcGxvYWRlZClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlc3Npb25TdG9yYWdlID0gKGRhdGEpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0b3JBZGRyZXNzJywgZGF0YS5saXF1aWRhdG9yQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScsIGRhdGEuYWRkcmVzc1RvTGlxdWlkYXRlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnLCBkYXRhLmNvbGxhdGVyYWxBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVwYXlUb2tlbkFkZHJlc3MnLCBkYXRhLnJlcGF5VG9rZW5BZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcycsXHJcbiAgICAgIGRhdGEubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzXHJcbiAgICApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdscEFkZHJlc3MnLCBkYXRhLmxwQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhdGVzdExwQ29yZUFkZHJlc3MnLCBkYXRhLmxhdGVzdExwQ29yZUFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3c3MnLCBkYXRhLndzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2h0dHAnLCBkYXRhLmh0dHApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtbmVtb25pYycsIGRhdGEubW5lbW9uaWMpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JywgZGF0YS5ldGhHYXNTdGF0aW9uQVBJS2V5KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJywgZGF0YS5keW5hbWljR2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcsIGRhdGEubGlxdWlkYXRpb25BbW91bnQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNQcmljZScsIGRhdGEuZ2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNMaW1pdCcsIGRhdGEuZ2FzTGltaXQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWNlaXZlQVRva2VucycsIGRhdGEucmVjZWl2ZUFUb2tlbnMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnKSxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhZGRyZXNzVG9MaXF1aWRhdGUnKSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NvbGxhdGVyYWxBZGRyZXNzJyksXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycpLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcydcclxuICAgICAgKSxcclxuICAgICAgbHBBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdscEFkZHJlc3MnKSxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycpLFxyXG4gICAgICB3c3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dzcycpLFxyXG4gICAgICBodHRwOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdodHRwJyksXHJcbiAgICAgIG1uZW1vbmljOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtbmVtb25pYycpLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JyksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJykgPT0gJ3RydWUnLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRpb25BbW91bnQnKSxcclxuICAgICAgZ2FzUHJpY2U6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc1ByaWNlJyksXHJcbiAgICAgIGdhc0xpbWl0OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXNMaW1pdCcpLFxyXG4gICAgICByZWNlaXZlQVRva2Vuczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVjZWl2ZUFUb2tlbnMnKSA9PSAndHJ1ZScsXHJcbiAgICB9KVxyXG4gIH1cclxuICAvL2FkZCB3cml0ZSB0byBzZXNzaW9uIHN0b3JhZ2Ugb25jaGFuZ2Ugb24gdGhlIHVucHV0c1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlxdWlkYXRpb25BZGRyZXNzRXJyb3IsICdSRU5ERVInKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+TGlxdWlkYXRpb24gU2V0dGluZ3M8L2gxPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17dGhpcy5zdGF0ZS5mb3JtRXJyb3J9PlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxpcXVpZGF0b3IgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdG9yQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzIFRvIExpcXVpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGVFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzVG9MaXF1aWRhdGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkNvbGxhdGVyYWwgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhdGVyYWxBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlJlcGF5IFRva2VuIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXBheVRva2VuQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJMZW5kaW5nUG9vbEFkZHJlc3NQcm92aWRlciBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJMZW5kaW5nUG9vbCBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubHBBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxwQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJMZW5kaW5nUG9vbENvcmUgQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGF0ZXN0THBDb3JlQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJJbmZ1cmEgV1NTIEFkZHJlc3NcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS53c3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgd3NzOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJJbmZ1cmEgSFRUUCBBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaHR0cH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBodHRwOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIldhbGxldCBNbmV1bW9uaWMgLyBTZWVkIFBocmFzZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1uZW1vbmljfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1uZW1vbmljOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIkxpcXVpZGF0aW9uIEFtb3VudFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0aW9uQW1vdW50OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiR2FzIExpbWl0XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIldFSVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FzTGltaXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2FzTGltaXQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiRVRIIEdBUyBTVEFUSU9OIEFQSSBLRVlcIj5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ldGhHYXNTdGF0aW9uQVBJS2V5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV0aEdhc1N0YXRpb25BUElLZXk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiR2FzIFByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIldFSVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FzUHJpY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2FzUHJpY2U6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlVzZSBEeW5hbWljIEdhcyBQcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCh7IGR5bmFtaWNHYXNQcmljZSB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNHYXNQcmljZTogIWR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJSZWNlaXZlIENvbGxhdGVyYWwgYXMgYVRva2Vuc1wiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgcmVjZWl2ZUFUb2tlbnMgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQVRva2VuczogIXJlY2VpdmVBVG9rZW5zLFxyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxhYmVsUG9zaXRpb249XCJsZWZ0XCIgaWNvbj1cImRvd25sb2FkXCIgY29udGVudD1cIlNhdmVcIiAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJVcGxvYWQgU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIGljb249XCJmaWxlXCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGxvYWRTZXR0aW5nc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICByZWY9e3RoaXMuaGlkZGVuRmlsZUlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZWFkU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==