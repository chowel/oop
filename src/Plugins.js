import myspan from './mySpan.vue'

import utils from './utils.js'

var MyPlugin = {
	install: function(Vue, options) {
		Vue.rem=utils.rem;
		Vue.prototype.doubleNumber = function(val) {
			if (typeof val === 'number') {
				return val * 2;
			} else if (!isNaN(Number(val))) {
				return Number(val) * 2;
			} else {
				return null
			}
		}
		Vue.GlobalMethod = function() {
			alert('todosomething');
		}
		Vue.mixin({
			methods: {
				test: function() {
					console.log("mixin test");
				}
			},
			components: {
				'mySpan': myspan
			},
		})
		var Profile = Vue.extend({
			template: '<p id="co">{{firstName}} {{lastName}} aka {{alias}}</p>',
			data: function() {
				return {
					firstName: 'Walter',
					lastName: 'White',
					alias: 'Heisenberg'
				}
			}
		})


		Vue.prototype.MyLabel = function(tf) {
			var c = document.getElementById('co');
			if (tf) {
				if (c) {
					return
				} else {
					var p = new Profile().$mount().$el;
					document.getElementById('app').appendChild(p);
				}
			} else {
				if (c) {
					c.remove();
				} else {
					return
				}
			}

		}

	}
}

export default MyPlugin