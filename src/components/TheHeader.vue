<template>
  <header>
    <router-link to="/">
      <img class="logo" src="../assets/nytimes.svg" />
    </router-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  max-width: 826px;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: $color-secondary;
  box-shadow: 0px 0px 10px $color-shadow;
  position: relative;
  border-radius: 0px 0px 12px 12px;
}
.logo {
  background-size: cover;
  background-position: center;
  display: block;
  width: 250px;
  height: 100px;
}
</style>
