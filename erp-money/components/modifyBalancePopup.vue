<template>
  <b-modal
    :id="id"
    ref="modal"
    :title="title"
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        label="Amount"
        label-for="amount-input"
        invalid-feedback="Amount is required"
        :state="amountState"
      >
        <b-form-input
          id="amount-input"
          v-model="amount"
          type="number"
          step="0.01"
          :state="amountState"
          required
        />
        <div v-if="title === 'Payer'">
          Type achat <br/>
          <select class="form-select" v-model="selected">
            <option v-for="(item) in typesPaiement" :key="item.id">
              {{ item.type }}
            </option>
          </select>
          Produit <br/>
          <select class="form-select" v-model="selected">
            <option v-for="(item) in products['products']" :key="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ModifyBalancePopup',
  props: {
    title: {
      type: String,
      default: undefined
    },
    id: {
      type: String,
      default: undefined
    },
    negative: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('product', [
      'products'
    ])
  },
  created () {
    this.$store.dispatch('product/getProducts')
  },
  data () {
    return {
      amount: null,
      amountState: null,
      typesPaiement: [
        { id: 1, type: 'CB' },
        { id: 2, type: 'Espece' }
      ],
      produits: [
        { id: 1, nom: 'Produit 1' },
        { id: 2, nom: 'Produit 2' }
      ],
      fieldProduct: ['name']
    }
  },
  methods: {
    checkFormValidity () {
      const valid = this.$refs.form.checkValidity()
      this.amountState = valid
      return valid
    },
    resetModal () {
      this.amount = null
      this.amountState = null
    },
    handleOk (bvModalEvt) {
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },
    handleSubmit () {
      if (!this.checkFormValidity()) {
        return
      }
      const value = 10 // appelez api pour remplacer le 10 avec this.amount si negative = false ou avec this.amount * -1 si negative = true
      this.$emit('save', value)
      this.$nextTick(() => {
        this.$bvModal.hide(this.id)
      })
    }
  }
}
</script>
