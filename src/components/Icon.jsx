import React, { Component, PropTypes } from 'react'
import merge from 'lodash.merge'
import { mergeClasses } from '../utils'

let classes = {
  d: 'D(ib)',
  pos: 'Pos(r)'
}

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    theme: PropTypes.object
  }
  _sizeClasses (size) {
    switch (size) {
      case 'n2': return { root: { w: 'W(msn2)', h: 'H(msn2)' } }
      case 'n1': return { root: { w: 'W(msn1)', h: 'H(msn1)' } }
      case '1': return { root: { w: 'W(ms1)', h: 'H(ms1)' } }
      case '2': return { root: { w: 'W(ms2)', h: 'H(ms2)' } }
      case '3': return { root: { w: 'W(ms3)', h: 'H(ms3)' } }
      case '4': return { root: { w: 'W(ms4)', h: 'H(ms4)' } }
      case '5': return { root: { w: 'W(ms5)', h: 'H(ms5)' } }
      case '6': return { root: { w: 'W(ms6)', h: 'H(ms6)' } }
      default: return { root: { w: 'W(ms0)', h: 'H(ms0)' } }
    }
  }
  render () {
    const {
      size,
      theme,
      name,
      ...props
    } = this.props
    const svgIcon = `<use xlink:href="#Icon-${name}" />`
    const newClasses = merge(classes, this._sizeClasses(size))
    return (
      <span {...props} className={mergeClasses(newClasses, theme)}>
        <svg
          dangerouslySetInnerHTML={{ __html: svgIcon }}
          className='Pos(a) StretchedBox Mah(100%) Maw(100%) Fill(cc)'
        />
      </span>
    )
  }
}
