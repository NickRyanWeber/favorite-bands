import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class NavBar extends Component {
  render() {
    return (
      <nav>
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
      </nav>
    )
  }
}

export default NavBar
