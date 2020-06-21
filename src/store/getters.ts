import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
  citiesForecast: ({ citiesForecast }): any => citiesForecast,
}

export default getters
