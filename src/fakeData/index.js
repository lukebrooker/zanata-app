import faker from 'faker'
import { capitalize, random } from 'lodash'

export class FakeList {
  constructor (/* number */ size) {
    this.size = size || 1000
    this._cache = []
  }

  createFakeData (/* number */ index) /* object */ {
    return {
      id: index
    }
  }

  getObjectAt (/* number */ index) /* ?object */ {
    if (index < 0 || index > this.size) {
      return undefined
    }
    if (this._cache[index] === undefined) {
      this._cache[index] = this.createFakeData(index)
    }
    return this._cache[index]
  }

  getItems (size) {
    size = size || this.size
    if (this._cache.length < size) {
      for (var i = 0; i < size; i++) {
        this.getObjectAt(i)
      }
    }
    return this._cache.slice()
  }

  getSize () {
    return this.size
  }
}

export class FakeProjectList extends FakeList {

  createFakeData (/* number */ index) /* object */ {
    const title = capitalize(faker.company.bs())
    return {
      id: index,
      title: title,
      slug: faker.helpers.slugify(title).toLowerCase(),
      description: faker.company.catchPhrase(),
      username: faker.internet.userName().toLowerCase(),
      contributors: random(3000)
    }
  }

}

export class FakeLaguageTeamsList extends FakeList {

  createFakeData (/* number */ index) /* object */ {
    return {
      id: index,
      locale: faker.address.country(),
      localeCode: faker.address.countryCode(),
      org: faker.helpers.slugify(faker.company.companyName().toLowerCase()),
      members: random(3000)
    }
  }

}

export class FakeTranslatorsList extends FakeList {

  createFakeData (/* number */ index) /* object */ {
    return {
      id: index,
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      wordsTranslated: random(1000, 20000)
    }
  }

}

export default class FakeData {
  constructor (/* number */ size) {
    this.size = size || 1000
    this._cache = []
  }
  getSize () {
    return this.size
  }
  getItems (size) {
    size = size || this.size
    if (!this._cache[0] || this._cache[0].items.length < size) {
      this._cache = [
        {
          title: 'Projects',
          type: 'projects',
          items: new FakeProjectList(size).getItems()
        },
        {
          title: 'Language Teams',
          type: 'languageTeams',
          items: new FakeLaguageTeamsList(size).getItems()
        },
        {
          title: 'Translators',
          type: 'translators',
          items: new FakeTranslatorsList(size).getItems()
        }
      ]
    }
    return this._cache
  }
}
