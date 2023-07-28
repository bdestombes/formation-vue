<template>
  <div>
		<h1>Store Vuex - Liste de souhaits</h1>

    <wish-list
      :title="message"
    />
	</div>
</template>

<script>
import WishList from '../components/WishList.vue';

export default {
  name: 'Store',

  components: {
    WishList
  },

  computed: {
    //
  },

	data: () => ({
		message: 'Initial message'
	}),

  created() {
    this.message = this.$store.state.message;
  },

	methods: {
    //
	}
}
</script>

<style>

</style>
