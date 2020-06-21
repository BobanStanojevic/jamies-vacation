<template>
  <section class="m-destination">
    <div
      class="m-destination__top"
      :style="`background-image: url(${image})`"
    />

    <div class="m-destination__bottom">
      <h3>{{ cityName }}</h3>
      <p class="m-destination__text">Forcast for next five days</p>
      <p class="m-destination__text">
        {{ cityName }} has {{ sunnyDays }}/5 sunny days with average temperature
        of
        {{ averageTemp }}
      </p>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: 'Destination',
  props: {
    image: {
      type: String,
      required: true,
    },
    cityName: {
      type: String,
      required: true,
    },
    averageTemp: {
      type: String,
      required: true,
    },
    sunnyDays: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss">
.m-destination {
  width: 100%;
  height: 100%;
  border: 2px solid $cyan;
  &__top {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 250px;
    position: relative;
  }

  &__bottom {
    padding: $s-6;
  }

  &__text {
    font-size: 15px;
  }
}
</style>