import React from 'react' // eslint-disable-line
import Link from '../components/Link'
import View from '../components/View'
import Icon from '../components/Icon'
// import { flattenClasses } from '../utils'

const LanguageTeamTeaser = ({
  children,
  details,
  ...props
}) => {
  const viewTheme = {
    base: {
      ai: 'Ai(c)',
      fld: '',
      m: 'Mb(rh)'
    }
  }
  return (
    <View theme={viewTheme}>
      <View theme={{ base: {fld: 'Fld(r)'} }}>
        <Link to='/username/project-name'
          theme={{ base: { fw: 'Fw(600)' } }}>
          {details.locale}
        </Link>
        <span className='C(muted) Mstart(rq)'>
          {details.localeCode}
        </span>
      </View>
      <View
        theme={{ base: { ai: 'Ai(c)', fld: '', m: 'Mstart(a)' } }}
        MetaData
      >
        <Icon name='zanata'
          theme={{ base: { c: 'C(muted)', m: 'Mend(rq)' } }}
        />
      {details.org}
        <Icon name='users'
          theme={{
            base: {
              c: 'C(muted)',
              m: 'Mend(rq) Mstart(rh)'
            }
          }}
        />
      {details.members}
      </View>
    </View>
  )
}

export default LanguageTeamTeaser
