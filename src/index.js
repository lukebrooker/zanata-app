import 'babel-polyfill'
import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore, { routerMiddleware, history } from './store/configureStore' // eslint-disable-line
import './styles/base.css'
import './styles/atomic.css'
import './styles/extras.css'

const store = configureStore()

routerMiddleware.syncHistoryToStore(store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
