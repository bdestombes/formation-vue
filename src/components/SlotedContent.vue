<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <section>
      <slot name="content"></slot>
    </section>

    <footer>
      <slot name="footer"></slot>
    </footer>
	</div>
</template>

<script>
export default {
  name: 'SlotedContent',

  components: {
    //
  },

  computed: {
    //
  },

	data: () => ({

	}),

	methods: {

	}
}
</script>

<style>

</style>
