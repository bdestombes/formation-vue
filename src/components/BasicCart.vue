<template>
  <div
		class="hello"
	>
		<h3>
			{{ title }}
		</h3>

    <h4>
      TVA (en %) <input type="number" v-model="tva" />
    </h4>

    <div class="container ml-container">
      <basic-cart-line
        v-for="product in products"
        :key="product.label"
        :tva="tva"
        :price="product.price"
        :label="product.label"
        ref="cart-line"
        @cart-updated="update"
      />
    </div>

    <h3>TOTAL: {{ total }}</h3>
	</div>
</template>

<script>
import BasicCartLine from './BasicCartLine.vue';
import priceMixin from '../mixins/price';

export default {
  name: 'BasicCart',

  props: {
    title: String
  },

	components: {
    BasicCartLine
  },

  mixins: [
    priceMixin
  ],

	data: () => ({
    tva: 20,
		products: [
			{
				label: 'Lame de terrasse',
				price: 150,
        quantity: 0
			},
			{
				label: 'Placo BA13',
				price: 80,
        quantity: 0
			}
		]
	}),

	computed: {
		total() {
      let amount = 0;
      this.products.forEach(product => {
        amount += product.quantity * this.getPriceWithTva(product.price, this.tva);
      });
      return amount;
    }
	},

	methods: {
    increase(affectedProduct) {
      this.products = this.products.map(product => {
        if (affectedProduct.label === product.label) {
          product.quantity += 1;
        }
        return product;
      });
    },
    decrease(affectedProduct) {
      this.products = this.products.map(product => {
        if (affectedProduct.label === product.label) {
          if (product.quantity > 0) {
            product.quantity -= 1;
          }
        }
        return product;
      });
    },
    update() {
      this.products = this.$refs['cart-line'].map(line => {
        const {label, price, quantity} = line;
        return {
          label,
          price,
          quantity
        };
      });
    }
	}
}
</script>

<style scoped>

</style>
