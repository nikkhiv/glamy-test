import axios from 'axios'

const state = { status: '', user: {} }

const getters = {
  profileLoaded: state => !!state.user.first_name,
}

const actions = {
  getUserData ({commit, dispatch}) {
    commit('setLoadingStatus')
    axios({
      method: 'GET',
      url: 'http://nikitafrontend.site/api/user.json'
    })
    .then((response) => {
      commit('setSuccessStatus', response.data.user)
    })
    .catch(function (error) {
      commit('setErrorStatus', error)
      dispatch('removeUserData')
    })
  },
}

const mutations = {
  setLoadingStatus (state) {
    state.status = 'loading'
  },
  setSuccessStatus (state, data) {
    state.status = 'success'
    state.user = data
  },
  setErrorStatus (state, error) {
    state.status = `error: ${error}`
  },
  removeUserData (state) {
    state.user = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
