<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"

export default {
  name: "App",
  components: { 
    TheHeader
  }
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
