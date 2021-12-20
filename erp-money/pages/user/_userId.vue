<template>
  <div class="container">
    <b-navbar type="light" variant="light">
      <b-link to="/">
        <b-icon icon="arrow-left" />
      </b-link>
    </b-navbar>
    <div>
      <div>
        Membre : {{ user.lastname }} {{ user.firstname }}
      </div>
      <div class="userListLogo">
        <b-img class="avatar" src="../../static/logoUser.jpg" fluid alt="/" />
        <div class="transactionListContainer">
          <h4>
            Historique des transactions
          </h4>
          <b-table :fields="fieldsTransaction" :items="transactionsByUser" class="list" responsive striped />
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
    <modify-balance-popup id="modal-add-money" title="Ajouter de l'argent" @save="addAmount($event)" />
    <modify-balance-popup id="modal-remove-money" title="Payer" :negative="true" @save="modifyBalance($event)" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { BIcon, BIconArrowLeft } from 'bootstrap-vue'
import modifyBalancePopup from '~/components/modifyBalancePopup.vue'
export default {
  name: 'HomePage',
  components: {
    modifyBalancePopup,
    BIcon,
    // eslint-disable-next-line vue/no-unused-components
    BIconArrowLeft
  },
  data () {
    return {
      fieldsTransaction: [
        {
          key: 'name',
          label: 'Intitulé'
        },
        {
          key: 'payment_type',
          label: 'Type de paiement'
        },
        {
          key: 'quantity',
          label: 'Quantité'
        },
        {
          key: 'date',
          label: 'Date'
        },
        {
          key: 'price',
          label: 'Montant (€)'
        }
      ]
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
      'transactionsByUser'
    ])
  },
  created () {
    this.$store.dispatch('user/getUser', this.$route.params.userId)
    this.$store.dispatch('transaction/getTransactionsByUser', this.$route.params.userId)
  },
  methods: {
    async modifyBalance (transac) {
      await this.$store.dispatch('user/pay', {
        user_id: this.$route.params.userId,
        products: transac.products,
        payment: transac.payment
      })
      this.$store.dispatch('user/getUser', this.$route.params.userId)
      this.$store.dispatch('transaction/getTransactionsByUser', this.$route.params.userId)
    },
    async addAmount (newAmount) {
      await this.$store.dispatch('user/updateBalanceUser', {
        user_id: this.$route.params.userId,
        amount: newAmount.amount
      })
      this.$store.dispatch('user/getUser', this.$route.params.userId)
      this.$store.dispatch('transaction/getTransactionsByUser', this.$route.params.userId)
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
