import React, { Component, PropTypes } from 'react'
import { Match, Link, BrowserRouter } from 'react-router'
import Topic from './Topic'

class Employment extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    console.log('Created Employment component')
  }

  componentDidMount() {
    console.log('Employment component mounted')
  }

  render() {
    const { pathname } = this.props

    return (
      <BrowserRouter>
        <div>
          <h1>Employment: {pathname}</h1>
          <ul>
            <li><Link activeClassName="active" to={`${pathname}/contracts`}>Contracts</Link></li>
            <li><Link activeClassName="active" to={`${pathname}/cv`}>CV</Link></li>
          </ul>

          <Match pattern={`${pathname}/:id`} component={Topic} />
        </div>
      </BrowserRouter>
    )
  }
}

Employment.propTypes = {
  pathname: PropTypes.string,
}

export default Employment
