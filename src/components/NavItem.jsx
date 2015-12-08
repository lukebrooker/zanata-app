import React from 'react' // eslint-disable-line
import Link from './Link'
import NavIcon from './NavIcon'

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
  const search = (link === './search')
  const classes = {
    bd: '',
    bgc: active ? 'Bgc(white)' : '',
    c: active ? 'C(pri)' : 'C(light)',
    d: small ? 'D(f)' : 'D(n) D(f)--sm',
    fld: 'Fld(c)',
    ai: 'Ai(c)',
    flxg: 'Flxg(1) Flxg(0)--sm',
    fz: 'Fz(msn2)',
    m: search && 'My(rh)',
    p: 'P(rq) Px(rq)--sm Py(rh)--sm',
    ta: 'Ta(c)',
    hover: {
      c: 'C(white):h',
      bd: '',
      bgc: 'Bgc(#fff.2):h'
    }
  }
  const text = logo ? (<span className='Hidden'>{title}</span>) : title
  return (
    <Link {...props} link={link} theme={classes}>
      <NavIcon name={icon} size={logo ? '6' : '1'} />
      {text}
    </Link>
  )
}

export default NavItem
