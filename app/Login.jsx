import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import { Miss } from 'react-router'

// const NoMatchLogin = () =>
//   <div>
//     <h1>Whoops.. no match for login sub-UI...</h1>
//   </div>

const Login = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Please Login... {props.pathname}</h1>
      <input type="email" />
      <input type="password" />
      <input type="submit" value="Login" onClick={() => props.dispatch({ type: 'auth/login' })} />
    </div>
  )
}

Login.propTypes = {
  pathname: PropTypes.string,
  dispatch: PropTypes.func,
}

export default connect(state => state)(Login)
