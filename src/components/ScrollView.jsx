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
          p: 'P(rh) P(r1)--sm'
        }
      }}>
        {children}
      </View>
    </View>
  )
}

export default ScrollView
