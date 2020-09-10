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

      if (isNaN(_this.state.liquidationAmount)) {
        _this.setState({
          liquidationAmountError: true
        });

        error = true;
      }

      if (isNaN(_this.state.gasLimit)) {
        _this.setState({
          gasLimitError: true
        });

        error = true;
      }

      if (isNaN(_this.state.gasPrice)) {
        _this.setState({
          gasPriceError: true
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
          lineNumber: 209,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 9
        }
      }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        error: this.state.formError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
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
          lineNumber: 213,
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
          lineNumber: 221,
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
          lineNumber: 232,
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
          lineNumber: 240,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
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
          lineNumber: 253,
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
          lineNumber: 261,
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
          lineNumber: 272,
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
          lineNumber: 280,
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
        label: "LendingPoolAddressProvider Address",
        error: this.state.lpAddressProviderAddressError ? {
          content: 'Please enter a valid address'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
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
          lineNumber: 300,
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
          lineNumber: 313,
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
          lineNumber: 321,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
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
          lineNumber: 333,
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
          lineNumber: 341,
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
          lineNumber: 352,
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
          lineNumber: 360,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
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
          lineNumber: 370,
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
          lineNumber: 378,
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
          lineNumber: 389,
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
          lineNumber: 397,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Liquidation Amount",
        error: this.state.liquidationAmountError ? {
          content: 'Must be numeric'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
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
          lineNumber: 416,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Limit",
        error: this.state.gasLimitError ? {
          content: 'Must be numeric'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
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
          lineNumber: 433,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
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
          lineNumber: 444,
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
          lineNumber: 452,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Gas Price",
        error: this.state.gasPriceError ? {
          content: 'Must be numeric'
        } : false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
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
          lineNumber: 470,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
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
          lineNumber: 481,
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
          lineNumber: 489,
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
          lineNumber: 500,
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
          lineNumber: 508,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
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
          lineNumber: 520,
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
          lineNumber: 522,
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
          lineNumber: 529,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRvckFkZHJlc3NFcnJvciIsImFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yIiwiY29sbGF0ZXJhbEFkZHJlc3NFcnJvciIsInJlcGF5VG9rZW5BZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvciIsImxwQWRkcmVzc0Vycm9yIiwibGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yIiwid3NzRXJyb3IiLCJodHRwRXJyb3IiLCJtbmVtb25pY0Vycm9yIiwiZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yIiwiZHluYW1pY0dhc1ByaWNlRXJyb3IiLCJsaXF1aWRhdGlvbkFtb3VudEVycm9yIiwiZ2FzUHJpY2VFcnJvciIsImdhc0xpbWl0RXJyb3IiLCJyZWNlaXZlQXRva2Vuc0Vycm9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuZHNXaXRoIiwidmFsaWRBZGRyZXNzIiwid2ViMyIsInV0aWxzIiwiY2hlY2tBZGRyZXNzQ2hlY2tzdW0iLCJzZXRTdGF0ZSIsInN0YXJ0c1dpdGgiLCJpc05hTiIsImNvbmZpZ0ZpbGUiLCJibG9iIiwiQmxvYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiRmlsZVNhdmVyIiwic2F2ZUFzIiwidXBkYXRlU2Vzc2lvblN0b3JhZ2UiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImhpZGRlbkZpbGVJbnB1dCIsImN1cnJlbnQiLCJjbGljayIsImZpbGVVcGxvYWRlZCIsInRhcmdldCIsImZpbGVzIiwiZnIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInJlc3VsdCIsInBhcnNlIiwiZm9ybWF0dGVkIiwicmVhZEFzVGV4dCIsImRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwibGlxdWlkYXRpb25BZGRyZXNzRXJyb3IiLCJvblN1Ym1pdCIsImNvbnRlbnQiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsInVwbG9hZFNldHRpbmdzIiwicmVhZFNldHRpbmdzIiwiZGlzcGxheSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsdUJBQWlCLEVBQUUsRUFEYjtBQUVOQyx3QkFBa0IsRUFBRSxFQUZkO0FBR05DLHVCQUFpQixFQUFFLEVBSGI7QUFJTkMsdUJBQWlCLEVBQUUsRUFKYjtBQUtOQyw4QkFBd0IsRUFBRSxFQUxwQjtBQU1OQyxlQUFTLEVBQUUsRUFOTDtBQU9OQyx5QkFBbUIsRUFBRSxFQVBmO0FBUU5DLFNBQUcsRUFBRSxFQVJDO0FBU05DLFVBQUksRUFBRSxFQVRBO0FBVU5DLGNBQVEsRUFBRSxFQVZKO0FBV05DLHlCQUFtQixFQUFFLEVBWGY7QUFZTkMscUJBQWUsRUFBRSxLQVpYO0FBYU5DLHVCQUFpQixFQUFFLEVBYmI7QUFjTkMsY0FBUSxFQUFFLEVBZEo7QUFlTkMsY0FBUSxFQUFFLEVBZko7QUFnQk5DLG9CQUFjLEVBQUUsS0FoQlY7QUFpQk5DLGVBQVMsRUFBRSxLQWpCTDtB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RTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsV0FBRyxFQUFFLEtBQUt2QixlQUZaO0FBR0UsZ0JBQVEsRUFBRSxLQUFLd0IsWUFIakI7QUFJRSxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTlURixDQUZGLENBREY7QUEwVUQ7Ozs7RUE1Z0JvQkMsK0M7O0FBK2dCUnpGLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLjUyZWU3Mjk4MWUyZWYzZGZlMmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgTWVzc2FnZSxcclxuICBDaGVja2JveCxcclxuICBMYWJlbCxcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJ1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9zcmMvd2ViMy5qcydcclxuXHJcbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGxpcXVpZGF0b3JBZGRyZXNzOiAnJyxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogJycsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzczogJycsXHJcbiAgICByZXBheVRva2VuQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6ICcnLFxyXG4gICAgbHBBZGRyZXNzOiAnJyxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6ICcnLFxyXG4gICAgd3NzOiAnJyxcclxuICAgIGh0dHA6ICcnLFxyXG4gICAgbW5lbW9uaWM6ICcnLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleTogJycsXHJcbiAgICBkeW5hbWljR2FzUHJpY2U6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnQ6ICcnLFxyXG4gICAgZ2FzUHJpY2U6ICcnLFxyXG4gICAgZ2FzTGltaXQ6ICcnLFxyXG4gICAgcmVjZWl2ZUFUb2tlbnM6IGZhbHNlLFxyXG4gICAgZm9ybUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0b3JBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3I6IGZhbHNlLFxyXG4gICAgY29sbGF0ZXJhbEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICByZXBheVRva2VuQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICB3c3NFcnJvcjogZmFsc2UsXHJcbiAgICBodHRwRXJyb3I6IGZhbHNlLFxyXG4gICAgbW5lbW9uaWNFcnJvcjogZmFsc2UsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5RXJyb3I6IGZhbHNlLFxyXG4gICAgZHluYW1pY0dhc1ByaWNlRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnRFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGdhc0xpbWl0RXJyb3I6IGZhbHNlLFxyXG4gICAgcmVjZWl2ZUF0b2tlbnNFcnJvcjogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuXHJcbiAgICBsZXQgZXJyb3IgPSBmYWxzZVxyXG5cclxuICAgIC8vIEFkZHJlc3MgVmFsaWRpdHkgQ2hlY2tcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChrZXkuZW5kc1dpdGgoJ0FkZHJlc3MnKSB8fCBrZXkgPT0gJ2FkZHJlc3NUb0xpcXVpZGF0ZScpIHtcclxuICAgICAgICB2YXIgdmFsaWRBZGRyZXNzID0gIXdlYjMud2ViMy51dGlscy5jaGVja0FkZHJlc3NDaGVja3N1bShcclxuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2tleSArICdFcnJvciddOiB2YWxpZEFkZHJlc3MgfSlcclxuICAgICAgICBpZiAodmFsaWRBZGRyZXNzKSB7XHJcbiAgICAgICAgICBlcnJvciA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLndzcy5zdGFydHNXaXRoKCd3c3M6Ly8nKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgd3NzRXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmh0dHAuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaHR0cEVycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTih0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50KSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRpb25BbW91bnRFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBlcnJvciA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4odGhpcy5zdGF0ZS5nYXNMaW1pdCkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc0xpbWl0RXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHRoaXMuc3RhdGUuZ2FzUHJpY2UpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNQcmljZUVycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybUVycm9yOiB0cnVlIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb25maWdGaWxlID0ge1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogdGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzcyxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiB0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHRoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3MsXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiB0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHRoaXMuc3RhdGUubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICBscEFkZHJlc3M6IHRoaXMuc3RhdGUubHBBZGRyZXNzLFxyXG4gICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiB0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3MsXHJcbiAgICAgIHdzczogdGhpcy5zdGF0ZS53c3MsXHJcbiAgICAgIGh0dHA6IHRoaXMuc3RhdGUuaHR0cCxcclxuICAgICAgbW5lbW9uaWM6IHRoaXMuc3RhdGUubW5lbW9uaWMsXHJcbiAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHRoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgZHluYW1pY0dhc1ByaWNlOiB0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHRoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnQsXHJcbiAgICAgIGdhc1ByaWNlOiB0aGlzLnN0YXRlLmdhc1ByaWNlLFxyXG4gICAgICBnYXNMaW1pdDogdGhpcy5zdGF0ZS5nYXNMaW1pdCxcclxuICAgICAgcmVjZWl2ZUFUb2tlbnM6IHRoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnMsXHJcbiAgICB9XHJcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShjb25maWdGaWxlKV0sIHtcclxuICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSlcclxuICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgJ3NldHRpbmdzLmpzb24nKVxyXG4gICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZSh0aGlzLnN0YXRlKVxyXG4gIH1cclxuXHJcbiAgaGlkZGVuRmlsZUlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICB1cGxvYWRTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKVxyXG4gIH1cclxuICByZWFkU2V0dGluZ3MgPSAoZXZlbnQpID0+IHtcclxuICAgIHZhciBmaWxlVXBsb2FkZWQgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKClcclxuICAgIGZyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdClcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiByZXN1bHQubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiByZXN1bHQuYWRkcmVzc1RvTGlxdWlkYXRlLFxyXG4gICAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiByZXN1bHQuY29sbGF0ZXJhbEFkZHJlc3MsXHJcbiAgICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHJlc3VsdC5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHJlc3VsdC5scEFkZHJlc3NQcm92aWRlckFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzLFxyXG4gICAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHJlc3VsdC5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICAgIHdzczogcmVzdWx0LndzcyxcclxuICAgICAgICBodHRwOiByZXN1bHQuaHR0cCxcclxuICAgICAgICBtbmVtb25pYzogcmVzdWx0Lm1uZW1vbmljLFxyXG4gICAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHJlc3VsdC5ldGhHYXNTdGF0aW9uQVBJS2V5LFxyXG4gICAgICAgIGR5bmFtaWNHYXNQcmljZTogcmVzdWx0LmR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgICBsaXF1aWRhdGlvbkFtb3VudDogcmVzdWx0LmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICAgIGdhc1ByaWNlOiByZXN1bHQuZ2FzUHJpY2UsXHJcbiAgICAgICAgZ2FzTGltaXQ6IHJlc3VsdC5nYXNMaW1pdCxcclxuICAgICAgICByZWNlaXZlQVRva2VuczogcmVzdWx0LnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnVwZGF0ZVNlc3Npb25TdG9yYWdlKHJlc3VsdClcclxuICAgICAgdmFyIGZvcm1hdHRlZCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMilcclxuICAgICAgY29uc29sZS5sb2coZm9ybWF0dGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGZyLnJlYWRBc1RleHQoZmlsZVVwbG9hZGVkKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2Vzc2lvblN0b3JhZ2UgPSAoZGF0YSkgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnLCBkYXRhLmxpcXVpZGF0b3JBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWRkcmVzc1RvTGlxdWlkYXRlJywgZGF0YS5hZGRyZXNzVG9MaXF1aWRhdGUpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjb2xsYXRlcmFsQWRkcmVzcycsIGRhdGEuY29sbGF0ZXJhbEFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycsIGRhdGEucmVwYXlUb2tlbkFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJyxcclxuICAgICAgZGF0YS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3NcclxuICAgIClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xwQWRkcmVzcycsIGRhdGEubHBBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycsIGRhdGEubGF0ZXN0THBDb3JlQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dzcycsIGRhdGEud3NzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaHR0cCcsIGRhdGEuaHR0cClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ21uZW1vbmljJywgZGF0YS5tbmVtb25pYylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknLCBkYXRhLmV0aEdhc1N0YXRpb25BUElLZXkpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnLCBkYXRhLmR5bmFtaWNHYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0aW9uQW1vdW50JywgZGF0YS5saXF1aWRhdGlvbkFtb3VudClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc1ByaWNlJywgZGF0YS5nYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc0xpbWl0JywgZGF0YS5nYXNMaW1pdClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlY2VpdmVBVG9rZW5zJywgZGF0YS5yZWNlaXZlQVRva2VucylcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdG9yQWRkcmVzcycpLFxyXG4gICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScpLFxyXG4gICAgICBjb2xsYXRlcmFsQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnKSxcclxuICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlcGF5VG9rZW5BZGRyZXNzJyksXHJcbiAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJ1xyXG4gICAgICApLFxyXG4gICAgICBscEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xwQWRkcmVzcycpLFxyXG4gICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYXRlc3RMcENvcmVBZGRyZXNzJyksXHJcbiAgICAgIHdzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd3NzJyksXHJcbiAgICAgIGh0dHA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2h0dHAnKSxcclxuICAgICAgbW5lbW9uaWM6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21uZW1vbmljJyksXHJcbiAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknKSxcclxuICAgICAgZHluYW1pY0dhc1ByaWNlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnKSA9PSAndHJ1ZScsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcpLFxyXG4gICAgICBnYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FzUHJpY2UnKSxcclxuICAgICAgZ2FzTGltaXQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc0xpbWl0JyksXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWNlaXZlQVRva2VucycpID09ICd0cnVlJyxcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vYWRkIHdyaXRlIHRvIHNlc3Npb24gc3RvcmFnZSBvbmNoYW5nZSBvbiB0aGUgdW5wdXRzXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFkZHJlc3NFcnJvciwgJ1JFTkRFUicpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5MaXF1aWRhdGlvbiBTZXR0aW5nczwvaDE+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXt0aGlzLnN0YXRlLmZvcm1FcnJvcn0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGlxdWlkYXRvciBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3Mgd2hpY2ggbWFrZXMgdGhlIGxpcXVpZGF0aW9uIGNhbGxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdG9yQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzIFRvIExpcXVpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGVFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyB0byBiZSBsaXF1aWRhdGVkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzVG9MaXF1aWRhdGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29sbGF0ZXJhbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3Mgb2YgdGhlIGNvbGxhdGVyYWwgdG8gcmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXRlcmFsQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIlJlcGF5IFRva2VuIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBvZiB0aGUgdG9rZW4gdGhhdCBpcyByZXBhaWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwYXlUb2tlbkFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMZW5kaW5nUG9vbEFkZHJlc3NQcm92aWRlciBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZW5kaW5nUG9vbEFkZHJlc3NQcm92aWRlciBjb250cmFjdCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMZW5kaW5nUG9vbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxwQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZW5kaW5nUG9vbCBjb250cmFjdCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxwQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBscEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMZW5kaW5nUG9vbENvcmUgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlbmRpbmdQb29sQ29yZSBjb250cmFjdCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGF0ZXN0THBDb3JlQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkluZnVyYSBXU1MgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53c3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ011c3Qgc3RhcnQgd2l0aCA8d3NzOi8vPicgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmZ1cmEgV1NTIHByb2plY3QgZW5kcG9pbnRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud3NzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJbmZ1cmEgSFRUUCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmh0dHBFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ011c3Qgc3RhcnQgd2l0aCA8aHR0cHM6Ly8+JyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZnVyYSBodHRwIHByb2plY3QgZW5kcG9pbnRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaHR0cH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBodHRwOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiV2FsbGV0IE1uZXVtb25pYyAvIFNlZWQgUGhyYXNlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1uZW1vbmljRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tbmVtb25pY31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtbmVtb25pYzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxpcXVpZGF0aW9uIEFtb3VudFwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudEVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnTXVzdCBiZSBudW1lcmljJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdGlvbkFtb3VudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiR2FzIExpbWl0XCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdhc0xpbWl0RXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdNdXN0IGJlIG51bWVyaWMnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc0xpbWl0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc0xpbWl0OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRVRIIEdBUyBTVEFUSU9OIEFQSSBLRVlcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBldGhHYXNTdGF0aW9uQVBJS2V5OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiR2FzIFByaWNlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdhc1ByaWNlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdNdXN0IGJlIG51bWVyaWMnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc1ByaWNlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZSBEeW5hbWljIEdhcyBQcmljZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2VFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCh7IGR5bmFtaWNHYXNQcmljZSB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNHYXNQcmljZTogIWR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIlJlY2VpdmUgQ29sbGF0ZXJhbCBhcyBhVG9rZW5zXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlY2VpdmVBdG9rZW5zRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWNlaXZlQVRva2Vuc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCh7IHJlY2VpdmVBVG9rZW5zIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFUb2tlbnM6ICFyZWNlaXZlQVRva2VucyxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsYWJlbFBvc2l0aW9uPVwibGVmdFwiIGljb249XCJkb3dubG9hZFwiIGNvbnRlbnQ9XCJTYXZlXCIgLz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiVXBsb2FkIFNldHRpbmdzXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBpY29uPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBsb2FkU2V0dGluZ3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgcmVmPXt0aGlzLmhpZGRlbkZpbGVJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucmVhZFNldHRpbmdzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=