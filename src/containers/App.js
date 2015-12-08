import React, { Component } from 'react'
import a11y from 'react-a11y'
// import { connect } from 'react-redux'
// import { pushState } from 'redux-router'
import Icons from '../components/Icons'
import Nav from '../components/Nav'
import Header from '../components/Header'
import View from '../components/View'

const navItems = {
  logo: [
    {
      icon: 'zanata',
      link: './',
      title: 'Zanata'
    }
  ],
  public: [
    {
      icon: 'search',
      link: './search',
      title: 'Search'
    }
  ],
  // loggedout: [
  //   {
  //     small: true,
  //     icon: 'import',
  //     link: 'login',
  //     title: 'Log In'
  //   },
  //   {
  //     small: true,
  //     icon: 'upload',
  //     link: 'singup',
  //     title: 'Sign Up'
  //   }
  // ],
  loggedin: [
    {
      small: true,
      icon: 'statistics',
      link: './activity',
      title: 'Activity'
    },
    {
      small: true,
      icon: 'project',
      link: './projects',
      title: 'Projects'
    },
    {
      small: true,
      icon: 'folder',
      link: './groups',
      title: 'Groups'
    },
    {
      small: true,
      icon: 'user',
      link: 'user/:uid',
      title: 'Profile'
    },
    {
      icon: 'settings',
      link: './settings',
      title: 'Settings'
    },
    // {
    //   icon: 'admin',
    //   link: 'admin',
    //   title: 'Admin'
    // },
    {
      icon: 'logout',
      link: './logout',
      title: 'Log Out'
    }
  ],
  more: [
    {
      small: true,
      icon: 'ellipsis',
      link: '',
      title: 'More'
    }
  ],
  extra: [
    {
      icon: 'help',
      link: './help',
      title: 'Help'
    },
    {
      icon: 'info',
      link: './about',
      title: 'About'
    }
  ]
}

if (process.env.NODE_ENV === 'development') a11y(React)

class App extends Component {
  render () {
    const classes = {
      h: 'H(100vh)',
      ov: 'Ov(h)',
      fld: 'Fld(c) Fld(r)--sm'
    }
    const {
      ...props
    } = this.props
    return (
      <View {...props} theme={classes}>
        <Icons />
        <Nav items={navItems} active='./activity' />
        <View theme={{flxs: '', flx: 'Flx(flx1)'}}>
          <Header title='Activity' />
          <View theme={{
            flxs: '',
            ov: 'Ov(a)',
            ovh: 'Ovx(h)',
            ovs: 'Ovs(touch)'
          }}>
            <View theme={{p: 'P(rh) P(r1)--sm'}}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </View>
          </View>
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
