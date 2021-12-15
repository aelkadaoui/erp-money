const config = {
  headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.nZ86hUWPdG43W6HVSGFy6DJnDVOZhx8a73LhQ3gIxY8' }
}

export const state = () => ({
  users: [],
  user: []
})

export const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  setUser (state, user) {
    state.user = user
  }
}

export const actions = {
  async getUsers ({ commit }) {
    const users = await this.$axios.$get('https://cnamus-student-back.herokuapp.com/api/v1/student/GetAll', config)
    commit('setUsers', users)
  },
  async getUser ({ commit }, id) {
    const user = await this.$axios.$get(`https://cnamus-student-back.herokuapp.com/api/v1/student/Get/${id}`, config)
    commit('setUser', user)
  },
  updateBalanceUser ({ commit }, payload) {
    return this.$axios.$put(`https://cnamus-student-back.herokuapp.com/api/v1/money/Add/${payload.id}/${payload.solde}`, config)
  }
}

export const getters = {
  users (state) {
    return state.users
  },
  user (state) {
    return state.user
  }
}
