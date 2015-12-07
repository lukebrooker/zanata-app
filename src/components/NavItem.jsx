import React from 'react' // eslint-disable-line
import Link from './Link'
import NavIcon from './NavIcon'

const classes = {
  root: {
    bd: '',
    c: 'C(light)',
    d: 'D(f)',
    fld: 'Fld(c)',
    ai: 'Ai(c)',
    flxg: 'Flxg(1) Flxg(0)--sm',
    fz: 'Fz(msn2)',
    p: 'P(rq) P(rh)--sm',
    ta: 'Ta(c)',
    hover: {
      c: 'C(white):h',
      bd: '',
      bgc: 'Bgc(#fff.2):h'
    }
  }
}

const NavItem = ({
  link,
  icon,
  access,
  title,
  ...props
}) => (
  <Link
    {...props}
    link={link}
    theme={classes}
  >
    <NavIcon name={icon} />
    {title}
  </Link>
)

export default NavItem
