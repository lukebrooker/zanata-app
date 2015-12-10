import React, { PropTypes } from 'react' // eslint-disable-line
import { flattenClasses } from '../utils'

const View = ({
  items,
  children,
  theme,
  ...props
}) => {
  const classes = {
    base: {
      ai: 'Ai(st)',
      d: 'D(f)',
      fld: 'Fld(c)',
      flxs: 'Flxs(0)'
    }
  }
  return (
    <div
      className={flattenClasses(classes, theme)}
      {...props}
    >
      { children }
    </div>
  )
}

export default View
