<template>
  <div id="app">
    <header-top></header-top>
    <navigation></navigation>
    <router-view></router-view>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
/*   */
import FooterBottom from "./components/shared/footer.vue";
import HeaderTop from "./components/shared/header-top.vue";
import Navigation from "./components/shared/navigation.vue";

export default {
  name: "app",
  components: {
    FooterBottom,
    HeaderTop,
    Navigation
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  // This defines what 1rem is
  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

  @include respond(tab-land) {
    // width < 1200?
    font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
  }

  @include respond(tab-port) {
    // width < 900?
    font-size: 50%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(phone) {
    font-size: 37.5%;
  }

  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12, 12/16
  }
}

body {
  position: relative;
  box-sizing: border-box;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $background-gradient;
}
</style>
