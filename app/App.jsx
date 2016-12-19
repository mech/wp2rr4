import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Match } from 'react-router'
import Login from './Login'
import Yolo from './Yolo'
import Employment from './Employment'
// import Topic from './Topic'
// import BasicExample from './BasicExample'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    // console.log(props)
  }

  render() {
    // return <BasicExample />
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Yolo} />
          <Match exactly pattern="/login" component={Login} />
          <Match pattern="/e" component={Employment} />
          {/* <Match pattern="/e/:id" component={Topic} /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(state => state)(App)
