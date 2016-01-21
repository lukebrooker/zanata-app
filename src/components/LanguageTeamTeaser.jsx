import React from 'react' // eslint-disable-line
import Link from '../components/Link'
import View from '../components/View'
import Icon from '../components/Icon'
// import { flattenClasses } from '../utils'

const viewTheme = {
  base: {
    ai: 'Ai(c)',
    fld: '',
    m: 'Mb(rh)'
  }
}

const LanguageTeamTeaser = ({
  children,
  details,
  ...props
}) => {
  const org = details.org ? details.org : 'Zanata'
  const orgIcon = details.org ? 'company' : 'zanata'
  return (
    <View theme={viewTheme}>
      <View theme={{ base: {fld: 'Fld(r)'} }}>
        <Link to={'/language/' + details.id}
          theme={{ base: { fw: 'Fw(600)' } }}>
          {details.locale}
        </Link>
        <span className='C(muted) Mstart(rq)'>
          {details.id}
        </span>
      </View>
      <View theme={{ base: { ai: 'Ai(c)', fld: '', m: 'Mstart(a)' } }} >
        <Icon name={orgIcon}
          theme={{ base: { c: 'C(muted)', m: 'Mend(rq)' } }}
        />
        {org}
        <Icon name='users'
          theme={{
            base: {
              c: 'C(muted)',
              m: 'Mend(rq) Mstart(rh)'
            }
          }}
        />
      {details.memberCount}
      </View>
    </View>
  )
}

export default LanguageTeamTeaser
