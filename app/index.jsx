import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import App from './App'
import './index.css'

// Middleware acts like interceptors for actions
const logger = store => next => (action) => {
  console.group(action.type)
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const reducer = (state, { type }) => {
  switch (type) {
    case 'auth/login':
      console.log('auth/login is dispatched successfully')
      return state
    default:
      return state
  }
}

const initialState = {
  id: 'app-w',
  title: 'Shallow',
}

// Our single store
// Our single source of truth
// The store hold information but no logic
// The store receives action, pass it through all the registered middlewares,
// then use reducers to calculate new state and save it.
// connect() automatically make our React component listen to the store.
// When store got things to broadcast, it tell all its connected components about it.
const store = createStore(reducer, initialState, applyMiddleware(logger))

ReactDOM.render(<Provider store={store}><AppContainer><App /></AppContainer></Provider>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    ReactDOM.render(<Provider store={store}><AppContainer><NextApp /></AppContainer></Provider>, document.getElementById('app'))
  })
}
