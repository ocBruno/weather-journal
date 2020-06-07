<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Entry</router-link> |
      <router-link to="/attributions">Attributions</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../src/styles/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
<script>
// @ is an alias to /src

export default {
  name: 'Entry',

}
</script>
