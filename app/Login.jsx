import React, { PropTypes } from 'react'
// import { Miss } from 'react-router'

// const NoMatchLogin = () =>
//   <div>
//     <h1>Whoops.. no match for login sub-UI...</h1>
//   </div>

const Login = ({ pathname }) =>
  <div>
    <h1>Please Login... {pathname}</h1>
    <input type="email" />
    <input type="password" />
    <input type="submit" value="Login" />
  </div>

Login.propTypes = {
  pathname: PropTypes.string,
}

export default Login
