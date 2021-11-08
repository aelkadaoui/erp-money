<template>
  <div class="container">
    <b-navbar type="light" variant="light">
      <b-navbar-brand to="/" tag="h1" class="mb-0">
        Association
      </b-navbar-brand>
    </b-navbar>
    <div>
      <div class="userListLogo">
        <b-img class="avatar" src="../../static/logoUser.jpg" fluid alt="/" />
        <div class="transactionListContainer">
          <h4>
            Historique des transactions
          </h4>
          <b-table class="list" striped hover responsive :items="items" />
        </div>
      </div>
      <div class="information">
        <p class="informationItem">
          Solde de l'utilisateur : {{ solde }} €
        </p>
        <b-button v-b-modal.modal-add-money pill class="informationItem" variant="success">
          Ajouter de l'argent
        </b-button>
        <b-button v-b-modal.modal-remove-money pill variant="danger">
          Retirer de l'argent
        </b-button>
      </div>
    </div>
    <modify-balance-popup id="modal-add-money" title="Ajouter de l'argent" @save="modifyBalance($event)" />
    <modify-balance-popup id="modal-remove-money" title="Retirer de l'argent" :negative="true" @save="modifyBalance($event)" />
  </div>
</template>

<script>
import modifyBalancePopup from '~/components/modifyBalancePopup.vue'
export default {
  name: 'HomePage',
  components: { modifyBalancePopup },
  data () {
    return {
      solde: 14000.00,
      items: [
        { Montant: -40, type: 'Café', heure: '12h00' },
        { Montant: -300, type: 'Frigo', heure: '15h00' },
        { Montant: 400, type: 'Don', heure: '17h00' },
        { Montant: 38, type: 'Don', heure: '09h30' },
        { Montant: -300, type: 'Frigo', heure: '15h00' },
        { Montant: 400, type: 'Don', heure: '17h00' },
        { Montant: 38, type: 'Don', heure: '09h30' },
        { Montant: -300, type: 'Frigo', heure: '15h00' },
        { Montant: 400, type: 'Don', heure: '17h00' },
        { Montant: 38, type: 'Don', heure: '09h30' }
      ],
      user: { id: 1, isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' }
    }
  },
  computed: {
    id () {
      return this.$route.params.userId
    }
  },
  methods: {
    modifyBalance (amount) {
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
