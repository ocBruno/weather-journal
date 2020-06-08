<template>
    <main>
        <header>
            <transition name="fade">
                <img src="../assets/sun-logo.png" class="small-sun-logo" alt />
            </transition>
        </header>
        <DailyWeather 
            :weatherDescription="weatherDescription"
            :dailyTemperatureCels="dailyTemperatureCels"
            :dailyTemperatureFahr="dailyTemperatureFahr"
            :date="date"
         />
        <WeatherFooter/>
    </main>
</template>
<script>
import axios from "axios";
import KEY from "../utils/api/opencage/key.json";

import WeatherFooter from '@/components/WeatherFooter'
import DailyWeather from '@/components/DailyWeather'

export default {
    name: "WeatherJournal",
    components: {
        WeatherFooter,
        DailyWeather
    },
    data() {
    return {
      OPEN_CAGE_KEY: KEY.OPEN_CAGE_KEY,
      gettingLocation: true,
      weatherDescription: '',
      dailyTemperatureCels: 0,
      dailyTemperatureFahr: 0
    }
  },
    methods: {
        async returnWeatherDetails() {
        // has support geolocation?

        let lng, lat;
        // get position if none are stored in store
        if(!this.$store.weatherDetails) {
            navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.$store.commit('approveGeoLocation');
                lat = pos.coords.latitude;
                lng = pos.coords.longitude;
                // send a location details retrieval GET request
                axios({
                method: "get",
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly&appid=${this.OPEN_CAGE_KEY}`
                }).then((res) => {
                //success location details fetch
                this.weatherDescription = res.data.current.weather[0].description;
                this.dailyTemperatureCels =  res.data.current.temp  - 273.15;
                this.dailyTemperatureFahr =  this.dailyTemperatureCels * 9/5 + 32;

                this.$store.commit('updateWeatherDetails', {weatherDescription: this.weatherDescription ,dailyTemperatureCels: this.dailyTemperatureCels,dailyTemperatureFahr: this.dailyTemperatureFahr });
                });
            },
            (err) => {
                console.log(err)

                this.$store.commit('approveGeoLocation');
                
                this.errorStr = err.message;

            }
            )
    } else {
        console.log("Already fetched location details")
    }
    }
    },
    computed: {
        date: function() {
          console.log(this.$store.state.date)
          return this.$store.state.date
        },
        weatherDetails: function() {
          return this.$store.state.weatherDetails
        },
    },
    async created() {
       this.returnWeatherDetails();
    }
}
</script>
<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.weather-header {
  margin-top: 0.33em;
  margin-bottom: 0.33em;
  font-weight: 500;
  color: rgb(35, 133, 172);
  font-size: 1.66em;
}
button {
  font-size: 1.33em;

}
.date-wrapper {
  margin-bottom: 0.66em;
  font-weight: 400;
  color: rgb(35, 133, 172);
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