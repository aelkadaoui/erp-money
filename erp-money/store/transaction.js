const config = {
  headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.nZ86hUWPdG43W6HVSGFy6DJnDVOZhx8a73LhQ3gIxY8' }
}

export const state = () => ({
  transactions: []
})

export const mutations = {
  setTransactions (state, transactions) {
    state.transactions = transactions
  }
}

export const actions = {
  async getTransactions ({ commit }) {
    const transactions = await this.$axios.$get('https://erp-back-api.jonathanj.fr/accounting_transactions', config)
    commit('setTransactions', transactions)
  }
}

export const getters = {
  transactions (state) {
    return state.transactions
  }
}
