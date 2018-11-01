<template>
  <div id="app">
    <the-menu/>
    <div class="main-container">
      <base-row-flex>
        <router-view/>
      </base-row-flex>
    </div>
  </div>
</template>

<script>
import TheMenu from 'components/TheMenu'
import BaseRowFlex from 'components/BaseRowFlex'

export default {
  components: {
    TheMenu,
    BaseRowFlex
  },
  name: 'app',
  created: function () {
    if (this.$store.getters.authorized) {
      this.$store.dispatch('setAuthorizationHeader').then(() =>
      this.$store.dispatch('getUserData'))
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #2e426b;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  h1 {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 20px;
    font-weight: 700;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }
  .router-link-exact-active.router-link-active {
    cursor: default;
  }
</style>

<style scoped>
  .main-container {
    min-height: 100vh;
  }
</style>
