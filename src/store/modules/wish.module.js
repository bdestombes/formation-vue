export default {
  state: {
    list: [
      'Rouleau de ruban adhésif',
      'Tournevis testeur de tension'
    ]
  },

  getters: {
    listAsParagraph(state) {
      return state.list.join(', ');
    }
  },

  mutations: {
    addWish(state, value) {
      state.list.push(value);
    },
    clearList(state) {
      state.list = [];
    },
    setList(state, value) {
      state.list = value;
    }
  },

  actions: {
    //
  }
};
