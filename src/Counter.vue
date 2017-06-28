<template>
  <div>
    <span v-on:click='MyLabel(false)'>{{msg}}</span>
    <mySpan></mySpan>
  </div>
</template>

<script>
  module.exports = {
  	name: 'counter',
  	mounted: function() {
      this.test();
  	},
  	data() {
  		return {
  			msg: 'CounterPage'
  		}
  	}
  }
</script>

<style type="text/css">
  
</style>