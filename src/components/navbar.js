import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  render () {
    return (
      <div id="navbar">
        <Menu >
          <Menu.Item
            name='Home'
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='Portfolio'
          >
            Portfolio
          </Menu.Item>

          <Menu.Item
            name='Contact'
          >
            Contact
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
