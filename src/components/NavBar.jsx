import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'

export class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar brand={<Link to="/">Home</Link>} alignLinks="right">
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
