<template>
  <div class="ml-flexy">
    <div class="ml-flexy__col">
      {{ label }}
    </div>

    <div class="ml-flexy__col">
      {{ price }}€ HT | {{ taxedPrice }}€ HT
    </div>

    <div class="ml-flexy__col">
      <button
        type="button"
        @click="decrease"
      > - </button>
    </div>

    <div class="ml-flexy__col">
      <input
        type="text"
        :value="quantity"
      />
    </div>

    <div class="ml-flexy__col">
      <button
        type="button"
        @click="increase"
      > + </button>
    </div>

    <div class="ml-flexy__col">
      {{ total }}
    </div>
  </div>
</template>

<script>
import priceMixin from '../mixins/price';

export default {
  name: 'BasicCartLine',

  props: {
		tva: {
			type: Number,
			default: 20
		},
    price: {
      type: Number,
			default: 0
    },
    label: {
      type: String,
			default: ''
    }
  },

	components: {},

  mixins: [
    priceMixin
  ],

	data: () => ({
		quantity: 0
	}),

	computed: {
    total() {
      return this.quantity * this.taxedPrice;
    }
	},

	methods: {
    increase() {
      this.quantity += 1;
      this.$emit('cart-updated');
    },
    decrease() {
      if (this.quantity > 0) {
        this.quantity -= 1;
        this.$emit('cart-updated');
      }
    }
	}
}
</script>

<style scoped>

</style>
