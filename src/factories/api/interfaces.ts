type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
export interface IApiSettings {
  path: string
  queryParameters: any
  includeCredentials?: boolean
  method: TMethod
  pathParameters?: any
}
