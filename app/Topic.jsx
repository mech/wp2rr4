import React, { PropTypes } from 'react'

const Topic = ({ params }) =>
  <div>
    <h1>Topics {params.id}</h1>
  </div>


Topic.propTypes = {
  params: PropTypes.string,
}

export default Topic
