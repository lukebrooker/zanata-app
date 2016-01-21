import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'
import { isEmpty, values } from 'lodash'
import { flattenClasses, canGoBack } from '../utils'
import Page from '../components/Page'
import ScrollView from '../components/ScrollView'
import View from '../components/View'
import Heading from '../components/Heading'
import Icon from '../components/Icon'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import TeaserList from '../components/TeaserList'
import { searchTextChanged, searchPageLoaded } from '../actions'

const headerClasses = {
  base: {
    ai: 'Ai(c)',
    bxsh: 'Bxsh(shw)',
    bxz: 'Bxz(cb)', // For chrome bug that doesn't keep height of container
    d: 'D(f)',
    fz: 'Fz(ms1)--md',
    jc: 'Jc(c)',
    p: 'Py(rq) Px(rh) P(r1)--sm',
    pos: 'Pos(r)'
  }
}
const headingTheme = {
  base: {
    hidden: 'Hidden'
  }
}
const searchViewTheme = {
  base: {
    ai: 'Ai(c)',
    c: 'C(dark)',
    fld: '',
    pos: 'Pos(r)',
    maw: 'Maw(r32)',
    w: 'W(100%)'
  }
}
const iconTheme = {
  base: {
    ai: 'Ai(c)',
    c: 'C(neutral)',
    fz: 'Fz(ms1) Fz(ms2)--sm',
    jc: 'Jc(c)',
    h: 'H(100%)',
    l: 'Start(rq) Start(rh)--md',
    m: 'Mstart(re) Mstart(0)--md',
    pos: 'Pos(a)',
    t: 'T(0)',
    ta: 'Ta(c)',
    w: 'W(ms1) W(ms2)--md'
  }
}
const inputTheme = {
  base: {
    bdrs: 'Bdrs(rnd)',
    p: 'Py(rq) Py(rh)--md Pstart(r1q) Pstart(r1h)--md Pend(rq)',
    w: 'W(100%)'
  }
}
const buttonTheme = {
  base: {
    c: 'C(pri)',
    m: 'Mstart(rq)'
  }
}
const scrollViewTheme = {
  base: {
    ai: 'Ai(c)'
  }
}
const contentViewContainerTheme = {
  base: {
    maw: 'Maw(r32)',
    m: 'Mx(a)',
    w: 'W(100%)'
  }
}

const titles = {
  project: 'Projects',
  languageTeam: 'Language Teams',
  person: 'People'
}

class Search extends Component {
  componentWillMount () {
    this.props.onSearchPageLoad()
  }
  render () {
    const {
      onSearchCancelClick,
      onSearchTextChange,
      searchText,
      searchData = {},
      searchError,
      searchLoading,
      ...props
    } = this.props
    const searchEntities = searchData.entities || {}
    return (
      <Page>
        <Helmet title='Search' />
        <header className={flattenClasses(headerClasses)}>
          <Heading level='1' theme={headingTheme}>Search</Heading>
          <View theme={searchViewTheme}>
            <Icon name='search' theme={iconTheme}/>
            <TextInput
              autoFocus
              type='search'
              placeholder='Search Zanata…'
              accessibilityLabel='Search Zanata'
              theme={inputTheme}
              value={searchText}
              onChange={onSearchTextChange}
            />
            <Button
              theme={buttonTheme}
            onClick={onSearchCancelClick}>
            Cancel
            </Button>
          </View>
        </header>
        <ScrollView theme={scrollViewTheme}>
          <View theme={contentViewContainerTheme}>
            {isEmpty(searchEntities)
              ? searchLoading
                ? (<div>Loading results…</div>)
                : searchError
                  ? (<p>
                      Error completing search for "{searchText}".<br/>
                      {searchData.message}. Please try again.
                    </p>)
                  : (<p>No Results</p>)
              : Object.keys(searchEntities).map((type, key) =>
                (
                  <TeaserList
                    items={values(searchEntities[type])}
                    title={titles[type]}
                    type={type}
                    key={key}
                    filterable={!searchText}
                  />
                )
              )
            }
          </View>
        </ScrollView>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.routing.location.query.q,
    searchData: state.routing.location.query.q
      ? state.search.data : state.search.default,
    searchError: state.search.error,
    searchLoading: state.search.loading
  }
}

const mapDispatchToProps = (dispatch, {
  history
}) => {
  return {
    onSearchCancelClick: () => {
      if (canGoBack) {
        dispatch(routeActions.goBack())
      } else {
        dispatch(routeActions.push('/'))
      }
    },
    onSearchTextChange: (event) => {
      if (event.target.value) {
        dispatch(routeActions.replace('/search?q=' + event.target.value))
      } else {
        dispatch(routeActions.replace('/search'))
      }
      dispatch(searchTextChanged())
    },
    onSearchPageLoad: () => {
      dispatch(searchPageLoaded())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
