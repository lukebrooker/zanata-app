import React from 'react' // eslint-disable-line
import { mergeClasses } from '../utils'
import View from '../components/View'

const ScrollView = ({
  children,
  theme,
  ...props
}) => {
  const classes = {
    base: {
      flxs: '',
      ov: 'Ov(a)',
      ovh: 'Ovx(h)',
      ovs: 'Ovs(touch)'
    }
  }
  return (
    <View theme={mergeClasses(classes, theme)}>
      <View theme={{
        base: {
          p: 'Py(r1) Px(rh) Px(r1)--sm',
          w: 'W(100%)'
        }
      }}>
        {children}
      </View>
    </View>
  )
}

export default ScrollView
