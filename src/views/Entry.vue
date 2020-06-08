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
          @click="activateGeolocation"
        >
          <span>Activate geolocation</span>
        </button>
      </transition-group>
    </main>
  </div>
</template>

<script>

export default {
  name: "Entry",
  created() {

  },
  data() {
    return { errorStr: '' }
  },
  methods: {
    async activateGeolocation() {
      // has support geolocation?
      if (!("geolocation" in navigator)) {
        this.errorStr = "Geolocation is not available.";
        return;
      } else {
          this.$router.push('weather-journal');
      }
    },
  },
};
</script>
<style lang="scss" scoped>

main {
  //<transition-group> renders as <span>
    background-color: rgb(242, 252, 252);
  h1 {
    margin-top: 0.66em;
    margin-bottom: 0.69em;
    font-weight: 500;
    width: 30%;
    color: rgb(35, 133, 172);
    font-size: 1.66em;
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
    background-color: rgb(248, 252, 252);
    box-shadow: 0px 0.33em 1em rgba(35, 133, 172, 0.33);
    border-top: 1px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgba(35, 133, 172, 0.33);
    border-radius: 0.66em;
    transition: all 300ms ease-in;
    &:hover {
    color: rgb(15, 107, 143);
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0.33em 1em rgba(35, 133, 172, 0.45);
    border-bottom: 2px solid rgba(35, 133, 172, 0.45);

    }
    > span {
    }
  }
}
</style>
