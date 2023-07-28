import { createStore } from 'vuex';
import app from './modules/app.module';
import wish from './modules/wish.module';

export default createStore({
  state: {
    message: 'Votre liste de souhaits'
  },

  getters: {
    //
  },

  mutations: {
    setMessage(state, value) {
      state.message = value;
    }
  },

  actions: {
    //
  },

  modules: {
    app,
    wish
  }
});
