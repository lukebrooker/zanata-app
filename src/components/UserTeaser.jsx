import React from 'react' // eslint-disable-line
import Link from '../components/Link'
import View from '../components/View'
import Icon from '../components/Icon'
// import { flattenClasses } from '../utils'

const UserTeaser = ({
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
        <img
          src={details.avatar}
          alt={details.username}
          className='Bdrs(rnd) Mend(rq) W(r1h) H(r1h)'
        />
        <Link to={details.username}
          theme={{ base: { fw: 'Fw(600)' } }}>
          {details.username}
        </Link>
      </View>
      <View
        theme={{ base: { ai: 'Ai(c)', fld: '', m: 'Mstart(a)' } }}
        MetaData
      >
        <Icon name='translate'
          theme={{
            base: {
              c: 'C(muted)',
              m: 'Mend(rq) Mstart(rh)'
            }
          }}
        />
        {details.wordsTranslated}
      </View>
    </View>
  )
}

export default UserTeaser
