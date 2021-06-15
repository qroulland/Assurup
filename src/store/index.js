import Vue from 'vue';
import Vuex from 'vuex';

import contracts from '@/store/modules/contracts';
import products from '@/store/modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contracts,
    products,
  },
});
