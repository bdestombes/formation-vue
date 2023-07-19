<template>
  <div
		class="hello"
	>
    <h3>
			{{ title }}
		</h3>

    <form
      v-if="showForm"
    >
      <input type="text" class="text-input" v-model="newItem" />

      <button
        type="button"
        @click="addItem"
      >
        OK
      </button>
    </form>

    <br>

    <button
      type="button"
      @click="showForm = true"
    >
      Add an item
    </button>

    <br><br>

    <h4>Résumé de la liste</h4>

    <p>
      {{ $store.getters.listAsParagraph }}
    </p>

    <br><br>

    <h4>Détail de la liste</h4>

    <div>
      <p
        v-for="(wish, index) in wishlist"
        :key="index"
      >
        <input type="text" class="text-input" v-model="wishlist[index]" />

        <button
          type="button"
          @click="deleteItem(index)"
        >
          Delete
        </button>
      </p>
    </div>
	</div>
</template>

<script>
export default {
  name: 'WishList',

  props: {
    title: String
  },

	components: {
    //
  },

	data: () => ({
    showForm: false,
    newItem: ''
	}),

	computed: {
		wishlist: {
      get() {
        return this.$store.state.wish.list;
      },
      set(value) {
        this.$store.commit('setList', value);
      }
    }
	},

	methods: {
    addItem() {
      this.$store.commit('addWish', this.newItem);
      this.newItem = '';
      this.showForm = false;
    },
    deleteItem(index) {
      const wishlist = structuredClone(this.wishlist);
      wishlist.splice(index, 1);
      this.$store.commit('setList', wishlist);
    }
	}
}
</script>

<style scoped>
.text-input {
  border: 1px solid #777;
}
</style>
