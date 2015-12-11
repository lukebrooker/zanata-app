import values from 'lodash.values'
import merge from 'lodash.merge'
import flattenObj from 'flat'

export const mergeClasses = (base, ...otherClasses) => {
  return merge({}, base, ...otherClasses)
}

export const flattenClasses = (base, ...otherClasses) => {
  return values(flattenObj(mergeClasses(base, ...otherClasses))).join(' ')
}
