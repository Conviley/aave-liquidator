import React, { Component } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client'
import Layout from '../components/Layout'
import SettingsFormInput from '../components/SettingFormInput'
import FileSaver from 'file-saver'
const axios = require('axios')
const Web3 = require('web3')

class Settings extends Component {
  state = {
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
    fetchAAVEContractsLoading: false,
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
    receiveAtokensError: false,
    saving: false,
  }

  onSubmit = async (event) => {
    event.preventDefault()
    this.setState({ saving: true })
    if (await this.validateState()) {
      this.setState({ saving: false })
      return
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
      receiveATokens: this.state.receiveATokens,
    }
    var blob = new Blob([JSON.stringify(configFile)], {
      type: 'application/json',
    })
    FileSaver.saveAs(blob, 'aave-liquidator-mainnet-settings.json')
    this.setState({ saving: false })
  }

  hiddenFileInput = React.createRef()
  uploadSettings = () => {
    this.hiddenFileInput.current.click()
  }
  readSettings = (event) => {
    var fileUploaded = event.target.files[0]
    if (fileUploaded == null) {
      this.setState({ saving: false })
      return
    }

    var fr = new FileReader()
    fr.onload = (e) => {
      var result = JSON.parse(e.target.result)

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
        receiveATokens: result.receiveATokens,
      })
      this.validateState()
      var formatted = JSON.stringify(result, null, 2)
      console.log(formatted)
    }

    fr.readAsText(fileUploaded)
    // this.hiddenFileInput.current.style = { display: 'inline' }
    this.hiddenFileInput.current.value = ''
  }

  waitForWssValidation = (socket) => {
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
          console.log('ON MESSAGE', message)
          this.setState({ wssError: false })
          sessionStorage.setItem('wssError', false)
          clearInterval(interval)
          resolve()
          socket.close()
        }

        socket.onerror = (error) => {
          this.setState({ wssError: true })
          sessionStorage.setItem('wssError', true)
        }
        currentAttempt++
      }, intervalTime)
    })
  }

  validateState = async () => {
    let error = false

    // Address Validity Check
    Object.keys(this.state).map((key) => {
      if (key.endsWith('Address') || key == 'addressToLiquidate') {
        let validAddress
        validAddress = !Web3.utils.isAddress(this.state[key])
        this.setState({ [key + 'Error']: validAddress })
        sessionStorage.setItem(key + 'Error', validAddress)
        if (validAddress) {
          error = true
        }
      }
    })

    try {
      const socket = new WebSocket(this.state.wss)
      await this.waitForWssValidation(socket)
    } catch (errorMessage) {
      this.setState({ wssError: true })
      sessionStorage.setItem('wssError', true)
      error = true
    }

    try {
      const headers = { 'Content-Type': 'application/json' }
      await axios.post(
        this.state.http,
        { jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 },
        { headers: headers }
      )
      console.log('INFURA HTTP SUCESS')
      this.setState({ httpError: false })
      sessionStorage.setItem('httpError', false)
    } catch (errorMessage) {
      console.log('INFURA HTTPS ERROR', errorMessage)
      this.setState({ httpError: true })
      sessionStorage.setItem('httpError', true)
      error = true
    }

    if (this.state.mnemonic.split(' ').length != 12) {
      this.setState({ mnemonicError: true })
      sessionStorage.setItem('mnemonicError', true)
      error = true
    } else {
      this.setState({ mnemonicError: false })
      sessionStorage.setItem('mnemonicError', false)
    }

    if (isNaN(this.state.liquidationAmount)) {
      this.setState({ liquidationAmountError: true })
      sessionStorage.setItem('liquidationAmountError', true)
      error = true
    } else {
      this.setState({ liquidationAmountError: false })
      sessionStorage.setItem('liquidationAmountError', false)
    }

    if (isNaN(this.state.gasLimit)) {
      this.setState({ gasLimitError: true })
      sessionStorage.setItem('gasLimitError', true)
      error = true
    } else {
      this.setState({ gasLimitError: false })
      sessionStorage.setItem('gasLimitError', false)
    }

    if (isNaN(this.state.gasPrice)) {
      this.setState({ gasPriceError: true })
      sessionStorage.setItem('gasPriceError', true)
      error = true
    } else {
      this.setState({ gasPriceError: false })
      sessionStorage.setItem('gasPriceError', false)
    }

    this.setState({ formError: error })
    console.log('STATE HAS ERROR:', error)
    return error
  }
  updateSessionStorage = (data) => {
    sessionStorage.setItem('liquidatorAddress', data.liquidatorAddress)
    sessionStorage.setItem('addressToLiquidate', data.addressToLiquidate)
    sessionStorage.setItem('collateralAddress', data.collateralAddress)
    sessionStorage.setItem('repayTokenAddress', data.repayTokenAddress)
    sessionStorage.setItem(
      'lpAddressProviderAddress',
      data.lpAddressProviderAddress
    )
    sessionStorage.setItem('lpAddress', data.lpAddress)
    sessionStorage.setItem('latestLpCoreAddress', data.latestLpCoreAddress)
    sessionStorage.setItem('wss', data.wss)
    sessionStorage.setItem('http', data.http)
    sessionStorage.setItem('mnemonic', data.mnemonic)
    sessionStorage.setItem('ethGasStationAPIKey', data.ethGasStationAPIKey)
    sessionStorage.setItem('dynamicGasPrice', data.dynamicGasPrice)
    sessionStorage.setItem('liquidationAmount', data.liquidationAmount)
    sessionStorage.setItem('gasPrice', data.gasPrice)
    sessionStorage.setItem('gasLimit', data.gasLimit)
    sessionStorage.setItem('receiveATokens', data.receiveATokens)
  }

  client = new ApolloClient({
    uri:
      'https://api.thegraph.com/subgraphs/name/aave/protocol-multy-ropsten-raw',
    cache: new InMemoryCache(),
  })

  fetchContractAddresses = async () => {
    this.setState({ fetchAAVEContractsLoading: true })
    var result = await this.client.query({
      query: gql`
        query GetPools {
          pools(first: 1) {
            id
            lendingPool
            lendingPoolCore
          }
        }
      `,
      variables: { id: 1 },
    })
    result = result.data.pools[0]
    console.log(result)
    this.setState({
      lpAddressProviderAddress: result.id,
      lpAddress: result.lendingPool,
      latestLpCoreAddress: result.lendingPoolCore,
      fetchAAVEContractsLoading: false,
    })
  }

  componentDidMount() {
    this.setState({
      liquidatorAddress: sessionStorage.getItem('liquidatorAddress'),
      addressToLiquidate: sessionStorage.getItem('addressToLiquidate'),
      collateralAddress: sessionStorage.getItem('collateralAddress'),
      repayTokenAddress: sessionStorage.getItem('repayTokenAddress'),
      lpAddressProviderAddress: sessionStorage.getItem(
        'lpAddressProviderAddress'
      ),
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
      receiveATokens: sessionStorage.getItem('receiveATokens') == 'true',

      liquidatorAddressError:
        sessionStorage.getItem('liquidatorAddressError') == 'true',
      addressToLiquidateError:
        sessionStorage.getItem('addressToLiquidateError') == 'true',
      collateralAddressError:
        sessionStorage.getItem('collateralAddressError') == 'true',
      repayTokenAddressError:
        sessionStorage.getItem('repayTokenAddressError') == 'true',
      lpAddressProviderAddressError:
        sessionStorage.getItem('lpAddressProviderAddressError') == 'true',
      lpAddressError: sessionStorage.getItem('lpAddressError') == 'true',
      latestLpCoreAddressError:
        sessionStorage.getItem('latestLpCoreAddressError') == 'true',
      wssError: sessionStorage.getItem('wssError') == 'true',
      httpError: sessionStorage.getItem('httpError') == 'true',
      mnemonicError: sessionStorage.getItem('mnemonicError') == 'true',
      ethGasStationAPIKeyError:
        sessionStorage.getItem('ethGasStationAPIKeyError') == 'true',

      liquidationAmountError:
        sessionStorage.getItem('liquidationAmountError') == 'true',
      gasPriceError: sessionStorage.getItem('gasPriceError') == 'true',
      gasLimitError: sessionStorage.getItem('gasLimitError') == 'true',
    })
  }

  componentDidUpdate() {
    this.updateSessionStorage(this.state)
  }

  componentWillUnmount() {
    this.client = null
    this.validateState()
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <Layout>
          <h1>Liquidation Settings</h1>
          <Form onSubmit={this.onSubmit}>
            <Form.Group widths="equal">
              <SettingsFormInput
                label="Liquidator Address"
                error={this.state.liquidatorAddressError}
                errorContent={'Invalid address'}
                inputLabel="HEX"
                placeholder="Address which makes the liquidation call"
                value={this.state.liquidatorAddress}
                onChange={(event) => {
                  this.setState({ liquidatorAddress: event.target.value })
                }}
              />
              <SettingsFormInput
                label="Address To Liquidate"
                error={this.state.addressToLiquidateError}
                errorContent={'Invalid address'}
                inputLabel="HEX"
                placeholder="Address to be liquidated"
                value={this.state.addressToLiquidate}
                onChange={(event) =>
                  this.setState({ addressToLiquidate: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group widths="equal">
              <SettingsFormInput
                label="Collateral Address"
                error={this.state.collateralAddressError}
                errorContent={'Invalid address'}
                inputLabel="HEX"
                placeholder="Address of the collateral to receive"
                value={this.state.collateralAddress}
                onChange={(event) =>
                  this.setState({ collateralAddress: event.target.value })
                }
              />
              <SettingsFormInput
                label="Repay Token Address"
                error={this.state.repayTokenAddressError}
                errorContent={'Invalid address'}
                inputLabel="HEX"
                placeholder="Address of the token that is repaid"
                value={this.state.repayTokenAddress}
                onChange={(event) =>
                  this.setState({ repayTokenAddress: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group widths="equal">
              <SettingsFormInput
                label="Lending Pool Address Provider Address"
                error={this.state.lpAddressProviderAddressError}
                errorContent={'Invalid address'}
                inputLabel="HEX"
                placeholder="Lending Pool Address Provider contract address"
                value={this.state.lpAddressProviderAddress}
                onChange={(event) =>
                  this.setState({
                    lpAddressProviderAddress: event.target.value,
                  })
                }
              />
              <SettingsFormInput
                label="Lending Pool Address"
                error={this.state.lpAddressError}
                errorContent={'Invalid address'}
                inputLabel="HEX"
                placeholder="Lending Pool contract address"
                value={this.state.lpAddress}
                onChange={(event) =>
                  this.setState({ lpAddress: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group widths="equal">
              <SettingsFormInput
                label="Lending Pool Core Address"
                error={this.state.latestLpCoreAddressError}
                errorContent={'Invalid address'}
                inputLabel="HEX"
                placeholder="Lending Pool Core contract address"
                value={this.state.latestLpCoreAddress}
                onChange={(event) =>
                  this.setState({ latestLpCoreAddress: event.target.value })
                }
              />
              <SettingsFormInput
                label="Infura WSS Address"
                error={this.state.wssError}
                errorContent={'Invalid infura endpoint'}
                inputLabel="URL"
                placeholder="Infura WSS project endpoint"
                value={this.state.wss}
                onChange={(event) => this.setState({ wss: event.target.value })}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <SettingsFormInput
                label="Infura HTTP Address"
                error={this.state.httpError}
                errorContent={'Invalid infura endpoint'}
                inputLabel="URL"
                placeholder="Infura http project endpoint"
                value={this.state.http}
                onChange={(event) =>
                  this.setState({ http: event.target.value })
                }
              />
              <SettingsFormInput
                label="Wallet Mneumonic / Seed Phrase"
                error={this.state.mnemonicError}
                errorContent={'Must input 12 word seed phrase'}
                inputLabel="String"
                placeholder="12 word seed phrase"
                value={this.state.mnemonic}
                onChange={(event) =>
                  this.setState({ mnemonic: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group widths="equal">
              <SettingsFormInput
                label="Liquidation Amount"
                error={this.state.liquidationAmountError}
                errorContent={'Must be numeric'}
                inputLabel="WEI"
                placeholder="<0> for max liquidation"
                value={this.state.liquidationAmount}
                onChange={(event) =>
                  this.setState({ liquidationAmount: event.target.value })
                }
              />
              <SettingsFormInput
                label="Gas Limit"
                error={this.state.gasLimitError}
                errorContent={'Must be numeric'}
                inputLabel="GAS"
                placeholder="Max amount of gas liquidator is allowed to spend"
                value={this.state.gasLimit}
                onChange={(event) =>
                  this.setState({ gasLimit: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group widths="equal">
              <SettingsFormInput
                label="ETH GAS STATION API KEY"
                error={this.state.ethGasStationAPIKeyError}
                errorContent={'None'}
                inputLabel="String"
                placeholder="Ethereum Gas station api key"
                value={this.state.ethGasStationAPIKey}
                onChange={(event) =>
                  this.setState({ ethGasStationAPIKey: event.target.value })
                }
              />
              <SettingsFormInput
                label="Gas Price"
                error={this.state.gasPriceError}
                errorContent={'Must be numeric'}
                inputLabel="WEI"
                placeholder="Gas price"
                value={this.state.gasPrice}
                onChange={(event) =>
                  this.setState({ gasPrice: event.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Input label="Use Dynamic Gas Price">
                <Checkbox
                  toggle
                  checked={this.state.dynamicGasPrice}
                  onChange={() =>
                    this.setState(({ dynamicGasPrice }) => ({
                      dynamicGasPrice: !dynamicGasPrice,
                    }))
                  }
                />
              </Form.Input>

              <Form.Input label="Receive Collateral as aTokens">
                <Checkbox
                  toggle
                  checked={this.state.receiveATokens}
                  onChange={() =>
                    this.setState(({ receiveATokens }) => ({
                      receiveATokens: !receiveATokens,
                    }))
                  }
                />
              </Form.Input>
            </Form.Group>

            <Button
              primary
              labelPosition="left"
              icon="download"
              loading={this.state.saving}
              content="Save"
            />

            <Button
              type="button"
              content="Upload Settings"
              labelPosition="left"
              icon="file"
              onClick={this.uploadSettings}
            />
            <input
              type="file"
              ref={this.hiddenFileInput}
              onChange={this.readSettings}
              style={{ display: 'none' }}
            />

            <Button
              loading={this.state.fetchAAVEContractsLoading}
              type="button"
              onClick={this.fetchContractAddresses}
            >
              Get AAVE Contract Addresses
            </Button>
          </Form>
        </Layout>
      </ApolloProvider>
    )
  }
}

export default Settings
