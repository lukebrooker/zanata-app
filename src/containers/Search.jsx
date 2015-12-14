import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { flattenClasses } from '../utils'
import Page from '../components/Page'
import ScrollView from '../components/ScrollView'
import Heading from '../components/Heading'
import Icon from '../components/Icon'

class Search extends Component {
  render () {
    const headerClasses = {
      base: {
        bxsh: 'Bxsh(sh1) Bxsh(n)--sm',
        d: 'D(f)',
        ai: 'Ai(c)',
        p: 'Py(rq) Px(rh) P(r1)--sm'
      }
    }
    const headingTheme = {
      base: {
        hidden: 'Hidden'
      }
    }
    const iconTheme = {
      base: {
        fz: 'Fz(ms1) Fz(ms2)--sm'
      }
    }
    return (
      <Page>
        <Helmet title='Search' />
        <header className={flattenClasses(headerClasses)}>
          <Heading level='1' theme={headingTheme}>Search</Heading>
          <div>
            <Icon name='search' size='1' theme={iconTheme}/>
            <input type="search" />
          </div>
        </header>
        <ScrollView>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
        </ScrollView>
      </Page>
    )
  }
}

export default Search
