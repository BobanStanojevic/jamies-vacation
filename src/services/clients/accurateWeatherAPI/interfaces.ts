type TTUnit = 'C' | 'F'

interface ITemperature {
  Value: number
  Unit: TTUnit
  UnitType: number
}

interface IDTime {
  Icon: number
  IconPhrase: string
  HasPrecipitation: boolean
  PrecipitationType?: string
  PrecipitationIntensity?: string
}

export interface ICitySearchResponseItem {
  Key: string
  Country: {
    ID: string
    LocalizedName: string
    EnglishName: string
  }
}

export interface IForecastResponse {
  Headline: {
    EffectiveDate: string
    EffectiveEpochDate: number
    Severity: number
    Text: string
    Category: string
    EndDate: string
    EndEpochDate: number
    MobileLink: string
    Link: string
  }
  DailyForecasts: [
    {
      Date: string
      EpochDate: number
      Temperature: {
        Minimum: ITemperature
        Maximum: ITemperature
      }
      Day: IDTime
      Night: IDTime
      Sources: string[]
      MobileLink: string
      Link: string
    }
  ]
}
