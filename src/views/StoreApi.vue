<template>
  <div>
		<h1>Store Vuex + appels API</h1>

    <button
      type="button"
      @click="makeApiCall"
    >
      Make API call
    </button>

    <h3
      v-if="name && version"
    >
      {{ name }} | {{ version }}
    </h3>
	</div>
</template>

<script>
export default {
  name: 'StoreApi',

  components: {
    //
  },

  computed: {
    name() {
      return this.$store.state.app.name;
    },
    version() {
      return this.$store.state.app.version;
    }
  },

	data: () => ({
		//
	}),

	methods: {
    async makeApiCall() {
      return this.$store.dispatch('getAppData', {path: '/app.json'});
    }
	}
}
</script>

<style>

</style>
