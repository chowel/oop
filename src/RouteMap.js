import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import HomePage from './Home.vue';
// import CounterPage from './Counter.vue';


export default new VueRouter({
	routes: [{
		path: '/Home',
		component: function(resolve) {
			require(['./Home.vue'], resolve)
		}
	}, {
		path: '/Counter',
		component: resolve => require(['./Counter.vue'], resolve)
	}]
})