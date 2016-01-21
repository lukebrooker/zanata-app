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
      id: faker.helpers.slugify(title).toLowerCase(),
      title: title,
      description: faker.company.catchPhrase(),
      owner: faker.internet.userName().toLowerCase(),
      contributorCount: random(3000)
    }
  }

}

export class FakeLaguageTeamsList extends FakeList {

  createFakeData (/* number */ index) /* object */ {
    return {
      id: faker.address.countryCode(),
      locale: faker.address.country(),
      org: faker.helpers.slugify(faker.company.companyName().toLowerCase()),
      memberCount: random(3000)
    }
  }

}

export class FakeTranslatorsList extends FakeList {

  createFakeData (/* number */ index) /* object */ {
    return {
      id: faker.internet.userName().toLowerCase(),
      description: faker.name.findName(),
      avatarUrl: faker.image.avatar(),
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
      this._cache = {
        project: new FakeProjectList(size).getItems(),
        languageTeam: new FakeLaguageTeamsList(size).getItems(),
        person: new FakeTranslatorsList(size).getItems()
      }
    }
    return this._cache
  }
}
