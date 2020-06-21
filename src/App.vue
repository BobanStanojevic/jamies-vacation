<template>
  <div id="app">
    <ui-header />
    <overlay v-if="!citiesForecast[0]">
      <loader />
    </overlay>
    <main class="container" v-else>
      <div class="row">
        <div class="col-12">
          <destinations :citiesForecast="citiesForecast" />
        </div>
      </div>
    </main>
    <ui-footer />
  </div>
</template>
<script>
import { Loader, Overlay } from '@/components/atoms/'
import { UiHeader, UiFooter } from '@/components/organisms/'
import { Destinations } from '@/components/molecules'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    UiHeader,
    UiFooter,
    Destinations,
    Loader,
    Overlay,
  },

  mounted() {
    this.getFavoriteCitiesWeatherForcast()
  },
  computed: {
    ...mapGetters(['citiesForecast']),
  },
  methods: {
    ...mapActions(['getFavoriteCitiesWeatherForcast']),
  },
}
</script>