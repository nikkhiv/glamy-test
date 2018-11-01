<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Вход</h1>
      <label class="login__label">Логин</label>
      <input required v-model="username" class="login__input" type="text" minlength="3" placeholder="Введите имя"/>
      <label class="login__label">Пароль</label>
      <input required v-model="password" class="login__input" type="password" minlength="6" placeholder="Введите пароль"/>
      <button type="submit" class="login__submit">Войти</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'TheLogin',
    data () {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login: function () {
        const { username, password } = this
        this.$store.dispatch('login', { username, password }).then(() => {
          this.$router.push('/')
        })
      }
    },
  }
</script>

<style scoped lang="scss">
  .login {
    display: flex;
    flex-direction: column;
    width: 150px;
  }
  .login__submit {
    padding: 7px 16px 8px;
    margin: 0;
    font-size: 12.5px;
    display: block;
    cursor: pointer;
    white-space: nowrap;
    outline: none;
    vertical-align: top;
    line-height: 15px;
    text-align: center;
    text-decoration: none;
    background: none;
    background-color: #5181b8;
    color: #fff;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    &:hover {
      background-color: #5b88bd;
      text-decoration: none;
    }
    &:active {
      background-color: #4872a3;
      padding-top: 8px;
      padding-bottom: 7px;
    }
  }
  .login__input {
    height: 30px;
    border: 1px solid #d3d9de;
    background: #fff;
    -webkit-appearance: none;
    padding: 5px 9px 7px;
    border-radius: 2px;
    box-sizing: border-box;
    margin-bottom: 13px;
  }
  .login__label {
    padding: 0 0 8px;
    color: #656565;
    font-size: 12.5px;
    font-weight: 500;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }
</style>