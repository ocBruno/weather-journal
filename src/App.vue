<template>
  <div id="app">
    <WeatherHeader/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/attributions">Attributions</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import WeatherHeader from '@/components/WeatherHeader.vue'

export default {
  name: 'Home',
  components: {
    WeatherHeader
  }
}
</script>
