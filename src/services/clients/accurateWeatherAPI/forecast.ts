import apiFactory from '@/factories/api'
import { IForecastResponse } from './interfaces'
export default async function forecastFiveDays(
  locationKey: string
): Promise<IForecastResponse> {
  return apiFactory(
    (responseData: any) => {
      return responseData
    },
    {
      method: 'GET',
      path:
        'https://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey}',
      includeCredentials: true,
      pathParameters: {
        locationKey,
      },
      queryParameters: {
        locationKey,
      },
    }
  )
}
