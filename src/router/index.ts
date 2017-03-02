import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'layout/hello.layout.vue';
import CounterLayout from 'layout/counter.layout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterLayout
    }
  ]
});
