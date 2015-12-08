import React from 'react' // eslint-disable-line
import { mergeClasses } from '../utils'
import Heading from '../components/Heading'
import Link from '../components/Link'
import Icon from '../components/Icon'

const Header = ({
  children,
  theme,
  title,
  ...props
}) => {
  const classes = {
    bxsh: 'Bxsh(sh1)',
    d: 'D(f)',
    ai: 'Ai(c)',
    p: 'Py(rq) Px(rh) P(r1)--sm'
  }
  const headerClasses = mergeClasses(classes, theme)
  return (
    <header className={headerClasses}>
      <Link link='./' theme={{
        bd: '',
        d: 'D(n)--sm',
        lh: 'Lh(1)',
        m: 'Mend(rh)'
      }}>
        <Icon name='zanata' size='3' />
      </Link>
      <Heading level='1' theme={{ fz: 'Fz(ms1) Fz(ms2)--sm' }}>
        {title}
      </Heading>
      <Link
        link='./search'
        theme={{
          bd: '',
          c: 'C(pri)',
          d: 'D(n)--sm',
          h: 'H(ms1)',
          m: 'Mstart(a)',
          w: 'W(ms1)',
          hover: {
            bd: ''
          }
        }}
      >
        <span className='Hidden'>Search</span>
        <Icon name='search' size='1' />
      </Link>
    </header>
  )
}

export default Header
