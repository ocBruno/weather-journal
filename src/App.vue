<template>
  <div :class="[{'isDayTime': isDayTime === true, 'isNightTime': isNightTime === true}]" id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../src/styles/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap');
/* GLOBAL CSS */
body {
  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  color:  rgb(35, 133, 172);
}
#app {
  height: 100vh;

}
.isNightTime {
  background:rgb(16, 16, 19);
}
.night-time-shadow {
  box-shadow: 0 5px 9px rgb(24, 50, 61);

}
.day-time-shadow {
  box-shadow: 0 5px 9px rgb(155, 179, 189);
  
}
.isDayTime {
  background:rgb(237, 237, 237);
}
.small-sun-logo {
  width: 12em;
}
</style>
<script>
// @ is an alias to /src
import { formatDate } from "./utils/formatting/formatDate";

export default {
  name: 'App',
  data() {
    return {
    }
  },
  created() {
    let date = new Date();
    date = formatDate(date); 
    this.$store.commit('initiateDate', date);
  },
  mounted() {

  },
  computed: {
    isDayTime() {
      console.log(this.$store.getters)
      return this.$store.getters.isDayTime;
    },
    isNightTime() {
      return this.$store.getters.isNightTime;
    }
  }
}
</script>
