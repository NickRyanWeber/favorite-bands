import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavItem,
  Dropdown,
  Button,
  Icon,
  Divider
} from 'react-materialize'

export class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          ClassName="nav-wrapper"
          brand={<Link to="/">Home</Link>}
          alignLinks="right"
        >
          <NavItem>
            <Link to="/linkin-park">Linkin Park</Link>
          </NavItem>
          <NavItem>
            <Link to="/system-of-a-down">System of a Down</Link>
          </NavItem>
          <NavItem>
            <Link to="/green-day">Green Day</Link>
          </NavItem>
        </Navbar>
        <Dropdown trigger={<Button />}>
          <a href="#">one</a>
          <a href="#">two</a>
          <Divider />
          <a href="#">three</a>
          <a href="#">
            <Icon>view_module</Icon>
            four
          </a>
          <a href="#">
            <Icon>cloud</Icon>
            five
          </a>
        </Dropdown>
        {/* <nav>
          <h1>test</h1>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/linkin-park">
              <li>Linkin Park</li>
            </Link>
            <Link to="/system-of-a-down">
              <li>System of a Down</li>
            </Link>
            <Link to="/green-day">
              <li>Green Day</li>
            </Link>
          </ul>
        </nav> */}
      </>
    )
  }
}

export default NavBar
