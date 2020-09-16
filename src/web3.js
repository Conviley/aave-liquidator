const Web3 = require('web3')
const config = require('../config.json')
const HDWalletProvider = require('@truffle/hdwallet-provider')

const network = setNetwork()

function setNetwork() {
  return process.argv[2] == 'mainnet' ? 'mainnet' : 'ropsten'
}

const OPTIONS = {
  defaultBlock: 'latest',
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5,
}

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // In browser and metamask is running
  console.log('WEB3 FROM BROWSER')
  web3 = new Web3(window.ethereum, null, OPTIONS)
  window.ethereum.enable()
} else {
  console.log('WEB3 FROM SERVER')
  const walletProvider = new HDWalletProvider(
    config[network].mnemonic,
    config[network].http
  )
  web3 = new Web3(walletProvider)
}

const webSocketProvider = new Web3.providers.WebsocketProvider(
  config[network].wss
)
const web3wss = new Web3(webSocketProvider)

module.exports = {
  web3: web3,
  web3wss: web3wss,
  network: network,
}
