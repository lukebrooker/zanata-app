import { createStore, applyMiddleware, compose } from 'redux'
// import DevTools from '../containers/DevTools'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { syncHistory } from 'redux-simple-router'
import { browserHistory } from 'react-router'
import api from '../middleware/api'
import rootReducer from '../reducers'

export const history = browserHistory
export const routerMiddleware = syncHistory(history)

const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  applyMiddleware(routerMiddleware),
  applyMiddleware(createLogger()),
  // DevTools.instrument()
)(createStore)

export default function (initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
