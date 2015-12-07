import React from 'react'
import Icon from './Icon'

const classes = {
  root: {
    d: 'D(b)'
  }
}

const NavIcon = ({
  icon,
  ...props
}) => (
  <Icon
    name={icon}
    size='1'
    theme={classes}
    {...props}
  />
)

export default NavIcon
