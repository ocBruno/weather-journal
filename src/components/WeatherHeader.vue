<template>
  <header class="weather-header" aria-label="current-location">
    <transition name="fade">
      <img v-if="!gettingLocation" src="../assets/sun-logo.png" alt />
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
    <transition-group name="fade">
      <h1 v-if="gettingLocation" key="header">
        Create your own weather journal!
      </h1>
      <button
        v-if="gettingLocation"
        key="continue-button"
        class="active-geolocation-header"
        @click="returnLocationDetails"
      >
        Activate geolocation
      </button>
    </transition-group>
  </header>
</template>

<script>
import KEY from "../utils/api/opencage/key.json";
import axios from "axios";
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
  methods: {
    async returnLocationDetails() {
      // has support geolocation?
      if (!("geolocation" in navigator)) {
        this.errorStr = "Geolocation is not available.";
        return;
      }
      let lng, lat;
      this.gettingLocation = true;
      // get position
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.gettingLocation = false;
          lat = pos.coords.latitude;
          lng = pos.coords.longitude;
          // send a location details retrieval GET request
          axios({
            method: "get",
            // url: `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${this.OPEN_CAGE_KEY}`
          }).then((res) => {
            //success location details fetch
            console.log(lng, lat);
            this.locationDetails = res.data.results[0].components;
          });
        },
        (err) => {
          this.gettingLocation = false;
          this.errorStr = err.message;
        }
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weather-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
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
  margin-top: 120px;
}
</style>
