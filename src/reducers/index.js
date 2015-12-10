// import * as ActionTypes from '../actions'
// import merge from 'lodash/object/merge'
import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routeReducer
}))

export default rootReducer
