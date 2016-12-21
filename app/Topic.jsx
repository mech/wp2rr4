import React, { Component, PropTypes } from 'react'

class Topic extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    console.log('Created Topic component')
    console.log(props)
  }

  componentDidMount() {
    console.log('Topic component mounted')
  }

  render() {
    const { params } = this.props

    return (
      <div>
        <h1>Topics {params.id}</h1>
      </div>
    )
  }
}

Topic.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
}

export default Topic
