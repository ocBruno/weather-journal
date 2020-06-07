<template>
  <header aria-label="current-location">
    <transition name="fade">
      <img src="../assets/sun-logo.png" alt />
    </transition>

    <section>
      {{ locationDetails.country }}
      {{ locationDetails.state }}
      {{ locationDetails.city }}
    </section>
    <section>
      {{ date.weekday }},
      {{ date.month }}
      {{ date.day }},
      {{ date.year }}
    </section>
  </header>
</template>

<script>
import KEY from "../utils/api/opencage/key.json";
import { formatDate } from "../utils/formatting/formatDate";

export default {
  name: "WeatherHeader",
  props: {
    msg: String,
  },
  data() {
    return {
      OPEN_CAGE_KEY: KEY.OPEN_CAGE_KEY,
      gettingLocation: true,
      errorStr: "",
      locationDetails: {},
      date: undefined,
    };
  },
  created() {
    let date = new Date();
    this.date = formatDate(date);
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.99em;
}
h1 {
  font-size: 2em;
  margin-top: 0.33em;
  margin-bottom: 0.66em;
}
button {
  font-size: 1.33em;

}
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.active-geolocation-header {
  margin-left: auto;
  margin-right: auto;
}
</style>
