<template>
  <div>
		<h1>Appels API</h1>

    <h3>{{ message }}</h3>

    <button
      type="button"
      @click="getAppData"
    >
      Actualiser
    </button>
	</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Api',

  components: {
    //
  },

  computed: {
    message() {
      return `${this.name} - v${this.version}`;
    }
  },

  async created() {
    await this.getAppData();
  },

	data: () => ({
		name: '',
    version: ''
	}),

	methods: {
    async getAppData() {
      await axios.get('/app.json').then(response => {
        if (response.status === 200) {
          this.name = response.data.name;
          this.version = response.data.version;
        }
      });
    }
	}
}
</script>

<style>

</style>
