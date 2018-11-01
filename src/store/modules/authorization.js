import axios from 'axios'

const state = { token: localStorage.getItem('api_token') || '', status: '', hasLoadedOnce: false }

const getters = {
  authorized: state => !!state.token,
  authStatus: state => state.status,
}

const actions = {
  login ({commit, dispatch}, user) {
    return new Promise((resolve, reject) => {
      commit('setLoadingStatus')
      axios({
        method: 'POST',
        url: 'http://nikitafrontend.site/api/auth.json',
        data: user
      })
      .then(response => {
        const token = response.data.token
        localStorage.setItem('api_token', token)
        commit('setSuccessStatus', token)
        commit('setAuthorizationHeader')
        dispatch('getUserData', token)
        resolve(response)
      })
      .catch(error => {
        commit('setErrorStatus', error)
        localStorage.removeItem('api_token')
        reject(error)
      })
    })
  },
  setAuthorizationHeader ({commit}) {
    return new Promise((resolve, reject) => {
      commit('setAuthorizationHeader')
      resolve()
    })
  },
  logout ({commit, dispatch}) {
    return new Promise((resolve, reject) => {
      commit('removeToken')
      commit('removeAuthorizationHeader')
      localStorage.removeItem('api_token')
      resolve()
    })
  }
}

const mutations = {
  setAuthorizationHeader (state) {
    axios.defaults.headers.common['Authorization'] = state.token
  },
  removeAuthorizationHeader (state) {
    axios.defaults.headers.common['Authorization'] = null
  },
  setLoadingStatus (state) {
    state.status = 'loading'
  },
  setSuccessStatus (state, token) {
    state.status = 'success'
    state.token = token
    state.hasLoadedOnce = true
  },
  setErrorStatus (state, error) {
    state.status = `error: ${error}`
    state.hasLoadedOnce = true
  },
  removeToken (state) {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
