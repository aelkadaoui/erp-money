<template>
  <div class="container">
    <b-navbar type="light" variant="light">
      <b-navbar-brand class="mb-0" tag="h1" to="/">
        Association
      </b-navbar-brand>
    </b-navbar>
    <div>
      <div class="userListLogo">
        <b-img alt="/" fluid src="../static/imageBde.PNG" />
        <div class="transactionListContainer">
          <h4>
            Historique des transactions
          </h4>
          <b-table :items="items" class="list" hover responsive striped />
        </div>
      </div>
      <div class="information">
        <p class="informationItem">
          Solde de l'association : {{ solde }} €
        </p>
        <b-button v-b-modal.modal-add-money class="informationItem" pill variant="success">
          Ajouter de l'argent
        </b-button>
        <b-button v-b-modal.modal-remove-money pill variant="danger">
          Retirer de l'argent
        </b-button>
      </div>
    </div>
    <div class="memberListContainer">
      <h4>Liste des membres</h4>
      <b-table :fields="fieldsUser" :items="users" class="list" responsive striped>
        <template #cell(access_profile)="row">
          <b-button class="mr-2" size="sm" @click="openProfile(row)">
            Accéder au profil
          </b-button>
        </template>
      </b-table>
    </div>
    <modify-balance-popup id="modal-add-money" title="Ajouter de l'argent" @save="modifyBalance($event)" />
    <modify-balance-popup
      id="modal-remove-money"
      :negative="true"
      title="Retirer de l'argent"
      @save="modifyBalance($event)"
    />
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
      fieldsUser: ['firstname', 'lastname', 'access_profile'],
      itemsUser: []
    }
  },
  computed: {
    ...mapState('user', [
      'users'
    ])
  },
  created () {
    this.$store.dispatch('user/getUsers')
  },

  methods: {
    modifyBalance (value) {
      this.solde = Number(this.solde) + Number(value)
    },
    openProfile (user) {
      this.$router.push('/user/' + user.item.id)
    }
  }
}
</script>

<style>
.container {
  width: 100%;
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

.memberListContainer {
  margin-top: 20px;
}
</style>
