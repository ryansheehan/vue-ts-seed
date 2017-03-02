import Vue from 'vue';
import App from './layout/app.layout.vue';
import {sync} from 'vuex-router-sync';
import router from './router';
import store from './store';

sync(store, router);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
