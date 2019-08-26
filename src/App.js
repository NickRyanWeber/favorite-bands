import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Band from './components/Band.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Router>
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
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/:band" component={Band}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
