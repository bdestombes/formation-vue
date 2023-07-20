<template>
  <!-- Préférer un élément unique à l'intérieur de <template> au 1er niveau -->
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

      <!-- Pour les liens de l'app, éviter <a href="ma-route">, qui va forcer le navigateur à un refresh de page -->
      <!-- Préférer <router-link to="ma-route"> -->
      <router-link
        v-if="$route.path !== '/'"
        to="/"
      >
        Retour à l'accueil
      </router-link>

      <!-- Afficher le contenu en provenance des routes -->
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
				name: 'Ch😜rles'
			},
			{
				id: 1,
				name: 'K😁vin'
			},
			{
				id: 2,
				name: 'Th😎o'
			},
			{
				id: 3,
				name: 'B🙄ptiste'
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

  created() {
    console.info('# THIS object in Vue component (created)');
    console.log(this);
  },

	methods: {
		resetCustomer() {
      this.selectedCustomerId = -1;
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
