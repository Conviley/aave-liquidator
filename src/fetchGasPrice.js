const axios = require('axios')
const { web3 } = require('./web3.js')
const config = require('../config.json').mainnet

async function fetchGasPrice() {
  try {
    console.log('Fetching fastest gas price from ETH GAS STATION...')
    const response = await axios.get(
      'https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=' +
        config.ethGasStationAPIKey
    )
    gasPrice = (response.data.fastest / 10).toString()
    console.log('Using Gas Price: ' + gasPrice + ' GWEI')
    return web3.utils.toWei(gasPrice, 'gwei')
  } catch (error) {
    console.log(error)
  }
}

if (require.main === module) {
  fetchGasPrice()
} else {
  module.exports = fetchGasPrice
}
