import React from 'react' // eslint-disable-line
import { mergeClasses } from '../utils'
import View from '../components/View'

const Page = ({
  children,
  theme,
  ...props
}) => {
  const classes = {
    base: {
      flxs: '',
      flx: 'Flx(flx1)',
      ov: 'Ov(h)'
    }
  }
  return (
    <View theme={mergeClasses(classes, theme)} {...props}>
      {children}
    </View>
  )
}

export default Page
