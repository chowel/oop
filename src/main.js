import Vue from 'vue'
import App from './App.vue'
import router from './RouteMap.js'

import plugin from './Plugins.js'
Vue.use(plugin);

router.beforeEach((to, from, next) => {
    console.log('Globalto:'+to.path);
    console.log('Globalfrom:'+from.path);
    next();
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
