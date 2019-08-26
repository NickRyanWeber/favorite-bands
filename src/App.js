import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import LinkinPark from './components/LinkinPark.jsx'
import SystemOfADown from './components/SystemOfADown.jsx'
import GreenDay from './components/GreenDay.jsx'
import Band from './components/Band.jsx'

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/linkin-park">
              <li>Linkin Park</li>
            </a>
            <a href="/system-of-a-down">
              <li>System of a Down</li>
            </a>
            <a href="/green-day">
              <li>Green Day</li>
            </a>
          </ul>
        </nav>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/:band" component={Band}></Route>
            {/* <Route exact path="/linkin-park" component={LinkinPark}></Route>
            <Route
              exact
              path="/system-of-a-down"
              component={SystemOfADown}
            ></Route>
            <Route exact path="/green-day" component={GreenDay}></Route> */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
