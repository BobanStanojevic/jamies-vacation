import { MutationTree } from 'vuex'
import { TYPES } from './mutation-types'

const mutations: MutationTree<any> = {
  [TYPES.SET_FORECAST_FOR_CITIES](state: any, forecast): void {
    state.citiesForecast = forecast
  },
}

export default mutations
