import * as Vue from 'vue';
import * as Vuex from 'vuex';
import {sync} from 'vuex-router-sync';
import {StoreOptions, MutationTree} from 'vuex';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    increment({commit}) {
      commit('increment');
    },
    decrement({commit}) {
      commit('decrement');
    }
  }
});

sync(store, router);

export default store;
