<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <ul>
      <mySpan v-if='isc'></mySpan>
      <li><span v-on:click='hideLabel'>Forum</span></li>
      <li><span v-on:click='addLabel'>Gitter Chat</span></li>
      <li><span v-on:click='todo'>awesome-vue</span></li>
    </ul>
    <h2>Ecosystem</h2>
    <router-link to="/Home">Go to Home</router-link>
    <router-link to="/Counter">Go to Counter</router-link>
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'app',
  mounted: function() {
    console.log('$route:' + this.$route.path);
  },
  methods: {
    todo: function() {
      this.test();
    },
    addLabel: function() {
      this.MyLabel(true);
    },
    hideLabel: function() {
      this.MyLabel(false);
    },
    fetchdata:function(){
      console.log('woca');
    }
  },
  watch: {
    '$route': 'fetchdata'
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isc:false
    }
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
