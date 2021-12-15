import moment from 'moment'
const config = {
  headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.nZ86hUWPdG43W6HVSGFy6DJnDVOZhx8a73LhQ3gIxY8' }
}

export const state = () => ({
  transactions: [],
  transactionsByUser: []
})

export const mutations = {
  setTransactions (state, transactions) {
    state.transactions = transactions
  },
  setTransactionsByUser (state, transactions) {
    state.transactionsByUser = transactions
  }
}

export const actions = {
  async getTransactions ({ commit }) {
    const transactions = await this.$axios.$get('https://erp-back-api.jonathanj.fr/accounting_transactions', config)
    // eslint-disable-next-line no-return-assign
    transactions.transactions.map(transa => transa.createdAt = moment(transa.createdAt).locale('fr').format('LLLL'))
    commit('setTransactions', transactions.transactions)
  },
  async getTransactionsByUser ({ commit, dispatch }, idUser) {
    const transactions = await this.$axios.$get('https://erp-back-api.jonathanj.fr/accounting_transactions', config)
    const user = await dispatch('user/returnUser', idUser, { root: true })
    // eslint-disable-next-line no-return-assign
    transactions.transactions.map(transa => transa.createdAt = moment(transa.createdAt).locale('fr').format('LLLL'))
    commit('setTransactionsByUser', transactions.transactions.filter(transaction => transaction.account === user.lastname))
  }
}

export const getters = {
  transactions (state) {
    return state.transactions
  },
  transactionsByUser: state => (username) => {
    return state.transactions.find(transaction => transaction.account === username)
  }
}
