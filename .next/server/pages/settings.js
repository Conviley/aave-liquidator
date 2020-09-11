module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/settings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Diddi\\Documents\\crypto\\aave-liquidation\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    style: {
      marginTop: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "Liquidator"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Settings")));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\Diddi\\Documents\\crypto\\aave-liquidation\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), props.children);
});

/***/ }),

/***/ "./components/SettingFormInput.js":
/*!****************************************!*\
  !*** ./components/SettingFormInput.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Diddi\\Documents\\crypto\\aave-liquidation\\components\\SettingFormInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    label: props.label,
    error: props.error ? {
      content: props.errorContent
    } : false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    label: props.inputLabel,
    labelPosition: "right",
    placeholder: props.placeholder,
    value: props.value,
    onChange: props.onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: mainnet, ropsten, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mainnet\":{\"liquidatorAddress\":\"0xac6aabf5449bbeFa2A6a8D506158e6222b80F832\",\"addressToLiquidate\":\"0xf6f493009951a0d7555cf166875281a37f48a6c0\",\"collateralAddress\":\"0x6B175474E89094C44Da98b954EedeAC495271d0F\",\"repayTokenAddress\":\"0x514910771AF9Ca656af840dff83E8264EcF986CA\",\"lpAddressProviderAddress\":\"0x24a42fD28C976A61Df5D00D0599C34c4f90748c8\",\"lpAddress\":\"0x398eC7346DcD622eDc5ae82352F02bE94C62d119\",\"latestLpCoreAddress\":\"0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3\",\"wss\":\"wss://mainnet.infura.io/ws/v3/36e70f3c9a564b0ab5e15d2705568704\",\"http\":\"https://mainnet.infura.io/v3/36e70f3c9a564b0ab5e15d2705568704\",\"mnemonic\":\"north course flower require hand rude word supply involve cushion kiwi absent\",\"ethGasStationAPIKey\":\"b489d066f665b6ccc6297561436a349d56ca84cee5b38b65ea9dac195556\",\"dynamicGasPrice\":true,\"liquidationAmount\":\"0\",\"gasPrice\":270000000000,\"gasLimit\":1000000,\"receiveATokens\":false},\"ropsten\":{\"liquidatorAddress\":\"0x8e5687908487cf9362632D074965Fe4B83D660a2\",\"addressToLiquidate\":\"0x8e5687908487cf9362632D074965Fe4B83D660a2\",\"collateralAddress\":\"0x851dEf71f0e6A903375C1e536Bd9ff1684BAD802\",\"repayTokenAddress\":\"0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108\",\"lpAddressProviderAddress\":\"0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728\",\"lpAddress\":\"0x9E5C7835E4b13368fd628196C4f1c6cEc89673Fa\",\"latestLpCoreAddress\":\"0x4295Ee704716950A4dE7438086d6f0FBC0BA9472\",\"wss\":\"wss://ropsten.infura.io/ws/v3/36e70f3c9a564b0ab5e15d2705568704\",\"http\":\"https://ropsten.infura.io/v3/36e70f3c9a564b0ab5e15d2705568704\",\"mnemonic\":\"mesh comfort sketch patch damp payment online audit ceiling glare toddler space\",\"ethGasStationAPIKey\":\"b489d066f665b6ccc6297561436a349d56ca84cee5b38b65ea9dac195556\",\"dynamicGasPrice\":true,\"liquidationAmount\":\"0\",\"gasPrice\":1000000000,\"gasLimit\":1000000,\"receiveATokens\":false}}");

/***/ }),

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SettingFormInput */ "./components/SettingFormInput.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "file-saver");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/web3.js */ "./src/web3.js");
/* harmony import */ var _src_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_web3_js__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Diddi\\Documents\\crypto\\aave-liquidation\\pages\\settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Settings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
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

    _defineProperty(this, "onSubmit", event => {
      event.preventDefault();
      console.log(this.state);

      if (this.validateState()) {
        return;
      }

      var configFile = {
        liquidatorAddress: this.state.liquidatorAddress,
        addressToLiquidate: this.state.addressToLiquidate,
        collateralAddress: this.state.collateralAddress,
        repayTokenAddress: this.state.repayTokenAddress,
        lpAddressProviderAddress: this.state.lpAddressProviderAddress,
        lpAddress: this.state.lpAddress,
        latestLpCoreAddress: this.state.latestLpCoreAddress,
        wss: this.state.wss,
        http: this.state.http,
        mnemonic: this.state.mnemonic,
        ethGasStationAPIKey: this.state.ethGasStationAPIKey,
        dynamicGasPrice: this.state.dynamicGasPrice,
        liquidationAmount: this.state.liquidationAmount,
        gasPrice: this.state.gasPrice,
        gasLimit: this.state.gasLimit,
        receiveATokens: this.state.receiveATokens
      };
      var blob = new Blob([JSON.stringify(configFile)], {
        type: 'application/json'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_4___default.a.saveAs(blob, 'settings.json');
      this.updateSessionStorage(this.state);
    });

    _defineProperty(this, "hiddenFileInput", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(this, "uploadSettings", () => {
      this.hiddenFileInput.current.click();
    });

    _defineProperty(this, "readSettings", event => {
      console.log('poppopopop');
      var fileUploaded = event.target.files[0];
      var fr = new FileReader();

      fr.onload = e => {
        var result = JSON.parse(e.target.result);
        this.setState({
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
        this.validateState();
        this.updateSessionStorage(result);
        var formatted = JSON.stringify(result, null, 2);
        console.log(formatted);
      };

      fr.readAsText(fileUploaded);
    });

    _defineProperty(this, "validateState", () => {
      let error = false; // Address Validity Check

      Object.keys(this.state).map(key => {
        if (key.endsWith('Address') || key == 'addressToLiquidate') {
          let validAddress;
          validAddress = !_src_web3_js__WEBPACK_IMPORTED_MODULE_5___default.a.web3.utils.isAddress(this.state[key]);
          this.setState({
            [key + 'Error']: validAddress
          });

          if (validAddress) {
            error = true;
          }
        }
      });

      if (!this.state.wss.startsWith('wss://')) {
        this.setState({
          wssError: true
        });
        error = true;
      }

      if (!this.state.http.startsWith('https://')) {
        this.setState({
          httpError: true
        });
        error = true;
      }

      if (this.state.mnemonic.split(' ').length != 12) {
        this.setState({
          mnemonicError: true
        });
        error = true;
      }

      if (isNaN(this.state.liquidationAmount)) {
        this.setState({
          liquidationAmountError: true
        });
        error = true;
      }

      if (isNaN(this.state.gasLimit)) {
        this.setState({
          gasLimitError: true
        });
        error = true;
      }

      if (isNaN(this.state.gasPrice)) {
        this.setState({
          gasPriceError: true
        });
        error = true;
      }

      this.setState({
        formError: error
      });
      return error;
    });

    _defineProperty(this, "updateSessionStorage", data => {
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
  }

  componentDidMount() {
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


  render() {
    console.log(this.state.liquidationAddressError, 'RENDER'); //this.updateSessionStorage(this.state)

    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.onSubmit,
      error: this.state.formError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 11
      }
    }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Liquidator Address",
      error: this.state.liquidatorAddressError,
      errorContent: 'Please enter a valid address',
      inputLabel: "HEX",
      placeholder: "Address which makes the liquidation call",
      value: this.state.liquidatorAddress,
      onChange: event => {
        this.setState({
          liquidatorAddress: event.target.value
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }
    }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Address To Liquidate",
      error: this.state.addressToLiquidateError,
      errorContent: 'Please enter a valid address',
      inputLabel: "HEX",
      placeholder: "Address to be liquidated",
      value: this.state.addressToLiquidate,
      onChange: event => this.setState({
        addressToLiquidate: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 11
      }
    }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Collateral Address",
      error: this.state.collateralAddressError,
      errorContent: 'Please enter a valid address',
      inputLabel: "HEX",
      placeholder: "Address of the collateral to receive",
      value: this.state.collateralAddress,
      onChange: event => this.setState({
        collateralAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 13
      }
    }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Repay Token Address",
      error: this.state.repayTokenAddressError,
      errorContent: 'Please enter a valid address',
      inputLabel: "HEX",
      placeholder: "Address of the token that is repaid",
      value: this.state.repayTokenAddress,
      onChange: event => this.setState({
        repayTokenAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 11
      }
    }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "LendingPoolAddressProvider Address",
      error: this.state.lpAddressProviderAddressError,
      errorContent: 'Please enter a valid address',
      inputLabel: "HEX",
      placeholder: "LendingPoolAddressProvider contract address",
      value: this.state.lpAddressProviderAddress,
      onChange: event => this.setState({
        lpAddressProviderAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 13
      }
    }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "LendingPool Address",
      error: this.state.lpAddressError,
      errorContent: 'Please enter a valid address',
      inputLabel: "HEX",
      placeholder: "LendingPool contract address",
      value: this.state.lpAddress,
      onChange: event => this.setState({
        lpAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 11
      }
    }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "LendingPoolCore Address",
      error: this.state.latestLpCoreAddressError,
      errorContent: 'Please enter a valid address',
      inputLabel: "HEX",
      placeholder: "LendingPoolCore contract address",
      value: this.state.latestLpCoreAddress,
      onChange: event => this.setState({
        latestLpCoreAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 13
      }
    }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Infura WSS Address",
      error: this.state.wssError,
      errorContent: 'Must start with <wss://>',
      inputLabel: "URL",
      placeholder: "Infura WSS project endpoint",
      value: this.state.wss,
      onChange: event => this.setState({
        wss: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 11
      }
    }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Infura HTTP Address",
      error: this.state.httpError,
      errorContent: 'Must start with <https://>',
      inputLabel: "URL",
      placeholder: "Infura http project endpoint",
      value: this.state.http,
      onChange: event => this.setState({
        http: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 13
      }
    }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Wallet Mneumonic / Seed Phrase",
      error: this.state.mnemonicError,
      errorContent: 'Must input 12 word seed phrase',
      inputLabel: "String",
      placeholder: "12 word seed phrase",
      value: this.state.mnemonic,
      onChange: event => this.setState({
        mnemonic: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 11
      }
    }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Liquidation Amount",
      error: this.state.liquidationAmountError,
      errorContent: 'Must be numeric',
      inputLabel: "WEI",
      placeholder: "<0> for max liquidation",
      value: this.state.liquidationAmount,
      onChange: event => this.setState({
        liquidationAmount: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 13
      }
    }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Gas Limit",
      error: this.state.gasLimitError,
      errorContent: 'Must be numeric',
      inputLabel: "GAS",
      placeholder: "Max amount of gas liquidator is allowed to spend",
      value: this.state.gasLimit,
      onChange: event => this.setState({
        gasLimit: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 11
      }
    }, __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "ETH GAS STATION API KEY",
      error: this.state.ethGasStationAPIKeyError,
      errorContent: 'None',
      inputLabel: "String",
      placeholder: "Ethereum Gas station api key",
      value: this.state.ethGasStationAPIKey,
      onChange: event => this.setState({
        ethGasStationAPIKey: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 13
      }
    }), __jsx(_components_SettingFormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Gas Price",
      error: this.state.gasPriceError,
      errorContent: 'Must be numeric',
      inputLabel: "WEI",
      placeholder: "Gas price",
      value: this.state.gasPrice,
      onChange: event => this.setState({
        gasPrice: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Use Dynamic Gas Price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      toggle: true,
      checked: this.state.dynamicGasPrice,
      onChange: () => this.setState(({
        dynamicGasPrice
      }) => ({
        dynamicGasPrice: !dynamicGasPrice
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Receive Collateral as aTokens",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      toggle: true,
      checked: this.state.receiveATokens,
      onChange: () => this.setState(({
        receiveATokens
      }) => ({
        receiveATokens: !receiveATokens
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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

}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./src/web3.js":
/*!*********************!*\
  !*** ./src/web3.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Web3 = __webpack_require__(/*! web3 */ "web3");

const config = __webpack_require__(/*! ../config.json */ "./config.json");

const HDWalletProvider = __webpack_require__(/*! @truffle/hdwallet-provider */ "@truffle/hdwallet-provider");

const network = setNetwork();

function setNetwork() {
  return process.argv[2] == 'mainnet' ? 'mainnet' : 'ropsten';
}

const OPTIONS = {
  defaultBlock: 'latest',
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};
let web3;

if (false) {} else {
  console.log(Date.now);
  const walletProvider = new HDWalletProvider(config[network].mnemonic, config[network].http);
  web3 = new Web3(walletProvider);
}

const webSocketProvider = new Web3.providers.WebsocketProvider(config[network].wss);
const web3wss = new Web3(webSocketProvider);
module.exports = {
  web3: web3,
  web3wss: web3wss,
  network: network
};

/***/ }),

/***/ "@truffle/hdwallet-provider":
/*!*********************************************!*\
  !*** external "@truffle/hdwallet-provider" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@truffle/hdwallet-provider");

/***/ }),

/***/ "file-saver":
/*!*****************************!*\
  !*** external "file-saver" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXR0aW5nRm9ybUlucHV0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy93ZWIzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0cnVmZmxlL2hkd2FsbGV0LXByb3ZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlsZS1zYXZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsibWFyZ2luVG9wIiwicHJvcHMiLCJjaGlsZHJlbiIsImxhYmVsIiwiZXJyb3IiLCJjb250ZW50IiwiZXJyb3JDb250ZW50IiwiaW5wdXRMYWJlbCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsIlNldHRpbmdzIiwiQ29tcG9uZW50IiwibGlxdWlkYXRvckFkZHJlc3MiLCJhZGRyZXNzVG9MaXF1aWRhdGUiLCJjb2xsYXRlcmFsQWRkcmVzcyIsInJlcGF5VG9rZW5BZGRyZXNzIiwibHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzIiwibHBBZGRyZXNzIiwibGF0ZXN0THBDb3JlQWRkcmVzcyIsIndzcyIsImh0dHAiLCJtbmVtb25pYyIsImV0aEdhc1N0YXRpb25BUElLZXkiLCJkeW5hbWljR2FzUHJpY2UiLCJsaXF1aWRhdGlvbkFtb3VudCIsImdhc1ByaWNlIiwiZ2FzTGltaXQiLCJyZWNlaXZlQVRva2VucyIsImZvcm1FcnJvciIsImxpcXVpZGF0b3JBZGRyZXNzRXJyb3IiLCJhZGRyZXNzVG9MaXF1aWRhdGVFcnJvciIsImNvbGxhdGVyYWxBZGRyZXNzRXJyb3IiLCJyZXBheVRva2VuQWRkcmVzc0Vycm9yIiwibHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NFcnJvciIsImxhdGVzdExwQ29yZUFkZHJlc3NFcnJvciIsIndzc0Vycm9yIiwiaHR0cEVycm9yIiwibW5lbW9uaWNFcnJvciIsImV0aEdhc1N0YXRpb25BUElLZXlFcnJvciIsImR5bmFtaWNHYXNQcmljZUVycm9yIiwibGlxdWlkYXRpb25BbW91bnRFcnJvciIsImdhc1ByaWNlRXJyb3IiLCJnYXNMaW1pdEVycm9yIiwicmVjZWl2ZUF0b2tlbnNFcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJ2YWxpZGF0ZVN0YXRlIiwiY29uZmlnRmlsZSIsImJsb2IiLCJCbG9iIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJGaWxlU2F2ZXIiLCJzYXZlQXMiLCJ1cGRhdGVTZXNzaW9uU3RvcmFnZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiaGlkZGVuRmlsZUlucHV0IiwiY3VycmVudCIsImNsaWNrIiwiZmlsZVVwbG9hZGVkIiwidGFyZ2V0IiwiZmlsZXMiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwicmVzdWx0IiwicGFyc2UiLCJzZXRTdGF0ZSIsImZvcm1hdHRlZCIsInJlYWRBc1RleHQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiZW5kc1dpdGgiLCJ2YWxpZEFkZHJlc3MiLCJ3ZWIzIiwidXRpbHMiLCJpc0FkZHJlc3MiLCJzdGFydHNXaXRoIiwic3BsaXQiLCJsZW5ndGgiLCJpc05hTiIsImRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJjb21wb25lbnREaWRNb3VudCIsImdldEl0ZW0iLCJyZW5kZXIiLCJsaXF1aWRhdGlvbkFkZHJlc3NFcnJvciIsIm9uU3VibWl0IiwidXBsb2FkU2V0dGluZ3MiLCJyZWFkU2V0dGluZ3MiLCJkaXNwbGF5IiwiV2ViMyIsInJlcXVpcmUiLCJjb25maWciLCJIRFdhbGxldFByb3ZpZGVyIiwibmV0d29yayIsInNldE5ldHdvcmsiLCJwcm9jZXNzIiwiYXJndiIsIk9QVElPTlMiLCJkZWZhdWx0QmxvY2siLCJ0cmFuc2FjdGlvbkNvbmZpcm1hdGlvbkJsb2NrcyIsInRyYW5zYWN0aW9uQmxvY2tUaW1lb3V0IiwiRGF0ZSIsIm5vdyIsIndhbGxldFByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWJzb2NrZXRQcm92aWRlciIsIndlYjN3c3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRWUscUVBQU07QUFDbkIsU0FD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LENBQUNDLE9BQVAsR0FBaUI7QUFDZnRDLE1BQUksRUFBRUEsSUFEUztBQUVmb0MsU0FBTyxFQUFFQSxPQUZNO0FBR2ZkLFNBQU8sRUFBRUE7QUFITSxDQUFqQixDOzs7Ozs7Ozs7OztBQ3RDQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2V0dGluZ3MuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnUgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgIDxNZW51Lkl0ZW0+TGlxdWlkYXRvcjwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICA8TWVudS5JdGVtPlNldHRpbmdzPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudS5NZW51PlxyXG4gICAgPC9NZW51PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSW5wdXRcclxuICAgICAgbGFiZWw9e3Byb3BzLmxhYmVsfVxyXG4gICAgICBlcnJvcj17cHJvcHMuZXJyb3IgPyB7IGNvbnRlbnQ6IHByb3BzLmVycm9yQ29udGVudCB9IDogZmFsc2V9XHJcbiAgICA+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIGxhYmVsPXtwcm9wcy5pbnB1dExhYmVsfVxyXG4gICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSwgQ2hlY2tib3ggfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IFNldHRpbmdzRm9ybUlucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvU2V0dGluZ0Zvcm1JbnB1dCdcclxuaW1wb3J0IEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJ1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9zcmMvd2ViMy5qcydcclxuXHJcbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGxpcXVpZGF0b3JBZGRyZXNzOiAnJyxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogJycsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzczogJycsXHJcbiAgICByZXBheVRva2VuQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6ICcnLFxyXG4gICAgbHBBZGRyZXNzOiAnJyxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6ICcnLFxyXG4gICAgd3NzOiAnJyxcclxuICAgIGh0dHA6ICcnLFxyXG4gICAgbW5lbW9uaWM6ICcnLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleTogJycsXHJcbiAgICBkeW5hbWljR2FzUHJpY2U6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnQ6ICcnLFxyXG4gICAgZ2FzUHJpY2U6ICcnLFxyXG4gICAgZ2FzTGltaXQ6ICcnLFxyXG4gICAgcmVjZWl2ZUFUb2tlbnM6IGZhbHNlLFxyXG4gICAgZm9ybUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0b3JBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3I6IGZhbHNlLFxyXG4gICAgY29sbGF0ZXJhbEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICByZXBheVRva2VuQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxwQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGxhdGVzdExwQ29yZUFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICB3c3NFcnJvcjogZmFsc2UsXHJcbiAgICBodHRwRXJyb3I6IGZhbHNlLFxyXG4gICAgbW5lbW9uaWNFcnJvcjogZmFsc2UsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5RXJyb3I6IGZhbHNlLFxyXG4gICAgZHluYW1pY0dhc1ByaWNlRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRpb25BbW91bnRFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGdhc0xpbWl0RXJyb3I6IGZhbHNlLFxyXG4gICAgcmVjZWl2ZUF0b2tlbnNFcnJvcjogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZVN0YXRlKCkpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbmZpZ0ZpbGUgPSB7XHJcbiAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiB0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHRoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlLFxyXG4gICAgICBjb2xsYXRlcmFsQWRkcmVzczogdGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzcyxcclxuICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHRoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogdGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3MsXHJcbiAgICAgIGxwQWRkcmVzczogdGhpcy5zdGF0ZS5scEFkZHJlc3MsXHJcbiAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHRoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgd3NzOiB0aGlzLnN0YXRlLndzcyxcclxuICAgICAgaHR0cDogdGhpcy5zdGF0ZS5odHRwLFxyXG4gICAgICBtbmVtb25pYzogdGhpcy5zdGF0ZS5tbmVtb25pYyxcclxuICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogdGhpcy5zdGF0ZS5ldGhHYXNTdGF0aW9uQVBJS2V5LFxyXG4gICAgICBkeW5hbWljR2FzUHJpY2U6IHRoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogdGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgZ2FzUHJpY2U6IHRoaXMuc3RhdGUuZ2FzUHJpY2UsXHJcbiAgICAgIGdhc0xpbWl0OiB0aGlzLnN0YXRlLmdhc0xpbWl0LFxyXG4gICAgICByZWNlaXZlQVRva2VuczogdGhpcy5zdGF0ZS5yZWNlaXZlQVRva2VucyxcclxuICAgIH1cclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGNvbmZpZ0ZpbGUpXSwge1xyXG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9KVxyXG4gICAgRmlsZVNhdmVyLnNhdmVBcyhibG9iLCAnc2V0dGluZ3MuanNvbicpXHJcbiAgICB0aGlzLnVwZGF0ZVNlc3Npb25TdG9yYWdlKHRoaXMuc3RhdGUpXHJcbiAgfVxyXG5cclxuICBoaWRkZW5GaWxlSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gIHVwbG9hZFNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5oaWRkZW5GaWxlSW5wdXQuY3VycmVudC5jbGljaygpXHJcbiAgfVxyXG4gIHJlYWRTZXR0aW5ncyA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3BvcHBvcG9wb3AnKVxyXG4gICAgdmFyIGZpbGVVcGxvYWRlZCA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxyXG4gICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKVxyXG4gICAgZnIub25sb2FkID0gKGUpID0+IHtcclxuICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHJlc3VsdC5saXF1aWRhdG9yQWRkcmVzcyxcclxuICAgICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHJlc3VsdC5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHJlc3VsdC5jb2xsYXRlcmFsQWRkcmVzcyxcclxuICAgICAgICByZXBheVRva2VuQWRkcmVzczogcmVzdWx0LnJlcGF5VG9rZW5BZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgICBscEFkZHJlc3M6IHJlc3VsdC5scEFkZHJlc3MsXHJcbiAgICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogcmVzdWx0LmxhdGVzdExwQ29yZUFkZHJlc3MsXHJcbiAgICAgICAgd3NzOiByZXN1bHQud3NzLFxyXG4gICAgICAgIGh0dHA6IHJlc3VsdC5odHRwLFxyXG4gICAgICAgIG1uZW1vbmljOiByZXN1bHQubW5lbW9uaWMsXHJcbiAgICAgICAgZXRoR2FzU3RhdGlvbkFQSUtleTogcmVzdWx0LmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgICAgZHluYW1pY0dhc1ByaWNlOiByZXN1bHQuZHluYW1pY0dhc1ByaWNlLFxyXG4gICAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiByZXN1bHQubGlxdWlkYXRpb25BbW91bnQsXHJcbiAgICAgICAgZ2FzUHJpY2U6IHJlc3VsdC5nYXNQcmljZSxcclxuICAgICAgICBnYXNMaW1pdDogcmVzdWx0Lmdhc0xpbWl0LFxyXG4gICAgICAgIHJlY2VpdmVBVG9rZW5zOiByZXN1bHQucmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdGF0ZSgpXHJcbiAgICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UocmVzdWx0KVxyXG4gICAgICB2YXIgZm9ybWF0dGVkID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKVxyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWQpXHJcbiAgICB9XHJcblxyXG4gICAgZnIucmVhZEFzVGV4dChmaWxlVXBsb2FkZWQpXHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVN0YXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IGVycm9yID0gZmFsc2VcclxuXHJcbiAgICAvLyBBZGRyZXNzIFZhbGlkaXR5IENoZWNrXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBpZiAoa2V5LmVuZHNXaXRoKCdBZGRyZXNzJykgfHwga2V5ID09ICdhZGRyZXNzVG9MaXF1aWRhdGUnKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkQWRkcmVzc1xyXG4gICAgICAgIHZhbGlkQWRkcmVzcyA9ICF3ZWIzLndlYjMudXRpbHMuaXNBZGRyZXNzKHRoaXMuc3RhdGVba2V5XSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2tleSArICdFcnJvciddOiB2YWxpZEFkZHJlc3MgfSlcclxuICAgICAgICBpZiAodmFsaWRBZGRyZXNzKSB7XHJcbiAgICAgICAgICBlcnJvciA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLndzcy5zdGFydHNXaXRoKCd3c3M6Ly8nKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgd3NzRXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmh0dHAuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaHR0cEVycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLm1uZW1vbmljLnNwbGl0KCcgJykubGVuZ3RoICE9IDEyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtbmVtb25pY0Vycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTih0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50KSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRpb25BbW91bnRFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBlcnJvciA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4odGhpcy5zdGF0ZS5nYXNMaW1pdCkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc0xpbWl0RXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHRoaXMuc3RhdGUuZ2FzUHJpY2UpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNQcmljZUVycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtRXJyb3I6IGVycm9yIH0pXHJcbiAgICByZXR1cm4gZXJyb3JcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlc3Npb25TdG9yYWdlID0gKGRhdGEpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0b3JBZGRyZXNzJywgZGF0YS5saXF1aWRhdG9yQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScsIGRhdGEuYWRkcmVzc1RvTGlxdWlkYXRlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnLCBkYXRhLmNvbGxhdGVyYWxBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVwYXlUb2tlbkFkZHJlc3MnLCBkYXRhLnJlcGF5VG9rZW5BZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcycsXHJcbiAgICAgIGRhdGEubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzXHJcbiAgICApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdscEFkZHJlc3MnLCBkYXRhLmxwQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhdGVzdExwQ29yZUFkZHJlc3MnLCBkYXRhLmxhdGVzdExwQ29yZUFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3c3MnLCBkYXRhLndzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2h0dHAnLCBkYXRhLmh0dHApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtbmVtb25pYycsIGRhdGEubW5lbW9uaWMpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JywgZGF0YS5ldGhHYXNTdGF0aW9uQVBJS2V5KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJywgZGF0YS5keW5hbWljR2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcsIGRhdGEubGlxdWlkYXRpb25BbW91bnQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNQcmljZScsIGRhdGEuZ2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNMaW1pdCcsIGRhdGEuZ2FzTGltaXQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWNlaXZlQVRva2VucycsIGRhdGEucmVjZWl2ZUFUb2tlbnMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnKSxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhZGRyZXNzVG9MaXF1aWRhdGUnKSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NvbGxhdGVyYWxBZGRyZXNzJyksXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycpLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcydcclxuICAgICAgKSxcclxuICAgICAgbHBBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdscEFkZHJlc3MnKSxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycpLFxyXG4gICAgICB3c3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dzcycpLFxyXG4gICAgICBodHRwOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdodHRwJyksXHJcbiAgICAgIG1uZW1vbmljOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtbmVtb25pYycpLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JyksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJykgPT0gJ3RydWUnLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRpb25BbW91bnQnKSxcclxuICAgICAgZ2FzUHJpY2U6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc1ByaWNlJyksXHJcbiAgICAgIGdhc0xpbWl0OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXNMaW1pdCcpLFxyXG4gICAgICByZWNlaXZlQVRva2Vuczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVjZWl2ZUFUb2tlbnMnKSA9PSAndHJ1ZScsXHJcbiAgICB9KVxyXG4gIH1cclxuICAvL2FkZCB3cml0ZSB0byBzZXNzaW9uIHN0b3JhZ2Ugb25jaGFuZ2Ugb24gdGhlIHVucHV0c1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlxdWlkYXRpb25BZGRyZXNzRXJyb3IsICdSRU5ERVInKVxyXG4gICAgLy90aGlzLnVwZGF0ZVNlc3Npb25TdG9yYWdlKHRoaXMuc3RhdGUpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5MaXF1aWRhdGlvbiBTZXR0aW5nczwvaDE+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXt0aGlzLnN0YXRlLmZvcm1FcnJvcn0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxpcXVpZGF0b3IgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3NFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJ31cclxuICAgICAgICAgICAgICBpbnB1dExhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3Mgd2hpY2ggbWFrZXMgdGhlIGxpcXVpZGF0aW9uIGNhbGxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdG9yQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzIFRvIExpcXVpZGF0ZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3J9XHJcbiAgICAgICAgICAgICAgZXJyb3JDb250ZW50PXsnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcyd9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIHRvIGJlIGxpcXVpZGF0ZWRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NUb0xpcXVpZGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nc0Zvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29sbGF0ZXJhbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzc0Vycm9yfVxyXG4gICAgICAgICAgICAgIGVycm9yQ29udGVudD17J1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnfVxyXG4gICAgICAgICAgICAgIGlucHV0TGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBvZiB0aGUgY29sbGF0ZXJhbCB0byByZWNlaXZlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhdGVyYWxBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nc0Zvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUmVwYXkgVG9rZW4gQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3NFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJ31cclxuICAgICAgICAgICAgICBpbnB1dExhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3Mgb2YgdGhlIHRva2VuIHRoYXQgaXMgcmVwYWlkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGF5VG9rZW5BZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMZW5kaW5nUG9vbEFkZHJlc3NQcm92aWRlciBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJ31cclxuICAgICAgICAgICAgICBpbnB1dExhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlbmRpbmdQb29sQWRkcmVzc1Byb3ZpZGVyIGNvbnRyYWN0IGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nc0Zvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2wgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUubHBBZGRyZXNzRXJyb3J9XHJcbiAgICAgICAgICAgICAgZXJyb3JDb250ZW50PXsnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcyd9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZW5kaW5nUG9vbCBjb250cmFjdCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBscEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxlbmRpbmdQb29sQ29yZSBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzRXJyb3J9XHJcbiAgICAgICAgICAgICAgZXJyb3JDb250ZW50PXsnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcyd9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZW5kaW5nUG9vbENvcmUgY29udHJhY3QgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhdGVzdExwQ29yZUFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJbmZ1cmEgV1NTIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLndzc0Vycm9yfVxyXG4gICAgICAgICAgICAgIGVycm9yQ29udGVudD17J011c3Qgc3RhcnQgd2l0aCA8d3NzOi8vPid9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmZ1cmEgV1NTIHByb2plY3QgZW5kcG9pbnRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndzc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgd3NzOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJbmZ1cmEgSFRUUCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5odHRwRXJyb3J9XHJcbiAgICAgICAgICAgICAgZXJyb3JDb250ZW50PXsnTXVzdCBzdGFydCB3aXRoIDxodHRwczovLz4nfVxyXG4gICAgICAgICAgICAgIGlucHV0TGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5mdXJhIGh0dHAgcHJvamVjdCBlbmRwb2ludFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaHR0cH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgaHR0cDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIldhbGxldCBNbmV1bW9uaWMgLyBTZWVkIFBocmFzZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUubW5lbW9uaWNFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydNdXN0IGlucHV0IDEyIHdvcmQgc2VlZCBwaHJhc2UnfVxyXG4gICAgICAgICAgICAgIGlucHV0TGFiZWw9XCJTdHJpbmdcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIgd29yZCBzZWVkIHBocmFzZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW5lbW9uaWN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtbmVtb25pYzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nc0Zvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGlxdWlkYXRpb24gQW1vdW50XCJcclxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudEVycm9yfVxyXG4gICAgICAgICAgICAgIGVycm9yQ29udGVudD17J011c3QgYmUgbnVtZXJpYyd9XHJcbiAgICAgICAgICAgICAgaW5wdXRMYWJlbD1cIldFSVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI8MD4gZm9yIG1heCBsaXF1aWRhdGlvblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdGlvbkFtb3VudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2V0dGluZ3NGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkdhcyBMaW1pdFwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZ2FzTGltaXRFcnJvcn1cclxuICAgICAgICAgICAgICBlcnJvckNvbnRlbnQ9eydNdXN0IGJlIG51bWVyaWMnfVxyXG4gICAgICAgICAgICAgIGlucHV0TGFiZWw9XCJHQVNcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWF4IGFtb3VudCBvZiBnYXMgbGlxdWlkYXRvciBpcyBhbGxvd2VkIHRvIHNwZW5kXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNMaW1pdH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc0xpbWl0OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFVEggR0FTIFNUQVRJT04gQVBJIEtFWVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yfVxyXG4gICAgICAgICAgICAgIGVycm9yQ29udGVudD17J05vbmUnfVxyXG4gICAgICAgICAgICAgIGlucHV0TGFiZWw9XCJTdHJpbmdcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXRoZXJldW0gR2FzIHN0YXRpb24gYXBpIGtleVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV0aEdhc1N0YXRpb25BUElLZXk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNldHRpbmdzRm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJHYXMgUHJpY2VcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmdhc1ByaWNlRXJyb3J9XHJcbiAgICAgICAgICAgICAgZXJyb3JDb250ZW50PXsnTXVzdCBiZSBudW1lcmljJ31cclxuICAgICAgICAgICAgICBpbnB1dExhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdhcyBwcmljZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2FzUHJpY2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNQcmljZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlVzZSBEeW5hbWljIEdhcyBQcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCh7IGR5bmFtaWNHYXNQcmljZSB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNHYXNQcmljZTogIWR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9XCJSZWNlaXZlIENvbGxhdGVyYWwgYXMgYVRva2Vuc1wiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHsgcmVjZWl2ZUFUb2tlbnMgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQVRva2VuczogIXJlY2VpdmVBVG9rZW5zLFxyXG4gICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxhYmVsUG9zaXRpb249XCJsZWZ0XCIgaWNvbj1cImRvd25sb2FkXCIgY29udGVudD1cIlNhdmVcIiAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJVcGxvYWQgU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIGljb249XCJmaWxlXCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGxvYWRTZXR0aW5nc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICByZWY9e3RoaXMuaGlkZGVuRmlsZUlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZWFkU2V0dGluZ3N9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NcclxuIiwiY29uc3QgV2ViMyA9IHJlcXVpcmUoJ3dlYjMnKVxyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcuanNvbicpXHJcbmNvbnN0IEhEV2FsbGV0UHJvdmlkZXIgPSByZXF1aXJlKCdAdHJ1ZmZsZS9oZHdhbGxldC1wcm92aWRlcicpXHJcblxyXG5jb25zdCBuZXR3b3JrID0gc2V0TmV0d29yaygpXHJcblxyXG5mdW5jdGlvbiBzZXROZXR3b3JrKCkge1xyXG4gIHJldHVybiBwcm9jZXNzLmFyZ3ZbMl0gPT0gJ21haW5uZXQnID8gJ21haW5uZXQnIDogJ3JvcHN0ZW4nXHJcbn1cclxuXHJcbmNvbnN0IE9QVElPTlMgPSB7XHJcbiAgZGVmYXVsdEJsb2NrOiAnbGF0ZXN0JyxcclxuICB0cmFuc2FjdGlvbkNvbmZpcm1hdGlvbkJsb2NrczogMSxcclxuICB0cmFuc2FjdGlvbkJsb2NrVGltZW91dDogNSxcclxufVxyXG5cclxubGV0IHdlYjNcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgLy8gSW4gYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZ1xyXG4gIGNvbnNvbGUubG9nKERhdGUubm93LCAnQlJPJylcclxuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtLCBudWxsLCBPUFRJT05TKVxyXG4gIGNvbnNvbGUubG9nKHdlYjMpXHJcbiAgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpXHJcbn0gZWxzZSB7XHJcbiAgY29uc29sZS5sb2coRGF0ZS5ub3cpXHJcbiAgY29uc3Qgd2FsbGV0UHJvdmlkZXIgPSBuZXcgSERXYWxsZXRQcm92aWRlcihcclxuICAgIGNvbmZpZ1tuZXR3b3JrXS5tbmVtb25pYyxcclxuICAgIGNvbmZpZ1tuZXR3b3JrXS5odHRwXHJcbiAgKVxyXG4gIHdlYjMgPSBuZXcgV2ViMyh3YWxsZXRQcm92aWRlcilcclxufVxyXG5cclxuY29uc3Qgd2ViU29ja2V0UHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuV2Vic29ja2V0UHJvdmlkZXIoXHJcbiAgY29uZmlnW25ldHdvcmtdLndzc1xyXG4pXHJcbmNvbnN0IHdlYjN3c3MgPSBuZXcgV2ViMyh3ZWJTb2NrZXRQcm92aWRlcilcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdlYjM6IHdlYjMsXHJcbiAgd2ViM3dzczogd2ViM3dzcyxcclxuICBuZXR3b3JrOiBuZXR3b3JrLFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0cnVmZmxlL2hkd2FsbGV0LXByb3ZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpbGUtc2F2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==