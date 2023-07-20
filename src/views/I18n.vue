<template>
  <div>
		<h1>i18n - les traductions</h1>

    <header>
      <h2>
        {{ $t('header.title') }}
      </h2>

      <h3>
        {{ $t('header.sub.title') }}
      </h3>
    </header>

    <section>
      {{ $t('article.section1') }}
    </section>

    <br><br>

    <section
      v-html="$t('article.section2')"
    >
    </section>
	</div>
</template>

<script>
export default {
  name: 'i18n',

  components: {
    //
  },

  computed: {
    //
  },

	data: () => ({
		//
	}),

  created() {
    console.log(this.$t('lorem'));
  },

	methods: {

	}
}
</script>

<style>

</style>
