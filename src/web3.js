const Web3 = require('web3')
const config = require('../config.json')
const HDWalletProvider = require('@truffle/hdwallet-provider')

let web3, web3wss

if (typeof window !== 'undefined') {
  console.log('BROWSER')
  try {
    const walletProvider = new HDWalletProvider(
      sessionStorage.getItem('mnemonic'),
      sessionStorage.getItem('http')
    )
    web3 = new Web3(walletProvider)

    const webSocketProvider = new Web3.providers.WebsocketProvider(
      sessionStorage.getItem('wss')
    )

    web3wss = new Web3(webSocketProvider)
  } catch (error) {
    console.log(error)
    web3 = null
    web3wss = null
  }
} else {
  console.log('WEB3 FROM SERVER')
}

module.exports = {
  web3: web3,
  web3wss: web3wss,
}
