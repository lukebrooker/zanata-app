// import * as ActionTypes from '../actions'
// import merge from 'lodash/object/merge'
import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import pathUpdate from './pathUpdate'

const rootReducer = combineReducers(Object.assign({},
  pathUpdate,
  {
    routing: routeReducer
  }
))

export default rootReducer
