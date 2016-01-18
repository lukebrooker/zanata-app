import { handleActions } from 'redux-actions'
import {
  SEARCH_RESULTS_RETURNED,
  SEARCH_DEFAULT_RETURNED
} from '../actions'

export default handleActions({
  [SEARCH_RESULTS_RETURNED]: (state, action) => ({
    ...state,
    results: action.payload
  }),
  [SEARCH_DEFAULT_RETURNED]: (state, action) => ({
    ...state,
    default: action.payload
  })
}, {})
