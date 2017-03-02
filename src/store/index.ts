import Vue from 'vue';
import Vuex from 'vuex';
import {CounterModule} from './counter.store';

Vue.use(Vuex);

interface IRootState {

}

const store = new Vuex.Store<IRootState>({
  modules: {
    counter: new CounterModule<IRootState>()
  }
});


export default store;
