<template>
  <div class="home">
    <main>
      <transition-group name="fade">
        <img key="logo" src="../assets/sun-logo.png" alt />
        <h1 v-if="!this.$store.isGeoApproved" key="header">
          Create your own weather journal!
        </h1>
        <button
          v-if="!this.$store.isGeoApproved"
          key="continue-button"
          @click="returnLocationDetails"
        >
          Activate geolocation
        </button>
      </transition-group>
    </main>
  </div>
</template>

<script>
import { formatDate } from "../utils/formatting/formatDate";
import axios from "axios";

export default {
  name: "Entry",
  created() {
    let date = new Date();
    this.date = formatDate(date);
  },
  methods: {
    async returnLocationDetails() {
      // has support geolocation?
      if (!("geolocation" in navigator)) {
        this.errorStr = "Geolocation is not available.";
        return;
      }
      let lng, lat;
      // get position
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.$store.approveGeoLocation();
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
          this.$store.approveGeoLocation();
          this.errorStr = err.message;
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>

main {
  //<transition-group> renders as <span>
  h1 {
    color: rgb(35, 133, 172);
  } 
  > span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
  }
  button {
    font-family: 'Fira Sans';
    font-weight: 400;
    margin: 2em auto;
    padding: 1em;
    color: rgb(35, 133, 172);
    box-shadow: 0px 0.33em 1em rgba(35, 133, 172, 0.33);
    border-top: 1px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgba(35, 133, 172, 0.33);
    border-radius: 0.66em;
    transition: all 300ms ease-in;
  }
}
</style>
