import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import web3 from '../src/web3'

class Header extends Component {
  state = { networkVersion: '' }

  setNetworkDisplay = (network) => {
    switch (network) {
      case '1':
      case 'main':
        this.setState({ networkVersion: 'mainnet' })
        break
      case '3':
      case 'ropsten':
        this.setState({ networkVersion: 'ropsten' })
        break
      case '42':
      case 'kovan':
        this.setState({ networkVersion: 'kovan' })
        break
      default:
        this.setState({ networkVersion: 'unsupported' })
    }
  }
  componentDidMount() {
    web3.web3.eth.net.getNetworkType().then(this.setNetworkDisplay)
    web3.web3.currentProvider.publicConfigStore.on('update', (data) => {
      this.setNetworkDisplay(data.networkVersion)
    })
  }

  render() {
    return (
      <Menu style={{ marginTop: '10px' }}>
        <Menu.Item>Liquidator</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>{this.state.networkVersion}</Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header
