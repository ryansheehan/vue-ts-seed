<template>
  <div id="app">
    <img src="../assets/logo.png">
    <div>
      <router-link :to="{ name: 'hello' }">Hello</router-link>
      <router-link :to="{ name: 'counter' }">Counter</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import * as Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
