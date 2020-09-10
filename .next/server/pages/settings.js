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
      let error = false;
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

      if (error) {
        console.log('NOPE');
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
        lineNumber: 184,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }, "Liquidation Settings"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.onSubmit,
      error: this.state.formError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
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
        lineNumber: 188,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      value: this.state.liquidatorAddress,
      onChange: event => {
        this.setState({
          liquidatorAddress: event.target.value
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
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
        lineNumber: 206,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      value: this.state.addressToLiquidate,
      onChange: event => this.setState({
        addressToLiquidate: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
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
        lineNumber: 226,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      value: this.state.collateralAddress,
      onChange: event => this.setState({
        collateralAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
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
        lineNumber: 244,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      value: this.state.repayTokenAddress,
      onChange: event => this.setState({
        repayTokenAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
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
        lineNumber: 263,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      value: this.state.lpAddressProviderAddress,
      onChange: event => this.setState({
        lpAddressProviderAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
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
        lineNumber: 283,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      value: this.state.lpAddress,
      onChange: event => this.setState({
        lpAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
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
        lineNumber: 302,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "HEX",
      labelPosition: "right",
      value: this.state.latestLpCoreAddress,
      onChange: event => this.setState({
        latestLpCoreAddress: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Infura WSS Address",
      error: this.state.wssError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "URL",
      labelPosition: "right",
      value: this.state.wss,
      onChange: event => this.setState({
        wss: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Infura HTTP Address",
      error: this.state.httpError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      label: "URL",
      labelPosition: "right",
      value: this.state.http,
      onChange: event => this.setState({
        http: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Wallet Mneumonic / Seed Phrase",
      error: this.state.mnemonicError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
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
        lineNumber: 363,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Liquidation Amount",
      error: this.state.liquidationAmountError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
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
        lineNumber: 382,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Gas Limit",
      error: this.state.gasLimitError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
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
        lineNumber: 399,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      widths: "equal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
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
        lineNumber: 410,
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
        lineNumber: 418,
        columnNumber: 15
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
      label: "Gas Price",
      error: this.state.gasPriceError ? {
        content: 'Please enter a valid address'
      } : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
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
        lineNumber: 436,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
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
        lineNumber: 447,
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
        lineNumber: 455,
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
        lineNumber: 466,
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
        lineNumber: 474,
        columnNumber: 15
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
      error: true,
      header: "Oops!",
      content: this.state.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
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
        lineNumber: 486,
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
        lineNumber: 488,
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
        lineNumber: 495,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYjMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRydWZmbGUvaGR3YWxsZXQtcHJvdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaWxlLXNhdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJtYXJnaW5Ub3AiLCJwcm9wcyIsImNoaWxkcmVuIiwiU2V0dGluZ3MiLCJDb21wb25lbnQiLCJsaXF1aWRhdG9yQWRkcmVzcyIsImFkZHJlc3NUb0xpcXVpZGF0ZSIsImNvbGxhdGVyYWxBZGRyZXNzIiwicmVwYXlUb2tlbkFkZHJlc3MiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3MiLCJscEFkZHJlc3MiLCJsYXRlc3RMcENvcmVBZGRyZXNzIiwid3NzIiwiaHR0cCIsIm1uZW1vbmljIiwiZXRoR2FzU3RhdGlvbkFQSUtleSIsImR5bmFtaWNHYXNQcmljZSIsImxpcXVpZGF0aW9uQW1vdW50IiwiZ2FzUHJpY2UiLCJnYXNMaW1pdCIsInJlY2VpdmVBVG9rZW5zIiwiZm9ybUVycm9yIiwibGlxdWlkYXRvckFkZHJlc3NFcnJvciIsImFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yIiwiY29sbGF0ZXJhbEFkZHJlc3NFcnJvciIsInJlcGF5VG9rZW5BZGRyZXNzRXJyb3IiLCJscEFkZHJlc3NQcm92aWRlckFkZHJlc3NFcnJvciIsImxwQWRkcmVzc0Vycm9yIiwibGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yIiwid3NzRXJyb3IiLCJodHRwRXJyb3IiLCJtbmVtb25pY0Vycm9yIiwiZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yIiwiZHluYW1pY0dhc1ByaWNlRXJyb3IiLCJsaXF1aWRhdGlvbkFtb3VudEVycm9yIiwiZ2FzUHJpY2VFcnJvciIsImdhc0xpbWl0RXJyb3IiLCJyZWNlaXZlQXRva2Vuc0Vycm9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuZHNXaXRoIiwidmFsaWRBZGRyZXNzIiwid2ViMyIsInV0aWxzIiwiY2hlY2tBZGRyZXNzQ2hlY2tzdW0iLCJzZXRTdGF0ZSIsImNvbmZpZ0ZpbGUiLCJibG9iIiwiQmxvYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwiRmlsZVNhdmVyIiwic2F2ZUFzIiwidXBkYXRlU2Vzc2lvblN0b3JhZ2UiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImhpZGRlbkZpbGVJbnB1dCIsImN1cnJlbnQiLCJjbGljayIsImZpbGVVcGxvYWRlZCIsInRhcmdldCIsImZpbGVzIiwiZnIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsInJlc3VsdCIsInBhcnNlIiwiZm9ybWF0dGVkIiwicmVhZEFzVGV4dCIsImRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJjb21wb25lbnREaWRNb3VudCIsImdldEl0ZW0iLCJyZW5kZXIiLCJsaXF1aWRhdGlvbkFkZHJlc3NFcnJvciIsIm9uU3VibWl0IiwiY29udGVudCIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwidXBsb2FkU2V0dGluZ3MiLCJyZWFkU2V0dGluZ3MiLCJkaXNwbGF5IiwiV2ViMyIsInJlcXVpcmUiLCJjb25maWciLCJIRFdhbGxldFByb3ZpZGVyIiwibmV0d29yayIsInNldE5ldHdvcmsiLCJwcm9jZXNzIiwiYXJndiIsIk9QVElPTlMiLCJkZWZhdWx0QmxvY2siLCJ0cmFuc2FjdGlvbkNvbmZpcm1hdGlvbkJsb2NrcyIsInRyYW5zYWN0aW9uQmxvY2tUaW1lb3V0IiwiRGF0ZSIsIm5vdyIsIndhbGxldFByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWJzb2NrZXRQcm92aWRlciIsIndlYjN3c3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRWUscUVBQU07QUFDbkIsU0FDRSxNQUFDLHNEQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUVBLGVBQVMsRUFBRTtBQUFiLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7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OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zZXR0aW5ncy5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgPE1lbnUuSXRlbT5MaXF1aWRhdG9yPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+U2V0dGluZ3M8L01lbnUuSXRlbT5cclxuICAgICAgPC9NZW51Lk1lbnU+XHJcbiAgICA8L01lbnU+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIEJ1dHRvbixcclxuICBJbnB1dCxcclxuICBNZXNzYWdlLFxyXG4gIENoZWNrYm94LFxyXG4gIExhYmVsLFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL3NyYy93ZWIzLmpzJ1xyXG5cclxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbGlxdWlkYXRvckFkZHJlc3M6ICcnLFxyXG4gICAgYWRkcmVzc1RvTGlxdWlkYXRlOiAnJyxcclxuICAgIGNvbGxhdGVyYWxBZGRyZXNzOiAnJyxcclxuICAgIHJlcGF5VG9rZW5BZGRyZXNzOiAnJyxcclxuICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogJycsXHJcbiAgICBscEFkZHJlc3M6ICcnLFxyXG4gICAgbGF0ZXN0THBDb3JlQWRkcmVzczogJycsXHJcbiAgICB3c3M6ICcnLFxyXG4gICAgaHR0cDogJycsXHJcbiAgICBtbmVtb25pYzogJycsXHJcbiAgICBldGhHYXNTdGF0aW9uQVBJS2V5OiAnJyxcclxuICAgIGR5bmFtaWNHYXNQcmljZTogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFtb3VudDogJycsXHJcbiAgICBnYXNQcmljZTogJycsXHJcbiAgICBnYXNMaW1pdDogJycsXHJcbiAgICByZWNlaXZlQVRva2VuczogZmFsc2UsXHJcbiAgICBmb3JtRXJyb3I6IGZhbHNlLFxyXG4gICAgbGlxdWlkYXRvckFkZHJlc3NFcnJvcjogZmFsc2UsXHJcbiAgICBhZGRyZXNzVG9MaXF1aWRhdGVFcnJvcjogZmFsc2UsXHJcbiAgICBjb2xsYXRlcmFsQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIHJlcGF5VG9rZW5BZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbHBBZGRyZXNzRXJyb3I6IGZhbHNlLFxyXG4gICAgbGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yOiBmYWxzZSxcclxuICAgIHdzc0Vycm9yOiBmYWxzZSxcclxuICAgIGh0dHBFcnJvcjogZmFsc2UsXHJcbiAgICBtbmVtb25pY0Vycm9yOiBmYWxzZSxcclxuICAgIGV0aEdhc1N0YXRpb25BUElLZXlFcnJvcjogZmFsc2UsXHJcbiAgICBkeW5hbWljR2FzUHJpY2VFcnJvcjogZmFsc2UsXHJcbiAgICBsaXF1aWRhdGlvbkFtb3VudEVycm9yOiBmYWxzZSxcclxuICAgIGdhc1ByaWNlRXJyb3I6IGZhbHNlLFxyXG4gICAgZ2FzTGltaXRFcnJvcjogZmFsc2UsXHJcbiAgICByZWNlaXZlQXRva2Vuc0Vycm9yOiBmYWxzZSxcclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG5cclxuICAgIGxldCBlcnJvciA9IGZhbHNlXHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZSkubWFwKChrZXkpID0+IHtcclxuICAgICAgaWYgKGtleS5lbmRzV2l0aCgnQWRkcmVzcycpIHx8IGtleSA9PSAnYWRkcmVzc1RvTGlxdWlkYXRlJykge1xyXG4gICAgICAgIHZhciB2YWxpZEFkZHJlc3MgPSAhd2ViMy53ZWIzLnV0aWxzLmNoZWNrQWRkcmVzc0NoZWNrc3VtKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5ICsgJ0Vycm9yJ106IHZhbGlkQWRkcmVzcyB9KVxyXG4gICAgICAgIGlmICh2YWxpZEFkZHJlc3MpIHtcclxuICAgICAgICAgIGVycm9yID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ05PUEUnKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybUVycm9yOiB0cnVlIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb25maWdGaWxlID0ge1xyXG4gICAgICBsaXF1aWRhdG9yQWRkcmVzczogdGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzcyxcclxuICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiB0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZSxcclxuICAgICAgY29sbGF0ZXJhbEFkZHJlc3M6IHRoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3MsXHJcbiAgICAgIHJlcGF5VG9rZW5BZGRyZXNzOiB0aGlzLnN0YXRlLnJlcGF5VG9rZW5BZGRyZXNzLFxyXG4gICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHRoaXMuc3RhdGUubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzLFxyXG4gICAgICBscEFkZHJlc3M6IHRoaXMuc3RhdGUubHBBZGRyZXNzLFxyXG4gICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiB0aGlzLnN0YXRlLmxhdGVzdExwQ29yZUFkZHJlc3MsXHJcbiAgICAgIHdzczogdGhpcy5zdGF0ZS53c3MsXHJcbiAgICAgIGh0dHA6IHRoaXMuc3RhdGUuaHR0cCxcclxuICAgICAgbW5lbW9uaWM6IHRoaXMuc3RhdGUubW5lbW9uaWMsXHJcbiAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHRoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleSxcclxuICAgICAgZHluYW1pY0dhc1ByaWNlOiB0aGlzLnN0YXRlLmR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgbGlxdWlkYXRpb25BbW91bnQ6IHRoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnQsXHJcbiAgICAgIGdhc1ByaWNlOiB0aGlzLnN0YXRlLmdhc1ByaWNlLFxyXG4gICAgICBnYXNMaW1pdDogdGhpcy5zdGF0ZS5nYXNMaW1pdCxcclxuICAgICAgcmVjZWl2ZUFUb2tlbnM6IHRoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnMsXHJcbiAgICB9XHJcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShjb25maWdGaWxlKV0sIHtcclxuICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSlcclxuICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgJ3NldHRpbmdzLmpzb24nKVxyXG4gICAgdGhpcy51cGRhdGVTZXNzaW9uU3RvcmFnZSh0aGlzLnN0YXRlKVxyXG4gIH1cclxuXHJcbiAgaGlkZGVuRmlsZUlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICB1cGxvYWRTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIHRoaXMuaGlkZGVuRmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKVxyXG4gIH1cclxuICByZWFkU2V0dGluZ3MgPSAoZXZlbnQpID0+IHtcclxuICAgIHZhciBmaWxlVXBsb2FkZWQgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKClcclxuICAgIGZyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdClcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiByZXN1bHQubGlxdWlkYXRvckFkZHJlc3MsXHJcbiAgICAgICAgYWRkcmVzc1RvTGlxdWlkYXRlOiByZXN1bHQuYWRkcmVzc1RvTGlxdWlkYXRlLFxyXG4gICAgICAgIGNvbGxhdGVyYWxBZGRyZXNzOiByZXN1bHQuY29sbGF0ZXJhbEFkZHJlc3MsXHJcbiAgICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHJlc3VsdC5yZXBheVRva2VuQWRkcmVzcyxcclxuICAgICAgICBscEFkZHJlc3NQcm92aWRlckFkZHJlc3M6IHJlc3VsdC5scEFkZHJlc3NQcm92aWRlckFkZHJlc3MsXHJcbiAgICAgICAgbHBBZGRyZXNzOiByZXN1bHQubHBBZGRyZXNzLFxyXG4gICAgICAgIGxhdGVzdExwQ29yZUFkZHJlc3M6IHJlc3VsdC5sYXRlc3RMcENvcmVBZGRyZXNzLFxyXG4gICAgICAgIHdzczogcmVzdWx0LndzcyxcclxuICAgICAgICBodHRwOiByZXN1bHQuaHR0cCxcclxuICAgICAgICBtbmVtb25pYzogcmVzdWx0Lm1uZW1vbmljLFxyXG4gICAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHJlc3VsdC5ldGhHYXNTdGF0aW9uQVBJS2V5LFxyXG4gICAgICAgIGR5bmFtaWNHYXNQcmljZTogcmVzdWx0LmR5bmFtaWNHYXNQcmljZSxcclxuICAgICAgICBsaXF1aWRhdGlvbkFtb3VudDogcmVzdWx0LmxpcXVpZGF0aW9uQW1vdW50LFxyXG4gICAgICAgIGdhc1ByaWNlOiByZXN1bHQuZ2FzUHJpY2UsXHJcbiAgICAgICAgZ2FzTGltaXQ6IHJlc3VsdC5nYXNMaW1pdCxcclxuICAgICAgICByZWNlaXZlQVRva2VuczogcmVzdWx0LnJlY2VpdmVBVG9rZW5zLFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnVwZGF0ZVNlc3Npb25TdG9yYWdlKHJlc3VsdClcclxuICAgICAgdmFyIGZvcm1hdHRlZCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMilcclxuICAgICAgY29uc29sZS5sb2coZm9ybWF0dGVkKVxyXG4gICAgfVxyXG5cclxuICAgIGZyLnJlYWRBc1RleHQoZmlsZVVwbG9hZGVkKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2Vzc2lvblN0b3JhZ2UgPSAoZGF0YSkgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGlxdWlkYXRvckFkZHJlc3MnLCBkYXRhLmxpcXVpZGF0b3JBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWRkcmVzc1RvTGlxdWlkYXRlJywgZGF0YS5hZGRyZXNzVG9MaXF1aWRhdGUpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjb2xsYXRlcmFsQWRkcmVzcycsIGRhdGEuY29sbGF0ZXJhbEFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZXBheVRva2VuQWRkcmVzcycsIGRhdGEucmVwYXlUb2tlbkFkZHJlc3MpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJyxcclxuICAgICAgZGF0YS5scEFkZHJlc3NQcm92aWRlckFkZHJlc3NcclxuICAgIClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xwQWRkcmVzcycsIGRhdGEubHBBZGRyZXNzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGF0ZXN0THBDb3JlQWRkcmVzcycsIGRhdGEubGF0ZXN0THBDb3JlQWRkcmVzcylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3dzcycsIGRhdGEud3NzKVxyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaHR0cCcsIGRhdGEuaHR0cClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ21uZW1vbmljJywgZGF0YS5tbmVtb25pYylcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknLCBkYXRhLmV0aEdhc1N0YXRpb25BUElLZXkpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnLCBkYXRhLmR5bmFtaWNHYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpcXVpZGF0aW9uQW1vdW50JywgZGF0YS5saXF1aWRhdGlvbkFtb3VudClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc1ByaWNlJywgZGF0YS5nYXNQcmljZSlcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dhc0xpbWl0JywgZGF0YS5nYXNMaW1pdClcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlY2VpdmVBVG9rZW5zJywgZGF0YS5yZWNlaXZlQVRva2VucylcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpcXVpZGF0b3JBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdG9yQWRkcmVzcycpLFxyXG4gICAgICBhZGRyZXNzVG9MaXF1aWRhdGU6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FkZHJlc3NUb0xpcXVpZGF0ZScpLFxyXG4gICAgICBjb2xsYXRlcmFsQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY29sbGF0ZXJhbEFkZHJlc3MnKSxcclxuICAgICAgcmVwYXlUb2tlbkFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlcGF5VG9rZW5BZGRyZXNzJyksXHJcbiAgICAgIGxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgICAnbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzJ1xyXG4gICAgICApLFxyXG4gICAgICBscEFkZHJlc3M6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xwQWRkcmVzcycpLFxyXG4gICAgICBsYXRlc3RMcENvcmVBZGRyZXNzOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYXRlc3RMcENvcmVBZGRyZXNzJyksXHJcbiAgICAgIHdzczogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd3NzJyksXHJcbiAgICAgIGh0dHA6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2h0dHAnKSxcclxuICAgICAgbW5lbW9uaWM6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21uZW1vbmljJyksXHJcbiAgICAgIGV0aEdhc1N0YXRpb25BUElLZXk6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2V0aEdhc1N0YXRpb25BUElLZXknKSxcclxuICAgICAgZHluYW1pY0dhc1ByaWNlOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkeW5hbWljR2FzUHJpY2UnKSA9PSAndHJ1ZScsXHJcbiAgICAgIGxpcXVpZGF0aW9uQW1vdW50OiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXF1aWRhdGlvbkFtb3VudCcpLFxyXG4gICAgICBnYXNQcmljZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2FzUHJpY2UnKSxcclxuICAgICAgZ2FzTGltaXQ6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dhc0xpbWl0JyksXHJcbiAgICAgIHJlY2VpdmVBVG9rZW5zOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdyZWNlaXZlQVRva2VucycpID09ICd0cnVlJyxcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vYWRkIHdyaXRlIHRvIHNlc3Npb24gc3RvcmFnZSBvbmNoYW5nZSBvbiB0aGUgdW5wdXRzXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5saXF1aWRhdGlvbkFkZHJlc3NFcnJvciwgJ1JFTkRFUicpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5MaXF1aWRhdGlvbiBTZXR0aW5nczwvaDE+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXt0aGlzLnN0YXRlLmZvcm1FcnJvcn0+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGlxdWlkYXRvciBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpcXVpZGF0b3JBZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5saXF1aWRhdG9yQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0b3JBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgVG8gTGlxdWlkYXRlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFkZHJlc3NUb0xpcXVpZGF0ZUVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc1RvTGlxdWlkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NUb0xpcXVpZGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb2xsYXRlcmFsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbEFkZHJlc3NFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIRVhcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhdGVyYWxBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUmVwYXkgVG9rZW4gQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXBheVRva2VuQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVwYXlUb2tlbkFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVwYXlUb2tlbkFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMZW5kaW5nUG9vbEFkZHJlc3NQcm92aWRlciBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxwQWRkcmVzc1Byb3ZpZGVyQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbHBBZGRyZXNzUHJvdmlkZXJBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkxlbmRpbmdQb29sIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubHBBZGRyZXNzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSEVYXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5scEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbHBBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVuZGluZ1Bvb2xDb3JlIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhFWFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGF0ZXN0THBDb3JlQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXRlc3RMcENvcmVBZGRyZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiSW5mdXJhIFdTUyBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndzc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud3NzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJbmZ1cmEgSFRUUCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmh0dHBFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmh0dHB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaHR0cDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIldhbGxldCBNbmV1bW9uaWMgLyBTZWVkIFBocmFzZVwiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tbmVtb25pY0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubW5lbW9uaWN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW5lbW9uaWM6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz1cImVxdWFsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaXF1aWRhdGlvbiBBbW91bnRcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlxdWlkYXRpb25BbW91bnRFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxpcXVpZGF0aW9uQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpcXVpZGF0aW9uQW1vdW50OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJHYXMgTGltaXRcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZ2FzTGltaXRFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IHsgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnIH1cclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJXRUlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdhc0xpbWl0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdhc0xpbWl0OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9XCJlcXVhbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRVRIIEdBUyBTVEFUSU9OIEFQSSBLRVlcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleUVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXRoR2FzU3RhdGlvbkFQSUtleX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBldGhHYXNTdGF0aW9uQVBJS2V5OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiR2FzIFByaWNlXCJcclxuICAgICAgICAgICAgICBlcnJvcj17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdhc1ByaWNlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiV0VJXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nYXNQcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnYXNQcmljZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLklucHV0PlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2UgRHluYW1pYyBHYXMgUHJpY2VcIlxyXG4gICAgICAgICAgICAgIGVycm9yPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZHluYW1pY0dhc1ByaWNlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyB7IGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhZGRyZXNzJyB9XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5keW5hbWljR2FzUHJpY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBkeW5hbWljR2FzUHJpY2UgfSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBkeW5hbWljR2FzUHJpY2U6ICFkeW5hbWljR2FzUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZWNlaXZlIENvbGxhdGVyYWwgYXMgYVRva2Vuc1wiXHJcbiAgICAgICAgICAgICAgZXJyb3I9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWNlaXZlQXRva2Vuc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgID8geyBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycgfVxyXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVjZWl2ZUFUb2tlbnN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyByZWNlaXZlQVRva2VucyB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBVG9rZW5zOiAhcmVjZWl2ZUFUb2tlbnMsXHJcbiAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JbnB1dD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbGFiZWxQb3NpdGlvbj1cImxlZnRcIiBpY29uPVwiZG93bmxvYWRcIiBjb250ZW50PVwiU2F2ZVwiIC8+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlVwbG9hZCBTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgaWNvbj1cImZpbGVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVwbG9hZFNldHRpbmdzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5oaWRkZW5GaWxlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJlYWRTZXR0aW5nc31cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1xyXG4iLCJjb25zdCBXZWIzID0gcmVxdWlyZSgnd2ViMycpXHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZy5qc29uJylcclxuY29uc3QgSERXYWxsZXRQcm92aWRlciA9IHJlcXVpcmUoJ0B0cnVmZmxlL2hkd2FsbGV0LXByb3ZpZGVyJylcclxuXHJcbmNvbnN0IG5ldHdvcmsgPSBzZXROZXR3b3JrKClcclxuXHJcbmZ1bmN0aW9uIHNldE5ldHdvcmsoKSB7XHJcbiAgcmV0dXJuIHByb2Nlc3MuYXJndlsyXSA9PSAnbWFpbm5ldCcgPyAnbWFpbm5ldCcgOiAncm9wc3RlbidcclxufVxyXG5cclxuY29uc3QgT1BUSU9OUyA9IHtcclxuICBkZWZhdWx0QmxvY2s6ICdsYXRlc3QnLFxyXG4gIHRyYW5zYWN0aW9uQ29uZmlybWF0aW9uQmxvY2tzOiAxLFxyXG4gIHRyYW5zYWN0aW9uQmxvY2tUaW1lb3V0OiA1LFxyXG59XHJcblxyXG5sZXQgd2ViM1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAvLyBJbiBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nXHJcbiAgY29uc29sZS5sb2coRGF0ZS5ub3csICdCUk8nKVxyXG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0sIG51bGwsIE9QVElPTlMpXHJcbiAgY29uc29sZS5sb2cod2ViMylcclxuICB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKClcclxufSBlbHNlIHtcclxuICBjb25zb2xlLmxvZyhEYXRlLm5vdylcclxuICBjb25zdCB3YWxsZXRQcm92aWRlciA9IG5ldyBIRFdhbGxldFByb3ZpZGVyKFxyXG4gICAgY29uZmlnW25ldHdvcmtdLm1uZW1vbmljLFxyXG4gICAgY29uZmlnW25ldHdvcmtdLmh0dHBcclxuICApXHJcbiAgd2ViMyA9IG5ldyBXZWIzKHdhbGxldFByb3ZpZGVyKVxyXG59XHJcblxyXG5jb25zdCB3ZWJTb2NrZXRQcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5XZWJzb2NrZXRQcm92aWRlcihcclxuICBjb25maWdbbmV0d29ya10ud3NzXHJcbilcclxuY29uc3Qgd2ViM3dzcyA9IG5ldyBXZWIzKHdlYlNvY2tldFByb3ZpZGVyKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgd2ViMzogd2ViMyxcclxuICB3ZWIzd3NzOiB3ZWIzd3NzLFxyXG4gIG5ldHdvcms6IG5ldHdvcmssXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRydWZmbGUvaGR3YWxsZXQtcHJvdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlsZS1zYXZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9