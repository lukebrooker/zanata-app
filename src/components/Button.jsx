import React from 'react' // eslint-disable-line
import { mergeClasses } from '../utils'

const classes = {
  root: {
    ai: 'Ai(c)',
    bd: 'Bd(0)',
    bgc: 'Bgc(i)',
    cur: 'Cur(p)',
    d: 'D(if)',
    fz: 'Fz(i)',
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
