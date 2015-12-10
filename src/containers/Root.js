import React, { Component, PropTypes } from 'react' // eslint-disable-line
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router'
import App from '../containers/App'
import Search from '../containers/Search'
import Activity from '../containers/Activity'
import View from '../components/View'

// let DevTools
// let dev = false
// if (process.env.NODE_ENV !== 'production') {
//   DevTools = require('./DevTools')
//   dev = true
// }

export default class Root extends Component {
  render () {
    const {
      store,
      history
    } = this.props
    return (
      <Provider store={store}>
        <View>
          <Router history={history}>
            <Route component={App} >
              <Route path="search" component={Search} />
              <Route path="activity" component={Activity} />
              <Redirect from="/" to="activity" />
            </Route>
          </Router>
          {/* dev ? <DevTools /> : null */}
        </View>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
