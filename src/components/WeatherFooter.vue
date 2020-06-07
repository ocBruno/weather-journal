<template>
  <footer class="weather-header" aria-label="Weather-footer">
    <router-link to="/attributions">Attributions</router-link>
  </footer>
</template>

<script>
export default {
  name: 'WeatherHeader',
  props: {
    msg: String
  },
  components: {
  },
  data() {
    return {
    }
  },
 created() {
  },
  mounted() {

    },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  display: flex;
  justify-content: center;
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
}
</style>
