<template>
  <div>
    <h1>Essentials - Panier client basique</h1>

		<div>
			<BasicCart
				title="Votre panier!"
			/>

      <!--
      <basic-cart
				title="Votre panier!"
			/>
      -->
		</div>
	</div>
</template>

<script>
import BasicCart from '../components/BasicCart.vue';

export default {
  name: 'Essentials',

  components: {
    BasicCart
  }
}
</script>

<style scoped>

</style>
