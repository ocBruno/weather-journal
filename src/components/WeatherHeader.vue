<template>
  <header class="weather-header" aria-label="current-location">
   <transition name="fade">
   <img v-if="!gettingLocation" src="../assets/sun-logo.png" alt=""/>

  </transition>
  <transition name="fade">
   <h1 v-if="gettingLocation" class="active-geolocation-header">Please active geolocation to continue</h1>
  </transition>
  </header>
</template>

<script>
import KEY from  '../utils/api/opencage/key.json';
// import axios from 'axios';

export default {
  name: 'WeatherHeader',
  props: {
    msg: String
  },
  data() {
    return {
      OPEN_CAGE_KEY: KEY.OPEN_CAGE_KEY,
      gettingLocation: true,
      errorStr: ''
    }
  },
 created() {
    this.returnLocationDetails();
  },
  mounted() {

    },
  methods: {
    async returnLocationDetails() {
      // has support geolocation?
      if(!("geolocation" in navigator)) {
        this.errorStr = 'Geolocation is not available.';
        return;
      }
      let lng,lat;
      this.gettingLocation = true;
      // get position
      navigator.geolocation.getCurrentPosition(pos => {
        this.gettingLocation = false;
        lat = pos.latitude;
        lng = pos.longitude;
        console.log(lat,lng, pos)
        // send a location details retrieval GET request
        // axios({
        //   method: 'get',
        //   url: `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${this.OPEN_CAGE_KEY}`
        // }).then((res)=>{
        //   //success location details fetch
        //   console.log(res.data.results[0]);
        // });
      }, err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  display: flex;
}
.fade-enter-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.active-geolocation-header {
margin-left: auto;
margin-right: auto;
margin-top: 120px;
}
</style>
