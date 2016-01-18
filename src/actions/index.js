import { createAction } from 'redux-actions'
import { defaultData, filteredList } from '../fakeData/example'

export const SEARCH_RESULTS_RETURNED = 'SEARCH_RESULTS_RETURNED'
export const searchResultsReturned = createAction(SEARCH_RESULTS_RETURNED)

export const SEARCH_DEFAULT_RETURNED = 'SEARCH_DEFAULT_RETURNED'
export const searchDefaultReturned = createAction(SEARCH_DEFAULT_RETURNED)

export const searchPageLoaded = () => {
  return (dispatch, getState) => {
    const { routing: { location: { query: { q: searchText } } } } = getState()
    if (searchText) {
      dispatch(searchResultsReturned(filteredList(searchText)))
    } else {
      dispatch(searchDefaultReturned(defaultData))
    }
  }
}

export const searchTextChanged = () => {
  return (dispatch, getState) => {
    const { routing: { location: { query: { q: searchText } } } } = getState()
    if (searchText) {
      dispatch(searchResultsReturned(filteredList(searchText)))
    } else {
      dispatch(searchDefaultReturned(defaultData))
    }
  }
}
