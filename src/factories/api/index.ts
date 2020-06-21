import queryString from 'query-string'
import ApiRestStatus from './Error'
import { IApiSettings } from './interfaces'

export default async function apiCallSettings(
  func: any,
  apiSettings: IApiSettings
) {
  let url = apiSettings.path
  if (apiSettings.pathParameters) {
    url = Object.keys(apiSettings.pathParameters).reduce((reducedUrl, key) => {
      return reducedUrl.replace(
        '{' + key + '}',
        apiSettings.pathParameters[key]
      )
    }, url)
  }
  // apply parameters to url
  if (apiSettings.queryParameters || apiSettings.includeCredentials) {
    if (!apiSettings.queryParameters) {
      apiSettings.queryParameters = {}
    }

    apiSettings.queryParameters.apikey =
      process.env.VUE_APP_ACCURATE_WEATHER_API_KEY

    url += '?' + queryString.stringify(apiSettings.queryParameters)
  }

  const fetchConfig = {}
  let response

  try {
    response = await fetch(url, {
      method: apiSettings.method,
      ...fetchConfig,
    })
  } catch (err) {
    throw new ApiRestStatus(err.message)
  }

  if (!response.ok) {
    // there is a http status code from REST interface

    let apiMessage = ''
    let apiCode = 0

    try {
      const { message, code } = await response.json()

      apiMessage = message
      apiCode = code
    } catch (err) {
      // no message
      console.warn('no api message ', err.message)
    }

    throw new ApiRestStatus(
      response.statusText,
      response.status,
      apiMessage,
      apiCode
    )
  }

  try {
    if (response.headers.get('Content-Type')) {
      const responseData = await response.json()
      return func(responseData)
    } else {
      return func(response.text())
    }
  } catch (err) {
    throw new ApiRestStatus(err.message)
  }
}
