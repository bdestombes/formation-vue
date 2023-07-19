<template>
  <div>
		<h1>Store Vuex - Liste de souhaits</h1>

    <wish-list
      title="Votre liste de souhaits"
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
		//
	}),

	methods: {

	}
}
</script>

<style>

</style>
