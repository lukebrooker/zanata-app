import React from 'react' // eslint-disable-line
import Link from './Link'
import NavIcon from './NavIcon'
import { mergeClasses } from '../utils'

const NavItem = ({
  link,
  small,
  icon,
  active,
  section,
  title,
  ...props
}) => {
  const logo = (section === 'logo')
  const search = (link === 'search')
  const classes = {
    base: {
      bd: '',
      bgc: '',
      c: 'C(light)',
      d: 'D(n) D(f)--sm',
      fld: 'Fld(c)',
      ai: 'Ai(c)',
      flxg: 'Flxg(1) Flxg(0)--sm',
      fz: 'Fz(msn2)',
      p: 'P(rq) Px(rq)--sm Py(rh)--sm',
      ta: 'Ta(c)',
      trs: 'Trs(aeo)',
      hover: {
        c: 'C(white):h',
        bd: '',
        bgc: 'Bgc(#fff.2):h'
      }
    },
    active: {
      bgc: 'Bgc(white)',
      bxsh: 'Bxsh(sh1)',
      c: 'C(pri)',
      cur: 'Cur(d)',
      hover: {
        c: '',
        bgc: ''
      }
    },
    small: {
      d: 'D(f)'
    },
    search: {
      m: 'My(rh)'
    }
  }
  const themeClasses = {
    base: mergeClasses(
      classes.base,
      active && !logo ? classes.active : {},
      small ? classes.small : {},
      search ? classes.search : {},
    )
  }
  const text = logo ? (<span className='Hidden'>{title}</span>) : title
  return (
    <Link {...props} link={link} theme={themeClasses}>
      <NavIcon name={icon} size={logo ? '6' : '1'} />
      {text}
    </Link>
  )
}

export default NavItem
