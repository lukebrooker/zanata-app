import React from 'react' // eslint-disable-line
import { mergeClasses } from '../utils'

const Heading = ({
  children,
  level,
  theme,
  ...props
}) => {
  const classes = {
    c: 'C(dark)',
    m: 'M(0)',
    fz: 'Fz(ms0)',
    fw: 'Fw(i)',
    lh: 'Lh(1)'
  }
  const headingClasses = mergeClasses(classes, theme)
  return (<h1 {...props} className={headingClasses} >
    {children}
  </h1>)
}

export default Heading
