export interface ICityForecast {
    cityName: string,
    image: string,
    sunnyDays: number, 
    averageTem: string
}

export interface IStore {
  citiesForecast: ICityForecast[]
}