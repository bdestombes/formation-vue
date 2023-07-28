<template>
  <div>
		<h1>
      {{ message }}
    </h1>

    <ul>
      <li
        v-for="route in routes"
        :key="route.path"
        class="list-item"
      >
        <button
          type="button"
          @click="goTo(route.path)"
        >
          {{ route.title }}
        </button>
      </li>
    </ul>
	</div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    //
  },

	data: () => ({
		message: 'Démo Vue.js | Welcome !',
    routes: [
      {
        title: 'Les essentiels - Panier client basique',
        path: '/essentials'
      },
      {
        title: 'Les traductions',
        path: '/i18n'
      },
      {
        title: 'Les slots',
        path: '/slots'
      },
      {
        title: 'Les routes dynamiques (no param)',
        path: '/routing'
      },
      {
        title: 'Les routes dynamiques (correct param: id = 0)',
        path: '/routing/0'
      },
      {
        title: 'Les routes dynamiques (correct param: id = 1)',
        path: '/routing/1'
      },
      {
        title: 'Les routes dynamiques (correct param: id = 2)',
        path: '/routing/2'
      },
      {
        title: 'Les routes dynamiques (wrong param: id = 3)',
        path: '/routing/3'
      },
      {
        title: 'Navigation Guard',
        path: '/guard'
      },
      {
        title: 'Les appels API',
        path: '/api'
      },
      {
        title: 'Le store Vuex',
        path: '/store'
      },
      {
        title: 'Le store Vuex + les appels API',
        path: '/store/api'
      }
    ]
	}),

	methods: {
		goTo(path) {
      this.$router.push(path);
    }
	}
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin-left: 0;
  .list-item {
    padding: 16px;
  }
}
</style>
