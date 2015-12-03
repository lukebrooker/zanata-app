import React, { PropTypes } from 'react' // eslint-disable-line
import cx from 'classnames'

const View = ({
  items,
  children,
  className,
  ...props
}) => (
  <div
    className={
      cx(
        'D(f)',
        'Ai(st)',
        'Fld(c)',
        'Flxs(0)',
        className
      )
    }
    {...props}
  >
    { children }
  </div>
)

export default View
