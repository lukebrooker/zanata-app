import React, { Component, PropTypes } from 'react' // eslint-disable-line
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
// import DevTools from './DevTools'
import View from '../components/View'

export default class Root extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <View className='H(100%) Ov(h)'>
          <ReduxRouter />
          {/* <DevTools /> */}
        </View>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
