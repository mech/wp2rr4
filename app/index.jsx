import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import './index.css'

const reducer = (state = {}, { type }) => {
  switch (type) {
    case 'auth/login':
      return state
    default:
      return {
        id: 'app-z',
        title: 'Shallow',
      }
  }
}
const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><AppContainer><App /></AppContainer></Provider>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    ReactDOM.render(<Provider store={store}><AppContainer><NextApp /></AppContainer></Provider>, document.getElementById('app'))
  })
}
