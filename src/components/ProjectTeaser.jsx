import React from 'react' // eslint-disable-line
import Link from '../components/Link'
import View from '../components/View'
import Icon from '../components/Icon'
// import { flattenClasses } from '../utils'

const ProjectTeaser = ({
  details,
  children,
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
      {/* <View className='Mend(rh)'>
        TODO: Statistics Donut here
      </View> */}
      <View theme={{ base: { fld: 'Fld(c) Fld(r)--md', flx: 'Flx(flx1)' } }}>
        <View>
          <Link to={details.username + '/' + details.slug}
            theme={{ base: { fw: 'Fw(600)' } }}>
            {details.title}
          </Link>
          <div className='C(muted)'>
            {details.description}
          </div>
        </View>
        <View
          theme={{
            base: {
              ai: 'Ai(c)',
              fld: '',
              fz: 'Fz(msn1)',
              m: 'Mstart(a)--md'
            }
          }}>
          <Icon
            name='user'
            size='n1'
            theme={{ base: { c: 'C(muted)', m: 'Mend(rq)' } }}/>
          <Link to={details.username}>{details.username}</Link>
          <Icon
            name='users'
            size='n1'
            theme={{
              base: {
                c: 'C(muted)',
                m: 'Mend(rq) Mstart(rh)'
              }
            }}
          />
        <Link
          to={details.username + '/' + details.slug + '/people'}>
          {details.contributors}
        </Link>
        </View>
      </View>
    </View>
  )
}

export default ProjectTeaser
