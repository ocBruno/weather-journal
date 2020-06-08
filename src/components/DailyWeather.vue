<template>
<main>
  <header aria-label="current-location">
    <section v-if="date" class="date-wrapper">
      {{ date.weekday }},
      {{ date.month }}
      {{ date.day }},
      {{ date.year }}
  </section>
  </header>
  <section class="daily-weather" aria-label="daily-weather">
      <div class="current-forecast" aria-label="current-forecast">
        {{weatherDescriptionFormatted}}
      </div>
      <div v-if="isCelsius" aria-label="celsius-temperature">{{dailyTemperatureCelsFormatted}}</div>
      <div v-if="!isCelsius" aria-label="fahrenheit-temperature">{{dailyTemperatureFahr}}</div>
  </section>
</main>
</template>

<script>

export default {
  name: "DailyWeather",
  props: {
    weatherDescription: String,
    dailyTemperatureCels: Number,
    dailyTemperatureFahr: Number
  },
  data() {
    return {
      isCelsius: true
    };
  },
  computed: {
    weatherDescriptionFormatted() {
      return this.weatherDescription.charAt(0).toUpperCase() + this.weatherDescription.slice(1)
    },
    dailyTemperatureCelsFormatted() {
      return this.dailyTemperatureCels.toString().slice(0,4);
    }
  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.daily-weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-weight: 400;
  .current-forecast {
    font-weight: 500;
    margin-bottom: 0.66em;
  }
}
</style>
