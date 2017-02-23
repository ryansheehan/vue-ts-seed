import * as Vue from 'vue';
import App from './layout/app.layout.vue';
import router from './router';
import store from './store';


new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
