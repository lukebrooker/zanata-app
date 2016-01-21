import { Schema, arrayOf, normalize } from 'normalizr'
import fetch from 'isomorphic-fetch'

const API_ROOT = 'http://localhost:8080/zanata/rest/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested
// it was.
function callApi (endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1)
    ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    })
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return normalize(json, schema)
    })
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

const projectSchema = new Schema('project')
const languageTeamSchema = new Schema('languageTeam')
const personSchema = new Schema('person')
// const searchResultsSchema = new Schema('searchResults')

const searchTypes = {
  Project: projectSchema,
  LanguageTeam: languageTeamSchema,
  Person: personSchema
}

// Schemas for Github API responses.
export const Schemas = {
  PROJECT: projectSchema,
  PROJECT_ARRAY: arrayOf(projectSchema),
  LANGUAGE_TEAM: languageTeamSchema,
  LANGUAGE_TEAM_ARRAY: arrayOf(languageTeamSchema),
  PEOPLE: personSchema,
  PEOPLE_ARRAY: arrayOf(personSchema),
  SEARCH_RESULTS: arrayOf(searchTypes, { schemaAttribute: 'type' })
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith (data) {
    const finalAction = {
      ...action,
      ...data
    }
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint, schema).then(
    response => next(actionWith({
      payload: response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      payload: error,
      error: true
    }))
  )
}
