import React from 'react'
import NavItem from './NavItem'
import { flattenClasses } from '../utils'

const classes = {
  base: {
    bgc: 'Bgc(pri)',
    bxsh: 'Bxsh(ish1)',
    d: 'D(f)',
    fld: 'Fld(c)--sm',
    flxs: 'Flxs(0)',
    or: 'Or(1) Or(0)--sm',
    ov: 'Ov(h)'
  }
}

const Nav = ({
  items,
  active,
  ...props
}) => (
  <nav
    {...props}
    className={flattenClasses(classes)}
  >
    {Object.keys(items).map((section) => (
      (section === 'extra') ? null
      : items[section].map((item, itemId) => (
        <NavItem key={itemId}
          small={item.small}
          active={active === item.link}
          section={section}
          link={item.link}
          icon={item.icon}
          title={item.title}
        />
      ))
    ))}
  </nav>
)

export default Nav
