import { createApp } from 'vue';
import MozaicVue from '@mozaic-ds/vue-3';
import '@mozaic-ds/vue-3/dist/mozaic-vue.css';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(MozaicVue);

router.isReady().then(() => {
  app.mount('#app');
});
