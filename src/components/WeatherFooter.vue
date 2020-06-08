<template>
  <footer aria-label="Weather-footer">
    <nav>
      <a href="https://github.com/ocBruno/weather-journal">Github</a>
      <router-link to="/attributions">Attributions</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'WeatherFooter',
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

  margin-top: auto;
  margin-bottom: 2em;
  font-size: 10px;
  width: 39em;
  margin-left: auto;
  margin-right: auto;
}
nav {
  display: flex;
  justify-content: space-between;
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
