import React from 'react' // eslint-disable-line
import { flattenClasses } from '../utils'
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
    base: {
      bxsh: 'Bxsh(sh1)',
      d: 'D(f)',
      ai: 'Ai(c)',
      p: 'Py(rq) Px(rh) P(r1)--sm'
    }
  }
  const logoLinkTheme = {
    base: {
      bd: '',
      d: 'D(n)--sm',
      lh: 'Lh(1)',
      m: 'Mend(rh)'
    }
  }
  const headingTheme = {
    base: {
      fz: 'Fz(ms1) Fz(ms2)--sm'
    }
  }
  const searchLinkTheme = {
    base: {
      bd: '',
      c: 'C(pri)',
      d: 'D(n)--sm',
      h: 'H(ms1)',
      m: 'Mstart(a)',
      w: 'W(ms1)',
      hover: {
        bd: ''
      }
    }
  }
  return (
    <header className={flattenClasses(classes, theme)}>
      <Link link='/' theme={logoLinkTheme}>
        <Icon name='zanata' size='3' />
      </Link>
      <Heading level='1' theme={headingTheme}>
        {title || 'Title'}
      </Heading>
      <Link link='search' theme={searchLinkTheme}>
        <span className='Hidden'>Search</span>
        <Icon name='search' size='1' />
      </Link>
    </header>
  )
}

export default Header
