import { UPDATE_PATH } from 'redux-simple-router'

export function pathUpdate (state = [], action) {
  switch (action.type) {
    case UPDATE_PATH:
      console.log('New path:', state)
      return state
    default:
      return state
  }
}
