import React from 'react'
import Icon from './Icon'

const classes = {
  base: {
    d: 'D(b)'
  }
}

const NavIcon = ({
  icon,
  size,
  ...props
}) => (
  <Icon
    name={icon}
    size={size}
    theme={classes}
    {...props}
  />
)

export default NavIcon
