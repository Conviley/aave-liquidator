import React, { Component } from 'react'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'
import { web3 } from '../src/web3'

class Header extends Component {
  state = { networkVersion: '' }
  listener
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

  updateSessionStorage() {
    sessionStorage.setItem('networkVersion', this.state.networkVersion)
  }

  componentDidMount() {
    web3.eth.net.getNetworkType().then(this.setNetworkDisplay)

    /*this.listener = web3.currentProvider.publicConfigStore?.on(
      'update',
      (data) => {
        this.setNetworkDisplay(data.networkVersion)
      }
    )*/
  }

  componentDidUpdate() {
    this.updateSessionStorage()
  }

  componentWillUnmount() {
    //this.listener = null
  }

  render() {
    return (
      <Menu style={{ marginTop: '10px' }}>
        <Link href="/">
          <Menu.Item>Liquidator</Menu.Item>
        </Link>

        <Menu.Menu position="right">
          <Link href="/settings">
            <Menu.Item>Settings</Menu.Item>
          </Link>

          <Menu.Item>{this.state.networkVersion}</Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header
