import React, { Component, PropTypes } from 'react' // eslint-disable-line
// import a11y from 'react-a11y'
// import { connect } from 'react-redux'
// import { pushState } from 'redux-router'
import Nav from '../components/Nav'
import View from '../components/View'

// if (process.env.NODE_ENV === 'development') a11y(React)

class App extends Component {
  render () {
    const {
      children,
      ...props
    } = this.props
    const menuItems = ['Menu', 'Menu', 'Menu']
    return (
      <View {...props} className='H(100%) Ov(h)'>
        <Nav items={menuItems} className='Or(1)'/>
        <View className='Flx(expand)'>
          <View>
            <div>Activity</div>
            <div>Some text and things</div>
          </View>
          {children}
        </View>
      </View>
    )
  }
}

export default App

// function mapStateToProps (state) {
//   return {
//     inputValue: state.router.location.pathname.substring(1)
//   }
// }
//
// export default connect(mapStateToProps, {
//   pushState
// })(App)
