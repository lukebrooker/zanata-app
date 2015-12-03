import 'babel-polyfill'
import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom'
// import Root from './containers/Root'
import App from './containers/App'
// import configureStore from './store/configureStore'
import './base.css'
import './index.css'

render(
  <App />,
  document.getElementById('root')
)
