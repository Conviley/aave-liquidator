import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import lpcontract from '../src/lendingPoolCore'
import Layout from '../components/Layout'

class Index extends Component {
  static async getInitialProps() {
    const userAccountData = await lpcontract.methods
      .getUserAccountData('0x8e5687908487cf9362632D074965Fe4B83D660a2')
      .call()
    return { healthFactor: 'Health Factor: ' + userAccountData['healthFactor'] }
  }

  render() {
    return (
      <Layout>
        <div>
          <Card
            header="0x8e5687908487cf9362632D074965Fe4B83D660a2"
            meta={this.props.healthFactor}
            fluid={true}
          ></Card>
        </div>
      </Layout>
    )
  }
}

export default Index
