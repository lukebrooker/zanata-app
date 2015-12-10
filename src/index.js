import 'babel-polyfill'
import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom'
import { syncReduxAndRouter } from 'redux-simple-router'
import { createHistory } from 'history'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import './base.css'
import './index.css'

const history = createHistory()
const store = configureStore()

syncReduxAndRouter(history, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
