import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <section class="row">
          <article class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Linkin Park</span>
                <p>
                  My friends hate all my Linkin Park jokes, but in the end it
                  doesn't even matter.
                </p>
              </div>
              <div class="card-action">
                <Link to="/linkin-park">Check out Linkin Park</Link>
              </div>
            </div>
          </article>
          <article class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">System of a Down</span>
                <p>It's a non-stop disco / Bet you it's Nabisco</p>
              </div>
              <div class="card-action">
                <Link to="/system-of-a-down">Check out System of a Down</Link>
              </div>
            </div>
          </article>
          <article class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Green Day</span>
                <p>
                  If Green Day were the Beatles, instead of Abbey Road what
                  would they have instead? The Boulevard of Broken Dreams.
                </p>
              </div>
              <div class="card-action">
                <Link to="/green-day">Check out Green Day</Link>
              </div>
            </div>
          </article>
        </section>

        {/* <h1>Home</h1>
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
        </Link> */}
      </>
    )
  }
}

export default Home
