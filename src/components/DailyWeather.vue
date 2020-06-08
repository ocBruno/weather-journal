<template>
  <main>
    <section class="daily-weather" aria-label="daily-weather">
      <div class="current-forecast" aria-label="current-forecast">
        <h2>{{ weatherDescriptionFormatted }}</h2>
        <img class="active-weather-icon" :src="activeIcon" />
      </div>
      <div
        v-if="isCelsius"
        class="celsius-temp"
        aria-label="celsius-temperature"
      >
        {{ dailyTemperatureCelsFormatted }}<span>C°</span>
      {{isDay}}

      </div>
      <div
        v-if="!isCelsius"
        class="fahrenheit-temp"
        aria-label="fahrenheit-temperature"
      >
        {{ dailyTemperatureFahr }}<span>F°</span>

      </div>
    </section>
  </main>
</template>

<script>
import * as icons from "../utils/api/openweather/icons";

export default {
  name: "DailyWeather",
  props: {
    weatherDescription: String,
    dailyTemperatureCels: Number,
    dailyTemperatureFahr: Number,
    weatherIcon: undefined,
    date: Object
  },
  data() {
    return {
      isCelsius: true,
      icons,
    };
  },
  computed: {
    weatherDescriptionFormatted() {
      return (
        this.weatherDescription.charAt(0).toUpperCase() +
        this.weatherDescription.slice(1)
      );
    },
    dailyTemperatureCelsFormatted() {
      return this.dailyTemperatureCels.toString().slice(0, 4);
    },
    activeIcon() {
      switch (this.weatherDescription) {
        case "broken clouds":
          return icons.BrokenClouds("d");
        case "moderate rain":
          return icons.Rain("n");
        default:
          return undefined;
      }
    },
    isDay() {
      return this.date.isDayTime;
    }
  },
  created() {},
  mounted() {},
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
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 1.66em;
      font-weight: 600;
      margin-bottom: 1em;
    }
  }
}
.active-weather-icon {
  background: rgb(84, 162, 197);
  box-shadow: 0 5px 9px rgb(155, 179, 189);
  border-radius: 3em;
  width: 6em;
  margin-bottom: 1em;
}
.celsius-temp,
.fahreint-temp {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border-radius: 3em;
  padding: 0.66em;
}
.celsius-temp > span,
.fahreint-temp > span {
  font-weight: 500;
  font-size: 0.90em;
  margin-left: 0.33em;
}
</style>
