import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { web3, web3wss } from '../src/web3'
import lpcontract from '../src/lendingPoolCore'
import Layout from '../components/Layout'

class Index extends Component {
  /*static async getInitialProps() {
    const userAccountData = await lpcontract.methods
      .getUserAccountData('0x8e5687908487cf9362632D074965Fe4B83D660a2')
      .call()
    return { healthFactor: 'Health Factor: ' + userAccountData['healthFactor'] }
  }*/

  subscription = null
  liquidate = async () => {
    if (this.subscription == null) {
      this.subscription = web3wss.eth
        .subscribe('newBlockHeaders', async (e, result) => {
          console.log(result.number)
        })
        .on('connected', function (subscriptionId) {
          console.log('Web3 websocket subscription connection established!\n')
          console.log('Waiting for new block...')
        })
    }
  }

  stopLiquidate = () => {
    this.subscription?.unsubscribe(() => {
      console.log('Terminated websocket subscription connection!')
      this.subscription = null
    })
  }
  componentWillUnmount() {
    this.stopLiquidate()
  }

  render() {
    return (
      <Layout>
        <Button onClick={this.liquidate}>Start Liquidator</Button>
        <Button onClick={this.stopLiquidate}>Stop Liquidator</Button>
      </Layout>
    )
  }
}

export default Index
