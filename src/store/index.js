import { createStore } from 'vuex';
import app from './modules/app.module';
import wish from './modules/wish.module';

export default createStore({
  modules: {
    app,
    wish
  }
});
