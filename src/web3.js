const Web3 = require('web3')
const axios = require('axios')
const HDWalletProvider = require('@truffle/hdwallet-provider')

async function waitForWssValidation(socket) {
  return new Promise((resolve, reject) => {
    const maxNumberOfAttempts = 10
    const intervalTime = 200 //ms

    let currentAttempt = 0
    const interval = setInterval(() => {
      if (currentAttempt > maxNumberOfAttempts - 1) {
        clearInterval(interval)
        reject(new Error('Maximum number of attempts exceeded'))
      }

      socket.onopen = () => {
        console.log('WEBSOCKET CONNECTION OPENED')

        socket.send(
          JSON.stringify({
            jsonrpc: '2.0',
            method: 'eth_blockNumber',
            params: [],
            id: 1,
          })
        )
      }

      socket.onmessage = (message) => {
        console.log('web3.js: ON MESSAGE', message)
        sessionStorage.setItem('wssError', false)
        clearInterval(interval)
        resolve()
        socket.close()
      }

      socket.onerror = (error) => {
        sessionStorage.setItem('wssError', true)
      }
      currentAttempt++
    }, intervalTime)
  })
}

async function setupWeb3() {
  if (typeof window !== 'undefined') {
    console.log('BROWSER')
    try {
      console.log('wbe3.js', 1)
      await waitForWssValidation(new WebSocket(sessionStorage.getItem('wss')))
      try {
        const headers = { 'Content-Type': 'application/json' }
        await axios.post(
          sessionStorage.getItem('http'),
          { jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 },
          { headers: headers }
        )
        console.log('INFURA HTTP SUCESS')

        sessionStorage.setItem('httpError', false)
      } catch (errorMessage) {
        console.log('INFURA HTTPS', errorMessage)
        sessionStorage.setItem('httpError', true)
        return { web3: null, web3wss: null }
      }
      console.log('wbe3.js', 2)

      const walletProvider = new HDWalletProvider(
        sessionStorage.getItem('mnemonic'),
        sessionStorage.getItem('http')
      )
      var web3 = new Web3(walletProvider)
      console.log('web3.js: websocketprovider')
      const webSocketProvider = new Web3.providers.WebsocketProvider(
        sessionStorage.getItem('wss')
      )
      var web3wss = new Web3(webSocketProvider)
      return { web3: web3, web3wss: web3wss }
    } catch (error) {
      console.log('web3.js', error)
      return { web3: null, web3wss: null }
    }
  } else {
    console.log('WEB3 FROM SERVER')
  }
}

export default setupWeb3
