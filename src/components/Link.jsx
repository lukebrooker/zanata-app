import React from 'react' // eslint-disable-line
import { mergeClasses } from '../utils'

const classes = {
  root: {
    bd: 'Bdb(bd2) Bdbc(t)',
    bgc: 'Bgc(i)',
    c: 'C(pri)',
    cur: 'Cur(p)',
    fz: 'Fz(i)',
    td: 'Td(n)',
    hover: {
      bd: 'Bdbc(pri):h'
    }
  }
}

const Link = ({
  children,
  theme,
  link,
  ...props
}) => (
  <a
    href={link}
    {...props}
    className={mergeClasses(classes, theme)}
  >
    {children}
  </a>
)

export default Link
