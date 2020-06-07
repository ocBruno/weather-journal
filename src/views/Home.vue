<template>
  <div class="home">
    <WeatherHeader/>

    <WeatherFooter/>
  </div>
</template>

<script>
import WeatherHeader from '@/components/WeatherHeader.vue'
import WeatherFooter from '@/components/WeatherFooter.vue'

export default {
  name: 'Home',
  components: {
    WeatherHeader,
    WeatherFooter
  }
}
</script>
