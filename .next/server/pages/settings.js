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
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "file-saver");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/web3.js */ "./src/web3.js");
/* harmony import */ var _src_web3_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_web3_js__WEBPACK_IMPORTED_MODULE_4__);
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
      let error = false; // Address Validity Check

      Object.keys(this.state).map(key => {
        if (key.endsWith('Address') || key == 'addressToLiquidate') {
          var validAddress = !_src_web3_js__WEBPACK_IMPORTED_MODULE_4___default.a.web3.utils.checkAddressChecksum(this.state[key]);
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

      if (error) {
        this.setState({
          formError: true
        });
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
      file_saver__WEBPACK_IMPORTED_MODULE_3___default.a.saveAs(blob, 'settings.json');
      this.updateSessionStorage(this.state);
    });

    _defineProperty(this, "hiddenFileInput", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(this, "uploadSettings", () => {
      this.hiddenFileInput.current.click();
    });

    _defineProperty(this, "readSettings", event => {
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
        this.updateSessionStorage(result);
        var formatted = JSON.stringify(result, null, 2);
        console.log(formatted);
      };

      fr.readAsText(fileUploaded);
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
    console.log(this.state.liquidationAddressError, 'RENDER');
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
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Liquidator Address",
      error: this.state.liquidatorAddressError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
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
        lineNumber: 226,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Address To Liquidate",
      error: this.state.addressToLiquidateError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      placeholder: "Address to be liquidated",
      value: this.state.addressToLiquidate,
      onChange: event => this.setState({
        addressToLiquidate: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Collateral Address",
      error: this.state.collateralAddressError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      placeholder: "Address of the collateral to receive",
      value: this.state.collateralAddress,
      onChange: event => this.setState({
        collateralAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Repay Token Address",
      error: this.state.repayTokenAddressError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      placeholder: "Address of the token that is repaid",
      value: this.state.repayTokenAddress,
      onChange: event => this.setState({
        repayTokenAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "LendingPoolAddressProvider Address",
      error: this.state.lpAddressProviderAddressError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      placeholder: "LendingPoolAddressProvider contract address",
      value: this.state.lpAddressProviderAddress,
      onChange: event => this.setState({
        lpAddressProviderAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "LendingPool Address",
      error: this.state.lpAddressError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      placeholder: "LendingPool contract address",
      value: this.state.lpAddress,
      onChange: event => this.setState({
        lpAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "LendingPoolCore Address",
      error: this.state.latestLpCoreAddressError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      placeholder: "LendingPoolCore contract address",
      value: this.state.latestLpCoreAddress,
      onChange: event => this.setState({
        latestLpCoreAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Infura WSS Address",
      error: this.state.wssError ? {
        content: 'Must start with <wss://>'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "URL",
      labelPosition: "right",
      placeholder: "Infura WSS project endpoint",
      value: this.state.wss,
      onChange: event => this.setState({
        wss: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Infura HTTP Address",
      error: this.state.httpError ? {
        content: 'Must start with <https://>'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "URL",
      labelPosition: "right",
      placeholder: "Infura http project endpoint",
      value: this.state.http,
      onChange: event => this.setState({
        http: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Wallet Mneumonic / Seed Phrase",
      error: this.state.mnemonicError ? {
        content: 'Must input 12 word seed phrase'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "String",
      labelPosition: "right",
      value: this.state.mnemonic,
      onChange: event => this.setState({
        mnemonic: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Liquidation Amount",
      error: this.state.liquidationAmountError ? {
        content: 'Must be numeric'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "URL",
      labelPosition: "right",
      value: this.state.liquidationAmount,
      onChange: event => this.setState({
        liquidationAmount: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Gas Limit",
      error: this.state.gasLimitError ? {
        content: 'Must be numeric'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "WEI",
      labelPosition: "right",
      value: this.state.gasLimit,
      onChange: event => this.setState({
        gasLimit: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "ETH GAS STATION API KEY",
      error: this.state.ethGasStationAPIKeyError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "String",
      labelPosition: "right",
      value: this.state.ethGasStationAPIKey,
      onChange: event => this.setState({
        ethGasStationAPIKey: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Gas Price",
      error: this.state.gasPriceError ? {
        content: 'Must be numeric'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "WEI",
      labelPosition: "right",
      value: this.state.gasPrice,
      onChange: event => this.setState({
        gasPrice: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Use Dynamic Gas Price",
      error: this.state.dynamicGasPriceError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486,
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
        lineNumber: 494,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Receive Collateral as aTokens",
      error: this.state.receiveAtokensError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
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
        lineNumber: 513,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
      error: true,
      header: "Oops!",
      content: this.state.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 11
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      labelPosition: "left",
      icon: "download",
      content: "Save",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
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
        lineNumber: 527,
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
        lineNumber: 534,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYjMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRydWZmbGUvaGR3YWxsZXQtcHJvdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaWxlLXNhdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJtYXJnaW5Ub3AiLCJwcm9wcyIsImNoaWxkcmVuIiwiU2V0dGluZ3MiLCJDb21wb25lbnQiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRvckFkZHJlc3NFcnJvciIsImFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yIiwiY29sbGF0ZXJhbEFkZHJlc3NFcnJvciIsInJlcGF5VG9rZW5BZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvciIsImxwQWRkcmVzc0Vycm9yIiwibGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yIiwid3NzRXJyb3IiLCJodHRwRXJyb3IiLCJtbmVtb25pY0Vycm9yIiwiZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yIiwiZHluYW1pY0dhc1ByaWNlRXJyb3IiLCJsaXF1aWRhdGlvbkFtb3VudEVycm9yIiwiZ2FzUHJpY2VFcnJvciIsImdhc0xpbWl0RXJyb3IiLCJyZWNlaXZlQXRva2Vuc0Vycm9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuZHNXaXRoIiwidmFsaWRBZGRyZXNzIiwid2ViMyIsInV0aWxzIiwiY2hlY2tBZGRyZXNzQ2hlY2tzdW0iLCJzZXRTdGF0ZSIsInN0YXJ0c1dpdGgiLCJzcGxpdCIsImxlbmd0aCIsImlzTmFOIiwiY29uZmlnRmlsZSIsImJsb2IiLCJCbG9iIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJGaWxlU2F2ZXIiLCJzYXZlQXMiLCJ1cGRhdGVTZXNzaW9uU3RvcmFnZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiaGlkZGVuRmlsZUlucHV0IiwiY3VycmVudCIsImNsaWNrIiwiZmlsZVVwbG9hZGVkIiwidGFyZ2V0IiwiZmlsZXMiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwicmVzdWx0IiwicGFyc2UiLCJmb3JtYXR0ZWQiLCJyZWFkQXNUZXh0IiwiZGF0YSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0SXRlbSIsInJlbmRlciIsImxpcXVpZGF0aW9uQWRkcmVzc0Vycm9yIiwib25TdWJtaXQiLCJjb250ZW50IiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJ1cGxvYWRTZXR0aW5ncyIsInJlYWRTZXR0aW5ncyIsImRpc3BsYXkiLCJXZWIzIiwicmVxdWlyZSIsImNvbmZpZyIsIkhEV2FsbGV0UHJvdmlkZXIiLCJuZXR3b3JrIiwic2V0TmV0d29yayIsInByb2Nlc3MiLCJhcmd2IiwiT1BUSU9OUyIsImRlZmF1bHRCbG9jayIsInRyYW5zYWN0aW9uQ29uZmlybWF0aW9uQmxvY2tzIiwidHJhbnNhY3Rpb25CbG9ja1RpbWVvdXQiLCJEYXRlIiwibm93Iiwid2FsbGV0UHJvdmlkZXIiLCJ3ZWJTb2NrZXRQcm92aWRlciIsInByb3ZpZGVycyIsIldlYnNvY2tldFByb3ZpZGVyIiwid2ViM3dzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFZSxxRUFBTTtBQUNuQixTQUNFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBRUEsZUFBUyxFQUFFO0FBQWIsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFB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QU11RyxPQUFPLEdBQUcsSUFBSWxCLElBQUosQ0FBU2UsaUJBQVQsQ0FBaEI7QUFFQUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZuRSxNQUFJLEVBQUVBLElBRFM7QUFFZmlFLFNBQU8sRUFBRUEsT0FGTTtBQUdmZCxTQUFPLEVBQUVBO0FBSE0sQ0FBakIsQzs7Ozs7Ozs7Ozs7QUN0Q0EsdUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NldHRpbmdzLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICA8TWVudS5JdGVtPkxpcXVpZGF0b3I8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5TZXR0aW5nczwvTWVudS5JdGVtPlxyXG4gICAgICA8L01lbnUuTWVudT5cclxuICAgIDwvTWVudT5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIElucHV0LFxyXG4gIE1lc3NhZ2UsXHJcbiAgQ2hlY2tib3gsXHJcbiAgTGFiZWwsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcidcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vc3JjL3dlYjMuanMnXHJcblxyXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBsaXF1aWRhdG9yQWRkcmVzczogJycsXHJcbiAgICBhZGRyZXNzVG9MaXF1aWRhdGU6ICcnLFxyXG4gICAgY29sbGF0ZXJhbEFkZHJlc3M6ICcnLFxyXG4gICAgcmVwYXlUb2tlbkFkZHJlc3M6ICcnLFxyXG4gICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiAnJyxcclxuICAgIGxwQWRkcmVzczogJycsXHJcbiAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiAnJyxcclxuICAgIHdzczogJycsXHJcbiAgICBodHRwOiAnJyxcclxuICAgIG1uZW1vbmljOiAnJyxcclxuICAgIGV0aEdhc1N0YXRpb25BUElLZXk6ICcnLFxyXG4gICAgZHluYW1pY0dhc1ByaWNlOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQW1vdW50OiAnJyxcclxuICAgIGdhc1ByaWNlOiAnJyxcclxuICAgIGdhc0xpbWl0OiAnJyxcclxuICAgIHJlY2VpdmVBVG9rZW5zOiBmYWxzZSxcclxuICAgIGZvcm1FcnJvcjogZmFsc2UsXHJcbiAgICBsaXF1aWRhdG9yQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIGFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yOiBmYWxzZSxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgcmVwYXlUb2tlbkFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBscEFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBsYXRlc3RMcENvcmVBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgd3NzRXJyb3I6IGZhbHNlLFxyXG4gICAgaHR0cEVycm9yOiBmYWxzZSxcclxuICAgIG1uZW1vbmljRXJyb3I6IGZhbHNlLFxyXG4gICAgZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yOiBmYWxzZSxcclxuICAgIGR5bmFtaWNHYXNQcmljZUVycm9yOiBmYWxzZSxcclxuICAgIGxpcXVpZGF0aW9uQW1vdW50RXJyb3I6IGZhbHNlLFxyXG4gICAgZ2FzUHJpY2VFcnJvcjogZmFsc2UsXHJcbiAgICBnYXNMaW1pdEVycm9yOiBmYWxzZSxcclxuICAgIHJlY2VpdmVBdG9rZW5zRXJyb3I6IGZhbHNlLFxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgbGV0IGVycm9yID0gZmFsc2VcclxuXHJcbiAgICAvLyBBZGRyZXNzIFZhbGlkaXR5IENoZWNrXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICBpZiAoa2V5LmVuZHNXaXRoKCdBZGRyZXNzJykgfHwga2V5ID09ICdhZGRyZXNzVG9MaXF1aWRhdGUnKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkQWRkcmVzcyA9ICF3ZWIzLndlYjMudXRpbHMuY2hlY2tBZGRyZXNzQ2hlY2tzdW0oXHJcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXkgKyAnRXJyb3InXTogdmFsaWRBZGRyZXNzIH0pXHJcbiAgICAgICAgaWYgKHZhbGlkQWRkcmVzcykge1xyXG4gICAgICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS53c3Muc3RhcnRzV2l0aCgnd3NzOi8vJykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdzc0Vycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5odHRwLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGh0dHBFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBlcnJvciA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tbmVtb25pYy5zcGxpdCgnICcpLmxlbmd0aCAhPSAxMikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW5lbW9uaWNFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBlcnJvciA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYU4odGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudCkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0aW9uQW1vdW50RXJyb3I6IHRydWUgfSlcclxuICAgICAgZXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmFOKHRoaXMuc3RhdGUuZ2FzTGltaXQpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNMaW1pdEVycm9yOiB0cnVlIH0pXHJcbiAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hTih0aGlzLnN0YXRlLmdhc1ByaWNlKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2FzUHJpY2VFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBlcnJvciA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1FcnJvcjogdHJ1ZSB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29uZmlnRmlsZSA9IHtcclxuICAgICAgbGlxdWlkYXRvckFkZHJlc3M6IHRoaXMuc3RhdGUubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogdGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGUsXHJcbiAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiB0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICByZXBheVRva2VuQWRkcmVzczogdGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcyxcclxuICAgICAgbHBBZGRyZXNzOiB0aGlzLnN0YXRlLmxwQWRkcmVzcyxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogdGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICB3c3M6IHRoaXMuc3RhdGUud3NzLFxyXG4gICAgICBodHRwOiB0aGlzLnN0YXRlLmh0dHAsXHJcbiAgICAgIG1uZW1vbmljOiB0aGlzLnN0YXRlLm1uZW1vbmljLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiB0aGlzLnN0YXRlLmV0aEdhc1N0YXRpb25BUElLZXksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogdGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiB0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICBnYXNQcmljZTogdGhpcy5zdGF0ZS5nYXNQcmljZSxcclxuICAgICAgZ2FzTGltaXQ6IHRoaXMuc3RhdGUuZ2FzTGltaXQsXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiB0aGlzLnN0YXRlLnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgfVxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoY29uZmlnRmlsZSldLCB7XHJcbiAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0pXHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGJsb2IsICdzZXR0aW5ncy5qc29uJylcclxuICAgIHRoaXMudXBkYXRlU2Vzc2lvblN0b3JhZ2UodGhpcy5zdGF0ZSlcclxuICB9XHJcblxyXG4gIGhpZGRlbkZpbGVJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgdXBsb2FkU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhpZGRlbkZpbGVJbnB1dC5jdXJyZW50LmNsaWNrKClcclxuICB9XHJcbiAgcmVhZFNldHRpbmdzID0gKGV2ZW50KSA9PiB7XHJcbiAgICB2YXIgZmlsZVVwbG9hZGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICBmci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXN1bHQpXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsaXF1aWRhdG9yQWRkcmVzczogcmVzdWx0LmxpcXVpZGF0b3JBZGRyZXNzLFxyXG4gICAgICAgIGFkZHJlc3NUb0xpcXVpZGF0ZTogcmVzdWx0LmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgICBjb2xsYXRlcmFsQWRkcmVzczogcmVzdWx0LmNvbGxhdGVyYWxBZGRyZXNzLFxyXG4gICAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiByZXN1bHQucmVwYXlUb2tlbkFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICAgIGxwQWRkcmVzczogcmVzdWx0LmxwQWRkcmVzcyxcclxuICAgICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiByZXN1bHQubGF0ZXN0THBDb3JlQWRkcmVzcyxcclxuICAgICAgICB3c3M6IHJlc3VsdC53c3MsXHJcbiAgICAgICAgaHR0cDogcmVzdWx0Lmh0dHAsXHJcbiAgICAgICAgbW5lbW9uaWM6IHJlc3VsdC5tbmVtb25pYyxcclxuICAgICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiByZXN1bHQuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgICBkeW5hbWljR2FzUHJpY2U6IHJlc3VsdC5keW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHJlc3VsdC5saXF1aWRhdGlvbkFtb3VudCxcclxuICAgICAgICBnYXNQcmljZTogcmVzdWx0Lmdhc1ByaWNlLFxyXG4gICAgICAgIGdhc0xpbWl0OiByZXN1bHQuZ2FzTGltaXQsXHJcbiAgICAgICAgcmVjZWl2ZUFUb2tlbnM6IHJlc3VsdC5yZWNlaXZlQVRva2VucyxcclxuICAgICAgfSlcclxuICAgICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZShyZXN1bHQpXHJcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZClcclxuICAgIH1cclxuXHJcbiAgICBmci5yZWFkQXNUZXh0KGZpbGVVcGxvYWRlZClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlc3Npb25TdG9yYWdlID0gKGRhdGEpID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0b3JBZGRyZXNzJywgZGF0YS5saXF1aWRhdG9yQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScsIGRhdGEuYWRkcmVzc1RvTGlxdWlkYXRlKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnLCBkYXRhLmNvbGxhdGVyYWxBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncmVwYXlUb2tlbkFkZHJlc3MnLCBkYXRhLnJlcGF5VG9rZW5BZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcycsXHJcbiAgICAgIGRhdGEubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzXHJcbiAgICApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdscEFkZHJlc3MnLCBkYXRhLmxwQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhdGVzdExwQ29yZUFkZHJlc3MnLCBkYXRhLmxhdGVzdExwQ29yZUFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd3c3MnLCBkYXRhLndzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2h0dHAnLCBkYXRhLmh0dHApXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtbmVtb25pYycsIGRhdGEubW5lbW9uaWMpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JywgZGF0YS5ldGhHYXNTdGF0aW9uQVBJS2V5KVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJywgZGF0YS5keW5hbWljR2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcsIGRhdGEubGlxdWlkYXRpb25BbW91bnQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNQcmljZScsIGRhdGEuZ2FzUHJpY2UpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnYXNMaW1pdCcsIGRhdGEuZ2FzTGltaXQpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWNlaXZlQVRva2VucycsIGRhdGEucmVjZWl2ZUFUb2tlbnMpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnKSxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhZGRyZXNzVG9MaXF1aWRhdGUnKSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NvbGxhdGVyYWxBZGRyZXNzJyksXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycpLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICAgJ2xwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzcydcclxuICAgICAgKSxcclxuICAgICAgbHBBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdscEFkZHJlc3MnKSxcclxuICAgICAgbGF0ZXN0THBDb3JlQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycpLFxyXG4gICAgICB3c3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3dzcycpLFxyXG4gICAgICBodHRwOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdodHRwJyksXHJcbiAgICAgIG1uZW1vbmljOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtbmVtb25pYycpLFxyXG4gICAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdldGhHYXNTdGF0aW9uQVBJS2V5JyksXHJcbiAgICAgIGR5bmFtaWNHYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZHluYW1pY0dhc1ByaWNlJykgPT0gJ3RydWUnLFxyXG4gICAgICBsaXF1aWRhdGlvbkFtb3VudDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlxdWlkYXRpb25BbW91bnQnKSxcclxuICAgICAgZ2FzUHJpY2U6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc1ByaWNlJyksXHJcbiAgICAgIGdhc0xpbWl0OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnYXNMaW1pdCcpLFxyXG4gICAgICByZWNlaXZlQVRva2Vuczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVjZWl2ZUFUb2tlbnMnKSA9PSAndHJ1ZScsXHJcbiAgICB9KVxyXG4gIH1cclxuICAvL2FkZCB3cml0ZSB0byBzZXNzaW9uIHN0b3JhZ2Ugb25jaGFuZ2Ugb24gdGhlIHVucHV0c1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlxdWlkYXRpb25BZGRyZXNzRXJyb3IsICdSRU5ERVInKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+TGlxdWlkYXRpb24gU2V0dGluZ3M8L2gxPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17dGhpcy5zdGF0ZS5mb3JtRXJyb3J9PlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxpcXVpZGF0b3IgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIHdoaWNoIG1ha2VzIHRoZSBsaXF1aWRhdGlvbiBjYWxsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlxdWlkYXRvckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyBUbyBMaXF1aWRhdGVcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgdG8gYmUgbGlxdWlkYXRlZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzVG9MaXF1aWRhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc1RvTGlxdWlkYXRlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNvbGxhdGVyYWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXRlcmFsQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIG9mIHRoZSBjb2xsYXRlcmFsIHRvIHJlY2VpdmVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGF0ZXJhbEFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZXBheSBUb2tlbiBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3Mgb2YgdGhlIHRva2VuIHRoYXQgaXMgcmVwYWlkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlcGF5VG9rZW5BZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2xBZGRyZXNzUHJvdmlkZXIgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVuZGluZ1Bvb2xBZGRyZXNzUHJvdmlkZXIgY29udHJhY3QgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2wgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5scEFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVuZGluZ1Bvb2wgY29udHJhY3QgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbHBBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2xDb3JlIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZW5kaW5nUG9vbENvcmUgY29udHJhY3QgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRlc3RMcENvcmVBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhdGVzdExwQ29yZUFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJbmZ1cmEgV1NTIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud3NzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdNdXN0IHN0YXJ0IHdpdGggPHdzczovLz4nIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5mdXJhIFdTUyBwcm9qZWN0IGVuZHBvaW50XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB3c3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiSW5mdXJhIEhUVFAgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5odHRwRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdNdXN0IHN0YXJ0IHdpdGggPGh0dHBzOi8vPicgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmZ1cmEgaHR0cCBwcm9qZWN0IGVuZHBvaW50XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmh0dHB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaHR0cDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIldhbGxldCBNbmV1bW9uaWMgLyBTZWVkIFBocmFzZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tbmVtb25pY0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnTXVzdCBpbnB1dCAxMiB3b3JkIHNlZWQgcGhyYXNlJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RyaW5nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tbmVtb25pY31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtbmVtb25pYzogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxpcXVpZGF0aW9uIEFtb3VudFwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudEVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnTXVzdCBiZSBudW1lcmljJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXF1aWRhdGlvbkFtb3VudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiR2FzIExpbWl0XCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdhc0xpbWl0RXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdNdXN0IGJlIG51bWVyaWMnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc0xpbWl0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc0xpbWl0OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRVRIIEdBUyBTVEFUSU9OIEFQSSBLRVlcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBldGhHYXNTdGF0aW9uQVBJS2V5OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiR2FzIFByaWNlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdhc1ByaWNlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdNdXN0IGJlIG51bWVyaWMnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc1ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc1ByaWNlOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZSBEeW5hbWljIEdhcyBQcmljZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2VFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCh7IGR5bmFtaWNHYXNQcmljZSB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNHYXNQcmljZTogIWR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIlJlY2VpdmUgQ29sbGF0ZXJhbCBhcyBhVG9rZW5zXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlY2VpdmVBdG9rZW5zRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWNlaXZlQVRva2Vuc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCh7IHJlY2VpdmVBVG9rZW5zIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFUb2tlbnM6ICFyZWNlaXZlQVRva2VucyxcclxuICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsYWJlbFBvc2l0aW9uPVwibGVmdFwiIGljb249XCJkb3dubG9hZFwiIGNvbnRlbnQ9XCJTYXZlXCIgLz5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiVXBsb2FkIFNldHRpbmdzXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBpY29uPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBsb2FkU2V0dGluZ3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgcmVmPXt0aGlzLmhpZGRlbkZpbGVJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucmVhZFNldHRpbmdzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXHJcbiIsImNvbnN0IFdlYjMgPSByZXF1aXJlKCd3ZWIzJylcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnLmpzb24nKVxyXG5jb25zdCBIRFdhbGxldFByb3ZpZGVyID0gcmVxdWlyZSgnQHRydWZmbGUvaGR3YWxsZXQtcHJvdmlkZXInKVxyXG5cclxuY29uc3QgbmV0d29yayA9IHNldE5ldHdvcmsoKVxyXG5cclxuZnVuY3Rpb24gc2V0TmV0d29yaygpIHtcclxuICByZXR1cm4gcHJvY2Vzcy5hcmd2WzJdID09ICdtYWlubmV0JyA/ICdtYWlubmV0JyA6ICdyb3BzdGVuJ1xyXG59XHJcblxyXG5jb25zdCBPUFRJT05TID0ge1xyXG4gIGRlZmF1bHRCbG9jazogJ2xhdGVzdCcsXHJcbiAgdHJhbnNhY3Rpb25Db25maXJtYXRpb25CbG9ja3M6IDEsXHJcbiAgdHJhbnNhY3Rpb25CbG9ja1RpbWVvdXQ6IDUsXHJcbn1cclxuXHJcbmxldCB3ZWIzXHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJykge1xyXG4gIC8vIEluIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmdcclxuICBjb25zb2xlLmxvZyhEYXRlLm5vdywgJ0JSTycpXHJcbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSwgbnVsbCwgT1BUSU9OUylcclxuICBjb25zb2xlLmxvZyh3ZWIzKVxyXG4gIHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKVxyXG59IGVsc2Uge1xyXG4gIGNvbnNvbGUubG9nKERhdGUubm93KVxyXG4gIGNvbnN0IHdhbGxldFByb3ZpZGVyID0gbmV3IEhEV2FsbGV0UHJvdmlkZXIoXHJcbiAgICBjb25maWdbbmV0d29ya10ubW5lbW9uaWMsXHJcbiAgICBjb25maWdbbmV0d29ya10uaHR0cFxyXG4gIClcclxuICB3ZWIzID0gbmV3IFdlYjMod2FsbGV0UHJvdmlkZXIpXHJcbn1cclxuXHJcbmNvbnN0IHdlYlNvY2tldFByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLldlYnNvY2tldFByb3ZpZGVyKFxyXG4gIGNvbmZpZ1tuZXR3b3JrXS53c3NcclxuKVxyXG5jb25zdCB3ZWIzd3NzID0gbmV3IFdlYjMod2ViU29ja2V0UHJvdmlkZXIpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB3ZWIzOiB3ZWIzLFxyXG4gIHdlYjN3c3M6IHdlYjN3c3MsXHJcbiAgbmV0d29yazogbmV0d29yayxcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdHJ1ZmZsZS9oZHdhbGxldC1wcm92aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaWxlLXNhdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=