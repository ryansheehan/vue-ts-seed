<template>
  <div>
    <Counter :value="value" :increment="increment" :decrement="decrement"></Counter>
  </div>
</template>

<script lang="ts">
import * as Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Counter from '../components/counter.component.vue';

@Component({
  components: {Counter}
})
export default class CounterLayout extends Vue {
  get value() {
    return this.$store.state.count
  }
  increment() {
    this.$store.dispatch('increment');
  }
  decrement() {
    this.$store.dispatch('decrement');
  }
}
</script>

<style scoped>

</style>
