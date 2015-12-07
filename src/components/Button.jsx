import React from 'react' // eslint-disable-line
import { mergeClasses } from '../utils'

const classes = {
  root: {
    fz: 'Fz(i)',
    bgc: 'Bgc(i)',
    cur: 'Cur(p)',
    bd: 'Bd(0)',
    p: 'P(0)'
  }
}

const Button = ({ children, theme, ...props }) => (
  <button
    {...props}
    className={mergeClasses(classes, theme)}
  >
    {children}
  </button>
)

export default Button
