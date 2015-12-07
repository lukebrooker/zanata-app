import React, { Component } from 'react'
import a11y from 'react-a11y'
// import { connect } from 'react-redux'
// import { pushState } from 'redux-router'
import Icons from '../components/Icons'
import Nav from '../components/Nav'
import View from '../components/View'

const navItems = [
  {
    icon: 'zanata',
    link: './',
    title: 'Zanata'
  },
  {
    icon: 'search',
    link: 'search',
    title: 'Search'
  },
  {
    icon: 'user',
    link: 'user/:uid',
    title: 'Profile'
  },
  {
    icon: 'statistics',
    link: 'activity',
    title: 'Activity'
  },
  {
    icon: 'project',
    link: 'projects',
    title: 'Projects'
  },
  {
    icon: 'settings',
    link: 'settings',
    title: 'Settings'
  }
]

if (process.env.NODE_ENV === 'development') a11y(React)

class App extends Component {
  render () {
    const {
      children,
      ...props
    } = this.props
    return (
      <View {...props} className='H(100%) Ov(h) Fld(r)--sm'>
        <Icons />
        <Nav items={navItems} />
        <View className='Flx(expand)'>
          <View>
            <div>Activity</div>
            <div>Some text and things</div>
            <div className='Fz(msn1)'>Negative 1</div>
            <div className='Fz(ms0)'>Scale 0</div>
            <div className='Fz(ms1)'>Scale 1</div>
            <div className='Fz(ms2)'>Scale 2</div>
            <div className='Fz(ms3)'>Scale 3</div>
            <div className='Fz(ms4)'>Scale 4</div>
            <div className='Fz(ms5)'>Scale 5</div>
            <div className='Fz(ms6)'>Scale 6</div>
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
