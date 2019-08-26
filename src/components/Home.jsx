import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <h2>Linkin Park</h2>
        <p>
          My friends hate all my Linkin Park jokes, but in the end it doesn't
          even matter.
        </p>
        <Link to="/linkin-park">
          <button>Check it out</button>
        </Link>
        <h2>System of a Down</h2>
        <p>It's a non-stop disco / Bet you it's Nabisco</p>
        <Link to="/system-of-a-down">
          <button>Check it out</button>
        </Link>
        <h2>Green Day</h2>
        <p>
          If Green Day were the Beatles, instead of Abbey Road what would they
          have instead? The Boulevard of Broken Dreams.
        </p>
        <Link to="/green-day">
          <button>Check it out</button>
        </Link>
      </>
    )
  }
}

export default Home
