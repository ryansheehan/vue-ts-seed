import Vue = require('vue');
import App from './App.vue';
import router from './router';

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
