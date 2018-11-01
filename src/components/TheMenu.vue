<template>
  <div class="menu">
    <base-row-flex>
      <router-link v-if="authorized && profileLoaded" to="/" class="menu__link_logo">
        <div class="menu__logo">
        </div>  
      </router-link>
      <div v-else class="menu__logo">
      </div>        
      <nav class="menu__nav">
        <li>
          <router-link to="/info">Информация</router-link>
        </li>
        <li v-if="authorized && profileLoaded">
          <router-link to="/">{{ first_name }}</router-link>
          <img class="menu__user" src="../assets/userpic.jpg" width="28" height="28">
        </li>
        <li v-if="authorized" @click="logout">
          <span class="logout">Выйти</span>
        </li>
        <li v-if="!authorized && !authLoading">
          <router-link to="/login">Вход</router-link>
        </li>
      </nav>
    </base-row-flex>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import BaseRowFlex from 'components/BaseRowFlex'

  export default {
    components: {
      BaseRowFlex
    },
    name: 'TheMenu',
    methods: {
      logout: function () {
        this.$store.dispatch('logout').then(() => this.$router.push('/login'))
      }
    },
    computed: {
      ...mapGetters(['authorized', 'profileLoaded']),
      ...mapState({
        authLoading: state => state.authorization.status === 'loading',
        first_name: state => state.user.user.first_name,
      })
    },
  }
</script>

<style lang="scss" scoped>
  @mixin link {
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      width: 100%;
      left: 0;
      bottom: -3px;
      background: #fff;
    }
  }
  .router-link-exact-active:not(.menu__link_logo) {
    position: relative;
    @include link;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  li > a {
    position: relative;
    &:hover {
      @include link;
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: #4a76a8;
    height: 42px;
  }
  .menu__link_logo {
    display: flex;
    align-items: center;
  }
  .menu__logo {
    background: url(../assets/logo.svg) no-repeat 50% / contain;
    height: 19px;
    width: 34px;
  }
  .menu__user {
    width: 28px;
    height: 28px;
    border-radius: 14px;
    margin-left: 20px;
    vertical-align: bottom;
  }
  .menu__nav {
    display: flex;
    align-items: center;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      margin-right: 20px;
      font-size: 15px;
      position: relative;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .logout {
    position: relative;
    &:hover {
      cursor: pointer;
      @include link;
    }
  }
</style>