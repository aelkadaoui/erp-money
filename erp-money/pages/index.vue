<template>
  <div class="container">
    <div>
      <div class="userListLogo">
        <b-img src="../static/imageBde.PNG" fluid alt="/" />
        <div class="userListContainer">
          <h4>
            Liste des membres
          </h4>
          <b-table class="userList" :items="itemsUsers" :fields="fieldsUser" striped responsive>
            <template #cell(access_profile)="row">
              <b-button class="mr-2" size="sm" @click="row.toggleProfile">
                Accéder au profil
              </b-button>
            </template>
          </b-table>
        </div>
      </div>
      <div class="information">
        <p class="informationItem">
          Solde de l'association : {{ solde }} €
        </p>
        <b-button class="informationItem" variant="success">
          +
        </b-button>
        <b-button variant="danger">
          -
        </b-button>
      </div>
    </div>
    <div>
      <h4>Historique des transactions </h4>
      <b-table striped hover :items="items" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      solde: 14000,
      items: [
        { Montant: -40, type: 'Café', heure: '12h00' },
        { Montant: -300, type: 'Frigo', heure: '15h00' },
        { Montant: 400, type: 'Don', heure: '17h00' },
        { Montant: 38, type: 'Don', heure: '09h30' }
      ],
      fieldsUser: ['first_name', 'last_name', 'access_profile'],
      itemsUsers: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {
          isActive: false,
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson'
        },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {
          isActive: false,
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson'
        },
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {
          isActive: false,
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson'
        },
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {
          isActive: false,
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson'
        }
      ]
    }
  }
}
</script>

<style>
  .container {
    margin: 35px;
  }

  .information {
    display: flex;
  }

  .informationItem {
    margin-right: 4px;
  }

  .userListLogo {
    display: flex;
  }

  .userListContainer {
    margin-left: 90px;
    width: 100%;
    max-height: 250px;
  }

  .userList {
    max-height: 250px;
  }
</style>
