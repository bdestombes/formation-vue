/* eslint-disable no-unused-vars */

import { createRouter, createWebHashHistory } from 'vue-router';
import ApiView from './views/Api.vue';
import EssentialsView from './views/Essentials.vue';
import HomeView from './views/Home.vue';
import RoutingView from './views/Routing.vue';
import StoreApiView from './views/StoreApi.vue';
import StoreView from './views/Store.vue';

const router = createRouter({
  history: createWebHashHistory('/'),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve({ el: to.hash });
        }, 500);
      });
    }
    if (savedPosition) {
      return savedPosition;
    }
    if (to.meta.noScroll && from.meta.noScroll) {
      return {};
    }
    return { top: 0 };
  },

  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { title: 'Accueil' }
    },
    {
      path: '/essentials',
      name: 'Essentials',
      component: EssentialsView,
      meta: { title: 'Les Essentiels' }
    },
    {
      path: '/routing/:id?',
      name: 'Routing',
      component: RoutingView,
      meta: { title: 'Les routes dynamiques' }
    },
    {
      path: '/api',
      name: 'API',
      component: ApiView,
      meta: { title: 'Les appels API' }
    },
    {
      path: '/store',
      name: 'Store',
      component: StoreView,
      meta: { title: 'Le store Vuex' }
    },
    {
      path: '/store/api',
      name: 'StoreApi',
      component: StoreApiView,
      meta: { title: 'Le store Vuex + les appels API' }
    }
  ],
});

router.afterEach((to, _from) => {
  const parent = to.matched.find((record) => record.meta.title);
  const parentTitle = parent ? parent.meta.title : null;
  document.title = to.meta.title || parentTitle || 'web-client';
});

export default router;