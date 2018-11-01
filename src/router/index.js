import Vue from 'vue'
import Router from 'vue-router'
import TheMain from 'components/TheMain'
import TheLogin from 'components/TheLogin'
import TheInfo from 'components/TheInfo'
import store from '../store'

Vue.use(Router)

const checkNotAuthorized = (to, from, next) => {
  if (!store.getters.authorized) {
    next()
    return
  }
  next('/')
}

const checkAuthorized = (to, from, next) => {
  if (store.getters.authorized) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TheMain',
      component: TheMain,
      beforeEnter: checkAuthorized
    },
    {
      path: '/login',
      name: 'TheLogin',
      component: TheLogin,
      beforeEnter: checkNotAuthorized
    },
    {
      path: '/info',
      name: 'TheInfo',
      component: TheInfo
    }
  ],
})
