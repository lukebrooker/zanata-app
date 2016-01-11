import { handleActions } from 'redux-actions'
import {
  SEARCH_RESULTS_RETURNED,
  SEARCH_TEXT_CHANGED,
  SEARCH_DEFAULT_RETURNED
} from '../actions'

export default handleActions({
  [SEARCH_TEXT_CHANGED]: (state, action) => ({
    ...state,
    text: action.payload
  }),
  [SEARCH_RESULTS_RETURNED]: (state, action) => ({
    ...state,
    results: action.payload
  }),
  [SEARCH_DEFAULT_RETURNED]: (state, action) => ({
    ...state,
    default: action.payload
  })
}, {})
