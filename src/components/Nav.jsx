import React from 'react'
import NavItem from './NavItem'
import { mergeClasses } from '../utils'

const classes = {
  root: {
    bgc: 'Bgc(pri)',
    d: 'D(f)',
    fld: 'Fld(c)--sm',
    or: 'Or(1) Or(0)--sm'
  }
}

const Nav = ({
  items,
  ...props
}) => (
  <nav
    {...props}
    className={mergeClasses(classes.root)}
  >
    {items.map((item, i) => (
      <NavItem key={i}
        link={item.link}
        icon={item.icon}
        access={item.access}
        title={item.title}
      />
    ))}
  </nav>
)

export default Nav
