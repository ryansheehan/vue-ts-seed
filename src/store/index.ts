import * as Vue from 'vue';
import * as Vuex from 'vuex';
import {StoreOptions, MutationTree} from 'vuex';

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

export default store;
