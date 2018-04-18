import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  render () {
    return (
      <div id="navbar">
        <Menu >
          <a href="#home">
          <Menu.Item
            name='Home'
          >
            Home
          </Menu.Item>
          </a>
          
          <a href="#portfolioCardsWrapper">
          <Menu.Item
            name='Portfolio'
          >
            Portfolio
          </Menu.Item>
          </a>
          
          <a href="#contactInfoWrapper">
          <Menu.Item
            name='Contact'
          >
            Contact
          </Menu.Item>
          </a>
          
        </Menu>
      </div>
    )
  }
}
