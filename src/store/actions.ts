import { ActionTree } from 'vuex'
import {
  citySearch,
  forecastFiveDays,
} from '@/services/clients/accurateWeatherAPI'
import favoriteCities from '@/enums/favorite-cities'
import TYPES from './mutation-types'
import converter from '@/services/converter'

const actions: ActionTree<any, any> = {
  async getFavoriteCitiesWeatherForcast({ dispatch }) {
    const getLocationKeys: any = async () =>
      Promise.all(
        favoriteCities.map(async ({ city, iso }) => citySearch(city, iso))
      )
    getLocationKeys()
      .then(async (keys: string[]) => {
        await Promise.all(keys.map(async key => forecastFiveDays(key))).then(
          forecast => {
            dispatch('formatTemparatures', forecast, { root: true })
          }
        )
      })
      .catch(({ message }): void =>
        console.log('Something went wrong', message)
      )
  },

  formatTemparatures({ commit }, forcasts): void {
    const niceWeatherWords = ['Sunny', 'Hot', 'Partly sunny', 'Mostly sunny']
    const citiesForcast = forcasts.reduce(
      (acc: any, forcast: any, index: number) => {
        const dailyForecast = forcast.DailyForecasts

        const cityInfo = {
          cityName: '',
          averageTemp: '',
          sunnyDays: '',
          image: '',
        }

        cityInfo.cityName = favoriteCities[index].city

        cityInfo.image = favoriteCities[index].image

        const average = dailyForecast.map((daily: any) => {
          const min = converter(daily.Temperature.Minimum.Value)
          const max = converter(daily.Temperature.Maximum.Value)
          return (min + max) / 2
        })

        cityInfo.averageTemp = (
          average.reduce((acc: number, temp: number) => acc + temp, 0) /
          average.length
        ).toFixed(2)

        const dailyWeather = dailyForecast.map(
          (daily: any) => daily.Day.IconPhrase
        )

        cityInfo.sunnyDays = dailyWeather.reduce(
          (acc: number, daily: string) => {
            if (niceWeatherWords.includes(daily)) {
              acc = acc + 1
            }
            return acc
          },
          0
        )

        acc.push(cityInfo)
        return acc
      },
      []
    )
    console.log(citiesForcast)
    commit(TYPES.SET_FORECAST_FOR_CITIES, citiesForcast)
  },
}

export default actions
