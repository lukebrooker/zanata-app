import FakeData from './index'

const fakeData = new FakeData(50)
const listData = fakeData.getItems()

export const defaultData = fakeData.getItems(5)

function filterList (filterText) {
  const lowerText = filterText.toLowerCase()
  return listData.map(list => {
    return {
      ...list,
      items: list.items.filter(item => {
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
}

export function filteredList (filterText) {
  return filterList(filterText).filter(results => results.items.length !== 0)
}
