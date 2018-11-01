<template>
  <div>
    <base-loading v-if="loading"/>
    <div v-if="authorized && profileLoaded" class="container_user">
      <img src="../assets/bigpic.jpg">
      <div class="info_user">
        <p>{{user.first_name}}</p>
        <p>{{user.last_name}}</p>
        <p>{{user.middle_name}}</p>
        <p>{{user.birth_date}}</p>
        <p>{{user.phone}}</p>
        <p>{{user.email}}</p>
        <p class="text text_black">{{ user.text }} <a :href="user.link" class="link" target="_blank">{{ user.link }}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import BaseLoading from 'components/BaseLoading'

  export default {
    components: {
      BaseLoading
    },
    name: 'TheMain',
    computed: {
      ...mapGetters(['authorized', 'authStatus', 'profileLoaded']),
      ...mapState({user: state => state.user.user}),
      loading: function () {
        return this.authStatus === 'loading' && !this.authorized && !this.profileLoaded
      }
    }
  }
</script>

<style scoped lang="scss">
  .link {
    color: #2a5885;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .text {
    font-size: 13px;
  }
  .text_black {
    color: #000;
  }
  .container_user {
    display: flex;
    margin-top: 20px;
    img {
      width: 300px;
      height: 300px;
      margin-right: 20px;
    }
  }
  .info_user {
    font-size: 13px;
    width: 300px;
  }
</style>