import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import search from './search'

const rootReducer = combineReducers({
  routing: routeReducer,
  search
})

export default rootReducer
