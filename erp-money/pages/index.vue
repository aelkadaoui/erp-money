<template>
  <div class="container">
    <b-navbar type="light" variant="light">
      <b-navbar-brand to="/" tag="h1" class="mb-0">
        Association
      </b-navbar-brand>
    </b-navbar>
    <div>
      <div class="userListLogo">
        <b-img src="../static/imageBde.PNG" fluid alt="/" />
        <div class="transactionListContainer">
          <h4>
            Historique des transactions
          </h4>
          <b-table class="list" striped hover responsive :items="items" />
        </div>
      </div>
      <div class="information">
        <p class="informationItem">
          Solde de l'association : {{ solde }} €
        </p>
        <b-button v-b-modal.modal-add-money pill class="informationItem" variant="success">
          Ajouter de l'argent
        </b-button>
        <b-button v-b-modal.modal-remove-money pill variant="danger">
          Retirer de l'argent
        </b-button>
      </div>
    </div>
    <div class="memberListContainer">
      <h4>Liste des membres</h4>
      <b-table class="list" :items="itemsUsers" :fields="fieldsUser" striped responsive>
        <template #cell(access_profile)="row">
          <b-button class="mr-2" size="sm" @click="openProfile(row)">
            Accéder au profil
          </b-button>
        </template>
      </b-table>
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
      fieldsUser: ['first_name', 'last_name', 'access_profile'],
      itemsUsers: [
        { id: 1, isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { id: 2, isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {
          id: 3,
          isActive: false,
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson'
        },
        { id: 4, isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
        { id: 5, isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { id: 6, isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {
          id: 7,
          isActive: false,
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson'
        },
        { id: 8, isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { id: 9, isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' }
      ]
    }
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

  .memberListContainer {
    margin-top: 20px;
  }
</style>
