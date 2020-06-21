<template>
  <section class="m-destinations">
    <h2 class="m-destinations__header"> Destinations</h2>
    <ul class="m-destinations__list row">
      <li
        v-for="(forecast, index) in citiesForecast"
        :key="index"
        class="m-destinations__list-item col-12 col-md-6 col-lg-4"
      >
        <destination v-bind="forecast" />
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
import Destination from '../Destination/index.vue'
export default {
  name: 'Destinations',
  props: {
    citiesForecast: {
      type: Array,
      required: true,
    },
  },
  components: {
    Destination,
  },
}
</script>
<style lang="scss">
.m-destinations {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__header {
    text-align: center;
    padding: $s-6;
    font-size: 40px;
  }
  &__list {
    padding-left: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
  }
}
</style>
