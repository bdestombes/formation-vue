import { getAppDataApi } from '../../api/app.api';

export default {
  state: {
    name: null,
    version: null
  },

  getters: {
    //
  },

  mutations: {
    setName(state, value) {
      state.name = value;
    },
    setVersion(state, value) {
      state.version = value;
    }
  },

  actions: {
    async getAppData(context, parameters) {
      return getAppDataApi(parameters).then(response => {
        if (response.status === 200 || response.status === 304) {
          context.commit('setName', response.data.name);
          context.commit('setVersion', response.data.version);
        }
      });
    }
  }
};
