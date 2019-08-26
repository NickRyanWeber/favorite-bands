import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Band from './components/Band.jsx'
import NavBar from './components/NavBar.jsx'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
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
