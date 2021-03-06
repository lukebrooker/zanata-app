import React from 'react' // eslint-disable-line
import { flattenClasses } from '../utils'

const classes = {
  base: {
    ai: 'Ai(c)',
    ap: 'Ap(n)',
    bd: 'Bd(0)',
    bgc: 'Bgc(i)',
    cur: 'Cur(p)',
    d: 'D(if)',
    ff: 'Ff(i)',
    fz: 'Fz(i)',
    p: 'P(0)'
  }
}

const Button = ({ children, theme, ...props }) => (
  <button
    {...props}
    className={flattenClasses(classes, theme)}
  >
    {children}
  </button>
)

export default Button
