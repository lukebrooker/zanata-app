import values from 'lodash.values'
import merge from 'lodash.merge'
import flattenObj from 'flat'

export const mergeClasses = (classes, theme = {}) => {
  return values(flattenObj(merge(classes, theme))).join(' ')
}
