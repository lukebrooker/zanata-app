import { createAction } from 'redux-actions'
import { filter } from 'lodash'
import FakeData from '../fakeData'

const fakeData = new FakeData(50)
const listData = fakeData.getItems()
const defaultData = listData.map(list => {
  return {
    ...list,
    items: list.items.slice(0, 5)
  }
})

export const SEARCH_TEXT_CHANGED = 'SEARCH_TEXT_CHANGED'
export const newSearchText = createAction(SEARCH_TEXT_CHANGED)

export const SEARCH_RESULTS_RETURNED = 'SEARCH_RESULTS_RETURNED'
export const searchResultsReturned = createAction(SEARCH_RESULTS_RETURNED)

export const SEARCH_DEFAULT_RETURNED = 'SEARCH_DEFAULT_RETURNED'
export const searchDefaultReturned = createAction(SEARCH_DEFAULT_RETURNED)

export const searchPageLoaded = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(searchDefaultReturned(defaultData))
    }, 500)
  }
}

export const searchTextChanged = (text) => {
  return (dispatch) => {
    dispatch(newSearchText(text))
    // TODO: Do an actual API call here to get data
    if (text) {
      setTimeout(() => {
        const filteredList = listData.map(list => {
          return {
            ...list,
            items: filter(list.items, item => {
              const lowerText = text.toLowerCase()
              if (item.title || item.description) {
                return item.title.toLowerCase().indexOf(lowerText) !== -1 ||
                  item.description.toLowerCase().indexOf(lowerText) !== -1
              }
              if (item.locale || item.localeCode) {
                return item.locale.toLowerCase().indexOf(lowerText) !== -1 ||
                  item.localeCode.toLowerCase().indexOf(lowerText) !== -1
              }
              if (item.username) {
                return item.username.toLowerCase().indexOf(lowerText) !== -1
              }
              return false
            })
          }
        })
        dispatch(searchResultsReturned(filteredList))
      }, 500)
    } else {
      setTimeout(() => {
        dispatch(searchDefaultReturned(defaultData))
      }, 500)
    }
  }
}
