import apiFactory from '@/factories/api'
import { ICitySearchResponseItem } from './interfaces'

export default async function citySearch(
  searchedTerm: string,
  iso: string
): Promise<string> {
  return apiFactory(
    (responseData: any) => {
      const selectedCity = responseData.find(
        ({ Country }: any) => Country.ID === iso
      )

      return selectedCity.Key
    },
    {
      method: 'GET',
      path: 'https://dataservice.accuweather.com/locations/v1/cities/search',
      includeCredentials: true,
      queryParameters: {
        q: searchedTerm,
      },
    }
  )
}
