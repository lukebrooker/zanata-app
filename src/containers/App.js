import React, { Component } from 'react'
import a11y from 'react-a11y'
import { connect } from 'react-redux'
import Icons from '../components/Icons'
import Nav from '../components/Nav'
import Header from '../components/Header'
import View from '../components/View'

const navItems = {
  logo: [
    {
      icon: 'zanata',
      link: '/',
      title: 'Zanata'
    }
  ],
  public: [
    {
      icon: 'search',
      link: '/search',
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
      link: '/activity',
      title: 'Activity'
    },
    {
      small: true,
      icon: 'project',
      link: '/projects',
      title: 'Projects'
    },
    {
      small: true,
      icon: 'folder',
      link: '/groups',
      title: 'Groups'
    },
    {
      small: true,
      icon: 'user',
      link: '/user/:uid',
      title: 'Profile'
    },
    {
      icon: 'settings',
      link: '/settings',
      title: 'Settings'
    },
    // {
    //   icon: 'admin',
    //   link: 'admin',
    //   title: 'Admin'
    // },
    {
      icon: 'logout',
      link: '/logout',
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
      link: '/help',
      title: 'Help'
    },
    {
      icon: 'info',
      link: '/about',
      title: 'About'
    }
  ]
}

if (process.env.NODE_ENV === 'development') a11y(React)

class App extends Component {
  constructor (props) {
    super(props)
  }
  handleChange = (nextValue) => {
    this.props.pushState(null, `/${nextValue}`)
  }
  render () {
    const theme = {
      base: {
        h: 'H(100vh)',
        fld: 'Fld(c) Fld(r)--sm'
      }
    }
    const {
      children,
      pageTitle,
      activePath,
      ...props
    } = this.props
    return (
      <View {...props} theme={theme}>
        <Icons />
        <Nav items={navItems} active={activePath} />
        <View theme={{
          base: {
            flxs: '',
            flx: 'Flx(flx1)',
            ov: 'Ov(h)'
          }
        }}>
          <Header title={pageTitle} />
          <View theme={{
            base: {
              flxs: '',
              ov: 'Ov(a)',
              ovh: 'Ovx(h)',
              ovs: 'Ovs(touch)'
            }
          }}>
            <View theme={{
              base: {
                p: 'P(rh) P(r1)--sm'
              }
            }}>
              {children}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    activePath: state.routing.path
  }
}

export default connect(mapStateToProps)(App)
