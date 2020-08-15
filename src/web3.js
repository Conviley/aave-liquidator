const Web3 = require('web3')
const config = require('../config.json')
const HDWalletProvider = require('@truffle/hdwallet-provider')

const network = setNetwork()

function setNetwork() {
  return process.argv[2] == 'mainnet' ? 'mainnet' : 'ropsten'
}

const walletProvider = new HDWalletProvider(
  config[network].mnemonic,
  config[network].http
)
const web3 = new Web3(walletProvider)

const webSocketProvider = new Web3.providers.WebsocketProvider(
  config[network].wss
)
const web3wss = new Web3(webSocketProvider)

module.exports = {
  web3: web3,
  web3wss: web3wss,
  network: network,
}
