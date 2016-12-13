import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Match, Link } from 'react-router'
import Login from './Login'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    console.log(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Yolo 世界</h1>
          <ul>
            <li><Link to="/login">Login</Link></li>
          </ul>

          <Match exactly pattern="/login" component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(state => state)(App)
