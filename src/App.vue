<script setup>
import ChildVue from './components/Child.vue'

</script>

<template>
  <div>
  
<h1 >app vue</h1>
<button v-custom:click="send">gonder</button>
<!-- <button v-on:click="send">gonder</button> -->





  </div>
</template>

<style>
</style>

<script>
export default {
 data(){
  return{
  
  }
 },
methods:{
  send(){
  console.log("test");
 }
}
 
 
}
  

</script>

