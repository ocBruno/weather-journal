<template>
  <div id="app">
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
.small-sun-logo {
  width: 12em;
}
</style>
<script>
// @ is an alias to /src
import { formatDate } from "./utils/formatting/formatDate";

export default {
  name: 'App',
  created() {
    let date = new Date();
    date = formatDate(date); 
    this.$store.commit('initiateDate', date);
  }
}
</script>
