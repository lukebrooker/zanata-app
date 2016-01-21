import { createAction } from 'redux-actions'
import { CALL_API, Schemas } from '../middleware/api'
import { defaultData } from '../fakeData/example'

export const SEARCH_DEFAULT_RETURNED = 'SEARCH_DEFAULT_RETURNED'
export const searchDefaultReturned = createAction(SEARCH_DEFAULT_RETURNED)

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

export const fetchSearch = (searchText) => {
  return {
    [CALL_API]: {
      types: [ SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE ],
      endpoint: `search?q=${searchText}`,
      schema: Schemas.SEARCH_RESULTS
    }
  }
}

export const searchPageLoaded = () => {
  return (dispatch, getState) => {
    const searchText = getState().routing.location.query.q
    if (searchText) {
      dispatch(fetchSearch(searchText))
    } else {
      dispatch(searchDefaultReturned(defaultData))
    }
  }
}

export const searchTextChanged = () => {
  return (dispatch, getState) => {
    const searchText = getState().routing.location.query.q
    if (searchText) {
      dispatch(fetchSearch(searchText))
    } else {
      dispatch(searchDefaultReturned(defaultData))
    }
  }
}
