<template>
  <div id="app">
	<daohang></daohang>
    <router-view/>
	<dibu></dibu>
  </div>
</template>

<script>

import daohang from './components/Daohang.vue'
import dibu from './components/Dibu.vue'
	
export default {
  name: 'App',
  components:{
	  daohang,
	  dibu
  }
}
</script>

<style>
</style>
