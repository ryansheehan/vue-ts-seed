import * as Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Counter extends Vue {

  @Prop({required: true})
  value: number;

  @Prop({required: true})
  increment: ()=>void;

  @Prop({required: true})
  decrement: ()=>void;
}
