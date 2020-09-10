import React from 'react'
import { Menu } from 'semantic-ui-react'

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Item>Liquidator</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Settings</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
