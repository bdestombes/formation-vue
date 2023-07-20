<template>
  <div>
		<h1>Les slots</h1>

    <sloted-content>
      <template #header>
        Contenu du header
      </template>

      <template #content>
        Contenu principal
      </template>

      <template #footer>
        Contenu du footer
      </template>
    </sloted-content>
	</div>
</template>

<script>
import SlotedContent from '../components/SlotedContent.vue';

export default {
  name: 'Slots',

  components: {
    SlotedContent
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

<style lang="scss">

</style>
