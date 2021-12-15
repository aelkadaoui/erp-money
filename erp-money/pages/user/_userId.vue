<template>
  <div class="container">
    <b-navbar type="light" variant="light">
      <b-navbar-brand to="/" tag="h1" class="mb-0">
        membre: {{ user.lastname }} {{ user.firstname }}
      </b-navbar-brand>
    </b-navbar>
    <div>
      <div class="userListLogo">
        <b-img class="avatar" src="../../static/logoUser.jpg" fluid alt="/" />
        <div class="transactionListContainer">
          <h4>
            Historique des transactions
          </h4>
          <b-table :fields="fieldsTransaction" :items="transactions['transactions']" class="list" responsive striped />
        </div>
      </div>
      <div class="information">
        <p class="informationItem">
          Solde de l'utilisateur : {{ user.balance }} €
        </p>
        <b-button v-b-modal.modal-add-money pill class="informationItem" variant="success">
          Ajouter de l'argent
        </b-button>
        <b-button v-b-modal.modal-remove-money pill variant="danger">
        Payer
        </b-button>
      </div>
    </div>
    <modify-balance-popup id="modal-add-money" title="Ajouter de l'argent" @save="modifyBalance($event)" />
    <modify-balance-popup id="modal-remove-money" title="Payer" :negative="true" @save="modifyBalance($event)" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import modifyBalancePopup from '~/components/modifyBalancePopup.vue'
export default {
  name: 'HomePage',
  components: { modifyBalancePopup },
  data () {
    return {
      fieldsTransaction: ['value', 'name', 'createdAt']
    }
  },
  computed: {
    id () {
      return this.$route.params.userId
    },
    ...mapState('user', [
      'user'
    ]),
    ...mapState('transaction', [
      'transactions'
    ])
  },
  created () {
    this.$store.dispatch('user/getUser', this.$route.params.userId)
    this.$store.dispatch('transaction/getTransactions')
  },
  methods: {
    modifyBalance (amount, type, produit) {
      this.$store.dispatch('user/updateBalanceUser', { id: this.$route.params.userId, solde: amount, typePaiement: type, produitId: produit.id })
    }
  }
}
</script>

<style>
 .container {
    width:100%;
  }

  .informationItem {
    margin-right: 4px;
  }

  .userListLogo {
    display: flex;
  }

  .transactionListContainer {
    margin-left: 90px;
    width: 100%;
    max-height: 250px;
  }

  .list {
    max-height: 250px;
  }

  .avatar {
    max-height: 250px;
    max-width: 250px;
  }

</style>
