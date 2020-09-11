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
/* harmony import */ var _components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SettingFormInput */ "./components/SettingFormInput.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_web3_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/web3.js */ "./src/web3.js");
/* harmony import */ var _src_web3_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_web3_js__WEBPACK_IMPORTED_MODULE_12__);







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

      if (_this.validateState()) {
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
      file_saver__WEBPACK_IMPORTED_MODULE_11___default.a.saveAs(blob, 'settings.json');

      _this.updateSessionStorage(_this.state);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "hiddenFileInput", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "uploadSettings", function () {
      _this.hiddenFileInput.current.click();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "readSettings", function (event) {
      console.log('poppopopop');
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

        _this.validateState();

        _this.updateSessionStorage(result);

        var formatted = JSON.stringify(result, null, 2);
        console.log(formatted);
      };

      fr.readAsText(fileUploaded);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "validateState", function () {
      var error = false; // Address Validity Check

      Object.keys(_this.state).map(function (key) {
        if (key.endsWith('Address') || key == 'addressToLiquidate') {
          var validAddress;
          validAddress = !_src_web3_js__WEBPACK_IMPORTED_MODULE_12___default.a.web3.utils.isAddress(_this.state[key]);

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

      if (_this.state.mnemonic.split(' ').length != 12) {
        _this.setState({
          mnemonicError: true
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

      _this.setState({
        formError: error
      });

      return error;
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

      console.log(this.state.liquidationAddressError, 'RENDER'); //this.updateSessionStorage(this.state)

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 9
        }
      }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit,
        error: this.state.formError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }
      }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Liquidator Address",
        error: this.state.liquidatorAddressError,
        errorContent: 'Please enter a valid address',
        inputLabel: "HEX",
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
          lineNumber: 218,
          columnNumber: 13
        }
      }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Address To Liquidate",
        error: this.state.addressToLiquidateError,
        errorContent: 'Please enter a valid address',
        inputLabel: "HEX",
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
          lineNumber: 229,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }
      }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Collateral Address",
        error: this.state.collateralAddressError,
        errorContent: 'Please enter a valid address',
        inputLabel: "HEX",
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
          lineNumber: 243,
          columnNumber: 13
        }
      }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Repay Token Address",
        error: this.state.repayTokenAddressError,
        errorContent: 'Please enter a valid address',
        inputLabel: "HEX",
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
          lineNumber: 254,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }
      }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "LendingPoolAddressProvider Address",
        error: this.state.lpAddressProviderAddressError,
        errorContent: 'Please enter a valid address',
        inputLabel: "HEX",
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
          lineNumber: 268,
          columnNumber: 13
        }
      }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "LendingPool Address",
        error: this.state.lpAddressError,
        errorContent: 'Please enter a valid address',
        inputLabel: "HEX",
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
          lineNumber: 281,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }
      }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "LendingPoolCore Address",
        error: this.state.latestLpCoreAddressError,
        errorContent: 'Please enter a valid address',
        inputLabel: "HEX",
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
          lineNumber: 295,
          columnNumber: 13
        }
      }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Infura WSS Address",
        error: this.state.wssError,
        errorContent: 'Must start with <wss://>',
        inputLabel: "URL",
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
          lineNumber: 306,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 11
        }
      }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Infura HTTP Address",
        error: this.state.httpError,
        errorContent: 'Must start with <https://>',
        inputLabel: "URL",
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
          lineNumber: 318,
          columnNumber: 13
        }
      }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Wallet Mneumonic / Seed Phrase",
        error: this.state.mnemonicError,
        errorContent: 'Must input 12 word seed phrase',
        inputLabel: "String",
        placeholder: "12 word seed phrase",
        value: this.state.mnemonic,
        onChange: function onChange(event) {
          return _this2.setState({
            mnemonic: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 11
        }
      }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Liquidation Amount",
        error: this.state.liquidationAmountError,
        errorContent: 'Must be numeric',
        inputLabel: "WEI",
        placeholder: "<0> for max liquidation",
        value: this.state.liquidationAmount,
        onChange: function onChange(event) {
          return _this2.setState({
            liquidationAmount: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 13
        }
      }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Gas Limit",
        error: this.state.gasLimitError,
        errorContent: 'Must be numeric',
        inputLabel: "GAS",
        placeholder: "Max amount of gas liquidator is allowed to spend",
        value: this.state.gasLimit,
        onChange: function onChange(event) {
          return _this2.setState({
            gasLimit: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        widths: "equal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 11
        }
      }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "ETH GAS STATION API KEY",
        error: this.state.ethGasStationAPIKeyError,
        errorContent: 'None',
        inputLabel: "String",
        placeholder: "Ethereum Gas station api key",
        value: this.state.ethGasStationAPIKey,
        onChange: function onChange(event) {
          return _this2.setState({
            ethGasStationAPIKey: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 13
        }
      }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Gas Price",
        error: this.state.gasPriceError,
        errorContent: 'Must be numeric',
        inputLabel: "WEI",
        placeholder: "Gas price",
        value: this.state.gasPrice,
        onChange: function onChange(event) {
          return _this2.setState({
            gasPrice: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Use Dynamic Gas Price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
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
          lineNumber: 392,
          columnNumber: 15
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Input, {
        label: "Receive Collateral as aTokens",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
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
          lineNumber: 404,
          columnNumber: 15
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true,
        labelPosition: "left",
        icon: "download",
        content: "Save",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
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
          lineNumber: 418,
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
          lineNumber: 425,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRvckFkZHJlc3NFcnJvciIsImFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yIiwiY29sbGF0ZXJhbEFkZHJlc3NFcnJvciIsInJlcGF5VG9rZW5BZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvciIsImxwQWRkcmVzc0Vycm9yIiwibGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yIiwid3NzRXJyb3IiLCJodHRwRXJyb3IiLCJtbmVtb25pY0Vycm9yIiwiZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yIiwiZHluYW1pY0dhc1ByaWNlRXJyb3IiLCJsaXF1aWRhdGlvbkFtb3VudEVycm9yIiwiZ2FzUHJpY2VFcnJvciIsImdhc0xpbWl0RXJyb3IiLCJyZWNlaXZlQXRva2Vuc0Vycm9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInZhbGlkYXRlU3RhdGUiLCJjb25maWdGaWxlIiwiYmxvYiIsIkJsb2IiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsIkZpbGVTYXZlciIsInNhdmVBcyIsInVwZGF0ZVNlc3Npb25TdG9yYWdlIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoaWRkZW5GaWxlSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJmaWxlVXBsb2FkZWQiLCJ0YXJnZXQiLCJmaWxlcyIsImZyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJyZXN1bHQiLCJwYXJzZSIsInNldFN0YXRlIiwiZm9ybWF0dGVkIiwicmVhZEFzVGV4dCIsImVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuZHNXaXRoIiwidmFsaWRBZGRyZXNzIiwid2ViMyIsInV0aWxzIiwiaXNBZGRyZXNzIiwic3RhcnRzV2l0aCIsInNwbGl0IiwibGVuZ3RoIiwiaXNOYU4iLCJkYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yIiwib25TdWJtaXQiLCJ2YWx1ZSIsInVwbG9hZFNldHRpbmdzIiwicmVhZFNldHRpbmdzIiwiZGlzcGxheSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsdUJBQWlCLEVBQUUsRUFEYjtBQUVOQyx3QkFBa0IsRUFBRSxFQUZkO0FBR05DLHVCQUFpQixFQUFFLEVBSGI7QUFJTkMsdUJBQWlCLEVBQUUsRUFKYjtBQUtOQyw4QkFBd0IsRUFBRSxFQUxwQjtBQU1OQyxlQUFTLEVBQUUsRUFOTDtBQU9OQyx5QkFBbUIsRUFBRSxFQVBmO0FBUU5DLFNBQUcsRUFBRSxFQVJDO0FBU05DLFVBQUksRUFBRSxFQVRBO0FBVU5DLGNBQVEsRUFBRSxFQVZKO0FBV05DLHlCQUFtQixFQUFFLEVBWGY7QUFZTkMscUJBQWUsRUFBRSxLQVpYO0FBYU5DLHVCQUFpQixFQUFFLEVBYmI7QUFjTkMsY0FBUSxFQUFFLEVBZEo7QUFlTkMsY0FBUSxFQUFFLEVBZko7QUFnQk5DLG9CQUFjLEVBQUUsS0FoQlY7QUFpQk5DLGVBQVMsRUFBRSxLQWpC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Q3JDQSw0QkFBYyxFQUFFLENBQUNBO0FBRG9CLGFBQXpCO0FBQUEsV0FBZCxDQURRO0FBQUEsU0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FiRixDQTlLRixFQXdNRSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLHFCQUFhLEVBQUMsTUFBOUI7QUFBcUMsWUFBSSxFQUFDLFVBQTFDO0FBQXFELGVBQU8sRUFBQyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBeE1GLEVBME1FLE1BQUMsd0RBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGVBQU8sRUFBQyxpQkFGVjtBQUdFLHFCQUFhLEVBQUMsTUFIaEI7QUFJRSxZQUFJLEVBQUMsTUFKUDtBQUtFLGVBQU8sRUFBRSxLQUFLdUUsY0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTFNRixFQWlORTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsV0FBRyxFQUFFLEtBQUtwQyxlQUZaO0FBR0UsZ0JBQVEsRUFBRSxLQUFLcUMsWUFIakI7QUFJRSxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWpORixDQUZGLENBREY7QUE2TkQ7Ozs7RUExYW9CQywrQzs7QUE2YVIxRix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy41ZDRkODg1Njg1NjMwMWIzNzVlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlLCBDaGVja2JveCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgU2V0dGluZ3NGb3JtSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9TZXR0aW5nRm9ybUlucHV0J1xyXG5pbXBvcnQgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL3NyYy93ZWIzLmpzJ1xyXG5cclxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbGlxdWlkYXRvckFkZHJlc3M6ICcnLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlOiAnJyxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzOiAnJyxcclxuICAgIHJlcGF5VG9rZW5BZGRyZXNzOiAnJyxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3M6ICcnLFxyXG4gICAgbGF0ZXN0THBDb3JlQWRkcmVzczogJycsXHJcbiAgICB3c3M6ICcnLFxyXG4gICAgaHR0cDogJycsXHJcbiAgICBtbmVtb25pYzogJycsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiAnJyxcclxuICAgIGR5bmFtaWNHYXNQcmljZTogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFtb3VudDogJycsXHJcbiAgICBnYXNQcmljZTogJycsXHJcbiAgICBnYXNMaW1pdDogJycsXHJcbiAgICByZWNlaXZlQVRva2VuczogZmFsc2UsXHJcbiAgICBmb3JtRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRvckFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBhZGRyZXNzVG9MaXF1aWRhdGVFcnJvcjogZmFsc2UsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIHJlcGF5VG9rZW5BZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbHBBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIHdzc0Vycm9yOiBmYWxzZSxcclxuICAgIGh0dHBFcnJvcjogZmFsc2UsXHJcbiAgICBtbmVtb25pY0Vycm9yOiBmYWxzZSxcclxuICAgIGV0aEdhc1N0YXRpb25BUElLZXlFcnJvcjogZmFsc2UsXHJcbiAgICBkeW5hbWljR2FzUHJpY2VFcnJvcjogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFtb3VudEVycm9yOiBmYWxzZSxcclxuICAgIGdhc1ByaWNlRXJyb3I6IGZhbHNlLFxyXG4gICAgZ2FzTGltaXRFcnJvcjogZmFsc2UsXHJcbiAgICByZWNlaXZlQXRva2Vuc0Vycm9yOiBmYWxzZSxcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG5cclxuICAgIGlmICh0aGlzLnZhbGlkYXRlU3RhdGUoKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29uZmlnRmlsZSA9IHtcclxuICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHRoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogdGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICByZXBheVRva2VuQWRkcmVzczogdGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzcyxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogdGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICB3c3M6IHRoaXMuc3RhdGUud3NzLFxyXG4gICAgICBodHRwOiB0aGlzLnN0YXRlLmh0dHAsXHJcbiAgICAgIG1uZW1vbmljOiB0aGlzLnN0YXRlLm1uZW1vbmljLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiB0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogdGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiB0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICBnYXNQcmljZTogdGhpcy5zdGF0ZS5nYXNQcmljZSxcclxuICAgICAgZ2FzTGltaXQ6IHRoaXMuc3RhdGUuZ2FzTGltaXQsXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiB0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgfVxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoY29uZmlnRmlsZSldLCB7XHJcbiAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsICdzZXR0aW5ncy5qc29uJylcclxuICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UodGhpcy5zdGF0ZSlcclxuICB9XHJcblxyXG4gIGhpZGRlbkZpbGVJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgdXBsb2FkU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICB9XHJcbiAgcmVhZFNldHRpbmdzID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncG9wcG9wb3BvcCcpXHJcbiAgICB2YXIgZmlsZVVwbG9hZGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICBmci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsaXF1aWRhdG9yQWRkcmVzczogcmVzdWx0LmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogcmVzdWx0LmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgICBjb2xsYXRlcmFsQWRkcmVzczogcmVzdWx0LmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiByZXN1bHQucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzcyxcclxuICAgICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiByZXN1bHQubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgICB3c3M6IHJlc3VsdC53c3MsXHJcbiAgICAgICAgaHR0cDogcmVzdWx0Lmh0dHAsXHJcbiAgICAgICAgbW5lbW9uaWM6IHJlc3VsdC5tbmVtb25pYyxcclxuICAgICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiByZXN1bHQuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgICBkeW5hbWljR2FzUHJpY2U6IHJlc3VsdC5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHJlc3VsdC5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgICBnYXNQcmljZTogcmVzdWx0Lmdhc1ByaWNlLFxyXG4gICAgICAgIGdhc0xpbWl0OiByZXN1bHQuZ2FzTGltaXQsXHJcbiAgICAgICAgcmVjZWl2ZUFUb2tlbnM6IHJlc3VsdC5yZWNlaXZlQVRva2VucyxcclxuICAgICAgfSlcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0YXRlKClcclxuICAgICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZShyZXN1bHQpXHJcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZClcclxuICAgIH1cclxuXHJcbiAgICBmci5yZWFkQXNUZXh0KGZpbGVVcGxvYWRlZClcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZXJyb3IgPSBmYWxzZVxyXG5cclxuICAgIC8vIEFkZHJlc3MgVmFsaWRpdHkgQ2hlY2tcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChrZXkuZW5kc1dpdGgoJ0FkZHJlc3MnKSB8fCBrZXkgPT0gJ2FkZHJlc3NUb0xpcXVpZGF0ZScpIHtcclxuICAgICAgICBsZXQgdmFsaWRBZGRyZXNzXHJcbiAgICAgICAgdmFsaWRBZGRyZXNzID0gIXdlYjMud2ViMy51dGlscy5pc0FkZHJlc3ModGhpcy5zdGF0ZVtrZXldKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5ICsgJ0Vycm9yJ106IHZhbGlkQWRkcmVzcyB9KVxyXG4gICAgICAgIGlmICh2YWxpZEFkZHJlc3MpIHtcclxuICAgICAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUud3NzLnN0YXJ0c1dpdGgoJ3dzczovLycpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB3c3NFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBlcnJvciA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuaHR0cC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBodHRwRXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUubW5lbW9uaWMuc3BsaXQoJyAnKS5sZW5ndGggIT0gMTIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1uZW1vbmljRXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHRoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnQpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdGlvbkFtb3VudEVycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTih0aGlzLnN0YXRlLmdhc0xpbWl0KSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2FzTGltaXRFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBlcnJvciA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4odGhpcy5zdGF0ZS5nYXNQcmljZSkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc1ByaWNlRXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1FcnJvcjogZXJyb3IgfSlcclxuICAgIHJldHVybiBlcnJvclxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2Vzc2lvblN0b3JhZ2UgPSAoZGF0YSkgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnLCBkYXRhLmxpcXVpZGF0b3JBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWRkcmVzc1RvTGlxdWlkYXRlJywgZGF0YS5hZGRyZXNzVG9MaXF1aWRhdGUpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjb2xsYXRlcmFsQWRkcmVzcycsIGRhdGEuY29sbGF0ZXJhbEFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycsIGRhdGEucmVwYXlUb2tlbkFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJyxcclxuICAgICAgZGF0YS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3NcclxuICAgIClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xwQWRkcmVzcycsIGRhdGEubHBBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycsIGRhdGEubGF0ZXN0THBDb3JlQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dzcycsIGRhdGEud3NzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaHR0cCcsIGRhdGEuaHR0cClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ21uZW1vbmljJywgZGF0YS5tbmVtb25pYylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknLCBkYXRhLmV0aEdhc1N0YXRpb25BUElLZXkpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnLCBkYXRhLmR5bmFtaWNHYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0aW9uQW1vdW50JywgZGF0YS5saXF1aWRhdGlvbkFtb3VudClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc1ByaWNlJywgZGF0YS5nYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc0xpbWl0JywgZGF0YS5nYXNMaW1pdClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlY2VpdmVBVG9rZW5zJywgZGF0YS5yZWNlaXZlQVRva2VucylcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdG9yQWRkcmVzcycpLFxyXG4gICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScpLFxyXG4gICAgICBjb2xsYXRlcmFsQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnKSxcclxuICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlcGF5VG9rZW5BZGRyZXNzJyksXHJcbiAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJ1xyXG4gICAgICApLFxyXG4gICAgICBscEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xwQWRkcmVzcycpLFxyXG4gICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYXRlc3RMcENvcmVBZGRyZXNzJyksXHJcbiAgICAgIHdzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd3NzJyksXHJcbiAgICAgIGh0dHA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2h0dHAnKSxcclxuICAgICAgbW5lbW9uaWM6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21uZW1vbmljJyksXHJcbiAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknKSxcclxuICAgICAgZHluYW1pY0dhc1ByaWNlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnKSA9PSAndHJ1ZScsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcpLFxyXG4gICAgICBnYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FzUHJpY2UnKSxcclxuICAgICAgZ2FzTGltaXQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc0xpbWl0JyksXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWNlaXZlQVRva2VucycpID09ICd0cnVlJyxcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vYWRkIHdyaXRlIHRvIHNlc3Npb24gc3RvcmFnZSBvbmNoYW5nZSBvbiB0aGUgdW5wdXRzXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFkZHJlc3NFcnJvciwgJ1JFTkRFUicpXHJcbiAgICAvL3RoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UodGhpcy5zdGF0ZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgxPkxpcXVpZGF0aW9uIFNldHRpbmdzPC9oMT5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9e3RoaXMuc3RhdGUuZm9ybUVycm9yfT5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nc0Zvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGlxdWlkYXRvciBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzc0Vycm9yfVxyXG4gICAgICAgICAgICAgIGVycm9yQ29udGVudD17J1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnfVxyXG4gICAgICAgICAgICAgIGlucHV0TGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyB3aGljaCBtYWtlcyB0aGUgbGlxdWlkYXRpb24gY2FsbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0b3JBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgVG8gTGlxdWlkYXRlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGVFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJ31cclxuICAgICAgICAgICAgICBpbnB1dExhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgdG8gYmUgbGlxdWlkYXRlZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc1RvTGlxdWlkYXRlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb2xsYXRlcmFsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzRXJyb3J9XHJcbiAgICAgICAgICAgICAgZXJyb3JDb250ZW50PXsnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcyd9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIG9mIHRoZSBjb2xsYXRlcmFsIHRvIHJlY2VpdmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGF0ZXJhbEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZXBheSBUb2tlbiBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzc0Vycm9yfVxyXG4gICAgICAgICAgICAgIGVycm9yQ29udGVudD17J1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnfVxyXG4gICAgICAgICAgICAgIGlucHV0TGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBvZiB0aGUgdG9rZW4gdGhhdCBpcyByZXBhaWRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwYXlUb2tlbkFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxlbmRpbmdQb29sQWRkcmVzc1Byb3ZpZGVyIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc0Vycm9yfVxyXG4gICAgICAgICAgICAgIGVycm9yQ29udGVudD17J1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnfVxyXG4gICAgICAgICAgICAgIGlucHV0TGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVuZGluZ1Bvb2xBZGRyZXNzUHJvdmlkZXIgY29udHJhY3QgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMZW5kaW5nUG9vbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5scEFkZHJlc3NFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJ31cclxuICAgICAgICAgICAgICBpbnB1dExhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlbmRpbmdQb29sIGNvbnRyYWN0IGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxwQWRkcmVzc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxwQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nc0Zvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2xDb3JlIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3NFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJ31cclxuICAgICAgICAgICAgICBpbnB1dExhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlbmRpbmdQb29sQ29yZSBjb250cmFjdCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGF0ZXN0THBDb3JlQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkluZnVyYSBXU1MgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUud3NzRXJyb3J9XHJcbiAgICAgICAgICAgICAgZXJyb3JDb250ZW50PXsnTXVzdCBzdGFydCB3aXRoIDx3c3M6Ly8+J31cclxuICAgICAgICAgICAgICBpbnB1dExhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZnVyYSBXU1MgcHJvamVjdCBlbmRwb2ludFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud3NzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB3c3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkluZnVyYSBIVFRQIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmh0dHBFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydNdXN0IHN0YXJ0IHdpdGggPGh0dHBzOi8vPid9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmZ1cmEgaHR0cCBwcm9qZWN0IGVuZHBvaW50XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5odHRwfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyBodHRwOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nc0Zvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiV2FsbGV0IE1uZXVtb25pYyAvIFNlZWQgUGhyYXNlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5tbmVtb25pY0Vycm9yfVxyXG4gICAgICAgICAgICAgIGVycm9yQ29udGVudD17J011c3QgaW5wdXQgMTIgd29yZCBzZWVkIHBocmFzZSd9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMiB3b3JkIHNlZWQgcGhyYXNlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tbmVtb25pY31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1uZW1vbmljOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaXF1aWRhdGlvbiBBbW91bnRcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50RXJyb3J9XHJcbiAgICAgICAgICAgICAgZXJyb3JDb250ZW50PXsnTXVzdCBiZSBudW1lcmljJ31cclxuICAgICAgICAgICAgICBpbnB1dExhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjwwPiBmb3IgbWF4IGxpcXVpZGF0aW9uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0aW9uQW1vdW50OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nc0Zvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiR2FzIExpbWl0XCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5nYXNMaW1pdEVycm9yfVxyXG4gICAgICAgICAgICAgIGVycm9yQ29udGVudD17J011c3QgYmUgbnVtZXJpYyd9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIkdBU1wiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYXggYW1vdW50IG9mIGdhcyBsaXF1aWRhdG9yIGlzIGFsbG93ZWQgdG8gc3BlbmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc0xpbWl0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2FzTGltaXQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkVUSCBHQVMgU1RBVElPTiBBUEkgS0VZXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5ldGhHYXNTdGF0aW9uQVBJS2V5RXJyb3J9XHJcbiAgICAgICAgICAgICAgZXJyb3JDb250ZW50PXsnTm9uZSd9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFdGhlcmV1bSBHYXMgc3RhdGlvbiBhcGkga2V5XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ldGhHYXNTdGF0aW9uQVBJS2V5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXRoR2FzU3RhdGlvbkFQSUtleTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkdhcyBQcmljZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZ2FzUHJpY2VFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydNdXN0IGJlIG51bWVyaWMnfVxyXG4gICAgICAgICAgICAgIGlucHV0TGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR2FzIHByaWNlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNQcmljZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc1ByaWNlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiVXNlIER5bmFtaWMgR2FzIFByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgZHluYW1pY0dhc1ByaWNlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY0dhc1ByaWNlOiAhZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlJlY2VpdmUgQ29sbGF0ZXJhbCBhcyBhVG9rZW5zXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyByZWNlaXZlQVRva2VucyB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBVG9rZW5zOiAhcmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbGFiZWxQb3NpdGlvbj1cImxlZnRcIiBpY29uPVwiZG93bmxvYWRcIiBjb250ZW50PVwiU2F2ZVwiIC8+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlVwbG9hZCBTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgaWNvbj1cImZpbGVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwbG9hZFNldHRpbmdzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5oaWRkZW5GaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJlYWRTZXR0aW5nc31cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9