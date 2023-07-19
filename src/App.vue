<template>
  <div>
    <div v-if="selectedCustomer.name">
      <h2>
        {{ `Bonjour ${selectedCustomer.name}` }}
      </h2>

      <button
        type="button"
        @click="resetCustomer"
      >
        Disconnect
      </button>

      <br><br>

      <router-link
        v-if="$route.path !== '/'"
        to="/"
      >
        Retour à l'accueil
      </router-link>

      <router-view />
    </div>

    <div
      v-else
    >
      <img src="/img/vue-js.png" alt="Vue.js logo" width="64" />

      <br><br>

			<select
				v-model="selectedCustomerId"
			>
				<option
					v-for="customer in customers"
					:key="customer.id"
					:value="customer.id"
				>
					{{ customer.name }}
				</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
  name: 'App',

  components: {
    //
  },

	data: () => ({
		customers: [
			{
				id: 0,
				name: 'Ch😜rles',
				hasLoyalty: false
			},
			{
				id: 1,
				name: 'K😁vin',
				hasLoyalty: false
			},
			{
				id: 2,
				name: 'Th😎o',
				hasLoyalty: false
			},
			{
				id: 3,
				name: 'B🙄ptiste',
				hasLoyalty: true
			}
		],
		selectedCustomerId: -1
	}),

  computed: {
    selectedCustomer() {
      if (this.selectedCustomerId > -1) {
        return this.customers.find(customer => {
          return customer.id === this.selectedCustomerId;
        });
      }
      return {};
    }
  },

	methods: {
		resetCustomer() {
      this.selectedCustomerId = -1;
		  this.selectedCustomer = {};
    }
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
