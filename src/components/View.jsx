import React, { PropTypes } from 'react' // eslint-disable-line
import { mergeClasses } from '../utils'

const View = ({
  items,
  children,
  theme,
  ...props
}) => {
  const classes = {
    ai: 'Ai(st)',
    d: 'D(f)',
    fld: 'Fld(c)',
    flxs: 'Flxs(0)'
  }
  return (
    <div
      className={mergeClasses(classes, theme)}
      {...props}
    >
      { children }
    </div>
  )
}

export default View
